(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["playList"],{"09fe":function(e,t,a){},1276:function(e,t,a){"use strict";var n=a("d784"),c=a("44e7"),i=a("825a"),l=a("1d80"),r=a("4840"),u=a("8aa5"),o=a("50c4"),s=a("577e"),d=a("14c3"),b=a("9263"),f=a("9f7f"),v=a("d039"),j=f.UNSUPPORTED_Y,O=[].push,g=Math.min,h=4294967295,p=!v((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var a="ab".split(e);return 2!==a.length||"a"!==a[0]||"b"!==a[1]}));n("split",(function(e,t,a){var n;return n="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,a){var n=s(l(this)),i=void 0===a?h:a>>>0;if(0===i)return[];if(void 0===e)return[n];if(!c(e))return t.call(n,e,i);var r,u,o,d=[],f=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),v=0,j=new RegExp(e.source,f+"g");while(r=b.call(j,n)){if(u=j.lastIndex,u>v&&(d.push(n.slice(v,r.index)),r.length>1&&r.index<n.length&&O.apply(d,r.slice(1)),o=r[0].length,v=u,d.length>=i))break;j.lastIndex===r.index&&j.lastIndex++}return v===n.length?!o&&j.test("")||d.push(""):d.push(n.slice(v)),d.length>i?d.slice(0,i):d}:"0".split(void 0,0).length?function(e,a){return void 0===e&&0===a?[]:t.call(this,e,a)}:t,[function(t,a){var c=l(this),i=void 0==t?void 0:t[e];return void 0!==i?i.call(t,c,a):n.call(s(c),t,a)},function(e,c){var l=i(this),b=s(e),f=a(n,l,b,c,n!==t);if(f.done)return f.value;var v=r(l,RegExp),O=l.unicode,p=(l.ignoreCase?"i":"")+(l.multiline?"m":"")+(l.unicode?"u":"")+(j?"g":"y"),m=new v(j?"^(?:"+l.source+")":l,p),y=void 0===c?h:c>>>0;if(0===y)return[];if(0===b.length)return null===d(m,b)?[b]:[];var w=0,x=0,S=[];while(x<b.length){m.lastIndex=j?0:x;var P,k=d(m,j?b.slice(x):b);if(null===k||(P=g(o(m.lastIndex+(j?x:0)),b.length))===w)x=u(b,x,O);else{if(S.push(b.slice(w,x)),S.length===y)return S;for(var I=1;I<=k.length-1;I++)if(S.push(k[I]),S.length===y)return S;x=w=P}}return S.push(b.slice(w)),S}]}),!p,j)},"44e7":function(e,t,a){var n=a("861d"),c=a("c6b6"),i=a("b622"),l=i("match");e.exports=function(e){var t;return n(e)&&(void 0!==(t=e[l])?!!t:"RegExp"==c(e))}},7282:function(e,t,a){"use strict";a("e9fc")},"7b0a":function(e,t,a){},"7bba":function(e,t,a){"use strict";a.r(t);a("da3c");var n=a("0b33"),c=(a("bda7"),a("5e46")),i=(a("ac1f"),a("1276"),a("7a23")),l=(a("68ef"),a("bf60"),a("c199")),r=a("d282"),u=a("db17"),o=a("a6cd"),[s,d]=Object(r["a"])("row"),b=Symbol(s),f=Object(i["m"])({name:s,props:{wrap:u["f"],align:String,justify:String,tag:{type:String,default:"div"},gutter:{type:[Number,String],default:0}},setup(e,{slots:t}){var{children:a,linkChildren:n}=Object(o["a"])(b),c=Object(i["d"])(()=>{var e=[[]],t=0;return a.forEach((a,n)=>{t+=Number(a.span),t>24?(e.push([n]),t-=24):e[e.length-1].push(n)}),e}),l=Object(i["d"])(()=>{var t=Number(e.gutter),a=[];return t?(c.value.forEach(e=>{var n=t*(e.length-1)/e.length;e.forEach((e,c)=>{if(0===c)a.push({right:n});else{var i=t-a[e-1].right,l=n-i;a.push({left:i,right:l})}})}),a):a});return n({spaces:l}),()=>{var{tag:a,wrap:n,align:c,justify:l}=e;return Object(i["l"])(a,{class:d({["align-"+c]:c,["justify-"+l]:l,nowrap:!n})},{default:()=>[null==t.default?void 0:t.default()]})}}}),v=Object(l["a"])(f),j=v,O=(a("2994"),a("2bdd")),g=a("2909"),h=(a("d81d"),a("99af"),a("afa4")),p=a("0812"),m=(a("cb51"),a("3743"),a("09fe"),a("8da3")),y=a("ea8e"),w=a("ad06"),[x,S]=Object(r["a"])("image"),P=Object(i["m"])({name:x,props:{src:String,alt:String,fit:String,round:Boolean,width:[Number,String],height:[Number,String],radius:[Number,String],lazyLoad:Boolean,iconSize:[Number,String],showError:u["f"],iconPrefix:String,showLoading:u["f"],errorIcon:{type:String,default:"photo-fail"},loadingIcon:{type:String,default:"photo"}},emits:["load","error"],setup(e,{emit:t,slots:a}){var n=Object(i["H"])(!1),c=Object(i["H"])(!0),l=Object(i["H"])(),{$Lazyload:r}=Object(i["n"])().proxy,o=Object(i["d"])(()=>{var t={};return Object(m["a"])(e.width)&&(t.width=Object(y["a"])(e.width)),Object(m["a"])(e.height)&&(t.height=Object(y["a"])(e.height)),Object(m["a"])(e.radius)&&(t.overflow="hidden",t.borderRadius=Object(y["a"])(e.radius)),t});Object(i["R"])(()=>e.src,()=>{n.value=!1,c.value=!0});var s=e=>{c.value=!1,t("load",e)},d=e=>{n.value=!0,c.value=!1,t("error",e)},b=()=>a.loading?a.loading():Object(i["l"])(w["a"],{size:e.iconSize,name:e.loadingIcon,class:S("loading-icon"),classPrefix:e.iconPrefix},null),f=()=>a.error?a.error():Object(i["l"])(w["a"],{size:e.iconSize,name:e.errorIcon,class:S("error-icon"),classPrefix:e.iconPrefix},null),v=()=>c.value&&e.showLoading?Object(i["l"])("div",{class:S("loading")},[b()]):n.value&&e.showError?Object(i["l"])("div",{class:S("error")},[f()]):void 0,j=()=>{if(!n.value&&e.src){var t={alt:e.alt,class:S("img"),style:{objectFit:e.fit}};return e.lazyLoad?Object(i["T"])(Object(i["l"])("img",Object(i["s"])({ref:l},t),null),[[Object(i["L"])("lazy"),e.src]]):Object(i["l"])("img",Object(i["s"])({src:e.src,onLoad:s,onError:d},t),null)}},O=({el:e})=>{e===l.value&&c.value&&s()},g=({el:e})=>{e!==l.value||n.value||d()};return r&&u["c"]&&(r.$on("loaded",O),r.$on("error",g),Object(i["w"])(()=>{r.$off("loaded",O),r.$off("error",g)})),()=>Object(i["l"])("div",{class:S({round:e.round}),style:o.value},[j(),v(),null==a.default?void 0:a.default()])}}),k=Object(l["a"])(P),I=k,C=(a("7b0a"),a("6ba6")),[H,L]=Object(r["a"])("col"),_=Object(i["m"])({name:H,props:{offset:[Number,String],tag:{type:String,default:"div"},span:{type:[Number,String],default:0}},setup(e,{slots:t}){var{parent:a,index:n}=Object(C["a"])(b),c=Object(i["d"])(()=>{if(a){var{spaces:e}=a;if(e&&e.value&&e.value[n.value]){var{left:t,right:c}=e.value[n.value];return{paddingLeft:t?t+"px":null,paddingRight:c?c+"px":null}}}});return()=>{var{tag:a,span:n,offset:l}=e;return Object(i["l"])(a,{style:c.value,class:L({[n]:n,["offset-"+l]:l})},{default:()=>[null==t.default?void 0:t.default()]})}}}),E=Object(l["a"])(_),q=E;a("b0c0");Object(i["F"])("data-v-bcd27e78");var z={class:"name"};Object(i["D"])();var N=Object(i["m"])({props:{detail:{type:null,required:!0}},emits:["toDetail"],setup:function(e,t){var a=t.emit,n=e,c=function(){a("toDetail",Object(i["O"])(n.detail))};return function(e,t){return Object(i["C"])(),Object(i["f"])(Object(i["P"])(q),{span:8,class:"col",onClick:c},{default:Object(i["S"])((function(){return[Object(i["l"])(Object(i["P"])(I),{src:n.detail.imgurl,"lazy-load":""},null,8,["src"]),Object(i["i"])("div",z,Object(i["N"])(n.detail.name),1)]})),_:1})}}});a("f2b9");N.__scopeId="data-v-bcd27e78";var T=N,D=Object(i["m"])({setup:function(e){var t=Object(i["H"])(null),a=Object(i["H"])([]),n=Object(h["e"])(),c=n.request,l=n.loading,r=Object(i["H"])(0),u=Object(i["H"])(0),o=Object(i["H"])(!1),s=30,d=function(){var e=r.value,t={params:{sin:e,ein:e+s-1}};c(t).then((function(e){var t,n=e.data;u.value=(null===n||void 0===n||null===(t=n.data)||void 0===t?void 0:t.sum)||0;var c=a.value.map((function(e){return e}));r.value=r.value+s,a.value=[].concat(Object(g["a"])(c),Object(g["a"])(Object(p["a"])(n.data.list)))})).catch((function(){o.value=!0}))},b=function(e){t.value&&t.value.push({url:"".concat(window.location.href.split("#")[0],"#/playDetail/").concat(e.id),pageType:"web",statusBarType:"immersion",animatedType:"push"})};Object(i["z"])((function(){window.requireModuleJs&&(t.value=window.requireModuleJs("navigator")),d()}));var f=Object(i["d"])((function(){return!0===o.value||a.value.length>0&&r.value>=u.value})),v=function(){l.value||(console.log("下一页"),d())};return function(e,t){return Object(i["C"])(),Object(i["f"])(Object(i["P"])(O["a"]),{class:"list",loading:Object(i["P"])(l),onLoad:v,"finished-text":"没有更多了",finished:Object(i["P"])(f)},{default:Object(i["S"])((function(){return[Object(i["l"])(Object(i["P"])(j),{gutter:10,class:"playList"},{default:Object(i["S"])((function(){return[(Object(i["C"])(!0),Object(i["h"])(i["a"],null,Object(i["I"])(a.value,(function(e){return Object(i["C"])(),Object(i["f"])(T,{key:e.id,detail:e,onToDetail:b},null,8,["detail"])})),128))]})),_:1})]})),_:1},8,["loading","finished"])}}});a("b0b3");D.__scopeId="data-v-4d191c27";var R=D;function J(e,t){return Object(i["C"])(),Object(i["h"])("div",null," 网易云 ")}const M={};M.render=J;var B=M,$=a("71c2"),F=a("2eaa");Object(i["F"])("data-v-13d176dc");var U={class:"playList"},Q=Object(i["k"])(" 音乐整合 ");Object(i["D"])();var A=Object(i["m"])({setup:function(e){var t=44,a=Object(F["a"])(),l=a.height,r=Object(i["H"])(0),u=Object(i["H"])(0),o=Object(i["H"])([{title:"QQ音乐",key:"qq"},{title:"网易云",key:"netEase"}]),s=Object(i["H"])(null),d=Object(i["d"])((function(){return o.value[r.value].key})),b=function(e){u.value=e.height},f=Object(i["d"])((function(){return l.value-u.value-t})),v=function(){s.value&&s.value.push({url:"".concat(window.location.href.split("#")[0],"#/searchList"),pageType:"web",statusBarType:"immersion",animatedType:"push"})};return Object(i["z"])((function(){window.requireModuleJs&&(s.value=window.requireModuleJs("navigator"))})),function(e,t){return Object(i["C"])(),Object(i["h"])("div",U,[Object(i["l"])($["a"],{leftIcon:"arrow-left",rightIcon:"search",onRectChange:b,onRightClick:v},{default:Object(i["S"])((function(){return[Q]})),_:1}),Object(i["l"])(Object(i["P"])(c["a"]),{active:r.value,"onUpdate:active":t[0]||(t[0]=function(e){return r.value=e}),"offset-top":u.value,sticky:"",animated:""},{default:Object(i["S"])((function(){return[(Object(i["C"])(!0),Object(i["h"])(i["a"],null,Object(i["I"])(o.value,(function(e){return Object(i["C"])(),Object(i["f"])(Object(i["P"])(n["a"]),{key:e.key,title:e.title},{default:Object(i["S"])((function(){return[Object(i["i"])("div",{style:Object(i["u"])({height:"".concat(Object(i["P"])(f),"px")}),class:"listBox"},["qq"===e.key&&Object(i["P"])(d)===e.key?(Object(i["C"])(),Object(i["f"])(R,{key:0})):Object(i["g"])("",!0),"netEase"===e.key&&Object(i["P"])(d)===e.key?(Object(i["C"])(),Object(i["f"])(B,{key:1})):Object(i["g"])("",!0)],4)]})),_:2},1032,["title"])})),128))]})),_:1},8,["active","offset-top"])])}}});a("b06d");A.__scopeId="data-v-13d176dc";t["default"]=A},"8aa5":function(e,t,a){"use strict";var n=a("6547").charAt;e.exports=function(e,t,a){return t+(a?n(e,t).length:1)}},"99fc":function(e,t,a){},b06d:function(e,t,a){"use strict";a("99fc")},b0b3:function(e,t,a){"use strict";a("cb4a")},bf60:function(e,t,a){},cb4a:function(e,t,a){},e526:function(e,t,a){},e9fc:function(e,t,a){},f1f0:function(e,t,a){"use strict";a.r(t);a("2994");var n=a("2bdd"),c=(a("c3a6"),a("ad06")),i=(a("99af"),a("7a23")),l=a("0812"),r=a("d823"),u=a("6c02"),o=a("afa4"),s=a("8c53");Object(i["F"])("data-v-06bd09ec");var d={class:"header"},b={class:"text"},f=["src"];Object(i["D"])();var v=Object(i["m"])({setup:function(e){var t=Object(u["c"])(),a=Object(i["H"])(null),v=Object(o["b"])(),j=v.loading,O=v.request,g=Object(i["H"])(""),h=Object(i["H"])(null),p=Object(i["H"])(null),m=Object(i["H"])({}),y=function(){var e=new Image,t=document.createElement("canvas"),a=null===t||void 0===t?void 0:t.getContext("2d");e.src=m.value.logo||"",e.crossOrigin="anonymous",e.onload=function(){if(a){a.drawImage(e,0,0);var t=a.getImageData(0,0,e.width,e.height).data,n="(".concat(t[0],",").concat(t[1],",").concat(t[2],", 0.7)"),c="(".concat(t[4],",").concat(t[5],",").concat(t[6],",0.7)"),i="(".concat(t[8],",").concat(t[9],",").concat(t[10],",0.7)");g.value="linear-gradient(rgba".concat(n,",rgba").concat(c,", rgba").concat(i,")")}}},w=function(){var e=null===t||void 0===t?void 0:t.params;O({params:{disstid:(null===e||void 0===e?void 0:e.id)||""}}).then((function(e){var t,a,n=null===e||void 0===e||null===(t=e.data)||void 0===t||null===(a=t.cdlist)||void 0===a?void 0:a[0];m.value={title:null===n||void 0===n?void 0:n.dissname,logo:(null===n||void 0===n?void 0:n.logo)||"",songList:Object(l["b"])((null===n||void 0===n?void 0:n.songlist)||[])},y()}))},x=Object(i["H"])(0),S=Object(i["H"])(0),P=Object(i["d"])((function(){var e=S.value/x.value;return e>1?1:e})),k=Object(i["d"])((function(){return a.value?a.value.getStatusBarHeightPx()/3:0}));return Object(i["z"])((function(){if(w(),p.value){var e=Object(s["a"])(p.value);x.value=e.height}window.requireModuleJs&&(a.value=window.requireModuleJs("eeui")),window.addEventListener("scroll",(function(){var e=document.documentElement.scrollTop;S.value=e}))})),function(e,t){return Object(i["C"])(),Object(i["h"])("div",{class:"playList",ref:h},[Object(i["i"])("div",d,[Object(i["i"])("div",{class:"content",style:Object(i["u"])({paddingTop:"".concat(Object(i["P"])(k),"px")})},[Object(i["i"])("div",{class:"bg",style:Object(i["u"])({opacity:Object(i["P"])(P)})},null,4),Object(i["l"])(Object(i["P"])(c["b"]),{class:"icon",name:"arrow-left",color:"#ffffff"}),Object(i["i"])("div",b,Object(i["N"])(Object(i["P"])(P)>=1&&m.value.title||"歌单"),1)],4)]),Object(i["i"])("div",{class:"top_content",ref:p},[Object(i["i"])("div",{class:"bg",style:Object(i["u"])({backgroundImage:g.value})},null,4),Object(i["i"])("img",{class:"logo",src:m.value.logo,alt:"歌单"},null,8,f)],512),Object(i["l"])(Object(i["P"])(n["a"]),{loading:Object(i["P"])(j),"finished-text":"没有更多了",finished:!0},{default:Object(i["S"])((function(){return[(Object(i["C"])(!0),Object(i["h"])(i["a"],null,Object(i["I"])(m.value.songList,(function(e){return Object(i["C"])(),Object(i["f"])(r["a"],{key:e.songid,song:e},null,8,["song"])})),128))]})),_:1},8,["loading"])],512)}}});a("7282");v.__scopeId="data-v-06bd09ec";t["default"]=v},f2b9:function(e,t,a){"use strict";a("e526")}}]);
//# sourceMappingURL=playList.06207e2c.js.map