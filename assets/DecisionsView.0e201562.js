import{A as y}from"./AlertMessage.6f290154.js";import{B as f}from"./BackendConnection.394f6f3e.js";import{_ as x,g as b,r as u,o as r,c as d,e,t as c,j as k,v as w,F as h,f as p,a as _,d as v}from"./index.2caffc62.js";const M={props:["token","user","hasPermission","updateToken"],data(){return{moduleName:"decisions",title:b.decisions.title,models:[],original:[],auxiliar:[],views:[],place:""}},created(){this.token?this.user?this.hasPermission(this.moduleName,"access")||this.$router.push("/"):this.$router.push("/"):this.$router.push("/")},methods:{showMessage(n,o){this.$refs.AlertMessage.show(n,o)},async getData(){try{const n=await this.$refs.BackendConnection.getAll();this.original=n.data.filter(o=>o.sid!=="a288e65294e04082bd90c4b1e3eddb7b"),this.models={},this.views=[],this.updateToken({...n,token:this.token}),n.auxiliar&&(this.auxiliar=n.auxiliar),this.original.length&&(this.place=this.original[0].pid,this.original.forEach(o=>{if(o.dynamo.length){let s=o.dynamo,l=[];for(let t=0;t<s.length;t+=3)l.push(s[t].data);s={rain_mmh_month:0,rain_mmh_year:0,temperature_mean_C:21.1,temperature_max:27.7,temperature_min:15.5,days:0,humidity:0};for(let t=0;t<l.length;t++)if(l[t].years!=2022)for(let a in l[t])a=="rain_mmh"?(new Date().getMonth()+1==l[t].months&&(s.rain_mmh_month+=l[t][a]),s.rain_mmh_year+=l[t][a],s.humidity+=l[t][a]*10+(Math.random()*20-10)):a=="temperature_mean_C"||a=="temperature_max"||a=="temperature_min"?s[a]=.5*(s[a]+l[t][a]):a=="days"&&s[a]++;console.log(s);for(let t in s)t=="rain_mmh_month"||t=="rain_mmh_year"||t=="days"?s[t]=s[t].toFixed():t=="humidity"?s[t]=Math.min(Math.max(0,s[t]),Math.random()*7+93).toFixed():s[t]=s[t].toFixed(2);o.dynamo=s,this.models[o.pid]=[],this.models[o.pid].push(o)}}))}catch(n){console.log(n),this.showMessage("No se pudo obtener los registros de la base de datos.","error")}}},computed:{display(){return this.models[this.place]}},components:{AlertMessage:y,BackendConnection:f},mounted(){this.hasPermission(this.moduleName,"access")?this.getData():this.$router.push("/")}},C={class:"row pt-3 w-100"},N={class:"col"},B={id:"moduleTitle"},A={class:"col py-2"},D={class:"btn-group"},F=["value","selected"],V={class:"row mt-2 mw-100"},S={class:"table"},T=e("thead",{class:"thead-light"},[e("tr",{class:"text-center"},[e("th",{class:"text-light","data-toggle":"tooltip","data-placement":"top",title:"Finca",style:{"background-color":"rgb(35, 176, 144)"}},[e("h3",null,[e("i",{class:"fa-solid fa-house"})])]),e("th",{class:"text-light","data-toggle":"tooltip","data-placement":"top",title:"Lluvia mensual",style:{"background-color":"rgb(35, 176, 144)"}},[e("h3",null,[e("i",{class:"fa-solid fa-cloud-showers-heavy"})])]),e("th",{class:"text-light","data-toggle":"tooltip","data-placement":"top",title:"Lluvia anual",style:{"background-color":"rgb(35, 176, 144)"}},[e("h3",null,[e("i",{class:"fa-solid fa-cloud-showers-heavy"})])]),e("th",{class:"text-light","data-toggle":"tooltip","data-placement":"top",title:"Temperatura m\xE1xima",style:{"background-color":"rgb(35, 176, 144)"}},[e("h3",null,[e("i",{class:"fa-solid fa-temperature-half"})])]),e("th",{class:"text-light","data-toggle":"tooltip","data-placement":"top",title:"Temperatura m\xEDnima",style:{"background-color":"rgb(35, 176, 144)"}},[e("h3",null,[e("i",{class:"fa-solid fa-temperature-half"})])]),e("th",{class:"text-light","data-toggle":"tooltip","data-placement":"top",title:"Momento adecuado para aspersi\xF3n",style:{"background-color":"rgb(35, 176, 144)"}},[e("h3",null,[e("i",{class:"fa-solid fa-spray-can"})])])])],-1),L={class:"text-center py-3"},P={class:"text-center py-3"},E={class:"dblue"},j={class:"text-center py-3"},U={class:"dblue"},q={class:"text-center py-3"},z={class:"red"},G={class:"text-center py-3"},H={class:"blue"},I={key:0,class:"rounded bg-success",style:{"min-height":"50px"}},J={key:1,class:"rounded bg-warning",style:{"min-height":"50px"}},K={key:2,class:"rounded bg-danger",style:{"min-height":"50px"}},O={key:0},Q=e("td",{colspan:"6",class:"w-100 h3 py-3 text-muted text-center"},"No hay datos para mostrar",-1),R=[Q];function W(n,o,s,l,t,a){const m=u("AlertMessage"),g=u("BackendConnection");return r(),d(h,null,[e("div",C,[e("div",N,[e("h1",B,c(t.title),1)]),e("div",A,[e("div",D,[k(e("select",{"onUpdate:modelValue":o[0]||(o[0]=i=>t.place=i),class:"rounded py-1","data-toggle":"tooltip","data-placement":"bottom",title:"Selecciona un lugar",style:{"min-width":"200px"}},[(r(!0),d(h,null,p(t.original,i=>(r(),d("option",{value:i.pid,selected:t.place==i.pid},c(i.pname),9,F))),256))],512),[[w,t.place]])])])]),_(m,{ref:"AlertMessage",class:"row pt-1"},null,512),e("div",V,[e("table",S,[T,e("tbody",null,[(r(!0),d(h,null,p(a.display,i=>(r(),d("tr",null,[e("td",L,[e("h5",null,c(i.pname),1)]),e("td",P,[e("h5",E,c(i.dynamo.rain_mmh_month)+" mm / mes",1)]),e("td",j,[e("h5",U,c(i.dynamo.rain_mmh_year)+" mm / a\xF1o",1)]),e("td",q,[e("h5",z,c(i.dynamo.temperature_max)+"\xB0C",1)]),e("td",G,[e("h5",H,c(i.dynamo.temperature_min)+"\xB0C",1)]),e("td",null,[i.dynamo.rain_mmh<5?(r(),d("div",I)):i.dynamo.rain_mmh<30?(r(),d("div",J)):(r(),d("div",K))])]))),256)),!t.models||!t.models[t.place]?(r(),d("tr",O,R)):v("",!0)])])]),_(g,{token:s.token,moduleName:t.moduleName,ref:"BackendConnection",onShowMessage:a.showMessage},null,8,["token","moduleName","onShowMessage"])],64)}const $=x(M,[["render",W]]);export{$ as default};
