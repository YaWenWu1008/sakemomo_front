import{M as i,x as _,a7 as h,R as o,S as m,T as e,c as l,ai as p,av as f,a6 as t,X as c,Y as V,Z as b,a8 as n}from"./index-99ab0e17.js";import{V as k,b as u,a as x}from"./VRow-4ddf8750.js";const v=t("h1",null,"會員管理",-1),w=t("thead",null,[t("tr",null,[t("th",null,"ID"),t("th",null,"帳號"),t("th",null,"信箱"),t("th",null,"手機號碼")])],-1),S={__name:"AdminUserView",setup(y){const d=i(),r=_([]);return(async()=>{try{const{data:s}=await h.get("/users/all");r.value=s.result}catch(s){d({text:s.response.data.message,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}})(),(s,B)=>(o(),m(k,null,{default:e(()=>[l(x,null,{default:e(()=>[l(u,{cols:"12",class:"text-center"},{default:e(()=>[v]),_:1}),l(p),l(u,{cols:"12"},{default:e(()=>[l(f,{hover:""},{default:e(()=>[w,t("tbody",null,[(o(!0),c(b,null,V(r.value,a=>(o(),c("tr",{key:a._id},[t("td",null,n(a._id),1),t("td",null,n(a.account),1),t("td",null,n(a.email),1),t("td",null,n(a.phoneNumber),1)]))),128))])]),_:1})]),_:1})]),_:1})]),_:1}))}};export{S as default};