const config = window.ADO_CONFIG || window.AO_CONFIG || {};
const header = document.querySelector('.site-header');
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-primary');
const modal = document.getElementById('interest-modal');
const form = document.getElementById('interest-form');
const professionalFields = document.querySelector('.professional-fields');
const companyFields = document.querySelector('.company-fields');
const modalTitle = document.getElementById('modal-title');
const successMessage = document.getElementById('success-message');
let currentType = 'professional';

function track(eventName, payload = {}) {
  if (!config.analytics) return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: eventName, ...payload });
  console.info('[ADO analytics]', eventName, payload);
}

window.addEventListener('scroll', () => {
  if (header) header.dataset.elevated = window.scrollY > 8 ? 'true' : 'false';
});

menuToggle?.addEventListener('click', () => {
  const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!expanded));
  nav?.classList.toggle('open', !expanded);
});

nav?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  });
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

function showStep(step) {
  document.querySelectorAll('.form-step').forEach(el => el.classList.remove('active'));
  document.querySelector(`.form-step[data-step="${step}"]`)?.classList.add('active');
}

function openInterestModal(type) {
  currentType = type || 'professional';
  form?.reset();
  showStep(1);

  const isProfessional = currentType === 'professional';
  if (professionalFields) professionalFields.style.display = isProfessional ? 'block' : 'none';
  if (companyFields) companyFields.style.display = isProfessional ? 'none' : 'block';

  if (modalTitle) {
    modalTitle.textContent = isProfessional
      ? 'Quero me tornar Arquiteto de Operações'
      : 'Minha empresa precisa de Arquitetura Operacional';
  }

  document.body.classList.add('modal-open');
  modal?.showModal();
  track('form_opened', { type: currentType });
}

document.querySelectorAll('.open-modal').forEach(button => {
  button.addEventListener('click', () => openInterestModal(button.dataset.form));
});

document.querySelector('.next-step')?.addEventListener('click', () => {
  const firstStep = document.querySelector('.form-step[data-step="1"]');
  const requiredFields = [...firstStep.querySelectorAll('[required]')];
  const valid = requiredFields.every(field => field.reportValidity());
  if (valid) {
    showStep(2);
    track('form_step_completed', { type: currentType, step: 1 });
  }
});

document.querySelector('.previous-step')?.addEventListener('click', () => showStep(1));
document.querySelector('.modal-close')?.addEventListener('click', () => modal?.close());
document.querySelector('.close-success')?.addEventListener('click', () => modal?.close());

modal?.addEventListener('close', () => {
  document.body.classList.remove('modal-open');
});

async function persistSubmission(data) {
  if (config.mode === 'production' && config.endpoint) {
    const response = await fetch(config.endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    if (!response.ok) throw new Error(`Falha no envio: ${response.status}`);
    return { mode: 'production' };
  }

  const storageKey = config.storageKey || 'ado_interesses_v011';
  const saved = JSON.parse(localStorage.getItem(storageKey) || '[]');
  saved.push(data);
  localStorage.setItem(storageKey, JSON.stringify(saved));
  return { mode: 'demo' };
}

form?.addEventListener('submit', async (event) => {
  event.preventDefault();
  if (!form.reportValidity()) return;

  const submitButton = form.querySelector('button[type="submit"]');
  submitButton.disabled = true;
  submitButton.textContent = 'Enviando...';

  const data = Object.fromEntries(new FormData(form).entries());
  data.tipo = currentType;
  data.criado_em = new Date().toISOString();
  data.origem = 'arquiteto_operacoes_landing';
  data.contexto_marca = 'categoria_profissional';
  data.versao_marca = config.brandVersion || '0.2.0';
  data.url = window.location.href;
  data.utm_source = new URLSearchParams(window.location.search).get('utm_source') || '';
  data.utm_medium = new URLSearchParams(window.location.search).get('utm_medium') || '';
  data.utm_campaign = new URLSearchParams(window.location.search).get('utm_campaign') || '';

  try {
    const result = await persistSubmission(data);
    successMessage.textContent = result.mode === 'production'
      ? 'Recebemos suas informações. O próximo passo será definido após a análise do contexto enviado.'
      : 'O registro foi salvo localmente neste navegador. Abra “Respostas locais” no rodapé para visualizar e exportar os dados de demonstração.';
    showStep(3);
    track('form_submitted', { type: currentType, mode: result.mode });
  } catch (error) {
    console.error(error);
    alert('Não foi possível enviar agora. Revise a configuração da API ou tente novamente.');
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = 'Enviar interesse';
  }
});

track('page_view', { path: window.location.pathname });
