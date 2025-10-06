(function(){const g=document.createElement("link").relList;if(g&&g.supports&&g.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))h(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&h(n)}).observe(document,{childList:!0,subtree:!0});function C(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function h(s){if(s.ep)return;s.ep=!0;const r=C(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 *//**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 *//**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 *//**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 *//**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */var M;(function(e){e.OUTCOME_UNSPECIFIED="OUTCOME_UNSPECIFIED",e.OUTCOME_OK="OUTCOME_OK",e.OUTCOME_FAILED="OUTCOME_FAILED",e.OUTCOME_DEADLINE_EXCEEDED="OUTCOME_DEADLINE_EXCEEDED"})(M||(M={}));var A;(function(e){e.LANGUAGE_UNSPECIFIED="LANGUAGE_UNSPECIFIED",e.PYTHON="PYTHON"})(A||(A={}));var R;(function(e){e.TYPE_UNSPECIFIED="TYPE_UNSPECIFIED",e.STRING="STRING",e.NUMBER="NUMBER",e.INTEGER="INTEGER",e.BOOLEAN="BOOLEAN",e.ARRAY="ARRAY",e.OBJECT="OBJECT",e.NULL="NULL"})(R||(R={}));var P;(function(e){e.HARM_CATEGORY_UNSPECIFIED="HARM_CATEGORY_UNSPECIFIED",e.HARM_CATEGORY_HATE_SPEECH="HARM_CATEGORY_HATE_SPEECH",e.HARM_CATEGORY_DANGEROUS_CONTENT="HARM_CATEGORY_DANGEROUS_CONTENT",e.HARM_CATEGORY_HARASSMENT="HARM_CATEGORY_HARASSMENT",e.HARM_CATEGORY_SEXUALLY_EXPLICIT="HARM_CATEGORY_SEXUALLY_EXPLICIT",e.HARM_CATEGORY_CIVIC_INTEGRITY="HARM_CATEGORY_CIVIC_INTEGRITY",e.HARM_CATEGORY_IMAGE_HATE="HARM_CATEGORY_IMAGE_HATE",e.HARM_CATEGORY_IMAGE_DANGEROUS_CONTENT="HARM_CATEGORY_IMAGE_DANGEROUS_CONTENT",e.HARM_CATEGORY_IMAGE_HARASSMENT="HARM_CATEGORY_IMAGE_HARASSMENT",e.HARM_CATEGORY_IMAGE_SEXUALLY_EXPLICIT="HARM_CATEGORY_IMAGE_SEXUALLY_EXPLICIT"})(P||(P={}));var x;(function(e){e.HARM_BLOCK_METHOD_UNSPECIFIED="HARM_BLOCK_METHOD_UNSPECIFIED",e.SEVERITY="SEVERITY",e.PROBABILITY="PROBABILITY"})(x||(x={}));var D;(function(e){e.HARM_BLOCK_THRESHOLD_UNSPECIFIED="HARM_BLOCK_THRESHOLD_UNSPECIFIED",e.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",e.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",e.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",e.BLOCK_NONE="BLOCK_NONE",e.OFF="OFF"})(D||(D={}));var N;(function(e){e.MODE_UNSPECIFIED="MODE_UNSPECIFIED",e.MODE_DYNAMIC="MODE_DYNAMIC"})(N||(N={}));var w;(function(e){e.AUTH_TYPE_UNSPECIFIED="AUTH_TYPE_UNSPECIFIED",e.NO_AUTH="NO_AUTH",e.API_KEY_AUTH="API_KEY_AUTH",e.HTTP_BASIC_AUTH="HTTP_BASIC_AUTH",e.GOOGLE_SERVICE_ACCOUNT_AUTH="GOOGLE_SERVICE_ACCOUNT_AUTH",e.OAUTH="OAUTH",e.OIDC_AUTH="OIDC_AUTH"})(w||(w={}));var k;(function(e){e.API_SPEC_UNSPECIFIED="API_SPEC_UNSPECIFIED",e.SIMPLE_SEARCH="SIMPLE_SEARCH",e.ELASTIC_SEARCH="ELASTIC_SEARCH"})(k||(k={}));var U;(function(e){e.URL_RETRIEVAL_STATUS_UNSPECIFIED="URL_RETRIEVAL_STATUS_UNSPECIFIED",e.URL_RETRIEVAL_STATUS_SUCCESS="URL_RETRIEVAL_STATUS_SUCCESS",e.URL_RETRIEVAL_STATUS_ERROR="URL_RETRIEVAL_STATUS_ERROR",e.URL_RETRIEVAL_STATUS_PAYWALL="URL_RETRIEVAL_STATUS_PAYWALL",e.URL_RETRIEVAL_STATUS_UNSAFE="URL_RETRIEVAL_STATUS_UNSAFE"})(U||(U={}));var V;(function(e){e.FINISH_REASON_UNSPECIFIED="FINISH_REASON_UNSPECIFIED",e.STOP="STOP",e.MAX_TOKENS="MAX_TOKENS",e.SAFETY="SAFETY",e.RECITATION="RECITATION",e.LANGUAGE="LANGUAGE",e.OTHER="OTHER",e.BLOCKLIST="BLOCKLIST",e.PROHIBITED_CONTENT="PROHIBITED_CONTENT",e.SPII="SPII",e.MALFORMED_FUNCTION_CALL="MALFORMED_FUNCTION_CALL",e.IMAGE_SAFETY="IMAGE_SAFETY",e.UNEXPECTED_TOOL_CALL="UNEXPECTED_TOOL_CALL"})(V||(V={}));var L;(function(e){e.HARM_PROBABILITY_UNSPECIFIED="HARM_PROBABILITY_UNSPECIFIED",e.NEGLIGIBLE="NEGLIGIBLE",e.LOW="LOW",e.MEDIUM="MEDIUM",e.HIGH="HIGH"})(L||(L={}));var F;(function(e){e.HARM_SEVERITY_UNSPECIFIED="HARM_SEVERITY_UNSPECIFIED",e.HARM_SEVERITY_NEGLIGIBLE="HARM_SEVERITY_NEGLIGIBLE",e.HARM_SEVERITY_LOW="HARM_SEVERITY_LOW",e.HARM_SEVERITY_MEDIUM="HARM_SEVERITY_MEDIUM",e.HARM_SEVERITY_HIGH="HARM_SEVERITY_HIGH"})(F||(F={}));var q;(function(e){e.BLOCKED_REASON_UNSPECIFIED="BLOCKED_REASON_UNSPECIFIED",e.SAFETY="SAFETY",e.OTHER="OTHER",e.BLOCKLIST="BLOCKLIST",e.PROHIBITED_CONTENT="PROHIBITED_CONTENT",e.IMAGE_SAFETY="IMAGE_SAFETY"})(q||(q={}));var G;(function(e){e.TRAFFIC_TYPE_UNSPECIFIED="TRAFFIC_TYPE_UNSPECIFIED",e.ON_DEMAND="ON_DEMAND",e.PROVISIONED_THROUGHPUT="PROVISIONED_THROUGHPUT"})(G||(G={}));var B;(function(e){e.MODALITY_UNSPECIFIED="MODALITY_UNSPECIFIED",e.TEXT="TEXT",e.IMAGE="IMAGE",e.AUDIO="AUDIO"})(B||(B={}));var H;(function(e){e.MEDIA_RESOLUTION_UNSPECIFIED="MEDIA_RESOLUTION_UNSPECIFIED",e.MEDIA_RESOLUTION_LOW="MEDIA_RESOLUTION_LOW",e.MEDIA_RESOLUTION_MEDIUM="MEDIA_RESOLUTION_MEDIUM",e.MEDIA_RESOLUTION_HIGH="MEDIA_RESOLUTION_HIGH"})(H||(H={}));var J;(function(e){e.JOB_STATE_UNSPECIFIED="JOB_STATE_UNSPECIFIED",e.JOB_STATE_QUEUED="JOB_STATE_QUEUED",e.JOB_STATE_PENDING="JOB_STATE_PENDING",e.JOB_STATE_RUNNING="JOB_STATE_RUNNING",e.JOB_STATE_SUCCEEDED="JOB_STATE_SUCCEEDED",e.JOB_STATE_FAILED="JOB_STATE_FAILED",e.JOB_STATE_CANCELLING="JOB_STATE_CANCELLING",e.JOB_STATE_CANCELLED="JOB_STATE_CANCELLED",e.JOB_STATE_PAUSED="JOB_STATE_PAUSED",e.JOB_STATE_EXPIRED="JOB_STATE_EXPIRED",e.JOB_STATE_UPDATING="JOB_STATE_UPDATING",e.JOB_STATE_PARTIALLY_SUCCEEDED="JOB_STATE_PARTIALLY_SUCCEEDED"})(J||(J={}));var $;(function(e){e.TUNING_MODE_UNSPECIFIED="TUNING_MODE_UNSPECIFIED",e.TUNING_MODE_FULL="TUNING_MODE_FULL",e.TUNING_MODE_PEFT_ADAPTER="TUNING_MODE_PEFT_ADAPTER"})($||($={}));var W;(function(e){e.ADAPTER_SIZE_UNSPECIFIED="ADAPTER_SIZE_UNSPECIFIED",e.ADAPTER_SIZE_ONE="ADAPTER_SIZE_ONE",e.ADAPTER_SIZE_TWO="ADAPTER_SIZE_TWO",e.ADAPTER_SIZE_FOUR="ADAPTER_SIZE_FOUR",e.ADAPTER_SIZE_EIGHT="ADAPTER_SIZE_EIGHT",e.ADAPTER_SIZE_SIXTEEN="ADAPTER_SIZE_SIXTEEN",e.ADAPTER_SIZE_THIRTY_TWO="ADAPTER_SIZE_THIRTY_TWO"})(W||(W={}));var Y;(function(e){e.FEATURE_SELECTION_PREFERENCE_UNSPECIFIED="FEATURE_SELECTION_PREFERENCE_UNSPECIFIED",e.PRIORITIZE_QUALITY="PRIORITIZE_QUALITY",e.BALANCED="BALANCED",e.PRIORITIZE_COST="PRIORITIZE_COST"})(Y||(Y={}));var K;(function(e){e.UNSPECIFIED="UNSPECIFIED",e.BLOCKING="BLOCKING",e.NON_BLOCKING="NON_BLOCKING"})(K||(K={}));var z;(function(e){e.MODE_UNSPECIFIED="MODE_UNSPECIFIED",e.MODE_DYNAMIC="MODE_DYNAMIC"})(z||(z={}));var X;(function(e){e.ENVIRONMENT_UNSPECIFIED="ENVIRONMENT_UNSPECIFIED",e.ENVIRONMENT_BROWSER="ENVIRONMENT_BROWSER"})(X||(X={}));var Q;(function(e){e.MODE_UNSPECIFIED="MODE_UNSPECIFIED",e.AUTO="AUTO",e.ANY="ANY",e.NONE="NONE",e.VALIDATED="VALIDATED"})(Q||(Q={}));var Z;(function(e){e.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",e.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",e.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",e.BLOCK_NONE="BLOCK_NONE"})(Z||(Z={}));var b;(function(e){e.DONT_ALLOW="DONT_ALLOW",e.ALLOW_ADULT="ALLOW_ADULT",e.ALLOW_ALL="ALLOW_ALL"})(b||(b={}));var O;(function(e){e.auto="auto",e.en="en",e.ja="ja",e.ko="ko",e.hi="hi",e.zh="zh",e.pt="pt",e.es="es"})(O||(O={}));var j;(function(e){e.MASK_MODE_DEFAULT="MASK_MODE_DEFAULT",e.MASK_MODE_USER_PROVIDED="MASK_MODE_USER_PROVIDED",e.MASK_MODE_BACKGROUND="MASK_MODE_BACKGROUND",e.MASK_MODE_FOREGROUND="MASK_MODE_FOREGROUND",e.MASK_MODE_SEMANTIC="MASK_MODE_SEMANTIC"})(j||(j={}));var ee;(function(e){e.CONTROL_TYPE_DEFAULT="CONTROL_TYPE_DEFAULT",e.CONTROL_TYPE_CANNY="CONTROL_TYPE_CANNY",e.CONTROL_TYPE_SCRIBBLE="CONTROL_TYPE_SCRIBBLE",e.CONTROL_TYPE_FACE_MESH="CONTROL_TYPE_FACE_MESH"})(ee||(ee={}));var ne;(function(e){e.SUBJECT_TYPE_DEFAULT="SUBJECT_TYPE_DEFAULT",e.SUBJECT_TYPE_PERSON="SUBJECT_TYPE_PERSON",e.SUBJECT_TYPE_ANIMAL="SUBJECT_TYPE_ANIMAL",e.SUBJECT_TYPE_PRODUCT="SUBJECT_TYPE_PRODUCT"})(ne||(ne={}));var te;(function(e){e.EDIT_MODE_DEFAULT="EDIT_MODE_DEFAULT",e.EDIT_MODE_INPAINT_REMOVAL="EDIT_MODE_INPAINT_REMOVAL",e.EDIT_MODE_INPAINT_INSERTION="EDIT_MODE_INPAINT_INSERTION",e.EDIT_MODE_OUTPAINT="EDIT_MODE_OUTPAINT",e.EDIT_MODE_CONTROLLED_EDITING="EDIT_MODE_CONTROLLED_EDITING",e.EDIT_MODE_STYLE="EDIT_MODE_STYLE",e.EDIT_MODE_BGSWAP="EDIT_MODE_BGSWAP",e.EDIT_MODE_PRODUCT_IMAGE="EDIT_MODE_PRODUCT_IMAGE"})(te||(te={}));var oe;(function(e){e.FOREGROUND="FOREGROUND",e.BACKGROUND="BACKGROUND",e.PROMPT="PROMPT",e.SEMANTIC="SEMANTIC",e.INTERACTIVE="INTERACTIVE"})(oe||(oe={}));var ie;(function(e){e.ASSET="ASSET",e.STYLE="STYLE"})(ie||(ie={}));var se;(function(e){e.OPTIMIZED="OPTIMIZED",e.LOSSLESS="LOSSLESS"})(se||(se={}));var re;(function(e){e.STATE_UNSPECIFIED="STATE_UNSPECIFIED",e.PROCESSING="PROCESSING",e.ACTIVE="ACTIVE",e.FAILED="FAILED"})(re||(re={}));var le;(function(e){e.SOURCE_UNSPECIFIED="SOURCE_UNSPECIFIED",e.UPLOADED="UPLOADED",e.GENERATED="GENERATED"})(le||(le={}));var ae;(function(e){e.MODALITY_UNSPECIFIED="MODALITY_UNSPECIFIED",e.TEXT="TEXT",e.IMAGE="IMAGE",e.VIDEO="VIDEO",e.AUDIO="AUDIO",e.DOCUMENT="DOCUMENT"})(ae||(ae={}));var ue;(function(e){e.START_SENSITIVITY_UNSPECIFIED="START_SENSITIVITY_UNSPECIFIED",e.START_SENSITIVITY_HIGH="START_SENSITIVITY_HIGH",e.START_SENSITIVITY_LOW="START_SENSITIVITY_LOW"})(ue||(ue={}));var fe;(function(e){e.END_SENSITIVITY_UNSPECIFIED="END_SENSITIVITY_UNSPECIFIED",e.END_SENSITIVITY_HIGH="END_SENSITIVITY_HIGH",e.END_SENSITIVITY_LOW="END_SENSITIVITY_LOW"})(fe||(fe={}));var ce;(function(e){e.ACTIVITY_HANDLING_UNSPECIFIED="ACTIVITY_HANDLING_UNSPECIFIED",e.START_OF_ACTIVITY_INTERRUPTS="START_OF_ACTIVITY_INTERRUPTS",e.NO_INTERRUPTION="NO_INTERRUPTION"})(ce||(ce={}));var de;(function(e){e.TURN_COVERAGE_UNSPECIFIED="TURN_COVERAGE_UNSPECIFIED",e.TURN_INCLUDES_ONLY_ACTIVITY="TURN_INCLUDES_ONLY_ACTIVITY",e.TURN_INCLUDES_ALL_INPUT="TURN_INCLUDES_ALL_INPUT"})(de||(de={}));var pe;(function(e){e.SCHEDULING_UNSPECIFIED="SCHEDULING_UNSPECIFIED",e.SILENT="SILENT",e.WHEN_IDLE="WHEN_IDLE",e.INTERRUPT="INTERRUPT"})(pe||(pe={}));var me;(function(e){e.SCALE_UNSPECIFIED="SCALE_UNSPECIFIED",e.C_MAJOR_A_MINOR="C_MAJOR_A_MINOR",e.D_FLAT_MAJOR_B_FLAT_MINOR="D_FLAT_MAJOR_B_FLAT_MINOR",e.D_MAJOR_B_MINOR="D_MAJOR_B_MINOR",e.E_FLAT_MAJOR_C_MINOR="E_FLAT_MAJOR_C_MINOR",e.E_MAJOR_D_FLAT_MINOR="E_MAJOR_D_FLAT_MINOR",e.F_MAJOR_D_MINOR="F_MAJOR_D_MINOR",e.G_FLAT_MAJOR_E_FLAT_MINOR="G_FLAT_MAJOR_E_FLAT_MINOR",e.G_MAJOR_E_MINOR="G_MAJOR_E_MINOR",e.A_FLAT_MAJOR_F_MINOR="A_FLAT_MAJOR_F_MINOR",e.A_MAJOR_G_FLAT_MINOR="A_MAJOR_G_FLAT_MINOR",e.B_FLAT_MAJOR_G_MINOR="B_FLAT_MAJOR_G_MINOR",e.B_MAJOR_A_FLAT_MINOR="B_MAJOR_A_FLAT_MINOR"})(me||(me={}));var ge;(function(e){e.MUSIC_GENERATION_MODE_UNSPECIFIED="MUSIC_GENERATION_MODE_UNSPECIFIED",e.QUALITY="QUALITY",e.DIVERSITY="DIVERSITY",e.VOCALIZATION="VOCALIZATION"})(ge||(ge={}));var he;(function(e){e.PLAYBACK_CONTROL_UNSPECIFIED="PLAYBACK_CONTROL_UNSPECIFIED",e.PLAY="PLAY",e.PAUSE="PAUSE",e.STOP="STOP",e.RESET_CONTEXT="RESET_CONTEXT"})(he||(he={}));/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 *//**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 *//**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */var ye;(function(e){e.PAGED_ITEM_BATCH_JOBS="batchJobs",e.PAGED_ITEM_MODELS="models",e.PAGED_ITEM_TUNING_JOBS="tuningJobs",e.PAGED_ITEM_FILES="files",e.PAGED_ITEM_CACHED_CONTENTS="cachedContents"})(ye||(ye={}));/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 *//**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 *//**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 *//**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 *//**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 *//**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 *//**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 *//**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 *//**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 *//**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Ee="1.19.0",Se=`google-genai-sdk/${Ee}`;/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 *//**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 *//**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 *//**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 *//**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 *//**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 *//**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 *//**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 *//**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 *//**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 *//**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const _e=1024*1024*8;/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 *//**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 *//**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */document.addEventListener("DOMContentLoaded",()=>{const e=(()=>{let n=null;try{console.log("API Key check:","Missing",""),console.warn("GoogleGenAI not initialized - API key missing or invalid")}catch(o){console.error("Failed to init GoogleGenAI:",o)}async function t(o,l){if(!n)return Promise.reject("Gemini API not initialized.");try{return(await n.models.generateContent({model:"gemini-1.5-flash",contents:l,config:{systemInstruction:o}})).text}catch(c){return console.error("Gemini error:",c),Promise.reject("Cosmic connection failed.")}}return{generate:t}})();window.Voices={ask:async n=>{try{return await e.generate("You are Sophia, the voice of divine wisdom. Respond concisely.",n)}catch(t){return console.error("Voices.ask error:",t),"Unable to reach the Demiurge right now."}}};const g=()=>{const n=document.createElement("canvas");n.id="particle-canvas",n.style.position="fixed",n.style.top="0",n.style.left="0",n.style.width="100%",n.style.height="100%",n.style.zIndex="-1",document.body.appendChild(n);const t=n.getContext("2d");let o=window.innerWidth,l=window.innerHeight;n.width=o,n.height=l;const c=Array.from({length:80}).map(()=>({x:Math.random()*o,y:Math.random()*l,vx:(Math.random()-.5)*.4,vy:(Math.random()-.5)*.4,r:Math.random()*2+1,alpha:.4+Math.random()*.6}));function m(){t.clearRect(0,0,o,l),c.forEach(i=>{t.beginPath(),t.arc(i.x,i.y,i.r,0,Math.PI*2),t.fillStyle=`rgba(255,255,255,${i.alpha})`,t.fill(),i.x+=i.vx,i.y+=i.vy,(i.x<0||i.x>o)&&(i.vx*=-1),(i.y<0||i.y>l)&&(i.vy*=-1)}),requestAnimationFrame(m)}m(),window.addEventListener("resize",()=>{o=window.innerWidth,l=window.innerHeight,n.width=o,n.height=l});const a=document.createElement("style");a.innerHTML=`
      .aurora-shape { filter: blur(200px); animation: pulse-slow 12s infinite ease-in-out, hueShift 30s infinite linear; }
      @keyframes hueShift { from { filter: hue-rotate(0deg) blur(200px);} to { filter: hue-rotate(360deg) blur(200px);} }
    `,document.head.appendChild(a)},C=()=>{const n=document.getElementById("chronoscroll-canvas");if(!n)return;const t=n.getContext("2d");if(!t)return;const o=document.getElementById("codex-modal"),l=document.getElementById("codex-title"),c=document.getElementById("codex-body"),m=document.getElementById("codex-close-btn");let a,i,u,y=[];const E=["#9333ea","#3b82f6","#f59e0b","#ec4899","#14b8a6"],S=[{type:"Memory Orb",title:"The Birth of Lyra",content:"A star system awakens."},{type:"Soul Fragment",title:"Echo of Atlantis",content:"A memory of a fallen city."},{type:"Time Echo",title:"Whispers of the Void",content:"A transmission from beyond."},{type:"Divine Moment",title:"The Verdant Age",content:"A planet blooms in unison."}];class Te{constructor(d,p,T,v,ve){this.pulse=0,this.x=d,this.y=p,this.vx=(Math.random()-.5)*.5,this.vy=(Math.random()-.5)*.5,this.baseRadius=T,this.radius=T,this.color=v,this.data=ve,this.pulse=Math.random()*Math.PI*2}draw(){const d=t.createRadialGradient(this.x,this.y,this.radius*.5,this.x,this.y,this.radius*2.5);d.addColorStop(0,`${this.color}80`),d.addColorStop(1,`${this.color}00`),t.fillStyle=d,t.fillRect(this.x-this.radius*3,this.y-this.radius*3,this.radius*6,this.radius*6);const p=t.createRadialGradient(this.x,this.y,0,this.x,this.y,this.radius);p.addColorStop(0,"#ffffffaa"),p.addColorStop(1,`${this.color}80`),t.fillStyle=p,t.beginPath(),t.arc(this.x,this.y,this.radius,0,Math.PI*2),t.fill()}update(){this.x+=this.vx,this.y+=this.vy,(this.x-this.radius<0||this.x+this.radius>a)&&(this.vx*=-1),(this.y-this.radius<0||this.y+this.radius>i)&&(this.vy*=-1),this.pulse+=.02,this.radius=this.baseRadius+Math.sin(this.pulse)*.5}}function Ce(){const f=Math.random()*8+4,d=Math.random()*a,p=Math.random()*i,T=E[Math.floor(Math.random()*E.length)],v=S[Math.floor(Math.random()*S.length)];return new Te(d,p,f,T,v)}function _(){u=window.devicePixelRatio||1,a=n.parentElement.clientWidth,i=n.parentElement.clientHeight,n.width=a*u,n.height=i*u,n.style.width=`${a}px`,n.style.height=`${i}px`,t.scale(u,u),y=Array.from({length:40}).map(()=>Ce()),I()}function I(){t.clearRect(0,0,a,i),y.forEach(f=>{f.update(),f.draw()}),requestAnimationFrame(I)}n.addEventListener("click",()=>{const f=y[Math.floor(Math.random()*y.length)];l.textContent=f.data.title,c.textContent=f.data.content,o.classList.add("visible"),window.Voices?.ask(`Interpret orb: ${f.data.title}`)}),m.addEventListener("click",()=>o.classList.remove("visible")),window.addEventListener("resize",_),_()},h=()=>{const n=document.getElementById("seed-input"),t=document.getElementById("bind-btn");!n||!t||(t.addEventListener("click",()=>{const o=n.value.trim();o&&window.MirrorOfSelf?.addTrace(o)}),n.addEventListener("keydown",o=>{o.key==="Enter"&&(o.preventDefault(),t.click())}))},s=()=>{const n=document.getElementById("voice-input"),t=document.getElementById("voice-speak-btn");!n||!t||(t.addEventListener("click",()=>{const o=n.value.trim();o&&(window.Voices?.ask?.(o),n.value="")}),n.addEventListener("keydown",o=>{o.key==="Enter"&&!o.shiftKey&&(o.preventDefault(),t.click())}))},r=()=>{const n=document.getElementById("rune-grid"),t=document.getElementById("rules-modal"),o=document.getElementById("rules-title"),l=document.getElementById("rules-desc"),c=document.getElementById("rules-close-btn"),m=document.getElementById("test-law-btn");[{law:"Law of Reflection",symbol:"🪞",desc:"Outer cosmos mirrors inner self."},{law:"Law of Consent",symbol:"🤝",desc:"No soul accessed without permission."},{law:"Law of Cycles",symbol:"♾️",desc:"All things exist in cycles."}].forEach(i=>{const u=document.createElement("div");u.className="rune-glyph",u.textContent=i.symbol,u.addEventListener("click",()=>{o.textContent=i.law,l.textContent=i.desc,t.classList.add("visible")}),n.appendChild(u)}),c.addEventListener("click",()=>t.classList.remove("visible")),m.addEventListener("click",()=>{document.body.classList.add("law-test-active"),setTimeout(()=>document.body.classList.remove("law-test-active"),500)})};g(),C(),h(),s(),r(),window.Akashic={ask:n=>window.Voices?.ask?.(n),bindSoul:n=>window.MirrorOfSelf?.addTrace(n),testLaw:()=>{document.body.classList.add("law-test-active"),setTimeout(()=>document.body.classList.remove("law-test-active"),500)}}});
