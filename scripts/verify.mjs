import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { dirname, extname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const errors = [];
const checked = new Set();

function display(file) {
  return relative(root, file).replaceAll('\\', '/');
}

function fail(message) {
  errors.push(message);
}

function readUtf8(file) {
  const bytes = readFileSync(file);
  try {
    const text = new TextDecoder('utf-8', { fatal: true }).decode(bytes);
    checked.add(file);
    if (/[ÃÂ�]/u.test(text)) fail(`${display(file)}: possible mojibake`);
    return text;
  } catch {
    fail(`${display(file)}: invalid UTF-8`);
    return '';
  }
}

function walk(directory) {
  const files = [];
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    if (entry.name === '.git' || entry.name === 'node_modules' || entry.name === 'graphify-out') continue;
    const file = join(directory, entry.name);
    if (entry.isDirectory()) files.push(...walk(file));
    else files.push(file);
  }
  return files;
}

function checkLocalReferences(file, html) {
  const attributes = [...html.matchAll(/\b(?:href|src)\s*=\s*["']([^"']+)["']/giu)];
  for (const [, value] of attributes) {
    if (!value || value.startsWith('#') || /^(?:https?:|mailto:|data:|javascript:)/iu.test(value)) continue;
    const target = value.split('#')[0].split('?')[0];
    if (!target) continue;
    const resolved = resolve(dirname(file), target);
    if (!existsSync(resolved)) fail(`${display(file)}: broken local reference ${value}`);
  }
}

function checkAnchors(file, html) {
  const ids = new Set([...html.matchAll(/\bid\s*=\s*["']([^"']+)["']/giu)].map(([, id]) => id));
  const duplicateIds = [...html.matchAll(/\bid\s*=\s*["']([^"']+)["']/giu)].map(([, id]) => id)
    .filter((id, index, all) => all.indexOf(id) !== index);
  for (const id of new Set(duplicateIds)) fail(`${display(file)}: duplicate id ${id}`);
  for (const [, href] of html.matchAll(/\bhref\s*=\s*["']#([^"']+)["']/giu)) {
    if (!ids.has(href)) fail(`${display(file)}: broken anchor #${href}`);
  }
}

