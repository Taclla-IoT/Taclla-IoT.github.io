import{A as w}from"./AlertMessage.461d95e5.js";import{E as k}from"./ExportButton.c734f763.js";import{I as M}from"./ImportButton.c3cf428b.js";import{S as x}from"./SearchField.717e148e.js";import{E as B}from"./EditableTable.3a0a89c1.js";import{B as N}from"./BackendConnection.9c32f0ab.js";import{_ as D,g as l,r,o as d,c as b,e as n,t as y,a as i,h as c,d as m,F as O}from"./index.548ac12f.js";import"./PageGenerator.30c9413d.js";const E={props:["token","user","hasPermission","updateToken"],data(){return{moduleName:"users",title:l.users.title,Model:l.users.Model,fields:l.users.fields,models:[],original:[],auxiliar:[]}},created(){this.token?this.user?this.hasPermission(this.moduleName,"access")||this.$router.push("/"):this.$router.push("/"):this.$router.push("/")},methods:{showMessage(s,e){this.$refs.AlertMessage.show(s,e)},searchData(s){this.models=s},exportData(s=0){s==1?this.$refs.ExportButton.exportFile(this.original,this.moduleName):this.$refs.ExportButton.exportFile(this.models,this.moduleName)},async getData(){try{const s=await this.$refs.BackendConnection.getAll();this.original=s.data.map(e=>new this.Model(e)),this.models=this.original,this.updateToken({...s,token:this.token}),s.auxiliar&&(this.auxiliar=s.auxiliar)}catch(s){console.log(s),this.showMessage("No se pudo obtener los registros de la base de datos.","error")}},async createOne(s){try{const e=await this.$refs.BackendConnection.createOne(s);this.showMessage("Nuevo registro creado en la base de datos.","success"),this.models.push(e.data)}catch(e){console.log(e),this.showMessage("No se pudo crear el registro en la base de datos.","error")}},async updateOne(s){const e=this.models[s];delete e.activatedAt,delete e.onlineAt,delete e.createdAt,delete e.createdBy,delete e.updatedAt,delete e.updatedBy;try{await this.$refs.BackendConnection.updateOne(e),this.showMessage("Registro actualizado en la base de datos.","success")}catch(o){console.log(o),this.showMessage("No se pudo actualizar el registro en la base de datos.","error")}},async deleteOne(s){try{const e=window.prompt("\xBFEst\xE1 seguro que quiere eliminar el registro? De ser as\xED, escribe la raz\xF3n.","");if(e==null||e=="")return;this.$refs.BackendConnection.deleteOne(this.models[s],e),this.showMessage("Registro eliminado de la base de datos.","success"),this.getData()}catch(e){console.log(e),this.showMessage("No se pudo eliminar el registro de la base de datos.","error")}}},components:{AlertMessage:w,ExportButton:k,ImportButton:M,SearchField:x,EditableTable:B,BackendConnection:N},mounted(){this.hasPermission(this.moduleName,"access")?this.getData():this.$router.push("/")}},C={class:"row pt-3 w-100"},A={class:"col"},S={id:"moduleTitle"},v={class:"col py-2"},F={class:"btn-group"};function P(s,e,o,I,t,a){const u=r("SearchField"),h=r("ExportButton"),p=r("ImportButton"),g=r("AlertMessage"),_=r("EditableTable"),f=r("BackendConnection");return d(),b(O,null,[n("div",C,[n("div",A,[n("h1",S,y(t.title),1)]),n("div",v,[n("div",F,[i(u,{original:t.original,onSearchData:a.searchData},null,8,["original","onSearchData"]),o.hasPermission(t.moduleName,"export")?(d(),c(h,{key:0,ref:"ExportButton",onExportData:a.exportData},null,8,["onExportData"])):m("",!0),o.hasPermission(t.moduleName,"import")?(d(),c(p,{key:1,moduleName:t.moduleName,onImportData:a.createOne},null,8,["moduleName","onImportData"])):m("",!0)])])]),i(g,{ref:"AlertMessage",class:"row pt-1"},null,512),i(_,{token:o.token,user:o.user,moduleName:t.moduleName,Model:t.Model,fields:t.fields,models:t.models,auxiliar:t.auxiliar,hasPermission:o.hasPermission,onShowMessage:a.showMessage,onCreateOne:a.createOne,onUpdateOne:a.updateOne,onDeleteOne:a.deleteOne},null,8,["token","user","moduleName","Model","fields","models","auxiliar","hasPermission","onShowMessage","onCreateOne","onUpdateOne","onDeleteOne"]),i(f,{token:o.token,moduleName:t.moduleName,ref:"BackendConnection",onShowMessage:a.showMessage},null,8,["token","moduleName","onShowMessage"])],64)}const H=D(E,[["render",P]]);export{H as default};
