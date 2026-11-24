# Caminhos da Lapa — matriz SEO / GEO / AEO orientada a perguntas

Data: 2026-11-23. Escopo: www.caminhosdalapategra.com.br. Estado: **CANDIDATE / PR / SEM MERGE**. Projeto irmão `MoreNumTegra`: **somente leitura, nenhuma alteração**.

## 1. Finalidade e limites

Respostas úteis e extraíveis para pesquisa tradicional e interfaces com IA, **sem FAQ gigante**, textos ocultos, páginas doorway, repetição artificial ou promessa de posição zero. Cada pergunta recebe um owner semântico, fonte, prova factual, resposta direta em HTML visível e caminho comercial verificável. Ser citável não implica ser citado ou ranquear.

Separação aceita no estudo de ownership de 2026-09-30:
- **CaminhosdaLapaTegra /**: marca/macroempreendimento, Rua Jardim, localização, condomínios integrantes, histórico e descoberta.
- **CaminhosdaLapaTegra /jerivas/, /home-club/, /elo/, /eloduo/, /reserva/**: informação durável sobre condomínio específico; disponibilidade histórica/particular só sob consulta.
- **MoreNumTegra /empreendimentos/.../**: detalhes comerciais do projeto atual (preço/unidade/condições/plantas) segundo fonte vigente.
- **MoreNumTegra /regioes/lapa/**: descoberta geográfica do portfólio Tegra, diferente do master Caminhos. Não criar /caminhos-da-lapa/ duplicado no MoreNumTegra.
- **Nenhuma canonical cruzada nem redirect**: são propriedades distintas.

Esta matriz não substitui os contratos RESF nem autoriza modificar o repositório irmão, publicar, fazer merge ou divulgar estoque sem validação.

## 2. Evidências existentes (GitHub MoreNumTegra)

1. `docs/search/MNT_CAMINHOS_SEARCH_INTELLIGENCE_STUDY_2026-09-30.md` + `docs/search/data/search-intelligence/caminhos-lapa/search_intelligence_2026-09-30.csv`: histórico GSC e Planner, snapshots separados.
2. `docs/search/data/search-intelligence/raw/google-keyword-planner/2026-09-29/`: seis exportações originais; período 2025-09 a 2026-08.
3. `docs/search/data/MNT_M3_02_CAMINHOS_GSC_FULL_QUERY_CORPUS_2025-05-13_2026-09-13.csv`: corpus histórico de consultas.
4. `docs/search/MNT_M3_03_SERP_COMPETITOR_SEARCH_INTENT_ANALYSIS_2026-09-13.md`: SERP e questões comerciais; p.ex. "reserva caminhos da lapa preço" (156 impressões históricas), "elo caminhos da lapa preço" (84), "reserva caminhos da lapa endereço" (16). **Impressões não são volume mensal**.
5. `docs/search/MNT_M3_05_SEARCH_INTENT_QUERY_OWNERSHIP_CONTRACT_2026-09-13.md`; `docs/search/MNT_CAMINHOS_OWNERSHIP_RECONCILIATION_2026-09-30.md`: owners e estados comerciais.
6. `docs/geo/MNT_M4_06_GEO_AEO_ANSWERABILITY_READINESS_2026-09-14.md` + `docs/geo/data/MNT_M4_06_ANSWERABILITY_MATRIX.csv`: gates OWNER_MATCH, VISIBLE, DIRECT, ENTITY_CLEAR, FACT_BOUND, COMMERCIAL_STATE_CLEAR, NO_CONTRADICTION, NEXT_STEP_CLEAR.
7. Neste repo: `docs/search/*_SEARCH_CONTRACT.md` para homepage e cinco páginas filhas.

Observação: snapshots de setembro documentam estados daquele período, não confirmam preços ou estoque em novembro.

## 3. Rechecagem de demanda — 23/11/2026

Fonte externa: OpenSEO, projeto `caminhosdalapategra.com.br`, língua pt. Volumes **estimados mensais**, não contagens exatas do Google. Variantes de grafia e singular/plural não devem ser somadas sem análise de agrupamento.

| Consulta | São Paulo/SP | Brasil | Natureza |
|---|---:|---:|---|
| lapa | 165.000 | 301.000 | ampla, ambígua; **não** target principal isolado |
| vila anastácio | 8.100 | 12.100 | geográfica / informacional |
| vila anastacio | 2.400 | 3.600 | variante sem acento, possível overlap |
| apartamentos na lapa | 590 | 1.000 | comercial |
| apartamento vila anastacio | 140 | 210 | comercial |
| caminhos da lapa | 720 | 880 | entidade / master |
| imóveis na lapa | 260 | 390 | discovery, intenção mista |

No GSC conectado (`sc-domain:caminhosdalapategra.com.br`), janela de 3 meses, consulta em 23/11/2026: "caminhos da lapa" 39 impressões / posição média 31,7; "caminhos da lapa tegra" 29 / 7,6; "tegra caminhos da lapa" 25 / 8,9 e 2 cliques; "nova vivere vila anastacio" 11 / 18,3. Ausência das variantes genéricas na extração de 38 consultas não significa demanda zero. Não comparar diretamente essa janela com o corpus GSC histórico de setembro.

**Decisão**: otimizar o master sobretudo para **Caminhos da Lapa**, com suporte comercial **apartamentos na Lapa** e contexto geográfico **Vila Anastácio**. Não perseguir "lapa" isoladamente; não transformar estimativa de volume em promessa de ranking.

## 4. Matriz de perguntas — hipótese editorial versus busca observada

Legenda: `GSC_OBSERVED` registra **consulta/frase observada**, não a pergunta natural correspondente; `PLANNER/OPENSEO` indica evidência para o termo, não para a formulação interrogativa; `EDITORIAL_HYPOTHESIS` precisa de validação posterior. Priority A = impacto comercial/identidade; B = suporte/entidade; C = condicionado a fatos.

| ID | Pergunta natural a responder | Evidência real | Owner principal | Resposta/CTA pretendido | Estado |
|---|---|---|---|---|---|
| Q01 | O que é o Caminhos da Lapa? | GSC marca; matriz answerability master | `/` | Descrever complexo, fases e Rua Jardim; `#empreendimentos` | Existente no FAQ; pode ser melhor distribuída |
| Q02 | Onde fica o Caminhos da Lapa: Lapa ou Vila Anastácio? | OpenSEO bairro + GSC marca | `/` | Zona Oeste/SP, contexto Vila Anastácio e Lapa; localização sem número de rua não confirmado | **Implementado em seção #vila-anastacio** + FAQ |
| Q03 | Quais condomínios já foram entregues no Caminhos da Lapa? | Fatos do master / inventário legado | `/` | Jerivás, Home Club, ELO e Reserva, com links internos | Existente em #empreendimentos |
| Q04 | Quais são as opções para morar no Caminhos da Lapa hoje? | GSC entidade; fontes oficiais históricas; estoque volátil | `/` | Comparar Nova Vivere, Garden Design, ELO DUO; conferir disponibilidade | Existente em #oportunidades; revalidar estado comercial |
| Q05 | O que é a Rua Jardim do Caminhos da Lapa? | Master oficial e schema atual | `/` | Explicar eixo paisagístico, com fatos documentados; `#rua-jardim` | Existente |
| Q06 | Quais apartamentos na Lapa posso comparar no Caminhos da Lapa? | OpenSEO: "apartamentos na lapa" comercial 590 SP/mês | `/` | Opções por estágio, diferenciar projetos; links para páginas comerciais | **Aprimorado #vila-anastacio** |
| Q07 | Como são as plantas do Jerivás Caminhos da Lapa? | GSC Jerivás + fact pack | `/jerivas/` | 105/136m² e galeria; perguntar sobre oportunidade particular | Existente |
| Q08 | Quais as plantas do Home Club Caminhos da Lapa? | Contract Home Club, sem GSC observada na baseline antiga | `/home-club/` | 62/79m², lazer e tour; consultar disponibilidade particular | Existente |
| Q09 | Qual a diferença entre ELO e ELO DUO? | GSC leakage / duas entidades | `/elo/` e `/eloduo/` com primazia ELO DUO para consulta DUO | Dois condomínios independentes no mesmo conjunto; link entre eles | Parcialmente existente; revisar trecho específico |
| Q10 | O ELO DUO está pronto e tem unidades? | GSC projeto, observação oficial histórica | `MoreNumTegra /empreendimentos/caminhos-da-lapa-elo-duo/` | Estágio pronto; estoque apenas se revalidado; CTA para condições | Hub faz handoff; comercial do MoreNumTegra intocado |
| Q11 | Qual é o preço do Reserva Caminhos da Lapa? | **GSC_OBSERVED** "reserva caminhos da lapa preço": 156 impressões históricas | `MoreNumTegra /empreendimentos/reserva-caminhos-da-lapa/` | Não inventar preço; consultar revenda/condições sob fonte vigente | Sem edição nesta PR |
| Q12 | Quanto custa um apartamento no ELO Caminhos da Lapa? | **GSC_OBSERVED** "elo caminhos da lapa preço": 84 impressões históricas | `/elo/` para ELO histórico; `MoreNumTegra .../caminhos-da-lapa-elo-duo/` somente para DUO | Desambiguar condomínio primeiro; nunca trocar ELO por DUO sem contextualizar | Lacuna editorial de desambiguação |
| Q13 | Onde fica o Reserva Caminhos da Lapa? | **GSC_OBSERVED** "reserva caminhos da lapa endereço": 16 impressões históricas | `/reserva/` com nível de precisão autorizado | Contexto local; endereço exato somente conforme política atual do rodapé | Existente parcialmente; checar divergências |
| Q14 | Qual é a diferença entre as plantas do Reserva de 91, 127 e 157m²? | GSC Reserva entidade / fact pack | `/reserva/` | Comparar tipologias sem afirmar unidade à venda | Existente |
| Q15 | O Nova Vivere é lançamento? Quais plantas? | GSC `nova vivere vila anastacio`; fact pack | `MoreNumTegra /empreendimentos/nova-vivere/` | Estágio/planta factual; confirmação comercial vigente | Link do master, sem duplicar ficha |

**Regra**: não atribuir volume de `reserva caminhos da lapa preço` à pergunta completa "Qual é o preço...?" e não declarar que todas as perguntas constam de Google PAA/AI Overview.

## 5. Auditoria on-page da homepage e páginas de condomínio (GitHub main, 23/11)

- Home: title `Apartamentos na Lapa e Vila Anastácio | Caminhos da Lapa`, canonical próprio, H1 único, vitrine três oportunidades e quatro condomínios entregues. FAQ visível e JSON-LD; a seção de bairro continha discurso interno (“busca ampla”, “home como página principal de descoberta”). **Remediação neste PR** substitui por conteúdo direto e âncoras relevantes. Meta description reforça produtos sem inventar estoque/preço.
- Jerivás: H1 e title exatos, 105/136m², tour/planta/lazer; responder perguntas de planta na própria página.
- Home Club: H1 e title exatos, 62/79m²; nenhuma evidência de volume de Home Club na baseline antiga deve ser confundida com demanda inexistente.
- ELO: H1 e title exatos, 47/55/67m²; preservar entidade independente do ELO DUO.
- ELO DUO: H1 e title exatos, 47/55/67m²; conexão comercial com MoreNumTegra; estoque não é perpetuamente validado.
- Reserva: H1 e title exatos, 91/127/157m²; perguntas de preço/endereço/plantas devem apontar ao owner correto, conforme política de fato comercial.
- Todas as seis páginas possuem canonical, robots `index,follow`, um H1 observado e uma área JSON-LD (contagem de scripts não equivale a elegibilidade de rich results).

**Pendência explícita**: conferir HTTP da produção versus GitHub main, indexação real, leitura mobile, conteúdo visível e schema por ferramentas Google; merge não comprova publicação.

## 6. Alteração bounded nesta PR

Somente `index.html` e este documento:
1. manter `title`, `H1`, estrutura visual, anúncios, cards, Form46, WhatsApp, eventos, imagens e JSON-LD;
2. em `#vila-anastacio`, usar H2 de escolha real + resposta direta e três cartões: onde fica, opções e diferencial;
3. evitar afirmar avaliação financeira, ranking ou que todas as unidades estejam disponíveis;
4. revisar meta description para projeto + produtos;
5. **não expandir o FAQ nem JSON-LD**: perguntas estão no conteúdo editorial.

## 7. QA / Gates antes de merge

- [ ] Revisão de copy e intenção pelo proprietário (LVR 8081)
- [ ] CI canônico + sitemap (se solicitado)
- [ ] Head/description/H1/âncoras/links e ausência de alterações de Form46/WhatsApp/JSON-LD por diff
- [ ] Conferência mobile 360/390/430 e desktop
- [ ] Smoke HTTP e HTML da produção após eventual release
- [ ] Revisão comercial do status Nova Vivere/Garden/ELO DUO antes de novas alegações de estoque
- [ ] Medição 28/90 dias GSC por `query+page` e CTR; observação IA quando ferramenta oferecer evidência
- [ ] Revalidar discrepâncias entre documentação histórica e atual (domínio master oficial, endereços e estágio) sem corrigir por inferência
- [ ] Homologar matriz de respostas antes de qualquer alteração nos cinco produtos históricos ou no MoreNumTegra

## 8. Próximas iterações (não executadas)

Lote 2, branch independente: revisar ELO ↔ ELO DUO e perguntas de desambiguação; Lote 3: Reserva (intenção preço/endereço) e histórico de revenda; Lote 4: Home Club/Jerivás (plantas e diferenciais). Revalidar fontes e preservar um único owner por pergunta. Não produzir artigo ou URL por keyword isolada.
