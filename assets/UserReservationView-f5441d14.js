import{M as _,x as m,a7 as i,R as o,S as h,T as e,c as n,av as p,a6 as t,X as c,Y as f,Z as b,a8 as s}from"./index-609f76b7.js";import{V as g,b as u,a as V}from"./VRow-b82b7b59.js";const k=t("h1",null,"我的訂位",-1),x=t("p",null,"店家確認訂位後，訂位確認會顯示 true",-1),w=t("p",null,"若需取消訂位，請聯絡我們 02 2703 7507",-1),y=t("thead",null,[t("tr",null,[t("th",null,[t("strong",null,"姓名")]),t("th",null,[t("strong",null,"手機號碼")]),t("th",null,[t("strong",null,"人數")]),t("th",null,[t("strong",null,"日期時間")]),t("th",null,[t("strong",null,"訂位確認")])])],-1),R={__name:"UserReservationView",setup(B){const d=_(),r=m([]);return(async()=>{try{const{data:a}=await i.get("/reservation");r.value=a.result}catch(a){console.log(a),d({text:a.response.data.message,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}})(),(a,C)=>(o(),h(g,null,{default:e(()=>[n(V,null,{default:e(()=>[n(u,{cols:"12",class:"text-center mb-10"},{default:e(()=>[k]),_:1}),n(u,{class:"text-center mt-16 mb-10"},{default:e(()=>[x,w]),_:1}),n(u,{cols:"12",class:"mt-16 mb-10"},{default:e(()=>[n(p,null,{default:e(()=>[y,t("tbody",null,[(o(!0),c(b,null,f(r.value,l=>(o(),c("tr",{key:l._id},[t("td",null,s(l.name),1),t("td",null,s(l.phoneNumber),1),t("td",null,s(l.peopleNumber),1),t("td",null,s(l.dateTime),1),t("td",null,s(l.confirmed),1)]))),128))])]),_:1})]),_:1})]),_:1})]),_:1}))}};export{R as default};