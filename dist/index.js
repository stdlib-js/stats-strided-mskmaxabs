"use strict";var y=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var Z=y(function(Q,g){
var p=require('@stdlib/math-base-assert-is-nan/dist'),C=require('@stdlib/math-base-assert-is-positive-zero/dist'),P=require('@stdlib/math-base-special-abs/dist');function D(r,e,n,m,o,x,b){var u,t,s,f,v,i,a,q,c;for(u=e.data,t=o.data,s=e.accessors[0],f=o.accessors[0],i=m,a=b,c=0;c<r&&f(t,a)!==0;c++)i+=n,a+=x;if(c===r)return NaN;if(v=P(s(u,i)),p(v))return v;for(c+=1,c;c<r;c++)if(i+=n,a+=x,!f(t,a)){if(q=P(s(u,i)),p(q))return q;(q>v||q===v&&C(q))&&(v=q)}return v}g.exports=D
});var l=y(function(S,h){
var j=require('@stdlib/math-base-assert-is-nan/dist'),E=require('@stdlib/math-base-assert-is-positive-zero/dist'),O=require('@stdlib/math-base-special-abs/dist'),R=require('@stdlib/array-base-arraylike2object/dist'),F=Z();function G(r,e,n,m,o,x,b){var u,t,s,f,v,i,a;if(r<=0)return NaN;if(f=R(e),v=R(o),f.accessorProtocol||v.accessorProtocol)return F(r,f,n,m,v,x,b);for(t=m,s=b,a=0;a<r&&o[s]!==0;a++)t+=n,s+=x;if(a===r)return NaN;if(u=O(e[t]),j(u))return u;for(a+=1,a;a<r;a++)if(t+=n,s+=x,!o[s]){if(i=O(e[t]),j(i))return i;(i>u||i===u&&E(i))&&(u=i)}return u}h.exports=G
});var A=y(function(T,z){
var w=require('@stdlib/strided-base-stride2offset/dist'),H=l();function I(r,e,n,m,o){return H(r,e,n,w(r,n),m,o,w(r,o))}z.exports=I
});var J=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),B=A(),K=l();J(B,"ndarray",K);module.exports=B;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
