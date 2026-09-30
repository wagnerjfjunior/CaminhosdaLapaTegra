
(()=>{const emit=(event,x={})=>{window.dataLayer=window.dataLayer||[];window.dataLayer.push({event,page_identity:document.body.dataset.page||"unknown",...x})};emit("cdl_page_view");
document.querySelectorAll("form").forEach(f=>f.addEventListener("submit",e=>{e.preventDefault();emit("cdl_form_submit_attempt",{intent:f.elements["texto-livre"]?.value||""});alert("Prévia local: formulário em validação. Use o WhatsApp para atendimento.")}));
document.querySelectorAll('a[href*="moretegra.com.br"]').forEach(a=>a.addEventListener("click",()=>emit("cdl_project_handoff",{target:a.textContent.trim()})));
})();
