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

# Thesis and Proof Library

## 1. Função deste documento

Esta biblioteca organiza afirmações, estruturas de sustentação, recursos explicativos, objeções e evidências. Seu objetivo é impedir que definição, fato, tese, hipótese, opinião, proposta, recomendação e prova sejam tratados como equivalentes.

O arquivo está em `approved`. Não há casos, clientes, estatísticas ou resultados externos validados nesta versão.

## 2. Modelo canônico

### 2.1 Tipos de afirmação

| Tipo editorial | `claim_type` | Natureza | Requisito |
| --- | --- | --- | --- |
| **definição oficial** | `official_definition` | Formulação institucional que fixa o significado oficial | Preservar literalmente quando apresentada como oficial |
| **fato documentado** | `documented_fact` | Afirmação verificável em fonte ou registro | Fonte, contexto e limite |
| **tese institucional** | `institutional_thesis` | Posição central defendida pelo projeto | Argumentos claros; evidência quando houver alegação empírica |
| **hipótese** | `hypothesis` | Explicação ou previsão ainda não testada | Condição de teste e incerteza explícita |
| **opinião fundadora** | `founder_opinion` | Interpretação atribuída a Leonardo Brasil | Autoria, contexto e separação de consenso ou fato |
| **proposta** | `proposal` | Estrutura ou decisão sugerida | Manter status até aprovação |
| **recomendação** | `recommendation` | Orientação de ação sob condições | Fundamento, condição, limite e possibilidade de revisão |

### 2.2 Elementos que não são tipos de afirmação

| Elemento | Papel correto |
| --- | --- |
| **argumento** | Estrutura de sustentação de uma afirmação |
| **analogia** | Recurso explicativo por comparação |
| **objeção** | Questionamento registrado |
| **resposta** | Tratamento editorial de uma objeção |
| **prova** | Evidência vinculada a uma afirmação |

### 2.3 Regra de uso público

A classificação interna é obrigatória. A rotulagem pública pode ser natural e contextual, mas nenhuma peça pode apresentar tese, hipótese ou opinião como fato comprovado. Uma mesma peça pode conter várias afirmações de tipos diferentes; cada uma precisa de registro individual.

## 3. Afirmações institucionais

### D01 — Definição oficial de Arquiteto de Operações

> O Arquiteto de Operações é o profissional responsável por projetar, estruturar, integrar, automatizar e evoluir os processos e sistemas operacionais de uma organização, conectando pessoas, dados, tecnologia e inteligência artificial para ampliar eficiência, controle, capacidade de execução e previsibilidade.

- **claim_type:** `official_definition`
- **validation_status:** `validated`
- **source_ids:** instruções do projeto
- **regra:** preservar literalmente quando identificada como definição oficial

### F01 — Hierarquia estratégica vigente

- **afirmação:** A hierarquia documentada segue mudança de mercado → Arquiteto de Operações → Arquitetura Operacional → Operação Previsível → Leonardo Brasil.
- **claim_type:** `documented_fact`
- **validation_status:** `validated`
- **source_ids:** `README.md`, `DESIGN_SYSTEM.md`, `CHANGELOG.md`, `tokens.json`
- **limite:** demonstra a decisão do projeto, não adoção externa da categoria

### F02 — Formulação documentada da disciplina

- **afirmação:** Arquitetura Operacional é a disciplina que orienta como pessoas, processos, dados, sistemas, automações e IA devem trabalhar juntos dentro de uma organização.
- **claim_type:** `documented_fact`
- **validation_status:** `validated`
- **source_ids:** `DESIGN_SYSTEM.md`
- **limite:** método, domínios, princípios e artefatos ainda não foram formalizados

### F03 — Formulação documentada do resultado

- **afirmação:** Operação Previsível é o resultado desejado: uma operação integrada, mensurável, repetível, governável e progressivamente mais previsível.
- **claim_type:** `documented_fact`
- **validation_status:** `validated`
- **source_ids:** `DESIGN_SYSTEM.md`
- **limite:** previsibilidade não significa controle absoluto

### F04 — Níveis profissionais

- **afirmação:** Os níveis profissionais documentados são Analista, Especialista, Arquiteto e Arquiteto Líder; Head é função organizacional, não nível profissional.
- **claim_type:** `documented_fact`
- **validation_status:** `validated`
- **source_ids:** instruções do projeto
- **limite:** competências e critérios de progressão estão em backlog

