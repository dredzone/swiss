!function(e){"function"==typeof define&&define.amd?define(e):e()}(function(){"use strict";function e(){return(e=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function t(){}var n={},r=[],o=[];function i(e,t){for(var n in t)e[n]=t[n];return e}var a="function"==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout,u=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,c=[];function l(e){!e._dirty&&(e._dirty=!0)&&1==c.push(e)&&a(s)}function s(){var e,t=c;for(c=[];e=t.pop();)e._dirty&&S(e)}function f(e,t){return e.normalizedNodeName===t||e.nodeName.toLowerCase()===t.toLowerCase()}function p(e){var t=i({},e.attributes);t.children=e.children;var n=e.nodeName.defaultProps;if(void 0!==n)for(var r in n)void 0===t[r]&&(t[r]=n[r]);return t}function d(e){var t=e.parentNode;t&&t.removeChild(e)}function v(e,t,n,r,o){if("className"===t&&(t="class"),"key"===t);else if("ref"===t)n&&n(null),r&&r(e);else if("class"!==t||o)if("style"===t){if(r&&"string"!=typeof r&&"string"!=typeof n||(e.style.cssText=r||""),r&&"object"==typeof r){if("string"!=typeof n)for(var i in n)i in r||(e.style[i]="");for(var i in r)e.style[i]="number"==typeof r[i]&&!1===u.test(i)?r[i]+"px":r[i]}}else if("dangerouslySetInnerHTML"===t)r&&(e.innerHTML=r.__html||"");else if("o"==t[0]&&"n"==t[1]){var a=t!==(t=t.replace(/Capture$/,""));t=t.toLowerCase().substring(2),r?n||e.addEventListener(t,h,a):e.removeEventListener(t,h,a),(e._listeners||(e._listeners={}))[t]=r}else if("list"!==t&&"type"!==t&&!o&&t in e)!function(e,t,n){try{e[t]=n}catch(e){}}(e,t,null==r?"":r),null!=r&&!1!==r||e.removeAttribute(t);else{var c=o&&t!==(t=t.replace(/^xlink:?/,""));null==r||!1===r?c?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.removeAttribute(t):"function"!=typeof r&&(c?e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),r):e.setAttribute(t,r))}else e.className=r||""}function h(e){return this._listeners[e.type](e)}var m=[],_=0,b=!1,y=!1;function g(){for(var e;e=m.pop();)e.componentDidMount&&e.componentDidMount()}function C(e,t,n,r,o,i){_++||(b=null!=o&&void 0!==o.ownerSVGElement,y=null!=e&&!("__preactattr_"in e));var a=function e(t,n,r,o,i){var a=t,u=b;if(null!=n&&"boolean"!=typeof n||(n=""),"string"==typeof n||"number"==typeof n)return t&&void 0!==t.splitText&&t.parentNode&&(!t._component||i)?t.nodeValue!=n&&(t.nodeValue=n):(a=document.createTextNode(n),t&&(t.parentNode&&t.parentNode.replaceChild(a,t),k(t,!0))),a.__preactattr_=!0,a;var c,l,s=n.nodeName;if("function"==typeof s)return function(e,t,n,r){for(var o=e&&e._component,i=o,a=e,u=o&&e._componentConstructor===t.nodeName,c=u,l=p(t);o&&!c&&(o=o._parentComponent);)c=o.constructor===t.nodeName;return o&&c&&(!r||o._component)?(A(o,l,3,n,r),e=o.base):(i&&!u&&(U(i),e=a=null),o=N(t.nodeName,l,n),e&&!o.nextBase&&(o.nextBase=e,a=null),A(o,l,1,n,r),e=o.base,a&&e!==a&&(a._component=null,k(a,!1))),e}(t,n,r,o);if(b="svg"===s||"foreignObject"!==s&&b,s=String(s),(!t||!f(t,s))&&(c=s,(l=b?document.createElementNS("http://www.w3.org/2000/svg",c):document.createElement(c)).normalizedNodeName=c,a=l,t)){for(;t.firstChild;)a.appendChild(t.firstChild);t.parentNode&&t.parentNode.replaceChild(a,t),k(t,!0)}var h=a.firstChild,m=a.__preactattr_,_=n.children;if(null==m){m=a.__preactattr_={};for(var g=a.attributes,C=g.length;C--;)m[g[C].name]=g[C].value}return!y&&_&&1===_.length&&"string"==typeof _[0]&&null!=h&&void 0!==h.splitText&&null==h.nextSibling?h.nodeValue!=_[0]&&(h.nodeValue=_[0]):(_&&_.length||null!=h)&&function(t,n,r,o,i){var a,u,c,l,s,p,v,h,m=t.childNodes,_=[],b={},y=0,g=0,C=m.length,w=0,x=n?n.length:0;if(0!==C)for(var N=0;N<C;N++){var E=m[N],A=E.__preactattr_,S=x&&A?E._component?E._component.__key:A.key:null;null!=S?(y++,b[S]=E):(A||(void 0!==E.splitText?!i||E.nodeValue.trim():i))&&(_[w++]=E)}if(0!==x)for(var N=0;N<x;N++){s=null;var S=(l=n[N]).key;if(null!=S)y&&void 0!==b[S]&&(s=b[S],b[S]=void 0,y--);else if(!s&&g<w)for(a=g;a<w;a++)if(void 0!==_[a]&&(p=u=_[a],h=i,"string"==typeof(v=l)||"number"==typeof v?void 0!==p.splitText:"string"==typeof v.nodeName?!p._componentConstructor&&f(p,v.nodeName):h||p._componentConstructor===v.nodeName)){s=u,_[a]=void 0,a===w-1&&w--,a===g&&g++;break}s=e(s,l,r,o),c=m[N],s&&s!==t&&s!==c&&(null==c?t.appendChild(s):s===c.nextSibling?d(c):t.insertBefore(s,c))}if(y)for(var N in b)void 0!==b[N]&&k(b[N],!1);for(;g<=w;)void 0!==(s=_[w--])&&k(s,!1)}(a,_,r,o,y||null!=m.dangerouslySetInnerHTML),function(e,t,n){var r;for(r in n)t&&null!=t[r]||null==n[r]||v(e,r,n[r],n[r]=void 0,b);for(r in t)"children"===r||"innerHTML"===r||r in n&&t[r]===("value"===r||"checked"===r?e[r]:n[r])||v(e,r,n[r],n[r]=t[r],b)}(a,n.attributes,m),b=u,a}(e,t,n,r,i);return o&&a.parentNode!==o&&o.appendChild(a),--_||(y=!1,i||g()),a}function k(e,t){var n=e._component;n?U(n):(null!=e.__preactattr_&&e.__preactattr_.ref&&e.__preactattr_.ref(null),!1!==t&&null!=e.__preactattr_||d(e),w(e))}function w(e){for(e=e.lastChild;e;){var t=e.previousSibling;k(e,!0),e=t}}var x={};function N(e,t,n){var r,o=x[e.name];if(e.prototype&&e.prototype.render?(r=new e(t,n),P.call(r,t,n)):((r=new P(t,n)).constructor=e,r.render=E),o)for(var i=o.length;i--;)if(o[i].constructor===e){r.nextBase=o[i].nextBase,o.splice(i,1);break}return r}function E(e,t,n){return this.constructor(e,n)}function A(e,t,r,o,i){e._disable||(e._disable=!0,(e.__ref=t.ref)&&delete t.ref,(e.__key=t.key)&&delete t.key,!e.base||i?e.componentWillMount&&e.componentWillMount():e.componentWillReceiveProps&&e.componentWillReceiveProps(t,o),o&&o!==e.context&&(e.prevContext||(e.prevContext=e.context),e.context=o),e.prevProps||(e.prevProps=e.props),e.props=t,e._disable=!1,0!==r&&(1!==r&&!1===n.syncComponentUpdates&&e.base?l(e):S(e,1,i)),e.__ref&&e.__ref(e))}function S(e,t,n,r){if(!e._disable){var o,a,u,c=e.props,l=e.state,s=e.context,f=e.prevProps||c,d=e.prevState||l,v=e.prevContext||s,h=e.base,b=e.nextBase,y=h||b,w=e._component,x=!1;if(h&&(e.props=f,e.state=d,e.context=v,2!==t&&e.shouldComponentUpdate&&!1===e.shouldComponentUpdate(c,l,s)?x=!0:e.componentWillUpdate&&e.componentWillUpdate(c,l,s),e.props=c,e.state=l,e.context=s),e.prevProps=e.prevState=e.prevContext=e.nextBase=null,e._dirty=!1,!x){o=e.render(c,l,s),e.getChildContext&&(s=i(i({},s),e.getChildContext()));var E,P,O=o&&o.nodeName;if("function"==typeof O){var T=p(o);(a=w)&&a.constructor===O&&T.key==a.__key?A(a,T,1,s,!1):(E=a,e._component=a=N(O,T,s),a.nextBase=a.nextBase||b,a._parentComponent=e,A(a,T,0,s,!1),S(a,1,n,!0)),P=a.base}else u=y,(E=w)&&(u=e._component=null),(y||1===t)&&(u&&(u._component=null),P=C(u,o,s,n||!h,y&&y.parentNode,!0));if(y&&P!==y&&a!==w){var L=y.parentNode;L&&P!==L&&(L.replaceChild(P,y),E||(y._component=null,k(y,!1)))}if(E&&U(E),e.base=P,P&&!r){for(var j=e,B=e;B=B._parentComponent;)(j=B).base=P;P._component=j,P._componentConstructor=j.constructor}}if(!h||n?m.unshift(e):x||e.componentDidUpdate&&e.componentDidUpdate(f,d,v),null!=e._renderCallbacks)for(;e._renderCallbacks.length;)e._renderCallbacks.pop().call(e);_||r||g()}}function U(e){var t=e.base;e._disable=!0,e.componentWillUnmount&&e.componentWillUnmount(),e.base=null;var n=e._component;n?U(n):t&&(t.__preactattr_&&t.__preactattr_.ref&&t.__preactattr_.ref(null),e.nextBase=t,d(t),function(e){var t=e.constructor.name;(x[t]||(x[t]=[])).push(e)}(e),w(t)),e.__ref&&e.__ref(null)}function P(e,t){this._dirty=!0,this.context=t,this.props=e,this.state=this.state||{}}i(P.prototype,{setState:function(e,t){var n=this.state;this.prevState||(this.prevState=i({},n)),i(n,"function"==typeof e?e(n,this.props):e),t&&(this._renderCallbacks=this._renderCallbacks||[]).push(t),l(this)},forceUpdate:function(e){e&&(this._renderCallbacks=this._renderCallbacks||[]).push(e),S(this,2)},render:function(){}});var O={},T=JSON.stringify;var L=function(e){for(var t=".",n=0;n<e.length;n++)t+=e[n].length+","+e[n];return(O[t]||(O[t]=function(e){for(var t,n,r,o,i,a=0,u="return ",c="",l="",s=0,f="",p="",d="",v=0,h=function e(){r?9===a?(s++&&(u+=","),u+="h("+(l||T(c)),a=0):13===a||0===a&&"..."===c?(0===a?(d||(d=")",f=f?"Object.assign("+f:"Object.assign({}"),f+=p+","+l,p=""):o&&(f+=f?","+(p?"":"{"):"{",p="}",f+=T(o)+":",f+=l||(i||c)&&T(c)||"true",o=""),i=!1):0===a&&(a=13,o=c,c=l="",e(),a=0):(l||(c=c.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))&&(s++&&(u+=","),u+=l||T(c)),c=l=""},m=0;m<e.length;m++){m>0&&(r||h(),l="$["+m+"]",h());for(var _=0;_<e[m].length;_++){if(n=e[m].charCodeAt(_),r){if(39===n||34===n){if(v===n){v=0;continue}if(0===v){v=n;continue}}if(0===v)switch(n){case 62:h(),47!==a&&(u+=f?","+f+p+d:",null"),t&&(u+=")"),r=0,f="",a=1;continue;case 61:a=13,i=!0,o=c,c="";continue;case 47:t||(t=!0,9!==a||c.trim()||(c=l="",a=47));continue;case 9:case 10:case 13:case 32:h(),a=0;continue}}else if(60===n){h(),r=1,d=p=f="",t=i=!1,a=9;continue}c+=e[m].charAt(_)}}return h(),Function("h","$",u)}(e)))(this,arguments)}.bind(function(e,n){var i,a,u,c,l=arguments,s=o;for(c=arguments.length;c-- >2;)r.push(l[c]);for(n&&null!=n.children&&(r.length||r.push(n.children),delete n.children);r.length;)if((a=r.pop())&&void 0!==a.pop)for(c=a.length;c--;)r.push(a[c]);else"boolean"==typeof a&&(a=null),(u="function"!=typeof e)&&(null==a?a="":"number"==typeof a?a=String(a):"string"!=typeof a&&(u=!1)),u&&i?s[s.length-1]+=a:s===o?s=[a]:s.push(a),i=u;var f=new t;return f.nodeName=e,f.children=s,f.attributes=null==n?void 0:n,f.key=null==n?void 0:n.key,f});function j(e,t){e.innerHTML=t}var B=Array.isArray;function $(e){return"function"==typeof e}function M(e){return void 0===e}function R(e,t){void 0===t&&(t=null),e=e||"s";var n=t?e+"-"+t:e;return function(e){return function(e){return e&&/.-./.test(e)}(e)&&!self.customElements.get(e)}(n)?n:R(n,function(e){void 0===e&&(e="");var t=++H;return""+e+t}())}var W=$(self.CustomEvent)&&self.CustomEvent||function(e,t){void 0===t&&(t={});var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t),n};var H=0;var V,q=(V={enumerable:!1,configurable:!0,writeable:!1},function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return r.forEach(function(n){for(var r in n){var o=Object.getOwnPropertyDescriptor(n,r);Object.defineProperty(t,r,e(o,V))}}),t}),D="connected",z="dis"+D;var F,I,G=null,J=[],K=function(e){return function(t){var n={i:0,stack:[]};t[e]=n,t.before.push(function(){n.i=0})}},Q=0,X=function(){return"_$"+Q++},Y=function(e){var t=ee(n);return Z(J,t),n.reset=function(){for(var e in Z(t.reset,t),t)/^_\$/.test(e)&&t[e].stack.splice(0)},n;function n(){var n=G;G=t;var r=t._,o=t.before,i=t.after,a=t.external;try{var u;do{r.$=r._=!1,Z(o,t),u=e.apply(r.c=this,r.a=arguments),Z(i,t),a.length&&Z(a.splice(0),u)}while(r._);return u}finally{r.$=!0,G=n}}},Z=function(e,t){for(var n=e.length,r=0;r<n;)e[r++](t)},ee=function(e){var t={_:!0,$:!0,c:null,a:null};return{_:t,before:[],after:[],external:[],reset:[],update:function(){return t.$?e.apply(t.c,t.a):t._=!0}}},te=X();try{F=cancelAnimationFrame,I=requestAnimationFrame}catch(e){F=clearTimeout,I=setTimeout}J.push(function(e){var t=[],n={i:0,stack:t},r=function(e,t,n,r){n&&r?F(r):t&&t(),function(e,t){e.t=0,e.clean=t}(e,null)};e[te]=n,e.before.push(function(){n.i=0}),e.reset.push(function(){n.i=0;for(var e=t.length,o=0;o<e;o++){var i=t[o],a=i.check,u=i.clean,c=i.raf,l=i.t;a&&r(i,u,c,l)}}),e.after.push(function(){for(var e=t.length,n=0;n<e;n++){var o=t[n],i=o.check,a=o.clean,u=o.fn,c=o.raf,l=o.t,s=o.update;i&&s&&(o.update=!1,r(o,a,c,l),c?o.t=I(u):u())}})});var ne=X();J.push(K(ne));var re=X();J.push(K(re));var oe=X();J.push(K(oe));var ie=function(e,t){var n=function(e){var t=G,n=t[e],r=t.update,o=n.i,i=n.stack;return n.i++,{i:o,stack:i,update:r,unknown:o===i.length}}(oe),r=n.i,o=n.stack,i=n.unknown,a=n.update;if(i){var u=[null,function(n){t=e(t,n),u[0]=t,a()}];o.push(u),u[0]=function e(t){return typeof t==typeof e?t():t}(t)}return o[r]},ae=function(e){return ie(function(e,t){return t},e)},ue=X();J.push(K(ue));var ce,le="connectedCallback",se="dis"+le,fe="attributeChangedCallback",pe="adoptedCallback",de="observedAttributes",ve=[function(e){return function(t){var n=e(t),r=t.component,o=Y(function(){var e=r.call(n,n);return n.render(e)});return n.requestUpdate=o,n}},function(e){return function(t){var n,r=e(t),o=t.observedAttributes;return n=Object.getPrototypeOf(r),o.forEach(function(e){e in n||Object.defineProperty(n,function(e){return e.replace(/-([a-z])/g,function(e,t){return t.toUpperCase()})}(e),{configurable:!0,get:function(){return this.getAttribute(e)},set:function(t){null==t?this.removeAttribute(e):this.setAttribute(e,t)}})}),r}}];function he(){var e,t,n=(e=['\n    <a href="#" onclick="','">\n      Clicked '," times\n    </a>\n  "],t||(t=e.slice(0)),e.raw=t,e);return he=function(){return n},n}!function(e,t,n,r){var o;if($(e)&&(r=n,n=t,t=e,e=void 0),!$(n)&&M(r)&&(r=n,n=void 0),B(r)&&((o={})[de]=r,r=o),e=(r=r||{}).name=R(e||r.name),!M(n)&&!$(n))throw new Error("Expected the enhancer to be a function.");n=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.filter(Boolean).reduceRight(function(e,t){return t(e)},e)}}.apply(void 0,[n].concat(ve));var i,a,u=function(e,t){function n(){var r=this;return this instanceof n?t.call(this,function(){return"undefined"!=typeof Reflect?Reflect.construct(e,[],r.constructor):e.call(r)}):new n}return n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n}((i=r&&r.extends)?document.createElement(i).constructor:HTMLElement,function(e){var o=q({},r,{component:t});return function(e,t){return function n(r,o){if(!M(o))return o(n)(r);var i,a=e();return q(a,{render:function(e){return a.renderer(a.renderRoot,e,i),i=e,e},renderer:j,connectedCallback:function(){a.requestUpdate(),a.dispatchEvent(new W(D))},disconnectedCallback:function(){a.dispatchEvent(new W(z))},attributeChangedCallback:function(e,t,n){a.shouldUpdate(t,n)&&a.requestUpdate()},requestUpdate:function(){var e=t.call(a,a);return a.render(e)},shouldUpdate:function(e,t){return e!==t},get renderRoot(){return a.shadowRoot||a._shadowRoot||a}})}}(e,t)(o,n)});a=u.prototype,[le,se,fe,pe].forEach(function(e){a[e]=function(){this.hasOwnProperty(e)&&this[e].apply(this,arguments)}});var c=r[de]=r[de]||[];u[de]=c,function(e,t,n){e&&self.customElements.define(e,t,n)}(e,u,r)}("s-counter",function(){var e=ae(0),t=e[0],n=e[1];return L(he(),function(){return n(t+1)},t)},(ce=function(e,t){!function(e,t,n){C(n,e,{},!1,t,!1)}(e,t,t.firstElementChild)},void 0===ce&&(ce=j),function(e){return function(){var t=e.apply(void 0,arguments),n=[function(e,t,n){return ce(e,t,n)},function(e,t,n){return ce(t,e,n)},function(e,t,n){return ce(n,t,e)},function(e,t,n){return ce(e,function(){return t},n)}];return t.renderer=function e(r,o,i,a){var u;void 0===a&&(a=0),t.renderer=n[a];try{u=t.renderer(r,o,i)}catch(t){if((a+=1)<n.length)return e(r,o,i,a)}return u||""},t}}))});
//# sourceMappingURL=counter.js.map
