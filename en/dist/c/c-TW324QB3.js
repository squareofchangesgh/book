import{a as T}from"https://st-p.rmcdn1.net/e0cde9ba/dist/c/c-MBWT6D3G.js";import{a as p,d as b}from"https://st-p.rmcdn1.net/e0cde9ba/dist/c/c-TZYDFHR2.js";function L(e){let u=e,t=[],r=[];function d(n){let i=u;u=n,t.forEach(({update:a,options:s})=>{(!s||!s.shouldUpdate||!s.shouldUpdate(i,n))&&a()}),r.forEach(a=>{a&&typeof a=="function"&&a(n)})}function m(n){let i=O();return(n?.hookType==="layout"?o.useLayoutEffect:o.useEffect)(()=>{let c={options:n,update:i};return t.push(c),()=>{f(t,c)}},[]),[u,d]}function l(){return u}function S(n){return r.push(n),()=>{f(r,n)}}return[m,d,l,S]}function O(){let[,e]=(0,o.useState)({});return(0,o.useCallback)(()=>{e({})},[])}function f(e,u){let t=e.indexOf(u);t!==-1&&e.splice(t,1)}var o,h=p(()=>{"use strict";o=b(T())});var y,Q,C=p(()=>{"use strict";y={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>e*(2-e),easeInOutQuad:e=>e<.5?2*e*e:-1+(4-2*e)*e,easeInCubic:e=>e*e*e,easeOutCubic:e=>--e*e*e+1,easeInOutCubic:e=>e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1- --e*e*e*e,easeInOutQuart:e=>e<.5?8*e*e*e*e:1-8*--e*e*e*e,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1+--e*e*e*e*e,easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e},Q=y});export{L as a,h as b,Q as c,C as d};
