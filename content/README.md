# Sistema Editorial

## Finalidade

Esta estrutura organiza a criação, a revisão, o design, o agendamento e o
registro de conteúdos oficiais do projeto Arquiteto de Operações. Ela separa
referências permanentes, campanhas, modelos de produção, conteúdos
publicados, backlog, dados de performance e assets.

## Fundação Editorial v1.0.0

- **Status:** `approved`
- **Data de aprovação:** `2026-08-02`
- **Autoridade editorial:** Leonardo Brasil
- **Autoridade factual:** Leonardo Brasil

Os cinco arquivos abaixo formam a fonte canônica da Fundação Editorial:

- `00-foundations/brand-foundation.md`
- `00-foundations/voice-and-language.md`
- `00-foundations/editorial-architecture.md`
- `00-foundations/content-production-guide.md`
- `00-foundations/thesis-and-proof-library.md`

## Briefing da campanha inaugural v1.0.0

- **Status:** `approved`
- **Caminho canônico:** `01-campaigns/2026-08-02--pinned-posts-inaugural.md`
- **Data de aprovação:** `2026-08-02`
- **Autoridade editorial:** Leonardo Brasil
- **Autoridade factual:** Leonardo Brasil

Os três carrosséis estão liberados para redação, mas suas peças individuais
permanecem em `draft` e `v01`. Roteiros, legendas e assets ainda não estão
aprovados. URL, CTAs e especificações visuais permanecem como gates
operacionais posteriores: não bloqueiam a aprovação editorial. URL e CTAs
devem ser validados antes de `scheduled`; especificações visuais devem ser
confirmadas antes da composição e da aprovação visual no estado `designed`.

## Estrutura

| Pasta | Finalidade |
| --- | --- |
| `00-foundations/` | Referências editoriais estáveis e aprovadas. |
| `01-campaigns/` | Briefs, planos e registros de campanhas. |
| `02-templates/` | Modelos reutilizáveis para produção e revisão. |
| `03-published/` | Conteúdos que chegaram ao estado `published`. |
| `04-backlog/` | Ideias e conteúdos ainda não priorizados. |
| `05-performance/` | Registros de resultados, aprendizados e revisões. |
| `assets/` | Imagens, vídeos, áudios, exports e outros arquivos vinculados ao conteúdo. |

## Fonte de verdade

Este repositório, especialmente a pasta `content/`, é a fonte de verdade
editorial oficial. Decisões, textos aprovados, versões, referências de design
e registros de publicação devem ser refletidos aqui.

Conversas, documentos de trabalho, arquivos de design e mensagens em outras
ferramentas são insumos ou etapas do fluxo. Eles não substituem o registro
versionado neste repositório. Quando houver divergência, o conteúdo registrado
na `main` deve ser verificado antes de qualquer publicação ou adaptação.

## Fluxo entre ChatGPT, Work, Claude Design e Codex

| Etapa | Ambiente | Saída esperada |
| --- | --- | --- |
| Explorar e estruturar | ChatGPT | Ideias, teses, brief inicial e rascunhos. |
| Contextualizar e coordenar | Work | Contexto do projeto, decisões, prioridades e handoffs. |
| Transformar em direção visual | Claude Design | Composição, direção visual, adaptações e assets de design. |
| Registrar e operacionalizar | Codex | Arquivos no repositório, validação, versionamento e atualização de estado. |

O fluxo recomendado é: ChatGPT produz o ponto de partida; Work consolida o
contexto e a decisão; Claude Design trabalha a camada visual após a aprovação
editorial; Codex registra os artefatos, aplica a convenção do repositório,
valida a entrega e prepara o próximo estado. Qualquer alteração relevante no
texto depois do design retorna para revisão editorial e gera uma nova versão.

## Estados de um conteúdo

Os estados oficiais são:

`draft` → `review` → `approved` → `designed` → `scheduled` → `published`

| Estado | Significado |
| --- | --- |
| `draft` | Conteúdo em elaboração, sem revisão concluída. |
| `review` | Conteúdo enviado para revisão editorial. |
| `approved` | Texto aprovado para seguir para design ou publicação compatível. |
| `designed` | Versão visual produzida e vinculada ao conteúdo. |
| `scheduled` | Canal, data e horário de publicação definidos. |
| `published` | Conteúdo publicado no canal indicado. |

O estado atual deve ser registrado nos metadados ou no cabeçalho do arquivo.
Uma revisão de conteúdo publicado deve preservar o histórico e iniciar uma
nova versão no estado adequado.

## Convenção de nomes

- Use minúsculas, ASCII quando possível, palavras separadas por hífen e
  extensão `.md` para documentos editoriais.
- Use datas no formato ISO `YYYY-MM-DD` quando a data fizer parte do nome.
- Para peças de conteúdo, prefira
  `YYYY-MM-DD--canal--slug--vNN.md`.
- Para campanhas, prefira
  `YYYY-MM-DD--campaign-slug.md`.
- Mantenha os nomes fixos dos fundamentos e modelos já definidos neste
  diretório.
- Nomeie assets com o identificador da peça e a função do arquivo, por
  exemplo: `content-id--cover.png` ou `content-id--video-final.mp4`.
- Não use espaços, acentos, caracteres especiais ou nomes genéricos como
  `final-final`.

## Política de versionamento

- O Git é o registro do histórico editorial e cada alteração relevante deve
  ser feita em um commit identificável.
- A versão inicial de uma peça é `v01`; revisões substanciais incrementam o
  número (`v02`, `v03`...).
- Correções pequenas podem permanecer na mesma versão quando não alterarem a
  tese, a estrutura ou o significado da peça, mas devem aparecer no histórico
  do Git.
- Conteúdo aprovado, desenhado, agendado ou publicado não deve ser sobrescrito
  sem preservar seu histórico e registrar a razão da alteração.
- Commits devem ser focados, usar mensagens claras e não misturar conteúdo
  editorial com mudanças não relacionadas.
- O estado e a versão devem acompanhar a peça; a publicação só deve apontar
  para um arquivo validado e rastreável.
