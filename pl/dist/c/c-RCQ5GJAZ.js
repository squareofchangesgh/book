import{a as i}from"https://st-p.rmcdn1.net/e0cde9ba/dist/c/c-2TSYQWVN.js";import{a as n,b as p}from"https://st-p.rmcdn1.net/e0cde9ba/dist/c/c-DAHNH3FT.js";import"https://st-p.rmcdn1.net/e0cde9ba/dist/c/c-OKZSTQSX.js";import"https://st-p.rmcdn1.net/e0cde9ba/dist/c/c-L26XEBE2.js";import"https://st-p.rmcdn1.net/e0cde9ba/dist/c/c-YIBTG3FD.js";import"https://st-p.rmcdn1.net/e0cde9ba/dist/c/c-42SFA7ZB.js";import"https://st-p.rmcdn1.net/e0cde9ba/dist/c/c-TQMFKW4O.js";import"https://st-p.rmcdn1.net/e0cde9ba/dist/c/c-5SLUZRMW.js";import"https://st-p.rmcdn1.net/e0cde9ba/dist/c/c-4NSILI54.js";import"https://st-p.rmcdn1.net/e0cde9ba/dist/c/c-PEYC24KP.js";import"https://st-p.rmcdn1.net/e0cde9ba/dist/c/c-XJQ7OF5W.js";import"https://st-p.rmcdn1.net/e0cde9ba/dist/c/c-22ZYTENX.js";import"https://st-p.rmcdn1.net/e0cde9ba/dist/c/c-I6RXPP7W.js";import"https://st-p.rmcdn1.net/e0cde9ba/dist/c/c-TW324QB3.js";import"https://st-p.rmcdn1.net/e0cde9ba/dist/c/c-DQDVK4WP.js";import"https://st-p.rmcdn1.net/e0cde9ba/dist/c/c-MXQB3LDA.js";import"https://st-p.rmcdn1.net/e0cde9ba/dist/c/c-7JDZLQQ4.js";import"https://st-p.rmcdn1.net/e0cde9ba/dist/c/c-JWQSDUFI.js";import"https://st-p.rmcdn1.net/e0cde9ba/dist/c/c-SUQN7X7E.js";import"https://st-p.rmcdn1.net/e0cde9ba/dist/c/c-WVUZA6DL.js";import{n as s,o as u}from"https://st-p.rmcdn1.net/e0cde9ba/dist/c/c-42TSFLLH.js";import"https://st-p.rmcdn1.net/e0cde9ba/dist/c/c-TBONR54I.js";import"https://st-p.rmcdn1.net/e0cde9ba/dist/c/c-JTEJSVZP.js";import"https://st-p.rmcdn1.net/e0cde9ba/dist/c/c-OEU46UX3.js";import"https://st-p.rmcdn1.net/e0cde9ba/dist/c/c-5R57BBFA.js";import"https://st-p.rmcdn1.net/e0cde9ba/dist/c/c-G4GX3XOZ.js";import"https://st-p.rmcdn1.net/e0cde9ba/dist/c/c-Y3K5ZMDI.js";import"https://st-p.rmcdn1.net/e0cde9ba/dist/c/c-HKXDGYOU.js";import"https://st-p.rmcdn1.net/e0cde9ba/dist/c/c-Y4QUC5YI.js";import"https://st-p.rmcdn1.net/e0cde9ba/dist/c/c-US7HSDUX.js";import"https://st-p.rmcdn1.net/e0cde9ba/dist/c/c-AG4TV67I.js";import"https://st-p.rmcdn1.net/e0cde9ba/dist/c/c-VRG4AYQX.js";import"https://st-p.rmcdn1.net/e0cde9ba/dist/c/c-VNZOBZZU.js";import"https://st-p.rmcdn1.net/e0cde9ba/dist/c/c-MBWT6D3G.js";import"https://st-p.rmcdn1.net/e0cde9ba/dist/c/c-BHZEZWL4.js";import"https://st-p.rmcdn1.net/e0cde9ba/dist/c/c-VUD7OPNE.js";import"https://st-p.rmcdn1.net/e0cde9ba/dist/c/c-M4TEEAX7.js";import"https://st-p.rmcdn1.net/e0cde9ba/dist/c/c-SXBIDYQQ.js";import"https://st-p.rmcdn1.net/e0cde9ba/dist/c/c-PR2DJXFR.js";import"https://st-p.rmcdn1.net/e0cde9ba/dist/c/c-GJYOXBH4.js";import"https://st-p.rmcdn1.net/e0cde9ba/dist/c/c-3SFTLRL3.js";import{b as a}from"https://st-p.rmcdn1.net/e0cde9ba/dist/c/c-W2OJRSJR.js";import"https://st-p.rmcdn1.net/e0cde9ba/dist/c/c-CDLDI33S.js";import"https://st-p.rmcdn1.net/e0cde9ba/dist/c/c-KGGRYMSL.js";import{d}from"https://st-p.rmcdn1.net/e0cde9ba/dist/c/c-TZYDFHR2.js";var o=d(a());u();p();var l=i.extend({DO_NOT_WAIT_FOR_PRELOAD:!0,initialize:function(){return i.prototype.initialize.apply(this,arguments),this.current_type==="type_like_box"&&(this.current_type="type_page",this.type_page=this.type_like_box),this},render:function(){return this.makeBox("widget-facebook"),this.rendered=!0,this.started?this.start():!RM.screenshot&&this.widgetIsLoaded(),this},start:function(){if(this.started=!0,this.destroyed||!this.rendered||this.innerRendered)return this;this.innerRendered=!0;let e=this,r,t,h=["type_like_button","type_page","type_comments"];return this.current_type?(t=this[this.current_type],t.w=this.w,t.h=this.h,t.use_own_url==="mag"?t.url=this.page.mag.getUrl():(t.use_own_url==="page"||!t.url)&&(t.url=this.page.getUrl()),r=n["template-constructor-block-facebook-"+this.current_type],this.$el.html(r({data:t})).removeClass(h.join(" ")).addClass(this.current_type),this.current_type==="type_comments"?this.$el.css({"overflow-x":"hidden","overflow-y":"auto"}):this.current_type!=="type_like_button"&&this.$el.css({overflow:"hidden"}),s.initFacebookAPI(function(){e.destroyed||!e.innerRendered||window.FB.XFBML.parse(e.$el.get(0),function(){o.default.delay(function(){e.destroyed||!e.innerRendered||(e.widgetIsLoaded(),e.current_type==="type_like_button"&&(e.iframe_w=e.$("iframe").width(),e.iframe_h=e.$("iframe").height()))},500)})}),this):(this.widgetIsLoaded(),this)},stop:function(){return this.started=!1,this}}),y=l;export{y as default};
