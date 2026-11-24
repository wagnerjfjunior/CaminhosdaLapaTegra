// Enforces exact parity between visible FAQ and FAQPage JSON-LD on all six canonical pages.
// Uses built-in Node modules only; never changes content.
import { readFileSync } from "node:fs";
import assert from "node:assert/strict";

const pages = [
  "index.html", "jerivas/index.html", "home-club/index.html",
  "elo/index.html", "eloduo/index.html", "reserva/index.html"
];
const strip = s => s.replace(/<[^>]+>/g, "").trim();

for (const file of pages) {
  const html = readFileSync(file, "utf8");
  const faqSection = html.match(/<section\b[^>]*class="[^"]*\bfaq\b[^"]*"[\s\S]*?<\/section>/i)?.[0];
  assert.ok(faqSection, `${file}: visible FAQ section missing`);

  const visible = [...faqSection.matchAll(/<details[^>]*>\s*<summary>([\s\S]*?)<\/summary>\s*<p>([\s\S]*?)<\/p>\s*<\/details>/gi)]
    .map(m => ({name: strip(m[1]), text: strip(m[2])}));
  assert.ok(visible.length > 0, `${file}: FAQ entries missing`);

  const ldScripts = [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)];
  assert.ok(ldScripts.length > 0, `${file}: JSON-LD missing`);
  const nodes = ldScripts.flatMap(m => {
    const json = JSON.parse(m[1]);
    return Array.isArray(json) ? json : Array.isArray(json["@graph"]) ? json["@graph"] : [json];
  });
  const faqs = nodes.filter(n => n["@type"] === "FAQPage");
  assert.equal(faqs.length, 1, `${file}: expected one FAQPage node`);
  const structured = (faqs[0].mainEntity || []).map(q => {
    assert.equal(q["@type"], "Question");
    assert.equal(q.acceptedAnswer?.["@type"], "Answer");
    return {name: q.name, text: q.acceptedAnswer.text};
  });
  assert.deepEqual(structured, visible, `${file}: FAQPage must exactly match visible question and answer order`);
  console.log(`${file}: ${visible.length} visible/structured FAQs OK`);
}
console.log("FAQ JSON-LD exact parity: PASS");
