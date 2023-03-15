import{A as n}from"./AlertMessage.01568e9d.js";import{B as m}from"./BackendConnection.c2c5cca6.js";import{_ as l,r as s,o as c,c as p,a as t,F as f,b as h}from"./index.38dda0bd.js";const q={props:["token","user","hasPermission"],data(){return{moduleName:"",title:"Estaciones p\xFAblicas",models:[]}},methods:{showMessage(a,e){this.$refs.AlertMessage.show(a,e)},async getData(){try{const a=await this.$refs.BackendConnection.getAll();this.models=a.data}catch(a){console.log(a),this.showMessage("No se pudo obtener los registros de la base de datos.","error")}},getVariables(a){if(a){const e={};for(const i in a[0].data)i=="temperature_mean_C"?e["Temperatura promedio"]=a[0].data[i]+"\xB0C":i=="temperature_dc"?e.Temperatura=a[0].data[i]+"\xB0C":i=="humidity_rh"?e.Humedad=a[0].data[i]+"%":i=="humidity_mean_1"?e["Humedad 1 promedio"]=a[0].data[i]+"%":i=="humidity_mean_2"?e["Humedad 2 promedio"]=a[0].data[i]+"%":i=="rain_mmh"?e.Lluvia=a[0].data[i]+"mmh":i=="light_lux"?e.Radiaci\u00F3n=a[0].data[i]+"lux":i=="windpos_deg"?e["Direcci\xF3n del viento"]=a[0].data[i]+"\xB0":i=="windspeed_kmh"&&(e["Velocidad del viento"]=a[0].data[i]+"km/h");return e}else return a},getDate(a){if(a)if(a[0].data.years){let e=(a[0].data.days<9?"0"+a[0].data.days:a[0].data.days)+"/";return e+=(a[0].data.months<9?"0"+a[0].data.months:a[0].data.months)+"/",e+=a[0].data.years+" ",e+=(a[0].data.hours<9?"0"+a[0].data.hours:a[0].data.hours)+":",e+=(a[0].data.minutes<9?"0"+a[0].data.minutes:a[0].data.minutes)+":",e+=a[0].data.seconds<9?"0"+a[0].data.seconds:a[0].data.seconds,e}else return a[0].created_at.slice(0,10)+" "+a[0].time_at;else return a},icon(a){return a=="Temperatura promedio"||a=="Temperatura"?'<i class="fa-solid fa-temperature-half"></i>':a=="Humedad"||a=="Humedad 1 promedio"||a=="Humedad 2 promedio"?'<i class="fa-solid fa-droplet"></i>':a=="Lluvia"?'<i class="fa-solid fa-cloud-rain"></i>':a=="Radiaci\xF3n"?'<i class="fa-solid fa-sun"></i>':a=="Direcci\xF3n del viento"||a=="Velocidad del viento"?'<i class="fa-solid fa-wind"></i>':'<i class="fa-solid fa-feather"></i>'}},computed:{display(){return this.models.length?this.models:[]}},components:{AlertMessage:n,BackendConnection:m},mounted(){this.getData()}},v=h('<div class="w-100 my-1 mt-2 text-center"><img src="https://www.chec.com.co/Portals/_default/Skins/Chec.Extranet.Skin.Koala/assets/img/LogoEpm.svg" alt="Somos logo" height="100" class="mx-3"></div><div class="w-100 col-auto m-1 mx-5"><div class="w-75 mx-auto text-justify"><h1 class="fw-bold mx-3 mt-3">Innovate Chec</h1><br><br><p class="mx-3 fs-4"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt asperiores porro a eius sequi nostrum aliquid consectetur, itaque, nam alias dignissimos, soluta atque quibusdam voluptatem! Perferendis nisi illo ullam id ipsum possimus dicta! Distinctio eveniet molestiae, autem consequuntur optio explicabo! </p><br><p class="mx-3 fs-4"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis labore nam tenetur unde doloremque autem expedita reiciendis earum est quas explicabo natus at deserunt voluptas suscipit, culpa, quo distinctio recusandae consequatur reprehenderit? Eos quisquam velit, necessitatibus nam quis, id laboriosam esse repudiandae omnis qui fugit minima tenetur nesciunt! Officia velit beatae odio numquam id, ipsa tenetur excepturi reprehenderit laborum minus est doloremque adipisci, repudiandae aperiam. Ut earum, tenetur ad rerum voluptatem inventore veniam maxime exercitationem possimus nemo facere enim officiis minima voluptates sequi quo! Quas delectus maxime necessitatibus minus perspiciatis ipsa labore numquam ipsam accusamus earum, molestiae ut, velit reiciendis? </p><br><p class="mx-3 fs-4"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo consequatur voluptate ab ducimus voluptates, modi odio ut animi a voluptatum iusto aspernatur sint ipsa pariatur! Quaerat minima, rem ullam labore magnam possimus placeat unde? Sint veniam sunt blanditiis ex ullam non provident itaque ducimus, at laudantium nobis maxime aspernatur velit, porro, saepe quam est. Officia, expedita sit. Temporibus voluptatem eius facilis iusto, voluptas ducimus sed excepturi possimus quae quidem aut aliquam consectetur magnam, deserunt cum! Animi id similique sapiente quos, ipsam exercitationem? Hic at quasi est cupiditate. Animi nulla, magnam vel quae quis nam sint consequatur aspernatur dolores saepe eveniet, ullam aliquam quisquam nesciunt inventore rem blanditiis adipisci eum id illum alias quaerat temporibus mollitia? Reprehenderit blanditiis porro repudiandae voluptatum. </p><br><p class="mx-3 fs-4"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem rem cumque quos, est doloribus officiis. Animi atque reiciendis aliquam dolorem expedita! Accusamus inventore temporibus quo modi accusantium? Quo voluptatem maxime aliquam repellendus ullam quidem autem recusandae alias tempora animi cupiditate magnam illo velit minima nobis quos molestias quis nisi corporis vero debitis, non dolor laboriosam saepe? Dolore tempora quod ratione porro nihil rerum enim dolores. Excepturi eaque quibusdam maiores dolor laboriosam aliquid cupiditate, corrupti, nulla voluptates, illo recusandae perferendis. </p></div><div class="w-100 my-1 text-center"><img src="https://www.chec.com.co/Portals/_default/Skins/Chec.Extranet.Skin.Koala/assets/img/logoCHEC.svg" alt="Chec logo" class="w-75 my-3 bg-dark"></div></div>',2);function g(a,e,i,_,o,r){const u=s("AlertMessage"),d=s("BackendConnection");return c(),p(f,null,[t(u,{ref:"AlertMessage",class:"row pt-1"},null,512),v,t(d,{token:i.token,moduleName:o.moduleName,ref:"BackendConnection",onShowMessage:r.showMessage},null,8,["token","moduleName","onShowMessage"])],64)}const C=l(q,[["render",g]]);export{C as default};
