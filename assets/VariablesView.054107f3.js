import{A as S}from"./AlertMessage.1845ad5f.js";import{E as F}from"./ExportButton.219ff371.js";import{I as C}from"./ImportButton.4c582b22.js";import{S as E}from"./SearchField.e6ec3ff5.js";import{B as O}from"./BackendConnection.c7e62c21.js";import{_ as V,g,r as u,o as l,c as d,e as r,t as m,a as w,h as D,d as b,j as y,v as A,F as c,f as p,l as v,w as T}from"./index.a10d22a3.js";const L={props:["token","user","hasPermission","updateToken"],data(){return{moduleName:"variables",title:g.variables.title,Model:g.variables.Model,fields:g.variables.fields,models:[],auxiliar:[],model:null,week:1,yearOffset:1,station:""}},created(){this.token?this.user?this.hasPermission(this.moduleName,"access")||this.$router.push("/"):this.$router.push("/"):this.$router.push("/"),this.model=new this.Model({})},computed:{getFirstDate(){const t=1+(this.week-1)*7+this.yearOffset;return new Date(new Date().getFullYear(),0,t).toLocaleDateString()},getLastDate(){const t=1+(this.week-1)*7+this.yearOffset+6;return new Date(new Date().getFullYear(),0,t).toLocaleDateString()}},methods:{showMessage(t,o){this.$refs.AlertMessage.show(t,o)},searchData(t){this.models=t},exportData(t=0){t==1?this.$refs.ExportButton.exportFile(this.original,this.moduleName):this.$refs.ExportButton.exportFile(this.models,this.moduleName)},importData(t){const o=t.split(`\r
`).slice(1,-1);for(let n=0;n<this.models.length;n++){const a=o[n].split(",");this.models[n]=new this.Model({name:this.models[n].name,station:this.station,variable:this.models[n].variable,monday:a[1],tuesday:a[2],wednesday:a[3],thursday:a[4],friday:a[5],saturday:a[6],sunday:a[7]})}},getWeek(){const t=new Date;var o=new Date(t.getFullYear(),0,1),n=Math.floor((t-o)/(24*60*60*1e3)),a=Math.ceil((t.getDay()+1+n)/7);return a},getDate(t=0){const o=1+(this.week-1)*7+this.yearOffset+t;return new Date(new Date().getFullYear(),0,o)},async getData(){try{this.week=this.getWeek(),this.models=[new this.Model({name:"Temperatura m\xE1xima",variable:"tmax"}),new this.Model({name:"Temperatura m\xEDnima",variable:"tmin"}),new this.Model({name:"Temperatura 7AM",variable:"t7am"}),new this.Model({name:"Temperatura 12M",variable:"t12m"}),new this.Model({name:"Temperatura 6PM",variable:"t6pm"}),new this.Model({name:"Lluvia",variable:"rain"})];const t=await this.$refs.BackendConnection.getAll();t.auxiliar&&(this.auxiliar=t.auxiliar)}catch(t){console.log(t),this.showMessage("No se pudo obtener los registros de la base de datos.","error")}},async createOne(){if(this.station=="")return this.showMessage("Debe seleccionar una estaci\xF3n de la lista.","warning");try{const t=["monday","tuesday","wednesday","thursday","friday","saturday","sunday"];for(let o=0;o<t.length;o++){const n={};this.models.forEach(h=>n[h.variable]=h[t[o]]);const a={data:{}},e={data:{}},s={data:{}};a.station_id=e.station_id=s.station_id=this.station,a.created_at=e.created_at=s.created_at=new Date().toString(),a.time_at=e.time_at=s.time_at=new Date().toString(),a.register_type=e.register_type=s.register_type=0,a.data.years=e.data.years=s.data.years=this.getDate(o).getFullYear(),a.data.months=e.data.months=s.data.months=this.getDate(o).getMonth()+1,a.data.days=e.data.days=s.data.days=this.getDate(o).getDate(),a.data.minutes=e.data.minutes=s.data.minutes=0,a.data.seconds=e.data.seconds=s.data.seconds=0,a.data.temperature_min=e.data.temperature_min=s.data.temperature_min=n.tmin,a.data.temperature_max=e.data.temperature_max=s.data.temperature_max=n.tmax,a.data.rain_mmh=e.data.rain_mmh=s.data.rain_mmh=n.rain,a.data.hours=7,a.data.temperature_mean_C=n.t7am,e.data.hours=12,e.data.temperature_mean_C=n.t12m,s.data.hours=18,s.data.temperature_mean_C=n.t6pm,await this.$refs.BackendConnection.createOne(a),await this.$refs.BackendConnection.createOne(e),await this.$refs.BackendConnection.createOne(s),this.showMessage("Nuevo registro creado en la base de datos.","success")}}catch(t){console.log(t),this.showMessage("No se pudo crear el registro en la base de datos.","error")}}},components:{AlertMessage:S,ExportButton:F,ImportButton:C,SearchField:E,BackendConnection:O},mounted(){this.hasPermission(this.moduleName,"access")?this.getData():this.$router.push("/")}},I={class:"row pt-3 w-100"},P={class:"col"},Y={id:"moduleTitle"},U={class:"col py-2"},W={class:"btn-group"},j={class:"m-2 p-2"},q=r("h5",{class:"p-1"},"Estaci\xF3n",-1),G=["value"],J={class:"m-2 p-2"},z=r("h5",{class:"p-1"},"Semana",-1),H={class:"text-muted p-1"},K={class:"table table-striped"},Q={scope:"col",class:"text-center",style:{"min-width":"50px"}},R=["onUpdate:modelValue"],X={key:1},Z={class:"form-group m-2 p-2 w-100 mx-auto"},$={class:"btn-group w-100"},ee=r("button",{type:"submit",class:"btn btn-success text-light"},"Guardar",-1);function te(t,o,n,a,e,s){const h=u("SearchField"),x=u("ExportButton"),k=u("ImportButton"),M=u("AlertMessage"),B=u("BackendConnection");return l(),d(c,null,[r("div",I,[r("div",P,[r("h1",Y,m(e.title),1)]),r("div",U,[r("div",W,[w(h,{original:t.original,onSearchData:s.searchData},null,8,["original","onSearchData"]),n.hasPermission(e.moduleName,"export")?(l(),D(x,{key:0,ref:"ExportButton",onExportData:s.exportData},null,8,["onExportData"])):b("",!0),n.hasPermission(e.moduleName,"import")?(l(),D(k,{key:1,moduleName:e.moduleName,onImportData:s.importData},null,8,["moduleName","onImportData"])):b("",!0)])])]),w(M,{ref:"AlertMessage",class:"row pt-1"},null,512),r("form",{onSubmit:o[3]||(o[3]=T((...i)=>s.createOne&&s.createOne(...i),["prevent"]))},[r("div",j,[q,y(r("select",{name:"station","onUpdate:modelValue":o[0]||(o[0]=i=>e.station=i),class:"rounded border border-dark"},[(l(!0),d(c,null,p(e.auxiliar[0],i=>(l(),d("option",{value:i.id},m(i.name),9,G))),256))],512),[[A,e.station]])]),r("div",J,[z,y(r("input",{type:"number","onUpdate:modelValue":o[1]||(o[1]=i=>e.week=i),placeholder:"Semana",min:"1",max:"52",class:"rounded p-1",style:{width:"100px"},required:""},null,512),[[v,e.week]]),r("p",H,"Semana "+m(e.week)+" desde "+m(s.getFirstDate)+" hasta "+m(s.getLastDate)+".",1)]),r("table",K,[r("thead",null,[r("tr",null,[(l(!0),d(c,null,p(e.fields,i=>(l(),d("th",Q,m(i.placeholder),1))),256))])]),r("tbody",null,[(l(!0),d(c,null,p(e.models,(i,f)=>(l(),d("tr",null,[(l(!0),d(c,null,p(e.fields,_=>(l(),d("td",null,[_.type!="view"?y((l(),d("input",{key:0,type:"number","onUpdate:modelValue":N=>e.models[f][_.name]=N,class:"rounded p-1",style:{"min-width":"50px"}},null,8,R)),[[v,e.models[f][_.name]]]):(l(),d("p",X,m(i.name),1))]))),256))]))),256))])]),r("div",Z,[r("div",$,[ee,r("button",{type:"button",onClick:o[2]||(o[2]=(...i)=>s.getData&&s.getData(...i)),class:"btn btn-warning text-light"},"Limpiar")])])],32),w(B,{token:n.token,moduleName:e.moduleName,ref:"BackendConnection",onShowMessage:s.showMessage},null,8,["token","moduleName","onShowMessage"])],64)}const le=V(L,[["render",te]]);export{le as default};
