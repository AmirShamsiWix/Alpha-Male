(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3540],{42480:function(){},47107:function(e,t,r){"use strict";r.d(t,{ow:function(){return decryptData},pg:function(){return clearKeyCookie},q6:function(){return encryptData}});var n=r(13689),o=r(44155),a=r.n(o);let i="motivated:wizard_secret",getParentDomain=e=>{let t=e.split(".");return t.length>1?t.slice(-2).join("."):e},setKeyCookie=e=>{let t=getParentDomain(window.location.hostname),r="https:"===window.location.protocol?" Secure;":"";document.cookie="".concat(i,"=").concat(encodeURIComponent(e),"; Max-Age=").concat(2592e6,"; Domain=").concat(t,"; Path=/;").concat(r)},getKeyCookie=()=>{let e=(0,n.ej)(i);return e?decodeURIComponent(e):null},clearKeyCookie=()=>{let e=getParentDomain(window.location.hostname),t="https:"===window.location.protocol?" Secure; ":"";document.cookie="".concat(i,"=; Max-Age=0; Domain=").concat(e,"; Path=/;").concat(t)},generateKey=()=>a().lib.WordArray.random(24).toString(),getKey=()=>{let e=getKeyCookie();return e||setKeyCookie(e=generateKey()),e},encryptData=e=>a().AES.encrypt(e,getKey()).toString(),decryptData=e=>{let t=getKeyCookie();if(!t)return null;try{return a().AES.decrypt(e,t).toString(a().enc.Utf8)}catch(e){return console.log("failed to decrypt",e),null}}},32280:function(e,t,r){"use strict";r.d(t,{$:function(){return clearAllSurveyState},$_:function(){return saveSurveyState},$m:function(){return formatWizardItems},B9:function(){return P},Bv:function(){return getCurrentIndex},CL:function(){return h},Fz:function(){return validPageIndex},Gx:function(){return clearSurveyState},J9:function(){return restoreSurveyState},Jp:function(){return S},Jt:function(){return getPaypalSession},L_:function(){return getSavedSurveyPath},NA:function(){return bulkAddCollectedDataToQuestionnaire},NW:function(){return canGoBack},Oy:function(){return b},TX:function(){return runScript},V4:function(){return clearPaypalCallbackData},W1:function(){return addOrUpdateCustomerDocument},Wb:function(){return clearPaypalSession},cH:function(){return I},dG:function(){return v},eN:function(){return buildEditUrl},fR:function(){return savePaypalSession},hm:function(){return reportQuestionnaireMilestone},hr:function(){return isNullOrWhitespace},kc:function(){return w},lf:function(){return createNewSubscription},lq:function(){return saveQuestionnaireIfNeeded},oE:function(){return getPaypalCallbackData},oo:function(){return getUploadedDocuments},qT:function(){return convertQuestionObjectToCollectedDataItem},wc:function(){return savePaypalCallbackData},wr:function(){return clearWizardRouteAB}});var n=r(66926),o=r.n(n),a=r(74548),i=r.n(a),l=r(89017),u=r.n(l),c=r(38100),s=r.n(c),d=r(74578),g=r(47107),f=r(69875),p=r(13689),y=r(32136),m=r(25566);let v="registration",h="passwordless-registration",S="otp-verify-page",I="login",P="passwordless-login",w="/evaluation/ed";i().extend(u()),i().extend(s());let getWizardByWeight=(e,t,r)=>{let n=getWizardRouteAB({wizardRouteId:t,treatmentId:r});if(n){let t=e.find(e=>{var t;return(null===(t=e.wizard)||void 0===t?void 0:t.data.id)&&String(e.wizard.data.id)===n});if(t)return t}let o=e.reduce((e,t)=>e+(t.weight||0),0),a=Math.random()*o;for(let n of e){let e=n.weight||0;if(a<e){var i;return saveWizardRouteAB({wizardRouteId:t,treatmentId:r,surveyId:String(null===(i=n.wizard)||void 0===i?void 0:i.data.id)}),n}a-=e}return e[e.length-1]};function isNullOrWhitespace(e){return!e||0===e.trim().length}let formatWizardItems=(e,t)=>{let r=e.filter(e=>!!e.wizard);if(r.length<2)return r;let n=o()(r,e=>{var t,r,n,o,a,i,l;return(null===(a=e.wizard)||void 0===a?void 0:null===(o=a.data)||void 0===o?void 0:null===(n=o.attributes)||void 0===n?void 0:null===(r=n.treatment)||void 0===r?void 0:null===(t=r.data)||void 0===t?void 0:t.id)||(null===(l=e.wizard)||void 0===l?void 0:null===(i=l.data)||void 0===i?void 0:i.id)});return Object.entries(n).map(e=>{let[r,n]=e;return getWizardByWeight(n,t,r)})};async function addOrUpdateCustomerDocument(e,t,r){let n;try{n=await fetch("/api/user/survey",{method:"POST",body:JSON.stringify({queryId:"ADD_OR_UPDATE_CUSTOMER_DOCUMENT",documentId:e,value:t,attemptsCount:r})})}catch(e){console.error("addOrUpdateCustomerDocument error",e);return}if(n.ok){try{return await n.json()}catch(e){console.error("addOrUpdateCustomerDocument parse error",e)}return null}}function convertQuestionObjectToCollectedDataItem(e,t,r){var n;let o=(null==t?void 0:null===(n=t.getType)||void 0===n?void 0:n.call(t))||"other";if(e.includes("password"))return;let a=r;"none"==a&&(a=t.noneItemValue.text),Array.isArray(a)&&(a=a.filter(e=>"other"!=e).join(",")),t.comment&&(""!=a&&(a+=", "),a+="".concat(t.otherText,": ").concat(t.comment));let l=t.choices?t.choices.map(e=>e.text):[];if(t.hasOther&&l.push(t.otherText),t.hasNone&&l.push(t.noneItemValue.text),"string"!=typeof a&&(a=JSON.stringify(a)),"birthday"===e&&/^\d{8}$/.test(String(a))){let e=i().utc(String(a),"MMDDYYYY",!0);e.isValid()&&(a=e.hour(12).minute(0).second(0).millisecond(0).toISOString())}return"phoneNumber"===e&&(a=a.replace(/\D+/g,"")),{key:e,value:a,possibleOptions:l,questionText:t.title,questionType:o}}async function bulkAddCollectedDataToQuestionnaire(e,t,r){let n;try{n=await fetch("/api/user/survey",{method:"POST",body:JSON.stringify({queryId:"BULK_ADD_COLLECTED_DATA_TO_QUESTIONNAIRE",questionnaireId:e,data:t,magicToken:r})})}catch(e){return}if(n.ok){try{let e=await n.json();return e}catch(e){console.error("bulkAddCollectedDataToQuestionnaire parse error",e)}return null}}async function reportQuestionnaireMilestone(e,t,r){let n;try{n=await fetch("/api/user/survey",{method:"POST",body:JSON.stringify({queryId:"REPORT_QUESTIONNAIRE_MILESTONE",questionnaireId:e,milestoneId:t,magicToken:r})})}catch(e){return}if(n.ok){try{let e=await n.json();if(null==e?void 0:e.success)return e}catch(e){console.error("reportQuestionnaireMilestone parse error",e)}return null}}async function createNewSubscription(e,t,r,n){let o=await fetch("/api/user/survey",{method:"POST",body:JSON.stringify({queryId:"CREATE_NEW_SUBSCRIPTION",shippingFrequencyId:e,questionnaire:t,paymentDetails:r,magicToken:n})});if(!o.ok)throw Error(o.statusText);let a=await o.json();return a}let runScript=e=>{try{let t=Function(e);(0,f.X)(async()=>t())}catch(t){console.error("Script failed: ",e)}},getUploadedDocuments=async()=>{let e;try{e=await fetch("/api/user/me",{method:"POST",body:JSON.stringify({queryId:"GET_MY_UPLOADED"})})}catch(e){return}if(e.ok)try{return e.json()}catch(e){return console.error("getUploadedDocuments error",e),null}},_="checkout",b={survey:e=>{let{wizardId:t,wizardRouteId:r,hasMultipleSurveys:n}=e;return"".concat(y.xn).concat(r).concat(n&&void 0!==t?"/".concat(t):"")}},getCurrentIndex=e=>e.pages.indexOf(e.currentPage),getCheckoutIndex=e=>e.pages.indexOf(e.getPageByName(_)),isLocalStorageAvailable=()=>{try{let e="__storage_test__";return window.localStorage.setItem(e,e),window.localStorage.removeItem(e),!0}catch(e){return!1}},isSessionStorageAvailable=()=>{try{let e="__storage_test__";return sessionStorage.setItem(e,e),sessionStorage.removeItem(e),!0}catch(e){return!1}},k="motivated:uses_",O=[I,v,P,h,S],isPageSpecial=e=>{let{name:t,allowRegPages:r}=e;return!!(!r&&O.includes(t)||t.startsWith("kickout"))},C=d.z.object({currentIndex:d.z.number().int().nonnegative(),highestPage:d.z.number().int().gte(-1),timestamp:d.z.number().int().nonnegative(),lastMilestoneId:d.z.string().optional()}).and(d.z.union([d.z.object({checkoutComplete:d.z.boolean()}),d.z.object({data:d.z.record(d.z.any())})])),isFieldSaved=e=>!(e.endsWith("password")||["id","face"].includes(e)),saveWizardRouteAB=e=>{let{wizardRouteId:t,surveyId:r,treatmentId:n}=e;return!!isLocalStorageAvailable()&&(window.localStorage.setItem("".concat(k).concat(t,"_").concat(n),r),!0)},getWizardRouteAB=e=>{let{wizardRouteId:t,treatmentId:r}=e;return isLocalStorageAvailable()?window.localStorage.getItem("".concat(k).concat(t,"_").concat(r)):null},clearWizardRouteAB=e=>{let{wizardRouteId:t}=e;if(!isLocalStorageAvailable())return!1;for(let e in localStorage)e.startsWith("".concat(k).concat(t,"_"))&&localStorage.removeItem(e);return!0},saveSurveyState=e=>{let{survey:t,surveyId:r,highestPage:n,op:o,lastMilestoneId:a,wizardRouteId:i}=e;if(!isLocalStorageAvailable())return!1;if("1"===m.env.NEXT_PUBLIC_FLAG_DEBUG_WIZARD&&console.log("SAVE",{surveyId:r,highestPage:n}),"after_checkout"===o){let e={currentIndex:getCurrentIndex(t),timestamp:Date.now(),highestPage:n,checkoutComplete:!0,lastMilestoneId:a};return window.localStorage.setItem("".concat(y.Fz).concat(r),(0,g.q6)(JSON.stringify(e))),!0}saveLastSurveyPath(i);let l=Object.entries(t.data).reduce((e,t)=>{let[r,n]=t;return isFieldSaved(r)&&(e[r]=n),e},{}),u={data:l,currentIndex:getCurrentIndex(t),timestamp:Date.now(),highestPage:n};return window.localStorage.setItem("".concat(y.Fz).concat(r),(0,g.q6)(JSON.stringify(u))),!0},N="__all__",clearSurveyState=e=>{let{surveyId:t}=e;if(!isLocalStorageAvailable())return!1;if(clearLastSurveyPath(),t===N){for(let e in localStorage)(e.startsWith(y.Fz)||e.startsWith(k))&&localStorage.removeItem(e);return!0}return window.localStorage.removeItem("".concat(y.Fz).concat(t)),!0},clearAllSurveyState=()=>clearSurveyState({surveyId:N}),A=[{name:"selected-category",query:"categoryQuestionName",setName:"categoryId"},{name:"selected-drug",query:"productQuestionName",setName:"productId"},{name:"selected-dosage",query:"dosageQuestionName",setName:"dosageId"},{name:"selected-quantity",query:"quantityQuestionName",setName:"quantityId"}],restoreProductData=e=>{let{survey:t}=e,r=t.getAllQuestions();A.forEach(e=>{let{name:n,query:o,setName:a}=e,i=t.data[n];if(i){let e=null==i?void 0:i.value,t=r.filter(e=>e.getPropertyValue(o)===n);t.forEach(t=>{t.setPropertyValue(a,e)})}})},restoreSurveyState=e=>{let{survey:t,surveyId:r,currentPageIndex:n,updateRefs:o}=e;if(!isLocalStorageAvailable())return!1;"1"===m.env.NEXT_PUBLIC_FLAG_DEBUG_WIZARD&&console.log("RESTORE",{surveyId:r,currentPageIndex:n});let a="".concat(y.Fz).concat(r),i=window.localStorage.getItem(a);if(!i)return!1;try{let e=(0,g.ow)(i);if(null===e)return!1;let r=JSON.parse(e),l=C.parse(r);if(Date.now()>l.timestamp+2592e6)return window.localStorage.removeItem(a),!1;"data"in l&&(t.data=l.data),restoreProductData({survey:t});let u="checkoutComplete"in l&&l.checkoutComplete,c="number"!=typeof n;if(c&&!u)return t.currentPage=l.highestPage>0?t.pages[l.highestPage]:t.pages[l.currentIndex],null==o||o({newHighest:l.highestPage,newCheckoutComplete:u}),!0;"number"!=typeof n&&(n=l.highestPage>0?l.highestPage:l.currentIndex),null==o||o({newHighest:l.highestPage,newCheckoutComplete:u});let s=validPageIndex({survey:t,pageIndex:n,highestPage:l.highestPage,checkoutComplete:u});return t.currentPage=t.pages[s],{savedHighestPage:l.highestPage,savedPageIndex:l.currentIndex,validPageIndex:s,checkoutComplete:u}}catch(e){return console.error("error while restoring survey state",e),!1}},validPageIndex=e=>{let{survey:t,pageIndex:r,highestPage:n,checkoutComplete:o}=e,a=r;a>=t.pages.length&&(a=t.pages.length-1);let i=getCheckoutIndex(t),l=!!o&&i>-1&&i,doIndexCheck=e=>{let r=t.pages[e],i="number"!=typeof n||"number"==typeof n&&e<=n;if(r.isVisible&&!isPageSpecial({name:r.name,allowRegPages:e===a})&&i)return"1"===m.env.NEXT_PUBLIC_FLAG_DEBUG_WIZARD&&console.log("validPageIndex returned",{pageName:r.name,highestOk:i,highestPage:n,validIndex:e,checkoutComplete:o,vard_loggedin:t.getVariable("vard_loggedin")}),e};for(let e=a;e>-1&&(!1===l||!(e<=l));e--){let t=doIndexCheck(e);if(void 0!==t)return t}if(!1!==l)for(let e=l+1;e<t.pages.length;e++){let t=doIndexCheck(e);if(void 0!==t)return t}return t.pages.indexOf(t.currentPage)},canGoBack=e=>{let{survey:t,checkoutComplete:r}=e;if(0===t.currentPageNo)return!1;let n=t.visiblePages[t.currentPageNo-1];return n.name!==_},buildEditUrl=e=>{let t=new URL(window.location.href);return t.searchParams.set("p",String(e)),t.toString().replace(t.origin,"")},prepareQuestionnaire=e=>{let{survey:t,surveyData:r,wizardId:n,wizardRouteId:o,page:a,lastMilestoneId:i}=e,l=(0,p.ej)(p.WQ);return{wizardId:n,id:"1",data:Object.keys(r).map(e=>{let n=t.getQuestionByName(e);if(null!=n)return convertQuestionObjectToCollectedDataItem(e,n,r[e])}).filter(e=>null!=e),metadataAttributes:[{key:"wizardId",value:n},{key:"wizardRouteId",value:o},{key:"lastMilestoneId",value:i||""},{key:"currentPage",value:a?a.name:""},{key:"landingPage",value:l?atob(l):""}]}};async function saveQuestionnaire(e,t){let r=await fetch("/api/user/survey",{method:"POST",body:JSON.stringify({queryId:"SAVE_QUESTIONNAIRE",questionnaire:e,magicToken:t})});if(!r.ok)return null;try{let e=await r.json();return e}catch(e){return console.error("saveQuestionnaire error",e),null}}let saveQuestionnaireIfNeeded=async e=>{let{survey:t,surveyData:r,wizardRouteId:n,wizardId:o,page:a,lastMilestoneId:i,magicToken:l}=e,u=a.getPropertyValue("saveQuestionnaire");if(!u)return;let c=prepareQuestionnaire({survey:t,surveyData:r,wizardId:o,wizardRouteId:n,page:a,lastMilestoneId:i});return saveQuestionnaire(c,l)},setSessionStorageItem=(e,t)=>{isSessionStorageAvailable()&&sessionStorage.setItem(e,JSON.stringify(t))},clearSessionStorageItem=e=>{isSessionStorageAvailable()&&sessionStorage.removeItem(e)},getSessionStorageItem=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!isSessionStorageAvailable())return null;let r=sessionStorage.getItem(e);if(!r)return null;try{let n=JSON.parse(r);return t&&sessionStorage.removeItem(e),n}catch(e){return null}},T="motivated:paypal_session",D="motivated:paypal_cb_data",savePaypalSession=e=>{setSessionStorageItem(T,e)},getPaypalSession=()=>getSessionStorageItem(T),clearPaypalSession=()=>{clearSessionStorageItem(T)},savePaypalCallbackData=e=>{setSessionStorageItem(D,e)},getPaypalCallbackData=()=>getSessionStorageItem(D),clearPaypalCallbackData=()=>{clearSessionStorageItem(D)},saveLastSurveyPath=e=>{!function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:400;document.cookie="".concat(e,"=").concat(t,"; max-age=").concat(Math.round(86400*r),"; path=/")}(y.c9,e)},clearLastSurveyPath=()=>{var e;return e=y.c9,void(document.cookie="".concat(e,"=; max-age=0; path=/"))},getSavedSurveyPath=()=>{if(!isLocalStorageAvailable())return!1;for(let e in localStorage)if(e.startsWith(y.Fz)){let t=e.match(/_(.*?)_/);return t?t[1]:null}return null}},32136:function(e,t,r){"use strict";r.d(t,{Fz:function(){return i},Q:function(){return a},c9:function(){return n},rH:function(){return buildSurveyUrl},xn:function(){return o},y9:function(){return l}});let n="motivated:last_survey_id",o="/evaluation/",a="".concat(o,"ed"),i="motivated:survey_",l="token",buildSurveyUrl=e=>"".concat(o).concat(e)},13689:function(e,t,r){"use strict";r.d(t,{Ai:function(){return getProfile},BM:function(){return loginOtpUser},DH:function(){return saveReferrer},E5:function(){return saveLandingPage},Gd:function(){return registerOtpUser},HQ:function(){return saveUtmSource},NH:function(){return o},WQ:function(){return a},a$:function(){return registerUser},ej:function(){return getCookie},pH:function(){return loginUser},rn:function(){return setUserIdentify},t1:function(){return requestOtp}});var n=r(85359);r(32112);let o="motivated:referrer",a="motivated:landing_page",i="motivated:utm_source";function getCookie(e){var t;if("undefined"==typeof document||!e)return null;let r=null===(t=document.cookie.split(";").find(t=>t.trim().startsWith("".concat(e,"="))))||void 0===t?void 0:t.split("=").filter(Boolean);return r&&r.length>2?r.slice(1).join("="):null==r?void 0:r.slice(1).join()}function setUserIdentify(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,r=getCookie(a),i=getCookie(o);console.log("Motivated setIdentify customerId: "+e,{customerId:e,landingPage:r?atob(r):"",referrer:i?atob(i):""}),n.nT.setIdentify(e);let l=window;l.motivatedCustomerId=e,t&&(l.motivatedEmail=t)}function saveReferrer(e){"undefined"==typeof document||getCookie(o)||(document.cookie="".concat(o,"=").concat(btoa(e||"unknown"),"; path=/"))}function saveLandingPage(e){"undefined"==typeof document||getCookie(a)||(document.cookie="".concat(a,"=").concat(btoa(e||"unknown"),"; path=/"))}function saveUtmSource(e){if("undefined"==typeof document)return;if(!e)return"";let t=new URLSearchParams(e),r=t.get("utm_source");!r||getCookie(i)||(document.cookie="".concat(i,"=").concat(r,"; path=/"))}async function getProfile(e){let t,r=!(arguments.length>1)||void 0===arguments[1]||arguments[1];try{var n;let r=new URL("/api/user/profile",(n="https://account.motivated.com",void 0!==n)?n:"").toString();t=await fetch(r,{credentials:"include",signal:e})}catch(e){if("AbortError"===e.name){console.debug("Aborted fetching profile");return}console.error("Failed to fetch profile",e);return}if(!t.ok){401===t.status?r&&console.error("User is not logged in, status: "+t.status):console.debug("Failed to fetch profile, status: "+t.status);return}try{let e=await t.json();if((null==e?void 0:e.email)&&(null==e?void 0:e.customerId))return e}catch(e){console.error("Failed to parse profile json",e)}return console.error("User authenticated but no profile returned"),null}async function loginUser(e){let{name:t,password:r}=e;try{let{csrfToken:e}=await (await fetch("".concat("https://account.motivated.com","/api/auth/csrf"),{credentials:"include"})).json(),n=await fetch("".concat("https://account.motivated.com","/api/auth/callback/dashboard-login"),{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({csrfToken:e,email:t,password:r,json:!0,callbackUrl:"/api/auth/providers"})});if(!n.ok)return console.error("Login response is not ok, user: "+t),null;return await getProfile()}catch(e){return console.error("Failed to login user with email: "+t,e),null}}async function registerUser(e){let{name:t,password:r,landingPage:n,referrer:o}=e;try{let e=await fetch("/api/user/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t,password:r,landingPage:n,referrer:o})});if(!e.ok)return null;return await e.json()}catch(e){return console.error("registerUser error",e),null}}async function registerOtpUser(e){let{name:t,landingPage:r,referrer:n}=e;try{let e=await fetch("/api/user/register-otp",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t,landingPage:r,referrer:n})});if(!e.ok)return null;return await e.json()}catch(e){return console.error("registerUser error",e),null}}async function requestOtp(e){try{let t=await fetch("/api/user/request-otp",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(!t.ok)return null;return await t.json()}catch(e){return console.error("requestOtp error",e),null}}async function loginOtpUser(e){try{let t=await fetch("/api/user/login-otp",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(!t.ok)return null;return await t.json()}catch(e){return console.error("loginOtpUser error",e),null}}},69875:function(e,t,r){"use strict";r.d(t,{X:function(){return loadLazyScript}});let n="undefined"!=typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(e){e()},loadLazyScript=e=>{"undefined"!=typeof document&&("complete"===document.readyState?e():window.addEventListener("load",()=>{n(()=>e())}))}},85359:function(e,t,r){"use strict";r.d(t,{$T:function(){return p},Bx:function(){return g},Io:function(){return d},Qz:function(){return s},cH:function(){return c},mh:function(){return f},nT:function(){return y}});var n=r(97131),o=r.n(n),a=r(32112),i=r(25566);let l="true"===i.env.MIXPANEL_DEBUG,u="https://mp.motivated.com	",c="Click",s="Page View",d="Logged in",g="Login failed",f="Registration failed",p="Question validation error";o().init("d68ddde9a654e883245111ca9563b744",{debug:l,persistence:"localStorage",...u&&{api_host:u}});let y={track:function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};try{var r,n;let i=window.location.href;switch(!0){case e===c:(null==t?void 0:t.pageData)&&"object"==typeof t.pageData&&!(null===(n=t.pageData)||void 0===n?void 0:n.url)&&(t.pageData.url=i);break;case e===s:t.url||(t.url=i)}t.buildVersion="20240715-4b23a151",t.datadogSessionId=null===a.v||void 0===a.v?void 0:null===(r=a.v.getInternalContext())||void 0===r?void 0:r.session_id,o().track(e,t),null!=a.v&&(t.mixpanelDistinctId=o().get_distinct_id(),a.v.addAction("Report Mixpanel ".concat(e," event"),t))}catch(e){console.error(e)}},trackLinks:(e,t)=>{try{o().track_links(e,t,{referrer:document.referrer})}catch(e){console.error(e)}},setIdentify:e=>{try{console.log("Mixpanel setIdentify customerId: ",e),o().identify(e)}catch(e){console.error(e)}},getDistinctId:()=>{try{return o().get_distinct_id()}catch(e){return console.error(e),null}},reset:()=>{try{o().reset()}catch(e){console.error(e)}}}}}]);
//# sourceMappingURL=3540-51be63da57ee6a2b.js.map