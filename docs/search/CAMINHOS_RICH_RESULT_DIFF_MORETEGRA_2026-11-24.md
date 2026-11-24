# Hub Caminhos da Lapa — Google Rich Results differential audit (2026-11-24)

## Evidência fornecida pelo usuário
- Captura de código do hub MoreTegra: Google Rich Results Test apresenta **3 itens válidos**: Empresas locais (1), Organização (1), Vídeos (1).
- Captura da homepage Caminhos da Lapa: **Nenhum item foi detectado**.
- Ambos os HTMLs foram fornecidos integralmente; o arquivo Caminhos enviado representa a versão anterior à PR #16. Para a correção, a base usada foi a `main` atual após PR #16 (`098cb0363d659a77c94776e7c768e78dc83af905`).
- O teste do Google NÃO indica erro sintático do `CollectionPage`/`FAQPage`; verifica tipos específicos de rich result.

## Diferenças que explicam os três itens MoreTegra
1. **Empresas locais:** `<script id="mt-localbusiness-schema" type="application/ld+json">` independente de `@type: RealEstateAgent` contendo `name`, `url`, `sameAs`, `telephone`, `address`, `geo`, `image`, `logo`, `identifier` e `priceRange`. Caminhos PR #16 tinha `Person`, `Organization`, `Service`, mas não `RealEstateAgent`.
2. **Organização:** o grafo MoreTegra tinha `Organization` com `name` e `@id`; Caminhos PR #16 também tinha `Organization` (Tegra Vendas) mas sem `logo`/ligação `contactPoint`, acrescentados aqui. O teste pode tratar Organization como entidade relacionada; não prometer detecção sem prova de execução do Google.
3. **Vídeos:** MoreTegra tem vídeo real de campanha com embed e `VideoObject` independente. Caminhos não tem vídeo no HTML. **Não copiar VideoObject** sem incorporar mídia real autorizada, thumbnail, data e player visível.

## Correção preparada
- Um segundo bloco JSON-LD na homepage com `RealEstateAgent` independente, com identidade do contato Sabrina da Tegra, mesmo número, CRECI, imagem e perfil oficial já governados no hub MoreTegra.
- Rua Fortunato Ferraz 625, São Paulo/SP, CEP 05093-000 e geo foram extraídos da homepage MoreTegra e constam como **endereço do estande de atendimento**, não como endereço de cada condomínio nem como sede própria da corretora. Essa informação foi adicionada ao rodapé visível do Caminhos para consistência.
- `Service.provider` agora aponta ao `RealEstateAgent`; `broker` à `Person`.
- `Organization` Tegra Vendas recebe `logo` e `contactPoint` existentes.
- `CollectionPage`, `ItemList`, 5 `ApartmentComplex`, FAQ literal, canonical, Form 46, WhatsApp e performance operacional preservados.
- Scripts `validate-home-localbusiness-schema.mjs` e `validate-home-hub-schema.mjs` adicionados/atualizados no CI.

## Gate
- Validar CI `SFJM canonical CI` e `Sitemap lastmod`.
- Publicar somente com autorização de merge; Vercel SHA igual `main`, HTTP 200, blocos JSON-LD válidos.
- Após publicação, testar **URL** no Google Rich Results Test e comparar tipos detectados, em vez de inferir sucesso pela presença de `RealEstateAgent`. Não é viável garantir de antemão 2 ou 3 itens.
- No modelo de referência 3 itens: o terceiro é Vídeos e não é aplicável à homepage atual.
- Rollback por revert da PR; baseline `098cb0363d659a77c94776e7c768e78dc83af905`.
