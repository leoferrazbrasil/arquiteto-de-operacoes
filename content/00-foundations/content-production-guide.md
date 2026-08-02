status: approved
version: 1.0.0
source: projeto Arquiteto de Operações — Fábrica de Conteúdo
revision_basis: auditoria final da Fundação Editorial v0.2.0
approved_by: Leonardo Brasil
editorial_approver: Leonardo Brasil
factual_approver: Leonardo Brasil
editorial_approved_at: 2026-08-02
factual_approved_at: 2026-08-02
promotion_basis: auditoria final aprovada da Fundação Editorial v0.3.0

# Content Production Guide

## 1. Função deste documento

Este guia padroniza briefing, redação, revisão, aprovação, design, agendamento e registro dos conteúdos oficiais de Arquiteto de Operações.

Ele não autoriza publicação, alteração de fontes, commit, push ou deploy. A Fundação Editorial está em `approved` v1.0.0 e a campanha inaugural está liberada para redação.

## 2. Princípios obrigatórios

Todo conteúdo deve:

1. respeitar a hierarquia mudança → profissão → disciplina → resultado → fundador;
2. preservar literalmente a definição oficial quando rotulada como tal;
3. manter Arquiteto de Operações como profissão, Arquitetura Operacional como disciplina e Operação Previsível como resultado;
4. tratar tecnologia, software, automação e IA como dimensões transversais da arquitetura;
5. usar a taxonomia canônica para cada afirmação;
6. separar afirmações, argumentos, analogias, objeções, respostas e evidências;
7. não inventar pesquisa, estatística, cliente, caso ou resultado;
8. escolher jornada profissional, empresarial ou conteúdo-ponte;
9. manter coerência entre texto, visual, CTA e destino;
10. respeitar o Design System Fundador v0.2.0 e o símbolo H5.2-A;
11. impedir que propostas apareçam como fatos ou decisões aprovadas;
12. registrar as autoridades editorial e factual antes de `approved` e a autoridade visual antes de `designed`.

## 3. Taxonomia operacional

### 3.1 Tipos de afirmação

| Nome editorial | Valor de metadado | Requisito |
| --- | --- | --- |
| definição oficial | `official_definition` | Literalidade quando apresentada como oficial |
| fato documentado | `documented_fact` | Fonte ou evidência verificável |
| tese institucional | `institutional_thesis` | Argumentos e distinção de comprovação factual |
| hipótese | `hypothesis` | Condição de teste e incerteza explícita |
| opinião fundadora | `founder_opinion` | Autoria de Leonardo Brasil e contexto |
| proposta | `proposal` | Estado não aprovado explícito |
| recomendação | `recommendation` | Fundamento, condição e limite |

### 3.2 Elementos auxiliares

- **argumento:** estrutura que sustenta uma afirmação;
- **analogia:** recurso explicativo;
- **objeção:** questionamento registrado;
- **resposta:** tratamento editorial da objeção;
- **prova:** evidência vinculada por `evidence_id`.

Nenhum desses cinco elementos pode ser usado como `claim_type`.

### 3.3 Múltiplas afirmações

Uma peça pode conter várias afirmações de tipos diferentes. Cada uma deve possuir registro próprio em `claims`, com fontes, evidências e validação independentes. O fato de a afirmação principal ser uma definição oficial não transforma as demais afirmações da peça em definições.

### 3.4 Classificação interna e linguagem pública

A classificação é obrigatória no registro interno. O texto público não precisa expor rótulos mecânicos, mas precisa comunicar corretamente o grau de certeza. Tese, hipótese e opinião não podem ser redigidas como fatos comprovados.

## 4. Brief mínimo

Nenhuma peça deve entrar em redação sem registrar:

- `content_id` estável, sem versão;
- `version` independente;
- `status`;
- título de trabalho;
- objetivo;
- `journey`: `professional`, `company` ou `bridge`;
- `audience`;
- `pillar`;
- `consciousness_stage` de C0 a C5;
- `content_role`;
- `channel`;
- `format`;
- afirmações previstas, com `claim_id`, `claim_type` e `claim_text`;
- fontes disponíveis;
- evidências disponíveis ou limite explícito;
- `CTA`;
- `destination`;
- restrições legais, editoriais e de marca;
- requisitos visuais conhecidos;
- requisitos visuais ainda pendentes de validação;
- autoridades editorial, factual e visual previstas.

