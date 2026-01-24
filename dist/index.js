"use strict";var p=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var Z=p(function(U,g){
var l=require('@stdlib/math-base-assert-is-nan/dist'),E=require('@stdlib/math-base-assert-is-positive-zero/dist'),P=require('@stdlib/math-base-special-abs/dist');function F(r,e,t,m,o,x,b){var u,n,s,f,v,i,a,q,c;for(u=e.data,n=o.data,s=e.accessors[0],f=o.accessors[0],i=m,a=b,c=0;c<r&&f(n,a)!==0;c++)i+=t,a+=x;if(c===r)return NaN;if(v=P(s(u,i)),l(v))return v;for(c+=1,c;c<r;c++)if(i+=t,a+=x,!f(n,a)){if(q=P(s(u,i)),l(q))return q;(q>v||q===v&&E(q))&&(v=q)}return v}g.exports=F
});var y=p(function(V,h){
var j=require('@stdlib/math-base-assert-is-nan/dist'),G=require('@stdlib/math-base-assert-is-positive-zero/dist'),O=require('@stdlib/math-base-special-abs/dist'),R=require('@stdlib/array-base-arraylike2object/dist'),H=Z();function I(r,e,t,m,o,x,b){var u,n,s,f,v,i,a;if(r<=0)return NaN;if(f=R(e),v=R(o),f.accessorProtocol||v.accessorProtocol)return H(r,f,t,m,v,x,b);for(n=m,s=b,a=0;a<r&&o[s]!==0;a++)n+=t,s+=x;if(a===r)return NaN;if(u=O(e[n]),j(u))return u;for(a+=1,a;a<r;a++)if(n+=t,s+=x,!o[s]){if(i=O(e[n]),j(i))return i;(i>u||i===u&&G(i))&&(u=i)}return u}h.exports=I
});var A=p(function(W,z){
var w=require('@stdlib/strided-base-stride2offset/dist'),J=y();function K(r,e,t,m,o){return J(r,e,t,w(r,t),m,o,w(r,o))}z.exports=K
});var D=p(function(Y,C){
var L=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),B=A(),Q=y();L(B,"ndarray",Q);C.exports=B
});var S=D();module.exports=S;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
