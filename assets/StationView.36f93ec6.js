import{A as f}from"./AlertMessage.40500fd0.js";import{B as g}from"./BackendConnection.760cf3dc.js";import{_ as w,g as o,r as c,o as a,c as i,e as s,t as n,a as d,F as h,f as k}from"./index.09c6df64.js";const M={props:["token","user","hasPermission","updateToken"],data(){return{moduleName:"stations",title:o.stations.title,Model:o.stations.Model,fields:o.stations.fields,auxiliar:[]}},created(){this.token?this.user?this.hasPermission(this.moduleName,"access")?this.model=new this.Model({}):this.$router.push("/"):this.$router.push("/"):this.$router.push("/")},methods:{showMessage(e,l){this.$refs.AlertMessage.show(e,l)},async getData(){try{const e=await this.$refs.BackendConnection.getOne(this.$route.params.id);this.title=e.data[0].name,this.model=new this.Model(e.data[0]),this.updateToken({...e,token:this.token}),e.auxiliar&&(this.auxiliar=e.auxiliar)}catch(e){console.log(e),this.showMessage("No se pudo obtener los registros de la base de datos.","error")}}},components:{AlertMessage:f,BackendConnection:g},mounted(){this.hasPermission(this.moduleName,"access")?this.getData():this.$router.push("/")}},v={class:"row pt-3 w-100"},B={class:"col"},x={id:"moduleTitle"},N={class:"row mt-1"},y={class:"col-xl m-1"},A={class:"row w-100 px-3 py-2"},C={class:"col w-50"},$={style:{color:"#00782B"}},S={class:"col w-50"};function V(e,l,u,D,t,m){const _=c("AlertMessage"),p=c("BackendConnection");return a(),i(h,null,[s("div",v,[s("div",B,[s("h1",x,n(t.title),1)])]),d(_,{ref:"AlertMessage",class:"row pt-1"},null,512),s("div",N,[s("div",y,[(a(!0),i(h,null,k(t.fields,r=>(a(),i("div",A,[s("div",C,[s("h4",$,n(r.placeholder),1)]),s("div",S,[s("h4",null,n(e.model[r.name]),1)])]))),256))])]),d(p,{token:u.token,moduleName:t.moduleName,ref:"BackendConnection",onShowMessage:m.showMessage},null,8,["token","moduleName","onShowMessage"])],64)}const b=w(M,[["render",V]]);export{b as default};
