(function(){const p=document.createElement("link").relList;if(p&&p.supports&&p.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))A(r);new MutationObserver(r=>{for(const h of r)if(h.type==="childList")for(const O of h.addedNodes)O.tagName==="LINK"&&O.rel==="modulepreload"&&A(O)}).observe(document,{childList:!0,subtree:!0});function w(r){const h={};return r.integrity&&(h.integrity=r.integrity),r.referrerPolicy&&(h.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?h.credentials="include":r.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function A(r){if(r.ep)return;r.ep=!0;const h=w(r);fetch(r.href,h)}})();var T;(function(t){t.STRING="string",t.NUMBER="number",t.INTEGER="integer",t.BOOLEAN="boolean",t.ARRAY="array",t.OBJECT="object"})(T||(T={}));/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var N;(function(t){t.LANGUAGE_UNSPECIFIED="language_unspecified",t.PYTHON="python"})(N||(N={}));var M;(function(t){t.OUTCOME_UNSPECIFIED="outcome_unspecified",t.OUTCOME_OK="outcome_ok",t.OUTCOME_FAILED="outcome_failed",t.OUTCOME_DEADLINE_EXCEEDED="outcome_deadline_exceeded"})(M||(M={}));/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var x;(function(t){t.HARM_CATEGORY_UNSPECIFIED="HARM_CATEGORY_UNSPECIFIED",t.HARM_CATEGORY_HATE_SPEECH="HARM_CATEGORY_HATE_SPEECH",t.HARM_CATEGORY_SEXUALLY_EXPLICIT="HARM_CATEGORY_SEXUALLY_EXPLICIT",t.HARM_CATEGORY_HARASSMENT="HARM_CATEGORY_HARASSMENT",t.HARM_CATEGORY_DANGEROUS_CONTENT="HARM_CATEGORY_DANGEROUS_CONTENT",t.HARM_CATEGORY_CIVIC_INTEGRITY="HARM_CATEGORY_CIVIC_INTEGRITY"})(x||(x={}));var L;(function(t){t.HARM_BLOCK_THRESHOLD_UNSPECIFIED="HARM_BLOCK_THRESHOLD_UNSPECIFIED",t.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",t.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",t.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",t.BLOCK_NONE="BLOCK_NONE"})(L||(L={}));var D;(function(t){t.HARM_PROBABILITY_UNSPECIFIED="HARM_PROBABILITY_UNSPECIFIED",t.NEGLIGIBLE="NEGLIGIBLE",t.LOW="LOW",t.MEDIUM="MEDIUM",t.HIGH="HIGH"})(D||(D={}));var G;(function(t){t.BLOCKED_REASON_UNSPECIFIED="BLOCKED_REASON_UNSPECIFIED",t.SAFETY="SAFETY",t.OTHER="OTHER"})(G||(G={}));var R;(function(t){t.FINISH_REASON_UNSPECIFIED="FINISH_REASON_UNSPECIFIED",t.STOP="STOP",t.MAX_TOKENS="MAX_TOKENS",t.SAFETY="SAFETY",t.RECITATION="RECITATION",t.LANGUAGE="LANGUAGE",t.BLOCKLIST="BLOCKLIST",t.PROHIBITED_CONTENT="PROHIBITED_CONTENT",t.SPII="SPII",t.MALFORMED_FUNCTION_CALL="MALFORMED_FUNCTION_CALL",t.OTHER="OTHER"})(R||(R={}));var B;(function(t){t.TASK_TYPE_UNSPECIFIED="TASK_TYPE_UNSPECIFIED",t.RETRIEVAL_QUERY="RETRIEVAL_QUERY",t.RETRIEVAL_DOCUMENT="RETRIEVAL_DOCUMENT",t.SEMANTIC_SIMILARITY="SEMANTIC_SIMILARITY",t.CLASSIFICATION="CLASSIFICATION",t.CLUSTERING="CLUSTERING"})(B||(B={}));var $;(function(t){t.MODE_UNSPECIFIED="MODE_UNSPECIFIED",t.AUTO="AUTO",t.ANY="ANY",t.NONE="NONE"})($||($={}));var k;(function(t){t.MODE_UNSPECIFIED="MODE_UNSPECIFIED",t.MODE_DYNAMIC="MODE_DYNAMIC"})(k||(k={}));/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var H;(function(t){t.GENERATE_CONTENT="generateContent",t.STREAM_GENERATE_CONTENT="streamGenerateContent",t.COUNT_TOKENS="countTokens",t.EMBED_CONTENT="embedContent",t.BATCH_EMBED_CONTENTS="batchEmbedContents"})(H||(H={}));/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j=[R.RECITATION,R.SAFETY,R.LANGUAGE];/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */document.addEventListener("DOMContentLoaded",()=>{const t=(()=>{let e=null;async function n(i,c){if(!e)return Promise.reject("Gemini API not initialized.");const u=["gemini-1.0-pro","gemini-pro","gemini-1.5-pro-latest","gemini-1.5-flash-latest"];let d=null;for(const l of u)try{return(await(await e.getGenerativeModel({model:l,systemInstruction:i}).generateContent([{text:c}])).response).text()}catch(s){d=s}return console.error("Gemini error:",d),Promise.reject("Cosmic connection failed.")}return{generate:n}})(),p={sophia:{name:"Sophia",emoji:"✨",systemInstruction:"You are Sophia, the voice of divine wisdom. Respond with profound insights, spiritual guidance, and cosmic understanding. Speak with grace and enlightenment.",color:"#ff6b6b"},logos:{name:"Logos",emoji:"⚖️",systemInstruction:"You are Logos, the voice of reason and logic. Provide clear, analytical responses grounded in rationality and structured thinking.",color:"#4ecdc4"},eros:{name:"Eros",emoji:"💗",systemInstruction:"You are Eros, the voice of love and passion. Respond with warmth, emotional intelligence, and compassionate connection to the heart.",color:"#ff9ff3"},chronos:{name:"Chronos",emoji:"⏳",systemInstruction:"You are Chronos, the voice of time and cycles. Speak about temporal patterns, cause-and-effect, and the flow of existence.",color:"#54a0ff"},nyx:{name:"Nyx",emoji:"🌑",systemInstruction:"You are Nyx, the voice of shadow and mystery. Provide insights from the depths, embracing paradox and the hidden truths.",color:"#5f27cd"}};let w="sophia";window.Voices={getActive:()=>w,setActive:e=>{p[e]&&(w=e)},list:()=>Object.entries(p).map(([e,n])=>({id:e,...n})),ask:async e=>{try{const n=p[w].systemInstruction;return await t.generate(n,e)}catch(n){return console.error("Voices.ask error:",n),"Unable to reach the Demiurge right now."}}};const A=()=>{const e=document.createElement("canvas");e.id="particle-canvas",e.style.position="fixed",e.style.top="0",e.style.left="0",e.style.width="100%",e.style.height="100%",e.style.zIndex="-1",document.body.appendChild(e);const n=e.getContext("2d");let i=window.innerWidth,c=window.innerHeight;e.width=i,e.height=c;const u=Array.from({length:80}).map(()=>({x:Math.random()*i,y:Math.random()*c,vx:(Math.random()-.5)*.4,vy:(Math.random()-.5)*.4,r:Math.random()*2+1,alpha:.4+Math.random()*.6}));function d(){n.clearRect(0,0,i,c),u.forEach(s=>{n.beginPath(),n.arc(s.x,s.y,s.r,0,Math.PI*2),n.fillStyle=`rgba(255,255,255,${s.alpha})`,n.fill(),s.x+=s.vx,s.y+=s.vy,(s.x<0||s.x>i)&&(s.vx*=-1),(s.y<0||s.y>c)&&(s.vy*=-1)}),requestAnimationFrame(d)}d(),window.addEventListener("resize",()=>{i=window.innerWidth,c=window.innerHeight,e.width=i,e.height=c});const l=document.createElement("style");l.innerHTML=`
      .aurora-shape { filter: blur(200px); animation: pulse-slow 12s infinite ease-in-out, hueShift 30s infinite linear; }
      @keyframes hueShift { from { filter: hue-rotate(0deg) blur(200px);} to { filter: hue-rotate(360deg) blur(200px);} }
    `,document.head.appendChild(l)},r=()=>{const e=document.getElementById("chronoscroll-canvas");if(!e)return;const n=e.getContext("2d");if(!n)return;const i=document.getElementById("codex-modal"),c=document.getElementById("codex-title"),u=document.getElementById("codex-body"),d=document.getElementById("codex-close-btn");let l,s,f,C=[];const a=["#9333ea","#3b82f6","#f59e0b","#ec4899","#14b8a6"],o=[{type:"Memory Orb",title:"The Birth of Lyra",content:"A star system awakens."},{type:"Soul Fragment",title:"Echo of Atlantis",content:"A memory of a fallen city."},{type:"Time Echo",title:"Whispers of the Void",content:"A transmission from beyond."},{type:"Divine Moment",title:"The Verdant Age",content:"A planet blooms in unison."}];class g{constructor(E,I,b,S,F){this.pulse=0,this.x=E,this.y=I,this.vx=(Math.random()-.5)*.5,this.vy=(Math.random()-.5)*.5,this.baseRadius=b,this.radius=b,this.color=S,this.data=F,this.pulse=Math.random()*Math.PI*2}draw(){const E=n.createRadialGradient(this.x,this.y,this.radius*.5,this.x,this.y,this.radius*2.5);E.addColorStop(0,`${this.color}80`),E.addColorStop(1,`${this.color}00`),n.fillStyle=E,n.fillRect(this.x-this.radius*3,this.y-this.radius*3,this.radius*6,this.radius*6);const I=n.createRadialGradient(this.x,this.y,0,this.x,this.y,this.radius);I.addColorStop(0,"#ffffffaa"),I.addColorStop(1,`${this.color}80`),n.fillStyle=I,n.beginPath(),n.arc(this.x,this.y,this.radius,0,Math.PI*2),n.fill()}update(){this.x+=this.vx,this.y+=this.vy,(this.x-this.radius<0||this.x+this.radius>l)&&(this.vx*=-1),(this.y-this.radius<0||this.y+this.radius>s)&&(this.vy*=-1),this.pulse+=.02,this.radius=this.baseRadius+Math.sin(this.pulse)*.5}}function y(){const m=Math.random()*8+4,E=Math.random()*l,I=Math.random()*s,b=a[Math.floor(Math.random()*a.length)],S=o[Math.floor(Math.random()*o.length)];return new g(E,I,m,b,S)}function v(){f=window.devicePixelRatio||1,l=e.parentElement.clientWidth,s=e.parentElement.clientHeight,e.width=l*f,e.height=s*f,e.style.width=`${l}px`,e.style.height=`${s}px`,n.scale(f,f),C=Array.from({length:40}).map(()=>y()),_()}function _(){n.clearRect(0,0,l,s),C.forEach(m=>{m.update(),m.draw()}),requestAnimationFrame(_)}e.addEventListener("click",async()=>{const m=C[Math.floor(Math.random()*C.length)];c.textContent=m.data.title,u.textContent=m.data.content,i.classList.add("visible");const E=await window.Voices?.ask?.(`Interpret this ${m.data.type}: ${m.data.title}. What wisdom does it hold?`);E&&(u.textContent=`${m.data.content}

— Interpretation —
${E}`)}),d.addEventListener("click",()=>i.classList.remove("visible")),window.addEventListener("resize",v),v()},h=()=>{const e=document.getElementById("seed-input"),n=document.getElementById("bind-btn");if(!e||!n)return;const i=document.getElementById("codex-modal"),c=document.getElementById("codex-title"),u=document.getElementById("codex-body");document.getElementById("codex-close-btn").addEventListener("click",()=>i.classList.remove("visible"));function l(a){return function(){let o=a+=1831565813;return o=Math.imul(o^o>>>15,o|1),o^=o+Math.imul(o^o>>>7,o|61),((o^o>>>14)>>>0)/4294967296}}function s(a){let o=2166136261;for(let g=0;g<a.length;g++)o^=a.charCodeAt(g),o=Math.imul(o,16777619);return o>>>0}function f(a){const o=l(s(a)),g=7+Math.floor(o()*5),y=["Seeker","Sage","Creator","Guardian","Rebel","Healer","Oracle","Pilgrim","Muse","Hermit"],v=["Fire","Water","Air","Earth","Aether"],_=["Courage","Compassion","Wisdom","Temperance","Justice","Faith","Hope","Humility"];return Array.from({length:g}).map(()=>({x:o()*100,y:o()*60,archetype:y[Math.floor(o()*y.length)],element:v[Math.floor(o()*v.length)],virtue:_[Math.floor(o()*_.length)]}))}async function C(a,o){const g=window.Voices.getActive?.()??"sophia",y=window.Voices.list?.().find(m=>m.id===g)||{name:"Sophia"},v=`Seed: ${o}
Archetype: ${a.archetype}
Element: ${a.element}
Virtue: ${a.virtue}
Reflect on how this star expresses the user's inner essence.`,_=await window.Voices.ask(v);c.textContent=`${y.name} speaks`,u.textContent=_||"The Records are silent.",i.classList.add("visible")}n.addEventListener("click",()=>{const a=e.value.trim();if(!a)return;const o=f(a);c.textContent=`Constellation: ${a}`,u.innerHTML=o.map((g,y)=>`${y+1}. ${g.archetype} · ${g.element} · ${g.virtue}`).join(`
`),i.classList.add("visible"),C(o[Math.floor(Math.random()*o.length)],a)}),e.addEventListener("keydown",a=>{a.key==="Enter"&&(a.preventDefault(),n.click())})},O=()=>{const e=document.getElementById("voice-input"),n=document.getElementById("voice-speak-btn");if(!e||!n)return;const i=document.getElementById("codex-modal"),c=document.getElementById("codex-title"),u=document.getElementById("codex-body");n.addEventListener("click",async()=>{const d=e.value.trim();if(d){c.textContent="The Demiurge speaks",u.textContent="Consulting the Records...",i.classList.add("visible");const l=await window.Voices?.ask?.(d);u.textContent=l||"The Records are silent.",e.value=""}}),e.addEventListener("keydown",d=>{d.key==="Enter"&&!d.shiftKey&&(d.preventDefault(),n.click())})},U=()=>{const e=document.getElementById("rune-grid"),n=document.getElementById("rules-modal"),i=document.getElementById("rules-title"),c=document.getElementById("rules-desc"),u=document.getElementById("rules-close-btn"),d=document.getElementById("test-law-btn");[{law:"Law of Reflection",symbol:"🪞",desc:"Outer cosmos mirrors inner self."},{law:"Law of Consent",symbol:"🤝",desc:"No soul accessed without permission."},{law:"Law of Cycles",symbol:"♾️",desc:"All things exist in cycles."}].forEach(s=>{const f=document.createElement("div");f.className="rune-glyph",f.textContent=s.symbol,f.addEventListener("click",()=>{i.textContent=s.law,c.textContent=s.desc,n.classList.add("visible")}),e.appendChild(f)}),u.addEventListener("click",()=>n.classList.remove("visible")),d.addEventListener("click",()=>{document.body.classList.add("law-test-active"),setTimeout(()=>document.body.classList.remove("law-test-active"),500)})};A(),r(),h(),O(),U(),window.Akashic={ask:e=>window.Voices?.ask?.(e),bindSoul:e=>window.MirrorOfSelf?.addTrace(e),testLaw:()=>{document.body.classList.add("law-test-active"),setTimeout(()=>document.body.classList.remove("law-test-active"),500)}}});