### F05 — Duas jornadas

- **afirmação:** O projeto organiza as jornadas “Quero me tornar Arquiteto de Operações” e “Minha empresa precisa de Arquitetura Operacional”.
- **claim_type:** `documented_fact`
- **validation_status:** `validated`
- **source_ids:** instruções do projeto, `API_CONTRACT.md`, `DESIGN_SYSTEM.md`

### F06 — Estado visual vigente

- **afirmação:** O Design System Fundador vigente é o v0.2.0; H5.2-A é o símbolo oficial; H5.2-B e H5.2-C foram descartados.
- **claim_type:** `documented_fact`
- **validation_status:** `validated`
- **source_ids:** `README.md`, `DESIGN_SYSTEM.md`, `CHANGELOG.md`, `tokens.json`

## 4. Teses institucionais

### T01 — Emergência de uma nova capacidade profissional

> Uma nova capacidade profissional está emergindo.

- **claim_type:** `institutional_thesis`
- **validation_status:** `validated` como tese institucional
- **source_ids:** `README.md`, `DESIGN_SYSTEM.md`, `tokens.json`
- **o que sustenta hoje:** arquitetura estratégica e frase de lançamento do projeto
- **não demonstrado:** amplitude, adoção, demanda, distribuição geográfica ou reconhecimento externo

### T02 — A capacidade recebe o nome Arquiteto de Operações

- **afirmação:** Arquiteto de Operações é a categoria profissional que nomeia a capacidade definida oficialmente.
- **claim_type:** `institutional_thesis`
- **validation_status:** `validated` como tese institucional
- **source_ids:** `README.md`, `DESIGN_SYSTEM.md`, definição oficial
- **limite:** não afirmar reconhecimento amplo da expressão sem evidência externa

### T03 — Arquitetura Operacional é a disciplina

- **afirmação:** Arquitetura Operacional organiza como pessoas, processos, dados, sistemas, automações e IA devem trabalhar juntos.
- **claim_type:** `institutional_thesis`
- **validation_status:** `validated` como tese institucional
- **source_ids:** `DESIGN_SYSTEM.md`
- **limite:** método e artefatos ainda não formalizados

### T04 — Operação Previsível é o resultado desejado

- **afirmação:** A aplicação da disciplina busca uma operação integrada, mensurável, repetível, governável e progressivamente mais previsível.
- **claim_type:** `institutional_thesis`
- **validation_status:** `validated` como tese institucional
- **source_ids:** `DESIGN_SYSTEM.md`
- **limite:** não constitui garantia de resultado nem controle absoluto

### T05 — IA multiplica capacidade

> A inteligência artificial não substitui a necessidade de arquitetura. Ela multiplica a capacidade de quem sabe arquitetar.

- **claim_type:** `institutional_thesis`
- **validation_status:** `validated` como tese institucional
- **source_ids:** `README.md`, instruções do projeto
- **limite:** ganhos específicos precisam de contexto, método, baseline e métricas

### T06 — O profissional materializa o sistema

- **afirmação:** O Arquiteto de Operações não entrega apenas recomendações. Materializa o sistema necessário para o negócio funcionar.
- **claim_type:** `institutional_thesis`
- **validation_status:** `validated` como tese institucional
- **source_ids:** `DESIGN_SYSTEM.md`
- **limite:** critérios, entregáveis e responsabilidade formal permanecem em backlog

### T07 — Duas jornadas distintas e complementares

- **afirmação:** A categoria organiza duas jornadas distintas e complementares: uma profissional e outra empresarial.
- **claim_type:** `institutional_thesis`
- **validation_status:** `validated` como tese institucional para a campanha inaugural
- **source_ids:** instruções do projeto, `DESIGN_SYSTEM.md`, `API_CONTRACT.md`
- **limite:** a complementaridade não transforma as jornadas em uma única conversão

## 5. Argumentos de sustentação

Argumentos não são tipos de afirmação e não substituem evidência empírica.

### A01 — Ferramentas isoladas não definem a arquitetura

- software oferece capacidade específica;
- automação executa partes de fluxos;
- IA amplia capacidades em contextos determinados;
- Arquitetura Operacional organiza como essas partes trabalham com pessoas, processos e dados;
- portanto, nenhuma ferramenta isolada equivale à disciplina completa.

**Sustenta:** T03 e as distinções da profissão.

### A02 — Recomendação isolada não materializa o sistema

