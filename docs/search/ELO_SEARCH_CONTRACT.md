# ELO — Search Contract RESF

Status: IMPLEMENTED_ON_BRANCH
Scope: `/elo/`

## Primary owner

`https://caminhosdalapategra.com.br/elo/` is the durable entity/search owner for ELO Caminhos da Lapa.

Primary intent:
- understand ELO Caminhos da Lapa;
- compare plants 47, 55 and 67 m²;
- see gallery, leisure and tour;
- understand the physical/semantic relationship with ELO DUO;
- consult possible private opportunities without asserting inventory.

## Query families

Primary:
- elo caminhos da lapa
- caminhos da lapa elo
- condomínio elo caminhos da lapa
- apartamento elo caminhos da lapa
- elo vila anastácio
- elo lapa

Secondary:
- elo 47 m²
- elo 55 m²
- elo 67 m²
- planta elo caminhos da lapa
- elo tour virtual
- elo lazer

Relationship:
- elo e elo duo
- diferença elo elo duo
- elo duo mesmo terreno
- elo duo torre de trás

Commercial support:
- apartamento à venda elo caminhos da lapa
- oportunidade elo caminhos da lapa
- comprar apartamento elo

## Search Console baseline

Observed for the current property before migration, last-year window queried on 2026-09-30:
- `caminhos da lapa elo`: 91 impressions, avg position 27.4176
- `caminhos da lapa - elo`: 55 impressions, avg position 30.1273
- `elo caminhos da lapa`: 29 impressions, avg position 34.6552
- `caminhos da lapa`: 35 impressions, 1 click, avg position 51.8857

Cross-query leakage already exists:
- ELO page appeared for `caminhos da lapa elo duo`, `elo duo caminhos da lapa` and `elo duo`.
The page therefore must clarify the relationship while preserving separate query ownership.

## Ownership boundary

- `/elo/` owns ELO entity intent.
- `/eloduo/` owns ELO DUO entity intent.
- Home owns broad `apartamento na Lapa` / `apartamento Vila Anastácio`.

ELO and ELO DUO are two individual condominiums on the same physical site. ELO is the front condominium; ELO DUO is behind it.
Both use the same exact address in this consumer: Rua Fortunato Ferraz, 851.

Exact street address remains visible only in the standardized footer.

## On-page

Title:
`ELO Caminhos da Lapa | Plantas 47, 55 e 67 m²`

H1:
`ELO Caminhos da Lapa: apartamentos de 47, 55 e 67 m²`

The current official Tegra page states a commercial area range of 47 m² to 68 m² while its visible standard plants are 47, 55 and 67 m². Public page wording uses the visible standard plant set and records the range in explanatory copy.

## Canonical

`https://caminhosdalapategra.com.br/elo/`

No doorway variants.

## Structured data

WebSite + WebPage + BreadcrumbList + ImageObject + ApartmentComplex + FloorPlan 47 + FloorPlan 55 + FloorPlan 67 + FAQPage.

No Offer, AggregateRating, Review or current availability claim without governed evidence.

## ELO / ELO DUO relationship

The page must include a visible explanation that:
- they are separate condominiums;
- they occupy the same site;
- ELO is the front condominium;
- ELO DUO is the posterior condominium;
- a contextual link exists to `/eloduo/`.

The relationship explanation exists to reduce user confusion and query cannibalization; it is not a canonical merge.

## Conversion

Primary CTA: consult ELO opportunity.
Secondary:
- ELO DUO comparison;
- Nova Vivere;
- Garden Design.

Map remains region-level with WhatsApp exact-location handoff.

## Performance

Hero uses official ELO imagery as LCP candidate with preload + fetchpriority high.
Gallery and plants are below-the-fold.
Tour opens by explicit click rather than initial iframe boot.
