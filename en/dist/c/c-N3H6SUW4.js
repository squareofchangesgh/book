import{a as f,b as d}from"https://st-p.rmcdn1.net/e0cde9ba/dist/c/c-SHXN2MUC.js";import{a as l}from"https://st-p.rmcdn1.net/e0cde9ba/dist/c/c-MBWT6D3G.js";import{a as n,d as u}from"https://st-p.rmcdn1.net/e0cde9ba/dist/c/c-TZYDFHR2.js";var t,i,H,g=n(()=>{"use strict";t=u(l());d();i=e=>e?{width:e.offsetWidth,height:e.offsetHeight,scrollWidth:e.scrollWidth,scrollHeight:e.scrollHeight,offsetWidth:e.offsetWidth,offsetHeight:e.offsetHeight}:{width:0,height:0,scrollWidth:0,scrollHeight:0,offsetWidth:0,offsetHeight:0},H=(e,o)=>{let[c,h]=(0,t.useState)(i(e.current)),r=(0,t.useCallback)(()=>{e.current&&h(i(e.current))},[e]);return(0,t.useLayoutEffect)(()=>{if(!e.current)return;r();let s=new f(()=>{r()});return o?s.unobserve(e.current):s.observe(e.current),()=>{s.disconnect()}},[e,r,o]),c}});export{H as a,g as b};
