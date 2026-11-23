#!/usr/bin/env node
// Audit of JSON-LD properties on the six canonical Caminhos da Lapa pages.
import { readFileSync } from 'node:fs';
const paths=['index.html','jerivas/index.html','home-club/index.html','elo/index.html','eloduo/index.html','reserva/index.html'];
let failure=false;
for(const path of paths){
 const html=readFileSync(path,'utf8');
 const scripts=[...html.matchAll(/<script\s+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)];
 if(scripts.length!==1){console.error(path+': expected exactly one JSON-LD block');failure=true;continue;}
 let j;try{j=JSON.parse(scripts[0][1]);}catch(err){console.error(path+': '+err.message);failure=true;continue;}
 const graph=j['@graph']||[];const ids=graph.map(x=>x['@id']).filter(Boolean);
 const required=path==='index.html'?['WebSite','WebPage','Place','ItemList','FAQPage','Organization','Person','Service']:['WebSite','WebPage','BreadcrumbList','ApartmentComplex','FloorPlan','FAQPage','Organization','Person','Service'];
 const types=new Set(graph.map(x=>x['@type']));
 for(const type of required){if(!types.has(type)){console.error(path+': missing '+type);failure=true;}}
 if(new Set(ids).size!==ids.length){console.error(path+': duplicate @id');failure=true;}
 if(j['@context']!=='https://schema.org'){console.error(path+': invalid @context');failure=true;}
 const self='https://www.caminhosdalapategra.com.br/'+(path==='index.html'?'':path.replace('/index.html','/'));
 if(!html.includes('<link rel="canonical" href="'+self+'">')){console.error(path+': unexpected canonical');failure=true;}
 if(!graph.some(x=>x['@type']==='WebPage'&&x.url===self)){console.error(path+': mismatched WebPage');failure=true;}
 // No unsupported commercial offers may enter structured data without business approval and visible matching price.
 if(graph.some(x=>['Offer','AggregateOffer','Product'].includes(x['@type']))){console.error(path+': unexpected Product/Offer without confirmed commercial source');failure=true;}
 console.log(path+': '+graph.length+' linked nodes; '+(failure?'review issues above':'static checks evaluated'));
}
if(failure)process.exitCode=1;