# Site FisioStudio (proposta do Projeto 360º)

Site estático em HTML/CSS, sem build. Para ver, abrir `index.html` no browser ou servir a pasta:

```bash
python3 -m http.server 8000
```

## Páginas

- `index.html`: página inicial (direções por necessidade, Linha da vida, saúde pélvica, equipa, como marcar, localização, rodapé ERS).
- `marcar.html`: pedido de marcação online (especialidade, para quem, onde, dias e período, contactos).
- `lares.html`: página para lares, centros de dia e B2B (evidência, como funciona, pedido de dossier ou demonstração).

## Notas

- O rodapé não mostra o n.º da licença de funcionamento (não disponível). O Reg. ERS 1058/2016 pede-o na publicidade em saúde, por isso deve ser acrescentado quando a clínica o tiver.
- A equipa aparece por especialidade, sem nomes nem cédulas. Se forem publicados nomes, a cédula profissional tem de os acompanhar.
- Os formulários de `marcar.html` e `lares.html` enviam para fisiostudioab@gmail.com através do FormSubmit (formsubmit.co, sem conta). No primeiro envio, o FormSubmit manda um email de ativação para essa caixa: é preciso clicar em "Activate Form" uma vez. Se o envio falhar, o visitante pode enviar o pedido pelo próprio email.
- Validar com a gerência as condições da sessão de demonstração gratuita (redigidas pela equipa do projeto).

## Sistema visual

Cores do logótipo, em `:root` de `assets/styles.css`: carvão #424242 nas placas de direção, laranja #EF8120 para a marca e as ações de marcação (sempre com texto escuro), laranja escuro para localização e texto laranja sobre branco. Fonte Atkinson Hyperlegible Next (self-hosted em `assets/fonts/`). Contraste de todas as combinações ≥ 5,3:1.

Contexto de produto em `PRODUCT.md`; direção visual em `.impeccable/surfaces/index-html.md`.
