# Jerivás — Search Contract RESF

Status: IMPLEMENTED_ON_BRANCH
Branch: `feature/migracao-green-fase1`
Scope: `/jerivas/`
Framework: RESF v1 — C03 Search Contract + C04 IA + C05 Page + C06 Content + C07 Schema + C08 Linking + C10 Performance + C17 Exact Project Readiness

## Primary owner

`https://caminhosdalapategra.com.br/jerivas/` is the durable entity/search owner for Jerivás inside Caminhos da Lapa.

Primary intent:
- understand the Jerivás condominium;
- compare 105 m² and 136 m²;
- see plants, leisure, gallery and tour;
- consult possible current/private opportunities without claiming inventory.

It must not become a duplicate of a current-commercial MoreNumTegra page.

## Query families

Primary:
- jerivás caminhos da lapa
- caminhos da lapa jerivás
- caminhos da lapa condomínio jerivás
- jerivás
- condomínio jerivás

Secondary:
- jerivás planta
- planta jerivás 105 m²
- planta jerivás 136 m²
- apartamento jerivás caminhos da lapa
- jerivás lapa
- jerivás tour virtual
- jerivás lazer

Commercial support:
- apartamento à venda jerivás
- oportunidade jerivás
- comprar apartamento jerivás

Commercial support queries are consultation-led. No stock, price or availability is asserted without current evidence.

## Search Console baseline

Observed for the current property before migration, last-year window queried on 2026-09-30:
- `caminhos da lapa condomínio jerivás`: 21 impressions, avg position 39.9048
- `caminhos da lapa jerivas`: 14 impressions, avg position 39.4286
- `caminhos da lapa - jerivás`: 2 impressions, avg position 31.5
- `caminhos da lapa jerivás`: 2 impressions, avg position 40.5
- `jerivas`: 3 impressions, avg position 55.3333
- `jerivás planta`: 1 impression, avg position 56

These are observed Search Console measurements, not keyword-volume estimates.

## On-page contract

Title:
`Jerivás Caminhos da Lapa | Plantas 105 e 136 m²`

H1:
`Jerivás Caminhos da Lapa: apartamentos de 105 e 136 m²`

Description must include naturally:
- Jerivás Caminhos da Lapa
- condomínio
- Lapa
- 105 e 136 m²
- 3 ou 4 dormitórios
- plantas
- lazer
- tour virtual
- consulta de oportunidades

No meta-keywords tag.

## Content architecture

1. Hero — exact entity + 105/136 m² + consultation CTA.
2. Product facts — meters, bedrooms, suites, parking, delivered state.
3. Jerivás inside Caminhos da Lapa / Rua Jardim.
4. Gallery — shared editorial viewer pattern.
5. Implantation + 105 m² + 136 m² only.
6. Leisure and amenity set.
7. Tour 360°.
8. Region-level map with exact-location WhatsApp handoff.
9. Current opportunities: Nova Vivere + Garden Design commercial handoff.
10. Lead form / Jerivás opportunity consultation.
11. FAQ matching visible questions.
12. Architecture / landscape credits.
13. Standard commercial footer.

## Internal linking

Required:
- parent hub `/`
- sibling entity pages through navigation
- current commercial alternatives only when decision-relevant
- contextual handoff to MoreNumTegra for Nova Vivere and Garden Design

Forbidden:
- manipulative quota-based cross-property links
- hidden keyword-rich link blocks
- duplicate doorway URLs for query variants

## Canonical / URL

Canonical:
`https://caminhosdalapategra.com.br/jerivas/`

Preserve route:
`/jerivas/`

Do not create:
- `/caminhos-da-lapa-jerivas/`
- `/jerivas-caminhos-da-lapa/`
unless future URL-level evidence and migration governance explicitly require it.

## Structured data

Connected graph:
- WebSite
- WebPage
- BreadcrumbList
- ImageObject
- ApartmentComplex
- FloorPlan 105 m²
- FloorPlan 136 m²
- FAQPage

ApartmentComplex may use `alternateName` for spelling/entity resolution and `sameAs` for the official Tegra Jerivás page.

Forbidden:
- AggregateRating without evidence
- Review without evidence
- Offer without governed current price/unit
- availability status without governed inventory
- exact address/geo when the page policy withholds exact location

## Performance

LCP candidate: hero image.
Requirements:
- preconnect image host
- preload hero
- `fetchpriority=high`
- no lazy-loading on hero
- lower-page gallery/plants remain lazy except active initial viewer media
- tour loads only by explicit user navigation, not iframe boot

Local validation is not production performance proof.

## Search ownership boundary

CaminhosDaLapaTegra owns durable/entity intent.
MoreNumTegra owns current commercial intent where justified.

Jerivás currently has no asserted developer inventory. Commercial CTA is therefore `consultar oportunidade`, not `comprar unidade disponível`.