- consultoria pode produzir diagnóstico e recomendação;
- a definição oficial inclui projetar, estruturar, integrar, automatizar e evoluir;
- o Design System registra a materialização do sistema;
- portanto, a categoria não deve ser reduzida a consultoria abstrata.

**Sustenta:** T06.

### A03 — Previsibilidade é progressiva

- organizações operam sob incerteza;
- as fontes rejeitam controle absoluto como significado de previsibilidade;
- visibilidade, repetição, aprendizagem e projeção ampliam capacidade de antecipação e ajuste;
- portanto, Operação Previsível é direção progressiva, não promessa absoluta.

**Sustenta:** T04.

### A04 — Profissão antes da disciplina

- a v0.1.1 reorientou a hierarquia;
- Arquiteto de Operações passou ao centro da narrativa;
- Arquitetura Operacional passou a ser a disciplina;
- portanto, a comunicação apresenta profissão antes da disciplina.

**Sustenta:** F01 e T02.

### A05 — Categoria conecta negócio e implementação

- arquétipos combinam visão sistêmica, pragmatismo e responsabilidade;
- a linguagem visual une negócio e implementação;
- a definição inclui desenho e evolução de processos e sistemas;
- portanto, a categoria não deve ser descrita apenas como reflexão estratégica nem apenas como execução técnica.

**Sustenta:** T02 e T06.

## 6. Hipóteses de investigação

As hipóteses abaixo continuam como investigação, não como fatos ou decisões aprovadas.

| ID | Afirmação (`hypothesis`) | Evidência necessária |
| --- | --- | --- |
| H01 | Profissionais de áreas adjacentes reconhecerão sua atuação na definição da profissão | entrevistas e análise qualitativa com critérios documentados |
| H02 | Empresas reconhecerão problemas atuais como falta de Arquitetura Operacional | diagnósticos estruturados e padrões recorrentes de gargalos |
| H03 | A ordem profissão → disciplina → resultado reduzirá confusão conceitual | testes de compreensão antes/depois |
| H04 | Conteúdos-ponte ajudarão o público a escolher corretamente uma jornada | navegação, conversão e respostas de formulário |
| H05 | IA integrada a uma arquitetura produzirá ganhos superiores a iniciativas isoladas | comparação contextual com baseline, método e métricas |
| H06 | Os quatro níveis serão suficientes para representar progressão profissional | pesquisa de competências e aplicação piloto |
| H07 | “Operação Previsível” será compreendida sem expectativa de controle absoluto | pesquisa de compreensão e análise de objeções |
| H08 | A distribuição experimental 40/40/20 manterá equilíbrio editorial | janela móvel de pelo menos 10 conteúdos e análise por jornada |

## 7. Opiniões fundadoras

Não há biblioteca aprovada de opiniões pessoais além das formulações institucionais já documentadas.

**Recomendação:** registrar cada nova opinião com:

- autoria explícita;
- contexto;
- separação das definições oficiais;
- evidência disponível, se houver;
- grau de confiança;
- possibilidade de revisão.

Modelo de linguagem:

> Minha leitura é [opinião]. Ela parte de [contexto]. Hoje, [evidência ou limite]. Por isso, trato este ponto como opinião ou hipótese, não como fato estabelecido.

## 8. Recursos explicativos

Analogias são recursos, não definições nem provas.

### AN01 — Planta e edifício, com ressalva

Pode explicar a organização de relações antes e durante a construção de um sistema, desde que se declare que Arquitetura Operacional não é arquitetura civil. A identidade visual não deve usar os símbolos literais proibidos pelo Design System.

### AN02 — Orquestra

Pode explicar coordenação entre partes, sem sugerir controle absoluto nem reduzir pessoas a instrumentos.

### AN03 — Sistema de navegação

Pode explicar maior visibilidade, leitura de contexto e capacidade de correção sem eliminação da incerteza.

### AN04 — Ferramenta e sistema

Pode explicar que a qualidade de uma automação não substitui decisões sobre onde, por que e com quem ela funciona.

## 9. Objeções e respostas editoriais

Objeções e respostas não recebem `claim_type` próprio. As afirmações dentro das respostas devem ser classificadas individualmente.

### O01 — “Isso é apenas um novo nome para consultor.”

**Resposta:** consultoria pode fazer parte da atuação, mas a definição oficial inclui projetar, estruturar, integrar, automatizar e evoluir processos e sistemas operacionais. A tese documentada acrescenta que o profissional materializa o sistema. Os limites entre modelos de atuação ainda precisam ser detalhados.

