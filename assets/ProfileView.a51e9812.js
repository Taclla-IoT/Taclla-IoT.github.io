import{A as f}from"./AlertMessage.8d95dbf2.js";import{B as g}from"./BackendConnection.f4718f70.js";import{_ as w,g as o,r as c,o as i,c as a,e as s,t as n,a as d,F as h,f as k}from"./index.6cf4a28e.js";const M={props:["token","user","hasPermission","updateToken"],data(){return{moduleName:"users",title:o.users.title,Model:o.users.Model,fields:o.users.fields,auxiliar:[]}},created(){this.token?this.user?this.hasPermission(this.moduleName,"access")?this.model=new this.Model({}):this.$router.push("/"):this.$router.push("/"):this.$router.push("/")},methods:{showMessage(e,r){this.$refs.AlertMessage.show(e,r)},async getData(){try{const e=await this.$refs.BackendConnection.getOne(this.user.id);this.title=e.data[0].name,this.model=new this.Model(e.data[0]),this.updateToken({...e,token:this.token}),e.auxiliar&&(this.auxiliar=e.auxiliar)}catch(e){console.log(e),this.showMessage("No se pudo obtener los registros de la base de datos.","error")}}},components:{AlertMessage:f,BackendConnection:g},mounted(){this.hasPermission(this.moduleName,"access")?this.getData():this.$router.push("/")}},v={class:"row pt-3 w-100"},x={class:"col"},B={id:"moduleTitle"},N={class:"row mt-1"},y={class:"col-xl m-1"},A={class:"row w-100 px-3 py-2"},C={class:"col w-50"},P={style:{color:"rgb(35, 176, 144)"}},$={class:"col w-50"};function V(e,r,u,b,t,m){const _=c("AlertMessage"),p=c("BackendConnection");return i(),a(h,null,[s("div",v,[s("div",x,[s("h1",B,n(t.title),1)])]),d(_,{ref:"AlertMessage",class:"row pt-1"},null,512),s("div",N,[s("div",y,[(i(!0),a(h,null,k(t.fields,l=>(i(),a("div",A,[s("div",C,[s("h4",P,n(l.placeholder),1)]),s("div",$,[s("h4",null,n(e.model[l.name]),1)])]))),256))])]),d(p,{token:u.token,moduleName:t.moduleName,ref:"BackendConnection",onShowMessage:m.showMessage},null,8,["token","moduleName","onShowMessage"])],64)}const T=w(M,[["render",V]]);export{T as default};
