import{_ as n,g as d,o as c,c as m,e as t,F as p}from"./index.548ac12f.js";const u={props:["moduleName"],emits:["importData"],methods:{importFile(a){const e=a.target.files,r=new FileReader;r.onload=o=>{const s=o.target.result;this.$emit("importData",s)},r.readAsText(e[0])},downloadFile(){const a=[],e=[];d[this.moduleName].fields.forEach(s=>e.push(s.placeholder)),a.push(e.join(",")+`
`),this.moduleName=="variables"&&["Temperatura m\xE1xima","Temperatura m\xEDnima","Temperatura 7AM","Temperatura 12M","Temperatura 6PM","Lluvia"].forEach(l=>a.push(l+`,,,,,,,
`));const r=new Blob(a,{type:"application/text"}),o=document.createElement("a");o.href=URL.createObjectURL(r),o.download=this.moduleName+"_template.csv",o.click(),URL.revokeObjectURL(o.href)}}},f=t("button",{type:"button","data-bs-toggle":"dropdown","aria-expanded":"false","data-toggle":"tooltip","data-placement":"bottom",title:"Importar datos con archivo csv",class:"btn text-light",style:{background:"rgb(35, 176, 144)"}},[t("i",{class:"fa fa-file-import"})],-1),h={class:"dropdown-menu"};function b(a,e,r,o,s,l){return c(),m(p,null,[t("input",{ref:"FileUpload",type:"file",accept:".csv",onChange:e[0]||(e[0]=(...i)=>l.importFile&&l.importFile(...i)),hidden:""},null,544),f,t("ul",h,[t("li",null,[t("a",{class:"dropdown-item",href:"#",onClick:e[1]||(e[1]=(...i)=>l.downloadFile&&l.downloadFile(...i))},"Descargar plantilla")]),t("li",null,[t("a",{class:"dropdown-item",href:"#",onClick:e[2]||(e[2]=i=>a.$refs.FileUpload.click())},"Seleccionar archivo")])])],64)}const F=n(u,[["render",b]]);export{F as I};
