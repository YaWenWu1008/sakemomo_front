import{p as B,m as W,a as j,g as E,u as H,c as a,b as Z,d as ee,e as te,f as ae,h as oe,t as F,i as le,j as se,k as ne,l as re,n as me,s as x,o as i,q as ge,V as ue,r as D,v as I,w as fe,x as q,y as he,z as U,A as be,B as ye,C as ie,D as _e,E as ke,F as Ve,G as ce,H as de,I as xe,J as pe,K as T,L as Se,M as we,N as Te,O as Be,P as Ce,Q as Y,R as y,S,T as l,U as Pe,W as G,X as N,Y as M,Z as L,_ as w,$ as J,a0 as R,a1 as K,a2 as A,a3 as Q,a4 as Ne,a5 as Le,a6 as z,a7 as Re,a8 as $}from"./index-f067b331.js";import{V as Ae,a as Ie,b as O}from"./VRow-937e43ab.js";import{V as Fe,a as Ee}from"./VNavigationDrawer-8ca40e72.js";const He=B({text:String,...W(),...j()},"VToolbarTitle"),Ue=E()({name:"VToolbarTitle",props:He(),setup(e,f){let{slots:t}=f;return H(()=>{const u=!!(t.default||t.text||e.text);return a(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>{var r;return[u&&a("div",{class:"v-toolbar-title__placeholder"},[t.text?t.text():e.text,(r=t.default)==null?void 0:r.call(t)])]}})}),{}}}),ze=[null,"prominent","default","comfortable","compact"],ve=B({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>ze.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...Z(),...W(),...ee(),...te(),...j({tag:"header"}),...ae()},"VToolbar"),X=E()({name:"VToolbar",props:ve(),setup(e,f){var s;let{slots:t}=f;const{backgroundColorClasses:u,backgroundColorStyles:r}=oe(F(e,"color")),{borderClasses:o}=le(e),{elevationClasses:v}=se(e),{roundedClasses:m}=ne(e),{themeClasses:_}=re(e),{rtlClasses:h}=me(),c=x(!!(e.extended||(s=t.extension)!=null&&s.call(t))),b=i(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),g=i(()=>c.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return ge({VBtn:{variant:"text"}}),H(()=>{var d;const k=!!(e.title||t.title),V=!!(t.image||e.image),n=(d=t.extension)==null?void 0:d.call(t);return c.value=!!(e.extended||n),a(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},u.value,o.value,v.value,m.value,_.value,h.value,e.class],style:[r.value,e.style]},{default:()=>[V&&a("div",{key:"image",class:"v-toolbar__image"},[t.image?a(D,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},t.image):a(ue,{key:"image-img",cover:!0,src:e.image},null)]),a(D,{defaults:{VTabs:{height:I(b.value)}}},{default:()=>{var p,C,P;return[a("div",{class:"v-toolbar__content",style:{height:I(b.value)}},[t.prepend&&a("div",{class:"v-toolbar__prepend"},[(p=t.prepend)==null?void 0:p.call(t)]),k&&a(Ue,{key:"title",text:e.title},{text:t.title}),(C=t.default)==null?void 0:C.call(t),t.append&&a("div",{class:"v-toolbar__append"},[(P=t.append)==null?void 0:P.call(t)])])]}}),a(D,{defaults:{VTabs:{height:I(g.value)}}},{default:()=>[a(fe,null,{default:()=>[c.value&&a("div",{class:"v-toolbar__extension",style:{height:I(g.value)}},[n])]})]})]})}),{contentHeight:b,extensionHeight:g}}}),De=B({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll");function Me(e){let f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{canScroll:t}=f;let u=0;const r=q(null),o=x(0),v=x(0),m=x(0),_=x(!1),h=x(!1),c=i(()=>Number(e.scrollThreshold)),b=i(()=>he((c.value-o.value)/c.value||0)),g=()=>{const s=r.value;!s||t&&!t.value||(u=o.value,o.value="window"in s?s.pageYOffset:s.scrollTop,h.value=o.value<u,m.value=Math.abs(o.value-c.value))};return U(h,()=>{v.value=v.value||o.value}),U(_,()=>{v.value=0}),be(()=>{U(()=>e.scrollTarget,s=>{var V;const k=s?document.querySelector(s):window;k&&k!==r.value&&((V=r.value)==null||V.removeEventListener("scroll",g),r.value=k,r.value.addEventListener("scroll",g,{passive:!0}))},{immediate:!0})}),ye(()=>{var s;(s=r.value)==null||s.removeEventListener("scroll",g)}),t&&U(t,g,{immediate:!0}),{scrollThreshold:c,currentScroll:o,currentThreshold:m,isScrollActive:_,scrollRatio:b,isScrollingUp:h,savedScroll:v}}const $e=B({scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...ve(),...ie(),...De(),height:{type:[Number,String],default:64}},"VAppBar"),Oe=E()({name:"VAppBar",props:$e(),emits:{"update:modelValue":e=>!0},setup(e,f){let{slots:t}=f;const u=q(),r=_e(e,"modelValue"),o=i(()=>{var p;const d=new Set(((p=e.scrollBehavior)==null?void 0:p.split(" "))??[]);return{hide:d.has("hide"),inverted:d.has("inverted"),collapse:d.has("collapse"),elevate:d.has("elevate"),fadeImage:d.has("fade-image")}}),v=i(()=>{const d=o.value;return d.hide||d.inverted||d.collapse||d.elevate||d.fadeImage||!r.value}),{currentScroll:m,scrollThreshold:_,isScrollingUp:h,scrollRatio:c}=Me(e,{canScroll:v}),b=i(()=>e.collapse||o.value.collapse&&(o.value.inverted?c.value>0:c.value===0)),g=i(()=>e.flat||o.value.elevate&&(o.value.inverted?m.value>0:m.value===0)),s=i(()=>o.value.fadeImage?o.value.inverted?1-c.value:c.value:void 0),k=i(()=>{var C,P;if(o.value.hide&&o.value.inverted)return 0;const d=((C=u.value)==null?void 0:C.contentHeight)??0,p=((P=u.value)==null?void 0:P.extensionHeight)??0;return d+p});ke(i(()=>!!e.scrollBehavior),()=>{xe(()=>{o.value.hide?o.value.inverted?r.value=m.value>_.value:r.value=h.value||m.value<_.value:r.value=!0})});const{ssrBootStyles:V}=Ve(),{layoutItemStyles:n}=ce({id:e.name,order:i(()=>parseInt(e.order,10)),position:F(e,"location"),layoutSize:k,elementSize:x(void 0),active:r,absolute:F(e,"absolute")});return H(()=>{const[d]=X.filterProps(e);return a(X,de({ref:u,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"},e.class],style:[{...n.value,"--v-toolbar-image-opacity":s.value,height:void 0,...V.value},e.style]},d,{collapse:b.value,flat:g.value}),t)}),{}}}),We=B({...pe({icon:"$menu",variant:"text"})},"VAppBarNavIcon"),je=E()({name:"VAppBarNavIcon",props:We(),setup(e,f){let{slots:t}=f;return H(()=>a(T,de(e,{class:["v-app-bar-nav-icon"]}),t)),{}}});const qe=B({app:Boolean,color:String,height:{type:[Number,String],default:"auto"},...Z(),...W(),...ee(),...ie(),...te(),...j({tag:"footer"}),...ae()},"VFooter"),Ye=E()({name:"VFooter",props:qe(),setup(e,f){let{slots:t}=f;const{themeClasses:u}=re(e),{backgroundColorClasses:r,backgroundColorStyles:o}=oe(F(e,"color")),{borderClasses:v}=le(e),{elevationClasses:m}=se(e),{roundedClasses:_}=ne(e),h=x(32),{resizeRef:c}=Se(s=>{s.length&&(h.value=s[0].target.clientHeight)}),b=i(()=>e.height==="auto"?h.value:parseInt(e.height,10)),{layoutItemStyles:g}=ce({id:e.name,order:i(()=>parseInt(e.order,10)),position:i(()=>"bottom"),layoutSize:b,elementSize:i(()=>e.height==="auto"?void 0:b.value),active:i(()=>e.app),absolute:F(e,"absolute")});return H(()=>a(e.tag,{ref:c,class:["v-footer",u.value,r.value,v.value,m.value,_.value,e.class],style:[o.value,e.app?g.value:{height:I(e.height)},e.style]},t)),{}}}),Ge=""+new URL("logosake2-2ecbba6e.png",import.meta.url).href,Je=""+new URL("sakelogo-9d98154d.png",import.meta.url).href,Ke=z("h4",null,"FOLLOW US",-1),Qe={href:"https://www.facebook.com/1SakeMomo/?locale=zh_TW",target:"_blank"},Xe={href:"https://www.instagram.com/sakemomobistro/",target:"_blank"},Ze=z("img",{src:Je},null,-1),ot={__name:"FrontLayout",setup(e){const f=we(),t=Te(),{isLogin:u,isAdmin:r}=Be(t),{mobile:o}=Ce(),v=i(()=>o.value),m=q(!1),_=[{to:"/aboutus",text:"關於我們"},{to:"/menu",text:"菜單"},{to:"/contact",text:"聯絡我們"}],h=i(()=>[{to:"/register",text:"註冊",icon:"mdi-account-plus",show:!u.value},{to:"/login",text:"登入",icon:"mdi-login",show:!u.value},{to:"/reservation",text:"訂位",icon:"mdi-calendar-check",show:u.value},{to:"/userCenter",text:"會員中心",icon:"mdi-account",show:u.value},{to:"/admin",text:"管理",icon:"mdi-cog",show:u.value&&r.value}]),c=async()=>{try{await Re.delete("/users/logout"),t.logout(),f({text:"登出成功",showCloseButton:!1,snackbarProps:{timeout:2e3,color:"green",location:"bottom"}})}catch(g){f({text:g.response.data.message,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}};function b(){window.scrollTo({top:0,behavior:"smooth"})}return(g,s)=>{const k=Y("router-view"),V=Y("router-link");return y(),S(Pe,null,{default:l(()=>[a(Oe,{color:"#863436"},{default:l(()=>[a(Ae,{class:"d-flex align-center"},{default:l(()=>[a(T,{to:"/",active:!1},{default:l(()=>[a(ue,{src:Ge,width:45,class:"barlogo"})]),_:1}),a(G),(y(),N(L,null,M(_,n=>a(T,{key:n.to,to:n.to},{default:l(()=>[R($(n.text),1)]),_:2},1032,["to"])),64)),a(G),v.value?(y(),S(je,{key:0,onClick:s[0]||(s[0]=n=>m.value=!0)})):w("",!0),v.value?w("",!0):(y(!0),N(L,{key:1},M(h.value,n=>(y(),N(L,{key:n.to},[n.show?(y(),S(T,{key:0,variant:"text","prepend-icon":n.icon,to:n.to},{default:l(()=>[R($(n.text),1)]),_:2},1032,["prepend-icon","to"])):w("",!0)],64))),128)),!v.value&&J(u)?(y(),S(T,{key:2,variant:"text","prepend-icon":"mdi-logout",onClick:c},{default:l(()=>[R("登出")]),_:1})):w("",!0)]),_:1})]),_:1}),v.value?(y(),S(Fe,{key:0,modelValue:m.value,"onUpdate:modelValue":s[1]||(s[1]=n=>m.value=n),location:"right",temporary:""},{default:l(()=>[a(Ne,{nav:""},{default:l(()=>[(y(!0),N(L,null,M(h.value,n=>(y(),N(L,{key:n.to},[n.show?(y(),S(K,{key:0,to:n.to},{prepend:l(()=>[a(A,{icon:n.icon},null,8,["icon"])]),default:l(()=>[a(Q,null,{default:l(()=>[R($(n.text),1)]),_:2},1024)]),_:2},1032,["to"])):w("",!0)],64))),128)),J(u)?(y(),S(K,{key:0,onClick:c},{prepend:l(()=>[a(A,{icon:"mdi-logout"})]),default:l(()=>[a(Q,null,{default:l(()=>[R("登出")]),_:1})]),_:1})):w("",!0)]),_:1})]),_:1},8,["modelValue"])):w("",!0),a(Ee,null,{default:l(()=>[a(Le,{name:"fade",mode:"out-in"},{default:l(()=>[a(k)]),_:1})]),_:1}),a(Ye,{fixed:"",class:"SakeFooter",style:{"background-color":"#863436"}},{default:l(()=>[a(Ie,{class:"justify-space-between"},{default:l(()=>[a(O,{class:"footerFollow"},{default:l(()=>[Ke,z("a",Qe,[a(A,{icon:"mdi-facebook"})]),z("a",Xe,[a(A,{icon:"mdi-instagram"})])]),_:1}),a(O,null,{default:l(()=>[a(V,{to:"/"},{default:l(()=>[Ze]),_:1})]),_:1}),a(O,null,{default:l(()=>[a(T,{variant:"text",fab:"",bottom:"",right:"",onClick:b},{default:l(()=>[a(A,{icon:"mdi-arrow-up-drop-circle-outline"})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}};export{ot as default};
