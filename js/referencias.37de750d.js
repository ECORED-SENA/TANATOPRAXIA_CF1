(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["referencias","chunk-515a8379"],{"0095":function(e,n,t){"use strict";t("95c5")},1276:function(e,n,t){"use strict";var r=t("d784"),i=t("44e7"),a=t("825a"),c=t("1d80"),l=t("4840"),o=t("8aa5"),s=t("50c4"),u=t("14c3"),f=t("9263"),d=t("d039"),p=[].push,g=Math.min,h=4294967295,v=!d((function(){return!RegExp(h,"y")}));r("split",2,(function(e,n,t){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,t){var r=String(c(this)),a=void 0===t?h:t>>>0;if(0===a)return[];if(void 0===e)return[r];if(!i(e))return n.call(r,e,a);var l,o,s,u=[],d=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),g=0,v=new RegExp(e.source,d+"g");while(l=f.call(v,r)){if(o=v.lastIndex,o>g&&(u.push(r.slice(g,l.index)),l.length>1&&l.index<r.length&&p.apply(u,l.slice(1)),s=l[0].length,g=o,u.length>=a))break;v.lastIndex===l.index&&v.lastIndex++}return g===r.length?!s&&v.test("")||u.push(""):u.push(r.slice(g)),u.length>a?u.slice(0,a):u}:"0".split(void 0,0).length?function(e,t){return void 0===e&&0===t?[]:n.call(this,e,t)}:n,[function(n,t){var i=c(this),a=void 0==n?void 0:n[e];return void 0!==a?a.call(n,i,t):r.call(String(i),n,t)},function(e,i){var c=t(r,e,this,i,r!==n);if(c.done)return c.value;var f=a(e),d=String(this),p=l(f,RegExp),x=f.unicode,b=(f.ignoreCase?"i":"")+(f.multiline?"m":"")+(f.unicode?"u":"")+(v?"y":"g"),E=new p(v?f:"^(?:"+f.source+")",b),m=void 0===i?h:i>>>0;if(0===m)return[];if(0===d.length)return null===u(E,d)?[d]:[];var _=0,y=0,R=[];while(y<d.length){E.lastIndex=v?y:0;var I,C=u(E,v?d:d.slice(y));if(null===C||(I=g(s(E.lastIndex+(v?0:y)),d.length))===_)y=o(d,y,x);else{if(R.push(d.slice(_,y)),R.length===m)return R;for(var k=1;k<=C.length-1;k++)if(R.push(C[k]),R.length===m)return R;y=_=I}}return R.push(d.slice(_)),R}]}),!v)},"13aa":function(e,n,t){"use strict";t.r(n);var r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"container-fluid banner-interno"},[t("div",{staticClass:"banner-interno__fondo",style:{"background-image":"url("+e.globalData.fondoBannerPrincipal+")"}}),t("div",{staticClass:"container"},[t("div",{staticClass:"banner-interno__titulo py-5"},[e.icono.length?t("div",{staticClass:"banner-interno__titulo__icono me-3"},[t("i",{class:e.icono})]):e._e(),t("h2",{staticClass:"mb-0",domProps:{innerHTML:e._s(e.titulo)}})])])])},i=[],a={name:"BannerInterno",props:{icono:{type:String,default:""},titulo:{type:String,default:""}},data:function(){return{}},computed:{globalData:function(){return this.$config.global}}},c=a,l=(t("0095"),t("2877")),o=Object(l["a"])(c,r,i,!1,null,null,null);n["default"]=o.exports},"14c3":function(e,n,t){var r=t("c6b6"),i=t("9263");e.exports=function(e,n){var t=e.exec;if("function"===typeof t){var a=t.call(e,n);if("object"!==typeof a)throw TypeError("RegExp exec method returned something other than an Object or null");return a}if("RegExp"!==r(e))throw TypeError("RegExp#exec called on incompatible receiver");return i.call(e,n)}},"3cb4":function(e,n,t){"use strict";t("ddc8")},"44e7":function(e,n,t){var r=t("861d"),i=t("c6b6"),a=t("b622"),c=a("match");e.exports=function(e){var n;return r(e)&&(void 0!==(n=e[c])?!!n:"RegExp"==i(e))}},"64ef":function(e,n,t){"use strict";t.r(n);var r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"curso-main-container referencias"},[t("BannerInterno",{attrs:{icono:"fas fa-book",titulo:"Referencias bibliográficas"}}),t("div",{staticClass:"container tarjeta tarjeta--blanca p-4 p-md-5 mb-5"},e._l(e.orderedData,(function(n){return t("div",{key:n.link,staticClass:"referencias__item"},[t("span",{domProps:{innerHTML:e._s(n.referencia)}}),n.link?t("a",{attrs:{href:n.link,target:"_blank"}},[t("span",{domProps:{innerHTML:e._s(n.link)}}),t("i",{staticClass:"fas fa-external-link-alt"})]):e._e(),t("hr",{staticClass:"my-3"})])})),0)],1)},i=[],a=t("2909"),c=(t("1276"),t("ac1f"),t("13aa")),l=t("ecc5"),o={name:"Referencias",components:{BannerInterno:c["default"]},mixins:[l["a"]],computed:{referenciasData:function(){return this.$config.referencias},orderedData:function(){var e=this,n=Object(a["a"])(this.referenciasData).sort((function(n,t){var r=e.quitarAcentos(n.referencia.split(" ")[0].toLowerCase()),i=e.quitarAcentos(t.referencia.split(" ")[0].toLowerCase());return r<i?-1:r>i?1:0}));return n}}},s=o,u=(t("3cb4"),t("2877")),f=Object(u["a"])(s,r,i,!1,null,null,null);n["default"]=f.exports},"8aa5":function(e,n,t){"use strict";var r=t("6547").charAt;e.exports=function(e,n,t){return n+(t?r(e,n).length:1)}},9263:function(e,n,t){"use strict";var r=t("ad6d"),i=t("9f7f"),a=RegExp.prototype.exec,c=String.prototype.replace,l=a,o=function(){var e=/a/,n=/b*/g;return a.call(e,"a"),a.call(n,"a"),0!==e.lastIndex||0!==n.lastIndex}(),s=i.UNSUPPORTED_Y||i.BROKEN_CARET,u=void 0!==/()??/.exec("")[1],f=o||u||s;f&&(l=function(e){var n,t,i,l,f=this,d=s&&f.sticky,p=r.call(f),g=f.source,h=0,v=e;return d&&(p=p.replace("y",""),-1===p.indexOf("g")&&(p+="g"),v=String(e).slice(f.lastIndex),f.lastIndex>0&&(!f.multiline||f.multiline&&"\n"!==e[f.lastIndex-1])&&(g="(?: "+g+")",v=" "+v,h++),t=new RegExp("^(?:"+g+")",p)),u&&(t=new RegExp("^"+g+"$(?!\\s)",p)),o&&(n=f.lastIndex),i=a.call(d?t:f,v),d?i?(i.input=i.input.slice(h),i[0]=i[0].slice(h),i.index=f.lastIndex,f.lastIndex+=i[0].length):f.lastIndex=0:o&&i&&(f.lastIndex=f.global?i.index+i[0].length:n),u&&i&&i.length>1&&c.call(i[0],t,(function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(i[l]=void 0)})),i}),e.exports=l},"95c5":function(e,n,t){},"9f7f":function(e,n,t){"use strict";var r=t("d039");function i(e,n){return RegExp(e,n)}n.UNSUPPORTED_Y=r((function(){var e=i("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),n.BROKEN_CARET=r((function(){var e=i("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},ac1f:function(e,n,t){"use strict";var r=t("23e7"),i=t("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},ad6d:function(e,n,t){"use strict";var r=t("825a");e.exports=function(){var e=r(this),n="";return e.global&&(n+="g"),e.ignoreCase&&(n+="i"),e.multiline&&(n+="m"),e.dotAll&&(n+="s"),e.unicode&&(n+="u"),e.sticky&&(n+="y"),n}},d784:function(e,n,t){"use strict";t("ac1f");var r=t("6eeb"),i=t("d039"),a=t("b622"),c=t("9263"),l=t("9112"),o=a("species"),s=!i((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),u=function(){return"$0"==="a".replace(/./,"$0")}(),f=a("replace"),d=function(){return!!/./[f]&&""===/./[f]("a","$0")}(),p=!i((function(){var e=/(?:)/,n=e.exec;e.exec=function(){return n.apply(this,arguments)};var t="ab".split(e);return 2!==t.length||"a"!==t[0]||"b"!==t[1]}));e.exports=function(e,n,t,f){var g=a(e),h=!i((function(){var n={};return n[g]=function(){return 7},7!=""[e](n)})),v=h&&!i((function(){var n=!1,t=/a/;return"split"===e&&(t={},t.constructor={},t.constructor[o]=function(){return t},t.flags="",t[g]=/./[g]),t.exec=function(){return n=!0,null},t[g](""),!n}));if(!h||!v||"replace"===e&&(!s||!u||d)||"split"===e&&!p){var x=/./[g],b=t(g,""[e],(function(e,n,t,r,i){return n.exec===c?h&&!i?{done:!0,value:x.call(n,t,r)}:{done:!0,value:e.call(t,n,r)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:d}),E=b[0],m=b[1];r(String.prototype,e,E),r(RegExp.prototype,g,2==n?function(e,n){return m.call(e,this,n)}:function(e){return m.call(e,this)})}f&&l(RegExp.prototype[g],"sham",!0)}},ddc8:function(e,n,t){}}]);
//# sourceMappingURL=referencias.37de750d.js.map