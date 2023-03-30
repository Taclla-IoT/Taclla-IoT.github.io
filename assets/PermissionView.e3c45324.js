import{A as w}from"./AlertMessage.1845ad5f.js";import{B as y}from"./BackendConnection.c7e62c21.js";import{_ as P,g as M,r as p,o as a,c as r,e as t,t as u,a as g,w as v,F as m,f as _,i as l,d as k}from"./index.a10d22a3.js";const B={props:["token","user","hasPermission","updateToken"],data(){return{moduleName:"permissions",title:"Permisos",Model:class{constructor(s){this.id=s.id,this.permissions=s.permissions}},fields:M,auxiliar:[]}},created(){this.token?this.user?this.hasPermission(this.moduleName,"access")?this.model=new this.Model({}):this.$router.push("/"):this.$router.push("/"):this.$router.push("/")},methods:{showMessage(e,s){this.$refs.AlertMessage.show(e,s)},checkPermission(e,s){if(this.model.permissions){const c=e+"."+s;if(this.model.permissions.find(h=>h===c))return!0}return!1},onChange(e){if(e.target.checked){if(this.model.permissions.find(c=>c===e.target.name))return;this.model.permissions.push(e.target.name)}else this.model.permissions=this.model.permissions.filter(s=>s!==e.target.name)},async getData(){try{const e=await this.$refs.BackendConnection.getOne(this.$route.params.id);this.title="Permisos de "+e.data[0].username,this.model=new this.Model({id:e.data[0].id,permissions:e.data[0].permissions?e.data[0].permissions.split(","):[]}),this.updateToken({...e,token:this.token}),e.auxiliar&&(this.auxiliar=e.auxiliar)}catch(e){console.log(e),this.showMessage("Ocurri\xF3 un error al tratar de obtener los permisos del usuario.","error")}},async setData(){try{const e=this.model;e.permissions=e.permissions.join(","),await this.$refs.BackendConnection.updateOne(e),this.showMessage("Permisos actualizados en la base de datos.","success")}catch(e){console.log(e),this.showMessage("No se pudo obtener los registros de la base de datos.","error")}}},components:{AlertMessage:w,BackendConnection:y},mounted(){this.hasPermission(this.moduleName,"access")?this.getData():this.$router.push("/")}},A={class:"row pt-3 w-100"},D={class:"col"},V={id:"moduleTitle"},S={class:"row mt-1"},T={class:"col-xl m-1"},E={class:"list-group-item p-2 text-light"},F={class:"row"},O={class:"form-group"},z=t("h6",{class:"mx-1"},"Permisos de m\xF3dulo:",-1),j={class:"form-label m-1 p-1"},G=["name","checked"],I={class:"form-label m-1 p-1"},L=["name","checked"],q={class:"form-label m-1 p-1"},H=["name","checked"],J={class:"form-label m-1 p-1"},K=["name","checked"],Q={class:"form-label m-1 p-1"},R=["name","checked"],U={class:"form-label m-1 p-1"},W=["name","checked"],X={class:"form-group"},Y={key:0,class:"mx-1"},Z={key:0,class:"form-label m-1 p-1"},N=["name","checked"],$=t("div",{class:"form-group mx-auto"},[t("input",{type:"submit",value:"Guardar",class:"btn btn-block m-3 text-light",style:{background:"rgb(35, 176, 144)"}})],-1);function ee(e,s,c,f,h,o){const b=p("AlertMessage"),x=p("BackendConnection");return a(),r(m,null,[t("div",A,[t("div",D,[t("h1",V,u(h.title),1)])]),g(b,{ref:"AlertMessage",class:"row pt-1"},null,512),t("div",S,[t("div",T,[t("form",{onSubmit:s[7]||(s[7]=v((...d)=>o.setData&&o.setData(...d),["prevent"])),class:"list-group mt-1"},[(a(!0),r(m,null,_(h.fields,(d,i)=>(a(),r("div",E,[t("div",F,[t("h3",null,u(d.title),1)]),t("div",O,[z,t("label",j,[l("Acceder "),t("input",{type:"checkbox",name:i+".access",class:"mx-2",checked:o.checkPermission(i,"access"),onChange:s[0]||(s[0]=(...n)=>o.onChange&&o.onChange(...n))},null,40,G)]),t("label",I,[l("Crear "),t("input",{type:"checkbox",name:i+".create",class:"mx-2",checked:o.checkPermission(i,"create"),onChange:s[1]||(s[1]=(...n)=>o.onChange&&o.onChange(...n))},null,40,L)]),t("label",q,[l("Actualizar "),t("input",{type:"checkbox",name:i+".update",class:"mx-2",checked:o.checkPermission(i,"update"),onChange:s[2]||(s[2]=(...n)=>o.onChange&&o.onChange(...n))},null,40,H)]),t("label",J,[l("Eliminar "),t("input",{type:"checkbox",name:i+".delete",class:"mx-2",checked:o.checkPermission(i,"delete"),onChange:s[3]||(s[3]=(...n)=>o.onChange&&o.onChange(...n))},null,40,K)]),t("label",Q,[l("Importar "),t("input",{type:"checkbox",name:i+".import",class:"mx-2",checked:o.checkPermission(i,"import"),onChange:s[4]||(s[4]=(...n)=>o.onChange&&o.onChange(...n))},null,40,R)]),t("label",U,[l("Exportar "),t("input",{type:"checkbox",name:i+".export",class:"mx-2",checked:o.checkPermission(i,"export"),onChange:s[5]||(s[5]=(...n)=>o.onChange&&o.onChange(...n))},null,40,W)])]),t("div",X,[d.fields.length?(a(),r("h6",Y,"Permisos de modificaci\xF3n:")):k("",!0),(a(!0),r(m,null,_(d.fields,n=>(a(),r(m,null,[n.type!="view"?(a(),r("label",Z,[l(u(n.placeholder)+" ",1),t("input",{type:"checkbox",name:i+".modify."+n.name,class:"mx-2",checked:o.checkPermission(i,"modify."+n.name),onChange:s[6]||(s[6]=(...C)=>o.onChange&&o.onChange(...C))},null,40,N)])):k("",!0)],64))),256))])]))),256)),$],32)])]),g(x,{token:c.token,moduleName:h.moduleName,ref:"BackendConnection",onShowMessage:o.showMessage},null,8,["token","moduleName","onShowMessage"])],64)}const ie=P(B,[["render",ee]]);export{ie as default};
