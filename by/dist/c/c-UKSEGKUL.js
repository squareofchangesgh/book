import{a as v,b as S}from"https://st-p.rmcdn1.net/e0cde9ba/dist/c/c-6BSZRDIS.js";import{d as R}from"https://st-p.rmcdn1.net/e0cde9ba/dist/c/c-5JUHDQEW.js";import{a as B,b as I}from"https://st-p.rmcdn1.net/e0cde9ba/dist/c/c-K45ZXRYF.js";import{a as h,d as $}from"https://st-p.rmcdn1.net/e0cde9ba/dist/c/c-2RBJCKMX.js";import{a as V,g as C}from"https://st-p.rmcdn1.net/e0cde9ba/dist/c/c-MXQB3LDA.js";import{a as y,d as T}from"https://st-p.rmcdn1.net/e0cde9ba/dist/c/c-EJ6UYQ42.js";import{C as f,D as s,E as g,F as b}from"https://st-p.rmcdn1.net/e0cde9ba/dist/c/c-VNZOBZZU.js";import{a as L}from"https://st-p.rmcdn1.net/e0cde9ba/dist/c/c-MBWT6D3G.js";import{b as n,c as M}from"https://st-p.rmcdn1.net/e0cde9ba/dist/c/c-SXBIDYQQ.js";import{c as p,e as E}from"https://st-p.rmcdn1.net/e0cde9ba/dist/c/c-GJYOXBH4.js";import{c as m,d as w}from"https://st-p.rmcdn1.net/e0cde9ba/dist/c/c-KGGRYMSL.js";import{a as c,d as x}from"https://st-p.rmcdn1.net/e0cde9ba/dist/c/c-TZYDFHR2.js";function U({thumbnailMode:e,thumbnailUrl:o,loop:i,videoUrl:a,playing:l,onLoaded:P,onPlay:_}){let u=(0,r.useRef)(null),t=e===!0,[d,k]=(0,r.useState)(!(m.isSafari()&&!t));return(0,r.useEffect)(()=>{l?(u.current?.play(),d||setTimeout(()=>k(!0),500)):u.current?.pause()},[l]),g(f,{children:[s(D,{ref:u,width:"100%",height:"100%",controls:!1,loop:!t&&i,muted:!0,playsInline:!t,poster:o,objectFit:"cover",onPlay:!t&&d?_:void 0,onLoadedMetadata:t?void 0:P,opacity:d?1:0,children:!t&&a?s("source",{src:a,type:"video/mp4"}):null}),!d&&s(v,{src:o,width:"100%",height:"100%",position:"absolute",left:0,objectFit:"cover"})]})}function j(e){let{model:o}=(0,r.useContext)(V);return s(U,{...e,...o})}var r,D,F=c(()=>{"use strict";T();S();r=x(L());w();C();b();D=y.withComponent("video")});function O(){let e=window.RM.config?.root;return!e||e==="/"?"":e.slice(-1)!=="/"?e+"/":e}function A(e){if(e.provider_name!=="self")return null;if(!n.readymag_videos_cdn)throw new Error("Videos CDN URL is not exists");let{isDownloadedSource:o=!1,homepageRewrite:i=!1}=typeof window<"u"?window.RM?.common||{}:{};if(o&&!i){let a=O();return{video:`${a}${e.url}`,thumbnail:`${a}${e.thumbnail_url}`}}return{video:`${n.readymag_videos_cdn}/${e.url}`,thumbnail:`${n.readymag_videos_cdn}/${e.thumbnail_url}`}}function te(e){let o={isValid:!0};if(!e||e.type!=="video/mp4")return o.isValid=!1,o.errorType="FileFormatError",o.errorMessage="We support only .mp4 format",o;if(p("constructor.newUploadLimits")){let i=Number(B.getPermissions().video_upload_limit||0);if(e.size>i)return o.isValid=!1,o.errorType="SubscriptionLimitError",o.errorMessage=`Your limit is ${h(i)}. Upgrade your subscription to increase the video file upload limit`,o}return e.size>n.VIDEOS_BACKGROUND_UPLOAD_SIZE_LIMIT&&(o.isValid=!1,o.errorType="TooLargeError",o.errorMessage=`Video file size must be less than ${Math.floor(n.VIDEOS_BACKGROUND_UPLOAD_SIZE_LIMIT/1024/1024)} mb`),o}function N(e){return!!(e&&e.provider_name==="self")}function ne(e){let o=e?.video;if(o)return N(o)?A(o)?.thumbnail:o.thumbnail_url}var z=c(()=>{"use strict";M();R();I();$();E()});export{U as a,j as b,F as c,A as d,te as e,N as f,ne as g,z as h};
