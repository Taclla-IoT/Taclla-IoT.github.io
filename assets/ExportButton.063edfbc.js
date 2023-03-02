import{_ as u,h as d,o as h,c,b as p,F as l}from"./index.85197ffe.js";const f={emits:["exportData"],methods:{exportGraphic(i){const r=[],s=[];i.forEach(a=>{if(!s.includes(a.sid)){s.push(a.sid);for(let t=0;t<a.dynamo.length;t++){const n={place:a.pname};for(let e in a.dynamo[t].data)e=="rain_mmh"||e=="windpos_deg"||e=="windspeed_kmh"?n[e]=a.dynamo[t].data[e]:e=="temperature_dc"||e=="temperature_mean_C"?(n.temperature_dc=a.dynamo[t].data[e],n.temperature_max=a.dynamo[t].data[e]+2,n.temperature_min=a.dynamo[t].data[e]-3):(e=="humidity_rh"||e=="years"||e=="months"||e=="days"||e=="hours"||e=="minutes"||e=="seconds")&&(n[e]=a.dynamo[t].data[e]);r.push(n)}}});const o=[];return r.forEach(a=>{const t=[];for(let n in a)t.push(a[n]);o.push(t.join(",")+`
`)}),o},exportData(i,r){const s=[];return i.forEach(o=>{const a=[];if(d[r].fields.length>0)d[r].fields.forEach(t=>{o[t.name]?a.push(o[t.name]):a.push("")});else for(let t in o)a.push(o[t]);s.push(a.join(",")+`
`)}),s},getHeaders(i,r){const s=[];if(d[r].fields.length>0)d[r].fields.forEach(o=>s.push(o.placeholder));else for(let o in i[0].dynamo[0].data)s.find(t=>t==="Finca")||s.push("Finca"),o=="rain_mmh"?s.push("Lluvia"):o=="windpos_deg"?s.push("Direcci\xF3n del viento"):o=="windspeed_kmh"?s.push("Velocidad del viento"):o=="temperature_dc"||o=="temperature_mean_C"?(s.push("Temperatura promedio"),s.push("Temperatura m\xE1xima"),s.push("Temperatura m\xEDnima")):o=="humidity_rh"?s.push("Humedad relativa"):o=="years"?s.push("A\xF1o"):o=="months"?s.push("Mes"):o=="days"?s.push("D\xEDa"):o=="hours"?s.push("Hora"):o=="minutes"?s.push("Minuto"):o=="seconds"&&s.push("Segundo");return s},exportFile(i,r){if(i.length>0){const s=[];let o=[];const a=this.getHeaders(i,r);s.push(a.join(",")+`
`),r!="graphics"?o=this.exportData(i,r):o=this.exportGraphic(i),o.forEach(e=>s.push(e));const t=new Blob(s,{type:"application/text"}),n=document.createElement("a");n.href=URL.createObjectURL(t),n.download=r+"_export.csv",n.click(),URL.revokeObjectURL(n.href)}}}},m=p("button",{type:"button","data-bs-toggle":"dropdown","aria-expanded":"false","data-toggle":"tooltip","data-placement":"bottom",title:"Exportar datos a un archivo csv",class:"btn text-light",style:{background:"#00782B"}},[p("i",{class:"fa fa-file-export"})],-1),y={class:"dropdown-menu"};function _(i,r,s,o,a,t){return h(),c(l,null,[m,p("ul",y,[p("li",null,[p("a",{class:"dropdown-item",href:"#",onClick:r[0]||(r[0]=n=>i.$emit("exportData",0))},"Exportar vista")]),p("li",null,[p("a",{class:"dropdown-item",href:"#",onClick:r[1]||(r[1]=n=>i.$emit("exportData",1))},"Exportar todo")])])],64)}const g=u(f,[["render",_]]);export{g as E};
