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

Os três carrosséis foram liberados para redação pelo briefing. A Publicação 1
está aprovada editorial e factualmente em `v01`; as Publicações 2 e 3 estão
em `review` e `v01`. URL, CTAs e especificações visuais permanecem
como gates operacionais posteriores. URL e CTAs devem ser validados antes de
`scheduled`; especificações visuais devem ser confirmadas antes da composição
e da aprovação visual no estado `designed`.

## Pinned Post 01 v01 — approved

- **Content ID:** `pinned-post-01`
- **Status:** `approved`
- **Versão:** `v01`
- **Aprovação editorial:** Leonardo Brasil em `2026-08-02`
- **Aprovação factual:** Leonardo Brasil em `2026-08-02`
- **Próximo estado possível:** `designed`
- **Carrossel:** `01-campaigns/pinned-posts-inaugural/pinned-post-01/carousel.md`
- **Legenda:** `01-campaigns/pinned-posts-inaugural/pinned-post-01/caption.md`
- **Ficha de revisão:** `01-campaigns/pinned-posts-inaugural/pinned-post-01/review-sheet.md`

O conteúdo está liberado para design, sem aprovação visual concedida. CTA,
URL de destino, condição de crosspost, dimensões, safe zones, assets e exports
continuam sujeitos aos respectivos gates. A legenda principal permanece a
versão canônica de crosspost com 390 caracteres para Instagram, Facebook e
Threads; seu limite de 400 caracteres deve ser revalidado antes de
`scheduled`.

## Pinned Post 02 v01 — em review

- **Content ID:** `pinned-post-02`
- **Status:** `review`
- **Versão:** `v01`
- **Estrutura:** nove telas
- **Conteúdo central:** profissão e definição oficial preservada
- **Legenda canônica:** 320 caracteres
- **Aprovações:** nenhuma aprovação editorial, factual ou visual concedida
- **Carrossel:** `01-campaigns/pinned-posts-inaugural/pinned-post-02/carousel.md`
- **Legenda:** `01-campaigns/pinned-posts-inaugural/pinned-post-02/caption.md`
- **Ficha de revisão:** `01-campaigns/pinned-posts-inaugural/pinned-post-02/review-sheet.md`

## Pinned Post 03 v01 — em review

- **Content ID:** `pinned-post-03`
- **Status:** `review`
- **Versão:** `v01`
- **Estrutura:** nove telas
- **Conteúdo central:** duas jornadas preservadas separadamente
- **Legenda canônica:** 316 caracteres
- **Aprovações:** nenhuma aprovação editorial, factual ou visual concedida
- **Carrossel:** `01-campaigns/pinned-posts-inaugural/pinned-post-03/carousel.md`
- **Legenda:** `01-campaigns/pinned-posts-inaugural/pinned-post-03/caption.md`
- **Ficha de revisão:** `01-campaigns/pinned-posts-inaugural/pinned-post-03/review-sheet.md`

A sequência completa **mudança → profissão → caminhos** está registrada com a
Publicação 1 em `approved` e as Publicações 2 e 3 em `review`. CTA, URL,
condição de crosspost, design, assets e aprovação visual permanecem pendentes.
A regra de 400 caracteres deve ser confirmada novamente antes de `scheduled`.

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
