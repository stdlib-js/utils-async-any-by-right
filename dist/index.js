"use strict";var v=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var A=v(function(Q,d){
var B=require('@stdlib/assert-is-plain-object/dist'),h=require('@stdlib/assert-has-own-property/dist'),N=require('@stdlib/assert-is-boolean/dist').isPrimitive,R=require('@stdlib/assert-is-positive-integer/dist').isPrimitive,y=require('@stdlib/error-tools-fmtprodmsg/dist');function j(e,r){return B(r)?(h(r,"thisArg")&&(e.thisArg=r.thisArg),h(r,"series")&&(e.series=r.series,!N(e.series))?new TypeError(y('1Qp2o',"series",e.series)):h(r,"limit")&&(e.limit=r.limit,!R(e.limit))?new TypeError(y('1Qp3P',"limit",e.limit)):null):new TypeError(y('1Qp2V',r));}d.exports=j
});var E=v(function(U,x){
var k=require("debug"),s=k("any-by-right-async:limit");function I(e,r,i,u){var a,f,l,t,n,m;if(t=e.length,s("Collection length: %d",t),t===0)return s("Finished processing a collection."),u(null,!1);for(t<r.limit?l=t:l=r.limit,s("Concurrency limit: %d",l),s("Number of arguments: %d",i.length),a=0,n=t,m=0;m<l;m++)n>0&&g();function g(){n-=1,s("Collection element %d: %s.",n,JSON.stringify(e[n])),i.length===2?i.call(r.thisArg,e[n],c):i.length===3?i.call(r.thisArg,e[n],n,c):i.call(r.thisArg,e[n],n,e,c)}function c(o,w){if(!f){if(o)return f=!0,s("Encountered an error: %s",o.message),u(o);if(a+=1,s("Processed %d of %d collection elements.",a,t),s("Test result: %s",!!w),w&&!f)return f=!0,s("Finished processing a collection."),u(null,!0);if(n>0)return g();if(a===t)return s("Finished processing a collection."),u(null,!1)}}}x.exports=I
});var b=v(function(W,T){
var O=require('@stdlib/assert-is-function/dist'),L=require('@stdlib/assert-is-collection/dist'),q=require('@stdlib/error-tools-fmtprodmsg/dist'),J=require('@stdlib/constants-float64-pinf/dist'),S=A(),z=E();function D(e,r){var i,u,a;if(i={},arguments.length>1){if(u=S(i,e),u)throw u;a=r}else a=e;if(!O(a))throw new TypeError(q('1Qp3q',a));return i.series?i.limit=1:i.limit||(i.limit=J),f;function f(l,t){if(!L(l))throw new TypeError(q('1QpAh',l));if(!O(t))throw new TypeError(q('1Qp3q',t));return z(l,i,a,n);function n(m,g){if(m)return t(m,!1);t(null,g)}}}T.exports=D
});var C=v(function(X,P){
var F=b();function G(e,r,i,u){if(arguments.length<4)return F(r)(e,i);F(r,i)(e,u)}P.exports=G
});var H=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),V=C(),K=b();H(V,"factory",K);module.exports=V;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
