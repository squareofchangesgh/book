import{a,d as h}from"https://st-p.rmcdn1.net/e0cde9ba/dist/c/c-EJ6UYQ42.js";import{v as u}from"https://st-p.rmcdn1.net/e0cde9ba/dist/c/c-HKXDGYOU.js";import{e as r,i as c}from"https://st-p.rmcdn1.net/e0cde9ba/dist/c/c-US7HSDUX.js";import{c as l,d as p}from"https://st-p.rmcdn1.net/e0cde9ba/dist/c/c-VRG4AYQX.js";import{D as o,F as b}from"https://st-p.rmcdn1.net/e0cde9ba/dist/c/c-VNZOBZZU.js";import{a as d}from"https://st-p.rmcdn1.net/e0cde9ba/dist/c/c-TZYDFHR2.js";function f({size:t,bgColor:g,color:e}){let n=typeof t=="number"?`${t}px`:t&&i[t]?i[t]:i.big,m=t==="big"||t==="medium"?"50%":"100%";return o(a,{display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:g||(t==="big"||t==="medium"?"tomato":"transparent"),height:n,width:n,borderRadius:"100%",children:o(a,{height:m,width:m,border:"2px solid",borderRadius:"100%",css:l`
          animation: ${x} 2s infinite linear;
        `,borderColor:e?`${e} ${e} transparent transparent`:t==="big"||t==="medium"||typeof t=="number"?"white white transparent transparent":`${r.light.tomato} ${r.light.tomato} transparent transparent`})})}var x,i,y,s=d(()=>{"use strict";h();u();c();b();x=p`
  from {
    transform: rotateZ(0deg);
  }
  to {
    transform: rotateZ(360deg);
  }
`,i={small:22,medium:48,big:56};f.defaultProps={size:"big"};y=f});var $=d(()=>{"use strict";s();s()});export{y as a,$ as b};
