import{_ as g,o as l,c,e as s,t as a,d as p,F as h,f as d,i as r,j as _,v as u}from"./index.3ca1d3fb.js";const v={data(){return{page:1,size:10,pages:[],total:0}},methods:{paginate(o){this.calculate(o);const t=this.page*this.size-this.size,n=this.page*this.size;return o.slice(t,n)},calculate(o){this.pages=[],this.total=o.length;const t=Math.ceil(this.total/this.size);for(let n=1;n<=t;n++)this.pages.push(n);this.page>this.pages.length&&(this.page=1)},getIndex(o){return parseInt(o)+(this.page-1)*this.size}}},f={class:"row w-100"},b={class:"col"},y={class:"text-muted py-3"},z={class:"col py-2"},k={class:"btn-group py-2"},x=s("i",{class:"fa fa-angles-left"},null,-1),m=[x],C=["onClick"],w=s("i",{class:"fa fa-angles-right"},null,-1),M=[w],V={class:"col"},B={class:"text-muted py-3"},N=["selected"],D=["selected"],F=["selected"],I=["selected"],P=["selected"];function S(o,t,n,T,e,j){return l(),c("div",f,[s("div",b,[s("p",y,"Mostrando p\xE1gina "+a(e.page)+" de "+a(e.pages.length)+" paginas.",1)]),s("div",z,[s("div",k,[e.page!=1?(l(),c("button",{key:0,type:"button",onClick:t[0]||(t[0]=i=>e.page--),class:"btn text-light",style:{background:"rgb(35, 176, 144)"}},m)):p("",!0),(l(!0),c(h,null,d(e.pages.slice(e.page-1,e.page+5),i=>(l(),c("button",{key:i,onClick:E=>e.page=i,class:"btn text-light",style:{background:"rgb(35, 176, 144)"}},a(i),9,C))),128)),e.page<e.pages.length?(l(),c("button",{key:1,onClick:t[1]||(t[1]=i=>e.page++),class:"btn text-light",style:{background:"rgb(35, 176, 144)"}},M)):p("",!0)])]),s("div",V,[s("p",B,[r(" Mostrando "),_(s("select",{"onUpdate:modelValue":t[2]||(t[2]=i=>e.size=i),class:"rounded",style:{width:"75px"}},[s("option",{value:"10",selected:e.size==10},"10",8,N),s("option",{value:"25",selected:e.size==25},"25",8,D),s("option",{value:"50",selected:e.size==50},"50",8,F),s("option",{value:"100",selected:e.size==100},"100",8,I),s("option",{value:"100000",selected:e.size>=101},"Todos",8,P)],512),[[u,e.size]]),r(" de "+a(e.total)+" registros. ",1)])])])}const L=g(v,[["render",S]]);export{L as P};
