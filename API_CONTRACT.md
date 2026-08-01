# Contrato de integração dos formulários — v0.1.1

## Endpoint sugerido

`POST /api/interesses`

## Payload

```json
{
  "tipo": "professional | company",
  "nome": "string",
  "email": "string",
  "whatsapp": "string",
  "linkedin": "string",
  "ocupacao": "string",
  "experiencia": "string",
  "nivel_autodeclarado": "string",
  "empresa": "string",
  "estagio_empresa": "string",
  "gargalo": "string",
  "mensagem": "string",
  "consentimento": "on",
  "criado_em": "ISO-8601",
  "origem": "arquiteto_operacoes_landing",
  "contexto_marca": "categoria_profissional",
  "versao_marca": "0.1.1",
  "url": "string",
  "utm_source": "string",
  "utm_medium": "string",
  "utm_campaign": "string"
}
```

## Respostas

- `201`: registro criado;
- `200`: contato existente atualizado;
- `400`: payload inválido;
- `429`: limite de envio;
- `500`: erro interno.

## Processamento recomendado

1. Validar e normalizar campos;
2. aplicar antispam e rate limit;
3. verificar duplicidade por e-mail e telefone;
4. gravar contato e interesse em tabelas separadas;
5. distinguir jornada profissional e empresarial;
6. criar ou atualizar contato no CRM;
7. registrar UTM, origem, contexto e versão da marca;
8. disparar confirmação transacional;
9. notificar o responsável quando houver aderência mínima;
10. armazenar consentimento e versão do texto aceito.

## Configuração

```js
window.ADO_CONFIG = {
  mode: "production",
  endpoint: "https://seu-dominio.com/api/interesses",
  storageKey: "ado_interesses_v011",
  brandVersion: "0.1.1",
  analytics: true
};
```
