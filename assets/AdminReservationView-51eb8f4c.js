import{M as _,x as V,a7 as i,R as d,S as b,T as s,c as o,ag as k,av as C,a6 as e,X as m,Y as x,Z as g,a8 as n}from"./index-609f76b7.js";import{V as w,b as p,a as y}from"./VRow-b82b7b59.js";import{V as B}from"./VCheckbox-c2ffb218.js";const N=e("h1",null,"訂位管理",-1),R=e("thead",null,[e("tr",null,[e("th",null,"姓名"),e("th",null,"手機號碼"),e("th",null,"人數"),e("th",null,"日期時間"),e("th",null,"訂位確認")])],-1),A={__name:"AdminReservationView",setup(S){const c=_(),r=V([]),h=async(a,u)=>{try{if((await i.patch(`/reservation/${a}`,{confirmed:u})).data.success){c({text:"訂位狀態已更新",showCloseButton:!1,snackbarProps:{timeout:2e3,color:"success",location:"bottom"}});const l=r.value.find(f=>f._id===a);l&&(l.confirmed=u)}}catch(t){c({text:t.response.data.message,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}};return(async()=>{try{const{data:a}=await i.get("/reservation/all");r.value=a.result}catch(a){c({text:a.response.data.message,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}})(),(a,u)=>(d(),b(w,null,{default:s(()=>[o(y,null,{default:s(()=>[o(p,{cols:"12",class:"text-center"},{default:s(()=>[N]),_:1}),o(k),o(p,{cols:"12"},{default:s(()=>[o(C,null,{default:s(()=>[R,e("tbody",null,[(d(!0),m(g,null,x(r.value,t=>(d(),m("tr",{key:t._id},[e("td",null,n(t.name),1),e("td",null,n(t.phoneNumber),1),e("td",null,n(t.peopleNumber),1),e("td",null,n(t.dateTime),1),e("td",null,[o(B,{modelValue:t.confirmed,"onUpdate:modelValue":l=>t.confirmed=l,onChange:l=>h(t._id,t.confirmed)},null,8,["modelValue","onUpdate:modelValue","onChange"])])]))),128))])]),_:1})]),_:1})]),_:1})]),_:1}))}};export{A as default};
