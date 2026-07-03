import{c as s,b as f}from"./index-7B6m8-IW.js";import{j as e,m as o}from"./motion-CFI7ASVz.js";import{r as h}from"./router-CHHfm-p0.js";/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=s("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=s("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=s("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]);function v({front:l,back:n,className:d,height:r=340,triggerOnHover:t=!1}){const[c,i]=h.useState(!1),a=c;return e.jsxs("div",{className:f("relative cursor-pointer select-none",d),style:{height:r,perspective:"1200px"},onClick:()=>!t&&i(p=>!p),onMouseEnter:()=>t&&i(!0),onMouseLeave:()=>t&&i(!1),children:[e.jsxs(o.div,{className:"relative w-full h-full",animate:{rotateY:a?180:0},transition:{duration:.6,ease:[.16,1,.3,1]},style:{transformStyle:"preserve-3d"},children:[e.jsx("div",{className:"absolute inset-0 rounded-2xl overflow-hidden",style:{backfaceVisibility:"hidden",WebkitBackfaceVisibility:"hidden"},children:l}),e.jsx("div",{className:"absolute inset-0 rounded-2xl overflow-hidden",style:{backfaceVisibility:"hidden",WebkitBackfaceVisibility:"hidden",transform:"rotateY(180deg)"},children:n})]}),!t&&e.jsx(o.div,{animate:{opacity:a?0:1},className:"absolute bottom-3 right-3 text-[9px] text-white/30 uppercase tracking-widest font-bold pointer-events-none",children:"Click to flip"})]})}export{x as A,b as C,v as F,k as Z};
