# Release — Reconciliação FAQPage / Indexação — 2026-11-24

## Origem e escopo
- Repositório: `wagnerjfjunior/CaminhosdaLapaTegra`.
- Base canônica: `ad36f15e2f67aea245befa74edceec3c9ce7d9f8` (PR #14).
- URLs: `/`, `/jerivas/`, `/home-club/`, `/elo/`, `/eloduo/`, `/reserva/`.
- Seis FAQs visíveis por página: **36 perguntas e respostas** com correspondência integral no `FAQPage` de cada URL.
- 29 entradas anteriores em schema, com divergências de nome e texto. O patch atualiza somente `FAQPage.mainEntity`, preservando demais nós do grafo JSON-LD, `@id`, canonical, formulários, links, WhatsApp e copy visível.
- Novo `scripts/validate-faq-jsonld.mjs` compara cada pergunta/resposta e ordem com o JSON-LD, sem dependências. Executado em `.github/workflows/sfjm-canonical-ci.yml`.
- Sitemap de seis URLs com `<lastmod>2026-11-24</lastmod>` (dia da alteração), preservando domínio/canonical e `robots.txt`.

## Checagens / riscos
- `FAQPage` espelha só o FAQ real; H2 comerciais introduzidos nos lotes 1–3 **não** são adicionados como perguntas de FAQ sem correspondência visível.
- Nenhuma oferta, preço, review, rating ou estoque foi criado.
- Em geral, resultados avançados de FAQ do Google são restritos e sua exibição não está garantida. JSON-LD válido **não equivale a indexação**.
- Plano de publicação: PR com CI `SFJM canonical CI` e `Sitemap lastmod` aprovados; merge só após gates; Vercel `READY` no SHA correto; HTTP das seis URLs e sitemap; notificar IndexNow somente das seis URLs alteradas.
- IndexNow favorece aviso a mecanismos participantes, **não Google**. Google exige descoberta via sitemap e eventualmente inspeção manual no Search Console; indexação é decisão do mecanismo.
- Monitorar respostas 200, canonical, robots, marcação estruturada visível, GSC inspeção/indexação e cobertura de sitemap; registrar resposta de IndexNow.

## Rollback
Reverter o commit de merge desta PR via novo commit; manter o SHA anterior como baseline. Não fazer reset destrutivo de `main` nem reescrever histórico.

## Status inicial
PR preparada; completar evidências de merge/deploy/indexação após execução.
