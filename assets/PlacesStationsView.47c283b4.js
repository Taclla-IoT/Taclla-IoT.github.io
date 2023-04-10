import{A as w}from"./AlertMessage.8d95dbf2.js";import{E as k}from"./ExportButton.98afc32a.js";import{I as M}from"./ImportButton.231f6ae8.js";import{S as x}from"./SearchField.1679cc3b.js";import{E as B}from"./EditableTable.ed147c80.js";import{B as N}from"./BackendConnection.f4718f70.js";import{_ as D,g as l,r as n,o as c,c as b,e as r,t as y,a as i,h as d,d as m,F as O}from"./index.6cf4a28e.js";import"./PageGenerator.d8b12943.js";const E={props:["token","user","hasPermission","updateToken"],data(){return{moduleName:"placesstations",title:l.placesstations.title,Model:l.placesstations.Model,fields:l.placesstations.fields,models:[],original:[],auxiliar:[]}},created(){this.token?this.user?this.hasPermission(this.moduleName,"access")||this.$router.push("/"):this.$router.push("/"):this.$router.push("/")},methods:{showMessage(s,e){this.$refs.AlertMessage.show(s,e)},searchData(s){this.models=s},exportData(s=0){s==1?this.$refs.ExportButton.exportFile(this.original,this.moduleName):this.$refs.ExportButton.exportFile(this.models,this.moduleName)},async getData(){try{const s=await this.$refs.BackendConnection.getAll();this.original=s.data.map(e=>new this.Model(e)),this.models=this.original,this.updateToken({...s,token:this.token}),s.auxiliar&&(this.auxiliar=s.auxiliar)}catch(s){console.log(s),this.showMessage("No se pudo obtener los registros de la base de datos.","error")}},async createOne(s){try{const e=await this.$refs.BackendConnection.createOne(s);this.showMessage("Nuevo registro creado en la base de datos.","success"),this.models.push(e.data)}catch(e){console.log(e),this.showMessage("No se pudo crear el registro en la base de datos.","error")}},async updateOne(s){const e=this.models[s];delete e.createdAt,delete e.createdBy,delete e.updatedAt,delete e.updatedBy;try{await this.$refs.BackendConnection.updateOne(e),this.showMessage("Registro actualizado en la base de datos.","success")}catch(o){console.log(o),this.showMessage("No se pudo actualizar el registro en la base de datos.","error")}},async deleteOne(s){try{const e=window.prompt("\xBFEst\xE1 seguro que quiere eliminar el registro? De ser as\xED, escribe la raz\xF3n.","");if(e==null||e=="")return;this.$refs.BackendConnection.deleteOne(this.models[s],e),this.showMessage("Registro eliminado de la base de datos.","success"),this.getData()}catch(e){console.log(e),this.showMessage("No se pudo eliminar el registro de la base de datos.","error")}}},components:{AlertMessage:w,ExportButton:k,ImportButton:M,SearchField:x,EditableTable:B,BackendConnection:N},mounted(){this.hasPermission(this.moduleName,"access")?this.getData():this.$router.push("/")}},S={class:"row pt-3 w-100"},C={class:"col"},P={id:"moduleTitle"},A={class:"col py-2"},v={class:"btn-group"};function F(s,e,o,I,t,a){const h=n("SearchField"),u=n("ExportButton"),p=n("ImportButton"),g=n("AlertMessage"),_=n("EditableTable"),f=n("BackendConnection");return c(),b(O,null,[r("div",S,[r("div",C,[r("h1",P,y(t.title),1)]),r("div",A,[r("div",v,[i(h,{original:t.original,onSearchData:a.searchData},null,8,["original","onSearchData"]),o.hasPermission(t.moduleName,"export")?(c(),d(u,{key:0,ref:"ExportButton",onExportData:a.exportData},null,8,["onExportData"])):m("",!0),o.hasPermission(t.moduleName,"import")?(c(),d(p,{key:1,moduleName:t.moduleName,onImportData:a.createOne},null,8,["moduleName","onImportData"])):m("",!0)])])]),i(g,{ref:"AlertMessage",class:"row pt-1"},null,512),i(_,{token:o.token,user:o.user,moduleName:t.moduleName,Model:t.Model,fields:t.fields,models:t.models,auxiliar:t.auxiliar,hasPermission:o.hasPermission,onShowMessage:a.showMessage,onCreateOne:a.createOne,onUpdateOne:a.updateOne,onDeleteOne:a.deleteOne},null,8,["token","user","moduleName","Model","fields","models","auxiliar","hasPermission","onShowMessage","onCreateOne","onUpdateOne","onDeleteOne"]),i(f,{token:o.token,moduleName:t.moduleName,ref:"BackendConnection",onShowMessage:a.showMessage},null,8,["token","moduleName","onShowMessage"])],64)}const H=D(E,[["render",F]]);export{H as default};