### O02 — “Arquitetura Operacional é apenas gestão de processos.”

**Resposta:** processos são parte da disciplina. A formulação documentada inclui pessoas, dados, sistemas, automações e IA e organiza como esses elementos trabalham juntos.

### O03 — “Isso é automação com outro nome.”

**Resposta:** automação executa partes de fluxos. Arquitetura Operacional trata da integração e da coerência do conjunto.

### O04 — “A IA fará esse trabalho sozinha.”

**Resposta:** a tese institucional afirma que a IA não substitui a necessidade de arquitetura; multiplica a capacidade de quem sabe arquitetar. Resultados específicos ainda precisam ser demonstrados.

### O05 — “Operação Previsível é uma promessa impossível.”

**Resposta:** o conceito documentado não significa controle absoluto; expressa progressão em visibilidade, repetição, governança, aprendizagem e projeção.

### O06 — “A categoria já é reconhecida pelo mercado?”

**Resposta:** as fontes documentam o projeto, a definição e a tese de uma capacidade emergente. Não demonstram reconhecimento amplo ou adoção externa.

### O07 — “Quais competências definem cada nível?”

**Resposta:** os quatro níveis estão documentados, mas competências e critérios permanecem em backlog.

### O08 — “Head é o nível acima de Arquiteto Líder?”

**Resposta:** não. Head é função organizacional, não nível profissional.

### O09 — “Existe curso ou certificação?”

**Resposta:** currículo, formação, certificação e diretório não estão definidos ou aprovados nas fontes atuais.

## 10. Evidências

### 10.1 Modelo de registro

```yaml
evidence_id: evd-001
tipo: documento | dado | registro | depoimento | caso | pesquisa | artefato
origem: ""
referencia: ""
consentimento: not_applicable | pending | granted | denied | withdrawn
condicao_de_publicacao: ""
```

Cada evidência deve:

- ter identificador próprio;
- registrar tipo, origem e referência;
- registrar consentimento quando aplicável;
- declarar condição de publicação;
- ser vinculada às afirmações que realmente sustenta;
- preservar contexto, período, método e limitações quando pertinentes.

Uma evidência não transforma automaticamente uma tese inteira em fato. A validação ocorre afirmação por afirmação.

### 10.2 Evidências internas atualmente disponíveis

As fontes oficiais demonstram:

1. o estado e a hierarquia do projeto;
2. a versão 0.2.0 do Design System;
3. a aprovação de H5.2-A e o descarte de H5.2-B e H5.2-C;
4. paleta, tipografia e restrições visuais;
5. seis estados editoriais;
6. duas jornadas no contrato técnico;
7. previsão de consentimento, origem, contexto, versão, URL e UTMs;
8. evolução futura de currículo, certificação e diretório.

Essas evidências demonstram decisões e infraestrutura do projeto. Não demonstram adoção, eficácia ou resultados de mercado.

### 10.3 Afirmações ainda sem evidência externa

Não está demonstrado:

- reconhecimento amplo ou demanda quantificada pela categoria;
- superioridade de resultados após aplicação da disciplina;
- ganho mensurado produzido por IA dentro da arquitetura;
- suficiência dos quatro níveis para todas as trajetórias;
- existência de currículo validado, certificação, comunidade ou diretório;
- resultados específicos de Leonardo ou de terceiros sob a categoria;
- clientes, casos ou depoimentos autorizados;
- oferta comercial validada;
- métricas oficiais de Operação Previsível;
- desempenho superior de público, canal, formato ou campanha;
- novidade histórica ou jurídica da categoria.

## 11. Evidências a construir

Esta seção é uma **recomendação** e não bloqueia a campanha inaugural conceitual.

| Evidência recomendada | Afirmação que pode sustentar | Requisitos mínimos |
| --- | --- | --- |
| Caso fundador documentado | Aplicação prática do raciocínio | contexto, situação inicial, decisões, implementação, resultado, limites e registros |
| Caso empresarial | Mudança após aplicação da disciplina | consentimento, baseline, período, intervenções, métricas e fatores externos |
| Portfólio de artefatos | O que o profissional materializa | exemplos autorizados ou anonimizados, função e relação com o sistema |
| Pesquisa de compreensão | Reconhecimento e distinção da categoria | amostra, instrumento, método e resultados completos |
| Mapa de competências | Diferenças entre níveis | pesquisa, validação prática e critérios observáveis |
| Teste da tese sobre IA | Contextos em que IA multiplica capacidade | tarefa, baseline, arquitetura aplicada, medida e limitações |
| Métricas de Operação Previsível | Evolução da previsibilidade | definições operacionais, indicadores, período e governança |

