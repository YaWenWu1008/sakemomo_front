import{R as a,S as i,T as l,c as n,V as x,aj as S,a0 as C,a8 as V,ak as $,al as b,am as w,M as B,x as N,af as T,a6 as t,ai as P,X as u,Y as f,Z as r,K as R,$ as _,an as y,ao as m,_ as g}from"./index-99ab0e17.js";import{a as D}from"./aos-97de04ae.js";import{V as I,b as s,a as M}from"./VRow-4ddf8750.js";import"./_commonjsHelpers-725317a4.js";const k={__name:"ProductCard",props:{_id:{type:String,default:()=>""},category:{type:String,default:()=>""},description:{type:String,default:()=>""},image:{type:String,default:()=>""},name:{type:String,default:()=>""},price:{type:Number,default:()=>0},sell:{type:Boolean,default:()=>!0}},setup(v){return(h,d)=>(a(),i(w,{height:"500"},{default:l(()=>[n(x,{src:v.image,cover:"",height:"350"},null,8,["src"]),n(S,{class:"text-white text-decoration-none text-center font-weight-bold"},{default:l(()=>[C(V(v.name),1)]),_:1}),n($,{class:"text-center"},{default:l(()=>[C("$"+V(v.price),1)]),_:1}),n(b,{class:"text-center"},{default:l(()=>[C(V(v.description),1)]),_:1})]),_:1}))}},j=t("h1",{class:"text-center"},"菜單介紹",-1),q={class:"menu d-flex"},z=t("h2",null,"開胃小食",-1),E=t("h2",null,"生食 & 沙拉",-1),F=t("h2",null,"酒桃塔可",-1),K=t("h2",null,"燒物",-1),L=t("h2",null,"揚物",-1),X=t("h2",null,"食事 & 吸物",-1),Y=t("h2",null,"甜點",-1),Z=t("h2",null,"夜場限定",-1),A=t("h1",null,"酒",-1),Q={__name:"MenuView",setup(v){const h=B(),d=N([]);D.init(),(async()=>{try{const{data:p}=await T.get("/products");d.value.push(...p.result)}catch(p){h({text:p.response.data.message,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}})();const c=p=>{const o=document.querySelector(p);o&&o.scrollIntoView({behavior:"smooth"})};return(p,o)=>(a(),i(I,null,{default:l(()=>[n(M,null,{default:l(()=>[n(s,{cols:"12"},{default:l(()=>[j,t("div",q,[t("p",null,[t("a",{onClick:o[0]||(o[0]=e=>c("#a1"))},"開胃小食")]),t("p",null,[t("a",{onClick:o[1]||(o[1]=e=>c("#a2"))},"生食 & 沙拉")]),t("p",null,[t("a",{onClick:o[2]||(o[2]=e=>c("#a3"))},"酒桃塔可")]),t("p",null,[t("a",{onClick:o[3]||(o[3]=e=>c("#a4"))},"燒物")]),t("p",null,[t("a",{onClick:o[4]||(o[4]=e=>c("#a5"))},"揚物")]),t("p",null,[t("a",{onClick:o[5]||(o[5]=e=>c("#a6"))},"食事 & 吸物")]),t("p",null,[t("a",{onClick:o[6]||(o[6]=e=>c("#a7"))},"甜點")]),t("p",null,[t("a",{onClick:o[7]||(o[7]=e=>c("#a8"))},"夜場限定")]),t("p",null,[t("a",{onClick:o[8]||(o[8]=e=>c("#a9"))},"酒")])])]),_:1}),n(P),n(s,{cols:"12",id:"a1"},{default:l(()=>[z]),_:1}),(a(!0),u(r,null,f(d.value,e=>(a(),u(r,{key:e._id},[e.category==="開胃小食"?(a(),i(s,{key:0,cols:"12",md:"6",lg:"3","data-aos":"fade-up","data-aos-duration":"1000"},{default:l(()=>[n(_(k),y(m(e)),null,16)]),_:2},1024)):g("",!0)],64))),128)),n(s,{cols:"12",id:"a2"},{default:l(()=>[E]),_:1}),(a(!0),u(r,null,f(d.value,e=>(a(),u(r,{key:e._id},[e.category==="生食&沙拉"?(a(),i(s,{key:0,cols:"12",md:"6",lg:"3","data-aos":"fade-up","data-aos-duration":"1000"},{default:l(()=>[n(_(k),y(m(e)),null,16)]),_:2},1024)):g("",!0)],64))),128)),n(s,{cols:"12",id:"a3"},{default:l(()=>[F]),_:1}),(a(!0),u(r,null,f(d.value,e=>(a(),u(r,{key:e._id},[e.category==="酒桃塔可"?(a(),i(s,{key:0,cols:"12",md:"6",lg:"3","data-aos":"fade-up","data-aos-duration":"1000"},{default:l(()=>[n(_(k),y(m(e)),null,16)]),_:2},1024)):g("",!0)],64))),128)),n(s,{cols:"12",id:"a4"},{default:l(()=>[K]),_:1}),(a(!0),u(r,null,f(d.value,e=>(a(),u(r,{key:e._id},[e.category==="燒物"?(a(),i(s,{key:0,cols:"12",md:"6",lg:"3","data-aos":"fade-up","data-aos-duration":"1000"},{default:l(()=>[n(_(k),y(m(e)),null,16)]),_:2},1024)):g("",!0)],64))),128)),n(s,{cols:"12",id:"a5"},{default:l(()=>[L]),_:1}),(a(!0),u(r,null,f(d.value,e=>(a(),u(r,{key:e._id},[e.category==="揚物"?(a(),i(s,{key:0,cols:"12",md:"6",lg:"3","data-aos":"fade-up","data-aos-duration":"1000"},{default:l(()=>[n(_(k),y(m(e)),null,16)]),_:2},1024)):g("",!0)],64))),128)),n(s,{cols:"12",id:"a6"},{default:l(()=>[X]),_:1}),(a(!0),u(r,null,f(d.value,e=>(a(),u(r,{key:e._id},[e.category==="食事&吸物"?(a(),i(s,{key:0,cols:"12",md:"6",lg:"3","data-aos":"fade-up","data-aos-duration":"1000"},{default:l(()=>[n(_(k),y(m(e)),null,16)]),_:2},1024)):g("",!0)],64))),128)),n(s,{cols:"12",id:"a7"},{default:l(()=>[Y]),_:1}),(a(!0),u(r,null,f(d.value,e=>(a(),u(r,{key:e._id},[e.category==="甜點"?(a(),i(s,{key:0,cols:"12",md:"6",lg:"3","data-aos":"fade-up","data-aos-duration":"1000"},{default:l(()=>[n(_(k),y(m(e)),null,16)]),_:2},1024)):g("",!0)],64))),128)),n(s,{cols:"12",id:"a8"},{default:l(()=>[Z]),_:1}),(a(!0),u(r,null,f(d.value,e=>(a(),u(r,{key:e._id},[e.category==="夜場限定"?(a(),i(s,{key:0,cols:"12",md:"6",lg:"3","data-aos":"fade-up","data-aos-duration":"1000"},{default:l(()=>[n(_(k),y(m(e)),null,16)]),_:2},1024)):g("",!0)],64))),128)),n(s,{cols:"12",id:"a9"},{default:l(()=>[A]),_:1}),(a(!0),u(r,null,f(d.value,e=>(a(),u(r,{key:e._id},[e.category==="酒"?(a(),i(s,{key:0,cols:"12",md:"6",lg:"3","data-aos":"fade-up","data-aos-duration":"1000"},{default:l(()=>[n(_(k),y(m(e)),null,16)]),_:2},1024)):g("",!0)],64))),128))]),_:1}),n(s,{class:"text-center"},{default:l(()=>[n(R,{to:"/reservation",color:"secondary"},{default:l(()=>[C("立即訂位")]),_:1})]),_:1})]),_:1}))}};export{Q as default};