import{S as K,i as Q,s as W,e as R,b as I,f as $,t as w,h as p,F as ie,C as se,G as oe,H as Ze,k as y,a as C,l as P,m as E,c as N,R as fe,L as ue,aa as ce,U as v,I as Ve,J as Ye,K as Le,g as H,d as Z,D as Oe,w as z,x as S,y as j,z as B,n as _,B as x,a7 as ne,p as de,q as G,r as T,u as V,ab as je,a9 as Re,ac as Be,P as Ge,a0 as Fe,a3 as Je,a4 as Ue,M as me,N as ge,Z as We,_ as pe}from"./index-95ccc8b9.js";import{s as J,m as le}from"./maps-4facc6d6.js";import{C as Xe,e as D,n as ee,d as Ke,l as L,a as ae,b as O,M as Qe,F as qe}from"./FullEnemySet-b31cac75.js";import{c as xe,T as et,D as Te,a as He}from"./ToolbarButton-4a74d41b.js";import{C as tt}from"./Chevron-95bf2530.js";function he(n){let e,l;return e=new Xe({props:{color:n[0],size:n[1]?"sm":"xs",class:"ml-1.5 -mr-1.5"}}),e.$on("click",n[6]),{c(){z(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,r){j(e,t,r),l=!0},p(t,r){const s={};r&1&&(s.color=t[0]),r&2&&(s.size=t[1]?"sm":"xs"),e.$set(s)},i(t){l||($(e.$$.fragment,t),l=!0)},o(t){w(e.$$.fragment,t),l=!1},d(t){B(e,t)}}}function re(n){let e,l,t;const r=n[12].default,s=Ze(r,n,n[11],null);let a=n[3]&&he(n),i=[{href:n[2]},n[7],{class:n[5]}],o={};for(let f=0;f<i.length;f+=1)o=se(o,i[f]);return{c(){e=y(n[2]?"a":"span"),s&&s.c(),l=C(),a&&a.c(),this.h()},l(f){e=P(f,((n[2]?"a":"span")||"null").toUpperCase(),{href:!0,class:!0});var c=E(e);s&&s.l(c),l=N(c),a&&a.l(c),c.forEach(p),this.h()},h(){/-/.test(n[2]?"a":"span")?fe(e,o):ue(e,o),ce(e,"hidden",n[4])},m(f,c){I(f,e,c),s&&s.m(e,null),v(e,l),a&&a.m(e,null),t=!0},p(f,c){s&&s.p&&(!t||c&2048)&&Ve(s,r,f,f[11],t?Le(r,f[11],c,null):Ye(f[11]),null),f[3]?a?(a.p(f,c),c&8&&$(a,1)):(a=he(f),a.c(),$(a,1),a.m(e,null)):a&&(H(),w(a,1,1,()=>{a=null}),Z()),o=Oe(i,[(!t||c&4)&&{href:f[2]},c&128&&f[7],(!t||c&32)&&{class:f[5]}]),/-/.test(f[2]?"a":"span")?fe(e,o):ue(e,o),ce(e,"hidden",f[4])},i(f){t||($(s,f),$(a),t=!0)},o(f){w(s,f),w(a),t=!1},d(f){f&&p(e),s&&s.d(f),a&&a.d()}}}function lt(n){let e=n[2]?"a":"span",l,t,r=(n[2]?"a":"span")&&re(n);return{c(){r&&r.c(),l=R()},l(s){r&&r.l(s),l=R()},m(s,a){r&&r.m(s,a),I(s,l,a),t=!0},p(s,[a]){s[2],e?W(e,s[2]?"a":"span")?(r.d(1),r=re(s),r.c(),r.m(l.parentNode,l)):r.p(s,a):(r=re(s),r.c(),r.m(l.parentNode,l)),e=s[2]?"a":"span"},i(s){t||($(r),t=!0)},o(s){w(r),t=!1},d(s){s&&p(l),r&&r.d(s)}}}function rt(n,e,l){const t=["color","large","href","rounded","index","dismissable","baseClass"];let r=ie(e,t),{$$slots:s={},$$scope:a}=e,{color:i="blue"}=e,{large:o=!1}=e,{href:f=void 0}=e,{rounded:c=!1}=e,{index:h=!1}=e,{dismissable:b=!1}=e,{baseClass:u="inline-flex items-center justify-center -mb-0.5"}=e,d=!1;const g={blue:"bg-blue-100 text-blue-800 dark:bg-blue-200 dark:text-blue-800",dark:"bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300",red:"bg-red-100 text-red-800 dark:bg-red-200 dark:text-red-900",green:"bg-green-100 text-green-800 dark:bg-green-200 dark:text-green-900",yellow:"bg-yellow-100 text-yellow-800 dark:bg-yellow-200 dark:text-yellow-900",indigo:"bg-indigo-100 text-indigo-800 dark:bg-indigo-200 dark:text-indigo-900",purple:"bg-purple-100 text-purple-800 dark:bg-purple-200 dark:text-purple-900",pink:"bg-pink-100 text-pink-800 dark:bg-pink-200 dark:text-pink-900",["!blue"]:"bg-blue-500 text-blue-100",["!dark"]:"bg-gray-500 text-gray-100",["!red"]:"bg-red-500 text-white",["!green"]:"bg-green-500 text-green-100",["!yellow"]:"bg-yellow-300 text-yellow-800",["!indigo"]:"bg-indigo-500 text-indigo-100",["!purple"]:"bg-purple-500 text-purple-100",["!pink"]:"bg-pink-500 text-pink-100"},k={blue:"hover:bg-blue-200 dark:hover:bg-blue-300",dark:"hover:bg-gray-200 dark:hover:bg-gray-300",red:"hover:bg-red-200 dark:hover:bg-red-300",green:"hover:bg-green-200 dark:hover:bg-green-300",yellow:"hover:bg-yellow-200 dark:hover:bg-yellow-300",indigo:"hover:bg-indigo-200 dark:hover:bg-indigo-300",purple:"hover:bg-purple-200 dark:hover:bg-purple-300",pink:"hover:bg-pink-200 dark:hover:bg-pink-300"};let Y;const U=()=>{l(4,d=!d)};return n.$$set=m=>{l(15,e=se(se({},e),oe(m))),l(7,r=ie(e,t)),"color"in m&&l(0,i=m.color),"large"in m&&l(1,o=m.large),"href"in m&&l(2,f=m.href),"rounded"in m&&l(8,c=m.rounded),"index"in m&&l(9,h=m.index),"dismissable"in m&&l(3,b=m.dismissable),"baseClass"in m&&l(10,u=m.baseClass),"$$scope"in m&&l(11,a=m.$$scope)},n.$$.update=()=>{l(5,Y=xe(u,o?"text-sm font-medium":"text-xs font-semibold",g[i],f&&(k[i]??k.blue),c?"rounded-full p-1":"rounded px-2.5 py-0.5",h&&"absolute font-bold border-2 border-white dark:border-gray-900",h&&(o?"w-7 h-7 -top-3 -right-3":"w-6 h-6 -top-2 -right-2"),e.class))},e=oe(e),[i,o,f,b,d,Y,U,r,c,h,u,a,s]}class q extends K{constructor(e){super(),Q(this,e,rt,lt,W,{color:0,large:1,href:2,rounded:8,index:9,dismissable:3,baseClass:10})}}function be(n,e,l){const t=n.slice();return t[4]=e[l][0],t[5]=e[l][1],t}function _e(n,e,l){const t=n.slice();return t[8]=e[l],t}function $e(n){let e,l,t=n[2](n[4])+"",r,s;return{c(){e=y("div"),l=y("div"),s=C(),this.h()},l(a){e=P(a,"DIV",{class:!0});var i=E(e);l=P(i,"DIV",{style:!0,class:!0});var o=E(l);o.forEach(p),s=N(i),i.forEach(p),this.h()},h(){de(l,"width",100*D[n[4]].hp/44+"%"),_(l,"class",r=n[1](n[4])+" h-full"),_(e,"class","border-0 bg-slate-200 dark:bg-slate-900 text-left align-middle pt-px text-[0.4rem] sm:text-[0.5rem] md:text-xs")},m(a,i){I(a,e,i),v(e,l),l.innerHTML=t,v(e,s)},p(a,i){i&1&&t!==(t=a[2](a[4])+"")&&(l.innerHTML=t),i&1&&de(l,"width",100*D[a[4]].hp/44+"%"),i&1&&r!==(r=a[1](a[4])+" h-full")&&_(l,"class",r)},d(a){a&&p(e)}}}function ke(n){let e,l=Array(n[5]),t=[];for(let r=0;r<l.length;r+=1)t[r]=$e(_e(n,l,r));return{c(){for(let r=0;r<t.length;r+=1)t[r].c();e=R()},l(r){for(let s=0;s<t.length;s+=1)t[s].l(r);e=R()},m(r,s){for(let a=0;a<t.length;a+=1)t[a].m(r,s);I(r,e,s)},p(r,s){if(s&7){l=Array(r[5]);let a;for(a=0;a<l.length;a+=1){const i=_e(r,l,a);t[a]?t[a].p(i,s):(t[a]=$e(i),t[a].c(),t[a].m(e.parentNode,e))}for(;a<t.length;a+=1)t[a].d(1);t.length=l.length}},d(r){ne(t,r),r&&p(e)}}}function st(n){let e,l=Object.entries(n[0]).sort(n[3]),t=[];for(let r=0;r<l.length;r+=1)t[r]=ke(be(n,l,r));return{c(){e=y("div");for(let r=0;r<t.length;r+=1)t[r].c();this.h()},l(r){e=P(r,"DIV",{class:!0});var s=E(e);for(let a=0;a<t.length;a+=1)t[a].l(s);s.forEach(p),this.h()},h(){_(e,"class","bg-slate-200 dark:bg-slate-900 border-0")},m(r,s){I(r,e,s);for(let a=0;a<t.length;a+=1)t[a].m(e,null)},p(r,[s]){if(s&7){l=Object.entries(r[0]).sort(r[3]);let a;for(a=0;a<l.length;a+=1){const i=be(r,l,a);t[a]?t[a].p(i,s):(t[a]=ke(i),t[a].c(),t[a].m(e,null))}for(;a<t.length;a+=1)t[a].d(1);t.length=l.length}},i:x,o:x,d(r){r&&p(e),ne(t,r)}}}function at(n,e,l){let{spawns:t=[]}=e;function r(i){return D[i].disciple?"bg-blue-600 dark:bg-blue-700":D[i].tengu?"bg-red-600 dark:bg-red-800 text-slate-400":D[i].purple?"bg-purple-800 dark:bg-purple-900 text-slate-400":i=="Oni Dog"?"bg-orange-900 dark:bg-orange-900 text-slate-500":i=="Bear"?"bg-amber-800 dark:bg-amber-800 text-slate-400":D[i].oni?"bg-slate-500 dark:bg-slate-500":"bg-slate-400 dark:bg-slate-600 text-slate-800 dark:text-slate-400"}function s(i){return D[i].tengu?"TENGU":i=="Bear"?"BEAR":i=="Oni Dog"?"DOG":D[i].invisible&&D[i].teleporter?"INV TELEPORT":D[i].invisible?"INV":D[i].teleporter?"TELEPORT":"&nbsp;"}const a=([i],[o])=>D[o].hp-D[i].hp;return n.$$set=i=>{"spawns"in i&&l(0,t=i.spawns)},[t,r,s,a]}class nt extends K{constructor(e){super(),Q(this,e,at,st,W,{spawns:0})}}function we(n){let e,l;return e=new q({props:{color:"custom",class:"text-slate-300 bg-red-800 capitalize",$$slots:{default:[it]},$$scope:{ctx:n}}}),{c(){z(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,r){j(e,t,r),l=!0},p(t,r){const s={};r&1028&&(s.$$scope={dirty:r,ctx:t}),e.$set(s)},i(t){l||($(e.$$.fragment,t),l=!0)},o(t){w(e.$$.fragment,t),l=!1},d(t){B(e,t)}}}function it(n){let e,l;return{c(){e=y("span"),l=G(n[2]),this.h()},l(t){e=P(t,"SPAN",{"data-before-brief":!0,"data-before-full":!0,class:!0});var r=E(e);l=T(r,n[2]),r.forEach(p),this.h()},h(){_(e,"data-before-brief","T-"),_(e,"data-before-full","TENGU-"),_(e,"class","before:content-[attr(data-before-brief)] md:before:content-[attr(data-before-full)]")},m(t,r){I(t,e,r),v(e,l)},p(t,r){r&4&&V(l,t[2])},d(t){t&&p(e)}}}function ve(n){let e,l;return e=new q({props:{color:"custom",class:"text-slate-300 bg-blue-800 capitalize",$$slots:{default:[ot]},$$scope:{ctx:n}}}),{c(){z(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,r){j(e,t,r),l=!0},p(t,r){const s={};r&1040&&(s.$$scope={dirty:r,ctx:t}),e.$set(s)},i(t){l||($(e.$$.fragment,t),l=!0)},o(t){w(e.$$.fragment,t),l=!1},d(t){B(e,t)}}}function ot(n){let e,l;return{c(){e=y("span"),l=G(n[4]),this.h()},l(t){e=P(t,"SPAN",{"data-before-brief":!0,"data-before-full":!0,class:!0});var r=E(e);l=T(r,n[4]),r.forEach(p),this.h()},h(){_(e,"data-before-brief","DI-"),_(e,"data-before-full","DISCIPLE-"),_(e,"class","before:content-[attr(data-before-brief)] md:before:content-[attr(data-before-full)]")},m(t,r){I(t,e,r),v(e,l)},p(t,r){r&16&&V(l,t[4])},d(t){t&&p(e)}}}function Ie(n){let e,l;return e=new q({props:{color:"custom",class:"text-slate-200 bg-cyan-800 capitalize",$$slots:{default:[ft]},$$scope:{ctx:n}}}),{c(){z(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,r){j(e,t,r),l=!0},p(t,r){const s={};r&1032&&(s.$$scope={dirty:r,ctx:t}),e.$set(s)},i(t){l||($(e.$$.fragment,t),l=!0)},o(t){w(e.$$.fragment,t),l=!1},d(t){B(e,t)}}}function ft(n){let e,l;return{c(){e=y("span"),l=G(n[3]),this.h()},l(t){e=P(t,"SPAN",{"data-before-brief":!0,"data-before-full":!0,class:!0});var r=E(e);l=T(r,n[3]),r.forEach(p),this.h()},h(){_(e,"data-before-brief","TP-"),_(e,"data-before-full","TELEPORT-"),_(e,"class","before:content-[attr(data-before-brief)] md:before:content-[attr(data-before-full)]")},m(t,r){I(t,e,r),v(e,l)},p(t,r){r&8&&V(l,t[3])},d(t){t&&p(e)}}}function Me(n){let e,l;return e=new q({props:{color:"custom",class:"text-slate-300 bg-yellow-800 capitalize",$$slots:{default:[ut]},$$scope:{ctx:n}}}),{c(){z(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,r){j(e,t,r),l=!0},p(t,r){const s={};r&1026&&(s.$$scope={dirty:r,ctx:t}),e.$set(s)},i(t){l||($(e.$$.fragment,t),l=!0)},o(t){w(e.$$.fragment,t),l=!1},d(t){B(e,t)}}}function ut(n){let e,l;return{c(){e=y("span"),l=G(n[1]),this.h()},l(t){e=P(t,"SPAN",{"data-before-brief":!0,"data-before-full":!0,class:!0});var r=E(e);l=T(r,n[1]),r.forEach(p),this.h()},h(){_(e,"data-before-brief","B-"),_(e,"data-before-full","BEAR-"),_(e,"class","before:content-[attr(data-before-brief)] md:before:content-[attr(data-before-full)]")},m(t,r){I(t,e,r),v(e,l)},p(t,r){r&2&&V(l,t[1])},d(t){t&&p(e)}}}function De(n){let e,l;return e=new q({props:{color:"custom",class:"text-slate-200 bg-yellow-700 capitalize hidden sm:inline",$$slots:{default:[ct]},$$scope:{ctx:n}}}),{c(){z(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,r){j(e,t,r),l=!0},p(t,r){const s={};r&1025&&(s.$$scope={dirty:r,ctx:t}),e.$set(s)},i(t){l||($(e.$$.fragment,t),l=!0)},o(t){w(e.$$.fragment,t),l=!1},d(t){B(e,t)}}}function ct(n){let e,l;return{c(){e=y("span"),l=G(n[0]),this.h()},l(t){e=P(t,"SPAN",{"data-before-brief":!0,"data-before-full":!0,class:!0});var r=E(e);l=T(r,n[0]),r.forEach(p),this.h()},h(){_(e,"data-before-brief","D-"),_(e,"data-before-full","DOG-"),_(e,"class","before:content-[attr(data-before-brief)] md:before:content-[attr(data-before-full)]")},m(t,r){I(t,e,r),v(e,l)},p(t,r){r&1&&V(l,t[0])},d(t){t&&p(e)}}}function dt(n){let e,l,t,r,s,a,i,o,f,c=n[2]>0&&we(n),h=n[4]>0&&ve(n),b=n[3]>0&&Ie(n),u=n[1]>0&&Me(n),d=n[0]>0&&De(n);return{c(){e=y("div"),l=y("span"),t=G(n[5]),r=C(),c&&c.c(),s=C(),h&&h.c(),a=C(),b&&b.c(),i=C(),u&&u.c(),o=C(),d&&d.c(),this.h()},l(g){e=P(g,"DIV",{class:!0});var k=E(e);l=P(k,"SPAN",{class:!0});var Y=E(l);t=T(Y,n[5]),Y.forEach(p),r=N(k),c&&c.l(k),s=N(k),h&&h.l(k),a=N(k),b&&b.l(k),i=N(k),u&&u.l(k),o=N(k),d&&d.l(k),k.forEach(p),this.h()},h(){_(l,"class","text-lime-600 bg-slate-900 inline pr-1 sm:pr-2 md:pr-3 text-xs md:text-sm lg:text-lg"),_(e,"class","border-0")},m(g,k){I(g,e,k),v(e,l),v(l,t),v(e,r),c&&c.m(e,null),v(e,s),h&&h.m(e,null),v(e,a),b&&b.m(e,null),v(e,i),u&&u.m(e,null),v(e,o),d&&d.m(e,null),f=!0},p(g,[k]){(!f||k&32)&&V(t,g[5]),g[2]>0?c?(c.p(g,k),k&4&&$(c,1)):(c=we(g),c.c(),$(c,1),c.m(e,s)):c&&(H(),w(c,1,1,()=>{c=null}),Z()),g[4]>0?h?(h.p(g,k),k&16&&$(h,1)):(h=ve(g),h.c(),$(h,1),h.m(e,a)):h&&(H(),w(h,1,1,()=>{h=null}),Z()),g[3]>0?b?(b.p(g,k),k&8&&$(b,1)):(b=Ie(g),b.c(),$(b,1),b.m(e,i)):b&&(H(),w(b,1,1,()=>{b=null}),Z()),g[1]>0?u?(u.p(g,k),k&2&&$(u,1)):(u=Me(g),u.c(),$(u,1),u.m(e,o)):u&&(H(),w(u,1,1,()=>{u=null}),Z()),g[0]>0?d?(d.p(g,k),k&1&&$(d,1)):(d=De(g),d.c(),$(d,1),d.m(e,null)):d&&(H(),w(d,1,1,()=>{d=null}),Z())},i(g){f||($(c),$(h),$(b),$(u),$(d),f=!0)},o(g){w(c),w(h),w(b),w(u),w(d),f=!1},d(g){g&&p(e),c&&c.d(),h&&h.d(),b&&b.d(),u&&u.d(),d&&d.d()}}}function mt(n,e,l){let{spawns:t=[]}=e,r=0,s=0,a=0,i=0,o=0,f=0,c=0,h=0,b=0;return Object.entries(t).forEach(u=>{l(5,c+=u[1]),h+=D[u[0]].hp,D[u[0]].hp>6&&(b+=(D[u[0]].hp-6)**1.5),D[u[0]].tengu&&l(2,a+=u[1]),D[u[0]].invisible&&(i+=u[1]),D[u[0]].teleporter&&l(3,o+=u[1]),u[0]=="Bear"&&l(1,s+=u[1]),u[0]=="Oni Dog"&&l(0,r+=u[1]),u[0]=="Disciple"&&l(4,f+=u[1])}),n.$$set=u=>{"spawns"in u&&l(6,t=u.spawns)},[r,s,a,o,f,c,t]}class gt extends K{constructor(e){super(),Q(this,e,mt,dt,W,{spawns:6})}}function Ee(n,e,l){const t=n.slice();return t[9]=e[l],t[11]=l,t}function ye(n,e,l){const t=n.slice();return t[9]=e[l],t[13]=l,t}function Pe(n){let e,l=(n[3][O[n[11]][n[13]]]??O[n[11]][n[13]])+"",t,r,s,a=(n[4][O[n[11]][n[13]]]??O[n[11]][n[13]])+"",i;return{c(){e=y("p"),t=G(l),r=C(),s=y("p"),i=G(a),this.h()},l(o){e=P(o,"P",{class:!0});var f=E(e);t=T(f,l),f.forEach(p),r=N(o),s=P(o,"P",{class:!0});var c=E(s);i=T(c,a),c.forEach(p),this.h()},h(){_(e,"class","text-center dark:text-white pb-0.5 sm:pb-1 md:pb-2 text-sm md:text-lg block sm:hidden"),_(s,"class","text-center dark:text-white pb-0.5 sm:pb-1 md:pb-2 text-sm md:text-lg hidden sm:block")},m(o,f){I(o,e,f),v(e,t),I(o,r,f),I(o,s,f),v(s,i)},p(o,f){f&8&&l!==(l=(o[3][O[o[11]][o[13]]]??O[o[11]][o[13]])+"")&&V(t,l),f&16&&a!==(a=(o[4][O[o[11]][o[13]]]??O[o[11]][o[13]])+"")&&V(i,a)},d(o){o&&p(e),o&&p(r),o&&p(s)}}}function pt(n){let e,l;return e=new gt({props:{spawns:J[n[0]].spawns[n[11]][n[13]]}}),{c(){z(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,r){j(e,t,r),l=!0},p(t,r){const s={};r&1&&(s.spawns=J[t[0]].spawns[t[11]][t[13]]),e.$set(s)},i(t){l||($(e.$$.fragment,t),l=!0)},o(t){w(e.$$.fragment,t),l=!1},d(t){B(e,t)}}}function ht(n){let e,l;return e=new nt({props:{spawns:J[n[0]].spawns[n[11]][n[13]]}}),{c(){z(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,r){j(e,t,r),l=!0},p(t,r){const s={};r&1&&(s.spawns=J[t[0]].spawns[t[11]][t[13]]),e.$set(s)},i(t){l||($(e.$$.fragment,t),l=!0)},o(t){w(e.$$.fragment,t),l=!1},d(t){B(e,t)}}}function Ae(n,e){let l,t,r,s,a,i,o,f=e[1]&&Pe(e);const c=[ht,pt],h=[];function b(d,g){return d[2]?0:1}r=b(e),s=h[r]=c[r](e);function u(){return e[8](e[11],e[13])}return{key:n,first:null,c(){l=y("div"),f&&f.c(),t=C(),s.c(),this.h()},l(d){l=P(d,"DIV",{class:!0});var g=E(l);f&&f.l(g),t=N(g),s.l(g),g.forEach(p),this.h()},h(){_(l,"class","dark:bg-slate-900 bg-slate-200 flex-initial "+_t(e[6](e[11],e[13]))+" outline outline-1 md:outline-2 rounded-lg drop-shadow-md dark:drop-shadow-md w-64 p-1 md:p-2 m-1 sm:mx-2 md:mx-3"),this.first=l},m(d,g){I(d,l,g),f&&f.m(l,null),v(l,t),h[r].m(l,null),a=!0,i||(o=Ge(l,"click",u),i=!0)},p(d,g){e=d,e[1]?f?f.p(e,g):(f=Pe(e),f.c(),f.m(l,t)):f&&(f.d(1),f=null);let k=r;r=b(e),r===k?h[r].p(e,g):(H(),w(h[k],1,1,()=>{h[k]=null}),Z(),s=h[r],s?s.p(e,g):(s=h[r]=c[r](e),s.c()),$(s,1),s.m(l,null))},i(d){a||($(s),a=!0)},o(d){w(s),a=!1},d(d){d&&p(l),f&&f.d(),h[r].d(),i=!1,o()}}}function Ce(n,e){let l,t,r=e[11]+1+"",s,a,i=[],o=new Map,f,c,h=Array(3);const b=u=>u[13];for(let u=0;u<h.length;u+=1){let d=ye(e,h,u),g=b(d);o.set(g,i[u]=Ae(g,d))}return{key:n,first:null,c(){l=y("div"),t=y("div"),s=G(r),a=C();for(let u=0;u<i.length;u+=1)i[u].c();f=C(),this.h()},l(u){l=P(u,"DIV",{class:!0});var d=E(l);t=P(d,"DIV",{class:!0});var g=E(t);s=T(g,r),g.forEach(p),a=N(d);for(let k=0;k<i.length;k+=1)i[k].l(d);f=N(d),d.forEach(p),this.h()},h(){_(t,"class","flex-initial w-8 dark:text-white text-center p-1 self-center text-xs md:text-lg"),_(l,"class","flex flex-row justify-center mx-1 sm:mx-2 md:mx-3 my-1 sm:my-2 md:my-3"),this.first=l},m(u,d){I(u,l,d),v(l,t),v(t,s),v(l,a);for(let g=0;g<i.length;g+=1)i[g].m(l,null);v(l,f),c=!0},p(u,d){e=u,d&127&&(h=Array(3),H(),i=je(i,d,b,1,e,h,o,l,Be,Ae,f,ye),Z())},i(u){if(!c){for(let d=0;d<h.length;d+=1)$(i[d]);c=!0}},o(u){for(let d=0;d<i.length;d+=1)w(i[d]);c=!1},d(u){u&&p(l);for(let d=0;d<i.length;d+=1)i[d].d()}}}function bt(n){let e,l=[],t=new Map,r,s=Array(15);const a=i=>i[11];for(let i=0;i<s.length;i+=1){let o=Ee(n,s,i),f=a(o);t.set(f,l[i]=Ce(f,o))}return{c(){e=y("div");for(let i=0;i<l.length;i+=1)l[i].c();this.h()},l(i){e=P(i,"DIV",{class:!0});var o=E(e);for(let f=0;f<l.length;f+=1)l[f].l(o);o.forEach(p),this.h()},h(){_(e,"class","flex flex-col justify-center")},m(i,o){I(i,e,o);for(let f=0;f<l.length;f+=1)l[f].m(e,null);r=!0},p(i,[o]){o&127&&(s=Array(15),H(),l=je(l,o,a,1,i,s,t,e,Be,Ce,null,Ee),Z())},i(i){if(!r){for(let o=0;o<s.length;o+=1)$(l[o]);r=!0}},o(i){for(let o=0;o<l.length;o+=1)w(l[o]);r=!1},d(i){i&&p(e);for(let o=0;o<l.length;o+=1)l[o].d()}}}function _t(n){return n>200?"outline-red-800":n>160?"outline-yellow-900":n>90?"outline-blue-800":"outline-emerald-800"}function $t(n,e,l){let t,r,s;Re(n,ee,b=>l(7,s=b));let{mapname:a}=e,{nmsflag:i=!1}=e;function o(b,u){ae.set({enabled:!0,wave:b,spawn:u})}let f;Ke.subscribe(b=>{l(2,f=!0)});function c(b,u){let d=0,g=0,k=0,Y=0,U=0,m=0,M=0,F=0,X=0;return Object.entries(J[a].spawns[b][u]).forEach(A=>{M+=A[1],F+=D[A[0]].hp,D[A[0]].hp>6&&(X+=(D[A[0]].hp-6)**1.5),D[A[0]].tengu&&(k+=A[1]),D[A[0]].invisible&&(Y+=A[1]),D[A[0]].teleporter&&(U+=A[1]),A[0]=="Bear"&&(g+=A[1]),A[0]=="Oni Dog"&&(d+=A[1]),A[0]=="Disciple"&&(m+=A[1])}),X}const h=(b,u)=>o(b,u);return n.$$set=b=>{"mapname"in b&&l(0,a=b.mapname),"nmsflag"in b&&l(1,i=b.nmsflag)},n.$$.update=()=>{n.$$.dirty&131&&l(4,t=i?L[a][s].spawns:[]),n.$$.dirty&131&&l(3,r=i?L[a][s].smallspawns??L[a][s].spawns:[])},[a,i,f,r,t,o,c,s,h]}class kt extends K{constructor(e){super(),Q(this,e,$t,bt,W,{mapname:0,nmsflag:1})}}function Ne(n,e,l){const t=n.slice();return t[11]=e[l],t}function wt(n){let e,l;return{c(){e=me("svg"),l=me("path"),this.h()},l(t){e=ge(t,"svg",{xmlns:!0,fill:!0,viewBox:!0,"stroke-width":!0,stroke:!0,class:!0});var r=E(e);l=ge(r,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,d:!0}),E(l).forEach(p),r.forEach(p),this.h()},h(){_(l,"stroke-linecap","round"),_(l,"stroke-linejoin","round"),_(l,"d","M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"),_(e,"xmlns","http://www.w3.org/2000/svg"),_(e,"fill","none"),_(e,"viewBox","0 0 24 24"),_(e,"stroke-width","1.5"),_(e,"stroke","currentColor"),_(e,"class","w-5 h-5")},m(t,r){I(t,e,r),v(e,l)},p:x,d(t){t&&p(e)}}}function ze(n){let e,l,t,r;return e=new He({props:{class:"flex items-center justify-left text-xs",$$slots:{default:[It]},$$scope:{ctx:n}}}),t=new Te({props:{placement:"left-start",class:"w-28",$$slots:{default:[Dt]},$$scope:{ctx:n}}}),{c(){z(e.$$.fragment),l=C(),z(t.$$.fragment)},l(s){S(e.$$.fragment,s),l=N(s),S(t.$$.fragment,s)},m(s,a){j(e,s,a),I(s,l,a),j(t,s,a),r=!0},p(s,a){const i={};a&16384&&(i.$$scope={dirty:a,ctx:s}),e.$set(i);const o={};a&16388&&(o.$$scope={dirty:a,ctx:s}),t.$set(o)},i(s){r||($(e.$$.fragment,s),$(t.$$.fragment,s),r=!0)},o(s){w(e.$$.fragment,s),w(t.$$.fragment,s),r=!1},d(s){B(e,s),s&&p(l),B(t,s)}}}function vt(n){let e,l;return{c(){e=y("div"),l=G("Spawn names"),this.h()},l(t){e=P(t,"DIV",{class:!0});var r=E(e);l=T(r,"Spawn names"),r.forEach(p),this.h()},h(){_(e,"class","flex flex-row")},m(t,r){I(t,e,r),v(e,l)},p:x,d(t){t&&p(e)}}}function It(n){let e,l;return e=new tt({props:{placement:"left",$$slots:{default:[vt]},$$scope:{ctx:n}}}),{c(){z(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,r){j(e,t,r),l=!0},p(t,r){const s={};r&16384&&(s.$$scope={dirty:r,ctx:t}),e.$set(s)},i(t){l||($(e.$$.fragment,t),l=!0)},o(t){w(e.$$.fragment,t),l=!1},d(t){B(e,t)}}}function Mt(n){let e,l,t,r,s,a=L[n[2]][n[11]].name+"",i,o;return{c(){e=y("div"),l=y("img"),r=C(),s=y("div"),i=G(a),o=C(),this.h()},l(f){e=P(f,"DIV",{class:!0});var c=E(e);l=P(c,"IMG",{width:!0,height:!0,alt:!0,class:!0,src:!0}),r=N(c),s=P(c,"DIV",{class:!0});var h=E(s);i=T(h,a),h.forEach(p),o=N(c),c.forEach(p),this.h()},h(){_(l,"width","16"),_(l,"height","12"),_(l,"alt","lang"),_(l,"class","flex align-middle pr-1"),pe(l.src,t="data:image/svg+xml;base64,"+n[5][L[n[2]][n[11]].lang])||_(l,"src",t),_(s,"class","flex align-middle text-xs"),_(e,"class","flex flex-row")},m(f,c){I(f,e,c),v(e,l),v(e,r),v(e,s),v(s,i),v(e,o)},p(f,c){c&4&&!pe(l.src,t="data:image/svg+xml;base64,"+f[5][L[f[2]][f[11]].lang])&&_(l,"src",t),c&4&&a!==(a=L[f[2]][f[11]].name+"")&&V(i,a)},d(f){f&&p(e)}}}function Se(n){let e,l;return e=new He({props:{class:"align-middle text-xs",$$slots:{default:[Mt]},$$scope:{ctx:n}}}),e.$on("click",function(){We(ee.set(n[11]))&&ee.set(n[11]).apply(this,arguments)}),{c(){z(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,r){j(e,t,r),l=!0},p(t,r){n=t;const s={};r&16388&&(s.$$scope={dirty:r,ctx:n}),e.$set(s)},i(t){l||($(e.$$.fragment,t),l=!0)},o(t){w(e.$$.fragment,t),l=!1},d(t){B(e,t)}}}function Dt(n){let e,l,t=Object.keys(L[n[2]]),r=[];for(let a=0;a<t.length;a+=1)r[a]=Se(Ne(n,t,a));const s=a=>w(r[a],1,1,()=>{r[a]=null});return{c(){for(let a=0;a<r.length;a+=1)r[a].c();e=R()},l(a){for(let i=0;i<r.length;i+=1)r[i].l(a);e=R()},m(a,i){for(let o=0;o<r.length;o+=1)r[o].m(a,i);I(a,e,i),l=!0},p(a,i){if(i&36){t=Object.keys(L[a[2]]);let o;for(o=0;o<t.length;o+=1){const f=Ne(a,t,o);r[o]?(r[o].p(f,i),$(r[o],1)):(r[o]=Se(f),r[o].c(),$(r[o],1),r[o].m(e.parentNode,e))}for(H(),o=t.length;o<r.length;o+=1)s(o);Z()}},i(a){if(!l){for(let i=0;i<t.length;i+=1)$(r[i]);l=!0}},o(a){r=r.filter(Boolean);for(let i=0;i<r.length;i+=1)w(r[i]);l=!1},d(a){ne(r,a),a&&p(e)}}}function Et(n){let e,l,t,r,s=n[0]&&ze(n);return{c(){e=y("li"),l=C(),s&&s.c(),t=R(),this.h()},l(a){e=P(a,"LI",{class:!0});var i=E(e);i.forEach(p),l=N(a),s&&s.l(a),t=R(),this.h()},h(){_(e,"class","rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600")},m(a,i){I(a,e,i),I(a,l,i),s&&s.m(a,i),I(a,t,i),r=!0},p(a,i){a[0]?s?(s.p(a,i),i&1&&$(s,1)):(s=ze(a),s.c(),$(s,1),s.m(t.parentNode,t)):s&&(H(),w(s,1,1,()=>{s=null}),Z())},i(a){r||($(s),r=!0)},o(a){w(s),r=!1},d(a){a&&p(e),a&&p(l),s&&s.d(a),a&&p(t)}}}function yt(n){let e,l;return e=new qe({props:{spawns:J[n[2]].spawns[n[1].wave][n[1].spawn]}}),{c(){z(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,r){j(e,t,r),l=!0},p(t,r){const s={};r&6&&(s.spawns=J[t[2]].spawns[t[1].wave][t[1].spawn]),e.$set(s)},i(t){l||($(e.$$.fragment,t),l=!0)},o(t){w(e.$$.fragment,t),l=!1},d(t){B(e,t)}}}function Pt(n){let e,l=n[4](n[2])+"",t,r,s,a,i,o,f,c,h,b,u,d,g,k;s=new et({props:{class:"dots-menu text-gray-900 bg-white dark:text-white dark:bg-gray-800",$$slots:{default:[wt]},$$scope:{ctx:n}}}),i=new Te({props:{class:"w-48 p-3 space-y-1 text-xs",$$slots:{default:[Et]},$$scope:{ctx:n}}});function Y(m){n[7](m)}let U={title:"Wave "+(1+n[1].wave)+"-"+(1+n[1].spawn),autoclose:!0,$$slots:{default:[yt]},$$scope:{ctx:n}};return n[1].enabled!==void 0&&(U.open=n[1].enabled),c=new Qe({props:U}),Fe.push(()=>Je(c,"open",Y,n[1].enabled)),c.$on("click",n[8]),u=new kt({props:{nmsflag:n[0],mapname:n[2]}}),{c(){e=y("p"),t=G(l),r=C(),z(s.$$.fragment),a=C(),z(i.$$.fragment),o=C(),f=y("div"),z(c.$$.fragment),b=C(),z(u.$$.fragment),this.h()},l(m){e=P(m,"P",{class:!0});var M=E(e);t=T(M,l),r=N(M),S(s.$$.fragment,M),a=N(M),S(i.$$.fragment,M),M.forEach(p),o=N(m),f=P(m,"DIV",{class:!0});var F=E(f);S(c.$$.fragment,F),F.forEach(p),b=N(m),S(u.$$.fragment,m),this.h()},h(){_(e,"class","dark:text-white text-2xl text-center p-2 md:p-4"),_(f,"class","bg-green-500")},m(m,M){I(m,e,M),v(e,t),v(e,r),j(s,e,null),v(e,a),j(i,e,null),I(m,o,M),I(m,f,M),j(c,f,null),I(m,b,M),j(u,m,M),d=!0,g||(k=Ge(f,"click",n[9]),g=!0)},p(m,[M]){(!d||M&4)&&l!==(l=m[4](m[2])+"")&&V(t,l);const F={};M&16384&&(F.$$scope={dirty:M,ctx:m}),s.$set(F);const X={};M&16389&&(X.$$scope={dirty:M,ctx:m}),i.$set(X);const A={};M&2&&(A.title="Wave "+(1+m[1].wave)+"-"+(1+m[1].spawn)),M&16390&&(A.$$scope={dirty:M,ctx:m}),!h&&M&2&&(h=!0,A.open=m[1].enabled,Ue(()=>h=!1)),c.$set(A);const te={};M&1&&(te.nmsflag=m[0]),M&4&&(te.mapname=m[2]),u.$set(te)},i(m){d||($(s.$$.fragment,m),$(i.$$.fragment,m),$(c.$$.fragment,m),$(u.$$.fragment,m),d=!0)},o(m){w(s.$$.fragment,m),w(i.$$.fragment,m),w(c.$$.fragment,m),w(u.$$.fragment,m),d=!1},d(m){m&&p(e),B(s),B(i),m&&p(o),m&&p(f),B(c),m&&p(b),B(u,m),g=!1,k()}}}const At="sov";function Ct(n,e,l){let t,r,{map:s=""}=e;function a(){ae.set({enabled:!1,wave:0,spawn:0})}function i(u){return u in le?t?"NMS: "+le[u].name:le[u].name:""}let o;ae.subscribe(u=>{l(1,o=u)}),ee.subscribe(u=>{});const f={en:"PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MCAzMCI+PGNsaXBQYXRoIGlkPSJhIj48cGF0aCBkPSJNMCAwdjMwaDYwVjB6Ii8+PC9jbGlwUGF0aD48Y2xpcFBhdGggaWQ9ImIiPjxwYXRoIGQ9Ik0zMCAxNWgzMHYxNXp2MTVIMHpIMFYwelYwaDMweiIvPjwvY2xpcFBhdGg+PGcgY2xpcC1wYXRoPSJ1cmwoI2EpIj48cGF0aCBkPSJNMCAwdjMwaDYwVjB6IiBmaWxsPSIjMDEyMTY5Ii8+PHBhdGggZD0iTTAgMGw2MCAzMG0wLTMwTDAgMzAiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSI2Ii8+PHBhdGggZD0iTTAgMGw2MCAzMG0wLTMwTDAgMzAiIGNsaXAtcGF0aD0idXJsKCNiKSIgc3Ryb2tlPSIjQzgxMDJFIiBzdHJva2Utd2lkdGg9IjQiLz48cGF0aCBkPSJNMzAgMHYzME0wIDE1aDYwIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMTAiLz48cGF0aCBkPSJNMzAgMHYzME0wIDE1aDYwIiBzdHJva2U9IiNDODEwMkUiIHN0cm9rZS13aWR0aD0iNiIvPjwvZz48L3N2Zz4=",jp:"PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA5MDAgNjAwIj4KPHJlY3QgZmlsbD0iI2ZmZiIgaGVpZ2h0PSI2MDAiIHdpZHRoPSI5MDAiLz4KPGNpcmNsZSBmaWxsPSIjYmMwMDJkIiBjeD0iNDUwIiBjeT0iMzAwIiByPSIxODAiLz4KPC9zdmc+Cg=="};function c(u){n.$$.not_equal(o.enabled,u)&&(o.enabled=u,l(1,o))}const h=()=>a(),b=()=>a();return n.$$set=u=>{"map"in u&&l(6,s=u.map)},n.$$.update=()=>{n.$$.dirty&64&&l(0,t=s=="nms"),n.$$.dirty&65&&l(2,r=t?At:s)},[t,o,r,a,i,f,s,c,h,b]}class Gt extends K{constructor(e){super(),Q(this,e,Ct,Pt,W,{map:6})}}export{Gt as S};