### 4.1 Brief mínimo da campanha inaugural

Para `pinned-posts-inaugural`, registrar também:

```yaml
campaign_id: pinned-posts-inaugural
channel: Instagram
format: carrossel
planned_slide_count: "8 a 10 telas, ajustável no briefing sem alterar a fundação"
```

Essas definições são globais e aplicam-se às três publicações fixadas.

- campanha já suficientemente definida para iniciar a redação dos três carrosséis;
- adaptação posterior: LinkedIn, vídeo curto e stories;
- ordem da publicação na sequência mudança → profissão → caminhos;
- CTA e destino como **previstos**, até validação operacional;
- dimensões, safe zones, legibilidade e demais especificações como pendentes de confirmação com base nas regras vigentes do canal e no Design System Fundador v0.2.0.

CTA, destino, dimensões e safe zones não bloqueiam a redação nem o estado `approved`. CTA e destino devem ser validados antes de `scheduled`; dimensões e safe zones devem ser confirmadas antes da composição e da aprovação visual. Não inventar dimensões ou safe zones.

## 5. Esquema canônico de metadados

```yaml
content_id: pinned-post-01
version: v01
status: draft
title: ""
journey: professional | company | bridge
audience: ""
pillar: ""
consciousness_stage: C0 | C1 | C2 | C3 | C4 | C5
content_role: manifesto | education | backstage | objection_response | evidence_led | conversion
channel: ""
format: ""
CTA: ""
destination: ""
claims:
  - claim_id: clm-001
    claim_type: official_definition | documented_fact | institutional_thesis | hypothesis | founder_opinion | proposal | recommendation
    claim_text: ""
    source_ids: []
    evidence_ids: []
    validation_status: pending | validated | rejected | not_applicable
evidence:
  - evidence_id: evd-001
    tipo: ""
    origem: ""
    referencia: ""
    consentimento: not_applicable | pending | granted | denied | withdrawn
    condicao_de_publicacao: ""
editorial_approver: ""
factual_approver: ""
editorial_approved_at: null
factual_approved_at: null
visual_approver: ""
visual_approved_at: null
asset_ids: []
design_system_version: ""
visual_validation_status: ""
scheduled_at: null
published_at: null
platform_post_id: ""
public_url: ""
```

### 5.1 Regras dos campos

- `content_id`: identificador estável; não contém a versão;
- `version`: versão independente da identidade da peça;
- `status`: somente `draft`, `review`, `approved`, `designed`, `scheduled` ou `published`;
- `claims`: coleção de afirmações; aceita vários tipos na mesma peça;
- `claim_id`: identificador estável da afirmação dentro do sistema;
- `source_ids`: fontes que originam ou documentam a afirmação;
- `evidence_ids`: referências à coleção `evidence`;
- `validation_status`: estado da validação individual da afirmação;
- `evidence`: coleção separada, nunca substituída por um rótulo de afirmação;
- `consentimento`: preencher quando aplicável e não presumir autorização de publicação a partir de consentimento genérico;
- `condicao_de_publicacao`: limites, anonimização, expiração, retirada ou outras condições aplicáveis;
- para `approved`, são obrigatórios `editorial_approver`, `factual_approver`, `editorial_approved_at` e `factual_approved_at`;
- para `designed`, são obrigatórios `visual_approver`, `visual_approved_at`, `asset_ids`, `design_system_version` e `visual_validation_status`;
- para `scheduled`, `CTA`, `destination`, `channel` e `format` devem conter valores finais, e `scheduled_at` deve estar preenchido;
- para `published`, são obrigatórios `published_at`, `platform_post_id` e `public_url`;
- campos de estados posteriores não são exigidos para alcançar um estado anterior.

Campos adicionais podem existir, desde que não alterem o significado dos campos canônicos.

## 6. Autoridade de aprovação

### 6.1 Estrutura provisória

- **Autoridade editorial provisória:** Leonardo Brasil.
- **Autoridade factual provisória:** Leonardo Brasil, até delegação formal.
- **Autoridade visual provisória:** Leonardo Brasil.

### 6.2 Regra de estado

Nenhuma peça pode alcançar `approved` sem:

- `editorial_approver`;
- `factual_approver`;
- aprovação editorial concluída e `editorial_approved_at` preenchido;
- aprovação factual concluída e `factual_approved_at` preenchido.

