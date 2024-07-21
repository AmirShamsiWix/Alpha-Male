"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8744],{98289:function(e,t,r){r.d(t,{Z:function(){return n.Z}});var n=r(1084);r(57437),r(42744)},30559:function(e,t,r){r.d(t,{vF:function(){return es},Qd:function(){return ec},o4:function(){return el},mn:function(){return A}});var n=r(57437),o=r(2265),a=r(13428),i=r(56989),c=r(27733),s=r(42210),u=r(85744),d=r(73763),f=r(9381),p=r(51030),_=r(85606),m=r(20966);let v="Collapsible",[y,b]=(0,i.b)(v),[w,x]=y(v),j=(0,o.forwardRef)((e,t)=>{let{__scopeCollapsible:r,open:n,defaultOpen:i,disabled:c,onOpenChange:s,...u}=e,[p=!1,_]=(0,d.T)({prop:n,defaultProp:i,onChange:s});return(0,o.createElement)(w,{scope:r,disabled:c,contentId:(0,m.M)(),open:p,onOpenToggle:(0,o.useCallback)(()=>_(e=>!e),[_])},(0,o.createElement)(f.WV.div,(0,a.Z)({"data-state":$409067139f391064$var$getState(p),"data-disabled":c?"":void 0},u,{ref:t})))}),N=(0,o.forwardRef)((e,t)=>{let{__scopeCollapsible:r,...n}=e,i=x("CollapsibleTrigger",r);return(0,o.createElement)(f.WV.button,(0,a.Z)({type:"button","aria-controls":i.contentId,"aria-expanded":i.open||!1,"data-state":$409067139f391064$var$getState(i.open),"data-disabled":i.disabled?"":void 0,disabled:i.disabled},n,{ref:t,onClick:(0,u.M)(e.onClick,i.onOpenToggle)}))}),$="CollapsibleContent",C=(0,o.forwardRef)((e,t)=>{let{forceMount:r,...n}=e,i=x($,e.__scopeCollapsible);return(0,o.createElement)(_.z,{present:r||i.open},({present:e})=>(0,o.createElement)(O,(0,a.Z)({},n,{ref:t,present:e})))}),O=(0,o.forwardRef)((e,t)=>{let{__scopeCollapsible:r,present:n,children:i,...c}=e,u=x($,r),[d,_]=(0,o.useState)(n),m=(0,o.useRef)(null),v=(0,s.e)(t,m),y=(0,o.useRef)(0),b=y.current,w=(0,o.useRef)(0),j=w.current,N=u.open||d,C=(0,o.useRef)(N),O=(0,o.useRef)();return(0,o.useEffect)(()=>{let e=requestAnimationFrame(()=>C.current=!1);return()=>cancelAnimationFrame(e)},[]),(0,p.b)(()=>{let e=m.current;if(e){O.current=O.current||{transitionDuration:e.style.transitionDuration,animationName:e.style.animationName},e.style.transitionDuration="0s",e.style.animationName="none";let t=e.getBoundingClientRect();y.current=t.height,w.current=t.width,C.current||(e.style.transitionDuration=O.current.transitionDuration,e.style.animationName=O.current.animationName),_(n)}},[u.open,n]),(0,o.createElement)(f.WV.div,(0,a.Z)({"data-state":$409067139f391064$var$getState(u.open),"data-disabled":u.disabled?"":void 0,id:u.contentId,hidden:!N},c,{ref:v,style:{"--radix-collapsible-content-height":b?`${b}px`:void 0,"--radix-collapsible-content-width":j?`${j}px`:void 0,...e.style}}),N&&i)});function $409067139f391064$var$getState(e){return e?"open":"closed"}var P=r(65400);let k="Accordion",S=["Home","End","ArrowDown","ArrowUp","ArrowLeft","ArrowRight"],[I,z,Z]=(0,c.B)(k),[T,D]=(0,i.b)(k,[Z,b]),F=b(),V=o.forwardRef((e,t)=>{let{type:r,...n}=e;return o.createElement(I.Provider,{scope:e.__scopeAccordion},"multiple"===r?o.createElement(H,(0,a.Z)({},n,{ref:t})):o.createElement(L,(0,a.Z)({},n,{ref:t})))});V.propTypes={type(e){let t=e.value||e.defaultValue;return e.type&&!["single","multiple"].includes(e.type)?Error("Invalid prop `type` supplied to `Accordion`. Expected one of `single | multiple`."):"multiple"===e.type&&"string"==typeof t?Error("Invalid prop `type` supplied to `Accordion`. Expected `single` when `defaultValue` or `value` is type `string`."):"single"===e.type&&Array.isArray(t)?Error("Invalid prop `type` supplied to `Accordion`. Expected `multiple` when `defaultValue` or `value` is type `string[]`."):null}};let[M,W]=T(k),[U,q]=T(k,{collapsible:!1}),L=o.forwardRef((e,t)=>{let{value:r,defaultValue:n,onValueChange:i=()=>{},collapsible:c=!1,...s}=e,[u,f]=(0,d.T)({prop:r,defaultProp:n,onChange:i});return o.createElement(M,{scope:e.__scopeAccordion,value:u?[u]:[],onItemOpen:f,onItemClose:o.useCallback(()=>c&&f(""),[c,f])},o.createElement(U,{scope:e.__scopeAccordion,collapsible:c},o.createElement(G,(0,a.Z)({},s,{ref:t}))))}),H=o.forwardRef((e,t)=>{let{value:r,defaultValue:n,onValueChange:i=()=>{},...c}=e,[s=[],u]=(0,d.T)({prop:r,defaultProp:n,onChange:i}),f=o.useCallback(e=>u((t=[])=>[...t,e]),[u]),p=o.useCallback(e=>u((t=[])=>t.filter(t=>t!==e)),[u]);return o.createElement(M,{scope:e.__scopeAccordion,value:s,onItemOpen:f,onItemClose:p},o.createElement(U,{scope:e.__scopeAccordion,collapsible:!0},o.createElement(G,(0,a.Z)({},c,{ref:t}))))}),[J,K]=T(k),G=o.forwardRef((e,t)=>{let{__scopeAccordion:r,disabled:n,dir:i,orientation:c="vertical",...d}=e,p=o.useRef(null),_=(0,s.e)(p,t),m=z(r),v=(0,P.gm)(i),y="ltr"===v,b=(0,u.M)(e.onKeyDown,e=>{var t;if(!S.includes(e.key))return;let r=e.target,n=m().filter(e=>{var t;return!(null!==(t=e.ref.current)&&void 0!==t&&t.disabled)}),o=n.findIndex(e=>e.ref.current===r),a=n.length;if(-1===o)return;e.preventDefault();let i=o,s=a-1,moveNext=()=>{(i=o+1)>s&&(i=0)},movePrev=()=>{(i=o-1)<0&&(i=s)};switch(e.key){case"Home":i=0;break;case"End":i=s;break;case"ArrowRight":"horizontal"===c&&(y?moveNext():movePrev());break;case"ArrowDown":"vertical"===c&&moveNext();break;case"ArrowLeft":"horizontal"===c&&(y?movePrev():moveNext());break;case"ArrowUp":"vertical"===c&&movePrev()}let u=i%a;null===(t=n[u].ref.current)||void 0===t||t.focus()});return o.createElement(J,{scope:r,disabled:n,direction:i,orientation:c},o.createElement(I.Slot,{scope:r},o.createElement(f.WV.div,(0,a.Z)({},d,{"data-orientation":c,ref:_,onKeyDown:n?void 0:b}))))}),Q="AccordionItem",[X,Y]=T(Q),ee=o.forwardRef((e,t)=>{let{__scopeAccordion:r,value:n,...i}=e,c=K(Q,r),s=W(Q,r),u=F(r),d=(0,m.M)(),f=n&&s.value.includes(n)||!1,p=c.disabled||e.disabled;return o.createElement(X,{scope:r,open:f,disabled:p,triggerId:d},o.createElement(j,(0,a.Z)({"data-orientation":c.orientation,"data-state":$1bf158f521e1b1b4$var$getState(f)},u,i,{ref:t,disabled:p,open:f,onOpenChange:e=>{e?s.onItemOpen(n):s.onItemClose(n)}})))}),et=o.forwardRef((e,t)=>{let{__scopeAccordion:r,...n}=e,i=K(k,r),c=Y("AccordionHeader",r);return o.createElement(f.WV.h3,(0,a.Z)({"data-orientation":i.orientation,"data-state":$1bf158f521e1b1b4$var$getState(c.open),"data-disabled":c.disabled?"":void 0},n,{ref:t}))}),er="AccordionTrigger",en=o.forwardRef((e,t)=>{let{__scopeAccordion:r,...n}=e,i=K(k,r),c=Y(er,r),s=q(er,r),u=F(r);return o.createElement(I.ItemSlot,{scope:r},o.createElement(N,(0,a.Z)({"aria-disabled":c.open&&!s.collapsible||void 0,"data-orientation":i.orientation,id:c.triggerId},u,n,{ref:t})))}),eo=o.forwardRef((e,t)=>{let{__scopeAccordion:r,...n}=e,i=K(k,r),c=Y("AccordionContent",r),s=F(r);return o.createElement(C,(0,a.Z)({role:"region","aria-labelledby":c.triggerId,"data-orientation":i.orientation},s,n,{ref:t,style:{"--radix-accordion-content-height":"var(--radix-collapsible-content-height)","--radix-accordion-content-width":"var(--radix-collapsible-content-width)",...e.style}}))});function $1bf158f521e1b1b4$var$getState(e){return e?"open":"closed"}var ea=r(82687),ei=r(17488);r(58089);let A=e=>(0,n.jsx)(V,{...e,type:"single",collapsible:!0}),ec=o.forwardRef(({className:e,...t},r)=>(0,n.jsx)(ee,{ref:r,className:(0,ea.cn)("border-b-2 border-grey2 py-0 last-of-type:border-none sm:py-4",e),...t}));ec.displayName="AccordionItem";let el=o.forwardRef(({className:e,children:t,iconClassName:r,icon:o,...a},i)=>(0,n.jsx)(et,{className:"flex",children:(0,n.jsxs)(en,{ref:i,className:(0,ea.cn)("flex flex-1 items-center justify-between py-8 font-dinPro text-[1.25rem] font-medium leading-none tracking-tight text-textPrimary transition-all sm:pr-4 sm:text-[2rem] sm:leading-snug",!o&&"[&[data-state=open]>span>svg]:rotate-180",e),...a,children:[t,o||(0,n.jsx)("span",{className:r,children:(0,n.jsx)(ei.Z,{size:19,name:"chevronDown",className:"h-4 w-4 shrink-0 transition-transform duration-200"})})]})}));el.displayName=en.displayName;let es=o.forwardRef(({className:e,children:t,...r},o)=>(0,n.jsx)(eo,{ref:o,className:(0,ea.cn)("overflow-hidden font-gtAmericaMono text-base transition-all sm:max-w-[50rem]",e),...r,children:(0,n.jsx)("div",{className:"pb-6 pt-0",children:t})}));es.displayName=eo.displayName},58362:function(e,t,r){r.d(t,{Z:function(){return Faq_q}});var n,o,a,i,c,s,u=r(57437),d=r(42744),f=r.n(d),p=r(1084),_=r(2265),m=r(34969),v="object"==typeof m.c&&m.c&&m.c.Object===Object&&m.c,y="object"==typeof self&&self&&self.Object===Object&&self,b=v||y||Function("return this")(),w=b.Symbol,x=Object.prototype,j=x.hasOwnProperty,N=x.toString,$=w?w.toStringTag:void 0,C=Object.prototype.toString,h=function(e){var t=j.call(e,$),r=e[$];try{e[$]=void 0;var n=!0}catch{}var o=N.call(e);return n&&(t?e[$]=r:delete e[$]),o},O=w?w.toStringTag:void 0,R=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":O&&O in Object(e)?h(e):C.call(e)},E=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},B=function(e){if(!E(e))return!1;var t=R(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},rt=function(e){return null!=e&&"object"==typeof e},P=r(32298),k=r(17488);r(82687),r(58089);var Accordion_T=function(e){return e},ie=function(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)},S=Math.max,I=b["__core-js_shared__"],z=(n=/[^.]+$/.exec(I&&I.keys&&I.keys.IE_PROTO||""))?"Symbol(src)_1."+n:"",Z=Function.prototype.toString,xe=function(e){if(null!=e){try{return Z.call(e)}catch{}try{return e+""}catch{}}return""},T=/^\[object .+?Constructor\]$/,D=Object.prototype,F=Function.prototype.toString,V=D.hasOwnProperty,M=RegExp("^"+F.call(V).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),g=function(e,t){var r,n=null==e?void 0:e[t];return E(r=n)&&(!z||!(z in r))&&(B(r)?M:T).test(xe(r))?n:void 0},W=function(){try{var e=g(Object,"defineProperty");return e({},"",{}),e}catch{}}(),U=W?function(e,t){return W(e,"toString",{configurable:!0,enumerable:!1,value:function(){return t},writable:!0})}:Accordion_T,q=Date.now,L=(o=0,a=0,function(){var e=q(),t=16-(e-a);if(a=e,t>0){if(++o>=800)return arguments[0]}else o=0;return U.apply(void 0,arguments)}),H=g(Object,"create"),J=Object.prototype.hasOwnProperty,K=Object.prototype.hasOwnProperty;function Accordion_u(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Accordion_u.prototype.clear=function(){this.__data__=H?H(null):{},this.size=0},Accordion_u.prototype.delete=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Accordion_u.prototype.get=function(e){var t=this.__data__;if(H){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return J.call(t,e)?t[e]:void 0},Accordion_u.prototype.has=function(e){var t=this.__data__;return H?void 0!==t[e]:K.call(t,e)},Accordion_u.prototype.set=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=H&&void 0===t?"__lodash_hash_undefined__":t,this};var Accordion_y=function(e,t){for(var r,n=e.length;n--;)if((r=e[n][0])===t||r!=r&&t!=t)return n;return -1},G=Array.prototype.splice;function Accordion_v(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Accordion_v.prototype.clear=function(){this.__data__=[],this.size=0},Accordion_v.prototype.delete=function(e){var t=this.__data__,r=Accordion_y(t,e);return!(r<0)&&(r==t.length-1?t.pop():G.call(t,r,1),--this.size,!0)},Accordion_v.prototype.get=function(e){var t=this.__data__,r=Accordion_y(t,e);return r<0?void 0:t[r][1]},Accordion_v.prototype.has=function(e){return Accordion_y(this.__data__,e)>-1},Accordion_v.prototype.set=function(e,t){var r=this.__data__,n=Accordion_y(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this};var Q=g(b,"Map"),vr=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e},Accordion_m=function(e,t){var r=e.__data__;return vr(t)?r["string"==typeof t?"string":"hash"]:r.map};function Accordion_(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function Accordion_$(e){var t=-1,r=null==e?0:e.length;for(this.__data__=new Accordion_;++t<r;)this.add(e[t])}Accordion_.prototype.clear=function(){this.size=0,this.__data__={hash:new Accordion_u,map:new(Q||Accordion_v),string:new Accordion_u}},Accordion_.prototype.delete=function(e){var t=Accordion_m(this,e).delete(e);return this.size-=t?1:0,t},Accordion_.prototype.get=function(e){return Accordion_m(this,e).get(e)},Accordion_.prototype.has=function(e){return Accordion_m(this,e).has(e)},Accordion_.prototype.set=function(e,t){var r=Accordion_m(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this},Accordion_$.prototype.add=Accordion_$.prototype.push=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},Accordion_$.prototype.has=function(e){return this.__data__.has(e)};var Wr=function(e,t,r,n){for(var o=e.length,a=r+(n?1:-1);n?a--:++a<o;)if(t(e[a],a,e))return a;return -1},Jr=function(e){return e!=e},Vr=function(e,t,r){for(var n=r-1,o=e.length;++n<o;)if(e[n]===t)return n;return -1},Accordion_L=function(e,t){return!!(null==e?0:e.length)&&(t==t?Vr(e,t,0):Wr(e,Jr,0))>-1},Accordion_R=function(e,t,r){for(var n=-1,o=null==e?0:e.length;++n<o;)if(r(t,e[n]))return!0;return!1},Accordion_z=function(e,t){return e.has(t)},ha=function(e,t){for(var r=-1,n=null==e?0:e.length,o=Array(n);++r<n;)o[r]=t(e[r],r,e);return o},Accordion_P=function(e){return rt(e)&&"[object Arguments]"==R(e)},X=Object.prototype,Y=X.hasOwnProperty,ee=X.propertyIsEnumerable,et=Accordion_P(function(){return arguments}())?Accordion_P:function(e){return rt(e)&&Y.call(e,"callee")&&!ee.call(e,"callee")},er=Array.isArray,en=w?w.isConcatSpreadable:void 0,Pa=function(e,t){for(var r=-1,n=t.length,o=e.length;++r<n;)e[o+r]=t[r];return e},ja=function(e){return er(e)||et(e)||!!(en&&e&&e[en])},eo=g(b,"Set"),Accordion_k=function(e){var t=-1,r=Array(e.size);return e.forEach(function(e){r[++t]=e}),r},ea=eo&&1/Accordion_k(new eo([,-0]))[1]==1/0?function(e){return new eo(e)}:function(){},rn=function(e,t,r,n){var o=-1,a=Accordion_L,i=!0,c=e.length,s=[],u=t.length;if(!c)return s;r&&(t=ha(t,function(e){return r(e)})),n?(a=Accordion_R,i=!1):t.length>=200&&(a=Accordion_z,i=!1,t=new Accordion_$(t));e:for(;++o<c;){var d=e[o],f=null==r?d:r(d);if(d=n||0!==d?d:0,i&&f==f){for(var p=u;p--;)if(t[p]===f)continue e;s.push(d)}else a(t,f,n)||s.push(d)}return s},an=function Accordion_U(e,t,r,n,o){var a=-1,i=e.length;for(r||(r=ja),o||(o=[]);++a<i;){var c=e[a];t>0&&r(c)?t>1?Accordion_U(c,t-1,r,n,o):Pa(o,c):n||(o[o.length]=c)}return o},Accordion_F=function(e,t,r){var n=-1,o=Accordion_L,a=e.length,i=!0,c=[],s=c;if(r)i=!1,o=Accordion_R;else if(a>=200){var u=t?null:ea(e);if(u)return Accordion_k(u);i=!1,o=Accordion_z,s=new Accordion_$}else s=t?[]:c;e:for(;++n<a;){var d=e[n],f=t?t(d):d;if(d=r||0!==d?d:0,i&&f==f){for(var p=s.length;p--;)if(s[p]===f)continue e;t&&s.push(f),c.push(d)}else o(s,f,r)||(s!==c&&s.push(f),c.push(d))}return c},on=function(e){var t;return null!=e&&"number"==typeof(t=e.length)&&t>-1&&t%1==0&&t<=9007199254740991&&!B(e)},un=function(e,t){for(var r=-1,n=null==e?0:e.length,o=0,a=[];++r<n;){var i=e[r];t(i,r,e)&&(a[o++]=i)}return a},_n=function(e,t,r){var n=e.length;if(n<2)return n?Accordion_F(e[0]):[];for(var o=-1,a=Array(n);++o<n;)for(var i=e[o],c=-1;++c<n;)c!=o&&(a[o]=rn(a[o]||i,e[c],t,r));return Accordion_F(an(a,1),t,r)},fn=function(e){return rt(e)&&on(e)},ei=L((c=i=function(e){return _n(un(e,fn))},s=S((s=void 0,c.length-1),0),function(){for(var e=arguments,t=-1,r=S(e.length-s,0),n=Array(r);++t<r;)n[t]=e[s+t];t=-1;for(var o=Array(s+1);++t<s;)o[t]=e[t];return o[s]=Accordion_T(n),ie(c,this,o)}),i+"");let ec=(0,m.g)(ei),Nn=e=>{let{style:t,className:r,items:n}=e,[o,a]=(0,_.useState)([]);return(0,u.jsx)("div",{className:f()(r),style:t,children:n.map((e,t)=>(0,u.jsxs)("div",{className:"cursor-pointer border-b-2 border-grey2 py-7 last-of-type:border-none sm:py-12",onClick:()=>a(e=>ec(e,[t])),children:[(0,u.jsxs)("div",{className:"flex items-center",children:[(0,u.jsx)("h4",{className:"flex-1 pr-[0.3rem] font-dinPro text-xl font-medium leading-tight tracking-tight text-textPrimary sm:pr-0 sm:text-xxl sm:leading-snug",children:e.title}),(0,u.jsx)(k.Z,{name:o.includes(t)?"chevronUp":"chevronDown",size:19})]}),o.includes(t)&&(0,u.jsx)(P.D,{children:e.content,className:"mt-6 max-w-[50rem] whitespace-pre-line font-gtAmericaMono sm:mt-9"})]},t))})},Faq_q=e=>{let{style:t,items:r,className:n,title:o}=e;return(0,u.jsxs)(p.Z,{style:t,className:f()("py-16 sm:py-32",n),children:[(0,u.jsx)("h2",{className:"mb-5 font-dinPro text-5xl font-medium leading-tight tracking-tight sm:mb-10 sm:text-7xl sm:font-normal",children:o}),(0,u.jsx)(Nn,{items:r})]})}},34969:function(e,t,r){r.d(t,{c:function(){return n},g:function(){return l}});var n="u">typeof globalThis?globalThis:"u">typeof window?window:"u">typeof global?global:"u">typeof self?self:{};function l(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}}}]);
//# sourceMappingURL=8744-a35893f673bfca7c.js.map