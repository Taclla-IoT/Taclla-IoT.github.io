import{A as w}from"./AlertMessage.6f290154.js";import{E as k}from"./ExportButton.b10a8561.js";import{I as M}from"./ImportButton.2e5cf923.js";import{S as x}from"./SearchField.c84dfee6.js";import{E as B}from"./EditableTable.2d1786b7.js";import{B as N}from"./BackendConnection.394f6f3e.js";import{_ as D,g as l,r,o as c,c as b,e as n,t as y,a as i,h as d,d as m,F as O}from"./index.2caffc62.js";import"./PageGenerator.b32dc198.js";const E={props:["token","user","hasPermission","updateToken"],data(){return{moduleName:"places",title:l.places.title,Model:l.places.Model,fields:l.places.fields,models:[],original:[],auxiliar:[]}},created(){this.token?this.user?this.hasPermission(this.moduleName,"access")||this.$router.push("/"):this.$router.push("/"):this.$router.push("/")},methods:{showMessage(s,e){this.$refs.AlertMessage.show(s,e)},searchData(s){this.models=s},exportData(s=0){s==1?this.$refs.ExportButton.exportFile(this.original,this.moduleName):this.$refs.ExportButton.exportFile(this.models,this.moduleName)},async getData(){try{const s=await this.$refs.BackendConnection.getAll();this.original=s.data.map(e=>new this.Model(e)),this.models=this.original,this.updateToken({...s,token:this.token}),s.auxiliar&&(this.auxiliar=s.auxiliar)}catch(s){console.log(s),this.showMessage("No se pudo obtener los registros de la base de datos.","error")}},async createOne(s){try{const e=await this.$refs.BackendConnection.createOne(s);this.showMessage("Nuevo registro creado en la base de datos.","success"),this.models.push(e.data)}catch(e){console.log(e),this.showMessage("No se pudo crear el registro en la base de datos.","error")}},async updateOne(s){const e=this.models[s];delete e.createdAt,delete e.createdBy,delete e.updatedAt,delete e.updatedBy;try{await this.$refs.BackendConnection.updateOne(e),this.showMessage("Registro actualizado en la base de datos.","success")}catch(t){console.log(t),this.showMessage("No se pudo actualizar el registro en la base de datos.","error")}},async deleteOne(s){try{const e=window.prompt("\xBFEst\xE1 seguro que quiere eliminar el registro? De ser as\xED, escribe la raz\xF3n.","");if(e==null||e=="")return;this.$refs.BackendConnection.deleteOne(this.models[s],e),this.showMessage("Registro eliminado de la base de datos.","success"),this.getData()}catch(e){console.log(e),this.showMessage("No se pudo eliminar el registro de la base de datos.","error")}}},components:{AlertMessage:w,ExportButton:k,ImportButton:M,SearchField:x,EditableTable:B,BackendConnection:N},mounted(){this.hasPermission(this.moduleName,"access")?this.getData():this.$router.push("/")}},C={class:"row pt-3 w-100"},S={class:"col"},P={id:"moduleTitle"},A={class:"col py-2"},v={class:"btn-group"};function F(s,e,t,I,o,a){const h=r("SearchField"),u=r("ExportButton"),p=r("ImportButton"),g=r("AlertMessage"),_=r("EditableTable"),f=r("BackendConnection");return c(),b(O,null,[n("div",C,[n("div",S,[n("h1",P,y(o.title),1)]),n("div",A,[n("div",v,[i(h,{original:o.original,onSearchData:a.searchData},null,8,["original","onSearchData"]),t.hasPermission(o.moduleName,"export")?(c(),d(u,{key:0,ref:"ExportButton",onExportData:a.exportData},null,8,["onExportData"])):m("",!0),t.hasPermission(o.moduleName,"import")?(c(),d(p,{key:1,moduleName:o.moduleName,onImportData:a.createOne},null,8,["moduleName","onImportData"])):m("",!0)])])]),i(g,{ref:"AlertMessage",class:"row pt-1"},null,512),i(_,{token:t.token,user:t.user,moduleName:o.moduleName,Model:o.Model,fields:o.fields,models:o.models,auxiliar:o.auxiliar,hasPermission:t.hasPermission,onShowMessage:a.showMessage,onCreateOne:a.createOne,onUpdateOne:a.updateOne,onDeleteOne:a.deleteOne},null,8,["token","user","moduleName","Model","fields","models","auxiliar","hasPermission","onShowMessage","onCreateOne","onUpdateOne","onDeleteOne"]),i(f,{token:t.token,moduleName:o.moduleName,ref:"BackendConnection",onShowMessage:a.showMessage},null,8,["token","moduleName","onShowMessage"])],64)}const H=D(E,[["render",F]]);export{H as default};
