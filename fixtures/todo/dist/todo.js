!function(t){"function"==typeof define&&define.amd?define(t):t()}(function(){"use strict";function t(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function e(){return(e=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function n(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}function r(t,e){return e||(e=t.slice(0)),t.raw=e,t}var i,o,a=null,s=[],u=function(t){return function(e){var n={i:0,stack:[]};e[t]=n,e.before.push(function(){n.i=0})}},l=0,c=function(){return"_$"+l++},f=function(t){var e=p(n);return h(s,e),n.reset=function(){for(var t in h(e.reset,e),e)/^_\$/.test(t)&&e[t].stack.splice(0)},n;function n(){var n=a;a=e;var r=e._,i=e.before,o=e.after,s=e.external;try{var u;do{r.$=r._=!1,h(i,e),u=t.apply(r.c=this,r.a=arguments),h(o,e),s.length&&h(s.splice(0),u)}while(r._);return u}finally{r.$=!0,a=n}}},h=function(t,e){for(var n=t.length,r=0;r<n;)t[r++](e)},p=function(t){var e={_:!0,$:!0,c:null,a:null};return{_:e,before:[],after:[],external:[],reset:[],update:function(){return e.$?t.apply(e.c,e.a):e._=!0}}},d=c();try{i=cancelAnimationFrame,o=requestAnimationFrame}catch(t){i=clearTimeout,o=setTimeout}var v=function(t,e){t.t=0,t.clean=e};s.push(function(t){var e=[],n={i:0,stack:e};t[d]=n;var r=function(){n.i=0;for(var t=e.length,r=0;r<t;r++){var o=e[r],a=o.check,s=o.clean,u=o.raf,l=o.t;a&&(u&&l?i(l):s&&s(),v(e[r],null))}};t.reset.push(r),t.before.push(r),t.after.push(function(){for(var t=e.length,n=0;n<t;n++){var r=e[n],i=r.fn,a=r.raf;r.update&&(r.update=!1,a?r.t=o(i):i())}})});var m=c();s.push(u(m));var g=c();s.push(u(g));var y=c();s.push(u(y));var b=function(t,e){var n=function(t){var e=a,n=e[t],r=e.update,i=n.i,o=n.stack;return n.i++,{i:i,stack:o,update:r,unknown:i===o.length}}(y),r=n.i,i=n.stack,o=n.unknown,s=n.update;if(o){var u=[null,function(n){e=t(e,n),u[0]=e,s()}];i.push(u),u[0]=function t(e){return typeof e==typeof t?e():e}(e)}return i[r]},_=function(t){return b(function(t,e){return e},t)},x=c();function w(t,e){t.innerHTML=e()}function E(t){return"function"==typeof t}function N(t){return void 0===t}function A(t,e){void 0===e&&(e=null),t=t||"s";var n=e?t+"-"+e:t;return function(t){return function(t){return t&&/.-./.test(t)}(t)&&!self.customElements.get(t)}(n)?n:A(n,function(t){void 0===t&&(t="");var e=++V;return""+t+e}())}function k(t,e){if(void 0===e&&(e={}),"CustomEvent"in self&&E(self.CustomEvent))return new self.CustomEvent(t,e);var n=document.createEvent("CustomEvent");return n.initCustomEvent(t,e.bubbles,e.cancelable,e),n}s.push(u(x));var V=0;var C=function(t){return function(n){for(var r=arguments.length,i=new Array(r>1?r-1:0),o=1;o<r;o++)i[o-1]=arguments[o];return i.forEach(function(r){for(var i in r){var o=Object.getOwnPropertyDescriptor(r,i);Object.defineProperty(n,i,e(o,t))}}),n}}({enumerable:!1,configurable:!0,writeable:!1}),T="connected",S="disconnected";function O(t,e){if(!N(e)){if(!E(e))throw new Error("Expected the enhancer to be a function.");return e(O)(t)}var n=t.el,r=t.component,i=f(function(){var t=r.call(n,n);return n.render(t)});return{render:function(t){return n.renderer(n.renderRoot,function(){return t}),t},renderer:w,connectedCallback:function(){i(),n.dispatchEvent(new k(T))},disconnectedCallback:function(){n.dispatchEvent(new k(S))},attributeChangedCallback:function(t,e,r){n.shouldUpdate(e,r)&&i()},shouldUpdate:function(t,e){return t!==e},get renderRoot(){return n.shadowRoot||n._shadowRoot||n}}}function P(e,n,r,i){E(e)&&(i=r,r=n,n=e,e=void 0),!E(r)&&N(i)&&(i=r,r=void 0),e=(i=i||{}).name=A(e||i.name);var o,a,s=function(t,e){function n(){var n=this;return this._super=function(){return"undefined"!=typeof Reflect?Reflect.construct(t,[],n.constructor):t.call(n)},e.call(this)}return n.prototype=Object.create(t.prototype),n.prototype.constructor=n,n}((o=i&&i.extends)?document.createElement(o).constructor:HTMLElement,function(){var e=this._super(),o=O(function(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},i=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(r).filter(function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),i.forEach(function(n){t(e,n,r[n])})}return e}({},i,{component:n,el:e}),r);return C(e,o)});return a=s.prototype,["connectedCallback","disconnectedCallback","attributeChangedCallback","adoptedCallback"].forEach(function(t){a[t]=function(){this.hasOwnProperty(t)&&this[t].apply(this,arguments)}}),s.observedAttributes=i.observedAttributes||[],function(t,e){e.forEach(function(e){e in t||Object.defineProperty(t,function(t){return t.replace(/-([a-z])/g,function(t,e){return e.toUpperCase()})}(e),{configurable:!0,get:function(){return this.getAttribute(e)},set:function(t){null==t?this.removeAttribute(e):this.setAttribute(e,t)}})})}(s.prototype,s.observedAttributes),function(t,e,n){t&&self.customElements.define(t,e,n)}(e,s,i),s}var j=new WeakMap,L=function(t){return"function"==typeof t&&j.has(t)},M=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,$=function(t,e,n){void 0===n&&(n=null);for(var r=e;r!==n;){var i=r.nextSibling;t.removeChild(r),r=i}},F={},R={},H="{{lit-"+String(Math.random()).slice(2)+"}}",I="\x3c!--"+H+"--\x3e",W=new RegExp(H+"|"+I),B=function(t,e){var n=this;this.parts=[],this.element=e;var r=-1,i=0,o=[];!function e(a){for(var s=a.content,u=document.createTreeWalker(s,133,null,!1),l=0;u.nextNode();){r++;var c=u.currentNode;if(1===c.nodeType){if(c.hasAttributes()){for(var f=c.attributes,h=0,p=0;p<f.length;p++)f[p].value.indexOf(H)>=0&&h++;for(;h-- >0;){var d=t.strings[i],v=q.exec(d)[2],m=v.toLowerCase()+"$lit$",g=c.getAttribute(m).split(W);n.parts.push({type:"attribute",index:r,name:v,strings:g}),c.removeAttribute(m),i+=g.length-1}}"TEMPLATE"===c.tagName&&e(c)}else if(3===c.nodeType){var y=c.data;if(y.indexOf(H)>=0){for(var b=c.parentNode,_=y.split(W),x=_.length-1,w=0;w<x;w++)b.insertBefore(""===_[w]?D():document.createTextNode(_[w]),c),n.parts.push({type:"node",index:++r});""===_[x]?(b.insertBefore(D(),c),o.push(c)):c.data=_[x],i+=x}}else if(8===c.nodeType)if(c.data===H){var E=c.parentNode;null!==c.previousSibling&&r!==l||(r++,E.insertBefore(D(),c)),l=r,n.parts.push({type:"node",index:r}),null===c.nextSibling?c.data="":(o.push(c),r--),i++}else for(var N=-1;-1!==(N=c.data.indexOf(H,N+1));)n.parts.push({type:"node",index:-1})}}(e);for(var a=0;a<o.length;a++){var s=o[a];s.parentNode.removeChild(s)}},U=function(t){return-1!==t.index},D=function(){return document.createComment("")},q=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F \x09\x0a\x0c\x0d"'>=\/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/,z=function(){function t(t,e,n){this._parts=[],this.template=t,this.processor=e,this.options=n}var e=t.prototype;return e.update=function(t){var e=0,n=this._parts,r=Array.isArray(n),i=0;for(n=r?n:n[Symbol.iterator]();;){var o;if(r){if(i>=n.length)break;o=n[i++]}else{if((i=n.next()).done)break;o=i.value}void 0!==o&&o.setValue(t[e]),e++}var a=this._parts,s=Array.isArray(a),u=0;for(a=s?a:a[Symbol.iterator]();;){var l;if(s){if(u>=a.length)break;l=a[u++]}else{if((u=a.next()).done)break;l=u.value}void 0!==l&&l.commit()}},e._clone=function(){var t=this,e=M?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),n=this.template.parts,r=0,i=0;return function e(o){for(var a=document.createTreeWalker(o,133,null,!1),s=a.nextNode();r<n.length&&null!==s;){var u=n[r];if(U(u))if(i===u.index){if("node"===u.type){var l=t.processor.handleTextExpression(t.options);l.insertAfterNode(s.previousSibling),t._parts.push(l)}else{var c;(c=t._parts).push.apply(c,t.processor.handleAttributeExpressions(s,u.name,u.strings,t.options))}r++}else i++,"TEMPLATE"===s.nodeName&&e(s.content),s=a.nextNode();else t._parts.push(void 0),r++}}(e),M&&(document.adoptNode(e),customElements.upgrade(e)),e},t}(),G=function(){function t(t,e,n,r){this.strings=t,this.values=e,this.type=n,this.processor=r}var e=t.prototype;return e.getHTML=function(){for(var t=this.strings.length-1,e="",n=0;n<t;n++){var r=this.strings[n],i=q.exec(r);e+=i?r.substr(0,i.index)+i[1]+i[2]+"$lit$"+i[3]+H:r+I}return e+this.strings[t]},e.getTemplateElement=function(){var t=document.createElement("template");return t.innerHTML=this.getHTML(),t},t}(),J=function(t){return null===t||!("object"==typeof t||"function"==typeof t)},K=function(){function t(t,e,n){this.dirty=!0,this.element=t,this.name=e,this.strings=n,this.parts=[];for(var r=0;r<n.length-1;r++)this.parts[r]=this._createPart()}var e=t.prototype;return e._createPart=function(){return new Q(this)},e._getValue=function(){for(var t=this.strings,e=t.length-1,n="",r=0;r<e;r++){n+=t[r];var i=this.parts[r];if(void 0!==i){var o=i.value;if(null!=o&&(Array.isArray(o)||"string"!=typeof o&&o[Symbol.iterator])){var a=o,s=Array.isArray(a),u=0;for(a=s?a:a[Symbol.iterator]();;){var l;if(s){if(u>=a.length)break;l=a[u++]}else{if((u=a.next()).done)break;l=u.value}n+="string"==typeof l?l:String(l)}}else n+="string"==typeof o?o:String(o)}}return n+=t[e]},e.commit=function(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))},t}(),Q=function(){function t(t){this.value=void 0,this.committer=t}var e=t.prototype;return e.setValue=function(t){t===F||J(t)&&t===this.value||(this.value=t,L(t)||(this.committer.dirty=!0))},e.commit=function(){for(;L(this.value);){var t=this.value;this.value=F,t(this)}this.value!==F&&this.committer.commit()},t}(),X=function(){function t(t){this.value=void 0,this._pendingValue=void 0,this.options=t}var e=t.prototype;return e.appendInto=function(t){this.startNode=t.appendChild(D()),this.endNode=t.appendChild(D())},e.insertAfterNode=function(t){this.startNode=t,this.endNode=t.nextSibling},e.appendIntoPart=function(t){t._insert(this.startNode=D()),t._insert(this.endNode=D())},e.insertAfterPart=function(t){t._insert(this.startNode=D()),this.endNode=t.endNode,t.endNode=this.startNode},e.setValue=function(t){this._pendingValue=t},e.commit=function(){for(;L(this._pendingValue);){var t=this._pendingValue;this._pendingValue=F,t(this)}var e=this._pendingValue;e!==F&&(J(e)?e!==this.value&&this._commitText(e):e instanceof G?this._commitTemplateResult(e):e instanceof Node?this._commitNode(e):Array.isArray(e)||e[Symbol.iterator]?this._commitIterable(e):e===R?(this.value=R,this.clear()):this._commitText(e))},e._insert=function(t){this.endNode.parentNode.insertBefore(t,this.endNode)},e._commitNode=function(t){this.value!==t&&(this.clear(),this._insert(t),this.value=t)},e._commitText=function(t){var e=this.startNode.nextSibling;t=null==t?"":t,e===this.endNode.previousSibling&&3===e.nodeType?e.data=t:this._commitNode(document.createTextNode("string"==typeof t?t:String(t))),this.value=t},e._commitTemplateResult=function(t){var e=this.options.templateFactory(t);if(this.value&&this.value.template===e)this.value.update(t.values);else{var n=new z(e,t.processor,this.options),r=n._clone();n.update(t.values),this._commitNode(r),this.value=n}},e._commitIterable=function(e){Array.isArray(this.value)||(this.value=[],this.clear());var n,r=this.value,i=0,o=e,a=Array.isArray(o),s=0;for(o=a?o:o[Symbol.iterator]();;){var u;if(a){if(s>=o.length)break;u=o[s++]}else{if((s=o.next()).done)break;u=s.value}var l=u;void 0===(n=r[i])&&(n=new t(this.options),r.push(n),0===i?n.appendIntoPart(this):n.insertAfterPart(r[i-1])),n.setValue(l),n.commit(),i++}i<r.length&&(r.length=i,this.clear(n&&n.endNode))},e.clear=function(t){void 0===t&&(t=this.startNode),$(this.startNode.parentNode,t.nextSibling,this.endNode)},t}(),Y=function(){function t(t,e,n){if(this.value=void 0,this._pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=n}var e=t.prototype;return e.setValue=function(t){this._pendingValue=t},e.commit=function(){for(;L(this._pendingValue);){var t=this._pendingValue;this._pendingValue=F,t(this)}if(this._pendingValue!==F){var e=!!this._pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)),this.value=e,this._pendingValue=F}},t}(),Z=function(t){function e(e,n,r){var i;return(i=t.call(this,e,n,r)||this).single=2===r.length&&""===r[0]&&""===r[1],i}n(e,t);var r=e.prototype;return r._createPart=function(){return new tt(this)},r._getValue=function(){return this.single?this.parts[0].value:t.prototype._getValue.call(this)},r.commit=function(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())},e}(K),tt=function(t){function e(){return t.apply(this,arguments)||this}return n(e,t),e}(Q),et=!1;try{var nt={get capture(){return et=!0,!1}};window.addEventListener("test",nt,nt),window.removeEventListener("test",nt,nt)}catch(t){}var rt=function(){function t(t,e,n){var r=this;this.value=void 0,this._pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=n,this._boundHandleEvent=function(t){return r.handleEvent(t)}}var e=t.prototype;return e.setValue=function(t){this._pendingValue=t},e.commit=function(){for(;L(this._pendingValue);){var t=this._pendingValue;this._pendingValue=F,t(this)}if(this._pendingValue!==F){var e=this._pendingValue,n=this.value,r=null==e||null!=n&&(e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive),i=null!=e&&(null==n||r);r&&this.element.removeEventListener(this.eventName,this._boundHandleEvent,this._options),i&&(this._options=it(e),this.element.addEventListener(this.eventName,this._boundHandleEvent,this._options)),this.value=e,this._pendingValue=F}},e.handleEvent=function(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)},t}(),it=function(t){return t&&(et?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)},ot=new(function(){function t(){}var e=t.prototype;return e.handleAttributeExpressions=function(t,e,n,r){var i=e[0];return"."===i?new Z(t,e.slice(1),n).parts:"@"===i?[new rt(t,e.slice(1),r.eventContext)]:"?"===i?[new Y(t,e.slice(1),n)]:new K(t,e,n).parts},e.handleTextExpression=function(t){return new X(t)},t}());function at(t){var e=st.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},st.set(t.type,e));var n=e.stringsArray.get(t.strings);if(void 0!==n)return n;var r=t.strings.join(H);return void 0===(n=e.keyString.get(r))&&(n=new B(t,t.getTemplateElement()),e.keyString.set(r,n)),e.stringsArray.set(t.strings,n),n}var st=new Map,ut=new WeakMap,lt=function(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return new G(t,n,"html",ot)};function ct(){var t=r(["\n    <h2>User Page</h2>\n\n    <h3>",'</h3>\n\n    <p>Change name:</p>\n    <full-name @change="','"> </full-name>\n  ']);return ct=function(){return t},t}function ft(){var t=r(['\n    <div class="container">\n      <label for="first">First</label>\n      <input\n        value="','"\n        @keyup="','"\n        type="text"\n        name="first"\n      />\n\n      <label for="last">Last</label>\n      <input\n        value="','"\n        @keyup="','"\n        type="text"\n        name="last"\n      />\n    </div>\n\n    <style>\n      .container {\n        border: none;\n        display: grid;\n        grid-template-columns: 20% 80%;\n      }\n\n      input {\n        border: 1px solid #e5e5e5;\n        padding: 6px 10px;\n        margin-bottom: 1em;\n      }\n    </style>\n  ']);return ft=function(){return t},t}var ht,pt=(void 0===(ht=function(t,n){return r=n(),i=t,void 0===(a=ut.get(i))&&($(i,i.firstChild),ut.set(i,a=new X(e({templateFactory:at},o))),a.appendInto(i)),a.setValue(r),void a.commit();var r,i,o,a})&&(ht=w),function(t){return function(){var e=t.apply(void 0,arguments);return e.renderer=ht,e}});function dt(){var t=_(""),e=t[0],n=t[1];return lt(ct(),e,function(t){return t.detail&&n(t.detail)})}P("full-name",function(t){var e=_("Swiss"),n=e[0],r=e[1],i=_("Cheese 🧀"),o=i[0],a=i[1];return function(t,e,n){var r=new CustomEvent("change",{detail:e+" "+n});t.dispatchEvent(r)}(t,n,o),lt(ft(),n,function(t){return r(t.target.value)},o,function(t){return a(t.target.value)})},pt),P("my-app",dt,pt),P(dt,pt),P("test",dt,pt),P("test",dt,pt)});