import{_ as r}from"./index.893c45a6.js";const n={props:["token","moduleName"],emits:["showMessage"],data(){return{moduleServer:"http://localhost:3000/"}},methods:{async getAll(t=""){try{const e={method:"GET",headers:{"Content-Type":"application/json","x-access-token":this.token}};return await(await fetch(this.moduleServer+this.moduleName+t,e)).json()}catch(e){console.log(e),this.$emit("showMessage","No se pudo obtener los registros de la base de datos.","error")}},async getOne(t){try{const e={method:"GET",headers:{"Content-Type":"application/json","x-access-token":this.token}};return await(await fetch(this.moduleServer+this.moduleName+"/"+t,e)).json()}catch(e){console.log(e),this.$emit("showMessage","No se pudo obtener los registros de la base de datos.","error")}},async createOne(t){try{const e={method:"POST",headers:{"Content-Type":"application/json","x-access-token":this.token},body:JSON.stringify(t)};return await(await fetch(this.moduleServer+this.moduleName,e)).json()}catch(e){console.log(e),this.$emit("showMessage","No se pudo crear el nuevo registro en la base de datos.","error")}},async updateOne(t){try{const e={method:"PUT",headers:{"Content-Type":"application/json","x-access-token":this.token},body:JSON.stringify(t)};return await(await fetch(this.moduleServer+this.moduleName+"/"+t.id,e)).json()}catch(e){console.log(e),this.$emit("showMessage","No se pudo actualizar el registro en la base de datos.","error")}},async deleteOne(t,e){try{const o={method:"DELETE",headers:{"Content-Type":"application/json","x-access-token":this.token},body:JSON.stringify({reason:e})};return await(await fetch(this.moduleServer+this.moduleName+"/"+t.id,o)).json()}catch(o){console.log(o),this.$emit("showMessage","No se pudo eliminar el registro de la base de datos.","error")}}}};function i(t,e,o,s,a,c){return null}const h=r(n,[["render",i]]);export{h as B};
