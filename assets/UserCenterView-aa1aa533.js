import{N as i,O as d,Q as f,R as t,X as o,c as a,T as s,Z as r,a5 as n,Y as h,S as m,a0 as p,a7 as V,_ as C}from"./index-3c30c933.js";import{V as k,a as w,b as x}from"./VRow-c2698dd1.js";const v=n("div",{class:"centerImg"},[n("h1",null,"會員中心")],-1),N={class:"circleContainer"},T={__name:"UserCenterView",setup(g){const c=i(),{isLogin:l}=d(c),u=[{to:"/userView",text:"會員資料",show:l.value},{to:"/userReservation",text:"我的訂位",show:l.value}];return(B,R)=>{const _=f("router-link");return t(),o(r,null,[v,a(k,null,{default:s(()=>[a(w,null,{default:s(()=>[a(x,null,{default:s(()=>[n("div",N,[(t(),o(r,null,h(u,e=>(t(),o(r,{key:e.to},[e.show?(t(),m(_,{key:0,href:e.to,to:e.to,class:"centerCircle"},{default:s(()=>[p(V(e.text),1)]),_:2},1032,["href","to"])):C("",!0)],64))),64))])]),_:1})]),_:1})]),_:1})],64)}}};export{T as default};
