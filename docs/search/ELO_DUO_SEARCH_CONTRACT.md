# ELO DUO — Search Contract RESF

Status: IMPLEMENTED_ON_BRANCH
Scope: `/eloduo/`

## Primary owner

`https://www.caminhosdalapategra.com.br/eloduo/` is the durable entity/search owner for ELO DUO Caminhos da Lapa.

Primary intent:
- understand ELO DUO Caminhos da Lapa;
- compare 47 m², 55 m² and 67 m²;
- see gallery, leisure and project details;
- understand the relationship with ELO;
- consult availability without asserting inventory.

## Query families

Primary:
- elo duo caminhos da lapa
- caminhos da lapa elo duo
- elo duo
- eloduo
- condomínio elo duo
- elo duo lapa
- elo duo vila anastácio

Secondary:
- elo duo 47 m²
- elo duo 55 m²
- elo duo 67 m²
- planta elo duo
- elo duo lazer
- elo duo pronto para morar

Relationship:
- elo e elo duo
- diferença elo elo duo
- elo duo mesmo terreno
- elo duo torre de trás

Commercial:
- apartamento à venda elo duo
- comprar elo duo
- disponibilidade elo duo
- preço elo duo

## Search Console baseline

Observed before migration, last-year window queried on 2026-09-30:
- `caminhos da lapa elo duo`: 26 impressions, avg position 41.5
- `elo duo`: 20 impressions, avg position 25.3
- `elo duo caminhos da lapa`: 18 impressions, avg position 41.5
- `eloduo`: 18 impressions, avg position 7.3333
- `elo duo lapa`: 4 impressions, avg position 9
- `condominio elo duo`: 1 impression, avg position 12

The URL already has distinct ELO DUO demand and must remain separate from `/elo/`.

## Ownership boundary

- `/eloduo/` owns ELO DUO entity and commercial-support intent.
- `/elo/` owns ELO entity intent.
- Home owns broad Lapa / Vila Anastácio discovery.
- MoreNumTegra owns current detailed commercial conversion for ELO DUO.

## ELO / ELO DUO relationship

Consumer business fact:
- ELO and ELO DUO are separate condominiums;
- same physical site;
- ELO is at the front;
- ELO DUO is behind ELO;
- both use `Rua Fortunato Ferraz, 851` in this consumer.

External-source conflict:
- the current Tegra ELO DUO page displays `Rua Fortunato Ferraz, 365`.
- this conflicts with the consumer-governed site fact and is not propagated.
- exact consumer address remains visible only in the standardized footer.

This conflict must remain documented and must not be silently reconciled.

## On-page

Title:
`ELO DUO Caminhos da Lapa | Plantas 47, 55 e 67 m²`

H1:
`ELO DUO Caminhos da Lapa: apartamentos de 47, 55 e 67 m²`

## Canonical

`https://www.caminhosdalapategra.com.br/eloduo/`

No merge/canonical to ELO.

## Structured data

WebSite + WebPage + BreadcrumbList + ImageObject + ApartmentComplex + FloorPlan 47 + FloorPlan 55 + FloorPlan 67 + FAQPage.

Exact street address is omitted from structured data under the consumer location policy.

No Offer, AggregateRating or precise availability object unless commercial truth is governed current.

## Commercial state

The current official Tegra page observed on 2026-09-30 displays:
- Entregue;
- Últimas unidades;
- 47 m², 55 m² and 67 m²;
- 2 or 3 bedrooms;
- 1 suite;
- up to 1 parking space.

The durable page therefore says `consulte disponibilidade`, while the detailed commercial path remains MoreNumTegra.

## Conversion

Primary CTA: consult ELO DUO.
Secondary:
- ELO relationship;
- ELO DUO commercial page on MoreNumTegra;
- Nova Vivere;
- Garden Design.

Map remains region-level with WhatsApp exact-location handoff.

## Performance

Hero is the ELO DUO project image and LCP candidate with preload + fetchpriority high.
Gallery/plants are below-the-fold.
No embedded tour iframe at initial load.
