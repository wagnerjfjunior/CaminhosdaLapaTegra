# Caminhos da Lapa Home — Search Contract RESF

Status: IMPLEMENTED_ON_BRANCH
Scope: `/`

## Search owner

The home is the broad geographic + master-development owner.

Primary query families:
- apartamentos na lapa
- apartamento na lapa
- apartamentos vila anastácio
- apartamento vila anastácio
- caminhos da lapa
- caminhos da lapa tegra
- tegra caminhos da lapa
- complexo caminhos da lapa
- empreendimento caminhos da lapa

Secondary:
- condomínio na lapa
- condomínio vila anastácio
- apartamentos zona oeste sp
- apartamentos caminhos da lapa
- morar na vila anastácio
- morar na lapa

## Ownership boundary

Home owns broad regional/master-development discovery.
Individual project pages own exact-project/entity queries.

Examples:
- `/jerivas/` owns Jerivás-specific queries.
- `/elo/` owns ELO-specific queries.
- `/eloduo/` owns Elo Duo-specific queries.
- `/reserva/` owns Reserva-specific queries.

Do not optimize every child page as the primary owner of `apartamento na lapa` or `apartamento vila anastácio`; use those terms contextually on child pages.

## Search Console baseline

Observed on the current root page before migration, last-year window queried on 2026-09-30:
- `tegra caminhos da lapa`: 305 impressions, avg position 5.8721
- `caminhos da lapa tegra`: 241 impressions, avg position 4.9627
- `tegra lapa`: 68 impressions, avg position 8.7647
- `caminhos da lapa`: 56 impressions, avg position 32.5893
- `complexo caminhos da lapa`: 11 impressions, avg position 10.0909
- `empreendimento caminhos da lapa`: 10 impressions, avg position 26.6

These are Search Console observations, not search-volume estimates.

## On-page target

Title:
`Apartamentos na Lapa e Vila Anastácio | Caminhos da Lapa`

H1:
`Apartamentos na Lapa e Vila Anastácio no Caminhos da Lapa`

The page should explain the hierarchy naturally:
Lapa -> Vila Anastácio -> Caminhos da Lapa -> individual condominiums/projects.

The home also preserves existing brand-query authority for:
- `caminhos da lapa tegra`
- `tegra caminhos da lapa`
- `tegra lapa`

This is supported with factual realization/construction context rather than stuffing the title with brand variants.

## IA

Primary home anchors:
- `#empreendimentos`
- `#rua-jardim`
- `#vila-anastacio`
- `#oportunidades`
- `#contato`

Child-page headers return users to these home sections instead of listing duplicated project names.

## FAQ / entity coverage

The home includes visible FAQ and matching FAQPage schema for:
- what Caminhos da Lapa is;
- Lapa vs Vila Anastácio geographic framing;
- project set;
- Rua Jardim;
- current/private opportunities;
- realization/construction participants.

Visible and structured FAQ must remain semantically aligned.

## Lead flow

Home uses Form 46 / tenant 313 and production-only POST behavior aligned with child pages.
Local preview must not create leads.
Production behavior is IMPLEMENTED, not production-validated until tested on the production hostname.

## Internal linking

The home links to each durable constituent page and to current commercial opportunities when contextually useful.
Exact-project pages link back to the home for broad regional/master-development discovery.

No doorway variants for:
- apartamento-lapa
- apartamento-vila-anastacio
- apartamentos-lapa

unless future evidence supports a distinct useful page and governance explicitly approves it.