Nenhuma peça pode alcançar `designed` sem:

- `visual_approver` preenchido;
- asset final disponível;
- aderência ao Design System Fundador v0.2.0 verificada;
- aprovação visual concluída e `visual_approved_at` preenchido.

A aprovação visual ocorre depois do estado `approved`, não antes. A estrutura pode ser delegada futuramente, mas a autoridade responsável precisa permanecer explícita. Alterações relevantes posteriores à aprovação retornam a `review`, preservam histórico e exigem nova aprovação editorial e factual; se já houver asset, exigem também nova verificação e aprovação visual antes de retornar a `designed`.

## 7. Padrões por formato

### 7.1 Carrossel

**Função:** desenvolver uma ideia em sequência e tornar relações compreensíveis.

Estrutura recomendada:

1. capa com tensão ou afirmação central;
2. contexto;
3. problema ou mudança;
4. distinção ou estrutura;
5. aplicação ou consequência;
6. limite ou aprendizado;
7. CTA coerente.

Critérios:

- uma ideia principal por carrossel;
- progressão lógica entre telas;
- definição oficial literal;
- profissão, disciplina e resultado em camadas distintas;
- legenda acrescenta contexto;
- última tela indica uma próxima ação compatível com a jornada;
- número de telas segue a complexidade, exceto na campanha inaugural, cuja previsão canônica é de 8 a 10.

### 7.2 Publicação estática

- fixar uma tese, definição, contraste ou convite;
- usar mensagem compreensível sem depender integralmente da legenda;
- manter pouco texto no visual;
- não sugerir resultado ou autoridade apenas pela composição;
- explicar contexto, classificação e limite na legenda quando necessário.

### 7.3 Vídeo curto

Estrutura: abertura → contexto → distinção ou argumento → exemplo ou consequência → síntese e CTA.

- roteiro revisado antes da gravação;
- legendas completas;
- termos técnicos explicados;
- primeira pessoa classificada corretamente;
- cortes não alteram o sentido;
- fatos mantêm fonte no registro da peça.

### 7.4 Stories

Estrutura: contexto → pergunta ou tensão → explicação → interação → próxima ação.

- uma sequência, um objetivo;
- enquetes não induzem conclusão enganosa;
- bastidores protegem dados e identidades;
- links e CTAs correspondem à jornada e precisam estar validados.

### 7.5 LinkedIn

Estrutura: abertura direta → contexto → raciocínio → implicação → conclusão.

- densidade moderada e clareza;
- primeira pessoa para autoria real;
- opinião não vira tendência de mercado sem fonte;
- jornada dominante ou ponte explícita.

### 7.6 Artigo

Usar título preciso, tese de abertura, contexto, definições, argumento, implicações, limites, referências e próxima ação. Hipóteses e propostas devem permanecer identificáveis e nenhuma evidência pode aparecer sem origem.

### 7.7 Newsletter

Usar nota de abertura, ideia principal, aplicação ou bastidor, pergunta ou convite e referências. Consentimento e descadastro dependem da infraestrutura adotada.

### 7.8 Manifesto

Estrutura: mudança → insuficiência das categorias atuais → capacidade emergente → nome → responsabilidade → convite.

Não usar dados inventados, superioridade, inevitabilidade histórica ou IA como centro da narrativa.

### 7.9 Legenda

Ampliar a peça com explicação, distinção, limite, síntese e CTA. Não repetir integralmente o visual nem esconder ressalvas relevantes no final.

### 7.10 CTA

Orientar uma única ação, dizer o que acontecerá depois e manter proporcionalidade com o conteúdo.

Categorias possíveis:

- compreensão;
- reflexão;
- continuidade;
- jornada profissional;
- jornada empresarial;
- consulta a evidência correspondente.

Não prometer oferta, formação, diagnóstico ou serviço inexistente. CTA e destino só se tornam operacionais após validação.

### 7.11 Texto alternativo

Descrever tipo de peça, elementos relevantes, texto visual e relação necessária à compreensão. Transcrever o texto essencial, descrever diagramas na ordem lógica e não expor dados pessoais acidentais.

## 8. Orientação visual

### 8.1 Sistema documentado

