import{M as _,x as V,a6 as i,R as d,S as b,T as s,c as o,af as k,au as C,a5 as e,X as m,Y as x,Z as w,a7 as n}from"./index-9af438fb.js";import{V as g,b as p,a as y}from"./VRow-4da47f46.js";import{V as B}from"./VCheckbox-7e8585f4.js";const N=e("h1",null,"訂位管理",-1),R=e("thead",null,[e("tr",null,[e("th",null,"姓名"),e("th",null,"手機號碼"),e("th",null,"人數"),e("th",null,"日期時間"),e("th",null,"訂位確認")])],-1),D={__name:"AdminReservationView",setup(S){const u=_(),c=V([]),f=async(a,r)=>{try{if((await i.patch(`/reservation/${a}`,{confirmed:r})).data.success){u({text:"訂位狀態已更新",showCloseButton:!1,snackbarProps:{timeout:2e3,color:"success",location:"bottom"}});const l=c.value.find(h=>h._id===a);l&&(l.confirmed=r)}}catch(t){u({text:t.response.data.message,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}};return(async()=>{try{const{data:a}=await i.get("/reservation/all");c.value=a.result}catch(a){u({text:a.response.data.message,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}})(),(a,r)=>(d(),b(g,null,{default:s(()=>[o(y,null,{default:s(()=>[o(p,{cols:"12",class:"text-center"},{default:s(()=>[N]),_:1}),o(k),o(p,{cols:"12"},{default:s(()=>[o(C,null,{default:s(()=>[R,e("tbody",null,[(d(!0),m(w,null,x(c.value,t=>(d(),m("tr",{key:t._id},[e("td",null,n(t.name),1),e("td",null,n(t.phoneNumber),1),e("td",null,n(t.peopleNumber),1),e("td",null,n(t.dateTime),1),e("td",null,[o(B,{modelValue:t.confirmed,"onUpdate:modelValue":l=>t.confirmed=l,onChange:l=>f(t._id,t.confirmed)},null,8,["modelValue","onUpdate:modelValue","onChange"])])]))),128))])]),_:1})]),_:1})]),_:1})]),_:1}))}};export{D as default};