# Lote 2 — WhatsApp flutuante e respostas comerciais ELO / ELO DUO / Reserva

Data: 2026-11-23  
Estado: **PR candidata, sem merge/deploy**. Fonte: `main` de `CaminhosdaLapaTegra` no commit `89d8ca2fc1d12595e0cfe9efac051dcbcefaefef` (merge PR #12). MoreNumTegra permanece **somente leitura**.

## Objetivo

Concluir a coerência visual do botão de WhatsApp entre a home e as cinco páginas internas e melhorar trechos de resposta no **corpo editorial**, sem transformar as páginas em grandes FAQs ou alterar contrato estruturado.

## Alterações

### WhatsApp — cinco páginas

- `/jerivas/`, `/home-club/`, `/elo/`, `/eloduo/`, `/reserva/`.
- Substituído o texto comprimido "WhatsApp" pela imagem já usada no MoreNumTegra: `https://s3-gdigital.s3.amazonaws.com/gdigital/313/whatsapp-removebg.webp`.
- Botão verde de 54×54 px, imagem de 32×32 px, layout mobile 1fr + 54px, gap 10px.
- Preservado **exatamente** o `href` individual, número `5511960779328`, texto parametrizado e `data-placement="floating"`; adicionado rótulo acessível.
- CTA amarelo, seu texto, destino, e demais links/CTAs preservados.
- **Nenhuma alteração em homepage, scripts de tracking, WhatsApp no corpo ou formulário.**

### Conteúdo buyer-first — três páginas

- `/elo/`: H2 "ELO ou ELO DUO: qual condomínio procurar no Caminhos da Lapa?" e parágrafo que desambigua ELO na frente vs ELO DUO atrás, sem tratar disponibilidade histórica como estoque ativo.
- `/eloduo/`: H2 "Como consultar as condições de um apartamento no ELO DUO?" com referência a plantas 47/55/67 m² e handoff comercial existente; **não** informa preço nem disponibilidade vigente.
- `/reserva/`: H2 "Quanto custa um apartamento no Reserva Caminhos da Lapa?" e resposta transparente de que não há preço individual atual certificado na página; revendas são eventuais, com preço por imóvel, com link à página comercial existente.
- A resposta vem antes da vitrine de alternativas e dos cards atuais: preserva contexto para usuário e extração de passagens.

## Evidência / ownership

- `docs/search/ELO_SEARCH_CONTRACT.md`: ELO e ELO DUO não são um condomínio único; ELO na frente, ELO DUO atrás; consulta ELO histórico/particular.
- `docs/search/ELO_DUO_SEARCH_CONTRACT.md`: DUO é entidade própria; página comercial vigente no MoreNumTegra; antigo dado oficial "últimas unidades" não é prova de estoque hoje.
- `docs/search/RESERVA_SEARCH_CONTRACT.md`: planta 91/127/157 m²; comercialização original encerrada; oportunidades pontuais sem inventar preços.
- `docs/search/CAMINHOS_AEO_SEO_QUESTION_MATRIX_2026-11-23.md` e matriz GEO/AEO no MoreNumTegra: owner, resposta visível, exatidão factual, CTA.
- GSC histórico no MoreNumTegra, `docs/search/MNT_M3_03_SERP_COMPETITOR_SEARCH_INTENT_ANALYSIS_2026-09-13.md`: termos "reserva caminhos da lapa preço" e "elo caminhos da lapa preço" foram observados, **mas os H2 interrogativos desta PR são hipóteses de redação**, não frases de busca comprovadamente idênticas.

## Verificação estática concluída

- Todas as cinco páginas conservam **um H1 e um canonical**.
- HTML do formulário (`<form>...</form>`) e bloco JSON-LD são idênticos à `main` em todas as cinco.
- Cada botão flutuante utiliza logotipo, `data-placement="floating"` e rótulo acessível.
- Preservados URLs e scripts comerciais; ausência de edição MoreNumTegra.

## Correção de gate sitemap

- O check `Sitemap lastmod` detectou cinco páginas alteradas com `<lastmod>2026-11-14</lastmod>`.
- `sitemap.xml` foi atualizado **somente nas cinco URLs** para `2026-11-23`, data dos commits desta branch, respeitando o validador canônico; nenhuma regra/CI foi relaxada.
- Reexecutar o workflow sobre o novo head e confirmar status final antes de merge.

## Gates restantes

1. CI canônico / sitemap do head final.
2. Teste visual LOCAL_LIVE_SYNC em 360, 390, 430, 900 e 1440 px, incluindo barra fixa, toque e área segura do aparelho.
3. Confirmar HTML/CSS servido e CTAs em produção **somente após** autorização de merge.
4. Revalidar oferta e preço com fonte atual antes de atualizar qualquer afirmação volátil.
5. Monitoração GSC por pares consulta+página em 28/90 dias, sem afirmar ganho de ranking antecipadamente.

Não publicar, não efetuar merge nem criar nova rota SEO sem ordem específica. Rollback: reverter só os commits desta PR.
