# Lote 3 — SEO/AEO orientado à decisão: Jerivás e Home Club

Data: 2026-11-23. Estado: **CANDIDATE / PR DRAFT / SEM MERGE**. Base canônica `main`: `246271a1c72bc3382c66e2c645d8c28c2e600551` (PR #13).

## 1. Escopo e justificativa

Auditoria do HTML da `main` e leitura dos contratos:
- `docs/search/JERIVAS_SEARCH_CONTRACT.md`
- `docs/search/HOME_CLUB_SEARCH_CONTRACT.md`
- `docs/search/CAMINHOS_AEO_SEO_QUESTION_MATRIX_2026-11-23.md`

O FAQ já cobre plantas, dormitórios, estágio e consulta de disponibilidade em ambos os empreendimentos. Oportunidade de melhoria: bloco anterior à vitrine comercial, ainda com H2 genérico “Do [projeto] para as oportunidades atuais do complexo”. Não há motivo para criar FAQ gigante, novas URLs, schema artificial ou duplicar conteúdo.

## 2. Evidências e limites

**Jerivás**:
- O contrato SEO registra `caminhos da lapa condomínio jerivás` (21 impressões, posição média 39,9048) e `jerivás planta` (1 impressão, posição 56) no GSC do domínio, janela histórica consultada em 2026-09-30.
- Dados da página e contrato: plantas 105 e 136 m²; condomínio entregue; comercialização original encerrada; possibilidade de oportunidades particulares sem estoque verificado.

**Home Club**:
- Consulta `home club` no GSC de 2026-09-30 não retornou linhas na janela usada. **Não equivale a demanda zero.**
- Contrato e página indicam 62 e 79 m², projeto entregue e comercialização original concluída. Um nome de arquivo histórico diz `61m`; mantém-se o dado comercial documentado de 62 m², **sem reconciliar por inferência**.

Perguntas adicionadas são **hipóteses editoriais** com entidades/intent sustentadas; não são declarações de que o Google exibe as perguntas literais em PAA/AI Overview.

## 3. Alterações exatas

- `/jerivas/`: novo H2 **Como encontrar um apartamento no Jerivás de 105 ou 136 m²?**; resposta direta informa estado histórico, mercado particular sob confirmação, e continua o handoff aos cards Nova Vivere/Garden Design.
- `/home-club/`: novo H2 **Como consultar um apartamento de 62 ou 79 m² no Home Club?**; resposta direta para estoque particular sujeito à verificação, com a mesma vitrine comercial.
- `/jerivas/`: correção tipográfica do FAQ `Na na região` → `Na região`, sem modificar sentido.
- `sitemap.xml`: `<lastmod>` de ambas as páginas atualizado para a data dos commits, sem tocar nas outras URLs.

Preservados H1, title, canonical, robots, FAQ question count, JSON-LD, identidade gráfica, galerias, imagens, CTA, WhatsApp, formulário Greenn 46, medição e links existentes. Nenhum preço/unidade/endereço foi inventado. **MoreNumTegra não foi modificado.**

## 4. Critérios de aceite

- OWNER_MATCH: Jerivás/Home Club respondem apenas sobre suas entidades.
- VISIBLE/DIRECT: resposta explícita no corpo HTML, antes dos cards.
- FACT_BOUND: plantas e comercialização baseadas no contrato do projeto.
- COMMERCIAL_STATE_CLEAR: disponibilidade particular precisa ser confirmada; preço não inventado.
- NEXT_STEP_CLEAR: cards existentes e CTA Form46.
- NO_CONTRADICTION: manter HTML visível, FAQ e schema compatíveis.

## 5. Gates

- [ ] CI canônico e sitemap do head final.
- [ ] Homologação visual LOCAL_LIVE_SYNC em 360/390/430/900/1440px.
- [ ] Toque no WhatsApp/CTAs e navegação entre projetos.
- [ ] QA da página servida e canonical/JSON-LD em produção após eventual merge aprovado.
- [ ] Monitoramento de impressões, cliques, CTR e consulta+página em 28/90 dias; nenhum ranking garantido.

**Não efetuar merge ou deploy sem ordem específica do proprietário.** Rollback: reverter os commits da PR, sem reset da `main`.
