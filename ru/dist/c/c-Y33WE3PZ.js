import{b as N}from"https://st-p.rmcdn1.net/e0cde9ba/dist/c/c-RTVVU7ZZ.js";import{a as x,b as Y}from"https://st-p.rmcdn1.net/e0cde9ba/dist/c/c-TJUIF3L3.js";import{h as s,j as f}from"https://st-p.rmcdn1.net/e0cde9ba/dist/c/c-QJHTI57L.js";import{a as w,d as z}from"https://st-p.rmcdn1.net/e0cde9ba/dist/c/c-EJ6UYQ42.js";import{a as R,g as k,h as $}from"https://st-p.rmcdn1.net/e0cde9ba/dist/c/c-5R57BBFA.js";import{v as B}from"https://st-p.rmcdn1.net/e0cde9ba/dist/c/c-HKXDGYOU.js";import{c as L}from"https://st-p.rmcdn1.net/e0cde9ba/dist/c/c-VRG4AYQX.js";import{D as d,F as E}from"https://st-p.rmcdn1.net/e0cde9ba/dist/c/c-VNZOBZZU.js";import{a as A}from"https://st-p.rmcdn1.net/e0cde9ba/dist/c/c-MBWT6D3G.js";import{b as c,c as _}from"https://st-p.rmcdn1.net/e0cde9ba/dist/c/c-SXBIDYQQ.js";import{a as T,d as W,f as a}from"https://st-p.rmcdn1.net/e0cde9ba/dist/c/c-TZYDFHR2.js";function j({uri:h,onReady:P,player:e,lottieSizes:n}){let[r,S]=(0,t.useState)(!1),m=(0,t.useRef)(null),o=k(e?.state||{}),u=(0,t.useRef)(null),[I,M]=(0,t.useState)("100%"),[F,H]=(0,t.useState)("100%"),[p,g]=(0,t.useState)(!1),b=h?c.content_cdn_origin?`https://${c.content_cdn_origin}/${h}`:h:"";function O(l,y){l===s.Ready&&(m.current&&e?.setPlayer(m.current),S(!0),P?.()),e?.triggerInnerEvent(l,y)}return(0,t.useEffect)(()=>{let l=new ResizeObserver(y=>{let i=y[0].contentRect;if(!i||!i.width||!i.height||!o.animationWidth||!o.animationHeight)return;let v=o.animationWidth/o.animationHeight,C=i.width/i.height;i.height<=Z?g(!0):p&&g(!1),M(v<C?"100%":`${i.width}px`),H(v<C?"100%":`${i.height}px`),n&&n({width:i.width,height:i.height})});return u.current&&l.observe(u.current),()=>{l.disconnect()}},[p,o.animationHeight,o.animationWidth,n]),(0,t.useEffect)(()=>()=>e?.destroy(),[e]),d(w,{ref:u,width:"100%",height:"100%",flexDirection:"column",display:"flex",alignItems:"center",justifyContent:"center",overflow:"hidden",css:p?L`
              div {
                display: flex;
              }
            `:void 0,children:b&&o.isMounted?d(x,{ref:m,src:b,onEvent:O,style:{visibility:r?"inherit":"hidden",width:I,height:F,display:"flex"}}):null})}var t,Z,D,ae,q=T(()=>{"use strict";Y();t=W(A());_();N();$();z();B();E();Z=14,D=class extends EventTarget{constructor({lottiePlayer:e}={}){super();a(this,"innerPlayer");a(this,"loop",!1);a(this,"loopCount");a(this,"direction",1);a(this,"speed",1);a(this,"range");a(this,"state",R({currentFrame:0,isPlaying:!1,totalFrames:0,frameRate:0,isPaused:!1,isComplete:!1,isMounted:!0}));e&&this.setPlayer(e)}play(e={}){if(this.innerPlayer){if(this.state.isPaused){this.resume();return}this.setPlaybackOptions(e),this.innerPlayer.play(),this.state.isComplete=!1,this.state.isPlaying=!0}}setPlaybackOptions(e={}){this.innerPlayer&&("loop"in e&&(this.loop=e.loop||!1),e.direction&&(this.direction=e.direction),e.speed&&(this.speed=e.speed),"loopCount"in e&&(this.loopCount=e.loopCount,this.direction===-1&&e.loopCount&&(this.loopCount=e.loopCount-1,e.loopCount===1&&(this.loop=!1))),this.innerPlayer.setLoop(this.loop&&this.loopCount?this.loopCount:!!this.loop),!this.loop||this.loop==="loop"?this.innerPlayer.setMode(f.Normal):this.loop==="swing"&&this.innerPlayer.setMode(f.Bounce),this.innerPlayer.setDirection(this.direction),this.innerPlayer.setSpeed(this.speed),e.range&&this.setRange(e.range))}setRange(e){this.range?.[0]===e?.[0]&&this.range?.[1]===e?.[1]||(this.range=e,this.range?(this.innerPlayer?.playSegments(this.range,!0),this.seek(0),this.state.isPlaying||this.stop()):this.innerPlayer?.resetSegments(!0))}stop(){this.innerPlayer?.stop(),this.state.isPaused=!1,this.state.isPlaying=!1}pause(){this.state.isPlaying&&(this.innerPlayer?.pause(),this.state.isPaused=!0,this.state.isPlaying=!1)}resume(){this.state.isPaused&&(this.innerPlayer?.play(),this.state.isComplete=!1,this.state.isPlaying=!0,this.state.isPaused=!1)}toggle(){this.state.isPlaying?this.pause():this.play()}seek(e){let n=Math.max(Math.min(e,this.state.totalFrames-1),0);this.innerPlayer?.seek(n)}setPlayer(e){this.innerPlayer=e,this.state.totalFrames=this.innerPlayer.totalFrames||0}triggerInnerEvent(e,n){this.handleInnerEvent(e,n)}handleInnerEvent(e,n){let r=this.innerPlayer?.getAnimationInstance();switch(e){case s.Complete:this.state.isComplete=!0,this.dispatchEvent(new Event("Complete"));break;case s.LoopComplete:this.dispatchEvent(new Event("LoopComplete"));break;case s.Stop:case s.Pause:this.state.isPlaying=!1;break;case s.Frame:this.state.currentFrame=Math.floor(n.frame);break;case s.Ready:this.state.totalFrames=this.innerPlayer?.totalFrames||0,this.state.frameRate=r?.frameRate||0,this.state.animationWidth=r?.animationData.w,this.state.animationHeight=r?.animationData.h,this.dispatchEvent(new Event("Ready"));break}}remount(){this.state.isMounted=!1,setTimeout(()=>{this.state.isMounted=!0},20)}destroy(){this.innerPlayer?.destroy()}};ae=j});export{D as a,ae as b,q as c};
