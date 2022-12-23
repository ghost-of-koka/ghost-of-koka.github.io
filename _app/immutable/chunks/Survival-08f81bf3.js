import{S as $,i as x,s as ee,N as te,k as B,l as E,m as D,h as m,n as v,b as I,G as z,O as ae,P as re,Q as ie,f as T,t as j,a4 as Ue,C as J,J as le,K as Ne,q as N,a as A,D as pe,r as L,c as C,E as he,U as y,u as Q,e as W,g as G,d as X,I as de,a3 as Ge,a8 as Xe,w as V,x as F,y as R,a9 as me,$ as be,X as Ye,H as Je,M as Qe,z as K,T as Le,aa as ge,B as Z,a5 as oe,p as ve,_ as Ze,a1 as $e,a2 as xe,ab as Me,ac as ze}from"./index-2f1ba19b.js";import{s as se,m as ne}from"./maps-4facc6d6.js";import{c as fe,F as ue}from"./Indicator.svelte_svelte_type_style_lang-ede3358b.js";function el(a){let e,s,l,t,r,i;return{c(){e=B("span"),s=N(a[0]),l=A(),t=pe("svg"),r=pe("path"),this.h()},l(f){e=E(f,"SPAN",{class:!0});var n=D(e);s=L(n,a[0]),n.forEach(m),l=C(f),t=he(f,"svg",{class:!0,fill:!0,viewBox:!0,xmlns:!0});var h=D(t);r=he(h,"path",{"fill-rule":!0,d:!0,"clip-rule":!0}),D(r).forEach(m),h.forEach(m),this.h()},h(){v(e,"class","sr-only"),v(r,"fill-rule","evenodd"),v(r,"d","M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"),v(r,"clip-rule","evenodd"),v(t,"class",i=a[3][a[1]]),v(t,"fill","currentColor"),v(t,"viewBox","0 0 20 20"),v(t,"xmlns","http://www.w3.org/2000/svg")},m(f,n){I(f,e,n),y(e,s),I(f,l,n),I(f,t,n),y(t,r)},p(f,n){n&1&&Q(s,f[0]),n&2&&i!==(i=f[3][f[1]])&&v(t,"class",i)},d(f){f&&m(e),f&&m(l),f&&m(t)}}}function ll(a){let e,s,l,t;const r=a[6].default,i=te(r,a,a[5],null),f=i||el(a);return{c(){e=B("button"),f&&f.c(),this.h()},l(n){e=E(n,"BUTTON",{type:!0,class:!0,"aria-label":!0});var h=D(e);f&&f.l(h),h.forEach(m),this.h()},h(){v(e,"type","button"),v(e,"class",a[2]),v(e,"aria-label","Close")},m(n,h){I(n,e,h),f&&f.m(e,null),s=!0,l||(t=z(e,"click",a[7]),l=!0)},p(n,[h]){i?i.p&&(!s||h&32)&&ae(i,r,n,n[5],s?ie(r,n[5],h,null):re(n[5]),null):f&&f.p&&(!s||h&3)&&f.p(n,s?h:-1),(!s||h&4)&&v(e,"class",n[2])},i(n){s||(T(f,n),s=!0)},o(n){j(f,n),s=!1},d(n){n&&m(e),f&&f.d(n),l=!1,t()}}}function sl(a,e,s){let{$$slots:l={},$$scope:t}=e;const r=Ue("background");let{color:i="default"}=e,{name:f="Close"}=e,{size:n="md"}=e;const h={dark:"hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600",gray:"focus:ring-gray-400 hover:bg-gray-200 dark:hover:bg-gray-300",red:"focus:ring-red-400 hover:bg-red-200 dark:hover:bg-red-300",yellow:"focus:ring-yellow-400 hover:bg-yellow-200 dark:hover:bg-yellow-300",green:"focus:ring-green-400 hover:bg-green-200 dark:hover:bg-green-300",indigo:"focus:ring-indigo-400 hover:bg-indigo-200 dark:hover:bg-indigo-300",purple:"focus:ring-purple-400 hover:bg-purple-200 dark:hover:bg-purple-300",pink:"focus:ring-pink-400 hover:bg-pink-200 dark:hover:bg-pink-300",blue:"focus:ring-blue-400 hover:bg-blue-200 dark:hover:bg-blue-300",default:"focus:ring-gray-300 "},c={xs:"m-0.5 rounded focus:ring-1 p-0.5",sm:"m-0.5 rounded focus:ring-1 p-0.5",md:"rounded-lg focus:ring-2 p-1.5"};let p="";const _={xs:"w-3 h-3",sm:"w-3.5 h-3.5",md:"w-5 h-5"};function d(u){Ne.call(this,a,u)}return a.$$set=u=>{s(11,e=J(J({},e),le(u))),"color"in u&&s(4,i=u.color),"name"in u&&s(0,f=u.name),"size"in u&&s(1,n=u.size),"$$scope"in u&&s(5,t=u.$$scope)},a.$$.update=()=>{s(2,p=fe("ml-auto focus:outline-none whitespace-normal",c[n],h[i],i==="default"&&(r?"hover:bg-gray-100 dark:hover:bg-gray-600":"hover:bg-gray-100 dark:hover:bg-gray-700"),e.class))},e=le(e),[f,n,p,_,i,t,l,d]}class We extends ${constructor(e){super(),x(this,e,sl,ll,ee,{color:4,name:0,size:1})}}const tl=`
  a[href], area[href], input:not([disabled]):not([tabindex='-1']),
  button:not([disabled]):not([tabindex='-1']),select:not([disabled]):not([tabindex='-1']),
  textarea:not([disabled]):not([tabindex='-1']),
  iframe, object, embed, *[tabindex]:not([tabindex='-1']):not([disabled]), *[contenteditable=true]
`;function al(a){const e=Array.from(a.querySelectorAll(tl));function s(l){if(!(l.key==="Tab"||l.keyCode===9))return;let r=e.indexOf(document.activeElement);r===-1&&l.shiftKey&&(r=0),r+=e.length+(l.shiftKey?-1:1),r%=e.length,e[r].focus(),l.preventDefault()}return document.addEventListener("keydown",s,!0),{destroy(){document.removeEventListener("keydown",s,!0)}}}const rl=a=>({}),_e=a=>({}),il=a=>({}),ke=a=>({});function we(a){let e,s,l,t,r,i,f;const n=[{rounded:!0},{shadow:!0},a[13],{class:a[6]}];let h={$$slots:{default:[pl]},$$scope:{ctx:a}};for(let c=0;c<n.length;c+=1)h=J(h,n[c]);return l=new ue({props:h}),{c(){e=B("div"),s=B("div"),V(l.$$.fragment),this.h()},l(c){e=E(c,"DIV",{tabindex:!0,class:!0,"aria-modal":!0,role:!0});var p=D(e);s=E(p,"DIV",{class:!0});var _=D(s);F(l.$$.fragment,_),_.forEach(m),p.forEach(m),this.h()},h(){v(s,"class",t="flex p-4 w-full "+a[8][a[2]]+" h-full md:h-auto max-h-screen"),v(e,"tabindex","-1"),v(e,"class",a[5]),v(e,"aria-modal","true"),v(e,"role","dialog")},m(c,p){I(c,e,p),y(e,s),R(l,s,null),r=!0,i||(f=[z(e,"keydown",me(a[12])),z(e,"wheel",me(a[18])),be(a[7].call(null,e)),be(al.call(null,e)),z(e,"click",function(){Ye(a[3]?a[9]:null)&&(a[3]?a[9]:null).apply(this,arguments)})],i=!0)},p(c,p){a=c;const _=p&8256?Je(n,[n[0],n[1],p&8192&&Qe(a[13]),p&64&&{class:a[6]}]):{};p&548882&&(_.$$scope={dirty:p,ctx:a}),l.$set(_),(!r||p&4&&t!==(t="flex p-4 w-full "+a[8][a[2]]+" h-full md:h-auto max-h-screen"))&&v(s,"class",t),(!r||p&32)&&v(e,"class",a[5])},i(c){r||(T(l.$$.fragment,c),r=!0)},o(c){j(l.$$.fragment,c),r=!1},d(c){c&&m(e),K(l),i=!1,Le(f)}}}function nl(a){let e,s;return e=new We({props:{name:"Close modal",class:"absolute top-3 right-2.5",color:a[13].color}}),e.$on("click",a[10]),{c(){V(e.$$.fragment)},l(l){F(e.$$.fragment,l)},m(l,t){R(e,l,t),s=!0},p(l,t){const r={};t&8192&&(r.color=l[13].color),e.$set(r)},i(l){s||(T(e.$$.fragment,l),s=!0)},o(l){j(e.$$.fragment,l),s=!1},d(l){K(e,l)}}}function fl(a){let e,s;return e=new ue({props:{color:a[13].color,class:"flex justify-between items-center p-4 rounded-t border-b",$$slots:{default:[ul]},$$scope:{ctx:a}}}),{c(){V(e.$$.fragment)},l(l){F(e.$$.fragment,l)},m(l,t){R(e,l,t),s=!0},p(l,t){const r={};t&8192&&(r.color=l[13].color),t&532498&&(r.$$scope={dirty:t,ctx:l}),e.$set(r)},i(l){s||(T(e.$$.fragment,l),s=!0)},o(l){j(e.$$.fragment,l),s=!1},d(l){K(e,l)}}}function ol(a){let e,s,l;return{c(){e=B("h3"),s=N(a[1]),this.h()},l(t){e=E(t,"H3",{class:!0});var r=D(e);s=L(r,a[1]),r.forEach(m),this.h()},h(){v(e,"class",l="text-xl font-semibold "+(a[13].color?"":"text-gray-900 dark:text-white")+" p-0")},m(t,r){I(t,e,r),y(e,s)},p(t,r){r&2&&Q(s,t[1]),r&8192&&l!==(l="text-xl font-semibold "+(t[13].color?"":"text-gray-900 dark:text-white")+" p-0")&&v(e,"class",l)},d(t){t&&m(e)}}}function Se(a){let e,s;return e=new We({props:{name:"Close modal",color:a[13].color}}),e.$on("click",a[10]),{c(){V(e.$$.fragment)},l(l){F(e.$$.fragment,l)},m(l,t){R(e,l,t),s=!0},p(l,t){const r={};t&8192&&(r.color=l[13].color),e.$set(r)},i(l){s||(T(e.$$.fragment,l),s=!0)},o(l){j(e.$$.fragment,l),s=!1},d(l){K(e,l)}}}function ul(a){let e,s,l;const t=a[17].header,r=te(t,a,a[19],ke),i=r||ol(a);let f=!a[4]&&Se(a);return{c(){i&&i.c(),e=A(),f&&f.c(),s=W()},l(n){i&&i.l(n),e=C(n),f&&f.l(n),s=W()},m(n,h){i&&i.m(n,h),I(n,e,h),f&&f.m(n,h),I(n,s,h),l=!0},p(n,h){r?r.p&&(!l||h&524288)&&ae(r,t,n,n[19],l?ie(t,n[19],h,il):re(n[19]),ke):i&&i.p&&(!l||h&8194)&&i.p(n,l?h:-1),n[4]?f&&(G(),j(f,1,1,()=>{f=null}),X()):f?(f.p(n,h),h&16&&T(f,1)):(f=Se(n),f.c(),T(f,1),f.m(s.parentNode,s))},i(n){l||(T(i,n),T(f),l=!0)},o(n){j(i,n),j(f),l=!1},d(n){i&&i.d(n),n&&m(e),f&&f.d(n),n&&m(s)}}}function ye(a){let e,s;return e=new ue({props:{color:a[13].color,class:"flex items-center p-6 space-x-2 rounded-b border-t",$$slots:{default:[cl]},$$scope:{ctx:a}}}),{c(){V(e.$$.fragment)},l(l){F(e.$$.fragment,l)},m(l,t){R(e,l,t),s=!0},p(l,t){const r={};t&8192&&(r.color=l[13].color),t&524288&&(r.$$scope={dirty:t,ctx:l}),e.$set(r)},i(l){s||(T(e.$$.fragment,l),s=!0)},o(l){j(e.$$.fragment,l),s=!1},d(l){K(e,l)}}}function cl(a){let e;const s=a[17].footer,l=te(s,a,a[19],_e);return{c(){l&&l.c()},l(t){l&&l.l(t)},m(t,r){l&&l.m(t,r),e=!0},p(t,r){l&&l.p&&(!e||r&524288)&&ae(l,s,t,t[19],e?ie(s,t[19],r,rl):re(t[19]),_e)},i(t){e||(T(l,t),e=!0)},o(t){j(l,t),e=!1},d(t){l&&l.d(t)}}}function pl(a){let e,s,l,t,r,i,f,n,h;const c=[fl,nl],p=[];function _(o,w){return o[14].header||o[1]?0:o[4]?-1:1}~(e=_(a))&&(s=p[e]=c[e](a));const d=a[17].default,u=te(d,a,a[19],null);let g=a[14].footer&&ye(a);return{c(){s&&s.c(),l=A(),t=B("div"),u&&u.c(),r=A(),g&&g.c(),i=W(),this.h()},l(o){s&&s.l(o),l=C(o),t=E(o,"DIV",{id:!0,class:!0});var w=D(t);u&&u.l(w),w.forEach(m),r=C(o),g&&g.l(o),i=W(),this.h()},h(){v(t,"id","modal"),v(t,"class","p-6 space-y-6 flex-1 overflow-y-auto overscroll-contain")},m(o,w){~e&&p[e].m(o,w),I(o,l,w),I(o,t,w),u&&u.m(t,null),I(o,r,w),g&&g.m(o,w),I(o,i,w),f=!0,n||(h=[z(t,"keydown",ge(a[12])),z(t,"wheel",ge(a[11]))],n=!0)},p(o,w){let P=e;e=_(o),e===P?~e&&p[e].p(o,w):(s&&(G(),j(p[P],1,1,()=>{p[P]=null}),X()),~e?(s=p[e],s?s.p(o,w):(s=p[e]=c[e](o),s.c()),T(s,1),s.m(l.parentNode,l)):s=null),u&&u.p&&(!f||w&524288)&&ae(u,d,o,o[19],f?ie(d,o[19],w,null):re(o[19]),null),o[14].footer?g?(g.p(o,w),w&16384&&T(g,1)):(g=ye(o),g.c(),T(g,1),g.m(i.parentNode,i)):g&&(G(),j(g,1,1,()=>{g=null}),X())},i(o){f||(T(s),T(u,o),T(g),f=!0)},o(o){j(s),j(u,o),j(g),f=!1},d(o){~e&&p[e].d(o),o&&m(l),o&&m(t),u&&u.d(o),o&&m(r),g&&g.d(o),o&&m(i),n=!1,Le(h)}}}function hl(a){let e,s,l=a[0]&&we(a);return{c(){l&&l.c(),e=W()},l(t){l&&l.l(t),e=W()},m(t,r){l&&l.m(t,r),I(t,e,r),s=!0},p(t,[r]){t[0]?l?(l.p(t,r),r&1&&T(l,1)):(l=we(t),l.c(),T(l,1),l.m(e.parentNode,e)):l&&(G(),j(l,1,1,()=>{l=null}),X())},i(t){s||(T(l),s=!0)},o(t){j(l),s=!1},d(t){l&&l.d(t),t&&m(e)}}}function dl(a,e,s){const l=["open","title","size","placement","autoclose","permanent","backdropClasses"];let t=de(e,l),{$$slots:r={},$$scope:i}=e;const f=Ge(r);let{open:n=!1}=e,{title:h=""}=e,{size:c="md"}=e,{placement:p="center"}=e,{autoclose:_=!1}=e,{permanent:d=!1}=e,{backdropClasses:u="bg-gray-900 bg-opacity-50 dark:bg-opacity-80"}=e;const g=Xe();function o(S){const q=document.createTreeWalker(S,NodeFilter.SHOW_ELEMENT);let Y;for(;Y=q.nextNode();)if(Y instanceof HTMLElement){const ce=Y,[Ke,qe]=U(ce);(Ke||qe)&&(ce.tabIndex=0)}S.focus()}const w=()=>{switch(p){case"top-left":return["justify-start","items-start"];case"top-center":return["justify-center","items-start"];case"top-right":return["justify-end","items-start"];case"center-left":return["justify-start","items-center"];case"center":return["justify-center","items-center"];case"center-right":return["justify-end","items-center"];case"bottom-left":return["justify-start","items-end"];case"bottom-center":return["justify-center","items-end"];case"bottom-right":return["justify-end","items-end"];default:return["justify-center","items-center"]}},P={xs:"max-w-md",sm:"max-w-lg",md:"max-w-2xl",lg:"max-w-4xl",xl:"max-w-7xl"},b=S=>{const q=S.target;_&&(q==null?void 0:q.tagName)==="BUTTON"&&s(0,n=!1)},k=()=>{s(0,n=!1)};let O,M;const U=S=>[S.scrollWidth>S.clientWidth&&["scroll","auto"].indexOf(getComputedStyle(S).overflowX)>=0,S.scrollHeight>S.clientHeight&&["scroll","auto"].indexOf(getComputedStyle(S).overflowY)>=0];function Ve(S){const[q,Y]=U(this);return q||Y||S.preventDefault()}function Fe(S){if(S.key==="Escape"&&!d)return k()}function Re(S){Ne.call(this,a,S)}return a.$$set=S=>{s(23,e=J(J({},e),le(S))),s(13,t=de(e,l)),"open"in S&&s(0,n=S.open),"title"in S&&s(1,h=S.title),"size"in S&&s(2,c=S.size),"placement"in S&&s(15,p=S.placement),"autoclose"in S&&s(3,_=S.autoclose),"permanent"in S&&s(4,d=S.permanent),"backdropClasses"in S&&s(16,u=S.backdropClasses),"$$scope"in S&&s(19,i=S.$$scope)},a.$$.update=()=>{a.$$.dirty&1&&g(n?"open":"hide"),a.$$.dirty&65536&&s(5,O=fe("flex overflow-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full",u,...w())),s(6,M=fe("relative flex flex-col w-full h-full md:h-auto",e.class))},e=le(e),[n,h,c,_,d,O,M,o,P,b,k,Ve,Fe,t,f,p,u,r,Re,i]}class ml extends ${constructor(e){super(),x(this,e,dl,hl,ee,{open:0,title:1,size:2,placement:15,autoclose:3,permanent:4,backdropClasses:16})}}const bl=[["Barracks Middle","Stable","Dojo Deep"],["Barracks Right","Dojo Deep","Stable"],["Barracks Right","Dojo Deep","Stable"],["Stable","Dojo Middle","Stable"],["Stable","Stable","Barracks Middle"],["Stable","Stable","Dojo Left"],["Barracks Middle","Dojo ","Stable"],["Barracks Left","Dojo Left","Stable"],["Stable","Barracks Middle","Stable"],["Stable","Stable","Barracks Left"],["Stable","Dojo Middle","Stable"],["Barracks Middle","Dojo Right","Stable"],["Dojo Deep","Barracks Left","Barracks Middle"],["Stable","Barracks Left","Dojo Deep"],["Dojo Left","Barracks Middle","Stable"]],gl={hp:4,oni:!1,purple:!1,invisible:!1,teleporter:!1,archer:!0,tengu:!1,disciple:!1,notes:"Or 5 HP for rapid fire archer"},vl={hp:10,oni:!1,purple:!1,invisible:!1,teleporter:!1,archer:!1,tengu:!1,disciple:!1},_l={hp:9,oni:!1,purple:!1,invisible:!1,teleporter:!1,archer:!1,tengu:!1,disciple:!1,notes:"Not sure what this is"},kl={hp:17,oni:!0,purple:!1,invisible:!1,teleporter:!1,archer:!1,tengu:!1,disciple:!1,notes:"Probably the same as an Oni Defender"},wl={hp:8,oni:!0,purple:!1,invisible:!1,teleporter:!1,archer:!1,tengu:!1,disciple:!0},Sl={hp:8,oni:!1,purple:!1,invisible:!1,teleporter:!1,archer:!1,tengu:!1,disciple:!1,notes:"Are these all the same"},yl={hp:5,oni:!1,purple:!1,invisible:!1,teleporter:!1,archer:!1,tengu:!1,disciple:!1},Dl={hp:5,oni:!1,purple:!1,invisible:!1,teleporter:!1,archer:!1,tengu:!1,disciple:!1},Bl={hp:5,oni:!1,purple:!1,invisible:!1,teleporter:!1,archer:!1,tengu:!1,disciple:!1},El={hp:15,oni:!0,purple:!1,invisible:!1,teleporter:!1,archer:!1,tengu:!0,disciple:!1},Il={hp:14,oni:!1,purple:!1,invisible:!1,teleporter:!1,archer:!1,tengu:!1,disciple:!1},H={"Advanced Spearman (blue)":{hp:7,oni:!1,purple:!1,invisible:!1,teleporter:!1,archer:!1,tengu:!1,disciple:!1},Archer:gl,"Archer (elite)":{hp:6,oni:!1,purple:!1,invisible:!1,teleporter:!1,archer:!0,tengu:!1,disciple:!1,notes:"Or 7 HP for poison archer"},"Axe Brute":{hp:10,oni:!1,purple:!1,invisible:!1,teleporter:!1,archer:!1,tengu:!1,disciple:!1},"Axe Brute (helmet)":{hp:10,oni:!1,purple:!1,invisible:!1,teleporter:!1,archer:!1,tengu:!1,disciple:!1},Bear:vl,"Black Powder Bomber":{hp:6,oni:!1,purple:!1,invisible:!1,teleporter:!1,archer:!1,tengu:!1,disciple:!1},Commander:_l,Defender:kl,Disciple:wl,"Dual Swordsman":{hp:5,oni:!1,purple:!1,invisible:!1,teleporter:!1,archer:!1,tengu:!1,disciple:!1},"Dual Swordsman (elite)":{hp:8,oni:!1,purple:!1,invisible:!1,teleporter:!1,archer:!1,tengu:!1,disciple:!1},"Dual Swordsman (helmet)":{hp:14,oni:!1,purple:!1,invisible:!1,teleporter:!1,archer:!1,tengu:!1,disciple:!1,notes:"Is this the commander variant"},"Eagle Shaman":{hp:7,oni:!1,purple:!1,invisible:!1,teleporter:!1,archer:!1,tengu:!1,disciple:!1},"Eagle Triple Weapon":{hp:16,oni:!1,purple:!1,invisible:!1,teleporter:!1,archer:!1,tengu:!1,disciple:!1},"Eagle Twinblade":{hp:14,oni:!1,purple:!1,invisible:!1,teleporter:!1,archer:!1,tengu:!1,disciple:!1},"Eagle Twinblade (helmet)":{hp:14,oni:!1,purple:!1,invisible:!1,teleporter:!1,archer:!1,tengu:!1,disciple:!1},"Elite Commander":{hp:14,oni:!1,purple:!1,invisible:!1,teleporter:!1,archer:!1,tengu:!1,disciple:!1,notes:"Not sure what this is"},"Fire Archer":{hp:6,oni:!1,purple:!1,invisible:!1,teleporter:!1,archer:!0,tengu:!1,disciple:!1,notes:"Is this elite"},"Fire Archer (elite)":{hp:6,oni:!1,purple:!1,invisible:!1,teleporter:!1,archer:!0,tengu:!1,disciple:!1},"Flash Bomber":{hp:5,oni:!1,purple:!1,invisible:!1,teleporter:!1,archer:!1,tengu:!1,disciple:!1},"Golden Commander":{hp:28,oni:!1,purple:!1,invisible:!1,teleporter:!1,archer:!1,tengu:!1,disciple:!1},"Heavy Swordsman":{hp:7,oni:!1,purple:!1,invisible:!1,teleporter:!1,archer:!1,tengu:!1,disciple:!1,notes:"Is this blue variant"},"Heavy Swordsman (blue)":{hp:7,oni:!1,purple:!1,invisible:!1,teleporter:!1,archer:!1,tengu:!1,disciple:!1},"Heavy Swordsman (commander)":{hp:16,oni:!1,purple:!1,invisible:!1,teleporter:!1,archer:!1,tengu:!1,disciple:!1},"Heavy Swordsman (elite)":{hp:9,oni:!1,purple:!1,invisible:!1,teleporter:!1,archer:!1,tengu:!1,disciple:!1},"Heavy Swordsman (elite-helmet)":{hp:9,oni:!1,purple:!1,invisible:!1,teleporter:!1,archer:!1,tengu:!1,disciple:!1},"Heavy Swordsman (nine hp bar)":{hp:9,oni:!1,purple:!1,invisible:!1,teleporter:!1,archer:!1,tengu:!1,disciple:!1},"Invisible Axe Brute":{hp:10,oni:!1,purple:!1,invisible:!0,teleporter:!1,archer:!1,tengu:!1,disciple:!1},"Invisible Black Powder Bomber":{hp:6,oni:!1,purple:!1,invisible:!0,teleporter:!1,archer:!1,tengu:!1,disciple:!1},"Invisible Commander":{hp:14,oni:!1,purple:!1,invisible:!0,teleporter:!1,archer:!1,tengu:!1,disciple:!1,notes:"Not sure what this is"},"Invisible Eagle Twinblade":{hp:14,oni:!1,purple:!1,invisible:!0,teleporter:!1,archer:!1,tengu:!1,disciple:!1,notes:"Is this a brute"},"Invisible Flash Bomber":{hp:5,oni:!1,purple:!1,invisible:!0,teleporter:!1,archer:!1,tengu:!1,disciple:!1},"Invisible Heavy Swordsman":{hp:7,oni:!1,purple:!1,invisible:!0,teleporter:!1,archer:!1,tengu:!1,disciple:!1},"Invisible Heavy Swordsman (elite)":{hp:9,oni:!1,purple:!1,invisible:!0,teleporter:!1,archer:!1,tengu:!1,disciple:!1},"Invisible Heavy Swordsman (yellow)":{hp:9,oni:!1,purple:!1,invisible:!0,teleporter:!1,archer:!1,tengu:!1,disciple:!1},"Invisible Oni Defender":{hp:17,oni:!0,purple:!1,invisible:!0,teleporter:!1,archer:!1,tengu:!1,disciple:!1},"Invisible Oni Lord":{hp:34,oni:!0,purple:!1,invisible:!0,teleporter:!1,archer:!1,tengu:!1,disciple:!1},"Invisible Powdergun Brute":{hp:8,oni:!1,purple:!1,invisible:!0,teleporter:!1,archer:!1,tengu:!1,disciple:!1},"Invisible Purple Oni Archer":{hp:21,oni:!0,purple:!0,invisible:!0,teleporter:!1,archer:!0,tengu:!1,disciple:!1},"Invisible Purple Oni Brute":{hp:32,oni:!0,purple:!0,invisible:!0,teleporter:!1,archer:!1,tengu:!1,disciple:!1},"Invisible Purple Oni Brute (helmet)":{hp:32,oni:!0,purple:!0,invisible:!0,teleporter:!1,archer:!1,tengu:!1,disciple:!1},"Invisible Shield Brute":{hp:10,oni:!1,purple:!1,invisible:!0,teleporter:!1,archer:!1,tengu:!1,disciple:!1},"Invisible Shield Brute (elite)":{hp:12,oni:!1,purple:!1,invisible:!0,teleporter:!1,archer:!1,tengu:!1,disciple:!1},"Invisible Shield Brute (elite-helmet)":{hp:12,oni:!1,purple:!1,invisible:!0,teleporter:!1,archer:!1,tengu:!1,disciple:!1},"Invisible Shield Brute (helmet)":{hp:10,oni:!1,purple:!1,invisible:!0,teleporter:!1,archer:!1,tengu:!1,disciple:!1},"Invisible Shieldman (elite)":{hp:8,oni:!1,purple:!1,invisible:!0,teleporter:!1,archer:!1,tengu:!1,disciple:!1},"Invisible Shieldman (elite-helmet)":{hp:8,oni:!1,purple:!1,invisible:!0,teleporter:!1,archer:!1,tengu:!1,disciple:!1},"Invisible Spearman":{hp:5,oni:!1,purple:!1,invisible:!0,teleporter:!1,archer:!1,tengu:!1,disciple:!1},"Invisible Spearman (elite)":{hp:9,oni:!1,purple:!1,invisible:!0,teleporter:!1,archer:!1,tengu:!1,disciple:!1},"Invisible Spearman (elite-helmet)":{hp:9,oni:!1,purple:!1,invisible:!0,teleporter:!1,archer:!1,tengu:!1,disciple:!1},"Invisible Swordsman":{hp:5,oni:!1,purple:!1,invisible:!0,teleporter:!1,archer:!1,tengu:!1,disciple:!1},"Invisible Swordsman (elite)":{hp:8,oni:!1,purple:!1,invisible:!0,teleporter:!1,archer:!1,tengu:!1,disciple:!1},"Invisible Triple Weapon":{hp:16,oni:!1,purple:!1,invisible:!0,teleporter:!1,archer:!1,tengu:!1,disciple:!1},"One-Handed Swordsman":{hp:5,oni:!1,purple:!1,invisible:!1,teleporter:!1,archer:!1,tengu:!1,disciple:!1},"Oni Archer":{hp:12,oni:!0,purple:!1,invisible:!1,teleporter:!0,archer:!0,tengu:!1,disciple:!1},"Oni Brute":{hp:18,oni:!0,purple:!1,invisible:!1,teleporter:!1,archer:!1,tengu:!1,disciple:!1},"Oni Defender":{hp:17,oni:!0,purple:!1,invisible:!1,teleporter:!1,archer:!1,tengu:!1,disciple:!1},"Oni Dog":{hp:5,oni:!0,purple:!1,invisible:!1,teleporter:!1,archer:!1,tengu:!1,disciple:!1},"Oni Lord":{hp:34,oni:!0,purple:!1,invisible:!1,teleporter:!1,archer:!1,tengu:!1,disciple:!1},Powdergun:Sl,"Powdergun Brute":{hp:8,oni:!1,purple:!1,invisible:!1,teleporter:!1,archer:!1,tengu:!1,disciple:!1,notes:"Are these all the same"},"Powdergun Brute (elite)":{hp:8,oni:!1,purple:!1,invisible:!1,teleporter:!1,archer:!1,tengu:!1,disciple:!1,notes:"Are these all the same"},"Powdergun Brute (helmet)":{hp:8,oni:!1,purple:!1,invisible:!1,teleporter:!1,archer:!1,tengu:!1,disciple:!1,notes:"Are these all the same"},"Purple Oni Archer":{hp:21,oni:!0,purple:!0,invisible:!1,teleporter:!0,archer:!0,tengu:!1,disciple:!1},"Purple Oni Brute":{hp:32,oni:!0,purple:!0,invisible:!1,teleporter:!1,archer:!1,tengu:!1,disciple:!1},"Purple Oni Defender":{hp:29,oni:!0,purple:!0,invisible:!1,teleporter:!1,archer:!1,tengu:!1,disciple:!1},"Purple Oni Lord":{hp:44,oni:!0,purple:!0,invisible:!1,teleporter:!1,archer:!1,tengu:!1,disciple:!1},"Shield Brute":{hp:10,oni:!1,purple:!1,invisible:!1,teleporter:!1,archer:!1,tengu:!1,disciple:!1},"Shield Brute (elite)":{hp:12,oni:!1,purple:!1,invisible:!1,teleporter:!1,archer:!1,tengu:!1,disciple:!1},"Shield Brute (elite-nohelmet)":{hp:12,oni:!1,purple:!1,invisible:!1,teleporter:!1,archer:!1,tengu:!1,disciple:!1},"Shield Brute (helmet)":{hp:12,oni:!1,purple:!1,invisible:!1,teleporter:!1,archer:!1,tengu:!1,disciple:!1},Shieldman:yl,"Shieldman (elite)":{hp:8,oni:!1,purple:!1,invisible:!1,teleporter:!1,archer:!1,tengu:!1,disciple:!1},"Shieldman (elite-helmet)":{hp:8,oni:!1,purple:!1,invisible:!1,teleporter:!1,archer:!1,tengu:!1,disciple:!1},"Shieldman (gold)":{hp:22,oni:!1,purple:!1,invisible:!1,teleporter:!1,archer:!1,tengu:!1,disciple:!1,notes:"What is this"},"Shieldman (red)":{hp:5,oni:!1,purple:!1,invisible:!1,teleporter:!1,archer:!1,tengu:!1,disciple:!1},"Shotgun Brute":{hp:8,oni:!1,purple:!1,invisible:!1,teleporter:!1,archer:!1,tengu:!1,disciple:!1,notes:"Is this a powdergun brute"},Spearman:Dl,"Spearman (blue)":{hp:9,oni:!1,purple:!1,invisible:!1,teleporter:!1,archer:!1,tengu:!1,disciple:!1,notes:"Is this an advanceed spearman"},"Spearman (blue-elite)":{hp:9,oni:!1,purple:!1,invisible:!1,teleporter:!1,archer:!1,tengu:!1,disciple:!1,notes:"What is this"},"Spearman (blue-helmet)":{hp:9,oni:!1,purple:!1,invisible:!1,teleporter:!1,archer:!1,tengu:!1,disciple:!1,notes:"What is this"},"Spearman (elite)":{hp:9,oni:!1,purple:!1,invisible:!1,teleporter:!1,archer:!1,tengu:!1,disciple:!1,notes:"What is this"},"Spearman (helmet)":{hp:9,oni:!1,purple:!1,invisible:!1,teleporter:!1,archer:!1,tengu:!1,disciple:!1,notes:"What is this"},Swordsman:Bl,Tengu:El,"Triple Weapon":{hp:16,oni:!1,purple:!1,invisible:!1,teleporter:!1,archer:!1,tengu:!1,disciple:!1},Twinblade:Il};function De(a,e,s){const l=a.slice();return l[3]=e[s][0],l[4]=e[s][1],l}function Be(a,e,s){const l=a.slice();return l[7]=e[s],l}function Ee(a){let e,s,l,t,r;return{c(){e=B("div"),s=B("div"),l=N(" "),r=A(),this.h()},l(i){e=E(i,"DIV",{class:!0});var f=D(e);s=E(f,"DIV",{style:!0,class:!0});var n=D(s);l=L(n," "),n.forEach(m),r=C(f),f.forEach(m),this.h()},h(){ve(s,"width",100*H[a[3]].hp/44+"%"),v(s,"class",t=a[1](a[3])+" h-2 sm:h-3 md:h-4"),v(e,"class","border-0 bg-slate-200 dark:bg-slate-900 text-center align-middle")},m(i,f){I(i,e,f),y(e,s),y(s,l),y(e,r)},p(i,f){f&1&&ve(s,"width",100*H[i[3]].hp/44+"%"),f&1&&t!==(t=i[1](i[3])+" h-2 sm:h-3 md:h-4")&&v(s,"class",t)},d(i){i&&m(e)}}}function Ie(a){let e,s=Array(a[4]),l=[];for(let t=0;t<s.length;t+=1)l[t]=Ee(Be(a,s,t));return{c(){for(let t=0;t<l.length;t+=1)l[t].c();e=W()},l(t){for(let r=0;r<l.length;r+=1)l[r].l(t);e=W()},m(t,r){for(let i=0;i<l.length;i+=1)l[i].m(t,r);I(t,e,r)},p(t,r){if(r&3){s=Array(t[4]);let i;for(i=0;i<s.length;i+=1){const f=Be(t,s,i);l[i]?l[i].p(f,r):(l[i]=Ee(f),l[i].c(),l[i].m(e.parentNode,e))}for(;i<l.length;i+=1)l[i].d(1);l.length=s.length}},d(t){oe(l,t),t&&m(e)}}}function Tl(a){let e,s=Object.entries(a[0]).sort(a[2]),l=[];for(let t=0;t<s.length;t+=1)l[t]=Ie(De(a,s,t));return{c(){e=B("div");for(let t=0;t<l.length;t+=1)l[t].c();this.h()},l(t){e=E(t,"DIV",{class:!0});var r=D(e);for(let i=0;i<l.length;i+=1)l[i].l(r);r.forEach(m),this.h()},h(){v(e,"class","bg-slate-200 dark:bg-slate-900 border-0")},m(t,r){I(t,e,r);for(let i=0;i<l.length;i+=1)l[i].m(e,null)},p(t,[r]){if(r&3){s=Object.entries(t[0]).sort(t[2]);let i;for(i=0;i<s.length;i+=1){const f=De(t,s,i);l[i]?l[i].p(f,r):(l[i]=Ie(f),l[i].c(),l[i].m(e,null))}for(;i<l.length;i+=1)l[i].d(1);l.length=s.length}},i:Z,o:Z,d(t){t&&m(e),oe(l,t)}}}function jl(a,e,s){let{spawns:l=[]}=e;function t(i){return H[i].disciple?"bg-blue-600 dark:bg-blue-700":H[i].tengu?"bg-red-600 dark:bg-red-700":H[i].purple?"bg-purple-800 dark:bg-purple-700":i=="Oni Dog"?"bg-orange-900 dark:bg-orange-900":i=="Bear"?"bg-amber-800 dark:bg-amber-800":H[i].oni?"bg-slate-500 dark:bg-slate-500":"bg-slate-400 dark:bg-slate-600"}const r=([i],[f])=>H[f].hp-H[i].hp;return a.$$set=i=>{"spawns"in i&&s(0,l=i.spawns)},[l,t,r]}class Ol extends ${constructor(e){super(),x(this,e,jl,Tl,ee,{spawns:0})}}function Te(a,e,s){const l=a.slice();return l[3]=e[s][0],l[4]=e[s][1],l}function je(a){let e,s,l=a[3]+"",t,r,i,f=a[4]+"",n,h;return{c(){e=B("tr"),s=B("td"),t=N(l),r=A(),i=B("td"),n=N(f),h=A(),this.h()},l(c){e=E(c,"TR",{class:!0});var p=D(e);s=E(p,"TD",{});var _=D(s);t=L(_,l),_.forEach(m),r=C(p),i=E(p,"TD",{class:!0});var d=D(i);n=L(d,f),d.forEach(m),h=C(p),p.forEach(m),this.h()},h(){v(i,"class","text-right"),v(e,"class","text-sm md:text-base")},m(c,p){I(c,e,p),y(e,s),y(s,t),y(e,r),y(e,i),y(i,n),y(e,h)},p(c,p){p&1&&l!==(l=c[3]+"")&&Q(t,l),p&1&&f!==(f=c[4]+"")&&Q(n,f)},d(c){c&&m(e)}}}function Al(a){let e,s,l,t,r,i,f,n,h,c,p,_=Object.entries(a[0]).sort(a[1]),d=[];for(let u=0;u<_.length;u+=1)d[u]=je(Te(a,_,u));return{c(){e=B("div"),s=B("table"),l=B("thead"),t=B("tr"),r=B("th"),i=N("Enemy"),f=A(),n=B("th"),h=N("Number"),c=A(),p=B("tbody");for(let u=0;u<d.length;u+=1)d[u].c();this.h()},l(u){e=E(u,"DIV",{class:!0});var g=D(e);s=E(g,"TABLE",{class:!0});var o=D(s);l=E(o,"THEAD",{});var w=D(l);t=E(w,"TR",{class:!0});var P=D(t);r=E(P,"TH",{class:!0});var b=D(r);i=L(b,"Enemy"),b.forEach(m),f=C(P),n=E(P,"TH",{class:!0});var k=D(n);h=L(k,"Number"),k.forEach(m),P.forEach(m),w.forEach(m),c=C(o),p=E(o,"TBODY",{});var O=D(p);for(let M=0;M<d.length;M+=1)d[M].l(O);O.forEach(m),o.forEach(m),g.forEach(m),this.h()},h(){v(r,"class","justify-left"),v(n,"class","text-right"),v(t,"class","text-left text-blue-600 dark:text-blue-300 text-sm md:text-base my-8"),v(s,"class","dark:text-white table-auto w-full my-2"),v(e,"class","container mx-auto max-w-screen-md m-1 p-1 py-4")},m(u,g){I(u,e,g),y(e,s),y(s,l),y(l,t),y(t,r),y(r,i),y(t,f),y(t,n),y(n,h),y(s,c),y(s,p);for(let o=0;o<d.length;o+=1)d[o].m(p,null)},p(u,[g]){if(g&1){_=Object.entries(u[0]).sort(u[1]);let o;for(o=0;o<_.length;o+=1){const w=Te(u,_,o);d[o]?d[o].p(w,g):(d[o]=je(w),d[o].c(),d[o].m(p,null))}for(;o<d.length;o+=1)d[o].d(1);d.length=_.length}},i:Z,o:Z,d(u){u&&m(e),oe(d,u)}}}function Cl(a,e,s){let{spawns:l=[]}=e;const t=([r],[i])=>H[i].hp-H[r].hp;return a.$$set=r=>{"spawns"in r&&s(0,l=r.spawns)},[l,t]}class Pl extends ${constructor(e){super(),x(this,e,Cl,Al,ee,{spawns:0})}}function Oe(a,e,s){const l=a.slice();return l[15]=e[s],l[17]=s,l}function Ae(a,e,s){const l=a.slice();return l[15]=e[s],l[19]=s,l}function Hl(a){let e,s;return e=new Pl({props:{spawns:se[a[4]].spawns[a[2]][a[3]]}}),{c(){V(e.$$.fragment)},l(l){F(e.$$.fragment,l)},m(l,t){R(e,l,t),s=!0},p(l,t){const r={};t&28&&(r.spawns=se[l[4]].spawns[l[2]][l[3]]),e.$set(r)},i(l){s||(T(e.$$.fragment,l),s=!0)},o(l){j(e.$$.fragment,l),s=!1},d(l){K(e,l)}}}function Ce(a){let e,s=bl[a[17]][a[19]]+"",l;return{c(){e=B("p"),l=N(s),this.h()},l(t){e=E(t,"P",{class:!0});var r=D(e);l=L(r,s),r.forEach(m),this.h()},h(){v(e,"class","text-center pb-1 sm:pb-2 text-sm md:text-lg dark:text-white")},m(t,r){I(t,e,r),y(e,l)},p:Z,d(t){t&&m(e)}}}function Pe(a,e){let s,l,t,r,i,f,n=e[0]&&Ce(e);t=new Ol({props:{spawns:se[e[4]].spawns[e[17]][e[19]]}});function h(){return e[12](e[17],e[19])}return{key:a,first:null,c(){s=B("div"),n&&n.c(),l=A(),V(t.$$.fragment),this.h()},l(c){s=E(c,"DIV",{class:!0});var p=D(s);n&&n.l(p),l=C(p),F(t.$$.fragment,p),p.forEach(m),this.h()},h(){v(s,"class","dark:bg-slate-900 bg-slate-200 flex-initial w-64 p-1 md:p-2 m-1 md:m-3 rounded-lg drop-shadow-md dark:drop-shadow-md"),this.first=s},m(c,p){I(c,s,p),n&&n.m(s,null),y(s,l),R(t,s,null),r=!0,i||(f=z(s,"click",h),i=!0)},p(c,p){e=c,e[0]?n?n.p(e,p):(n=Ce(e),n.c(),n.m(s,l)):n&&(n.d(1),n=null);const _={};p&16&&(_.spawns=se[e[4]].spawns[e[17]][e[19]]),t.$set(_)},i(c){r||(T(t.$$.fragment,c),r=!0)},o(c){j(t.$$.fragment,c),r=!1},d(c){c&&m(s),n&&n.d(),K(t),i=!1,f()}}}function He(a,e){let s,l,t=e[17]+1+"",r,i,f=[],n=new Map,h,c,p=Array(3);const _=d=>d[19];for(let d=0;d<p.length;d+=1){let u=Ae(e,p,d),g=_(u);n.set(g,f[d]=Pe(g,u))}return{key:a,first:null,c(){s=B("div"),l=B("div"),r=N(t),i=A();for(let d=0;d<f.length;d+=1)f[d].c();h=A(),this.h()},l(d){s=E(d,"DIV",{class:!0});var u=D(s);l=E(u,"DIV",{class:!0});var g=D(l);r=L(g,t),g.forEach(m),i=C(u);for(let o=0;o<f.length;o+=1)f[o].l(u);h=C(u),u.forEach(m),this.h()},h(){v(l,"class","flex-initial w-8 dark:text-white text-center p-1 self-center text-xs md:text-lg"),v(s,"class","flex flex-row justify-center m-2"),this.first=s},m(d,u){I(d,s,u),y(s,l),y(l,r),y(s,i);for(let g=0;g<f.length;g+=1)f[g].m(s,null);y(s,h),c=!0},p(d,u){e=d,u&49&&(p=Array(3),G(),f=Me(f,u,_,1,e,p,n,s,ze,Pe,h,Ae),X())},i(d){if(!c){for(let u=0;u<p.length;u+=1)T(f[u]);c=!0}},o(d){for(let u=0;u<f.length;u+=1)j(f[u]);c=!1},d(d){d&&m(s);for(let u=0;u<f.length;u+=1)f[u].d()}}}function Nl(a){let e,s=a[7](a[4])+"",l,t,r,i,f,n,h,c=[],p=new Map,_,d,u;function g(b){a[9](b)}let o={title:"Wave "+(a[2]+1)+"-"+(a[3]+1),autoclose:!0,$$slots:{default:[Hl]},$$scope:{ctx:a}};a[1]!==void 0&&(o.open=a[1]),i=new ml({props:o}),Ze.push(()=>$e(i,"open",g,a[1])),i.$on("click",a[10]);let w=Array(15);const P=b=>b[17];for(let b=0;b<w.length;b+=1){let k=Oe(a,w,b),O=P(k);p.set(O,c[b]=He(O,k))}return{c(){e=B("p"),l=N(s),t=A(),r=B("div"),V(i.$$.fragment),n=A(),h=B("div");for(let b=0;b<c.length;b+=1)c[b].c();this.h()},l(b){e=E(b,"P",{class:!0});var k=D(e);l=L(k,s),k.forEach(m),t=C(b),r=E(b,"DIV",{class:!0});var O=D(r);F(i.$$.fragment,O),O.forEach(m),n=C(b),h=E(b,"DIV",{class:!0});var M=D(h);for(let U=0;U<c.length;U+=1)c[U].l(M);M.forEach(m),this.h()},h(){v(e,"class","dark:text-white text-2xl text-center p-2 md:p-4"),v(r,"class","bg-green-500"),v(h,"class","flex flex-col justify-center")},m(b,k){I(b,e,k),y(e,l),I(b,t,k),I(b,r,k),R(i,r,null),I(b,n,k),I(b,h,k);for(let O=0;O<c.length;O+=1)c[O].m(h,null);_=!0,d||(u=z(r,"click",a[11]),d=!0)},p(b,[k]){(!_||k&16)&&s!==(s=b[7](b[4])+"")&&Q(l,s);const O={};k&12&&(O.title="Wave "+(b[2]+1)+"-"+(b[3]+1)),k&1048604&&(O.$$scope={dirty:k,ctx:b}),!f&&k&2&&(f=!0,O.open=b[1],xe(()=>f=!1)),i.$set(O),k&49&&(w=Array(15),G(),c=Me(c,k,P,1,b,w,p,h,ze,He,null,Oe),X())},i(b){if(!_){T(i.$$.fragment,b);for(let k=0;k<w.length;k+=1)T(c[k]);_=!0}},o(b){j(i.$$.fragment,b);for(let k=0;k<c.length;k+=1)j(c[k]);_=!1},d(b){b&&m(e),b&&m(t),b&&m(r),K(i),b&&m(n),b&&m(h);for(let k=0;k<c.length;k+=1)c[k].d();d=!1,u()}}}function Ll(a,e,s){let l,t,{map:r=""}=e,i=!1;function f(o,w){console.log("Open"),s(2,c=o),s(3,p=w),s(1,i=!0)}function n(){console.log("Close"),s(1,i=!1)}function h(o){return o in ne?l?"NMS: "+ne[o].name:ne[o].name:""}let c=0,p=0;function _(o){i=o,s(1,i)}const d=()=>n(),u=()=>n(),g=(o,w)=>f(o,w);return a.$$set=o=>{"map"in o&&s(8,r=o.map)},a.$$.update=()=>{a.$$.dirty&256&&s(0,l=r=="nms"),a.$$.dirty&257&&s(4,t=l?"sow":r)},[l,i,c,p,t,f,n,h,r,_,d,u,g]}class Vl extends ${constructor(e){super(),x(this,e,Ll,Nl,ee,{map:8})}}export{Vl as S};
