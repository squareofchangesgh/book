import{a as F}from"https://st-p.rmcdn1.net/e0cde9ba/dist/c/c-26F6U5D6.js";import{a as y,b as j}from"https://st-p.rmcdn1.net/e0cde9ba/dist/c/c-H5C74J7F.js";import{n as E,o as k,r as S,s as z}from"https://st-p.rmcdn1.net/e0cde9ba/dist/c/c-42TSFLLH.js";import{a as P}from"https://st-p.rmcdn1.net/e0cde9ba/dist/c/c-JTEJSVZP.js";import{b as _,c as A}from"https://st-p.rmcdn1.net/e0cde9ba/dist/c/c-SXBIDYQQ.js";import{a as x}from"https://st-p.rmcdn1.net/e0cde9ba/dist/c/c-3SFTLRL3.js";import{b as R}from"https://st-p.rmcdn1.net/e0cde9ba/dist/c/c-W2OJRSJR.js";import{a as M,d as I}from"https://st-p.rmcdn1.net/e0cde9ba/dist/c/c-TZYDFHR2.js";function T(t,e){if(!t)return;let i=["allow-top-navigation","allow-top-navigation-by-user-activation","allow-modals","allow-popups","allow-popups-to-escape-sandbox"],n=["allow-scripts","allow-forms","allow-same-origin"],r=e&&Array.isArray(e)?e.filter(function(o){return!d.default.contains(i,o.toLowerCase())}):n;t.attr("sandbox",r.join(" "))}var c,v,d,C,f,a,b,X,H=M(()=>{"use strict";c=I(x()),v=I(P()),d=I(R());z();A();k();j();C=I(F()),f={},a={};a.findPlugin=function(t){let e=(0,C.getEmbedType)(t.code);return d.default.find(f,function(i,n){return n.toLowerCase()===e})};b=v.default.View.extend({embed_type:null,containerSelector:null,resizable:!0,proportional:!1,forceFrameSize:!1,initialize:function(t){this.block=t.block,this.widget=t.widget,d.default.bindAll(this),this.isInViewer=RM.viewerRouter||RM.constructorRouter&&RM.constructorRouter.preview},parse:function(t,e){return e(t)},sanitize:function(t){return(0,c.default)(t)},draw:function(t){t()}});a.instagramEmbedCallbacks=[];a.initInstagram=function(t){if(window.instgrm&&window.instgrm.Embeds&&d.default.isFunction(window.instgrm.Embeds.process))return instgrm.Embeds.process(),t();a.instagramEmbedCallbacks.push(t),a.instagramInitXhr&&a.instagramInitXhr.abort(),(0,c.default)('body > script[src^="//platform.instagram.com"]').remove(),a.instagramInitXhr=c.default.ajax({url:S.selectProtocol("//platform.instagram.com/en_US/embeds.js"),dataType:"script",cache:!0,success:function(){d.default.each(a.instagramEmbedCallbacks,function(e){d.default.isFunction(e)&&e()})}})};f.Instagram=b.extend({embed_type:"instagram",containerSelector:"iframe",resizable:!0,initialize:function(){b.prototype.initialize.apply(this,arguments),this.block&&d.default.extend(this.block.frame,{minwidth:164,minheight:264})},parse:function(t,e){return e(t.replace(/<script.*script>/i,""))},draw:function(t,e,i){let n,r,o,l,m,s=0,u=100,g=20,h=50,p=!1;e.html(t),a.initInstagram(function(){m=setInterval(function(){if(s++,n=e.children(this.containerSelector),r=n.height(),r||s>g){if(r||s>h){r&&RM.common.mode==="constructor"&&(o=n.width(),l=n.height()),clearInterval(m),i(o,l);return}if(p)return;p=!0,i()}}.bind(this),u)}.bind(this))},customResizeHandler:function(t){return t}});a.pinterestEmbedCallbacks=[];a.initPinterest=function(t){let e,i=0,n=20;if(d.default.isFunction(window.parsePinBtns))return t();a.pinterestEmbedCallbacks.push(t),(0,c.default)('body > script[src^="assets.pinterest.com/js/pinit.js"]').remove(),(0,c.default)("body").prepend((0,c.default)('<script defer src="//assets.pinterest.com/js/pinit.js" data-pin-build="parsePinBtns"><\/script>')),e=setInterval(function(){i++,(d.default.isFunction(window.parsePinBtns)||i>n)&&(clearInterval(e),t())},100)};f.Pinterest=b.extend({embed_type:"pinterest",containerSelector:"a",resizable:!1,forceFrameSize:!0,containerSelectors:{buttonPin:"span",buttonFollow:"span",embedPin:"span",embedUser:"span",embedBoard:"span"},parse:function(t,e){let i=t.match(/data-pin-do=\"(\S+)\"/);return d.default.isArray(i)&&i[1]&&(this.pinterestType=i[1],this.containerSelector=this.containerSelectors[this.pinterestType]||this.containerSelector),e&&e(t.replace(/<script.*script>/i,""))},draw:function(t,e,i){a.initPinterest(function(){let n,r,o,l,m,s=0,u=100,g=20,h=50,p=!1,w;e.html(t),this.pinterestType||this.parse(t[0].outerHTML),this.pinterestType&&e.addClass(this.pinterestType),window.parsePinBtns(e.get(0)),m=setInterval(function(){if(s++,n=e.children(this.containerSelector).filter(function(){return/PIN_\d+/.test(this.className)}),r=n.height(),r||s>g){if(r||s>h){r&&RM.common.mode==="constructor"&&(o=n.outerWidth(!0),l=n.outerHeight(!0),this.pinterestType=="buttonFollow"&&(w=n.children("i"),w.length&&(o+=(w.outerWidth()||1)-1))),clearInterval(m),i(o,l);return}if(p)return;p=!0,i()}}.bind(this),u)}.bind(this))}});f.FacebookVideo=b.extend({embed_type:"fbvideo",containerSelector:"iframe",resizable:!0,proportional:!0,forceFrameSize:!0,initialize:function(){b.prototype.initialize.apply(this,arguments),this.block&&d.default.extend(this.block.frame,{minwidth:220,minheight:124})},parse:function(t,e){return e(t.replace(/<script.*script>/gi,"").replace(/<div\s+id=(\'|\")fb-root(\'|\")><\/div>/gi,""))},draw:function(t,e,i){let n,r,o;e.html(t),E.initFacebookAPI(function(){window.FB.XFBML.parse(e.get(0),function(){n=e.find(this.containerSelector),r=n.width(),o=n.height(),i(r,o)}.bind(this))}.bind(this))}});a.readymagEmbedCallbacks=[];a.initReadymag=function(t){if(RM.common.isReadymagEmbedInited&&d.default.isFunction(window.RM_EMBED_parse))return t();a.readymagEmbedCallbacks.push(t),window.RM_EMBED_initAsync=function(){RM.common.isReadymagEmbedInited=!0,d.default.each(a.readymagEmbedCallbacks,function(e){d.default.isFunction(e)&&e()}),a.readymagEmbedCallbacks=[]},!a.readymagInitXhr&&((0,c.default)('body > script[src~="RM_EMBED_"]').remove(),a.readymagInitXhr=c.default.ajax({url:_.EMBED_SCRIPT_MAIN,dataType:"script"}))};f.Readymag=b.extend({embed_type:"readymag",containerSelector:"iframe",resizable:!0,initialize:function(){b.prototype.initialize.apply(this,arguments),this.block&&this.block.frame&&d.default.extend(this.block.frame,{minwidth:288,minheight:236,maxwidth:512,maxheight:383})},parse:function(t,e){return e(t.replace(/<script.*script>/i,""))},draw:function(t,e,i){e.html(t),a.initReadymag(function(){window.RM_EMBED_parse(function(){let n=e.find(this.containerSelector),r=n.width(),o=n.height();i(r+2,o)}.bind(this))}.bind(this))}});f.IFrame=b.extend({embed_type:"simple-iframe",containerSelector:"iframe",resizable:!0,parse:function(t,e){let i,n=/[\s\S]*?(\<iframe[\s\S]*?\>)[\s\S]*?(\<\/iframe\>)[\s\S]*?/i;return i=t.match(n),i&&i[1]&&i[2]?e(i[1]+i[2]):e(null)},sanitize:function(t){let e=(0,c.default)(t);if(!(typeof e=="object"&&e.length))return e;let i=(0,c.default)("<iframe></iframe>"),n=e.get(0).attributes,r=["allowtransparency","allowfullscreen","height","name","sandbox","scrolling","seamless","src","width","allow"],o;return(0,d.default)(n).each(function(l){if(typeof l=="object"&&l.specified&&d.default.contains(r,l.name.toLowerCase())){let m=l.name.toLowerCase(),s=l.value;m=="src"&&window.location.protocol=="https:"&&(s=s.replace(/^http(s?):\/\//i,"//")),m==="sandbox"&&(o=s.split(" ")),i.attr(m,s)}}),this.isInViewer||T(i,o),i},draw:function(t,e,i){let n=t[0].src;if(!n||!n.trim()){i();return}if(RM.screenshot&&y.getVideoProvider(n)){this.setPosterInsteadOfVideo(n,e,i);return}e.html(t);let r,o,l,m,s,u=0,g=100,h=20,p=50,w=!1;s=setInterval(function(){if(u++,r=e.children(this.containerSelector),o=r.height(),o||u>h){if(o||u>p){o&&RM.common.mode==="constructor"&&(l=r.width(),m=r.height()),clearInterval(s),i(l,m);return}if(w)return;w=!0,i()}}.bind(this),g)},setPosterInsteadOfVideo:function(t,e,i){let n=y.getVideoProvider(t),r="",o=(0,c.default)("<img/>");y.getEmbedData(t,function(m){y.getHighResVideoThumbnail({provider:n,thumbnail_url:m.thumbnail_url}).then(d.default.bind(function(s){r=s,l(r)},this))},function(){typeof i=="function"&&i()});function l(m){o[0].src=m,e.css({"background-color":"#000"}),o.css({position:"absolute",top:0,bottom:0,margin:"auto",width:"100%",height:"auto"}),e.append(o)}}});f.CodeInjection=b.extend({embed_type:"code-injection",containerSelector:"rm-code-injection",resizable:!0,HEAD_PASSTHROUGH_SELECTOR:"",parse:function(t,e){return e(t)},sanitize:function(t){return c.default.parseHTML(t,document,!0)},draw:function(t,e,i){let n=(0,c.default)(document).find("head"),r="<head>",o='<body style="padding:0; margin: 0; width: 100%; height: 100%; min-width: initial; min-height: auto;">',l='<!DOCTYPE html><html style="width: 100%; height: 100%; min-width: initial; min-height: auto;">',m=n.find(this.HEAD_PASSTHROUGH_SELECTOR),s=(0,c.default)('<iframe seamless style="width: 100%; height: 100%;"></iframe>'),u=(0,c.default)("<div></div>");if(!this.isInViewer||this.block&&this.block.model.get("use_iframe")||this.widget&&this.widget.use_iframe){this.isInViewer||T(s),m.each(function(){r+=this.outerHTML}),r+='<script src="https://unpkg.com/jquery@3.0.0/dist/jquery.min.js"><\/script>',r+="</head>",u.html(t),o+=u[0].innerHTML+"</body>";let g=l+r+o+"</html>";return e.html(s),s[0].contentWindow.document.open(),s[0].contentWindow.document.write(g),s[0].contentWindow.document.close(),i(s.width(),s.height())}else t=(0,c.default)(t),u.html(t),u.find("script").each(function(){let h=this,p;h.src&&h.text&&(p=document.createElement("script"),p.text=h.text,h.text="",(0,c.default)(p).insertAfter((0,c.default)(h)))}),import("https://st-p.rmcdn1.net/e0cde9ba/dist/c/c-UUXJSVKM.js").then(({default:h})=>{h(e,u[0].innerHTML,{done:function(){return i(null,null)}})}),e.css({"font-family":"initial","font-weight":"initial"})}});f.Ecommerce=f.CodeInjection.extend({embed_type:"ecommerce"});f.Gdpr=f.CodeInjection.extend({embed_type:"gdpr"});f.Video=f.CodeInjection.extend({embed_type:"html5-video"});X=a});export{X as a,H as b};