- Design System Fundador v0.2.0;
- símbolo oficial H5.2-A — Contraforma Aberta e Geométrica;
- paleta: Ink 950 `#07111F`, Signal 500 `#1EC9B7`, Blueprint 500 `#4D74FF`, Paper 50 `#F7F8F6` e Cloud 100 `#E9EEF2`;
- Inter ou pilha sans do sistema para títulos e textos;
- IBM Plex Mono ou equivalente monoespaçada para rótulos, métricas, níveis e elementos técnicos.

### 8.2 Símbolo

- preservar disco sólido, contraforma aberta, simetria estrutural e funcionamento monocromático;
- usar as variantes ópticas conforme o Design System;
- respeitar proteção mínima `X=4u`;
- não alterar geometria, peso, proporções ou terminações;
- não adicionar barra, badge, anel, moldura, gradiente, segunda marca, rotação ou distorção;
- não reabrir H5.2-B ou H5.2-C.

### 8.3 Imagem e composição

A geometria deve comunicar integração, progressão e leitura operacional sem sugerir arquitetura civil literal. Evitar prédios, plantas imobiliárias, capacetes, tijolos, guindastes, cérebros digitais, robôs humanoides, circuitos genéricos, neon excessivo, engrenagens, estética hacker e imagens corporativas genéricas.

Priorizar hierarquia, contraste, respiro e legibilidade no tamanho real do canal. Dimensões, safe zones e limites de texto devem ser definidos a partir das especificações vigentes do canal e validados com o Design System antes da composição.

## 9. Produção e adaptação

### 9.1 Da afirmação à peça

1. registrar todas as afirmações previstas;
2. classificar cada uma;
3. vincular fontes e evidências;
4. construir argumentos e escolher analogias, se necessárias;
5. selecionar jornada, público, pilar e estágio;
6. definir papel, canal, formato, CTA e destino;
7. redigir;
8. realizar revisões textual, de marca e factual;
9. registrar as aprovações editorial e factual e alcançar `approved`;
10. produzir o asset visual;
11. realizar revisão e aprovação visual e alcançar `designed`;
12. validar CTA, destino, link e configuração do canal para `scheduled`;
13. adaptar somente depois de estabilizar o núcleo.

### 9.2 Reaproveitamento

Reaproveitar a afirmação e o raciocínio, não copiar mecanicamente a forma. Cada adaptação recebe `content_id` próprio quando canal, objetivo, jornada, formato ou CTA mudarem e referencia a peça-mãe em campo adicional, se necessário.

Preservar entre derivações:

- texto e natureza das afirmações;
- fontes e evidências;
- limites;
- hierarquia narrativa;
- jornada;
- condição operacional do CTA e destino.

## 10. Revisões obrigatórias

### 10.1 Revisão textual

- ideia principal clara;
- definição oficial literal;
- termos necessários explicados;
- ritmo adequado ao canal;
- primeira pessoa corretamente atribuída;
- CTA único;
- texto visual, legenda e texto alternativo coerentes.

### 10.2 Revisão de marca

- profissão antes da disciplina;
- resultado sem promessa absoluta;
- Leonardo no papel documentado;
- IA dentro da arquitetura;
- campos adjacentes não confundidos com a disciplina;
- níveis profissionais separados de C0–C5;
- Design System v0.2.0 e H5.2-A respeitados;
- novas decisões marcadas como proposta.

### 10.3 Revisão factual por afirmação

Para cada item de `claims`:

1. confirmar `claim_type` canônico;
2. verificar `source_ids`;
3. verificar se a fonte sustenta exatamente o texto;
4. conferir contexto, período, método e limitações;
5. conferir `evidence_ids` e condição de publicação;
6. confirmar consentimento quando aplicável;
7. definir `validation_status`;
8. remover, reescrever ou reclassificar o que não estiver sustentado.

### 10.4 Revisão visual

A revisão visual ocorre depois de `approved` e é condição para alcançar `designed`.

- aderência ao Design System;
- especificações vigentes do canal confirmadas;
- dimensões e safe zones registradas no brief;
- legibilidade em contexto real;
- nenhum elemento visual cria promessa ou autoridade inexistente;
- `visual_approver` registrado.

## 11. Estados editoriais

