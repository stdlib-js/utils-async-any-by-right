// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import i from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@v0.0.7-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import{isPrimitive as o}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@esm/index.mjs";import{isPrimitive as m}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@esm/index.mjs";function d(i,t){return n(t)?(l(t,"thisArg")&&(i.thisArg=t.thisArg),l(t,"series")&&(i.series=t.series,!o(i.series))?new TypeError(s("0iG30","series",i.series)):l(t,"limit")&&(i.limit=t.limit,!m(i.limit))?new TypeError(s("0iG3b","limit",i.limit)):null):new TypeError(s("0iG2h",t))}var f=()=>{};function h(i,t,e,s){var r,n,l,o,m,d;if(0===(o=i.length))return s(null,!1);for(l=o<t.limit?o:t.limit,f("Number of arguments: %d",e.length),r=0,m=o,d=0;d<l;d++)m>0&&h();function h(){f("Collection element %d: %s.",m-=1,JSON.stringify(i[m])),2===e.length?e.call(t.thisArg,i[m],p):3===e.length?e.call(t.thisArg,i[m],m,p):e.call(t.thisArg,i[m],m,i,p)}function p(i,t){if(!n)return i?(n=!0,f("Encountered an error: %s",i.message),s(i)):(r+=1,t&&!n?(n=!0,s(null,!0)):m>0?h():r===o?s(null,!1):void 0)}}function p(i,n){var l,o,m;if(l={},arguments.length>1){if(o=d(l,i))throw o;m=n}else m=i;if(!t(m))throw new TypeError(s("0iG43",m));return l.series?l.limit=1:l.limit||(l.limit=r),f;function f(i,r){if(!e(i))throw new TypeError(s("0iGBO",i));if(!t(r))throw new TypeError(s("0iG43",r));return h(i,l,m,(function(i,t){if(i)return r(i,!1);r(null,t)}))}}function c(i,t,e,s){if(arguments.length<4)return p(t)(i,e);p(t,e)(i,s)}i(c,"factory",p);export{c as default,p as factory};
//# sourceMappingURL=index.mjs.map
