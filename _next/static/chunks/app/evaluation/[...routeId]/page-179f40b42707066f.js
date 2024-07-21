(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5927],{40826:function(e,t,r){Promise.resolve().then(r.t.bind(r,19167,23)),Promise.resolve().then(r.bind(r,22679)),Promise.resolve().then(r.bind(r,98866)),Promise.resolve().then(r.bind(r,77822)),Promise.resolve().then(r.bind(r,86286)),Promise.resolve().then(r.t.bind(r,49095,23))},22679:function(e,t,r){"use strict";r.r(t),r.d(t,{RegisterPageView:function(){return RegisterPageView}});var a=r(2265),n=r(85359),l=r(67646);let RegisterPageView=e=>{let{trackingAttributes:t}=e,r=(0,l.$)(()=>{n.nT.track(n.Qz,{name:t.name,...t.customAttributes})});return a.useEffect(()=>{r()},[r]),null}},38336:function(e,t,r){"use strict";r.d(t,{H:function(){return useCheckoutState},l:function(){return CheckoutSecondProvider}});var a=r(57437),n=r(2265);let reducer=(e,t)=>{let{id:r,action:a,data:n={}}=t;switch(!0){case"payments-v2"===r:switch(!0){case"RESET"===a:if("default"===e.paymentState.state&&void 0===e.paymentState.errorMessage)return e;return{...e,paymentState:{state:"default",errorMessage:void 0}};case"SET_BUSY"===a:if("busy"===e.paymentState.state)return e;return{...e,paymentState:{state:"busy",errorMessage:void 0}};case"SET_ERROR"===a:{var l;let t=null!==(l=null==n?void 0:n.errorMessage)&&void 0!==l?l:"Error";if("error"===e.paymentState.state&&e.paymentState.errorMessage===t)return e;return{...e,paymentState:{state:"error",errorMessage:t}}}}case"cashier-token"===r:return{...e,cashierToken:n};case"cashier-transaction-id"===r:return{...e,cashierTransactionId:n};case"selected-frequency"===r:return{...e,selectedFrequency:n};case"wallet-enabled"===r:return{...e,isWalletEnabled:n};case"wallet-state"===r:return{...e,walletState:n};case"paypal-state"===r:return{...e,paypalState:n}}return e},l={paymentState:{state:"default"},cashierToken:null,cashierTransactionId:null,isWalletEnabled:!0,selectedFrequency:null,walletState:{state:"ready"},paypalState:{state:"ready"}},i=n.createContext({...l,dispatchCheckoutState:e=>{console.log("error: default CheckoutState dispatch")}}),CheckoutSecondProvider=e=>{let{children:t}=e,[{paymentState:r,cashierToken:s,cashierTransactionId:o,isWalletEnabled:u,selectedFrequency:d,walletState:c,paypalState:v},m]=n.useReducer(reducer,l);return(0,a.jsx)(i.Provider,{value:{paymentState:r,cashierToken:s,cashierTransactionId:o,isWalletEnabled:u,dispatchCheckoutState:m,selectedFrequency:d,walletState:c,paypalState:v},children:t})},useCheckoutState=()=>n.useContext(i)},98866:function(e,t,r){"use strict";r.r(t),r.d(t,{WizardContextWrapper:function(){return WizardContextWrapper}});var a=r(57437);r(2265);var n=r(38336);async function verifySsn(e){let t,{signal:r,ssn:a}=e,n="VERIFY_SSN";try{t=await fetch("/api/user/checkout",{method:"POST",body:JSON.stringify({queryId:n,ssn:a}),signal:r})}catch(e){if((null==e?void 0:e.name)==="AbortError")return{aborted:!0};return{error:(null==e?void 0:e.message)||"".concat(n," request failed")}}if(!t.ok)return{error:"Server error [".concat(t.status,"] ").concat(t.statusText)};try{let e=await t.json();return e}catch(e){return{error:"Failed to parse response from ".concat(n," request")}}}var l=r(85359),i=r(97204);let WizardContextWrapper=e=>{let{children:t}=e;return(0,a.jsx)(i.Ue,{defaultValue:{otpInput:{state:"default"},submitButton:{state:"default"},surveyPage:{back:()=>console.log("error: page back function not set")},wizardDesign:"new-wizard"},mixpanel:l.nT,actions:{verifySsn:async e=>{let t=await verifySsn({ssn:e});return null!=t&&!!t.success}},children:(0,a.jsx)(n.l,{children:t})})}},77822:function(e,t,r){"use strict";r.r(t),r.d(t,{WizardFooter:function(){return WizardFooter}});var a=r(57437);r(2265),r(83299);var n=r(86889);r(61640),r(17488),r(79116),r(61396);var l=r(97204),i=r(24033),s=r(32136);let WizardFooter=e=>{let{className:t,...r}=e,{components:{userProfile:o}}=(0,l.UY)(),u=(0,i.useSearchParams)().get(s.y9);return o||u?null:(0,a.jsx)("div",{className:t,children:(0,a.jsx)(n.default,{...r})})}},86286:function(e,t,r){"use strict";r.r(t),r.d(t,{WizardSelector:function(){return WizardSelector}});var a=r(57437),n=r(2265),l=r(24033),i=r(61640),s=r(17488),o=r(79116),layouts_BackHeader=e=>{let{onBackClick:t,isBackHidden:r}=e;return(0,a.jsx)(i.h,{container:!0,left:r?void 0:(0,a.jsxs)("button",{onClick:t,className:"flex items-center","aria-label":"back",children:[(0,a.jsx)(s.Z,{className:"lg:mr-2",name:"arrowLeft",size:14}),(0,a.jsx)("span",{className:"hidden font-dinPro text-base font-medium leading-normal text-textPrimary lg:block",children:"Back"})]}),center:(0,a.jsx)(o.T,{className:"h-5 w-auto"})})},u=r(82687),d=r(98289),c=r(81379),v=r(38183);let mapWizardRouteToTreatmentOption=e=>{var t,r,a,n,l,i,s,o,u;return{value:null!==(l=null===(r=e.wizard)||void 0===r?void 0:null===(t=r.data)||void 0===t?void 0:t.id)&&void 0!==l?l:-1,label:null!==(i=e.displayName)&&void 0!==i?i:"",title:null!==(s=e.displayName)&&void 0!==s?s:"",image:e.image?{url:null!==(o=(0,v.LB)(null===(a=e.image.desktop)||void 0===a?void 0:a.data.attributes.url))&&void 0!==o?o:"",alt:null!==(u=null===(n=e.image.desktop)||void 0===n?void 0:n.data.attributes.alternativeText)&&void 0!==u?u:""}:void 0}};var layouts_WizardSelect=e=>{let{className:t,options:r,onSubmit:l}=e,[i,s]=(0,n.useState)(void 0),o=(0,n.useMemo)(()=>{let e=r.find(e=>{var t,r;return(null===(t=e.wizard)||void 0===t?void 0:t.data.id)===(null==i?void 0:null===(r=i.wizard)||void 0===r?void 0:r.data.id)});return e?mapWizardRouteToTreatmentOption(e):void 0},[i,r]);return(0,a.jsx)("div",{className:(0,u.cn)(t),children:(0,a.jsxs)(d.Z,{className:"flex flex-col bg-white px-4 py-8 sm:py-16",children:[(0,a.jsx)("div",{className:"mb-14 flex flex-col items-center self-center sm:mb-8 sm:max-w-[30rem]",children:(0,a.jsx)("h2",{className:"mb-4 text-center font-dinPro text-xxxl font-medium leading-none text-black sm:text-3xl",children:"Get rid of what’s holding you back"})}),(0,a.jsx)(c.Z,{className:"mb-8",value:o,onChange:e=>{let t=r.find(t=>{var r;return(null===(r=t.wizard)||void 0===r?void 0:r.data.id)===(null==e?void 0:e.value)});s(t),t&&l(t)},options:r.map(mapWizardRouteToTreatmentOption)})]})})},m=r(32280),f=r(85359),h=r(28578),p=r(97204),x=r(54330),y=r(28811),b=r.n(y),g=r(89057),k=r(67646),w=r(38336),S=r(25566);let WalletProcessing=()=>(0,a.jsxs)("div",{className:"fixed inset-0 z-[10500] flex flex-col bg-white",children:[(0,a.jsx)(layouts_BackHeader,{isBackHidden:!0,onBackClick:()=>{}}),(0,a.jsxs)("div",{className:"flex grow flex-col items-center justify-center",children:[(0,a.jsx)(g.c,{height:14}),(0,a.jsx)("div",{className:"mt-6 font-helvetica text-sm text-black opacity-50",children:"Processing your payment..."})]})]}),z=b()(async()=>{let{WizardDynamic:e}=await Promise.all([r.e(9224),r.e(7513),r.e(551),r.e(5239),r.e(8144),r.e(1866),r.e(8760),r.e(1666),r.e(6335),r.e(316),r.e(8475),r.e(7423),r.e(788)]).then(r.bind(r,50788));return{default:e}},{loadableGenerated:{webpack:()=>[50788]},ssr:!1}),WizardSelector=e=>{var t,r,i,s;let[o,u]=n.useState(!1),{items:d,wizardRouteId:c,selectedWizardId:v}=e,y=(0,l.useRouter)(),[b,g]=(0,h.v1)("p",h.U.withOptions({history:"replace",shallow:!1})),{isBackEnabled:j,surveyPage:N}=(0,p.Wo)(),{walletState:C,paypalState:P}=(0,w.H)(),W=Number.isNaN(Number(v))?-1:Number(v),[T,E]=n.useMemo(()=>{let e=(0,m.$m)(d,c),t=e.length>1;return[e,t]},[d,c]),[_,R]=n.useState(()=>{if(1===T.length)return T[0];if(W>=0){let e=T.find(e=>{var t;return(null===(t=e.wizard)||void 0===t?void 0:t.data.id)===W});if(e)return e}return null}),B=n.useMemo(()=>{var e,t,r;return null!==(r=null==_?void 0:null===(t=_.wizard)||void 0===t?void 0:null===(e=t.data.attributes.checkoutVersion)||void 0===e?void 0:e.data)&&void 0!==r?r:null},[_]),I=n.useMemo(()=>{var e,t;return null!==(t=null==_?void 0:null===(e=_.wizard)||void 0===e?void 0:e.data.attributes.surveyJsConfiguration)&&void 0!==t?t:null},[_]),[O,M]=n.useMemo(()=>{var e,t,r,a,n,l;return[null!==(n=null==_?void 0:null===(e=_.wizard)||void 0===e?void 0:e.data.id)&&void 0!==n?n:null,null!==(l=null==_?void 0:null===(a=_.wizard)||void 0===a?void 0:null===(r=a.data.attributes.treatment)||void 0===r?void 0:null===(t=r.data)||void 0===t?void 0:t.id)&&void 0!==l?l:null]},[_]),F=(0,k.$)(()=>{f.nT.track("On Click Back Button",{wizardId:O,wizardRouteId:c}),N.back()});"1"===S.env.NEXT_PUBLIC_FLAG_DEBUG_WIZARD&&console.log("[wizard-content] render",{wizardId:O,wizardRouteId:c});let H=!!I&&!!O,V=null!==(s=null==_?void 0:null===(i=_.wizard)||void 0===i?void 0:null===(r=i.data)||void 0===r?void 0:null===(t=r.attributes)||void 0===t?void 0:t.loadingAnimationId)&&void 0!==s?s:"";return H||null===b||g(null),n.useEffect(()=>{if(!E&&W>=0||E&&W>=0&&null===O){y.push(m.Oy.survey({wizardRouteId:c,hasMultipleSurveys:E}));return}},[W,E,y,c,O]),n.useEffect(()=>{V&&u(!0)},[V]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(layouts_BackHeader,{isBackHidden:!I||H&&!j,onBackClick:F}),(0,a.jsxs)("div",{className:"wc-relative",children:["processing"===C.state||"cb-processing"===P.state?(0,a.jsx)(WalletProcessing,{}):null,!H&&(0,a.jsx)(layouts_WizardSelect,{onSubmit:e=>{var t;f.nT.track("On Treatment Select",{wizardId:O,wizardRouteId:c}),R(e);let r=null===(t=e.wizard)||void 0===t?void 0:t.data.id;void 0!==r&&r>=0&&y.push(m.Oy.survey({wizardId:r,wizardRouteId:c,hasMultipleSurveys:E}))},options:T}),H&&(0,a.jsxs)("div",{className:"wc-relative",children:[(0,a.jsx)(z,{wizardRouteId:c,wizardId:O,treatmentId:M,surveyConfig:I,hasMultipleSurveys:E,checkoutPageVersion:B}),o?(0,a.jsx)(x.Fm,{animationId:V,onComplete:()=>{console.log("onComplete animation"),u(!1)}}):null]})]})]})}},67646:function(e,t,r){"use strict";r.d(t,{$:function(){return useEventCallback}});var a=r(2265);function useEventCallback(e){let t=a.useRef(e);return a.useLayoutEffect(()=>{t.current=e}),a.useCallback(function(){for(var e=arguments.length,r=Array(e),a=0;a<e;a++)r[a]=arguments[a];return(0,t.current)(...r)},[])}},49095:function(){}},function(e){e.O(0,[6603,4658,7384,8601,1328,6097,3540,5235,2971,2472,1744],function(){return e(e.s=40826)}),_N_E=e.O()}]);
//# sourceMappingURL=page-179f40b42707066f.js.map