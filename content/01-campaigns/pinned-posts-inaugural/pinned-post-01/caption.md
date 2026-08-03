---
status: approved
version: v02
previous_version: v01
review_started_at: 2026-08-02
review_basis: auditoria editorial, factual e operacional concluída sem bloqueadores
approved_by: Leonardo Brasil
approval_basis: auditoria editorial e factual final concluída sem bloqueadores
revision_approved_by: Leonardo Brasil
revision_approved_at: 2026-08-03
revision_reason: localização da pontuação para português brasileiro
revision_scope: remoção de travessão usado como conector retórico
content_id: pinned-post-01
campaign_id: pinned-posts-inaugural
sequence_position: 1
title: "Uma nova profissão está emergindo"
channel: Instagram
format: carousel
artifact_type: caption
journey: bridge
content_role: manifesto
canonical_caption: caption_crosspost_400
claims:
  - claim_id: pinned-01-claim-title
    claim_type: institutional_thesis
    claim_text: "Uma nova profissão está emergindo."
  - claim_id: clm-p01-001
    claim_type: institutional_thesis
    claim_text: "Uma nova capacidade profissional está emergindo."
CTA: "Conheça a profissão."
CTA_status: previsto_pendente_validacao_operacional
destination: "https://leonardobrasil.com.br/arquiteto-de-operacoes"
destination_status: previsto_pendente_validacao_operacional
operational_rule_status: verified_for_current_workflow
operational_rule_verified_at: 2026-08-02
editorial_approver: Leonardo Brasil
factual_approver: Leonardo Brasil
editorial_approved_at: 2026-08-02
factual_approved_at: 2026-08-02
---

# Legendas — Uma nova profissão está emergindo

## Claims estruturados e limites factuais

- `pinned-01-claim-title` e `clm-p01-001` são teses institucionais independentes.
- Um claim não constitui evidência empírica do outro.
- Nenhum dos claims afirma novidade histórica comprovada, reconhecimento jurídico, reconhecimento acadêmico, consenso de mercado, demanda quantificada ou validação externa.

## 1. `caption_crosspost_400`

Legenda principal e canônica para publicação simultânea no fluxo atual.

```yaml
caption_id: caption_crosspost_400
canonical: true
character_limit_total: 400
character_count_total: 389
character_count_body: 389
character_count_hashtags: 0
hashtags_included: false
crosspost_targets:
  - Instagram
  - Facebook
  - Threads
operational_rule_status: verified_for_current_workflow
operational_rule_verified_at: 2026-08-02
CTA_status: previsto_pendente_validacao_operacional
destination: "https://leonardobrasil.com.br/arquiteto-de-operacoes"
destination_status: previsto_pendente_validacao_operacional
destination_included: false
```

### Texto literal publicável

```text
Uma nova profissão está emergindo. Esta é uma tese institucional, não um fato comprovado.

De forma independente, uma nova capacidade profissional está emergindo: integrar pessoas, processos, dados, tecnologia e IA numa operação.

Sou Leonardo Brasil, fundador e principal voz desta construção. Na próxima publicação, apresento a profissão que nomeia essa capacidade.

Conheça a profissão.
```

### Registro editorial e operacional

- O texto complementa o carrossel e funciona autonomamente no Instagram, Facebook e Threads.
- A redação preserva a independência dos dois claims, mantém ambos como teses institucionais e não converte a emergência da profissão em fato comprovado.
- A referência à próxima publicação preserva a progressão **mudança → profissão → caminhos**, sem antecipar a definição completa da profissão ou as duas jornadas.
- O CTA integra o texto literal, mas seu status permanece `previsto_pendente_validacao_operacional` até nova validação antes de `scheduled`.
- O destino previsto não integra o texto publicável e permanece `previsto_pendente_validacao_operacional`.
- Não há hashtags. Texto e hashtags devem ser contados conjuntamente caso isso mude; nesta versão, `character_count_body` é igual a `character_count_total`.
- A regra de 400 caracteres é uma condição operacional verificada em 2026-08-02 para o fluxo atual desta campanha, não um limite universal ou permanente do Instagram, Facebook ou Threads.

## 2. `caption_instagram_extended`

Versão longa opcional. Não é a legenda principal.

```yaml
caption_id: caption_instagram_extended
canonical: false
usage: somente quando a publicação simultânea for deliberadamente desativada
character_count_total: 788
hashtags_included: false
destination_included: false
status: approved
version: v01
```

### Texto literal publicável

```text
Este carrossel inaugura duas teses institucionais independentes: uma nova profissão está emergindo e uma nova capacidade profissional está emergindo.

Elas não constituem evidência empírica uma da outra. Também não afirmam novidade histórica comprovada, reconhecimento jurídico ou acadêmico, consenso de mercado, demanda quantificada ou validação externa.

A leitura proposta observa uma capacidade integrada de conectar pessoas, processos, dados, tecnologia e inteligência artificial como partes de uma operação. Leonardo Brasil é o fundador e a principal voz dessa construção, não sua validação externa.

Esta publicação apresenta a mudança. A próxima apresenta a profissão que nomeia essa capacidade, sem antecipar aqui sua definição completa ou as duas jornadas.

Conheça a profissão.
```

### Condição de uso

- Preserva os mesmos claims, sua independência e seus limites factuais.
- Complementa o carrossel sem repeti-lo integralmente e prepara a publicação 2.
- O CTA previsto continua pendente de validação operacional.
- A URL prevista não foi inserida e continua pendente de validação operacional.
- Seu uso exige a desativação deliberada da publicação simultânea.

## 3. `caption_micro`

Versão de apoio. Não substitui automaticamente `caption_crosspost_400`.

```yaml
caption_id: caption_micro
canonical: false
character_minimum: 120
character_maximum: 180
character_count_total: 169
hashtags_included: false
destination_included: false
usage: chamada curta, story ou distribuição auxiliar
status: approved
version: v01
```

### Texto literal publicável

```text
Como teses institucionais independentes, uma nova profissão está emergindo e uma nova capacidade profissional está emergindo. A próxima publicação apresenta a profissão.
```

## Método de contagem

- Somente o conteúdo literal dentro de cada bloco `text` foi contado.
- Cada letra, espaço, quebra de linha e sinal de pontuação conta como um caractere.
- Títulos, metadados, comentários Markdown, cercas de código e a quebra técnica posterior ao texto não entram na contagem.
- Não há emojis, URLs ou hashtags nos três textos publicáveis.
- As contagens foram refeitas após a redação final.