function checkHtml(file, html, requiresFavicon) {
  if (!/^<!doctype html>/iu.test(html.trim())) fail(`${display(file)}: missing HTML doctype`);
  if (!/<html\b[^>]*\blang=["']pt-BR["']/iu.test(html)) fail(`${display(file)}: missing lang=pt-BR`);
  if (!/<meta\b[^>]*charset=["']utf-8["']/iu.test(html)) fail(`${display(file)}: missing UTF-8 charset`);
  if (requiresFavicon && !/<link\b[^>]*rel=["']icon["'][^>]*href=["']assets\/favicon\.svg["']/iu.test(html)) {
    fail(`${display(file)}: missing official favicon reference`);
  }
  const images = [...html.matchAll(/<img\b[^>]*>/giu)].map(([tag]) => tag);
  for (const tag of images) {
    if (!/\balt\s*=/iu.test(tag)) fail(`${display(file)}: image without alt attribute`);
  }
  const structuralHtml = html.replace(/<div\b[^>]*class=["'][^"']*type-sample[^"']*["'][^>]*>[\s\S]*?<\/div>/giu, '');
  const h1Count = (structuralHtml.match(/<h1\b/giu) || []).length;
  if (h1Count !== 1) fail(`${display(file)}: expected one h1, found ${h1Count}`);
  checkLocalReferences(file, html);
  checkAnchors(file, html);
}

function checkCss(file, css) {
  const stripped = css.replace(/\/\*[\s\S]*?\*\//gu, '').replace(/(['"])(?:\\.|(?!\1).)*\1/gu, '');
  if ((stripped.match(/\{/gu) || []).length !== (stripped.match(/\}/gu) || []).length) fail(`${display(file)}: unbalanced CSS braces`);
  if ((stripped.match(/\(/gu) || []).length !== (stripped.match(/\)/gu) || []).length) fail(`${display(file)}: unbalanced CSS parentheses`);
}

function checkSvgXml(svgDirectory) {
  const command = `$files=Get-ChildItem -LiteralPath '${svgDirectory.replaceAll("'", "''")}' -Recurse -Filter *.svg; foreach($file in $files){[xml](Get-Content -LiteralPath $file.FullName -Raw -Encoding UTF8)|Out-Null}`;
  const result = process.platform === 'win32'
    ? spawnSync('powershell.exe', ['-NoProfile', '-NonInteractive', '-Command', command], { encoding: 'utf8' })
    : spawnSync('python3', ['-c', 'import pathlib, sys, xml.etree.ElementTree as ET; [ET.parse(p) for p in pathlib.Path(sys.argv[1]).rglob("*.svg")]', svgDirectory], { encoding: 'utf8', env: process.env, input: undefined });
  if (result.status !== 0) fail(`SVG XML validation failed${result.stderr ? `: ${result.stderr.trim()}` : ''}`);
}

const allFiles = walk(root);
const textFiles = allFiles.filter(file => ['.html', '.css', '.js', '.json', '.md', '.svg', '.toml'].includes(extname(file).toLowerCase()));
for (const file of textFiles) readUtf8(file);

const htmlPages = ['index.html', 'admin.html', 'privacy.html', 'styleguide.html'];
for (const name of htmlPages) {
  const file = join(root, name);
  if (!existsSync(file)) fail(`missing page ${name}`);
  else checkHtml(file, readUtf8(file), true);
}

const technicalPage = join(root, 'assets', 'brand', 'h5-2-a', 'h5-2-a-final-technical-finish.html');
if (existsSync(technicalPage)) checkLocalReferences(technicalPage, readUtf8(technicalPage));
else fail('missing H5.2-A technical page');

const styles = join(root, 'styles.css');
if (existsSync(styles)) checkCss(styles, readUtf8(styles));

for (const file of [join(root, 'config.js'), join(root, 'script.js')]) {
  const result = spawnSync(process.execPath, ['--check', file], { encoding: 'utf8' });
  if (result.status !== 0) fail(`${display(file)}: JavaScript syntax error${result.stderr ? `: ${result.stderr.trim()}` : ''}`);
}

for (const name of ['tokens.json', 'data/form-fields.json']) {
  const file = join(root, name);
  try { JSON.parse(readUtf8(file)); } catch { fail(`${name}: invalid JSON`); }
}

const svgDirectory = join(root, 'assets');
checkSvgXml(svgDirectory);

const canonical = join(root, 'assets', 'brand', 'h5-2-a');
const requiredCanonical = [
  'h5-2-a-favicon-16.svg',
  'h5-2-a-monochrome.svg',
  'h5-2-a-optical-16-negative.svg',
  'h5-2-a-optical-16-positive.svg',
  'h5-2-a-optical-24-negative.svg',
  'h5-2-a-optical-24-positive.svg',
  'h5-2-a-primary-negative.svg',
  'h5-2-a-primary-positive.svg'
];
for (const name of requiredCanonical) {
  const file = join(canonical, name);
  if (!existsSync(file)) fail(`missing canonical asset ${display(file)}`);
}

const favicon = readUtf8(join(root, 'assets', 'favicon.svg'));
if (!/\bwidth=["']16["'][^>]*\bheight=["']16["']/iu.test(favicon)) fail('favicon.svg is not 16x16');
for (const name of ['h5-2-a-optical-16-positive.svg', 'h5-2-a-optical-16-negative.svg']) {
  const content = readUtf8(join(canonical, name));
  if (!/\bwidth=["']16["'][^>]*\bheight=["']16["']/iu.test(content)) fail(`${name} is not 16x16`);
}
for (const name of ['h5-2-a-optical-24-positive.svg', 'h5-2-a-optical-24-negative.svg']) {
  const content = readUtf8(join(canonical, name));
  if (!/\bwidth=["']24["'][^>]*\bheight=["']24["']/iu.test(content)) fail(`${name} is not 24x24`);
}

const tokens = JSON.parse(readUtf8(join(root, 'tokens.json')));
if (tokens.meta?.version !== '0.2.0') fail('tokens.json: expected Design System version 0.2.0');
if (tokens.meta?.symbolStatus !== 'official') fail('tokens.json: H5.2-A is not marked official');

for (const file of allFiles.filter(file => !file.includes(`${join(root, '.git')}`) && display(file) !== 'scripts/verify.mjs')) {
  if (['README.md', 'DESIGN_SYSTEM.md', 'CHANGELOG.md'].includes(display(file))) continue;
  const content = readUtf8(file);
  if (/M19 12|M12 19|M27 18\.5|M18\.5 27/iu.test(content)) fail(`${display(file)}: provisional symbol geometry reference`);
}

if (errors.length) {
  console.error(`Verification failed with ${errors.length} issue(s):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`Verification passed: ${checked.size} UTF-8 text files, ${allFiles.length} repository files inspected.`);
