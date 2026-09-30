# Reserva — Search Contract RESF

Status: IMPLEMENTED_ON_BRANCH
Scope: `/reserva/`

## Primary owner

`https://caminhosdalapategra.com.br/reserva/` is the durable entity/search owner for Reserva inside Caminhos da Lapa.

Primary intent:
- understand Reserva Caminhos da Lapa;
- compare 91 m², 127 m² and 157 m²;
- see plants, leisure and tour;
- consult possible private or punctual opportunities without asserting inventory.

## Query families

Primary:
- reserva caminhos da lapa
- caminhos da lapa reserva
- condomínio reserva caminhos da lapa
- apartamento reserva caminhos da lapa
- reserva vila anastácio
- reserva lapa

Secondary:
- reserva 91 m²
- reserva 127 m²
- reserva 157 m²
- planta reserva caminhos da lapa
- reserva beach tennis
- reserva tour virtual

Commercial support:
- apartamento à venda reserva caminhos da lapa
- oportunidade reserva caminhos da lapa
- comprar apartamento reserva

## Search Console baseline

Observed for the current property before migration, last-year window queried on 2026-09-30:
- `caminhos da lapa`: 69 impressions, avg position 68.6232
- `caminhos da lapa reserva`: 50 impressions, avg position 43.12
- `reserva caminhos da lapa`: 35 impressions, avg position 37.9429
- `empreendimento caminhos da lapa`: 15 impressions, avg position 73.2
- `reserva - caminhos da lapa`: 9 impressions, avg position 28.7778
- `rua fortunato ferraz 280`: 2 impressions, avg position 51

These are Search Console observations, not keyword-volume estimates.

## Ownership boundary

Home page owns broad `apartamento na Lapa` / `apartamento Vila Anastácio` discovery.
Reserva owns exact-project/entity intent and uses Lapa/Vila Anastácio contextually.
MoreNumTegra may keep a separate commercial Reserva page with distinct conversion intent.

## On-page

Title:
`Reserva Caminhos da Lapa | Plantas 91, 127 e 157 m²`

H1:
`Reserva Caminhos da Lapa: apartamentos de 91, 127 e 157 m²`

## Canonical

`https://caminhosdalapategra.com.br/reserva/`

No doorway variants.

## Structured data

WebSite + WebPage + BreadcrumbList + ImageObject + ApartmentComplex + FloorPlan 91 + FloorPlan 127 + FloorPlan 157 + FAQPage.

No Offer, AggregateRating, Review or availability claim without governed evidence.

## Conversion

Primary CTA: consult Reserva opportunity.
Secondary: Nova Vivere / Garden Design commercial handoff and Reserva commercial page on MoreNumTegra.
Exact address remains visible only in the standardized footer.
Map remains region-level with WhatsApp exact-location handoff.

## Performance

Hero uses the official project access image as LCP candidate with preload + fetchpriority high.
Gallery/plants remain below-the-fold and lazy.
Tour opens by explicit click and is not embedded at initial page load.
