"use strict";(self.webpackChunkPhonebook_Frontend=self.webpackChunkPhonebook_Frontend||[]).push([[549],{2711:function(n,e,t){t.d(e,{JO:function(){return Gn}});var r=t(5671),i=t(3144),o=t(136),a=t(4104),c=t(1413),f=t(2791),u=/^[a-z0-9]+(-[a-z0-9]+)*$/,s=function(n,e,t){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",i=n.split(":");if("@"===n.slice(0,1)){if(i.length<2||i.length>3)return null;r=i.shift().slice(1)}if(i.length>3||!i.length)return null;if(i.length>1){var o=i.pop(),a=i.pop(),c={provider:i.length>0?i[0]:r,prefix:a,name:o};return e&&!l(c)?null:c}var f=i[0],u=f.split("-");if(u.length>1){var s={provider:r,prefix:u.shift(),name:u.join("-")};return e&&!l(s)?null:s}if(t&&""===r){var d={provider:r,prefix:"",name:f};return e&&!l(d,t)?null:d}return null},l=function(n,e){return!!n&&!(""!==n.provider&&!n.provider.match(u)||!(e&&""===n.prefix||n.prefix.match(u))||!n.name.match(u))},d=Object.freeze({left:0,top:0,width:16,height:16}),p=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),h=Object.freeze((0,c.Z)((0,c.Z)({},d),p)),v=Object.freeze((0,c.Z)((0,c.Z)({},h),{},{body:"",hidden:!1}));function g(n,e){var t=function(n,e){var t={};!n.hFlip!==!e.hFlip&&(t.hFlip=!0),!n.vFlip!==!e.vFlip&&(t.vFlip=!0);var r=((n.rotate||0)+(e.rotate||0))%4;return r&&(t.rotate=r),t}(n,e);for(var r in v)r in p?r in n&&!(r in t)&&(t[r]=p[r]):r in e?t[r]=e[r]:r in n&&(t[r]=n[r]);return t}function m(n,e,t){var r=n.icons,i=n.aliases||Object.create(null),o={};function a(n){o=g(r[n]||i[n],o)}return a(e),t.forEach(a),g(n,o)}function y(n,e){var t=[];if("object"!==typeof n||"object"!==typeof n.icons)return t;n.not_found instanceof Array&&n.not_found.forEach((function(n){e(n,null),t.push(n)}));var r=function(n,e){var t=n.icons,r=n.aliases||Object.create(null),i=Object.create(null);return(e||Object.keys(t).concat(Object.keys(r))).forEach((function n(e){if(t[e])return i[e]=[];if(!(e in i)){i[e]=null;var o=r[e]&&r[e].parent,a=o&&n(o);a&&(i[e]=[o].concat(a))}return i[e]})),i}(n);for(var i in r){var o=r[i];o&&(e(i,m(n,i,o)),t.push(i))}return t}var b=(0,c.Z)({provider:"",aliases:{},not_found:{}},d);function x(n,e){for(var t in e)if(t in n&&typeof n[t]!==typeof e[t])return!1;return!0}function w(n){if("object"!==typeof n||null===n)return null;var e=n;if("string"!==typeof e.prefix||!n.icons||"object"!==typeof n.icons)return null;if(!x(n,b))return null;var t=e.icons;for(var r in t){var i=t[r];if(!r.match(u)||"string"!==typeof i.body||!x(i,v))return null}var o=e.aliases||Object.create(null);for(var a in o){var c=o[a],f=c.parent;if(!a.match(u)||"string"!==typeof f||!t[f]&&!o[f]||!x(c,v))return null}return e}var k=Object.create(null);function j(n,e){var t=k[n]||(k[n]=Object.create(null));return t[e]||(t[e]=function(n,e){return{provider:n,prefix:e,icons:Object.create(null),missing:new Set}}(n,e))}function _(n,e){return w(e)?y(e,(function(e,t){t?n.icons[e]=t:n.missing.add(e)})):[]}var Z=!1;function S(n){return"boolean"===typeof n&&(Z=n),Z}function E(n){var e="string"===typeof n?s(n,!0,Z):n;if(e){var t=j(e.provider,e.prefix),r=e.name;return t.icons[r]||(t.missing.has(r)?null:void 0)}}function O(n,e){var t=s(n,!0,Z);return!!t&&function(n,e,t){try{if("string"===typeof t.body)return n.icons[e]=(0,c.Z)({},t),!0}catch(Jn){}return!1}(j(t.provider,t.prefix),t.name,e)}var M=Object.freeze({width:null,height:null}),F=Object.freeze((0,c.Z)((0,c.Z)({},M),p)),C=/(-?[0-9.]*[0-9]+[0-9.]*)/g,I=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function L(n,e,t){if(1===e)return n;if(t=t||100,"number"===typeof n)return Math.ceil(n*e*t)/t;if("string"!==typeof n)return n;var r=n.split(C);if(null===r||!r.length)return n;for(var i=[],o=r.shift(),a=I.test(o);;){if(a){var c=parseFloat(o);isNaN(c)?i.push(o):i.push(Math.ceil(c*e*t)/t)}else i.push(o);if(void 0===(o=r.shift()))return i.join("");a=!a}}var T=/\sid="(\S+)"/g,D="IconifyId"+Date.now().toString(16)+(16777216*Math.random()|0).toString(16),z=0;function R(n){for(var e,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:D,r=[];e=T.exec(n);)r.push(e[1]);if(!r.length)return n;var i="suffix"+(16777216*Math.random()|Date.now()).toString(16);return r.forEach((function(e){var r="function"===typeof t?t(e):t+(z++).toString(),o=e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");n=n.replace(new RegExp('([#;"])('+o+')([")]|\\.[a-z])',"g"),"$1"+r+i+"$3")})),n=n.replace(new RegExp(i,"g"),"")}var A=Object.create(null);function N(n,e){A[n]=e}function P(n){return A[n]||A[""]}function U(n){var e;if("string"===typeof n.resources)e=[n.resources];else if(!((e=n.resources)instanceof Array)||!e.length)return null;return{resources:e,path:n.path||"/",maxURL:n.maxURL||500,rotate:n.rotate||750,timeout:n.timeout||5e3,random:!0===n.random,index:n.index||0,dataAfterTimeout:!1!==n.dataAfterTimeout}}for(var $=Object.create(null),q=["https://api.simplesvg.com","https://api.unisvg.com"],H=[];q.length>0;)1===q.length||Math.random()>.5?H.push(q.shift()):H.push(q.pop());function J(n,e){var t=U(e);return null!==t&&($[n]=t,!0)}function Q(n){return $[n]}$[""]=U({resources:["https://api.iconify.design"].concat(H)});var W=function(){var n;try{if("function"===typeof(n=fetch))return n}catch(Jn){}}();var B={prepare:function(n,e,t){var r=[],i=function(n,e){var t,r=Q(n);if(!r)return 0;if(r.maxURL){var i=0;r.resources.forEach((function(n){var e=n;i=Math.max(i,e.length)}));var o=e+".json?icons=";t=r.maxURL-i-r.path.length-o.length}else t=0;return t}(n,e),o="icons",a={type:o,provider:n,prefix:e,icons:[]},c=0;return t.forEach((function(t,f){(c+=t.length+1)>=i&&f>0&&(r.push(a),a={type:o,provider:n,prefix:e,icons:[]},c=t.length),a.icons.push(t)})),r.push(a),r},send:function(n,e,t){if(W){var r=function(n){if("string"===typeof n){var e=Q(n);if(e)return e.path}return"/"}(e.provider);switch(e.type){case"icons":var i=e.prefix,o=e.icons.join(",");r+=i+".json?"+new URLSearchParams({icons:o}).toString();break;case"custom":var a=e.uri;r+="/"===a.slice(0,1)?a.slice(1):a;break;default:return void t("abort",400)}var c=503;W(n+r).then((function(n){var e=n.status;if(200===e)return c=501,n.json();setTimeout((function(){t(function(n){return 404===n}(e)?"abort":"next",e)}))})).then((function(n){"object"===typeof n&&null!==n?setTimeout((function(){t("success",n)})):setTimeout((function(){404===n?t("abort",n):t("next",c)}))})).catch((function(){t("next",c)}))}else t("abort",424)}};function V(n,e){n.forEach((function(n){var t=n.loaderCallbacks;t&&(n.loaderCallbacks=t.filter((function(n){return n.id!==e})))}))}var X=0;var G={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function K(n,e,t,r){var i,o=n.resources.length,a=n.random?Math.floor(Math.random()*o):n.index;if(n.random){var c=n.resources.slice(0);for(i=[];c.length>1;){var f=Math.floor(Math.random()*c.length);i.push(c[f]),c=c.slice(0,f).concat(c.slice(f+1))}i=i.concat(c)}else i=n.resources.slice(a).concat(n.resources.slice(0,a));var u,s=Date.now(),l="pending",d=0,p=null,h=[],v=[];function g(){p&&(clearTimeout(p),p=null)}function m(){"pending"===l&&(l="aborted"),g(),h.forEach((function(n){"pending"===n.status&&(n.status="aborted")})),h=[]}function y(n,e){e&&(v=[]),"function"===typeof n&&v.push(n)}function b(){l="failed",v.forEach((function(n){n(void 0,u)}))}function x(){h.forEach((function(n){"pending"===n.status&&(n.status="aborted")})),h=[]}function w(){if("pending"===l){g();var r=i.shift();if(void 0===r)return h.length?void(p=setTimeout((function(){g(),"pending"===l&&(x(),b())}),n.timeout)):void b();var o={status:"pending",resource:r,callback:function(e,t){!function(e,t,r){var o="success"!==t;switch(h=h.filter((function(n){return n!==e})),l){case"pending":break;case"failed":if(o||!n.dataAfterTimeout)return;break;default:return}if("abort"===t)return u=r,void b();if(o)return u=r,void(h.length||(i.length?w():b()));if(g(),x(),!n.random){var a=n.resources.indexOf(e.resource);-1!==a&&a!==n.index&&(n.index=a)}l="completed",v.forEach((function(n){n(r)}))}(o,e,t)}};h.push(o),d++,p=setTimeout(w,n.rotate),t(r,e,o.callback)}}return"function"===typeof r&&v.push(r),setTimeout(w),function(){return{startTime:s,payload:e,status:l,queriesSent:d,queriesPending:h.length,subscribe:y,abort:m}}}function Y(n){var e=(0,c.Z)((0,c.Z)({},G),n),t=[];function r(){t=t.filter((function(n){return"pending"===n().status}))}var i={query:function(n,i,o){var a=K(e,n,i,(function(n,e){r(),o&&o(n,e)}));return t.push(a),a},find:function(n){return t.find((function(e){return n(e)}))||null},setIndex:function(n){e.index=n},getIndex:function(){return e.index},cleanup:r};return i}function nn(){}var en=Object.create(null);function tn(n,e,t){var r,i;if("string"===typeof n){var o=P(n);if(!o)return t(void 0,424),nn;i=o.send;var a=function(n){if(!en[n]){var e=Q(n);if(!e)return;var t={config:e,redundancy:Y(e)};en[n]=t}return en[n]}(n);a&&(r=a.redundancy)}else{var c=U(n);if(c){r=Y(c);var f=P(n.resources?n.resources[0]:"");f&&(i=f.send)}}return r&&i?r.query(e,i,t)().abort:(t(void 0,424),nn)}var rn="iconify2",on="iconify",an="iconify-count",cn="iconify-version",fn=36e5;function un(n,e){try{return n.getItem(e)}catch(Jn){}}function sn(n,e,t){try{return n.setItem(e,t),!0}catch(Jn){}}function ln(n,e){try{n.removeItem(e)}catch(Jn){}}function dn(n,e){return sn(n,an,e.toString())}function pn(n){return parseInt(un(n,an))||0}var hn={local:!0,session:!0},vn={local:new Set,session:new Set},gn=!1;var mn="undefined"===typeof window?{}:window;function yn(n){var e=n+"Storage";try{if(mn&&mn[e]&&"number"===typeof mn[e].length)return mn[e]}catch(Jn){}hn[n]=!1}function bn(n,e){var t=yn(n);if(t){var r=un(t,cn);if(r!==rn){if(r)for(var i=pn(t),o=0;o<i;o++)ln(t,on+o.toString());return sn(t,cn,rn),void dn(t,0)}for(var a=Math.floor(Date.now()/fn)-168,c=function(n){var r=on+n.toString(),i=un(t,r);if("string"===typeof i){try{var o=JSON.parse(i);if("object"===typeof o&&"number"===typeof o.cached&&o.cached>a&&"string"===typeof o.provider&&"object"===typeof o.data&&"string"===typeof o.data.prefix&&e(o,n))return!0}catch(Jn){}ln(t,r)}},f=pn(t),u=f-1;u>=0;u--)c(u)||(u===f-1?(f--,dn(t,f)):vn[n].add(u))}}function xn(){if(!gn)for(var n in gn=!0,hn)bn(n,(function(n){var e=n.data,t=j(n.provider,e.prefix);if(!_(t,e).length)return!1;var r=e.lastModified||-1;return t.lastModifiedCached=t.lastModifiedCached?Math.min(t.lastModifiedCached,r):r,!0}))}function wn(n,e){function t(t){var r;if(hn[t]&&(r=yn(t))){var i,o=vn[t];if(o.size)o.delete(i=Array.from(o).shift());else if(!dn(r,(i=pn(r))+1))return;var a={cached:Math.floor(Date.now()/fn),provider:n.provider,data:e};return sn(r,on+i.toString(),JSON.stringify(a))}}gn||xn(),e.lastModified&&!function(n,e){var t=n.lastModifiedCached;if(t&&t>=e)return t===e;if(n.lastModifiedCached=e,t)for(var r in hn)bn(r,(function(t){var r=t.data;return t.provider!==n.provider||r.prefix!==n.prefix||r.lastModified===e}));return!0}(n,e.lastModified)||Object.keys(e.icons).length&&(e.not_found&&delete(e=Object.assign({},e)).not_found,t("local")||t("session"))}function kn(){}function jn(n){n.iconsLoaderFlag||(n.iconsLoaderFlag=!0,setTimeout((function(){n.iconsLoaderFlag=!1,function(n){n.pendingCallbacksFlag||(n.pendingCallbacksFlag=!0,setTimeout((function(){n.pendingCallbacksFlag=!1;var e=n.loaderCallbacks?n.loaderCallbacks.slice(0):[];if(e.length){var t=!1,r=n.provider,i=n.prefix;e.forEach((function(e){var o=e.icons,a=o.pending.length;o.pending=o.pending.filter((function(e){if(e.prefix!==i)return!0;var a=e.name;if(n.icons[a])o.loaded.push({provider:r,prefix:i,name:a});else{if(!n.missing.has(a))return t=!0,!0;o.missing.push({provider:r,prefix:i,name:a})}return!1})),o.pending.length!==a&&(t||V([n],e.id),e.callback(o.loaded.slice(0),o.missing.slice(0),o.pending.slice(0),e.abort))}))}})))}(n)})))}var _n=function(n,e){var t=function(n){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],t=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=[];return n.forEach((function(n){var i="string"===typeof n?s(n,e,t):n;i&&r.push(i)})),r}(n,!0,S()),r=function(n){var e={loaded:[],missing:[],pending:[]},t=Object.create(null);n.sort((function(n,e){return n.provider!==e.provider?n.provider.localeCompare(e.provider):n.prefix!==e.prefix?n.prefix.localeCompare(e.prefix):n.name.localeCompare(e.name)}));var r={provider:"",prefix:"",name:""};return n.forEach((function(n){if(r.name!==n.name||r.prefix!==n.prefix||r.provider!==n.provider){r=n;var i=n.provider,o=n.prefix,a=n.name,c=t[i]||(t[i]=Object.create(null)),f=c[o]||(c[o]=j(i,o)),u={provider:i,prefix:o,name:a};(a in f.icons?e.loaded:""===o||f.missing.has(a)?e.missing:e.pending).push(u)}})),e}(t);if(!r.pending.length){var i=!0;return e&&setTimeout((function(){i&&e(r.loaded,r.missing,r.pending,kn)})),function(){i=!1}}var o,a,c=Object.create(null),f=[];return r.pending.forEach((function(n){var e=n.provider,t=n.prefix;if(t!==a||e!==o){o=e,a=t,f.push(j(e,t));var r=c[e]||(c[e]=Object.create(null));r[t]||(r[t]=[])}})),r.pending.forEach((function(n){var e=n.provider,t=n.prefix,r=n.name,i=j(e,t),o=i.pendingIcons||(i.pendingIcons=new Set);o.has(r)||(o.add(r),c[e][t].push(r))})),f.forEach((function(n){var e=n.provider,t=n.prefix;c[e][t].length&&function(n,e){n.iconsToLoad?n.iconsToLoad=n.iconsToLoad.concat(e).sort():n.iconsToLoad=e,n.iconsQueueFlag||(n.iconsQueueFlag=!0,setTimeout((function(){n.iconsQueueFlag=!1;var e,t=n.provider,r=n.prefix,i=n.iconsToLoad;delete n.iconsToLoad,i&&(e=P(t))&&e.prepare(t,r,i).forEach((function(e){tn(t,e,(function(t){if("object"!==typeof t)e.icons.forEach((function(e){n.missing.add(e)}));else try{var r=_(n,t);if(!r.length)return;var i=n.pendingIcons;i&&r.forEach((function(n){i.delete(n)})),wn(n,t)}catch(Jn){console.error(Jn)}jn(n)}))}))})))}(n,c[e][t])})),e?function(n,e,t){var r=X++,i=V.bind(null,t,r);if(!e.pending.length)return i;var o={id:r,icons:e,callback:n,abort:i};return t.forEach((function(n){(n.loaderCallbacks||(n.loaderCallbacks=[])).push(o)})),i}(e,r,f):kn};var Zn,Sn=/[\s,]+/;function En(n,e){e.split(Sn).forEach((function(e){switch(e.trim()){case"horizontal":n.hFlip=!0;break;case"vertical":n.vFlip=!0}}))}function On(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=n.replace(/^-?[0-9.]*/,"");function r(n){for(;n<0;)n+=4;return n%4}if(""===t){var i=parseInt(n);return isNaN(i)?0:r(i)}if(t!==n){var o=0;switch(t){case"%":o=25;break;case"deg":o=90}if(o){var a=parseFloat(n.slice(0,n.length-t.length));return isNaN(a)?0:(a/=o)%1===0?r(a):0}}return e}function Mn(n){return void 0===Zn&&function(){try{Zn=window.trustedTypes.createPolicy("iconify",{createHTML:function(n){return n}})}catch(Jn){Zn=null}}(),Zn?Zn.createHTML(n):n}var Fn=(0,c.Z)((0,c.Z)({},F),{},{inline:!1}),Cn={xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},In={display:"inline-block"},Ln={backgroundColor:"currentColor"},Tn={backgroundColor:"transparent"},Dn={Image:"var(--svg)",Repeat:"no-repeat",Size:"100% 100%"},zn={WebkitMask:Ln,mask:Ln,background:Tn};for(var Rn in zn){var An=zn[Rn];for(var Nn in Dn)An[Rn+Nn]=Dn[Nn]}var Pn=(0,c.Z)((0,c.Z)({},Fn),{},{inline:!0});function Un(n){return n+(n.match(/^[-0-9.]+$/)?"px":"")}var $n=function(n,e,t,r){var i=t?Pn:Fn,o=function(n,e){var t=(0,c.Z)({},n);for(var r in e){var i=e[r],o=typeof i;r in M?(null===i||i&&("string"===o||"number"===o))&&(t[r]=i):o===typeof t[r]&&(t[r]="rotate"===r?i%4:i)}return t}(i,e),a=e.mode||"svg",u={},s=e.style||{},l=(0,c.Z)((0,c.Z)({},"svg"===a?Cn:{}),{},{ref:r});for(var d in e){var p=e[d];if(void 0!==p)switch(d){case"icon":case"style":case"children":case"onLoad":case"mode":case"_ref":case"_inline":break;case"inline":case"hFlip":case"vFlip":o[d]=!0===p||"true"===p||1===p;break;case"flip":"string"===typeof p&&En(o,p);break;case"color":u.color=p;break;case"rotate":"string"===typeof p?o[d]=On(p):"number"===typeof p&&(o[d]=p);break;case"ariaHidden":case"aria-hidden":!0!==p&&"true"!==p&&delete l["aria-hidden"];break;default:void 0===i[d]&&(l[d]=p)}}var v=function(n,e){var t=(0,c.Z)((0,c.Z)({},h),n),r=(0,c.Z)((0,c.Z)({},F),e),i={left:t.left,top:t.top,width:t.width,height:t.height},o=t.body;[t,r].forEach((function(n){var e,t=[],r=n.hFlip,a=n.vFlip,c=n.rotate;switch(r?a?c+=2:(t.push("translate("+(i.width+i.left).toString()+" "+(0-i.top).toString()+")"),t.push("scale(-1 1)"),i.top=i.left=0):a&&(t.push("translate("+(0-i.left).toString()+" "+(i.height+i.top).toString()+")"),t.push("scale(1 -1)"),i.top=i.left=0),c<0&&(c-=4*Math.floor(c/4)),c%=4){case 1:e=i.height/2+i.top,t.unshift("rotate(90 "+e.toString()+" "+e.toString()+")");break;case 2:t.unshift("rotate(180 "+(i.width/2+i.left).toString()+" "+(i.height/2+i.top).toString()+")");break;case 3:e=i.width/2+i.left,t.unshift("rotate(-90 "+e.toString()+" "+e.toString()+")")}c%2===1&&(i.left!==i.top&&(e=i.left,i.left=i.top,i.top=e),i.width!==i.height&&(e=i.width,i.width=i.height,i.height=e)),t.length&&(o='<g transform="'+t.join(" ")+'">'+o+"</g>")}));var a,f,u=r.width,s=r.height,l=i.width,d=i.height;null===u?a=L(f=null===s?"1em":"auto"===s?d:s,l/d):(a="auto"===u?l:u,f=null===s?L(a,d/l):"auto"===s?d:s);var p={},v=function(n,e){(function(n){return"unset"===n||"undefined"===n||"none"===n})(e)||(p[n]=e.toString())};return v("width",a),v("height",f),p.viewBox=i.left.toString()+" "+i.top.toString()+" "+l.toString()+" "+d.toString(),{attributes:p,body:o}}(n,o),g=v.attributes;if(o.inline&&(u.verticalAlign="-0.125em"),"svg"===a){l.style=(0,c.Z)((0,c.Z)({},u),s),Object.assign(l,g);var m=0,y=e.id;return"string"===typeof y&&(y=y.replace(/-/g,"_")),l.dangerouslySetInnerHTML={__html:Mn(R(v.body,y?function(){return y+"ID"+m++}:"iconifyReact"))},f.createElement("svg",l)}var b,x=n.body,w=n.width,k=n.height,j="mask"===a||"bg"!==a&&-1!==x.indexOf("currentColor"),_=function(n,e){var t=-1===n.indexOf("xlink:")?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(var r in e)t+=" "+r+'="'+e[r]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+t+">"+n+"</svg>"}(x,(0,c.Z)((0,c.Z)({},g),{},{width:w+"",height:k+""}));return l.style=(0,c.Z)((0,c.Z)((0,c.Z)((0,c.Z)({},u),{},{"--svg":(b=_,'url("'+function(n){return"data:image/svg+xml,"+function(n){return n.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}(n)}(b)+'")'),width:Un(g.width),height:Un(g.height)},In),j?Ln:Tn),s),f.createElement("span",l)};if(S(!0),N("",B),"undefined"!==typeof document&&"undefined"!==typeof window){xn();var qn=window;if(void 0!==qn.IconifyPreload){var Hn=qn.IconifyPreload,Jn="Invalid IconifyPreload syntax.";"object"===typeof Hn&&null!==Hn&&(Hn instanceof Array?Hn:[Hn]).forEach((function(n){try{("object"!==typeof n||null===n||n instanceof Array||"object"!==typeof n.icons||"string"!==typeof n.prefix||!function(n,e){if("object"!==typeof n)return!1;if("string"!==typeof e&&(e=n.provider||""),Z&&!e&&!n.prefix){var t=!1;return w(n)&&(n.prefix="",y(n,(function(n,e){e&&O(n,e)&&(t=!0)}))),t}var r=n.prefix;return!!l({provider:e,prefix:r,name:"a"})&&!!_(j(e,r),n)}(n))&&console.error(Jn)}catch(e){console.error(Jn)}}))}if(void 0!==qn.IconifyProviders){var Qn=qn.IconifyProviders;if("object"===typeof Qn&&null!==Qn)for(var Wn in Qn){var Bn="IconifyProviders["+Wn+"] is invalid.";try{var Vn=Qn[Wn];if("object"!==typeof Vn||!Vn||void 0===Vn.resources)continue;J(Wn,Vn)||console.error(Bn)}catch(Kn){console.error(Bn)}}}}var Xn=function(n){(0,o.Z)(t,n);var e=(0,a.Z)(t);function t(n){var i;return(0,r.Z)(this,t),(i=e.call(this,n)).state={icon:null},i}return(0,i.Z)(t,[{key:"_abortLoading",value:function(){this._loading&&(this._loading.abort(),this._loading=null)}},{key:"_setData",value:function(n){this.state.icon!==n&&this.setState({icon:n})}},{key:"_checkIcon",value:function(n){var e,t=this.state,r=this.props.icon;if("object"===typeof r&&null!==r&&"string"===typeof r.body)return this._icon="",this._abortLoading(),void((n||null===t.icon)&&this._setData({data:r}));if("string"!==typeof r||null===(e=s(r,!1,!0)))return this._abortLoading(),void this._setData(null);var i=E(e);if(i){if(this._icon!==r||null===t.icon){this._abortLoading(),this._icon=r;var o=["iconify"];""!==e.prefix&&o.push("iconify--"+e.prefix),""!==e.provider&&o.push("iconify--"+e.provider),this._setData({data:i,classes:o}),this.props.onLoad&&this.props.onLoad(r)}}else this._loading&&this._loading.name===r||(this._abortLoading(),this._icon="",this._setData(null),null!==i&&(this._loading={name:r,abort:_n([e],this._checkIcon.bind(this,!1))}))}},{key:"componentDidMount",value:function(){this._checkIcon(!1)}},{key:"componentDidUpdate",value:function(n){n.icon!==this.props.icon&&this._checkIcon(!0)}},{key:"componentWillUnmount",value:function(){this._abortLoading()}},{key:"render",value:function(){var n=this.props,e=this.state.icon;if(null===e)return n.children?n.children:f.createElement("span",{});var t=n;return e.classes&&(t=(0,c.Z)((0,c.Z)({},n),{},{className:("string"===typeof n.className?n.className+" ":"")+e.classes.join(" ")})),$n((0,c.Z)((0,c.Z)({},h),e.data),t,n._inline,n._ref)}}]),t}(f.Component),Gn=f.forwardRef((function(n,e){var t=(0,c.Z)((0,c.Z)({},n),{},{_ref:e,_inline:!1});return f.createElement(Xn,t)}));f.forwardRef((function(n,e){var t=(0,c.Z)((0,c.Z)({},n),{},{_ref:e,_inline:!0});return f.createElement(Xn,t)}))},5984:function(n,e,t){t.d(e,{x0:function(){return r}});var r=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(n)).reduce((function(n,e){return n+=(e&=63)<36?e.toString(36):e<62?(e-26).toString(36).toUpperCase():e>62?"-":"_"}),"")}}}]);
//# sourceMappingURL=549.3e8f2b40.chunk.js.map