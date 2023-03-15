import{A as x}from"./AlertMessage.01568e9d.js";import{B as y}from"./BackendConnection.c2c5cca6.js";import{_ as C,g as k,r as h,o as n,c as l,e as o,t as c,j as M,v as T,F as u,f as m,a as f,k as N,d as B}from"./index.38dda0bd.js";const H={props:["token","user","hasPermission","updateToken"],data(){return{moduleName:"graphics",title:k.controls.title,models:[],original:[],auxiliar:[],views:[],place:""}},created(){this.token?this.user?this.hasPermission(this.moduleName,"access")||this.$router.push("/"):this.$router.push("/"):this.$router.push("/")},methods:{showMessage(a,t){this.$refs.AlertMessage.show(a,t)},searchData(a){this.models=a},async getData(){try{const a=await this.$refs.BackendConnection.getAll();this.original=this.models=a.data,this.views=[],this.updateToken({...a,token:this.token}),a.auxiliar&&(this.auxiliar=a.auxiliar),this.original.length&&(this.place=this.original[0].pid)}catch(a){console.log(a),this.showMessage("No se pudo obtener los registros de la base de datos.","error")}},getVariables(a){if(!a.length)return[];let t=21;a[0].station_id==6&&(t=1);const i={},s=[];for(;t>0;){const e={};for(const r in a[t].data)e[r]=a[t].data[r];s.push(e),t-=1}if(s.length)for(let e=1;e<s.length-1;e++)for(const r in s[e])s[0][r]=.5*s[e][r]+.5*s[e+1][r];for(const e in s[0])e=="temperature_mean_C"?i["Temperatura promedio"]=s[0][e]+"\xB0C":e=="temperature_max"?i["Temperatura m\xE1xima"]=s[0][e]+"\xB0C":e=="temperature_min"?i["Temperatura m\xEDnima"]=s[0][e]+"\xB0C":e=="temperature_dc"?i.Temperatura=s[0][e]+"\xB0C":e=="humidity_rh"?i.Humedad=s[0][e]+"%":e=="humidity_mean_1"?i["Humedad 1 promedio"]=s[0][e]+"%":e=="humidity_mean_2"?i["Humedad 2 promedio"]=s[0][e]+"%":e=="rain_mmh"?i.Lluvia=s[0][e]+"mmh":e=="light_lux"?i.Radiaci\u00F3n=s[0][e]+"lux":e=="windpos_deg"?i["Direcci\xF3n del viento"]=s[0][e]+"\xB0":e=="windspeed_kmh"&&(i["Velocidad del viento"]=s[0][e]+"km/h");return a[0].data.light_lux&&(a[0].data.humidity_mean_1||(i["Humedad en suelo a 15cm"]=Math.max(0,parseInt(.07*a[0].data.humidity_rh+1.7*a[0].data.rain_mmh-.25*a[0].data.temperature_dc-5e-4*a[0].data.light_lux))+"%"),a[0].data.humidity_mean_2||(i["Humedad en suelo a 45cm"]=Math.max(0,parseInt(.01*a[0].data.humidity_rh+1.15*a[0].data.rain_mmh-.2*a[0].data.temperature_dc-6e-4*a[0].data.light_lux))+"%")),i},getDate(a){if(a[0].data.years){let t=(a[0].data.days<9?"0"+a[0].data.days:a[0].data.days)+"/";return t+=(a[0].data.months<9?"0"+a[0].data.months:a[0].data.months)+"/",t+=a[0].data.years+" ",t+=(a[0].data.hours<9?"0"+a[0].data.hours:a[0].data.hours)+":",t+=(a[0].data.minutes<9?"0"+a[0].data.minutes:a[0].data.minutes)+":",t+=a[0].data.seconds<9?"0"+a[0].data.seconds:a[0].data.seconds,t}else return a[0].created_at.slice(0,10)+" "+a[0].time_at},getIcon(a){return a=="Temperatura promedio"||a=="Temperatura"?'<i class="fa-solid fa-temperature-half white"></i>':a=="Temperatura m\xE1xima"?'<i class="fa-solid fa-temperature-half red"></i>':a=="Temperatura m\xEDnima"?'<i class="fa-solid fa-temperature-half blue"></i>':a=="Humedad"||a=="Humedad en suelo a 15cm"||a=="Humedad en suelo a 45cm"?'<i class="fa-solid fa-droplet"></i>':a=="Lluvia"?'<i class="fa-solid fa-cloud-rain dblue"></i>':a=="Radiaci\xF3n"?'<i class="fa-solid fa-sun yellow"></i>':a=="Direcci\xF3n del viento"||a=="Velocidad del viento"?'<i class="fa-solid fa-wind"></i>':'<i class="fa-solid fa-feather"></i>'}},computed:{display(){const a=[];return this.original.length&&this.original.forEach(t=>{t.pid==this.place&&a.push(t)}),a.sort((t,i)=>{const s=t.sname.toUpperCase(),e=i.sname.toUpperCase();return s<e?1:s>e?-1:0}),a.reverse()},selector(){const a=[];return this.original.length&&this.original.forEach(t=>{this.views.find(s=>s===t.pid)||t.dynamo.length>0&&(this.views.push(t.pid),a.push(t))}),a}},components:{AlertMessage:x,BackendConnection:y},mounted(){this.hasPermission(this.moduleName,"access")?this.getData():this.$router.push("/")}},V={class:"row pt-3 w-100"},b={class:"col"},A={id:"moduleTitle"},D={class:"col py-2"},L={class:"btn-group"},S=["value","selected"],I={class:"row mt-2"},R={class:"row mt-1"},E={class:"col-xl m-1"},F={class:"card-deck row mt-1 p-2"},P={class:"row"},U={class:"col"},j={class:"card text-center m-2"},q={class:"card-body py-3"},z=["innerHTML"],G={key:0,class:"w-100 mx-auto text-center text-muted"};function J(a,t,i,s,e,r){const _=h("AlertMessage"),g=h("RouterLink"),v=h("BackendConnection");return n(),l(u,null,[o("div",V,[o("div",b,[o("h1",A,c(e.title),1)]),o("div",D,[o("div",L,[M(o("select",{"onUpdate:modelValue":t[0]||(t[0]=d=>e.place=d),class:"rounded py-1","data-toggle":"tooltip","data-placement":"bottom",title:"Selecciona un lugar",style:{"min-width":"200px"}},[(n(!0),l(u,null,m(r.selector,d=>(n(),l("option",{value:d.pid,selected:e.place==d.pid},c(d.pname),9,S))),256))],512),[[T,e.place]])])])]),f(_,{ref:"AlertMessage",class:"row pt-1"},null,512),o("div",I,[o("div",R,[o("div",E,[(n(!0),l(u,null,m(r.display,d=>(n(),l("div",F,[o("div",P,[o("h4",U,[o("strong",null,c(d.sname),1)])]),(n(!0),l(u,null,m(r.getVariables(d.dynamo),(w,p)=>(n(),l("div",j,[o("div",q,[f(g,{to:"/graphics",class:"card-title text-light text-decoration-none"},{default:N(()=>[o("h6",{innerHTML:r.getIcon(p)},null,8,z),o("h3",null,c(p),1),o("h5",null,c(w),1)]),_:2},1024)])]))),256)),d.dynamo.length?B("",!0):(n(),l("h3",G,"No hay datos para mostrar"))]))),256))])])]),f(v,{token:i.token,moduleName:e.moduleName,ref:"BackendConnection",onShowMessage:r.showMessage},null,8,["token","moduleName","onShowMessage"])],64)}const W=C(H,[["render",J]]);export{W as default};
