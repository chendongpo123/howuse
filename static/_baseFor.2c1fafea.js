import{p as x,N as y,i as d,O as h,j as g,P as w,Q as b,U as f,T as P,V as m,W as L,X as T,Y as A}from"./index.47b6fe0f.js";function Q(e,r,n,t){var u=!n;n||(n={});for(var i=-1,o=r.length;++i<o;){var s=r[i],a=t?t(n[s],e[s],s,n,e):void 0;a===void 0&&(a=e[s]),u?x(n,s,a):y(n,s,a)}return n}function C(e){var r=[];if(e!=null)for(var n in Object(e))r.push(n);return r}var U=Object.prototype,B=U.hasOwnProperty;function F(e){if(!d(e))return C(e);var r=h(e),n=[];for(var t in e)t=="constructor"&&(r||!B.call(e,t))||n.push(t);return n}function S(e){return g(e)?w(e,!0):F(e)}var O=typeof exports=="object"&&exports&&!exports.nodeType&&exports,l=O&&typeof module=="object"&&module&&!module.nodeType&&module,I=l&&l.exports===O,c=I?b.Buffer:void 0,p=c?c.allocUnsafe:void 0;function W(e,r){if(r)return e.slice();var n=e.length,t=p?p(n):new e.constructor(n);return e.copy(t),t}function X(e,r){var n=-1,t=e.length;for(r||(r=Array(t));++n<t;)r[n]=e[n];return r}function K(e){var r=new e.constructor(e.byteLength);return new f(r).set(new f(e)),r}function Y(e,r){var n=r?K(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}var v=Object.create,E=function(){function e(){}return function(r){if(!d(r))return{};if(v)return v(r);e.prototype=r;var n=new e;return e.prototype=void 0,n}}();const N=E;function q(e){return typeof e.constructor=="function"&&!h(e)?N(P(e)):{}}function D(e,r){return m(L(e,r,T),e+"")}function G(e){return A(e)&&g(e)}function R(e){return function(r,n,t){for(var u=-1,i=Object(r),o=t(r),s=o.length;s--;){var a=o[e?s:++u];if(n(i[a],a,i)===!1)break}return r}}var $=R();const H=$;export{X as a,D as b,Q as c,W as d,Y as e,q as f,H as g,K as h,G as i,S as k};
//# sourceMappingURL=_baseFor.2c1fafea.js.map
