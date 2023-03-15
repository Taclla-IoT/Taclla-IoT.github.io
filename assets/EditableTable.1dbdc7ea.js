import{_ as f,o as n,c as r,e as i,n as w,t as b,d as g,r as p,F as h,f as _,i as N,h as k,a as x}from"./index.38dda0bd.js";import{P}from"./PageGenerator.9b8be5c5.js";const S={props:["moduleName","name","index","type","placeholder","value","target","validation","message"],emits:["cellChange","showMessage"],data(){return{error:!1,color:"rounded border border-success p-1"}},methods:{update(t){if(this.type=="checkbox")return this.$emit("cellChange",this.index,this.name,t.target.checked);if(this.type=="combobox")return this.$emit("cellChange",this.index,this.name,t.target.value);this.validation&&(this.error=!String(t.target.value).toLowerCase().match(this.validation)),this.error?this.color="rounded border border-danger p-1":this.color="rounded border border-warning p-1",this.error&&this.$emit("showMessage",this.message,"error"),this.$emit("cellChange",this.index,this.name,t.target.value)}}},M=["type","placeholder","value","checked","id"],G={key:0,class:"px-1"},E=["name","id"];function B(t,s,e,u,d,l){return n(),r("div",null,[i("input",{type:e.type,placeholder:e.placeholder,value:e.value,checked:e.value,onChange:s[0]||(s[0]=(...c)=>l.update&&l.update(...c)),class:w(d.color),id:e.name},null,42,M),e.type=="checkbox"?(n(),r("label",G,b(e.placeholder),1)):g("",!0),e.type=="button"?(n(),r("button",{key:1,name:e.name,id:e.index,onClick:s[1]||(s[1]=c=>t.$router.push("/"+t.ref)),class:"btn btn-secondary"},b(e.placeholder),9,E)):g("",!0)])}const L=f(S,[["render",B]]);const F={props:["token","user","moduleName","Model","models","fields","auxiliar","hasPermission"],emits:["showMessage","createOne","updateOne","deleteOne"],data(){return{model:{}}},created(){this.clear()},computed:{display(){return this.models.length?this.$refs.PageGenerator.paginate(this.models):[]}},methods:{clear(){this.model=new this.Model({})},showMessage(t,s){this.$emit("showMessage",t,s)},onChange(t,s,e){if(t==-1)this.model[s]=e;else{const u=this.$refs.PageGenerator.getIndex(t);this.models[u][s]=e}},format(t,s,e){if(s){if(s=="datetime")return new Date(t).toLocaleString();if(s=="date")return new Date(t).toLocaleDateString();if(s=="time")return new Date(t).toLocaleTimeString();if(s=="checkbox")return t?"S\xED":"No";if(s=="combobox"||s=="status"){const u=this.auxiliar[e].find(d=>d.id===t);return u?u.name:t}else if(s=="multiple"){let u="";return t.forEach(d=>{const l=this.auxiliar[e].find(c=>c.id===d);l&&(u+=l.name+`
`)}),u}}else return t},sortBy(t,s=!1){this.models.sort((e,u)=>{let d=e[t].toLowerCase(),l=u[t].toLowerCase();return s?d<l?1:d>l?-1:0:d<l?-1:d>l?1:0})},updateSelect(t,s,e,u=!1){if(u){const d=[],l=document.getElementById("multiple"+t).options;for(const c of l)c.selected&&d.push(c.value);t!=-1?this.models[t][s]=d:this.model[s]=d}else t!=-1?this.models[this.$refs.PageGenerator.getIndex(t)][s]=e:this.model[s]=e},checkSelected(t,s,e){return e=="multiple"?s.find(u=>u==t):t==s}},components:{EditableCell:L,PageGenerator:P}},O={class:"row mt-1"},D={class:"table table-striped mt-3"},I={class:"btn-group-vertical"},T=["onClick"],V=i("i",{class:"fa-solid fa-arrow-up-a-z"},null,-1),z=[V],j=["onClick"],q=i("i",{class:"fa-solid fa-arrow-down-z-a"},null,-1),A=[q],H={key:0},J=["name","multiple","id","onFocusout"],K=["value"],Q={class:"btn-group"},R=i("i",{class:"fa-solid fa-floppy-disk"},null,-1),U=[R],W=i("i",{class:"fa-solid fa-delete-left"},null,-1),X=[W],Y=["name","id","multiple","onFocusout"],Z=["value","selected"],$={key:2},ee={class:"btn-group"},te=["onClick"],se=i("i",{class:"fa-solid fa-floppy-disk"},null,-1),oe=[se],ae=["onClick"],ne=i("i",{class:"fa-solid fa-trash"},null,-1),le=[ne];function re(t,s,e,u,d,l){const c=p("EditableCell"),C=p("PageGenerator");return n(),r(h,null,[i("div",O,[i("table",D,[i("thead",null,[i("tr",null,[(n(!0),r(h,null,_(e.fields,(a,m)=>(n(),r("th",{key:m,scope:"col"},[i("div",I,[i("button",{onClick:o=>l.sortBy(a.name,!1),class:"btn btn-secundary btn-sm"},z,8,T),i("button",{onClick:o=>l.sortBy(a.name,!0),class:"btn btn-secundary btn-sm"},A,8,j)]),N(" "+b(a.placeholder),1)]))),128))])]),i("tbody",null,[e.hasPermission(e.moduleName,"create")?(n(),r("tr",H,[(n(!0),r(h,null,_(e.fields,(a,m)=>(n(),r("td",{key:m,scope:"row"},[a.type=="combobox"||a.type=="multiple"?(n(),r("select",{key:0,name:a.name,index:-1,multiple:a.type=="multiple",id:a.type+"-1",onFocusout:o=>l.updateSelect(-1,a.name,o.target.value,a.type=="multiple"),class:"rounded border border-dark"},[(n(!0),r(h,null,_(e.auxiliar[a.target],o=>(n(),r("option",{value:o.id},b(o.name),9,K))),256))],40,J)):a.type!="view"?(n(),k(c,{key:1,moduleName:e.moduleName,name:a.name,index:-1,type:a.type,placeholder:a.placeholder,value:d.model[a.name],validation:a.validation,message:a.message,onCellChange:l.onChange,onShowMessage:l.showMessage},null,8,["moduleName","name","type","placeholder","value","validation","message","onCellChange","onShowMessage"])):g("",!0)]))),128)),i("td",null,[i("div",Q,[e.hasPermission(e.moduleName,"create")?(n(),r("button",{key:0,type:"button","data-toggle":"tooltip","data-placement":"bottom",title:"Guardar",class:"btn btn-success",onClick:s[0]||(s[0]=a=>t.$emit("createOne",d.model))},U)):g("",!0),i("button",{type:"button","data-toggle":"tooltip","data-placement":"bottom",title:"Limpiar",class:"btn btn-warning",onClick:s[1]||(s[1]=a=>d.model=new e.Model({}))},X)])])])):g("",!0),(n(!0),r(h,null,_(l.display,(a,m)=>(n(),r("tr",{key:m},[(n(!0),r(h,null,_(e.fields,(o,v)=>(n(),r("td",{key:v,scope:"row"},[e.hasPermission(e.moduleName,"modify."+o.name)&&(o.type=="combobox"||o.type=="multiple")?(n(),r("select",{key:0,name:o.name,id:o.type+m,multiple:o.type=="multiple",onFocusout:y=>l.updateSelect(m,o.name,y.target.value,o.type=="multiple"),class:"rounded border border-secondary"},[(n(!0),r(h,null,_(e.auxiliar[o.target],y=>(n(),r("option",{value:y.id,selected:l.checkSelected(y._id,a[o.name],o.type)},b(y.name),9,Z))),256))],40,Y)):e.hasPermission(e.moduleName,"modify."+o.name)&&o.type!="view"?(n(),k(c,{key:1,moduleName:e.moduleName,name:o.name,index:m,type:o.type,placeholder:o.placeholder,value:a[o.name],validation:o.validation,message:o.message,onCellChange:l.onChange,onShowMessage:l.showMessage},null,8,["moduleName","name","index","type","placeholder","value","validation","message","onCellChange","onShowMessage"])):(n(),r("p",$,b(this.format(a[o.name],o.format,o.target)),1))]))),128)),i("td",null,[i("div",ee,[e.hasPermission(e.moduleName,"update")?(n(),r("button",{key:0,type:"button","data-toggle":"tooltip","data-placement":"bottom",title:"Guardar",class:"btn btn-success",onClick:o=>t.$emit("updateOne",t.$refs.PageGenerator.getIndex(m))},oe,8,te)):g("",!0),e.hasPermission(e.moduleName,"delete")?(n(),r("button",{key:1,type:"button","data-toggle":"tooltip","data-placement":"bottom",title:"Eliminar",class:"btn btn-danger",onClick:o=>t.$emit("deleteOne",t.$refs.PageGenerator.getIndex(m))},le,8,ae)):g("",!0)])])]))),128))])])]),x(C,{ref:"PageGenerator"},null,512)],64)}const ue=f(F,[["render",re]]);export{ue as E};
