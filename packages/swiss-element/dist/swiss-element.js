!function(n,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((n=n||self).swissElement={})}(this,function(n){"use strict";var e=null,t=[],r=[],u=function n(e){return typeof e==typeof n?e():e},o=function(n,e){return n.length!==e.length||n.some(d,e)},i=function(n){return function(e){var t={i:0,stack:[]};e[n]=t,e.before.push(function(){t.i=0})}},c=0,a=function(){return"_$"+c++},f=function(n){var t=e,r=t[n],u=t.update,o=r.i,i=r.stack;return r.i++,{i:o,stack:i,update:u,unknown:o===i.length}},s=function(n){var t=p(u);return l(r,t),u.reset=function(){for(var n in l(t.reset,t),t)/^_\$/.test(n)&&t[n].stack.splice(0)},u;function u(){var r=e;e=t;var u=t._,o=t.before,i=t.after,c=t.external;try{var a;do{u.$=u._=!1,l(o,t),a=n.apply(u.c=this,u.a=arguments),l(i,t),c.length&&l(c.splice(0),a)}while(u._);return a}finally{u.$=!0,e=r}}},l=function(n,e){for(var t=n.length,r=0;r<t;)n[r++](e)},p=function(n){var e={_:!0,$:!0,c:null,a:null};return{_:e,before:[],after:[],external:[],reset:[],update:function(){return e.$?n.apply(e.c,e.a):e._=!0}}};function d(n,e){return n!==this[e]}var v,h,b=a();try{v=cancelAnimationFrame,h=requestAnimationFrame}catch(n){v=clearTimeout,h=setTimeout}var y=function(n,e,t,r,u,o,i){var c={always:n,cb:u,check:e,clean:null,inputs:t,raf:r,t:0,update:e,fn:function(){m(o[i],c.cb())}};return c},m=function(n,e){n.t=0,n.clean=e};r.push(function(n){var e=[],t={i:0,stack:e};n[b]=t;var r=function(){t.i=0;for(var n=e.length,r=0;r<n;r++){var u=e[r],o=u.check,i=u.clean,c=u.raf,a=u.t;o&&(c&&a?v(a):i&&i(),m(e[r],null))}};n.reset.push(r),n.before.push(r),n.after.push(function(){for(var n=e.length,t=0;t<n;t++){var r=e[t],u=r.fn,o=r.raf;r.update&&(r.update=!1,o?r.t=h(u):u())}})});var g=function n(r){return function(u,i){var c=f(b),a=c.i,s=c.stack,l=c.unknown,p=i||t;if(l){var d=p===t,v=d||!r||"function"!=typeof p;d||!r||"function"!=typeof p?s.push(y(d,v,p,r,u,s,a)):(e.external.push(function(n){return i(u,n)}),s.push(y(d,d,t,r,n,s,a)))}else{var h=s[a],m=h.check,g=h.always,w=h.inputs;m&&(g||o(w,p))&&(h.cb=u,h.inputs=p,h.update=!0)}}}(!0),w=a();r.push(i(w));var k=a();r.push(i(k));var E=function(n,e){var r=f(k),u=r.i,i=r.stack,c=r.unknown,a=e||t;c&&C(i,-1,n,a);var s=i[u],l=s.filter,p=s.value,d=s.fn,v=s.inputs;return(l?o(v,a):n!==d)?C(i,u,n,a):p},C=function(n,e,r,u){var o={filter:u!==t,value:null,fn:r,inputs:u};return e<0?n.push(o):n[e]=o,o.value=r(),o.value},O=a();r.push(i(O));var _=function(n,e){var t=f(O),r=t.i,o=t.stack,i=t.unknown,c=t.update;if(i){var a=[null,function(t){e=n(e,t),a[0]=e,c()}];o.push(a),a[0]=u(e)}return o[r]},j=a();function A(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function P(){return(P=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(this,arguments)}function R(n,e){n.innerHTML=e()}function x(n){return"function"==typeof n}function $(n){return void 0===n}function T(n){return n?document.createElement(n).constructor:HTMLElement}function F(n,e,t){n&&self.customElements.define(n,e,t)}function M(n,e){void 0===e&&(e=null),n=n||"s";var t=e?n+"-"+e:n;return L(t)?t:M(t,function(n){void 0===n&&(n="");var e=++H;return""+n+e}())}function L(n){return U(n)&&!self.customElements.get(n)}function U(n){return n&&/.-./.test(n)}function D(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];return function(n){return e.reduceRight(function(n,e){return e(n)},n)}}function N(n){return n.replace(/-([a-z])/g,function(n,e){return e.toUpperCase()})}function S(n,e){if(void 0===e&&(e={}),"CustomEvent"in self&&x(self.CustomEvent))return new self.CustomEvent(n,e);var t=document.createEvent("CustomEvent");return t.initCustomEvent(n,e.bubbles,e.cancelable,e),t}r.push(i(j));var H=0;function q(n,e){function t(){var t=this;return this._super=function(){return"undefined"!=typeof Reflect?Reflect.construct(n,[],t.constructor):n.call(t)},e.call(this)}return t.prototype=Object.create(n.prototype),t.prototype.constructor=t,t}function z(n){return function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),u=1;u<t;u++)r[u-1]=arguments[u];return r.forEach(function(t){for(var r in t){var u=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(e,r,P(u,n))}}),e}}var B=z({enumerable:!1,configurable:!0,writeable:!1}),G="connected",I="disconnected";function J(n,e){if(!$(e)){if(!x(e))throw new Error("Expected the enhancer to be a function.");return e(J)(n)}var t=n.el,r=n.component,u=s(function(){var n=r.call(t,t);return t.render(n)});return{render:function(n){return t.renderer(t.renderRoot,function(){return n}),n},renderer:R,connectedCallback:function(){u(),t.dispatchEvent(new S(G))},disconnectedCallback:function(){t.dispatchEvent(new S(I))},attributeChangedCallback:function(n,e,r){t.shouldUpdate(e,r)&&u()},shouldUpdate:function(n,e){return n!==e},get renderRoot(){return t.shadowRoot||t._shadowRoot||t}}}function K(n,e){var t={handleEvent:Q,onconnected:V,ondisconnected:W,$:n,_:null};e.addEventListener(G,t,!1),e.addEventListener(I,t,!1)}function Q(n){this["on"+n.type]()}function V(){W.call(this),this._=this.$()}function W(){var n=this._;this._=null,n&&n()}n.useCallback=function(n,e){return E(function(){return n},e)},n.useMemo=E,n.useReducer=_,n.useRef=function(n){var e=f(w),t=e.i,r=e.stack;if(e.unknown){var o={current:null};r.push(o),o.current=u(n)}return r[t]},n.useState=function(n){return _(function(n,e){return e},n)},n.useEffect=function(n,e){void 0===e&&(e=[]);var t=[n];return e&&t.push(e.length?e:K),g.apply(null,t)},n.renderer=function(n){return void 0===n&&(n=R),function(e){return function(){var t=e.apply(void 0,arguments);return t.renderer=n,t}}},n.applyMiddleware=function(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];return function(n){return function(){var t=n.apply(void 0,arguments),r=function(){throw new Error("Rendering while constructing your middleware is not allowed. Other middleware would not be applied to this render.")},u={render:function(){return r.apply(void 0,arguments)}},o=e.map(function(n){return n(u)});return r=D.apply(void 0,o)(t.render.bind(t)),t.render=r,t}}},n.element=function(n,e,t,r){x(n)&&(r=t,t=e,e=n,n=void 0),!x(t)&&$(r)&&(r=t,t=void 0),n=(r=r||{}).name=M(n||r.name);var u,o=q(T(r&&r.extends),function(){var n=this._super(),u=J(function(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),r.forEach(function(e){A(n,e,t[e])})}return n}({},r,{component:e,el:n}),t);return B(n,u)});return u=o.prototype,["connectedCallback","disconnectedCallback","attributeChangedCallback","adoptedCallback"].forEach(function(n){u[n]=function(){this.hasOwnProperty(n)&&this[n].apply(this,arguments)}}),o.observedAttributes=r.observedAttributes||[],function(n,e){e.forEach(function(e){e in n||Object.defineProperty(n,N(e),{configurable:!0,get:function(){return this.getAttribute(e)},set:function(n){null==n?this.removeAttribute(e):this.setAttribute(e,n)}})})}(o.prototype,o.observedAttributes),F(n,o,r),o},n.isFunction=x,n.isUndefined=$,n.getNativeConstructor=T,n.define=F,n.findFreeTagName=M,n.isFreeTagName=L,n.hasDash=U,n.compose=D,n.camelCase=N,n.CustomEvent=S,n.extend=q,n.createCompleteAssign=z,n.completeAssign=B,Object.defineProperty(n,"__esModule",{value:!0})});