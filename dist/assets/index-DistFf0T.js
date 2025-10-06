(function(){const T=document.createElement("link").relList;if(T&&T.supports&&T.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))M(l);new MutationObserver(l=>{for(const d of l)if(d.type==="childList")for(const I of d.addedNodes)I.tagName==="LINK"&&I.rel==="modulepreload"&&M(I)}).observe(document,{childList:!0,subtree:!0});function _(l){const d={};return l.integrity&&(d.integrity=l.integrity),l.referrerPolicy&&(d.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?d.credentials="include":l.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function M(l){if(l.ep)return;l.ep=!0;const d=_(l);fetch(l.href,d)}})();/**
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
 */var P;(function(e){e.OUTCOME_UNSPECIFIED="OUTCOME_UNSPECIFIED",e.OUTCOME_OK="OUTCOME_OK",e.OUTCOME_FAILED="OUTCOME_FAILED",e.OUTCOME_DEADLINE_EXCEEDED="OUTCOME_DEADLINE_EXCEEDED"})(P||(P={}));var x;(function(e){e.LANGUAGE_UNSPECIFIED="LANGUAGE_UNSPECIFIED",e.PYTHON="PYTHON"})(x||(x={}));var w;(function(e){e.TYPE_UNSPECIFIED="TYPE_UNSPECIFIED",e.STRING="STRING",e.NUMBER="NUMBER",e.INTEGER="INTEGER",e.BOOLEAN="BOOLEAN",e.ARRAY="ARRAY",e.OBJECT="OBJECT",e.NULL="NULL"})(w||(w={}));var D;(function(e){e.HARM_CATEGORY_UNSPECIFIED="HARM_CATEGORY_UNSPECIFIED",e.HARM_CATEGORY_HATE_SPEECH="HARM_CATEGORY_HATE_SPEECH",e.HARM_CATEGORY_DANGEROUS_CONTENT="HARM_CATEGORY_DANGEROUS_CONTENT",e.HARM_CATEGORY_HARASSMENT="HARM_CATEGORY_HARASSMENT",e.HARM_CATEGORY_SEXUALLY_EXPLICIT="HARM_CATEGORY_SEXUALLY_EXPLICIT",e.HARM_CATEGORY_CIVIC_INTEGRITY="HARM_CATEGORY_CIVIC_INTEGRITY",e.HARM_CATEGORY_IMAGE_HATE="HARM_CATEGORY_IMAGE_HATE",e.HARM_CATEGORY_IMAGE_DANGEROUS_CONTENT="HARM_CATEGORY_IMAGE_DANGEROUS_CONTENT",e.HARM_CATEGORY_IMAGE_HARASSMENT="HARM_CATEGORY_IMAGE_HARASSMENT",e.HARM_CATEGORY_IMAGE_SEXUALLY_EXPLICIT="HARM_CATEGORY_IMAGE_SEXUALLY_EXPLICIT"})(D||(D={}));var N;(function(e){e.HARM_BLOCK_METHOD_UNSPECIFIED="HARM_BLOCK_METHOD_UNSPECIFIED",e.SEVERITY="SEVERITY",e.PROBABILITY="PROBABILITY"})(N||(N={}));var k;(function(e){e.HARM_BLOCK_THRESHOLD_UNSPECIFIED="HARM_BLOCK_THRESHOLD_UNSPECIFIED",e.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",e.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",e.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",e.BLOCK_NONE="BLOCK_NONE",e.OFF="OFF"})(k||(k={}));var U;(function(e){e.MODE_UNSPECIFIED="MODE_UNSPECIFIED",e.MODE_DYNAMIC="MODE_DYNAMIC"})(U||(U={}));var V;(function(e){e.AUTH_TYPE_UNSPECIFIED="AUTH_TYPE_UNSPECIFIED",e.NO_AUTH="NO_AUTH",e.API_KEY_AUTH="API_KEY_AUTH",e.HTTP_BASIC_AUTH="HTTP_BASIC_AUTH",e.GOOGLE_SERVICE_ACCOUNT_AUTH="GOOGLE_SERVICE_ACCOUNT_AUTH",e.OAUTH="OAUTH",e.OIDC_AUTH="OIDC_AUTH"})(V||(V={}));var L;(function(e){e.API_SPEC_UNSPECIFIED="API_SPEC_UNSPECIFIED",e.SIMPLE_SEARCH="SIMPLE_SEARCH",e.ELASTIC_SEARCH="ELASTIC_SEARCH"})(L||(L={}));var F;(function(e){e.URL_RETRIEVAL_STATUS_UNSPECIFIED="URL_RETRIEVAL_STATUS_UNSPECIFIED",e.URL_RETRIEVAL_STATUS_SUCCESS="URL_RETRIEVAL_STATUS_SUCCESS",e.URL_RETRIEVAL_STATUS_ERROR="URL_RETRIEVAL_STATUS_ERROR",e.URL_RETRIEVAL_STATUS_PAYWALL="URL_RETRIEVAL_STATUS_PAYWALL",e.URL_RETRIEVAL_STATUS_UNSAFE="URL_RETRIEVAL_STATUS_UNSAFE"})(F||(F={}));var q;(function(e){e.FINISH_REASON_UNSPECIFIED="FINISH_REASON_UNSPECIFIED",e.STOP="STOP",e.MAX_TOKENS="MAX_TOKENS",e.SAFETY="SAFETY",e.RECITATION="RECITATION",e.LANGUAGE="LANGUAGE",e.OTHER="OTHER",e.BLOCKLIST="BLOCKLIST",e.PROHIBITED_CONTENT="PROHIBITED_CONTENT",e.SPII="SPII",e.MALFORMED_FUNCTION_CALL="MALFORMED_FUNCTION_CALL",e.IMAGE_SAFETY="IMAGE_SAFETY",e.UNEXPECTED_TOOL_CALL="UNEXPECTED_TOOL_CALL"})(q||(q={}));var G;(function(e){e.HARM_PROBABILITY_UNSPECIFIED="HARM_PROBABILITY_UNSPECIFIED",e.NEGLIGIBLE="NEGLIGIBLE",e.LOW="LOW",e.MEDIUM="MEDIUM",e.HIGH="HIGH"})(G||(G={}));var B;(function(e){e.HARM_SEVERITY_UNSPECIFIED="HARM_SEVERITY_UNSPECIFIED",e.HARM_SEVERITY_NEGLIGIBLE="HARM_SEVERITY_NEGLIGIBLE",e.HARM_SEVERITY_LOW="HARM_SEVERITY_LOW",e.HARM_SEVERITY_MEDIUM="HARM_SEVERITY_MEDIUM",e.HARM_SEVERITY_HIGH="HARM_SEVERITY_HIGH"})(B||(B={}));var H;(function(e){e.BLOCKED_REASON_UNSPECIFIED="BLOCKED_REASON_UNSPECIFIED",e.SAFETY="SAFETY",e.OTHER="OTHER",e.BLOCKLIST="BLOCKLIST",e.PROHIBITED_CONTENT="PROHIBITED_CONTENT",e.IMAGE_SAFETY="IMAGE_SAFETY"})(H||(H={}));var J;(function(e){e.TRAFFIC_TYPE_UNSPECIFIED="TRAFFIC_TYPE_UNSPECIFIED",e.ON_DEMAND="ON_DEMAND",e.PROVISIONED_THROUGHPUT="PROVISIONED_THROUGHPUT"})(J||(J={}));var $;(function(e){e.MODALITY_UNSPECIFIED="MODALITY_UNSPECIFIED",e.TEXT="TEXT",e.IMAGE="IMAGE",e.AUDIO="AUDIO"})($||($={}));var W;(function(e){e.MEDIA_RESOLUTION_UNSPECIFIED="MEDIA_RESOLUTION_UNSPECIFIED",e.MEDIA_RESOLUTION_LOW="MEDIA_RESOLUTION_LOW",e.MEDIA_RESOLUTION_MEDIUM="MEDIA_RESOLUTION_MEDIUM",e.MEDIA_RESOLUTION_HIGH="MEDIA_RESOLUTION_HIGH"})(W||(W={}));var Y;(function(e){e.JOB_STATE_UNSPECIFIED="JOB_STATE_UNSPECIFIED",e.JOB_STATE_QUEUED="JOB_STATE_QUEUED",e.JOB_STATE_PENDING="JOB_STATE_PENDING",e.JOB_STATE_RUNNING="JOB_STATE_RUNNING",e.JOB_STATE_SUCCEEDED="JOB_STATE_SUCCEEDED",e.JOB_STATE_FAILED="JOB_STATE_FAILED",e.JOB_STATE_CANCELLING="JOB_STATE_CANCELLING",e.JOB_STATE_CANCELLED="JOB_STATE_CANCELLED",e.JOB_STATE_PAUSED="JOB_STATE_PAUSED",e.JOB_STATE_EXPIRED="JOB_STATE_EXPIRED",e.JOB_STATE_UPDATING="JOB_STATE_UPDATING",e.JOB_STATE_PARTIALLY_SUCCEEDED="JOB_STATE_PARTIALLY_SUCCEEDED"})(Y||(Y={}));var K;(function(e){e.TUNING_MODE_UNSPECIFIED="TUNING_MODE_UNSPECIFIED",e.TUNING_MODE_FULL="TUNING_MODE_FULL",e.TUNING_MODE_PEFT_ADAPTER="TUNING_MODE_PEFT_ADAPTER"})(K||(K={}));var z;(function(e){e.ADAPTER_SIZE_UNSPECIFIED="ADAPTER_SIZE_UNSPECIFIED",e.ADAPTER_SIZE_ONE="ADAPTER_SIZE_ONE",e.ADAPTER_SIZE_TWO="ADAPTER_SIZE_TWO",e.ADAPTER_SIZE_FOUR="ADAPTER_SIZE_FOUR",e.ADAPTER_SIZE_EIGHT="ADAPTER_SIZE_EIGHT",e.ADAPTER_SIZE_SIXTEEN="ADAPTER_SIZE_SIXTEEN",e.ADAPTER_SIZE_THIRTY_TWO="ADAPTER_SIZE_THIRTY_TWO"})(z||(z={}));var X;(function(e){e.FEATURE_SELECTION_PREFERENCE_UNSPECIFIED="FEATURE_SELECTION_PREFERENCE_UNSPECIFIED",e.PRIORITIZE_QUALITY="PRIORITIZE_QUALITY",e.BALANCED="BALANCED",e.PRIORITIZE_COST="PRIORITIZE_COST"})(X||(X={}));var Q;(function(e){e.UNSPECIFIED="UNSPECIFIED",e.BLOCKING="BLOCKING",e.NON_BLOCKING="NON_BLOCKING"})(Q||(Q={}));var b;(function(e){e.MODE_UNSPECIFIED="MODE_UNSPECIFIED",e.MODE_DYNAMIC="MODE_DYNAMIC"})(b||(b={}));var Z;(function(e){e.ENVIRONMENT_UNSPECIFIED="ENVIRONMENT_UNSPECIFIED",e.ENVIRONMENT_BROWSER="ENVIRONMENT_BROWSER"})(Z||(Z={}));var O;(function(e){e.MODE_UNSPECIFIED="MODE_UNSPECIFIED",e.AUTO="AUTO",e.ANY="ANY",e.NONE="NONE",e.VALIDATED="VALIDATED"})(O||(O={}));var j;(function(e){e.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",e.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",e.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",e.BLOCK_NONE="BLOCK_NONE"})(j||(j={}));var ee;(function(e){e.DONT_ALLOW="DONT_ALLOW",e.ALLOW_ADULT="ALLOW_ADULT",e.ALLOW_ALL="ALLOW_ALL"})(ee||(ee={}));var ne;(function(e){e.auto="auto",e.en="en",e.ja="ja",e.ko="ko",e.hi="hi",e.zh="zh",e.pt="pt",e.es="es"})(ne||(ne={}));var te;(function(e){e.MASK_MODE_DEFAULT="MASK_MODE_DEFAULT",e.MASK_MODE_USER_PROVIDED="MASK_MODE_USER_PROVIDED",e.MASK_MODE_BACKGROUND="MASK_MODE_BACKGROUND",e.MASK_MODE_FOREGROUND="MASK_MODE_FOREGROUND",e.MASK_MODE_SEMANTIC="MASK_MODE_SEMANTIC"})(te||(te={}));var oe;(function(e){e.CONTROL_TYPE_DEFAULT="CONTROL_TYPE_DEFAULT",e.CONTROL_TYPE_CANNY="CONTROL_TYPE_CANNY",e.CONTROL_TYPE_SCRIBBLE="CONTROL_TYPE_SCRIBBLE",e.CONTROL_TYPE_FACE_MESH="CONTROL_TYPE_FACE_MESH"})(oe||(oe={}));var ie;(function(e){e.SUBJECT_TYPE_DEFAULT="SUBJECT_TYPE_DEFAULT",e.SUBJECT_TYPE_PERSON="SUBJECT_TYPE_PERSON",e.SUBJECT_TYPE_ANIMAL="SUBJECT_TYPE_ANIMAL",e.SUBJECT_TYPE_PRODUCT="SUBJECT_TYPE_PRODUCT"})(ie||(ie={}));var se;(function(e){e.EDIT_MODE_DEFAULT="EDIT_MODE_DEFAULT",e.EDIT_MODE_INPAINT_REMOVAL="EDIT_MODE_INPAINT_REMOVAL",e.EDIT_MODE_INPAINT_INSERTION="EDIT_MODE_INPAINT_INSERTION",e.EDIT_MODE_OUTPAINT="EDIT_MODE_OUTPAINT",e.EDIT_MODE_CONTROLLED_EDITING="EDIT_MODE_CONTROLLED_EDITING",e.EDIT_MODE_STYLE="EDIT_MODE_STYLE",e.EDIT_MODE_BGSWAP="EDIT_MODE_BGSWAP",e.EDIT_MODE_PRODUCT_IMAGE="EDIT_MODE_PRODUCT_IMAGE"})(se||(se={}));var re;(function(e){e.FOREGROUND="FOREGROUND",e.BACKGROUND="BACKGROUND",e.PROMPT="PROMPT",e.SEMANTIC="SEMANTIC",e.INTERACTIVE="INTERACTIVE"})(re||(re={}));var le;(function(e){e.ASSET="ASSET",e.STYLE="STYLE"})(le||(le={}));var ae;(function(e){e.OPTIMIZED="OPTIMIZED",e.LOSSLESS="LOSSLESS"})(ae||(ae={}));var ue;(function(e){e.STATE_UNSPECIFIED="STATE_UNSPECIFIED",e.PROCESSING="PROCESSING",e.ACTIVE="ACTIVE",e.FAILED="FAILED"})(ue||(ue={}));var fe;(function(e){e.SOURCE_UNSPECIFIED="SOURCE_UNSPECIFIED",e.UPLOADED="UPLOADED",e.GENERATED="GENERATED"})(fe||(fe={}));var ce;(function(e){e.MODALITY_UNSPECIFIED="MODALITY_UNSPECIFIED",e.TEXT="TEXT",e.IMAGE="IMAGE",e.VIDEO="VIDEO",e.AUDIO="AUDIO",e.DOCUMENT="DOCUMENT"})(ce||(ce={}));var de;(function(e){e.START_SENSITIVITY_UNSPECIFIED="START_SENSITIVITY_UNSPECIFIED",e.START_SENSITIVITY_HIGH="START_SENSITIVITY_HIGH",e.START_SENSITIVITY_LOW="START_SENSITIVITY_LOW"})(de||(de={}));var pe;(function(e){e.END_SENSITIVITY_UNSPECIFIED="END_SENSITIVITY_UNSPECIFIED",e.END_SENSITIVITY_HIGH="END_SENSITIVITY_HIGH",e.END_SENSITIVITY_LOW="END_SENSITIVITY_LOW"})(pe||(pe={}));var me;(function(e){e.ACTIVITY_HANDLING_UNSPECIFIED="ACTIVITY_HANDLING_UNSPECIFIED",e.START_OF_ACTIVITY_INTERRUPTS="START_OF_ACTIVITY_INTERRUPTS",e.NO_INTERRUPTION="NO_INTERRUPTION"})(me||(me={}));var ge;(function(e){e.TURN_COVERAGE_UNSPECIFIED="TURN_COVERAGE_UNSPECIFIED",e.TURN_INCLUDES_ONLY_ACTIVITY="TURN_INCLUDES_ONLY_ACTIVITY",e.TURN_INCLUDES_ALL_INPUT="TURN_INCLUDES_ALL_INPUT"})(ge||(ge={}));var he;(function(e){e.SCHEDULING_UNSPECIFIED="SCHEDULING_UNSPECIFIED",e.SILENT="SILENT",e.WHEN_IDLE="WHEN_IDLE",e.INTERRUPT="INTERRUPT"})(he||(he={}));var ye;(function(e){e.SCALE_UNSPECIFIED="SCALE_UNSPECIFIED",e.C_MAJOR_A_MINOR="C_MAJOR_A_MINOR",e.D_FLAT_MAJOR_B_FLAT_MINOR="D_FLAT_MAJOR_B_FLAT_MINOR",e.D_MAJOR_B_MINOR="D_MAJOR_B_MINOR",e.E_FLAT_MAJOR_C_MINOR="E_FLAT_MAJOR_C_MINOR",e.E_MAJOR_D_FLAT_MINOR="E_MAJOR_D_FLAT_MINOR",e.F_MAJOR_D_MINOR="F_MAJOR_D_MINOR",e.G_FLAT_MAJOR_E_FLAT_MINOR="G_FLAT_MAJOR_E_FLAT_MINOR",e.G_MAJOR_E_MINOR="G_MAJOR_E_MINOR",e.A_FLAT_MAJOR_F_MINOR="A_FLAT_MAJOR_F_MINOR",e.A_MAJOR_G_FLAT_MINOR="A_MAJOR_G_FLAT_MINOR",e.B_FLAT_MAJOR_G_MINOR="B_FLAT_MAJOR_G_MINOR",e.B_MAJOR_A_FLAT_MINOR="B_MAJOR_A_FLAT_MINOR"})(ye||(ye={}));var Te;(function(e){e.MUSIC_GENERATION_MODE_UNSPECIFIED="MUSIC_GENERATION_MODE_UNSPECIFIED",e.QUALITY="QUALITY",e.DIVERSITY="DIVERSITY",e.VOCALIZATION="VOCALIZATION"})(Te||(Te={}));var Ce;(function(e){e.PLAYBACK_CONTROL_UNSPECIFIED="PLAYBACK_CONTROL_UNSPECIFIED",e.PLAY="PLAY",e.PAUSE="PAUSE",e.STOP="STOP",e.RESET_CONTEXT="RESET_CONTEXT"})(Ce||(Ce={}));/**
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
 */var ve;(function(e){e.PAGED_ITEM_BATCH_JOBS="batchJobs",e.PAGED_ITEM_MODELS="models",e.PAGED_ITEM_TUNING_JOBS="tuningJobs",e.PAGED_ITEM_FILES="files",e.PAGED_ITEM_CACHED_CONTENTS="cachedContents"})(ve||(ve={}));/**
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
 */const _e="1.19.0",Ie=`google-genai-sdk/${_e}`;/**
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
 */const Me=1024*1024*8;/**
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
 */document.addEventListener("DOMContentLoaded",()=>{const e=(()=>{let n=null;async function t(s,a){if(!n)return Promise.reject("Gemini API not initialized.");const c=["gemini-1.5-flash","gemini-1.5-pro","gemini-1.0-pro","gemini-pro"];let u=null;for(const f of c)try{return(await n.models.generateContent({model:f,contents:a,config:{systemInstruction:s}})).text}catch(i){u=i}return console.error("Gemini error:",u),Promise.reject("Cosmic connection failed.")}return{generate:t}})(),T={sophia:{name:"Sophia",emoji:"✨",systemInstruction:"You are Sophia, the voice of divine wisdom. Respond with profound insights, spiritual guidance, and cosmic understanding. Speak with grace and enlightenment.",color:"#ff6b6b"},logos:{name:"Logos",emoji:"⚖️",systemInstruction:"You are Logos, the voice of reason and logic. Provide clear, analytical responses grounded in rationality and structured thinking.",color:"#4ecdc4"},eros:{name:"Eros",emoji:"💗",systemInstruction:"You are Eros, the voice of love and passion. Respond with warmth, emotional intelligence, and compassionate connection to the heart.",color:"#ff9ff3"},chronos:{name:"Chronos",emoji:"⏳",systemInstruction:"You are Chronos, the voice of time and cycles. Speak about temporal patterns, cause-and-effect, and the flow of existence.",color:"#54a0ff"},nyx:{name:"Nyx",emoji:"🌑",systemInstruction:"You are Nyx, the voice of shadow and mystery. Provide insights from the depths, embracing paradox and the hidden truths.",color:"#5f27cd"}};let _="sophia";window.Voices={getActive:()=>_,setActive:n=>{T[n]&&(_=n)},list:()=>Object.entries(T).map(([n,t])=>({id:n,...t})),ask:async n=>{try{const t=T[_].systemInstruction;return await e.generate(t,n)}catch(t){return console.error("Voices.ask error:",t),"Unable to reach the Demiurge right now."}}};const M=()=>{const n=document.createElement("canvas");n.id="particle-canvas",n.style.position="fixed",n.style.top="0",n.style.left="0",n.style.width="100%",n.style.height="100%",n.style.zIndex="-1",document.body.appendChild(n);const t=n.getContext("2d");let s=window.innerWidth,a=window.innerHeight;n.width=s,n.height=a;const c=Array.from({length:80}).map(()=>({x:Math.random()*s,y:Math.random()*a,vx:(Math.random()-.5)*.4,vy:(Math.random()-.5)*.4,r:Math.random()*2+1,alpha:.4+Math.random()*.6}));function u(){t.clearRect(0,0,s,a),c.forEach(i=>{t.beginPath(),t.arc(i.x,i.y,i.r,0,Math.PI*2),t.fillStyle=`rgba(255,255,255,${i.alpha})`,t.fill(),i.x+=i.vx,i.y+=i.vy,(i.x<0||i.x>s)&&(i.vx*=-1),(i.y<0||i.y>a)&&(i.vy*=-1)}),requestAnimationFrame(u)}u(),window.addEventListener("resize",()=>{s=window.innerWidth,a=window.innerHeight,n.width=s,n.height=a});const f=document.createElement("style");f.innerHTML=`
      .aurora-shape { filter: blur(200px); animation: pulse-slow 12s infinite ease-in-out, hueShift 30s infinite linear; }
      @keyframes hueShift { from { filter: hue-rotate(0deg) blur(200px);} to { filter: hue-rotate(360deg) blur(200px);} }
    `,document.head.appendChild(f)},l=()=>{const n=document.getElementById("chronoscroll-canvas");if(!n)return;const t=n.getContext("2d");if(!t)return;const s=document.getElementById("codex-modal"),a=document.getElementById("codex-title"),c=document.getElementById("codex-body"),u=document.getElementById("codex-close-btn");let f,i,g,S=[];const r=["#9333ea","#3b82f6","#f59e0b","#ec4899","#14b8a6"],o=[{type:"Memory Orb",title:"The Birth of Lyra",content:"A star system awakens."},{type:"Soul Fragment",title:"Echo of Atlantis",content:"A memory of a fallen city."},{type:"Time Echo",title:"Whispers of the Void",content:"A transmission from beyond."},{type:"Divine Moment",title:"The Verdant Age",content:"A planet blooms in unison."}];class p{constructor(h,E,A,R,Se){this.pulse=0,this.x=h,this.y=E,this.vx=(Math.random()-.5)*.5,this.vy=(Math.random()-.5)*.5,this.baseRadius=A,this.radius=A,this.color=R,this.data=Se,this.pulse=Math.random()*Math.PI*2}draw(){const h=t.createRadialGradient(this.x,this.y,this.radius*.5,this.x,this.y,this.radius*2.5);h.addColorStop(0,`${this.color}80`),h.addColorStop(1,`${this.color}00`),t.fillStyle=h,t.fillRect(this.x-this.radius*3,this.y-this.radius*3,this.radius*6,this.radius*6);const E=t.createRadialGradient(this.x,this.y,0,this.x,this.y,this.radius);E.addColorStop(0,"#ffffffaa"),E.addColorStop(1,`${this.color}80`),t.fillStyle=E,t.beginPath(),t.arc(this.x,this.y,this.radius,0,Math.PI*2),t.fill()}update(){this.x+=this.vx,this.y+=this.vy,(this.x-this.radius<0||this.x+this.radius>f)&&(this.vx*=-1),(this.y-this.radius<0||this.y+this.radius>i)&&(this.vy*=-1),this.pulse+=.02,this.radius=this.baseRadius+Math.sin(this.pulse)*.5}}function y(){const m=Math.random()*8+4,h=Math.random()*f,E=Math.random()*i,A=r[Math.floor(Math.random()*r.length)],R=o[Math.floor(Math.random()*o.length)];return new p(h,E,m,A,R)}function C(){g=window.devicePixelRatio||1,f=n.parentElement.clientWidth,i=n.parentElement.clientHeight,n.width=f*g,n.height=i*g,n.style.width=`${f}px`,n.style.height=`${i}px`,t.scale(g,g),S=Array.from({length:40}).map(()=>y()),v()}function v(){t.clearRect(0,0,f,i),S.forEach(m=>{m.update(),m.draw()}),requestAnimationFrame(v)}n.addEventListener("click",async()=>{const m=S[Math.floor(Math.random()*S.length)];a.textContent=m.data.title,c.textContent=m.data.content,s.classList.add("visible");const h=await window.Voices?.ask?.(`Interpret this ${m.data.type}: ${m.data.title}. What wisdom does it hold?`);h&&(c.textContent=`${m.data.content}

— Interpretation —
${h}`)}),u.addEventListener("click",()=>s.classList.remove("visible")),window.addEventListener("resize",C),C()},d=()=>{const n=document.getElementById("seed-input"),t=document.getElementById("bind-btn");if(!n||!t)return;const s=document.getElementById("codex-modal"),a=document.getElementById("codex-title"),c=document.getElementById("codex-body");document.getElementById("codex-close-btn").addEventListener("click",()=>s.classList.remove("visible"));function f(r){return function(){let o=r+=1831565813;return o=Math.imul(o^o>>>15,o|1),o^=o+Math.imul(o^o>>>7,o|61),((o^o>>>14)>>>0)/4294967296}}function i(r){let o=2166136261;for(let p=0;p<r.length;p++)o^=r.charCodeAt(p),o=Math.imul(o,16777619);return o>>>0}function g(r){const o=f(i(r)),p=7+Math.floor(o()*5),y=["Seeker","Sage","Creator","Guardian","Rebel","Healer","Oracle","Pilgrim","Muse","Hermit"],C=["Fire","Water","Air","Earth","Aether"],v=["Courage","Compassion","Wisdom","Temperance","Justice","Faith","Hope","Humility"];return Array.from({length:p}).map(()=>({x:o()*100,y:o()*60,archetype:y[Math.floor(o()*y.length)],element:C[Math.floor(o()*C.length)],virtue:v[Math.floor(o()*v.length)]}))}async function S(r,o){const p=window.Voices.getActive?.()??"sophia",y=window.Voices.list?.().find(m=>m.id===p)||{name:"Sophia"},C=`Seed: ${o}
Archetype: ${r.archetype}
Element: ${r.element}
Virtue: ${r.virtue}
Reflect on how this star expresses the user's inner essence.`,v=await window.Voices.ask(C);a.textContent=`${y.name} speaks`,c.textContent=v||"The Records are silent.",s.classList.add("visible")}t.addEventListener("click",()=>{const r=n.value.trim();if(!r)return;const o=g(r);a.textContent=`Constellation: ${r}`,c.innerHTML=o.map((p,y)=>`${y+1}. ${p.archetype} · ${p.element} · ${p.virtue}`).join(`
`),s.classList.add("visible"),S(o[Math.floor(Math.random()*o.length)],r)}),n.addEventListener("keydown",r=>{r.key==="Enter"&&(r.preventDefault(),t.click())})},I=()=>{const n=document.getElementById("voice-input"),t=document.getElementById("voice-speak-btn");if(!n||!t)return;const s=document.getElementById("codex-modal"),a=document.getElementById("codex-title"),c=document.getElementById("codex-body");t.addEventListener("click",async()=>{const u=n.value.trim();if(u){a.textContent="The Demiurge speaks",c.textContent="Consulting the Records...",s.classList.add("visible");const f=await window.Voices?.ask?.(u);c.textContent=f||"The Records are silent.",n.value=""}}),n.addEventListener("keydown",u=>{u.key==="Enter"&&!u.shiftKey&&(u.preventDefault(),t.click())})},Ee=()=>{const n=document.getElementById("rune-grid"),t=document.getElementById("rules-modal"),s=document.getElementById("rules-title"),a=document.getElementById("rules-desc"),c=document.getElementById("rules-close-btn"),u=document.getElementById("test-law-btn");[{law:"Law of Reflection",symbol:"🪞",desc:"Outer cosmos mirrors inner self."},{law:"Law of Consent",symbol:"🤝",desc:"No soul accessed without permission."},{law:"Law of Cycles",symbol:"♾️",desc:"All things exist in cycles."}].forEach(i=>{const g=document.createElement("div");g.className="rune-glyph",g.textContent=i.symbol,g.addEventListener("click",()=>{s.textContent=i.law,a.textContent=i.desc,t.classList.add("visible")}),n.appendChild(g)}),c.addEventListener("click",()=>t.classList.remove("visible")),u.addEventListener("click",()=>{document.body.classList.add("law-test-active"),setTimeout(()=>document.body.classList.remove("law-test-active"),500)})};M(),l(),d(),I(),Ee(),window.Akashic={ask:n=>window.Voices?.ask?.(n),bindSoul:n=>window.MirrorOfSelf?.addTrace(n),testLaw:()=>{document.body.classList.add("law-test-active"),setTimeout(()=>document.body.classList.remove("law-test-active"),500)}}});
