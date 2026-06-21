"use strict";var y=function(r,a){return function(){try{return a||r((a={exports:{}}).exports,a),a.exports}catch(u){throw (a=0, u)}};};var Z=y(function(Q,g){
var p=require('@stdlib/math-base-assert-is-nan/dist'),C=require('@stdlib/math-base-assert-is-positive-zero/dist'),P=require('@stdlib/math-base-special-abs/dist');function D(r,a,u,m,t,x,b){var v,n,s,f,o,i,e,q,c;for(v=a.data,n=t.data,s=a.accessors[0],f=t.accessors[0],i=m,e=b,c=0;c<r&&f(n,e)!==0;c++)i+=u,e+=x;if(c===r)return NaN;if(o=P(s(v,i)),p(o))return o;for(c+=1,c;c<r;c++)if(i+=u,e+=x,!f(n,e)){if(q=P(s(v,i)),p(q))return q;(q>o||q===o&&C(q))&&(o=q)}return o}g.exports=D
});var l=y(function(S,h){
var j=require('@stdlib/math-base-assert-is-nan/dist'),E=require('@stdlib/math-base-assert-is-positive-zero/dist'),O=require('@stdlib/math-base-special-abs/dist'),R=require('@stdlib/array-base-arraylike2object/dist'),F=Z();function G(r,a,u,m,t,x,b){var v,n,s,f,o,i,e;if(r<=0)return NaN;if(f=R(a),o=R(t),f.accessorProtocol||o.accessorProtocol)return F(r,f,u,m,o,x,b);for(n=m,s=b,e=0;e<r&&t[s]!==0;e++)n+=u,s+=x;if(e===r)return NaN;if(v=O(a[n]),j(v))return v;for(e+=1,e;e<r;e++)if(n+=u,s+=x,!t[s]){if(i=O(a[n]),j(i))return i;(i>v||i===v&&E(i))&&(v=i)}return v}h.exports=G
});var A=y(function(T,z){
var w=require('@stdlib/strided-base-stride2offset/dist'),H=l();function I(r,a,u,m,t){return H(r,a,u,w(r,u),m,t,w(r,t))}z.exports=I
});var J=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),B=A(),K=l();J(B,"ndarray",K);module.exports=B;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
