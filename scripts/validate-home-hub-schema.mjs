// Bounded structural checks for the homepage hub schema. No network, no packages.
import assert from "node:assert/strict";
import {readFileSync} from "node:fs";
const h=readFileSync("index.html","utf8");
const match=h.match(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/i);
assert.ok(match,"homepage JSON-LD required");
const j=JSON.parse(match[1]);const nodes=j["@graph"];assert.ok(Array.isArray(nodes),"@graph required");
const origin="https://www.caminhosdalapategra.com.br/";
const ids=nodes.map(n=>n["@id"]);assert.equal(new Set(ids).size,ids.length,"duplicate @id");
const find=type=>nodes.filter(n=>n["@type"]===type);
const page=find("CollectionPage");assert.equal(page.length,1,"homepage must be CollectionPage (WebPage subtype)");
assert.equal(page[0].url,origin);
assert.deepEqual(page[0].mainEntity,{"@id":origin+"#empreendimentos"});
assert.deepEqual(page[0].about,{"@id":origin+"#place"});
assert.equal(find("ItemList").length,1);
assert.equal(find("ItemList")[0].itemListElement.length,7);
for (const [name,slug] of [["Jerivás","jerivas"],["Home Club","home-club"],["ELO","elo"],["ELO DUO","eloduo"],["Reserva","reserva"]]) {
  const n=nodes.find(n=>n["@id"]===origin+slug+"/#project");
  assert.equal(n?.["@type"],"ApartmentComplex");
  assert.equal(n?.name,name+" Caminhos da Lapa");
  assert.equal(n?.url,origin+slug+"/");
  assert.ok(find("ItemList")[0].itemListElement.some(x=>x.url===n.url),slug+" absent from visible catalog URL list");
  assert.ok(h.includes('href="/'+slug+'/"')||h.includes('href="'+origin+slug+'/"'),slug+" link absent in visible homepage");
}
for(const type of ["Organization","Person","Service","ContactPoint","FAQPage","WebSite","Place","ImageObject"]){
  assert.equal(find(type).length,1,type+" count mismatch");
}
const person=find("Person")[0],contact=find("ContactPoint")[0],service=find("Service")[0];
assert.equal(person.identifier.value,"209.905-F");
assert.equal(contact.telephone,"+5511960779328");
assert.deepEqual(service.provider,{"@id":person["@id"]});
assert.deepEqual(person.worksFor,{"@id":find("Organization")[0]["@id"]});
assert.ok(h.includes("CRECI-SP 209.905-F"),"CRECI not visible");
assert.ok(h.includes("96077-9328"),"contact not visible");
assert.ok(!find("Product").length&&!find("Offer").length&&!find("VideoObject").length,"no fictional sale or video");
console.log("Home hub schema: 15 graph nodes; linked CollectionPage, 5 ApartmentComplex entities, contact; PASS");
