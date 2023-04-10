import{A as w}from"./AlertMessage.8d95dbf2.js";import{S as M}from"./SearchField.1679cc3b.js";import{P as v}from"./PageGenerator.d8b12943.js";import{B as x}from"./BackendConnection.f4718f70.js";import{_ as P,g as h,r as t,o as c,c as d,e as s,t as r,a as o,F as m,f as N,k as B}from"./index.6cf4a28e.js";const S={props:["token","user","hasPermission","updateToken"],data(){return{moduleName:"permissions",title:h.permissions.title,Model:h.permissions.Model,models:[],original:[]}},created(){this.token?this.user?this.hasPermission(this.moduleName,"access")||this.$router.push("/"):this.$router.push("/"):this.$router.push("/")},methods:{showMessage(e,a){this.$refs.AlertMessage.show(e,a)},searchData(e){this.models=e},async getData(){try{const e=await this.$refs.BackendConnection.getAll();this.original=e.data.map(a=>new this.Model(a)),this.models=this.original,this.updateToken({...e,token:this.token}),e.auxiliar&&(this.auxiliar=e.auxiliar)}catch(e){console.log(e),this.showMessage("No se pudo obtener los registros de la base de datos.","error")}}},components:{AlertMessage:w,SearchField:M,PageGenerator:v,BackendConnection:x},computed:{display(){return this.models.length?this.$refs.PageGenerator.paginate(this.models):[]}},mounted(){this.hasPermission(this.moduleName,"access")?this.getData():this.$router.push("/")}},y={class:"row pt-3 w-100"},A={class:"col"},C={id:"moduleTitle"},D={class:"col py-2"},F={class:"btn-group"},G={class:"row mt-1"},V={class:"col-xl m-1"},b={class:"list-group mt-1"},L={class:"list-group-item p-2"},T=s("h6",null,"Usuario",-1);function $(e,a,u,R,i,l){const _=t("SearchField"),p=t("AlertMessage"),g=t("RouterLink"),f=t("PageGenerator"),k=t("BackendConnection");return c(),d(m,null,[s("div",y,[s("div",A,[s("h1",C,r(i.title),1)]),s("div",D,[s("div",F,[o(_,{original:i.original,onSearchData:l.searchData},null,8,["original","onSearchData"])])])]),o(p,{ref:"AlertMessage",class:"row pt-1"},null,512),s("div",G,[s("div",V,[s("div",b,[(c(!0),d(m,null,N(l.display,n=>(c(),d("div",L,[o(g,{to:i.moduleName+"/"+n.id,class:"text-light text-decoration-none"},{default:B(()=>[T,s("h2",null,r(n.username),1),s("h4",null,r(n.name)+" "+r(n.lastname),1)]),_:2},1032,["to"])]))),256))])])]),o(f,{ref:"PageGenerator"},null,512),o(k,{token:u.token,moduleName:i.moduleName,ref:"BackendConnection",onShowMessage:l.showMessage},null,8,["token","moduleName","onShowMessage"])],64)}const H=P(S,[["render",$]]);export{H as default};