| Estado | Definição canônica | Critério de passagem |
| --- | --- | --- |
| `draft` | Conteúdo em produção. | `content_id`, `version`, `status` e brief de trabalho identificados. |
| `review` | Conteúdo submetido à revisão editorial e factual. | Texto submetido, afirmações classificadas e metadados, fontes, evidências ou limites disponíveis para revisão. |
| `approved` | Texto e estratégia aprovados, aptos a seguir para composição visual. | `editorial_approver`, `factual_approver`, `editorial_approved_at` e `factual_approved_at` preenchidos; aprovações editorial e factual concluídas; nenhum bloqueador editorial aberto. |
| `designed` | Asset visual produzido e aprovado conforme o Design System. | `visual_approver`, `visual_approved_at`, `asset_ids`, `design_system_version` e `visual_validation_status` preenchidos; asset final disponível, aderência ao Design System Fundador v0.2.0 verificada, teste de legibilidade realizado e aprovação visual concluída. |
| `scheduled` | Conteúdo, asset, CTA, destino e configuração do canal prontos e programados para publicação. | `CTA` e `destination` finais e validados; `channel` e `format` finais; link validado; configuração concluída; `scheduled_at` preenchido. |
| `published` | Conteúdo efetivamente publicado, com data e identificador registrados. | Publicação confirmada; `published_at`, `platform_post_id` e `public_url` preenchidos. |

Fluxo padrão:

`draft` → `review` → `approved` → `designed` → `scheduled` → `published`

Os estados seguem essa ordem sem exigir campos de etapas futuras antecipadamente. Mudança relevante depois de `approved` retorna para `review` em nova versão, preservando histórico.

## 12. Barreira mínima para casos e resultados

Antes de usar caso, dado, depoimento ou resultado:

- confirmar que existe evidência rastreável;
- vincular a evidência à afirmação exata;
- registrar contexto, período, método, limitações e origem;
- confirmar condição de publicação e consentimento específico quando aplicável;
- não extrapolar causalidade ou generalização;
- interromper o uso se a autorização for negada ou retirada.

Consentimento identificável, retenção, anonimização e retirada dependem de validação jurídica e operacional. Até essa validação, adotar a alternativa de menor exposição ou não publicar.

## 13. Responsabilidade dos ambientes

| Etapa | Ambiente | Responsabilidade |
| --- | --- | --- |
| Estratégia e produção editorial | Chat e Work | ideias, teses, brief, rascunhos, revisão e coordenação |
| Aplicação visual | Claude Design | composição, direção visual, adaptações e assets após aprovação editorial |
| Integração técnica | Codex | validação, registro, commit e push quando expressamente solicitado |

Alteração relevante no texto depois do design retorna para revisão editorial e gera nova versão.

## 14. Lacunas

### 14.1 Bloqueadores editoriais

Impedem que um conteúdo alcance `approved`:

- contradição com definições oficiais;
- afirmação sem classificação;
- fato não sustentado;
- tese, hipótese ou opinião apresentada como fato;
- ausência de aprovação editorial;
- ausência de aprovação factual;
- decisão estratégica necessária e ainda indefinida;
- inconsistência entre texto, jornada, função e CTA pretendido.

Não há bloqueador editorial específico conhecido para iniciar a redação das três publicações fixadas.

### 14.2 Gates operacionais

Não impedem redação nem aprovação editorial, mas precisam ser resolvidos antes de `designed`, `scheduled` ou `published`, conforme o caso:

- URL pública validada;
- CTA operacional validado;
- destino real disponível;
- dimensões vigentes do canal;
- safe zones;
- especificações de exportação;
- asset visual final;
- teste de legibilidade;
- validação do link;
- configuração de agendamento;
- identificação da publicação.

### 14.3 Backlog não bloqueador

- competências detalhadas dos quatro níveis;
- currículo, certificação e diretório;
- método formal da disciplina;
- código de ética;
- personas e setores prioritários;
- oferta comercial;
- métricas oficiais de Operação Previsível;
- casos e provas externas;
- calendário recorrente;
- metas editoriais;
- políticas completas de moderação, retenção e retirada.

## 15. Fontes consolidadas

Este documento foi revisado a partir das instruções do projeto, da auditoria final da Fundação Editorial v0.2.0 e, na ordem de precedência definida, de `README.md`, `DESIGN_SYSTEM.md`, `CHANGELOG.md`, `tokens.json`, `API_CONTRACT.md` e `CONTENT_README.md`.