## 12. Política mínima para casos, evidências e resultados

### 12.1 Barreira editorial adotada

É obrigatório:

- publicar somente o que pode ser verificado;
- não inventar caso, dado, cliente, depoimento ou resultado;
- vincular evidência à afirmação específica;
- separar dado, interpretação e conclusão;
- preservar contexto e limitações;
- não extrapolar causalidade, generalização ou promessa;
- não presumir que consentimento de formulário autoriza uso de nome, imagem, marca, depoimento ou resultado;
- interromper ou retirar o uso quando a condição de publicação deixar de ser válida.

### 12.2 Recomendação condicionada à validação jurídica e operacional

As regras detalhadas de consentimento identificável, retenção, anonimização e retirada permanecem como **recomendação** até validação jurídica e operacional.

Recomenda-se que o consentimento específico registre:

- identidade e legitimidade de quem autoriza;
- pessoas e organização abrangidas;
- materiais e dados autorizados;
- canais e formatos;
- uso de nome, marca, imagem e depoimento;
- período de autorização;
- procedimento de retirada;
- versão do texto e comprovação do aceite.

Recomenda-se que anonimização:

- remova identificadores diretos;
- reduza risco de reidentificação por combinação de contexto;
- preserve o sentido sem fabricar detalhes;
- registre internamente origem e autorização;
- declare que o caso foi anonimizado.

Recomenda-se que resultados publiquem:

- período;
- baseline;
- métrica e cálculo;
- intervenção;
- fonte;
- fatores externos;
- limitações;
- autorização;
- o que não pode ser concluído.

Casos hipotéticos devem ser rotulados como **exemplo hipotético** e não podem parecer relatos de clientes reais.

## 13. Processo de validação de uma afirmação

1. registrar `claim_id`, texto e tipo atual;
2. identificar a evidência necessária;
3. coletar ou localizar evidência com método e consentimento aplicáveis;
4. registrar `evidence_id`, origem, referência e condição de publicação;
5. avaliar se a evidência sustenta toda, parte ou nenhuma parte da afirmação;
6. atualizar `validation_status`;
7. publicar apenas no grau demonstrado;
8. preservar o vínculo entre conteúdo, versão, afirmação e evidência.

Uma hipótese não vira fato por repetição. Uma opinião não vira tese por autoria. Uma tese não vira fato por aparecer em um caso isolado. Uma evidência sustenta apenas o que efetivamente demonstra.

## 14. Autoridades de aprovação

- **Autoridade editorial provisória:** Leonardo Brasil.
- **Autoridade factual provisória:** Leonardo Brasil, até delegação formal.
- **Autoridade visual provisória:** Leonardo Brasil.

Para alcançar `approved`, são obrigatórios `editorial_approver`, `factual_approver`, `editorial_approved_at` e `factual_approved_at`, com as aprovações editorial e factual concluídas. A aprovação visual não é requisito para `approved`.

Para alcançar `designed`, são obrigatórios `visual_approver`, `visual_approved_at`, `asset_ids`, `design_system_version` e `visual_validation_status`, com asset final disponível, verificação de aderência ao Design System Fundador v0.2.0 e aprovação visual concluída.

O fluxo canônico é `draft` → `review` → `approved` → `designed` → `scheduled` → `published`. Campos ou requisitos de estados posteriores não são exigidos para alcançar um estado anterior.

## 15. Lacunas

### 15.1 Bloqueadores editoriais

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

### 15.2 Gates operacionais

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

Na campanha inaugural, URL e CTA permanecem previstos até validação anterior a `scheduled`; formato, dimensões, safe zones e demais especificações visuais devem ser confirmados antes da composição e de `designed`.

### 15.3 Backlog não bloqueador

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

## 16. Fontes consolidadas

Este documento foi revisado a partir das instruções do projeto, da auditoria final da Fundação Editorial v0.2.0 e, na ordem de precedência definida, de `README.md`, `DESIGN_SYSTEM.md`, `CHANGELOG.md`, `tokens.json`, `API_CONTRACT.md` e `CONTENT_README.md`.
