# LP Vit — 9º Congresso Nacional do CONFIES

Landing page de captação de leads. O visitante escaneia o QR code do cartão
entregue no estande, se cadastra aqui, e recebe por e-mail o link de acesso ao
Vit — o agente que gera atas de reunião a partir de áudio.

## Rodando localmente

```bash
npm install
cp .env.local.example .env.local   # e ajuste a URL do webhook
npm run dev
```

Abre em `http://localhost:3000`.

## Variável de ambiente

| Variável | Descrição |
|---|---|
| `NEXT_PUBLIC_WEBHOOK_URL` | URL do webhook do n8n que recebe o cadastro (WF-1) |

## Payload enviado ao webhook

```json
{
  "nome": "string",
  "email": "string em minúsculas",
  "telefone": "somente dígitos, com DDD",
  "instituicao": "string",
  "consentimentoLGPD": true,
  "consentimentoVersao": "provisorio-2026-07",
  "eventoOrigem": "9º Congresso Nacional do CONFIES"
}
```

## Pendências antes de publicar

**Texto de consentimento LGPD.** Está como placeholder na constante
`TEXTO_CONSENTIMENTO`, em `components/FormularioCadastro.jsx`. Ao substituir
pelo texto aprovado, atualize também `CONSENTIMENTO_VERSAO` na mesma linha de
constantes — é ela que registra na lista qual versão cada pessoa aceitou.

**CORS no n8n.** A LP e o n8n ficam em domínios diferentes. No nó de webhook do
WF-1, é preciso liberar a origem da LP em Options → Allowed Origins. Sem isso o
navegador bloqueia o envio e o erro que aparece no console é genérico.

**Indexação.** O `layout.jsx` está com `robots: { index: false }`, já que a
página é de acesso por QR code e não deve aparecer em busca. Remova se a
intenção mudar.

## Estrutura

```
app/
  globals.css      @font-face, paleta e utilitários
  layout.jsx       metadados e preload das fontes
  page.jsx         composição da página
components/
  FormularioCadastro.jsx   validação, envio e estados
  PreviaAta.jsx            exemplo de ata gerada
  Grafismo.jsx             grafismo institucional inline
public/
  logotipo-vitora.svg
  grafismo-vitora.svg
  fonts/                   Neue Gravica em woff2
```

## Notas de implementação

**Cores.** Declaradas em `globals.css` como tripla RGB (`--vt-branco: 255 255
255`) e referenciadas no `tailwind.config.js` com `<alpha-value>`. Esse formato
é obrigatório: com cor em hexadecimal direto na variável, os modificadores de
opacidade do Tailwind (`text-branco/85`, `border-branco/20`) não geram CSS
nenhum e falham em silêncio.

**Tipografia.** A família Neue Gravica não possui peso Bold reto. O ExtraBold
(800) ocupa o papel de título definido no manual da marca. A fonte Ague não
está no projeto: ela existe apenas no logotipo, já vetorizado no SVG.

**Grafismo.** Inlinado como componente JSX (1,2 KB) em vez de servido como
arquivo, para permitir controle de cor e opacidade via CSS sem requisição
extra. Aplicado a 6% de opacidade, conforme o manual.

**Proteção contra robôs.** Há um campo oculto fora da ordem de tabulação. Se
vier preenchido, a página confirma o cadastro sem enviar nada ao webhook.

**Deduplicação.** O botão trava durante o envio para evitar duplo clique. A
deduplicação definitiva, por e-mail, é responsabilidade do WF-1.
