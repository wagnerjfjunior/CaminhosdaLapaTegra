# Homepage — reconciliação do schema com o hub MoreNumTegra (2026-11-24)

## Problema observado
- O usuário relata que o **Google Rich Results Test** exibe "Nenhum item foi detectado" para `https://www.caminhosdalapategra.com.br/`.
- O Schema Markup Validator retornou dois itens no nível superior, `WebPage` e `FAQPage`, com zero erros e zero avisos, embora houvesse seis nós no grafo.
- Isso **não é um erro de sintaxe**, mas mostra necessidade de comparação de modelagem com o hub MoreNumTegra; o contador de itens de cada ferramenta não mede o número de nós JSON-LD.

## Referências inspecionadas
- MoreNumTegra `main` — `vercel.json`: rota `/` reescreve para `src-greenn/preview/index.html`.
- Esse HTML tem `CollectionPage` ligado a `ItemList` (15 empreendimentos), e nós `Organization`, `Person`, `ContactPoint`, `RealEstateAgent`, `Service`, `ApartmentComplex`; além disso um `VideoObject` presente em outro script, e `FAQPage`.
- CaminhosDaLapaTegra `main` antes da alteração: `WebSite`, `WebPage`, `ImageObject`, `Place`, `ItemList` (7 links), `FAQPage`, sem entity nodes dos condomínios nem do atendimento.
- Documentação Google Search Central: Google Rich Results Test mostra apenas tipos que suportam aparências específicas; `Organization` / `LocalBusiness` / `BreadcrumbList` podem ser tipos suportados conforme requisitos. Um `CollectionPage` ou `ItemList` válido **não garante** resultado avançado.

## Implementação candidata da homepage
- Troca apenas o tipo `WebPage` para `CollectionPage` (subtipo válido, mesma `@id`, canonical e title).
- `mainEntity` aponta exclusivamente para a `ItemList` de sete projetos; `about` continua o `Place` geográfico do complexo.
- Acrescenta cinco `ApartmentComplex` para os cinco condomínios com páginas próprias, nomes e URLs já presentes no catálogo; não inventa dados de unidades, estágio, disponibilidade ou preço.
- Acrescenta `Organization` Tegra Vendas, `Person` Sabrina da Tegra, `ContactPoint` comercial e `Service` de atendimento. Os dados vêm do rodapé visível na homepage e de relações já estruturadas na homepage do MoreNumTegra. `mentions` liga a CollectionPage ao Service.
- Preserva o aviso visível do footer: página especializada, **não** site institucional da Tegra. Não declara o domínio como URL institucional da empresa.
- Não copia `VideoObject` (sem vídeo na homepage), `Product`/`Offer` (preços não comprovados) nem `RealEstateAgent` com endereço comercial do estande como se fosse endereço confirmado da atividade do agente.
- Preserva integralmente o nó `FAQPage` sincronizado na PR #15; os demais nós originais mantêm seus `@id`.
- Adiciona `scripts/validate-home-hub-schema.mjs` ao CI para garantir integridade da homepage, URLs, relações e fatos visíveis.

## Gates e limites
1. CI canônico e sitemap `lastmod` do commit da página atualizados para 2026-11-24 (o sitemap já tinha essa data após PR #15).
2. Rechecagem estrutural do grafo e `FAQPage` versus FAQ visível.
3. Homologação no Google Rich Results Test após Preview/publicação; não afirmar presença de um tipo avançado sem verificação na ferramenta. Se o Google não detectar algum tipo suportado, isso **não autoriza** inventar ofertas, negócio local, avaliações ou vídeo.
4. Deploy `main` e IndexNow dependem de autorização de merge e confirmação de CI. MoreNumTegra segue somente leitura.
5. Rollback via revert da PR, baseline `6b99c9f139131dc554303251466b854d29b36a7b`.
