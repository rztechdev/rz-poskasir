const lc="modulepreload",cc=function(t){return"/build/"+t},ai={},dc=function(e,n,r){let o=Promise.resolve();if(n&&n.length>0){let c=function(d){return Promise.all(d.map(u=>Promise.resolve(u).then(g=>({status:"fulfilled",value:g}),g=>({status:"rejected",reason:g}))))};var s=c;document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=a?.nonce||a?.getAttribute("nonce");o=c(n.map(d=>{if(d=cc(d),d in ai)return;ai[d]=!0;const u=d.endsWith(".css"),g=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${g}`))return;const h=document.createElement("link");if(h.rel=u?"stylesheet":lc,u||(h.as="script"),h.crossOrigin="",h.href=d,l&&h.setAttribute("nonce",l),document.head.appendChild(h),u)return new Promise((w,m)=>{h.addEventListener("load",w),h.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${d}`)))})}))}function i(a){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=a,window.dispatchEvent(l),!l.defaultPrevented)throw a}return o.then(a=>{for(const l of a||[])l.status==="rejected"&&i(l.reason);return e().catch(i)})};function Cs(t,e){return function(){return t.apply(e,arguments)}}const{toString:uc}=Object.prototype,{getPrototypeOf:Ee}=Object,{iterator:Xe,toStringTag:ks}=Symbol,Sn=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),Je=(t,e)=>{let n=t;const r=[];for(;n!=null&&n!==Object.prototype;){if(r.indexOf(n)!==-1)return!1;if(r.push(n),Sn(n,e))return!0;n=Ee(n)}return!1},fc=(t,e)=>t!=null&&Je(t,e)?t[e]:void 0,lo=(t=>e=>{const n=uc.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),gt=t=>(t=t.toLowerCase(),e=>lo(e)===t),jn=t=>e=>typeof e===t,{isArray:re}=Array,oe=jn("undefined");function Ae(t){return t!==null&&!oe(t)&&t.constructor!==null&&!oe(t.constructor)&&it(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const Ss=gt("ArrayBuffer");function pc(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&Ss(t.buffer),e}const hc=jn("string"),it=jn("function"),As=jn("number"),Te=t=>t!==null&&typeof t=="object",gc=t=>t===!0||t===!1,vn=t=>{if(!Te(t))return!1;const e=Ee(t);return(e===null||e===Object.prototype||Ee(e)===null)&&!Je(t,ks)&&!Je(t,Xe)},mc=t=>{if(!Te(t)||Ae(t))return!1;try{return Object.keys(t).length===0&&Object.getPrototypeOf(t)===Object.prototype}catch{return!1}},wc=gt("Date"),bc=gt("File"),yc=t=>!!(t&&typeof t.uri<"u"),xc=t=>t&&typeof t.getParts<"u",_c=gt("Blob"),vc=gt("FileList"),Ec=gt("Set"),Cc=t=>Te(t)&&it(t.pipe);function kc(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}}const li=kc(),ci=typeof li.FormData<"u"?li.FormData:void 0,Sc=t=>{if(!t)return!1;if(ci&&t instanceof ci)return!0;const e=Ee(t);if(!e||e===Object.prototype||!it(t.append))return!1;const n=lo(t);return n==="formdata"||n==="object"&&it(t.toString)&&t.toString()==="[object FormData]"},Ac=gt("URLSearchParams"),[Tc,Rc,Pc,Oc]=["ReadableStream","Request","Response","Headers"].map(gt),$c=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function tn(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let r,o;if(typeof t!="object"&&(t=[t]),re(t))for(r=0,o=t.length;r<o;r++)e.call(null,t[r],r,t);else{if(Ae(t))return;const i=n?Object.getOwnPropertyNames(t):Object.keys(t),s=i.length;let a;for(r=0;r<s;r++)a=i[r],e.call(null,t[a],a,t)}}function Ts(t,e){if(Ae(t))return null;e=e.toLowerCase();const n=Object.keys(t);let r=n.length,o;for(;r-- >0;)if(o=n[r],e===o.toLowerCase())return o;return null}const Jt=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Rs=t=>!oe(t)&&t!==Jt;function Mr(...t){const{caseless:e,skipUndefined:n}=Rs(this)&&this||{},r={},o=(i,s)=>{if(s==="__proto__"||s==="constructor"||s==="prototype")return;const a=e&&typeof s=="string"&&Ts(r,s)||s,l=Sn(r,a)?r[a]:void 0;vn(l)&&vn(i)?r[a]=Mr(l,i):vn(i)?r[a]=Mr({},i):re(i)?r[a]=i.slice():(!n||!oe(i))&&(r[a]=i)};for(let i=0,s=t.length;i<s;i++){const a=t[i];if(!a||Ae(a)||(tn(a,o),typeof a!="object"||re(a)))continue;const l=Object.getOwnPropertySymbols(a);for(let c=0;c<l.length;c++){const d=l[c];Hc.call(a,d)&&o(a[d],d)}}return r}const Lc=(t,e,n,{allOwnKeys:r}={})=>(tn(e,(o,i)=>{n&&it(o)?Object.defineProperty(t,i,{__proto__:null,value:Cs(o,n),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(t,i,{__proto__:null,value:o,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:r}),t),Bc=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),Ic=(t,e,n,r)=>{t.prototype=Object.create(e.prototype,r),Object.defineProperty(t.prototype,"constructor",{__proto__:null,value:t,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(t,"super",{__proto__:null,value:e.prototype}),n&&Object.assign(t.prototype,n)},Nc=(t,e,n,r)=>{let o,i,s;const a={};if(e=e||{},t==null)return e;do{for(o=Object.getOwnPropertyNames(t),i=o.length;i-- >0;)s=o[i],(!r||r(s,t,e))&&!a[s]&&(e[s]=t[s],a[s]=!0);t=n!==!1&&Ee(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},Dc=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const r=t.indexOf(e,n);return r!==-1&&r===n},Mc=t=>{if(!t)return null;if(re(t))return t;let e=t.length;if(!As(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},Fc=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&Ee(Uint8Array)),zc=(t,e)=>{const r=(t&&t[Xe]).call(t);let o;for(;(o=r.next())&&!o.done;){const i=o.value;e.call(t,i[0],i[1])}},jc=(t,e)=>{let n;const r=[];for(;(n=t.exec(e))!==null;)r.push(n);return r},Uc=gt("HTMLFormElement"),qc=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,o){return r.toUpperCase()+o}),{propertyIsEnumerable:Hc}=Object.prototype,Vc=gt("RegExp"),Ps=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),r={};tn(n,(o,i)=>{let s;(s=e(o,i,t))!==!1&&(r[i]=s||o)}),Object.defineProperties(t,r)},Wc=t=>{Ps(t,(e,n)=>{if(it(t)&&["arguments","caller","callee"].includes(n))return!1;const r=t[n];if(it(r)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Kc=(t,e)=>{const n={},r=o=>{o.forEach(i=>{n[i]=!0})};return re(t)?r(t):r(String(t).split(e)),n},Gc=()=>{},Jc=(t,e)=>t!=null&&Number.isFinite(t=+t)?t:e;function Qc(t){return!!(t&&it(t.append)&&t[ks]==="FormData"&&t[Xe])}const Zc=t=>{const e=new WeakSet,n=r=>{if(Te(r)){if(e.has(r))return;if(Ae(r))return r;if(!("toJSON"in r)){e.add(r);let o;if(Ec(r)){o=[];for(const i of r){const s=n(i);!oe(s)&&o.push(s)}}else o=re(r)?[]:{},tn(r,(i,s)=>{const a=n(i);!oe(a)&&(o[s]=a)});return e.delete(r),o}}return r};return n(t)},Yc=gt("AsyncFunction"),Xc=t=>t&&(Te(t)||it(t))&&it(t.then)&&it(t.catch),Os=((t,e)=>t?setImmediate:e?((n,r)=>(Jt.addEventListener("message",({source:o,data:i})=>{o===Jt&&i===n&&r.length&&r.shift()()},!1),o=>{r.push(o),Jt.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",it(Jt.postMessage)),td=typeof queueMicrotask<"u"?queueMicrotask.bind(Jt):typeof process<"u"&&process.nextTick||Os,$s=t=>t!=null&&it(t[Xe]),ed=t=>t!=null&&Je(t,Xe)&&$s(t),f={isArray:re,isArrayBuffer:Ss,isBuffer:Ae,isFormData:Sc,isArrayBufferView:pc,isString:hc,isNumber:As,isBoolean:gc,isObject:Te,isPlainObject:vn,isEmptyObject:mc,isReadableStream:Tc,isRequest:Rc,isResponse:Pc,isHeaders:Oc,isUndefined:oe,isDate:wc,isFile:bc,isReactNativeBlob:yc,isReactNative:xc,isBlob:_c,isRegExp:Vc,isFunction:it,isStream:Cc,isURLSearchParams:Ac,isTypedArray:Fc,isFileList:vc,forEach:tn,merge:Mr,extend:Lc,trim:$c,stripBOM:Bc,inherits:Ic,toFlatObject:Nc,kindOf:lo,kindOfTest:gt,endsWith:Dc,toArray:Mc,forEachEntry:zc,matchAll:jc,isHTMLForm:Uc,hasOwnProperty:Sn,hasOwnProp:Sn,hasOwnInPrototypeChain:Je,getSafeProp:fc,reduceDescriptors:Ps,freezeMethods:Wc,toObjectSet:Kc,toCamelCase:qc,noop:Gc,toFiniteNumber:Jc,findKey:Ts,global:Jt,isContextDefined:Rs,isSpecCompliantForm:Qc,toJSONObject:Zc,isAsyncFn:Yc,isThenable:Xc,setImmediate:Os,asap:td,isIterable:$s,isSafeIterable:ed},nd=f.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),rd=t=>{const e={};let n,r,o;return t&&t.split(`
`).forEach(function(s){o=s.indexOf(":"),n=s.substring(0,o).trim().toLowerCase(),r=s.substring(o+1).trim();const a=f.hasOwnProp(e,n);!n||a&&f.hasOwnProp(nd,n)||(n==="set-cookie"?a?e[n].push(r):e[n]=[r]:e[n]=a?e[n]+", "+r:r)}),e};function od(t){let e=0,n=t.length;for(;e<n;){const r=t.charCodeAt(e);if(r!==9&&r!==32)break;e+=1}for(;n>e;){const r=t.charCodeAt(n-1);if(r!==9&&r!==32)break;n-=1}return e===0&&n===t.length?t:t.slice(e,n)}const id=new RegExp("[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+","g"),sd=new RegExp("[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+","g");function co(t,e){return f.isArray(t)?t.map(n=>co(n,e)):od(String(t).replace(e,""))}const ad=t=>co(t,id),ld=t=>co(t,sd);function Ls(t){const e=Object.create(null);return f.forEach(t.toJSON(),(n,r)=>{e[r]=ld(n)}),e}const di=Symbol("internals");function je(t){return t&&String(t).trim().toLowerCase()}function En(t){return t===!1||t==null?t:f.isArray(t)?t.map(En):ad(String(t))}function cd(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(t);)e[r[1]]=r[2];return e}const dd=/^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;function rr(t){let e=0,n=t.length;for(;e<n;){const r=t.charCodeAt(e);if(r!==9&&r!==32)break;e+=1}for(;n>e;){const r=t.charCodeAt(n-1);if(r!==9&&r!==32)break;n-=1}return e===0&&n===t.length?t:t.slice(e,n)}function ud(t){const e=t.length-1;if(e<1||t.charCodeAt(0)!==34||t.charCodeAt(e)!==34)return t;let n="";for(let r=1;r<e;r++){const o=t.charCodeAt(r);if(o===34||o===92&&(r+=1,r>=e))return t;n+=t[r]}return n}function fd(t){const e=Object.create(null),n=String(t);let r=0,o=!1,i=!1;function s(a){const l=rr(n.slice(r,a)),c=l.indexOf("=");if(c<1)return;const d=rr(l.slice(0,c));if(!dd.test(d))return;const u=d.toLowerCase();if(u==="__proto__"||u==="constructor"||u==="prototype")return;const g=rr(l.slice(c+1));e[u]=ud(g)}for(let a=0;a<n.length;a++){const l=n.charCodeAt(a);o?i?i=!1:l===92?i=!0:l===34&&(o=!1):l===34?o=!0:(l===44||l===59)&&(s(a),r=a+1)}return s(n.length),e}const pd=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function or(t,e,n,r,o){if(f.isFunction(r))return r.call(this,e,n);if(o&&(e=n),!!f.isString(e)){if(f.isString(r))return e.indexOf(r)!==-1;if(f.isRegExp(r))return r.test(e)}}function hd(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,r)=>n.toUpperCase()+r)}function gd(t,e){const n=f.toCamelCase(" "+e);["get","set","has"].forEach(r=>{Object.defineProperty(t,r+n,{__proto__:null,value:function(o,i,s){return this[r].call(this,e,o,i,s)},configurable:!0})})}let X=class{constructor(e){e&&this.set(e)}set(e,n,r){const o=this;function i(a,l,c){const d=je(l);if(!d)return;const u=f.findKey(o,d);(!u||o[u]===void 0||c===!0||c===void 0&&o[u]!==!1)&&(o[u||l]=En(a))}const s=(a,l)=>f.forEach(a,(c,d)=>i(c,d,l));if(f.isPlainObject(e)||e instanceof this.constructor)s(e,n);else if(f.isString(e)&&(e=e.trim())&&!pd(e))s(rd(e),n);else if(f.isObject(e)&&f.isSafeIterable(e)){let a=Object.create(null),l,c;for(const d of e){if(!f.isArray(d))throw new TypeError("Object iterator must return a key-value pair");c=d[0],f.hasOwnProp(a,c)?(l=a[c],a[c]=f.isArray(l)?[...l,d[1]]:[l,d[1]]):a[c]=d[1]}s(a,n)}else e!=null&&i(n,e,r);return this}get(e,n){if(e=je(e),e){const r=f.findKey(this,e);if(r){const o=this[r];if(!n)return o;if(n===!0)return cd(o);if(f.isFunction(n))return n.call(this,o,r);if(f.isRegExp(n))return n.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=je(e),e){const r=f.findKey(this,e);return!!(r&&this[r]!==void 0&&(!n||or(this,this[r],r,n)))}return!1}delete(e,n){const r=this;let o=!1;function i(s){if(s=je(s),s){const a=f.findKey(r,s);a&&(!n||or(r,r[a],a,n))&&(delete r[a],o=!0)}}return f.isArray(e)?e.forEach(i):i(e),o}clear(e){const n=Object.keys(this);let r=n.length,o=!1;for(;r--;){const i=n[r];(!e||or(this,this[i],i,e,!0))&&(delete this[i],o=!0)}return o}normalize(e){const n=this,r={};return f.forEach(this,(o,i)=>{const s=f.findKey(r,i);if(s){n[s]=En(o),delete n[i];return}const a=e?hd(i):String(i).trim();a!==i&&delete n[i],n[a]=En(o),r[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return f.forEach(this,(r,o)=>{r!=null&&r!==!1&&(n[o]=e&&f.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}getSetCookie(){const e=this.get("set-cookie");return f.isArray(e)?e:e==null||e===!1?[]:[e]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static parseParameters(e){return fd(e)}static concat(e,...n){const r=new this(e);return n.forEach(o=>r.set(o)),r}static accessor(e){const r=(this[di]=this[di]={accessors:{}}).accessors,o=this.prototype;function i(s){const a=je(s);r[a]||(gd(o,s),r[a]=!0)}return f.isArray(e)?e.forEach(i):i(e),this}};X.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);f.reduceDescriptors(X.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(r){this[n]=r}}});f.freezeMethods(X);const An="[REDACTED ****]";function md(t){if(f.hasOwnProp(t,"toJSON"))return!0;let e=Object.getPrototypeOf(t);for(;e&&e!==Object.prototype;){if(f.hasOwnProp(e,"toJSON"))return!0;e=Object.getPrototypeOf(e)}return!1}function wd(t,e){const n=new Set(e.map(i=>String(i).toLowerCase())),r=[],o=i=>{if(i===null||typeof i!="object"||f.isBuffer(i))return i;if(r.indexOf(i)!==-1)return;i instanceof X&&(i=i.toJSON()),r.push(i);let s;if(f.isArray(i))s=[],i.forEach((a,l)=>{const c=o(a);f.isUndefined(c)||(s[l]=c)});else{if(!f.isPlainObject(i)&&md(i))return r.pop(),i;s=Object.create(null);for(const[a,l]of Object.entries(i)){const c=n.has(a.toLowerCase())?An:o(l);f.isUndefined(c)||(s[a]=c)}}return r.pop(),s};return o(t)}function ui(t){try{return String(t)}catch{return""}}function bd(t){return t.errors.map(n=>{try{return n&&n.message?ui(n.message):ui(n)}catch{return""}}).filter(Boolean).join("; ")||t.name||"AggregateError"}let C=class Bs extends Error{static from(e,n,r,o,i,s){let a=e.message;!a&&f.isArray(e.errors)&&e.errors.length&&(a=bd(e));const l=new Bs(a,n||e.code,r,o,i);return Object.defineProperty(l,"cause",{__proto__:null,value:e,writable:!0,enumerable:!1,configurable:!0}),l.name=e.name,e.status!=null&&l.status==null&&(l.status=e.status),s&&Object.assign(l,s),l}constructor(e,n,r,o,i){super(e),Object.defineProperty(this,"message",{__proto__:null,value:e,enumerable:!0,writable:!0,configurable:!0}),this.name="AxiosError",this.isAxiosError=!0,n&&(this.code=n),r&&(this.config=r),o&&(this.request=o),i&&(this.response=i,this.status=i.status)}toJSON(){const e=this.config,n=e&&f.hasOwnProp(e,"redact")?e.redact:void 0,r=f.isArray(n)&&n.length>0?wd(e,n):f.toJSONObject(e);return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:r,code:this.code,status:this.status}}};C.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";C.ERR_BAD_OPTION="ERR_BAD_OPTION";C.ECONNABORTED="ECONNABORTED";C.ETIMEDOUT="ETIMEDOUT";C.ECONNREFUSED="ECONNREFUSED";C.ERR_NETWORK="ERR_NETWORK";C.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";C.ERR_DEPRECATED="ERR_DEPRECATED";C.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";C.ERR_BAD_REQUEST="ERR_BAD_REQUEST";C.ERR_CANCELED="ERR_CANCELED";C.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";C.ERR_INVALID_URL="ERR_INVALID_URL";C.ERR_FORM_DATA_DEPTH_EXCEEDED="ERR_FORM_DATA_DEPTH_EXCEEDED";const yd=null,Is=100;function Fr(t){return f.isPlainObject(t)||f.isArray(t)}function Ns(t){return f.endsWith(t,"[]")?t.slice(0,-2):t}function ir(t,e,n){return t?t.concat(e).map(function(o,i){return o=Ns(o),!n&&i?"["+o+"]":o}).join(n?".":""):e}function xd(t){return f.isArray(t)&&!t.some(Fr)}const _d=f.toFlatObject(f,{},null,function(e){return/^is[A-Z]/.test(e)});function Un(t,e,n){if(!f.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=f.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(x,_){return!f.isUndefined(_[x])});const r=n.metaTokens,o=n.visitor||w,i=n.dots,s=n.indexes,a=n.Blob||typeof Blob<"u"&&Blob,l=n.maxDepth===void 0?Is:n.maxDepth,c=a&&f.isSpecCompliantForm(e),d=[];if(!f.isFunction(o))throw new TypeError("visitor must be a function");function u(p){if(p===null)return"";if(f.isDate(p))return p.toISOString();if(f.isBoolean(p))return p.toString();if(!c&&f.isBlob(p))throw new C("Blob is not supported. Use a Buffer instead.");if(f.isArrayBuffer(p)||f.isTypedArray(p)){if(c&&typeof a=="function")return new a([p]);throw new C("Blob is not supported. Use a Buffer instead.",C.ERR_NOT_SUPPORT)}return p}function g(p){if(p>l)throw new C("Object is too deeply nested ("+p+" levels). Max depth: "+l,C.ERR_FORM_DATA_DEPTH_EXCEEDED)}function h(p,x){if(l===1/0)return JSON.stringify(p);const _=[];return JSON.stringify(p,function(N,v){if(!f.isObject(v))return v;for(;_.length&&_[_.length-1]!==this;)_.pop();return _.push(v),g(x+_.length-1),v})}function w(p,x,_){let E=p;if(f.isReactNative(e)&&f.isReactNativeBlob(p))return e.append(ir(_,x,i),u(p)),!1;if(p&&!_&&typeof p=="object"){if(f.endsWith(x,"{}"))x=r?x:x.slice(0,-2),p=h(p,1);else if(f.isArray(p)&&xd(p)||(f.isFileList(p)||f.endsWith(x,"[]"))&&(E=f.toArray(p)))return x=Ns(x),E.forEach(function(v,T){!(f.isUndefined(v)||v===null)&&e.append(s===!0?ir([x],T,i):s===null?x:x+"[]",u(v))}),!1}return Fr(p)?!0:(e.append(ir(_,x,i),u(p)),!1)}const m=Object.assign(_d,{defaultVisitor:w,convertValue:u,isVisitable:Fr});function y(p,x,_=0){if(!f.isUndefined(p)){if(g(_),d.indexOf(p)!==-1)throw new Error("Circular reference detected in "+x.join("."));d.push(p),f.forEach(p,function(N,v){(!(f.isUndefined(N)||N===null)&&o.call(e,N,f.isString(v)?v.trim():v,x,m))===!0&&y(N,x?x.concat(v):[v],_+1)}),d.pop()}}if(!f.isObject(t))throw new TypeError("data must be an object");return y(t),e}function fi(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"};return encodeURIComponent(t).replace(/[!'()~]|%20/g,function(r){return e[r]})}function uo(t,e){this._pairs=[],t&&Un(t,this,e)}const Ds=uo.prototype;Ds.append=function(e,n){this._pairs.push([e,n])};Ds.toString=function(e){const n=e?r=>e.call(this,r,fi):fi;return this._pairs.map(function(o){return n(o[0])+"="+n(o[1])},"").join("&")};function vd(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function Ms(t,e,n){if(!e)return t;t=t||"";const r=f.isFunction(n)?{serialize:n}:n,o=f.getSafeProp(r,"encode")||vd,i=f.getSafeProp(r,"serialize");let s;if(i?s=i(e,r):s=f.isURLSearchParams(e)?e.toString():new uo(e,r).toString(o),s){const a=t.indexOf("#");a!==-1&&(t=t.slice(0,a)),t+=(t.indexOf("?")===-1?"?":"&")+s}return t}class pi{constructor(){this.handlers=[]}use(e,n,r){return this.handlers.push({fulfilled:e,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){f.forEach(this.handlers,function(r){r!==null&&e(r)})}}const fo={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0,advertiseZstdAcceptEncoding:!1,validateStatusUndefinedResolves:!0},Ed=typeof URLSearchParams<"u"?URLSearchParams:uo,Cd=typeof FormData<"u"?FormData:null,kd=typeof Blob<"u"?Blob:null,Sd={isBrowser:!0,classes:{URLSearchParams:Ed,FormData:Cd,Blob:kd},protocols:["http","https","file","blob","url","data"]},po=typeof window<"u"&&typeof document<"u",zr=typeof navigator=="object"&&navigator||void 0,Ad=po&&(!zr||["ReactNative","NativeScript","NS"].indexOf(zr.product)<0),Td=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Rd=po&&window.location.href||"http://localhost",Pd=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:po,hasStandardBrowserEnv:Ad,hasStandardBrowserWebWorkerEnv:Td,navigator:zr,origin:Rd},Symbol.toStringTag,{value:"Module"})),Q={...Pd,...Sd};function Od(t,e){return Un(t,new Q.classes.URLSearchParams,{visitor:function(n,r,o,i){return Q.isNode&&f.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)},...e})}const hi=Is;function Fs(t){if(t>hi)throw new C("FormData field is too deeply nested ("+t+" levels). Max depth: "+hi,C.ERR_FORM_DATA_DEPTH_EXCEEDED)}function $d(t){const e=[],n=/[^.[\]]+|\[([^.[\]]*)]/g;let r;for(;(r=n.exec(t))!==null;)Fs(e.length),e.push(r[0]==="[]"?"":r[1]||r[0]);return e}function Ld(t){const e={},n=Object.keys(t);let r;const o=n.length;let i;for(r=0;r<o;r++)i=n[r],e[i]=t[i];return e}function zs(t){function e(n,r,o,i){Fs(i);let s=n[i++];if(s==="__proto__")return!0;const a=Number.isFinite(+s),l=i>=n.length;return s=!s&&f.isArray(o)?o.length:s,l?(f.hasOwnProp(o,s)?o[s]=f.isArray(o[s])?o[s].concat(r):[o[s],r]:o[s]=r,!a):((!f.hasOwnProp(o,s)||!f.isObject(o[s]))&&(o[s]=[]),e(n,r,o[s],i)&&f.isArray(o[s])&&(o[s]=Ld(o[s])),!a)}if(f.isFormData(t)&&f.isFunction(t.entries)){const n={};return f.forEachEntry(t,(r,o)=>{e($d(r),o,n,0)}),n}return null}const we=(t,e)=>t!=null&&f.hasOwnProp(t,e)?t[e]:void 0;function Bd(t,e,n){if(f.isString(t))try{return(e||JSON.parse)(t),f.trim(t)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(t)}const en={transitional:fo,adapter:["xhr","http","fetch"],transformRequest:[function(e,n){const r=n.getContentType()||"",o=r.indexOf("application/json")>-1,i=f.isObject(e);if(i&&f.isHTMLForm(e)&&(e=new FormData(e)),f.isFormData(e))return o?JSON.stringify(zs(e)):e;if(f.isArrayBuffer(e)||f.isBuffer(e)||f.isStream(e)||f.isFile(e)||f.isBlob(e)||f.isReadableStream(e))return e;if(f.isArrayBufferView(e))return e.buffer;if(f.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(i){const l=we(this,"formSerializer");if(r.indexOf("application/x-www-form-urlencoded")>-1)return Od(e,l).toString();if((a=f.isFileList(e))||r.indexOf("multipart/form-data")>-1){const c=we(this,"env"),d=c&&c.FormData;return Un(a?{"files[]":e}:e,d&&new d,l)}}return i||o?(n.setContentType("application/json",!1),Bd(e)):e}],transformResponse:[function(e){const n=we(this,"transitional")||en.transitional,r=n&&n.forcedJSONParsing,o=we(this,"responseType"),i=o==="json";if(f.isResponse(e)||f.isReadableStream(e))return e;if(e&&f.isString(e)&&(r&&!o||i)){const a=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(e,we(this,"parseReviver"))}catch(l){if(a)throw l.name==="SyntaxError"?C.from(l,C.ERR_BAD_RESPONSE,this,null,we(this,"response")):l}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Q.classes.FormData,Blob:Q.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};f.forEach(["delete","get","head","post","put","patch","query"],t=>{en.headers[t]={}});function sr(t,e){const n=this||en,r=e||n,o=X.from(r.headers);let i=r.data;return f.forEach(t,function(a){i=a.call(n,i,o.normalize(),e?e.status:void 0)}),o.normalize(),i}function js(t){return!!(t&&t.__CANCEL__)}let nn=class extends C{constructor(e,n,r){super(e??"canceled",C.ERR_CANCELED,n,r),this.name="CanceledError",this.__CANCEL__=!0}};function Us(t,e,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?t(n):e(new C("Request failed with status code "+n.status,n.status>=400&&n.status<500?C.ERR_BAD_REQUEST:C.ERR_BAD_RESPONSE,n.config,n.request,n))}function Id(t){const e=/^([-+\w]{1,25}):(?:\/\/)?/.exec(t);return e&&e[1]||""}function Nd(t,e){t=t||10;const n=new Array(t),r=new Array(t);let o=0,i=0,s;return e=e!==void 0?e:1e3,function(l){const c=Date.now(),d=r[i];s||(s=c),n[o]=l,r[o]=c;let u=i,g=0;for(;u!==o;)g+=n[u++],u=u%t;if(o=(o+1)%t,o===i&&(i=(i+1)%t),c-s<e)return;const h=d&&c-d;return h?Math.round(g*1e3/h):void 0}}function Dd(t,e){let n=0,r=1e3/e,o,i;const s=(c,d=Date.now())=>{n=d,o=null,i&&(clearTimeout(i),i=null),t(...c)};return[(...c)=>{const d=Date.now(),u=d-n;u>=r?s(c,d):(o=c,i||(i=setTimeout(()=>{i=null,s(o)},r-u)))},()=>o&&s(o)]}const Tn=(t,e,n=3)=>{let r=0;const o=Nd(50,250);return Dd(i=>{if(!i||typeof i.loaded!="number")return;const s=i.loaded,a=i.lengthComputable?i.total:void 0,l=Math.max(0,a!=null?Math.min(s,a):s),c=Math.max(0,l-r),d=o(c);r=Math.max(r,l);const u={loaded:l,total:a,progress:a?l/a:void 0,bytes:c,rate:d||void 0,estimated:d&&a?(a-l)/d:void 0,event:i,lengthComputable:a!=null,[e?"download":"upload"]:!0};t(u)},n)},gi=(t,e)=>{const n=t!=null;return[r=>e[0]({lengthComputable:n,total:t,loaded:r}),e[1]]},mi=(t,e=f.asap)=>(...n)=>e(()=>t(...n)),Md=Q.hasStandardBrowserEnv?((t,e)=>n=>(n=new URL(n,Q.origin),t.protocol===n.protocol&&t.host===n.host&&(e||t.port===n.port)))(new URL(Q.origin),Q.navigator&&/(msie|trident)/i.test(Q.navigator.userAgent)):()=>!0,Fd=Q.hasStandardBrowserEnv?{write(t,e,n,r,o,i,s){if(typeof document>"u")return;const a=[`${t}=${encodeURIComponent(e)}`];f.isNumber(n)&&a.push(`expires=${new Date(n).toUTCString()}`),f.isString(r)&&a.push(`path=${r}`),f.isString(o)&&a.push(`domain=${o}`),i===!0&&a.push("secure"),f.isString(s)&&a.push(`SameSite=${s}`),document.cookie=a.join("; ")},read(t){if(typeof document>"u")return null;const e=document.cookie.split(";");for(let n=0;n<e.length;n++){const r=e[n].replace(/^\s+/,""),o=r.indexOf("=");if(o!==-1&&r.slice(0,o)===t)try{return decodeURIComponent(r.slice(o+1))}catch{return r.slice(o+1)}}return null},remove(t){this.write(t,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function zd(t){return typeof t!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function jd(t,e){if(!e)return t;let n=t.length;for(;n>0&&t.charCodeAt(n-1)===47;)n--;return t.slice(0,n)+"/"+e.replace(/^\/+/,"")}const Ud=/^https?:(?!\/\/)/i,qd=/[\t\n\r]/g;function Hd(t){let e=0;for(;e<t.length&&t.charCodeAt(e)<=32;)e++;return t.slice(e)}function Vd(t){return Hd(t).replace(qd,"")}function Wd(t){return t&&t.replace(/(^|&)([^=&]*=)?[^&]+/g,(e,n,r="")=>`${n}${r}${An}`)}function Kd(t){const e=t.replace(/^(https?:\/{0,2})[^/?#]*@/i,`$1${An}@`),n=e.indexOf("#"),o=(n===-1?e:e.slice(0,n)).replace(/([?&][^=&#]*=)[^&#]*/g,`$1${An}`);return n===-1?o:`${o}#${Wd(e.slice(n+1))}`}function wi(t,e){if(typeof t=="string"){const n=Vd(t);if(Ud.test(n))throw new C(`Invalid URL ${JSON.stringify(Kd(n))}: missing "//" after protocol`,C.ERR_INVALID_URL,e)}}function qs(t,e,n,r){wi(e,r);let o=!zd(e);return t&&(o||n===!1)?(wi(t,r),jd(t,e)):e}const bi=t=>t instanceof X?{...t}:t,Gd=t=>Object.getOwnPropertySymbols&&Object.getOwnPropertyDescriptor?Object.keys(t).concat(Object.getOwnPropertySymbols(t).filter(e=>Object.getOwnPropertyDescriptor(t,e).enumerable)):Object.keys(t);function ie(t,e){t=t||{},e=e||{};const n=Object.create(null);Object.defineProperty(n,"hasOwnProperty",{__proto__:null,value:Object.prototype.hasOwnProperty,enumerable:!1,writable:!0,configurable:!0});function r(d,u,g,h){return f.isPlainObject(d)&&f.isPlainObject(u)?f.merge.call({caseless:h},d,u):f.isPlainObject(u)?f.merge({},u):f.isArray(u)?u.slice():u}function o(d,u,g,h){if(f.isUndefined(u)){if(!f.isUndefined(d))return r(void 0,d,g,h)}else return r(d,u,g,h)}function i(d,u){if(!f.isUndefined(u))return r(void 0,u)}function s(d,u){if(f.isUndefined(u)){if(!f.isUndefined(d))return r(void 0,d)}else return r(void 0,u)}function a(d){const u=f.hasOwnProp(e,"transitional")?e.transitional:void 0;if(!f.isUndefined(u))if(f.isPlainObject(u)){if(f.hasOwnProp(u,d))return u[d]}else return;const g=f.hasOwnProp(t,"transitional")?t.transitional:void 0;if(f.isPlainObject(g)&&f.hasOwnProp(g,d))return g[d]}function l(d,u,g){if(f.hasOwnProp(e,g))return r(d,u);if(f.hasOwnProp(t,g))return r(void 0,d)}const c={url:i,method:i,data:i,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,withXSRFToken:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,allowedSocketPaths:s,responseEncoding:s,validateStatus:l,headers:(d,u,g)=>o(bi(d),bi(u),g,!0)};return f.forEach(Gd({...t,...e}),function(u){if(u==="__proto__"||u==="constructor"||u==="prototype")return;const g=f.hasOwnProp(c,u)?c[u]:o,h=f.hasOwnProp(t,u)?t[u]:void 0,w=f.hasOwnProp(e,u)?e[u]:void 0,m=g(h,w,u);f.isUndefined(m)&&g!==l||(n[u]=m)}),f.hasOwnProp(e,"validateStatus")&&f.isUndefined(e.validateStatus)&&a("validateStatusUndefinedResolves")===!1&&(f.hasOwnProp(t,"validateStatus")?n.validateStatus=r(void 0,t.validateStatus):delete n.validateStatus),n}const Jd=["content-type","content-length"];function Qd(t,e,n){if(n!=="content-only"){t.set(e);return}Object.entries(e||{}).forEach(([r,o])=>{Jd.includes(r.toLowerCase())&&t.set(r,o)})}const Zd=t=>encodeURIComponent(t).replace(/%([0-9A-F]{2})/gi,(e,n)=>String.fromCharCode(parseInt(n,16)));function Hs(t){const e=ie({},t),n=g=>f.hasOwnProp(e,g)?e[g]:void 0,r=n("data");let o=n("withXSRFToken");const i=n("xsrfHeaderName"),s=n("xsrfCookieName");let a=n("headers");const l=n("auth"),c=n("baseURL"),d=n("allowAbsoluteUrls"),u=n("url");if(e.headers=a=X.from(a),e.url=Ms(qs(c,u,d,e),n("params"),n("paramsSerializer")),l){const g=f.getSafeProp(l,"username")||"",h=f.getSafeProp(l,"password")||"";try{a.set("Authorization","Basic "+btoa(g+":"+(h?Zd(h):"")))}catch(w){throw C.from(w,C.ERR_BAD_OPTION_VALUE,t)}}if(f.isFormData(r)&&(Q.hasStandardBrowserEnv||Q.hasStandardBrowserWebWorkerEnv||f.isReactNative(r)?a.setContentType(void 0):f.isFunction(r.getHeaders)&&Qd(a,r.getHeaders(),n("formDataHeaderPolicy"))),Q.hasStandardBrowserEnv&&(f.isFunction(o)&&(o=o(e)),o===!0||o==null&&Md(e.url))){const h=i&&s&&Fd.read(s);h&&a.set(i,h)}return e}const Yd=typeof XMLHttpRequest<"u",Xd=Yd&&function(t){return new Promise(function(n,r){const o=Hs(t);let i=o.data;const s=X.from(o.headers).normalize();let{responseType:a,onUploadProgress:l,onDownloadProgress:c}=o,d,u,g,h,w;function m(){h&&h(),w&&w(),o.cancelToken&&o.cancelToken.unsubscribe(d),o.signal&&o.signal.removeEventListener("abort",d)}let y=new XMLHttpRequest;y.open(o.method.toUpperCase(),o.url,!0),y.timeout=o.timeout;function p(){if(!y)return;const _=X.from("getAllResponseHeaders"in y&&y.getAllResponseHeaders()),N={data:!a||a==="text"||a==="json"?y.responseText:y.response,status:y.status,statusText:y.statusText,headers:_,config:t,request:y};Us(function(T){n(T),m()},function(T){r(T),m()},N),y=null}"onloadend"in y?y.onloadend=p:y.onreadystatechange=function(){!y||y.readyState!==4||y.status===0&&!(y.responseURL&&y.responseURL.startsWith("file:"))||setTimeout(p)},y.onabort=function(){y&&(r(new C("Request aborted",C.ECONNABORTED,t,y)),m(),y=null)},y.onerror=function(E){const N=E&&E.message?E.message:"Network Error",v=new C(N,C.ERR_NETWORK,t,y);v.event=E||null,r(v),m(),y=null},y.ontimeout=function(){let E=o.timeout?"timeout of "+o.timeout+"ms exceeded":"timeout exceeded";const N=o.transitional||fo;o.timeoutErrorMessage&&(E=o.timeoutErrorMessage),r(new C(E,N.clarifyTimeoutError?C.ETIMEDOUT:C.ECONNABORTED,t,y)),m(),y=null},i===void 0&&s.setContentType(null),"setRequestHeader"in y&&f.forEach(Ls(s),function(E,N){y.setRequestHeader(N,E)}),f.isUndefined(o.withCredentials)||(y.withCredentials=!!o.withCredentials),a&&a!=="json"&&(y.responseType=o.responseType),c&&([g,w]=Tn(c,!0),y.addEventListener("progress",g)),l&&y.upload&&([u,h]=Tn(l),y.upload.addEventListener("progress",u),y.upload.addEventListener("loadend",h)),(o.cancelToken||o.signal)&&(d=_=>{y&&(r(!_||_.type?new nn(null,t,y):_),y.abort(),m(),y=null)},o.cancelToken&&o.cancelToken.subscribe(d),o.signal&&(o.signal.aborted?d():o.signal.addEventListener("abort",d)));const x=Id(o.url);if(x&&!Q.protocols.includes(x)){r(new C("Unsupported protocol "+x+":",C.ERR_BAD_REQUEST,t)),m();return}y.send(i||null)})},tu=(t,e)=>{if(t=t?t.filter(Boolean):[],!e&&!t.length)return;const n=new AbortController;let r=!1;const o=function(l){if(!r){r=!0,s();const c=l instanceof Error?l:this.reason;n.abort(c instanceof C?c:new nn(c instanceof Error?c.message:c))}};let i=e&&setTimeout(()=>{i=null,o(new C(`timeout of ${e}ms exceeded`,C.ETIMEDOUT))},e);const s=()=>{t&&(i&&clearTimeout(i),i=null,t.forEach(l=>{l.unsubscribe?l.unsubscribe(o):l.removeEventListener("abort",o)}),t=null)};t.forEach(l=>{if(!r){if(l.aborted){o.call(l);return}l.addEventListener("abort",o,{once:!0})}});const{signal:a}=n;return a.unsubscribe=()=>f.asap(s),a},eu=function*(t,e){let n=t.byteLength;if(n<e){yield t;return}let r=0,o;for(;r<n;)o=r+e,yield t.slice(r,o),r=o},nu=async function*(t,e){for await(const n of ru(t))yield*eu(n,e)},ru=async function*(t){if(t[Symbol.asyncIterator]){yield*t;return}const e=t.getReader();try{for(;;){const{done:n,value:r}=await e.read();if(n)break;yield r}}finally{await e.cancel()}},yi=(t,e,n,r)=>{const o=nu(t,e);let i=0,s,a=l=>{s||(s=!0,r&&r(l))};return new ReadableStream({async pull(l){try{const{done:c,value:d}=await o.next();if(c){a(),l.close();return}let u=d.byteLength;if(n){let g=i+=u;n(g)}l.enqueue(new Uint8Array(d))}catch(c){throw a(c),c}},cancel(l){return a(l),o.return()}},{highWaterMark:2})},xi=t=>t>=48&&t<=57||t>=65&&t<=70||t>=97&&t<=102,Vs=(t,e,n)=>e+2<n&&xi(t.charCodeAt(e+1))&&xi(t.charCodeAt(e+2)),_i=t=>t<=57?t-48:(t&223)-55,ou=t=>t>=65&&t<=90||t>=97&&t<=122||t>=48&&t<=57||t===43||t===47||t===45||t===95,iu=t=>t===9||t===10||t===12||t===13||t===32,su=t=>{const e=Math.floor(t/4),n=t%4;return e*3+(n===2?1:n===3?2:0)},au=t=>{const e=t.length;let n=0;return e>0&&t.charCodeAt(e-1)===61&&(n++,e>1&&t.charCodeAt(e-2)===61&&n++),Math.floor((e-n)*3/4)},lu=t=>{const e=t.length;let n=0,r=0,o=!1;for(let i=0;i<e;i++){let s=t.charCodeAt(i);if(s===37&&Vs(t,i,e)&&(s=_i(t.charCodeAt(i+1))*16+_i(t.charCodeAt(i+2)),i+=2),!iu(s)){if(s===61){r++;continue}if(!ou(s)||r>0){o=!0;continue}n++}}return o||r>2||r>0&&(n+r)%4!==0||n%4===1?au(t):su(n)},cu=(t,e)=>{if(!t||typeof t!="string"||!t.startsWith("data:"))return 0;const n=t.indexOf(",");if(n<0)return 0;const r=t.slice(5,n),o=t.slice(n+1);if(/;base64/i.test(r))return e(o);let s=0;for(let a=0,l=o.length;a<l;a++){const c=o.charCodeAt(a);if(c===37&&Vs(o,a,l))s+=1,a+=2;else if(c<128)s+=1;else if(c<2048)s+=2;else if(c>=55296&&c<=56319&&a+1<l){const d=o.charCodeAt(a+1);d>=56320&&d<=57343?(s+=4,a++):s+=3}else s+=3}return s};function du(t){const e=typeof t=="string"?t.indexOf("#"):-1;return cu(e===-1?t:t.slice(0,e),lu)}const ho="1.19.0",vi=64*1024,{isFunction:pn}=f,uu=t=>encodeURIComponent(t).replace(/%([0-9A-F]{2})/gi,(e,n)=>String.fromCharCode(parseInt(n,16))),Ei=t=>{if(!f.isString(t))return t;try{return decodeURIComponent(t)}catch{return t}},Ci=(t,...e)=>{try{return!!t(...e)}catch{return!1}},fu=t=>{const e=t.indexOf("://");let n=t;return e!==-1&&(n=n.slice(e+3)),n.includes("@")||n.includes(":")},pu=t=>{const e=f.global!==void 0&&f.global!==null?f.global:globalThis,{ReadableStream:n,TextEncoder:r}=e;t=f.merge.call({skipUndefined:!0},{Request:e.Request,Response:e.Response},t);const{fetch:o,Request:i,Response:s}=t,a=o?pn(o):typeof fetch=="function",l=pn(i),c=pn(s);if(!a)return!1;const d=a&&pn(n),u=a&&(typeof r=="function"?(p=>x=>p.encode(x))(new r):async p=>new Uint8Array(await new i(p).arrayBuffer())),g=l&&d&&Ci(()=>{let p=!1;const x=new i(Q.origin,{body:new n,method:"POST",get duplex(){return p=!0,"half"}}),_=x.headers.has("Content-Type");return x.body!=null&&x.body.cancel(),p&&!_}),h=c&&d&&Ci(()=>f.isReadableStream(new s("").body)),w={stream:h&&(p=>p.body)};a&&["text","arrayBuffer","blob","formData","stream"].forEach(p=>{!w[p]&&(w[p]=(x,_)=>{let E=x&&x[p];if(E)return E.call(x);throw new C(`Response type '${p}' is not supported`,C.ERR_NOT_SUPPORT,_)})});const m=async p=>{if(p==null)return 0;if(f.isBlob(p))return p.size;if(f.isSpecCompliantForm(p))return(await new i(Q.origin,{method:"POST",body:p}).arrayBuffer()).byteLength;if(f.isArrayBufferView(p)||f.isArrayBuffer(p))return p.byteLength;if(f.isURLSearchParams(p)&&(p=p+""),f.isString(p))return(await u(p)).byteLength},y=async(p,x)=>{const _=f.toFiniteNumber(p.getContentLength());return _??m(x)};return async p=>{let{url:x,method:_,data:E,signal:N,cancelToken:v,timeout:T,onDownloadProgress:P,onUploadProgress:k,responseType:R,headers:S,withCredentials:O="same-origin",fetchOptions:$,maxContentLength:L,maxBodyLength:at}=Hs(p);const mt=f.isNumber(L)&&L>-1,Me=f.isNumber(at)&&at>-1,un=D=>f.hasOwnProp(p,D)?p[D]:void 0;let fn=o||fetch;R=R?(R+"").toLowerCase():"text";let pt=tu([N,v&&v.toAbortSignal()],T),U=null;const yt=pt&&pt.unsubscribe&&(()=>{pt.unsubscribe()});let xt,Vt=null;const me=()=>new C("Request body larger than maxBodyLength limit",C.ERR_BAD_REQUEST,p,U);try{let D;const q=un("auth");if(q){const B=f.getSafeProp(q,"username")||"",lt=f.getSafeProp(q,"password")||"";D={username:B,password:lt}}if(fu(x)){const B=new URL(x,Q.origin);if(!D&&(B.username||B.password)){const lt=Ei(B.username),It=Ei(B.password);D={username:lt,password:It}}(B.username||B.password)&&(B.username="",B.password="",x=B.href)}if(D&&(S.delete("authorization"),S.set("Authorization","Basic "+btoa(uu((D.username||"")+":"+(D.password||""))))),mt&&typeof x=="string"&&x.startsWith("data:")&&du(x)>L)throw new C("maxContentLength size of "+L+" exceeded",C.ERR_BAD_RESPONSE,p,U);if(Me&&_!=="get"&&_!=="head"){const B=await m(E);if(typeof B=="number"&&isFinite(B)&&(xt=B,B>at))throw me()}const ot=Me&&(f.isReadableStream(E)||f.isStream(E)),St=(B,lt,It)=>yi(B,vi,Wt=>{if(Me&&Wt>at)throw Vt=me();lt&&lt(Wt)},It);if(g&&_!=="get"&&_!=="head"&&(k||ot)){if(xt=xt??await y(S,E),xt!==0||ot){let B=new i(x,{method:"POST",body:E,duplex:"half"}),lt;if(f.isFormData(E)&&(lt=B.headers.get("content-type"))&&S.setContentType(lt),B.body){const[It,Wt]=k&&gi(xt,Tn(mi(k)))||[];E=St(B.body,It,Wt)}}}else if(ot&&!l&&d&&_!=="get"&&_!=="head")E=St(E);else if(ot&&l&&!g&&_!=="get"&&_!=="head")throw new C("Stream request bodies are not supported by the current fetch implementation",C.ERR_NOT_SUPPORT,p,U);f.isString(O)||(O=O?"include":"omit");const Fe=l&&"credentials"in i.prototype;if(f.isFormData(E)){const B=S.getContentType();B&&/^multipart\/form-data/i.test(B)&&!/boundary=/i.test(B)&&S.delete("content-type")}S.set("User-Agent","axios/"+ho,!1);const oi={...$,signal:pt,method:_.toUpperCase(),headers:Ls(S.normalize()),body:E,duplex:"half",credentials:Fe?O:void 0};U=l&&new i(x,oi);let At=await(l?fn(U,$):fn(x,oi));const ii=X.from(At.headers);if(mt){const B=f.toFiniteNumber(ii.getContentLength());if(B!=null&&B>L)throw new C("maxContentLength size of "+L+" exceeded",C.ERR_BAD_RESPONSE,p,U)}const nr=h&&(R==="stream"||R==="response");if(h&&At.body&&(P||mt||nr&&yt)){const B={};["status","statusText","headers"].forEach(ze=>{B[ze]=At[ze]});const lt=f.toFiniteNumber(ii.getContentLength()),[It,Wt]=P&&gi(lt,Tn(mi(P),!0))||[];let si=0;const ac=ze=>{if(mt&&(si=ze,si>L))throw new C("maxContentLength size of "+L+" exceeded",C.ERR_BAD_RESPONSE,p,U);It&&It(ze)};At=new s(yi(At.body,vi,ac,()=>{Wt&&Wt(),yt&&yt()}),B)}R=R||"text";let Tt=await w[f.findKey(w,R)||"text"](At,p);if(mt&&!h&&!nr){let B;if(Tt!=null&&(typeof Tt.byteLength=="number"?B=Tt.byteLength:typeof Tt.size=="number"?B=Tt.size:typeof Tt=="string"&&(B=typeof r=="function"?new r().encode(Tt).byteLength:Tt.length)),typeof B=="number"&&B>L)throw new C("maxContentLength size of "+L+" exceeded",C.ERR_BAD_RESPONSE,p,U)}return!nr&&yt&&yt(),await new Promise((B,lt)=>{Us(B,lt,{data:Tt,headers:X.from(At.headers),status:At.status,statusText:At.statusText,config:p,request:U})})}catch(D){if(yt&&yt(),pt&&pt.aborted&&pt.reason instanceof C){const q=pt.reason;throw q.config=p,U&&(q.request=U),D!==q&&Object.defineProperty(q,"cause",{__proto__:null,value:D,writable:!0,enumerable:!1,configurable:!0}),q}if(Vt)throw U&&!Vt.request&&(Vt.request=U),Vt;if(D instanceof C)throw U&&!D.request&&(D.request=U),D;if(D&&D.name==="TypeError"&&/Load failed|fetch/i.test(D.message)){const q=new C("Network Error",C.ERR_NETWORK,p,U,D&&D.response);throw Object.defineProperty(q,"cause",{__proto__:null,value:D.cause||D,writable:!0,enumerable:!1,configurable:!0}),q}throw C.from(D,D&&D.code,p,U,D&&D.response)}}},hu=new Map,Ws=t=>{let e=t&&t.env||{};const{fetch:n,Request:r,Response:o}=e,i=[r,o,n];let s=i.length,a=s,l,c,d=hu;for(;a--;)l=i[a],c=d.get(l),c===void 0&&d.set(l,c=a?new Map:pu(e)),d=c;return c};Ws();const go={http:yd,xhr:Xd,fetch:{get:Ws}};f.forEach(go,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{__proto__:null,value:e})}catch{}Object.defineProperty(t,"adapterName",{__proto__:null,value:e})}});const ki=t=>`- ${t}`,gu=t=>f.isFunction(t)||t===null||t===!1;function mu(t,e){t=f.isArray(t)?t:[t];const{length:n}=t;let r,o;const i={};for(let s=0;s<n;s++){r=t[s];let a;if(o=r,!gu(r)&&(o=go[(a=String(r)).toLowerCase()],o===void 0))throw new C(`Unknown adapter '${a}'`);if(o&&(f.isFunction(o)||(o=o.get(e))))break;i[a||"#"+s]=o}if(!o){const s=Object.entries(i).map(([l,c])=>`adapter ${l} `+(c===!1?"is not supported by the environment":"is not available in the build"));let a=n?s.length>1?`since :
`+s.map(ki).join(`
`):" "+ki(s[0]):"as no adapter specified";throw new C("There is no suitable adapter to dispatch the request "+a,C.ERR_NOT_SUPPORT)}return o}const Ks={getAdapter:mu,adapters:go};function ar(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new nn(null,t)}function lr(t){return ar(t),t.headers=X.from(t.headers),t.data=sr.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),Ks.getAdapter(t.adapter||en.adapter,t)(t).then(function(r){ar(t),t.response=r;try{r.data=sr.call(t,t.transformResponse,r)}finally{delete t.response}return r.headers=X.from(r.headers),r},function(r){if(!js(r)&&(ar(t),r&&r.response)){t.response=r.response;try{r.response.data=sr.call(t,t.transformResponse,r.response)}finally{delete t.response}r.response.headers=X.from(r.response.headers)}return Promise.reject(r)})}const qn={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{qn[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}});const Si={};qn.transitional=function(e,n,r){function o(i,s){return"[Axios v"+ho+"] Transitional option '"+i+"'"+s+(r?". "+r:"")}return(i,s,a)=>{if(e===!1)throw new C(o(s," has been removed"+(n?" in "+n:"")),C.ERR_DEPRECATED);return n&&!Si[s]&&(Si[s]=!0,console.warn(o(s," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(i,s,a):!0}};qn.spelling=function(e){return(n,r)=>(console.warn(`${r} is likely a misspelling of ${e}`),!0)};function wu(t,e,n){if(typeof t!="object"||t===null)throw new C("options must be an object",C.ERR_BAD_OPTION_VALUE);const r=Object.keys(t);let o=r.length;for(;o-- >0;){const i=r[o],s=Object.prototype.hasOwnProperty.call(e,i)?e[i]:void 0;if(s){const a=t[i],l=a===void 0||s(a,i,t);if(l!==!0)throw new C("option "+i+" must be "+l,C.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new C("Unknown option "+i,C.ERR_BAD_OPTION)}}const Cn={assertOptions:wu,validators:qn},Z=Cn.validators;let Zt=class{constructor(e){this.defaults=e||{},this.interceptors={request:new pi,response:new pi}}async request(e,n){try{return await this._request(e,n)}catch(r){if(r instanceof Error){let o={};Error.captureStackTrace?Error.captureStackTrace(o):o=new Error;const i=(()=>{if(!o.stack)return"";const s=o.stack.indexOf(`
`);return s===-1?"":o.stack.slice(s+1)})();try{if(!r.stack)r.stack=i;else if(i){const s=i.indexOf(`
`),a=s===-1?-1:i.indexOf(`
`,s+1),l=a===-1?"":i.slice(a+1);String(r.stack).endsWith(l)||(r.stack+=`
`+i)}}catch{}}throw r}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=ie(this.defaults,n);const{transitional:r,paramsSerializer:o,headers:i}=n;r!==void 0&&Cn.assertOptions(r,{silentJSONParsing:Z.transitional(Z.boolean),forcedJSONParsing:Z.transitional(Z.boolean),clarifyTimeoutError:Z.transitional(Z.boolean),legacyInterceptorReqResOrdering:Z.transitional(Z.boolean),advertiseZstdAcceptEncoding:Z.transitional(Z.boolean),validateStatusUndefinedResolves:Z.transitional(Z.boolean)},!1),o!=null&&(f.isFunction(o)?n.paramsSerializer={serialize:o}:Cn.assertOptions(o,{encode:Z.function,serialize:Z.function},!0)),n.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),Cn.assertOptions(n,{baseUrl:Z.spelling("baseURL"),withXsrfToken:Z.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let s=i&&f.merge(i.common,i[n.method]);i&&f.forEach(["delete","get","head","post","put","patch","query","common"],w=>{delete i[w]}),n.headers=X.concat(s,i);const a=[];let l=!0;this.interceptors.request.forEach(function(m){if(typeof m.runWhen=="function"&&m.runWhen(n)===!1)return;l=l&&m.synchronous;const y=n.transitional||fo;y&&y.legacyInterceptorReqResOrdering?a.unshift(m.fulfilled,m.rejected):a.push(m.fulfilled,m.rejected)});const c=[];this.interceptors.response.forEach(function(m){c.push(m.fulfilled,m.rejected)});let d,u=0,g;if(!l){const w=[lr.bind(this),void 0];for(w.unshift(...a),w.push(...c),g=w.length,d=Promise.resolve(n);u<g;)d=d.then(w[u++],w[u++]);return d}g=a.length;let h=n;for(;u<g;){const w=a[u++],m=a[u++];try{h=w?w(h):h}catch(y){if(!m){d=Promise.reject(y);break}try{const p=m.call(this,y);f.isThenable(p)&&(d=Promise.resolve(p).then(()=>lr.call(this,h)))}catch(p){d=Promise.reject(p)}break}}if(!d)try{d=lr.call(this,h)}catch(w){d=Promise.reject(w)}for(u=0,g=c.length;u<g;)d=d.then(c[u++],c[u++]);return d}getUri(e){e=ie(this.defaults,e);const n=qs(e.baseURL,e.url,e.allowAbsoluteUrls,e);return Ms(n,e.params,e.paramsSerializer)}};f.forEach(["delete","get","head","options"],function(e){Zt.prototype[e]=function(n,r){return this.request(ie(r||{},{method:e,url:n,data:r&&f.hasOwnProp(r,"data")?r.data:void 0}))}});f.forEach(["post","put","patch","query"],function(e){function n(r){return function(i,s,a){return this.request(ie(a||{},{method:e,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:s}))}}Zt.prototype[e]=n(),e!=="query"&&(Zt.prototype[e+"Form"]=n(!0))});let bu=class Gs{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(o=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](o);r._listeners=null}),this.promise.then=o=>{let i;const s=new Promise(a=>{r.subscribe(a),i=a}).then(o);return s.cancel=function(){r.unsubscribe(i)},s},e(function(i,s,a){r.reason||(r.reason=new nn(i,s,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const e=new AbortController,n=r=>{e.abort(r)};return this.subscribe(n),e.signal.unsubscribe=()=>this.unsubscribe(n),e.signal}static source(){let e;return{token:new Gs(function(o){e=o}),cancel:e}}};function yu(t){return function(n){return t.apply(null,n)}}function xu(t){return f.isObject(t)&&t.isAxiosError===!0}const jr={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerReturnsAnUnknownError:520,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(jr).forEach(([t,e])=>{jr[e]=t});function Js(t){const e=new Zt(t),n=Cs(Zt.prototype.request,e);return f.extend(n,Zt.prototype,e,{allOwnKeys:!0}),f.extend(n,e,null,{allOwnKeys:!0}),n.create=function(o){return Js(ie(t,o))},n}const W=Js(en);W.Axios=Zt;W.CanceledError=nn;W.CancelToken=bu;W.isCancel=js;W.VERSION=ho;W.toFormData=Un;W.AxiosError=C;W.Cancel=W.CanceledError;W.all=function(e){return Promise.all(e)};W.spread=yu;W.isAxiosError=xu;W.mergeConfig=ie;W.AxiosHeaders=X;W.formToJSON=t=>zs(f.isHTMLForm(t)?new FormData(t):t);W.getAdapter=Ks.getAdapter;W.HttpStatusCode=jr;W.default=W;const{Axios:hw,AxiosError:gw,CanceledError:mw,isCancel:ww,CancelToken:bw,VERSION:yw,all:xw,Cancel:_w,isAxiosError:vw,spread:Ew,toFormData:Cw,AxiosHeaders:kw,HttpStatusCode:Sw,formToJSON:Aw,getAdapter:Tw,mergeConfig:Rw,create:Pw}=W;window.axios=W;window.axios.defaults.headers.common["X-Requested-With"]="XMLHttpRequest";var Ur=!1,qr=!1,Yt=[],Hr=-1,mo=!1;function _u(t){Cu(t)}function vu(){mo=!0}function Eu(){mo=!1,Qs()}function Cu(t){Yt.includes(t)||Yt.push(t),Qs()}function ku(t){let e=Yt.indexOf(t);e!==-1&&e>Hr&&Yt.splice(e,1)}function Qs(){if(!qr&&!Ur){if(mo)return;Ur=!0,queueMicrotask(Su)}}function Su(){Ur=!1,qr=!0;for(let t=0;t<Yt.length;t++)Yt[t](),Hr=t;Yt.length=0,Hr=-1,qr=!1}var Re,ue,Pe,Zs,Vr=!0;function Au(t){Vr=!1,t(),Vr=!0}function Tu(t){Re=t.reactive,Pe=t.release,ue=e=>t.effect(e,{scheduler:n=>{Vr?_u(n):n()}}),Zs=t.raw}function Ai(t){ue=t}function Ru(t){let e=()=>{};return[r=>{let o=ue(r);return t._x_effects||(t._x_effects=new Set,t._x_runEffects=()=>{t._x_effects.forEach(i=>i())}),t._x_effects.add(o),e=()=>{o!==void 0&&(t._x_effects.delete(o),Pe(o))},o},()=>{e()}]}function Ys(t,e){let n=!0,r,o,i=ue(()=>{let s=t(),a=JSON.stringify(s);if(!n&&(typeof s=="object"||s!==r)){let l=typeof r=="object"?JSON.parse(o):r;queueMicrotask(()=>{e(s,l)})}r=s,o=a,n=!1});return()=>Pe(i)}async function Pu(t){vu();try{await t(),await Promise.resolve()}finally{Eu()}}var Xs=[],ta=[],ea=[];function Ou(t){ea.push(t)}function wo(t,e){typeof e=="function"?(t._x_cleanups||(t._x_cleanups=[]),t._x_cleanups.push(e)):(e=t,ta.push(e))}function na(t){Xs.push(t)}function ra(t,e,n){t._x_attributeCleanups||(t._x_attributeCleanups={}),t._x_attributeCleanups[e]||(t._x_attributeCleanups[e]=[]),t._x_attributeCleanups[e].push(n)}function oa(t,e){t._x_attributeCleanups&&Object.entries(t._x_attributeCleanups).forEach(([n,r])=>{(e===void 0||e.includes(n))&&(r.forEach(o=>o()),delete t._x_attributeCleanups[n])})}function $u(t){for(t._x_effects?.forEach(ku);t._x_cleanups?.length;)t._x_cleanups.pop()()}var bo=new MutationObserver(vo),yo=!1;function xo(){bo.observe(document,{subtree:!0,childList:!0,attributes:!0,attributeOldValue:!0}),yo=!0}function ia(){Lu(),bo.disconnect(),yo=!1}var Ue=[];function Lu(){let t=bo.takeRecords();Ue.push(()=>t.length>0&&vo(t));let e=Ue.length;queueMicrotask(()=>{if(Ue.length===e)for(;Ue.length>0;)Ue.shift()()})}function V(t){if(!yo)return t();ia();let e=t();return xo(),e}var _o=!1,Rn=[];function Bu(){_o=!0}function Iu(){_o=!1,vo(Rn),Rn=[]}function vo(t){if(_o){Rn=Rn.concat(t);return}let e=[],n=new Set,r=new Map,o=new Map;for(let i=0;i<t.length;i++)if(!t[i].target._x_ignoreMutationObserver&&(t[i].type==="childList"&&(t[i].removedNodes.forEach(s=>{s.nodeType===1&&s._x_marker&&n.add(s)}),t[i].addedNodes.forEach(s=>{if(s.nodeType===1){if(n.has(s)){n.delete(s);return}s._x_marker||e.push(s)}})),t[i].type==="attributes")){let s=t[i].target,a=t[i].attributeName,l=t[i].oldValue,c=()=>{r.has(s)||r.set(s,[]),r.get(s).push({name:a,value:s.getAttribute(a)})},d=()=>{o.has(s)||o.set(s,[]),o.get(s).push(a)};s.hasAttribute(a)&&l===null?c():s.hasAttribute(a)?(d(),c()):d()}o.forEach((i,s)=>{oa(s,i)}),r.forEach((i,s)=>{Xs.forEach(a=>a(s,i))});for(let i of n)e.some(s=>s.contains(i))||ta.forEach(s=>s(i));for(let i of e)i.isConnected&&ea.forEach(s=>s(i));e=null,n=null,r=null,o=null}function sa(t){return ae(se(t))}function rn(t,e,n){return t._x_dataStack=[e,...se(n||t)],()=>{t._x_dataStack=t._x_dataStack.filter(r=>r!==e)}}function se(t){return t._x_dataStack?t._x_dataStack:typeof ShadowRoot=="function"&&t instanceof ShadowRoot?se(t.host):t.parentNode?se(t.parentNode):[]}function ae(t){return new Proxy({objects:t},Nu)}function aa(t,e){return t===null||t===Object.prototype?null:Object.prototype.hasOwnProperty.call(t,e)?t:aa(Object.getPrototypeOf(t),e)}var Nu={ownKeys({objects:t}){return Array.from(new Set(t.flatMap(e=>Object.keys(e))))},has({objects:t},e){return e==Symbol.unscopables?!1:t.some(n=>Object.prototype.hasOwnProperty.call(n,e)||Reflect.has(n,e))},get({objects:t},e,n){return e=="toJSON"?Du:Reflect.get(t.find(r=>Reflect.has(r,e))||{},e,n)},set({objects:t},e,n,r){let o;for(const s of t)if(o=aa(s,e),o)break;o||(o=t[t.length-1]);const i=Object.getOwnPropertyDescriptor(o,e);return i?.set&&i?.get?i.set.call(r,n)||!0:Reflect.set(o,e,n)}};function Du(){return Reflect.ownKeys(this).reduce((e,n)=>(e[n]=Reflect.get(this,n),e),{})}function Eo(t,e=()=>{}){let n=o=>typeof o=="object"&&!Array.isArray(o)&&o!==null,r=(o,i="")=>{Object.entries(Object.getOwnPropertyDescriptors(o)).forEach(([s,{value:a,enumerable:l}])=>{if(l===!1||a===void 0||typeof a=="object"&&a!==null&&a.__v_skip)return;let c=i===""?s:`${i}.${s}`;typeof a=="object"&&a!==null&&a._x_interceptor?o[s]=a.initialize(t,c,s,e):n(a)&&a!==o&&!(a instanceof Element)&&r(a,c)})};return r(t)}function la(t,e=()=>{}){let n={initialValue:void 0,_x_interceptor:!0,initialize(r,o,i,s){return t(this.initialValue,()=>Mu(r,o),a=>Wr(r,o,a),o,i,s)}};return e(n),r=>{if(typeof r=="object"&&r!==null&&r._x_interceptor){let o=n.initialize.bind(n);n.initialize=(i,s,a,l)=>{let c=r.initialize(i,s,a,l);return n.initialValue=c,o(i,s,a,l)}}else n.initialValue=r;return n}}function Mu(t,e){return e.split(".").reduce((n,r)=>n[r],t)}function Wr(t,e,n){if(typeof e=="string"&&(e=e.split(".")),e.length===1)t[e[0]]=n;else{if(e.length===0)throw error;return t[e[0]]||(t[e[0]]={}),Wr(t[e[0]],e.slice(1),n)}}var ca={};function bt(t,e){ca[t]=e}function Qe(t,e){let n=Fu(e);return Object.entries(ca).forEach(([r,o])=>{Object.defineProperty(t,`$${r}`,{get(){return o(e,n)},enumerable:!1})}),t}function Fu(t){let[e,n]=ma(t),r={interceptor:la,...e};return wo(t,n),r}function zu(t,e,n,...r){try{return n(...r)}catch(o){Ze(o,t,e)}}function Ze(...t){return da(...t)}var da=Uu;function ju(t){da=t}function Uu(t,e,n=void 0){t=Object.assign(t??{message:"No error message given."},{el:e,expression:n}),console.warn(`Alpine Expression Error: ${t.message}

${n?'Expression: "'+n+`"

`:""}`,e),setTimeout(()=>{throw t},0)}var _e=!0;function ua(t){let e=_e;_e=!1;let n=t();return _e=e,n}function Xt(t,e,n={}){let r;return et(t,e)(o=>r=o,n),r}function et(...t){return fa(...t)}var fa=()=>{};function qu(t){fa=t}var pa;function Hu(t){pa=t}function Vu(t,e){let n={};Qe(n,t);let r=[n,...se(t)],o=typeof e=="function"?Wu(r,e):Gu(r,e,t);return zu.bind(null,t,e,o)}function Wu(t,e){return(n=()=>{},{scope:r={},params:o=[],context:i}={})=>{if(!_e){Ye(n,e,ae([r,...t]),o);return}let s=e.apply(ae([r,...t]),o);Ye(n,s)}}var cr={};function Ku(t,e){if(cr[t])return cr[t];let n=Object.getPrototypeOf(async function(){}).constructor,r=/^[\n\s]*if.*\(.*\)/.test(t.trim())||/^(let|const)\s/.test(t.trim())?`(async()=>{ ${t} })()`:t,i=(()=>{try{let s=new n(["__self","scope"],`with (scope) { __self.result = ${r} }; __self.finished = true; return __self.result;`);return Object.defineProperty(s,"name",{value:`[Alpine] ${t}`}),s}catch(s){return Ze(s,e,t),Promise.resolve()}})();return cr[t]=i,i}function Gu(t,e,n){let r=Ku(e,n);return(o=()=>{},{scope:i={},params:s=[],context:a}={})=>{r.result=void 0,r.finished=!1;let l=ae([i,...t]);if(typeof r=="function"){let c=r.call(a,r,l).catch(d=>Ze(d,n,e));r.finished?(Ye(o,r.result,l,s,n),r.result=void 0):c.then(d=>{Ye(o,d,l,s,n)}).catch(d=>Ze(d,n,e)).finally(()=>r.result=void 0)}}}function Ye(t,e,n,r,o){if(_e&&typeof e=="function"){let i=e.apply(n,r);i instanceof Promise?i.then(s=>Ye(t,s,n,r)).catch(s=>Ze(s,o,e)):t(i)}else typeof e=="object"&&e instanceof Promise?e.then(i=>t(i)):t(e)}function Ju(...t){return pa(...t)}function Qu(t,e,n={}){let r={};Qe(r,t);let o=[r,...se(t)],i=ae([n.scope??{},...o]),s=n.params??[];if(e.includes("await")){let a=Object.getPrototypeOf(async function(){}).constructor,l=/^[\n\s]*if.*\(.*\)/.test(e.trim())||/^(let|const)\s/.test(e.trim())?`(async()=>{ ${e} })()`:e;return new a(["scope"],`with (scope) { let __result = ${l}; return __result }`).call(n.context,i)}else{let a=/^[\n\s]*if.*\(.*\)/.test(e.trim())||/^(let|const)\s/.test(e.trim())?`(()=>{ ${e} })()`:e,c=new Function(["scope"],`with (scope) { let __result = ${a}; return __result }`).call(n.context,i);return typeof c=="function"&&_e?c.apply(i,s):c}}var Co="x-";function Oe(t=""){return Co+t}function Zu(t){Co=t}var Pn={};function G(t,e){return Pn[t]=e,{before(n){if(!Pn[n]){console.warn(String.raw`Cannot find directive \`${n}\`. \`${t}\` will use the default order of execution`);return}const r=Qt.indexOf(n);Qt.splice(r>=0?r:Qt.indexOf("DEFAULT"),0,t)}}}function Yu(t){return Object.keys(Pn).includes(t)}function ko(t,e,n){if(e=Array.from(e),t._x_virtualDirectives){let i=Object.entries(t._x_virtualDirectives).map(([a,l])=>({name:a,value:l})),s=ha(i);i=i.map(a=>s.find(l=>l.name===a.name)?{name:`x-bind:${a.name}`,value:`"${a.value}"`}:a),e=e.concat(i)}let r={};return e.map(ya((i,s)=>r[i]=s)).filter(_a).map(ef(r,n)).sort(nf).map(i=>tf(t,i))}function ha(t){return Array.from(t).map(ya()).filter(e=>!_a(e))}var Kr=!1,We=new Map,ga=Symbol();function Xu(t){Kr=!0;let e=Symbol();ga=e,We.set(e,[]);let n=()=>{for(;We.get(e).length;)We.get(e).shift()();We.delete(e)},r=()=>{Kr=!1,n()};t(n),r()}function ma(t){let e=[],n=a=>e.push(a),[r,o]=Ru(t);return e.push(o),[{Alpine:Le,effect:r,cleanup:n,evaluateLater:et.bind(et,t),evaluate:Xt.bind(Xt,t)},()=>e.forEach(a=>a())]}function tf(t,e){let n=()=>{},r=Pn[e.type]||n,[o,i]=ma(t);ra(t,e.original,i);let s=()=>{t._x_ignore||t._x_ignoreSelf||(r.inline&&r.inline(t,e,o),r=r.bind(r,t,e,o),Kr?We.get(ga).push(r):r())};return s.runCleanups=i,s}var wa=(t,e)=>({name:n,value:r})=>(n.startsWith(t)&&(n=n.replace(t,e)),{name:n,value:r}),ba=t=>t;function ya(t=()=>{}){return({name:e,value:n})=>{let{name:r,value:o}=xa.reduce((i,s)=>s(i),{name:e,value:n});return r!==e&&t(r,e),{name:r,value:o}}}var xa=[];function So(t){xa.push(t)}function _a({name:t}){return va().test(t)}var va=()=>new RegExp(`^${Co}([^:^.]+)\\b`);function ef(t,e){return({name:n,value:r})=>{n===r&&(r="");let o=n.match(va()),i=n.match(/:([a-zA-Z0-9\-_:]+)/),s=n.match(/\.[^.\]]+(?=[^\]]*$)/g)||[],a=e||t[n]||n;return{type:o?o[1]:null,value:i?i[1]:null,modifiers:s.map(l=>l.replace(".","")),expression:r,original:a}}}var Gr="DEFAULT",Qt=["ignore","ref","id","data","anchor","bind","init","for","model","modelable","transition","show","if",Gr,"teleport"];function nf(t,e){let n=Qt.indexOf(t.type)===-1?Gr:t.type,r=Qt.indexOf(e.type)===-1?Gr:e.type;return Qt.indexOf(n)-Qt.indexOf(r)}function Ke(t,e,n={},r={}){return t.dispatchEvent(new CustomEvent(e,{detail:n,bubbles:!0,composed:!0,cancelable:!0,...r}))}function le(t,e){if(typeof ShadowRoot=="function"&&t instanceof ShadowRoot){Array.from(t.children).forEach(o=>le(o,e));return}let n=!1;if(e(t,()=>n=!0),n)return;let r=t.firstElementChild;for(;r;)le(r,e),r=r.nextElementSibling}function Ct(t,...e){console.warn(`Alpine Warning: ${t}`,...e)}var Ti=!1;function rf(){Ti&&Ct("Alpine has already been initialized on this page. Calling Alpine.start() more than once can cause problems."),Ti=!0,document.body||Ct("Unable to initialize. Trying to load Alpine before `<body>` is available. Did you forget to add `defer` in Alpine's `<script>` tag?"),Ke(document,"alpine:init"),Ke(document,"alpine:initializing"),xo(),Ou(e=>Bt(e,le)),wo(e=>$e(e)),na((e,n)=>{ko(e,n).forEach(r=>r())});let t=e=>!Hn(e.parentElement,!0);Array.from(document.querySelectorAll(ka().join(","))).filter(t).forEach(e=>{Bt(e)}),Ke(document,"alpine:initialized"),setTimeout(()=>{lf()})}var Ao=[],Ea=[];function Ca(){return Ao.map(t=>t())}function ka(){return Ao.concat(Ea).map(t=>t())}function Sa(t){Ao.push(t)}function Aa(t){Ea.push(t)}function Hn(t,e=!1){return $t(t,n=>{if((e?ka():Ca()).some(o=>n.matches(o)))return!0})}function $t(t,e){if(t){if(e(t))return t;if(t._x_teleportBack)return $t(t._x_teleportBack,e);if(t.parentNode instanceof ShadowRoot)return $t(t.parentNode.host,e);if(t.parentElement)return $t(t.parentElement,e)}}function of(t){return Ca().some(e=>t.matches(e))}var Ta=[];function sf(t){Ta.push(t)}var af=1;function Bt(t,e=le,n=()=>{}){$t(t,r=>r._x_ignore)||Xu(()=>{e(t,(r,o)=>{r._x_marker||(n(r,o),Ta.forEach(i=>i(r,o)),ko(r,r.attributes).forEach(i=>i()),r._x_ignore||(r._x_marker=af++),r._x_ignore&&o())})})}function $e(t,e=le){e(t,n=>{$u(n),oa(n),delete n._x_marker})}function lf(){[["ui","dialog",["[x-dialog], [x-popover]"]],["anchor","anchor",["[x-anchor]"]],["sort","sort",["[x-sort]"]]].forEach(([e,n,r])=>{Yu(n)||r.some(o=>{if(document.querySelector(o))return Ct(`found "${o}", but missing ${e} plugin`),!0})})}var Jr=[],To=!1;function Ro(t=()=>{}){return queueMicrotask(()=>{To||setTimeout(()=>{Qr()})}),new Promise(e=>{Jr.push(()=>{t(),e()})})}function Qr(){for(To=!1;Jr.length;)Jr.shift()()}function cf(){To=!0}function Po(t,e){return Array.isArray(e)?Ri(t,e.join(" ")):typeof e=="object"&&e!==null?df(t,e):typeof e=="function"?Po(t,e()):Ri(t,e)}function Zr(t){return t.split(/\s/).filter(Boolean)}function Ri(t,e){let n=o=>Zr(o).filter(i=>!t.classList.contains(i)).filter(Boolean),r=o=>(t.classList.add(...o),()=>{t.classList.remove(...o)});return e=e===!0?e="":e||"",r(n(e))}function df(t,e){let n=Object.entries(e).flatMap(([s,a])=>a?Zr(s):!1).filter(Boolean),r=Object.entries(e).flatMap(([s,a])=>a?!1:Zr(s)).filter(Boolean),o=[],i=[];return r.forEach(s=>{t.classList.contains(s)&&(t.classList.remove(s),i.push(s))}),n.forEach(s=>{t.classList.contains(s)||(t.classList.add(s),o.push(s))}),()=>{i.forEach(s=>t.classList.add(s)),o.forEach(s=>t.classList.remove(s))}}function Vn(t,e){return typeof e=="object"&&e!==null?uf(t,e):ff(t,e)}function uf(t,e){let n={};return Object.entries(e).forEach(([r,o])=>{n[r]=t.style[r],r.startsWith("--")||(r=pf(r)),t.style.setProperty(r,o)}),setTimeout(()=>{t.style.length===0&&t.removeAttribute("style")}),()=>{Vn(t,n)}}function ff(t,e){let n=t.getAttribute("style",e);return t.setAttribute("style",e),()=>{t.setAttribute("style",n||"")}}function pf(t){return t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function Yr(t,e=()=>{}){let n=!1;return function(){n?e.apply(this,arguments):(n=!0,t.apply(this,arguments))}}G("transition",(t,{value:e,modifiers:n,expression:r},{evaluate:o})=>{typeof r=="function"&&(r=o(r)),r!==!1&&(!r||typeof r=="boolean"?gf(t,n,e):hf(t,r,e))});function hf(t,e,n){Ra(t,Po,""),{enter:o=>{t._x_transition.enter.during=o},"enter-start":o=>{t._x_transition.enter.start=o},"enter-end":o=>{t._x_transition.enter.end=o},leave:o=>{t._x_transition.leave.during=o},"leave-start":o=>{t._x_transition.leave.start=o},"leave-end":o=>{t._x_transition.leave.end=o}}[n](e)}function gf(t,e,n){Ra(t,Vn);let r=!e.includes("in")&&!e.includes("out")&&!n,o=r||e.includes("in")||["enter"].includes(n),i=r||e.includes("out")||["leave"].includes(n);e.includes("in")&&!r&&(e=e.filter((p,x)=>x<e.indexOf("out"))),e.includes("out")&&!r&&(e=e.filter((p,x)=>x>e.indexOf("out")));let s=!e.includes("opacity")&&!e.includes("scale"),a=s||e.includes("opacity"),l=s||e.includes("scale"),c=a?0:1,d=l?qe(e,"scale",95)/100:1,u=qe(e,"delay",0)/1e3,g=qe(e,"origin","center"),h="opacity, transform",w=qe(e,"duration",150)/1e3,m=qe(e,"duration",75)/1e3,y="cubic-bezier(0.4, 0.0, 0.2, 1)";o&&(t._x_transition.enter.during={transformOrigin:g,transitionDelay:`${u}s`,transitionProperty:h,transitionDuration:`${w}s`,transitionTimingFunction:y},t._x_transition.enter.start={opacity:c,transform:`scale(${d})`},t._x_transition.enter.end={opacity:1,transform:"scale(1)"}),i&&(t._x_transition.leave.during={transformOrigin:g,transitionDelay:`${u}s`,transitionProperty:h,transitionDuration:`${m}s`,transitionTimingFunction:y},t._x_transition.leave.start={opacity:1,transform:"scale(1)"},t._x_transition.leave.end={opacity:c,transform:`scale(${d})`})}function Ra(t,e,n={}){t._x_transition||(t._x_transition={enter:{during:n,start:n,end:n},leave:{during:n,start:n,end:n},in(r=()=>{},o=()=>{}){Xr(t,e,{during:this.enter.during,start:this.enter.start,end:this.enter.end},r,o)},out(r=()=>{},o=()=>{}){Xr(t,e,{during:this.leave.during,start:this.leave.start,end:this.leave.end},r,o)}})}window.Element.prototype._x_toggleAndCascadeWithTransitions=function(t,e,n,r){const o=document.visibilityState==="visible"?requestAnimationFrame:setTimeout;let i=()=>o(n);if(e){t._x_transition&&(t._x_transition.enter||t._x_transition.leave)?t._x_transition.enter&&(Object.entries(t._x_transition.enter.during).length||Object.entries(t._x_transition.enter.start).length||Object.entries(t._x_transition.enter.end).length)?t._x_transition.in(n):i():t._x_transition?t._x_transition.in(n):i();return}t._x_hidePromise=t._x_transition?new Promise((s,a)=>{t._x_transition.out(()=>{},()=>s(r)),t._x_transitioning&&t._x_transitioning.beforeCancel(()=>a({isFromCancelledTransition:!0}))}):Promise.resolve(r),queueMicrotask(()=>{let s=Pa(t);s?(s._x_hideChildren||(s._x_hideChildren=[]),s._x_hideChildren.push(t)):o(()=>{let a=l=>{let c=Promise.all([l._x_hidePromise,...(l._x_hideChildren||[]).map(a)]).then(([d])=>d?.());return delete l._x_hidePromise,delete l._x_hideChildren,c};a(t).catch(l=>{if(!l.isFromCancelledTransition)throw l})})})};function Pa(t){let e=t.parentNode;if(e)return e._x_hidePromise?e:Pa(e)}function Xr(t,e,{during:n,start:r,end:o}={},i=()=>{},s=()=>{}){if(t._x_transitioning&&t._x_transitioning.cancel(),Object.keys(n).length===0&&Object.keys(r).length===0&&Object.keys(o).length===0){i(),s();return}let a,l,c;mf(t,{start(){a=e(t,r)},during(){l=e(t,n)},before:i,end(){a(),c=e(t,o)},after:s,cleanup(){l(),c()}})}function mf(t,e){let n,r,o,i=Yr(()=>{V(()=>{n=!0,r||e.before(),o||(e.end(),Qr()),e.after(),t.isConnected&&e.cleanup(),delete t._x_transitioning})});t._x_transitioning={beforeCancels:[],beforeCancel(s){this.beforeCancels.push(s)},cancel:Yr(function(){for(;this.beforeCancels.length;)this.beforeCancels.shift()();i()}),finish:i},V(()=>{e.start(),e.during()}),cf(),requestAnimationFrame(()=>{if(n)return;let s=Number(getComputedStyle(t).transitionDuration.replace(/,.*/,"").replace("s",""))*1e3,a=Number(getComputedStyle(t).transitionDelay.replace(/,.*/,"").replace("s",""))*1e3;s===0&&(s=Number(getComputedStyle(t).animationDuration.replace("s",""))*1e3),V(()=>{e.before()}),r=!0,requestAnimationFrame(()=>{n||(V(()=>{e.end()}),Qr(),setTimeout(t._x_transitioning.finish,s+a),o=!0)})})}function qe(t,e,n){if(t.indexOf(e)===-1)return n;const r=t[t.indexOf(e)+1];if(!r||e==="scale"&&isNaN(r))return n;if(e==="duration"||e==="delay"){let o=r.match(/([0-9]+)ms/);if(o)return o[1]}return e==="origin"&&["top","right","left","center","bottom"].includes(t[t.indexOf(e)+2])?[r,t[t.indexOf(e)+2]].join(" "):r}var Ut=!1;function Ht(t,e=()=>{}){return(...n)=>Ut?e(...n):t(...n)}function wf(t){return(...e)=>Ut&&t(...e)}var Oa=[];function Wn(t){Oa.push(t)}function bf(t,e){Oa.forEach(n=>n(t,e)),Ut=!0,$a(()=>{Bt(e,(n,r)=>{r(n,()=>{})})}),Ut=!1}var to=!1;function yf(t,e){e._x_dataStack||(e._x_dataStack=t._x_dataStack),Ut=!0,to=!0,$a(()=>{xf(e)}),Ut=!1,to=!1}function xf(t){let e=!1;Bt(t,(r,o)=>{le(r,(i,s)=>{if(e&&of(i))return s();e=!0,o(i,s)})})}function $a(t){let e=ue;Ai((n,r)=>{let o=e(n);return Pe(o),()=>{}}),t(),Ai(e)}function La(t,e,n,r=[]){switch(t._x_bindings||(t._x_bindings=Re({})),t._x_bindings[e]=n,e=r.includes("camel")?Tf(e):e,e){case"value":_f(t,n);break;case"style":Ef(t,n);break;case"class":vf(t,n);break;case"selected":case"checked":Cf(t,e,n);break;default:Oo(t,e,n);break}}function _f(t,e){if($o(t))t.attributes.value===void 0&&(t.value=e);else if(On(t))Number.isInteger(e)?t.value=e:!Array.isArray(e)&&typeof e!="boolean"&&![null,void 0].includes(e)?t.value=String(e):Array.isArray(e)?t.checked=e.some(n=>Rf(n,t.value)):t.checked=!!e;else if(t.tagName==="SELECT")Af(t,e);else if(t.tagName==="OPTION")Oo(t,"value",e);else{if(t.value===e&&(typeof e!="object"||e===null))return;t.value=e===void 0?"":e}}function vf(t,e){t._x_undoAddedClasses&&t._x_undoAddedClasses(),t._x_undoAddedClasses=Po(t,e)}function Ef(t,e){t._x_undoAddedStyles&&t._x_undoAddedStyles(),t._x_undoAddedStyles=Vn(t,e)}function Cf(t,e,n){Oo(t,e,n),Sf(t,e,n)}function Oo(t,e,n){[null,void 0,!1].includes(n)&&Of(e)?t.removeAttribute(e):(Ba(e)&&(n=e),$f(n)&&(n=JSON.stringify(n)),kf(t,e,n))}function kf(t,e,n){t.getAttribute(e)!=n&&t.setAttribute(e,n)}function Sf(t,e,n){t[e]!==n&&(t[e]=n)}function Af(t,e){const n=[].concat(e).map(r=>r+"");Array.from(t.options).forEach(r=>{r.selected=n.includes(r.value)})}function Tf(t){return t.toLowerCase().replace(/-(\w)/g,(e,n)=>n.toUpperCase())}function Rf(t,e){return t==e}function kn(t){return[1,"1","true","on","yes",!0].includes(t)?!0:[0,"0","false","off","no",!1].includes(t)?!1:t?!!t:null}var Pf=new Set(["allowfullscreen","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","inert","ismap","itemscope","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected","shadowrootclonable","shadowrootdelegatesfocus","shadowrootserializable"]);function Ba(t){return Pf.has(t)}function Of(t){return!["aria-pressed","aria-checked","aria-expanded","aria-selected"].includes(t)}function $f(t){return typeof t=="object"&&t!==null}function Lf(t,e,n){return t._x_bindings&&t._x_bindings[e]!==void 0?t._x_bindings[e]:Ia(t,e,n)}function Bf(t,e,n,r=!0){if(t._x_bindings&&t._x_bindings[e]!==void 0)return t._x_bindings[e];if(t._x_inlineBindings&&t._x_inlineBindings[e]!==void 0){let o=t._x_inlineBindings[e];return o.extract=r,ua(()=>Xt(t,o.expression))}return Ia(t,e,n)}function Ia(t,e,n){let r=t.getAttribute(e);return r===null?typeof n=="function"?n():n:r===""?!0:Ba(e)?!![e,"true"].includes(r):r}function On(t){return t.type==="checkbox"||t.localName==="ui-checkbox"||t.localName==="ui-switch"}function $o(t){return t.type==="radio"||t.localName==="ui-radio"}function Na(t,e){let n;return function(){const r=this,o=arguments,i=function(){n=null,t.apply(r,o)};clearTimeout(n),n=setTimeout(i,e)}}function Da(t,e){let n;return function(){let r=this,o=arguments;n||(t.apply(r,o),n=!0,setTimeout(()=>n=!1,e))}}function Ma({get:t,set:e},{get:n,set:r}){let o=!0,i,s=ue(()=>{let a=t(),l=n();if(o)r(dr(a)),o=!1;else{let c=JSON.stringify(a),d=JSON.stringify(l);c!==i?r(dr(a)):c!==d&&e(dr(l))}i=JSON.stringify(t()),JSON.stringify(n())});return()=>{Pe(s)}}function dr(t){return typeof t=="object"?JSON.parse(JSON.stringify(t)):t}function If(t){(Array.isArray(t)?t:[t]).forEach(n=>n(Le))}var Rt={},Pi=!1;function Nf(t,e){if(Pi||(Rt=Re(Rt),Pi=!0),e===void 0)return Rt[t];Rt[t]=e,typeof e=="object"&&e!==null&&e._x_interceptor?Rt[t]=e.initialize(Rt,t,t,()=>{}):Eo(Rt[t]),typeof e=="object"&&e!==null&&e.hasOwnProperty("init")&&typeof e.init=="function"&&Rt[t].init()}function Df(){return Rt}var Fa={};function Mf(t,e){let n=typeof e!="function"?()=>e:e;return t instanceof Element?za(t,n()):(Fa[t]=n,()=>{})}function Ff(t){return Object.entries(Fa).forEach(([e,n])=>{Object.defineProperty(t,e,{get(){return(...r)=>n(...r)}})}),t}function za(t,e,n){let r=[];for(;r.length;)r.pop()();let o=Object.entries(e).map(([s,a])=>({name:s,value:a})),i=ha(o);return o=o.map(s=>i.find(a=>a.name===s.name)?{name:`x-bind:${s.name}`,value:`"${s.value}"`}:s),ko(t,o,n).map(s=>{r.push(s.runCleanups),s()}),()=>{for(;r.length;)r.pop()()}}var ja={};function zf(t,e){ja[t]=e}function jf(t,e){return Object.entries(ja).forEach(([n,r])=>{Object.defineProperty(t,n,{get(){return(...o)=>r.bind(e)(...o)},enumerable:!1})}),t}var Uf={get reactive(){return Re},get release(){return Pe},get effect(){return ue},get raw(){return Zs},get transaction(){return Pu},version:"3.16.1",flushAndStopDeferringMutations:Iu,dontAutoEvaluateFunctions:ua,disableEffectScheduling:Au,startObservingMutations:xo,stopObservingMutations:ia,setReactivityEngine:Tu,onAttributeRemoved:ra,onAttributesAdded:na,closestDataStack:se,skipDuringClone:Ht,onlyDuringClone:wf,addRootSelector:Sa,addInitSelector:Aa,setErrorHandler:ju,interceptClone:Wn,addScopeToNode:rn,deferMutations:Bu,mapAttributes:So,evaluateLater:et,interceptInit:sf,initInterceptors:Eo,injectMagics:Qe,setEvaluator:qu,setRawEvaluator:Hu,mergeProxies:ae,extractProp:Bf,findClosest:$t,onElRemoved:wo,closestRoot:Hn,destroyTree:$e,interceptor:la,transition:Xr,setStyles:Vn,mutateDom:V,directive:G,entangle:Ma,throttle:Da,debounce:Na,evaluate:Xt,evaluateRaw:Ju,initTree:Bt,nextTick:Ro,prefixed:Oe,prefix:Zu,plugin:If,magic:bt,store:Nf,start:rf,clone:yf,cloneNode:bf,bound:Lf,$data:sa,watch:Ys,walk:le,data:zf,bind:Mf},Le=Uf;function qf(t,e){const n=Object.create(null),r=t.split(",");for(let o=0;o<r.length;o++)n[r[o]]=!0;return o=>!!n[o]}var Hf=Object.freeze({}),Vf=Object.prototype.hasOwnProperty,Kn=(t,e)=>Vf.call(t,e),te=Array.isArray,Ge=t=>Ua(t)==="[object Map]",Wf=t=>typeof t=="string",Lo=t=>typeof t=="symbol",Gn=t=>t!==null&&typeof t=="object",Kf=Object.prototype.toString,Ua=t=>Kf.call(t),qa=t=>Ua(t).slice(8,-1),Bo=t=>Wf(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Gf=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Jf=Gf(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ha=(t,e)=>t!==e&&(t===t||e===e),eo=new WeakMap,He=[],vt,ee=Symbol("iterate"),no=Symbol("Map key iterate");function Qf(t){return t&&t._isEffect===!0}function Zf(t,e=Hf){Qf(t)&&(t=t.raw);const n=tp(t,e);return e.lazy||n(),n}function Yf(t){t.active&&(Va(t),t.options.onStop&&t.options.onStop(),t.active=!1)}var Xf=0;function tp(t,e){const n=function(){if(!n.active)return t();if(!He.includes(n)){Va(n);try{return np(),He.push(n),vt=n,t()}finally{He.pop(),Wa(),vt=He[He.length-1]}}};return n.id=Xf++,n.allowRecurse=!!e.allowRecurse,n._isEffect=!0,n.active=!0,n.raw=t,n.deps=[],n.options=e,n}function Va(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}var Ce=!0,Io=[];function ep(){Io.push(Ce),Ce=!1}function np(){Io.push(Ce),Ce=!0}function Wa(){const t=Io.pop();Ce=t===void 0?!0:t}function wt(t,e,n){if(!Ce||vt===void 0)return;let r=eo.get(t);r||eo.set(t,r=new Map);let o=r.get(n);o||r.set(n,o=new Set),o.has(vt)||(o.add(vt),vt.deps.push(o),vt.options.onTrack&&vt.options.onTrack({effect:vt,target:t,type:e,key:n}))}function qt(t,e,n,r,o,i){const s=eo.get(t);if(!s)return;const a=new Set,l=d=>{d&&d.forEach(u=>{(u!==vt||u.allowRecurse)&&a.add(u)})};if(e==="clear")s.forEach(l);else if(n==="length"&&te(t))s.forEach((d,u)=>{(u==="length"||u>=r)&&l(d)});else switch(n!==void 0&&l(s.get(n)),e){case"add":te(t)?Bo(n)&&l(s.get("length")):(l(s.get(ee)),Ge(t)&&l(s.get(no)));break;case"delete":te(t)||(l(s.get(ee)),Ge(t)&&l(s.get(no)));break;case"set":Ge(t)&&l(s.get(ee));break}const c=d=>{d.options.onTrigger&&d.options.onTrigger({effect:d,target:t,key:n,type:e,newValue:r,oldValue:o,oldTarget:i}),d.options.scheduler?d.options.scheduler(d):d()};a.forEach(c)}var rp=qf("__proto__,__v_isRef,__isVue"),Ka=new Set(Object.getOwnPropertyNames(Symbol).map(t=>Symbol[t]).filter(Lo)),op=Ga(),ip=Ga(!0),Oi=sp();function sp(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=j(this);for(let i=0,s=this.length;i<s;i++)wt(r,"get",i+"");const o=r[e](...n);return o===-1||o===!1?r[e](...n.map(j)):o}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){ep();const r=j(this)[e].apply(this,n);return Wa(),r}}),t}function Ga(t=!1,e=!1){return function(r,o,i){if(o==="__v_isReactive")return!t;if(o==="__v_isReadonly")return t;if(o==="__v_raw"&&i===(t?e?xp:Ya:e?yp:Za).get(r))return r;const s=te(r);if(!t&&s&&Kn(Oi,o))return Reflect.get(Oi,o,i);const a=Reflect.get(r,o,i);return(Lo(o)?Ka.has(o):rp(o))||(t||wt(r,"get",o),e)?a:ro(a)?!s||!Bo(o)?a.value:a:Gn(a)?t?Xa(a):Fo(a):a}}var ap=lp();function lp(t=!1){return function(n,r,o,i){let s=n[r];if(!t&&(o=j(o),s=j(s),!te(n)&&ro(s)&&!ro(o)))return s.value=o,!0;const a=te(n)&&Bo(r)?Number(r)<n.length:Kn(n,r),l=Reflect.set(n,r,o,i);return n===j(i)&&(a?Ha(o,s)&&qt(n,"set",r,o,s):qt(n,"add",r,o)),l}}function cp(t,e){const n=Kn(t,e),r=t[e],o=Reflect.deleteProperty(t,e);return o&&n&&qt(t,"delete",e,void 0,r),o}function dp(t,e){const n=Reflect.has(t,e);return(!Lo(e)||!Ka.has(e))&&wt(t,"has",e),n}function up(t){return wt(t,"iterate",te(t)?"length":ee),Reflect.ownKeys(t)}var fp={get:op,set:ap,deleteProperty:cp,has:dp,ownKeys:up},pp={get:ip,set(t,e){return console.warn(`Set operation on key "${String(e)}" failed: target is readonly.`,t),!0},deleteProperty(t,e){return console.warn(`Delete operation on key "${String(e)}" failed: target is readonly.`,t),!0}},No=t=>Gn(t)?Fo(t):t,Do=t=>Gn(t)?Xa(t):t,Mo=t=>t,Jn=t=>Reflect.getPrototypeOf(t);function hn(t,e,n=!1,r=!1){t=t.__v_raw;const o=j(t),i=j(e);e!==i&&!n&&wt(o,"get",e),!n&&wt(o,"get",i);const{has:s}=Jn(o),a=r?Mo:n?Do:No;if(s.call(o,e))return a(t.get(e));if(s.call(o,i))return a(t.get(i));t!==o&&t.get(e)}function gn(t,e=!1){const n=this.__v_raw,r=j(n),o=j(t);return t!==o&&!e&&wt(r,"has",t),!e&&wt(r,"has",o),t===o?n.has(t):n.has(t)||n.has(o)}function mn(t,e=!1){return t=t.__v_raw,!e&&wt(j(t),"iterate",ee),Reflect.get(t,"size",t)}function $i(t){t=j(t);const e=j(this);return Jn(e).has.call(e,t)||(e.add(t),qt(e,"add",t,t)),this}function Li(t,e){e=j(e);const n=j(this),{has:r,get:o}=Jn(n);let i=r.call(n,t);i?Qa(n,r,t):(t=j(t),i=r.call(n,t));const s=o.call(n,t);return n.set(t,e),i?Ha(e,s)&&qt(n,"set",t,e,s):qt(n,"add",t,e),this}function Bi(t){const e=j(this),{has:n,get:r}=Jn(e);let o=n.call(e,t);o?Qa(e,n,t):(t=j(t),o=n.call(e,t));const i=r?r.call(e,t):void 0,s=e.delete(t);return o&&qt(e,"delete",t,void 0,i),s}function Ii(){const t=j(this),e=t.size!==0,n=Ge(t)?new Map(t):new Set(t),r=t.clear();return e&&qt(t,"clear",void 0,void 0,n),r}function wn(t,e){return function(r,o){const i=this,s=i.__v_raw,a=j(s),l=e?Mo:t?Do:No;return!t&&wt(a,"iterate",ee),s.forEach((c,d)=>r.call(o,l(c),l(d),i))}}function bn(t,e,n){return function(...r){const o=this.__v_raw,i=j(o),s=Ge(i),a=t==="entries"||t===Symbol.iterator&&s,l=t==="keys"&&s,c=o[t](...r),d=n?Mo:e?Do:No;return!e&&wt(i,"iterate",l?no:ee),{next(){const{value:u,done:g}=c.next();return g?{value:u,done:g}:{value:a?[d(u[0]),d(u[1])]:d(u),done:g}},[Symbol.iterator](){return this}}}}function Nt(t){return function(...e){{const n=e[0]?`on key "${e[0]}" `:"";console.warn(`${Jf(t)} operation ${n}failed: target is readonly.`,j(this))}return t==="delete"?!1:this}}function hp(){const t={get(i){return hn(this,i)},get size(){return mn(this)},has:gn,add:$i,set:Li,delete:Bi,clear:Ii,forEach:wn(!1,!1)},e={get(i){return hn(this,i,!1,!0)},get size(){return mn(this)},has:gn,add:$i,set:Li,delete:Bi,clear:Ii,forEach:wn(!1,!0)},n={get(i){return hn(this,i,!0)},get size(){return mn(this,!0)},has(i){return gn.call(this,i,!0)},add:Nt("add"),set:Nt("set"),delete:Nt("delete"),clear:Nt("clear"),forEach:wn(!0,!1)},r={get(i){return hn(this,i,!0,!0)},get size(){return mn(this,!0)},has(i){return gn.call(this,i,!0)},add:Nt("add"),set:Nt("set"),delete:Nt("delete"),clear:Nt("clear"),forEach:wn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=bn(i,!1,!1),n[i]=bn(i,!0,!1),e[i]=bn(i,!1,!0),r[i]=bn(i,!0,!0)}),[t,n,e,r]}var[gp,mp]=hp();function Ja(t,e){const n=t?mp:gp;return(r,o,i)=>o==="__v_isReactive"?!t:o==="__v_isReadonly"?t:o==="__v_raw"?r:Reflect.get(Kn(n,o)&&o in r?n:r,o,i)}var wp={get:Ja(!1)},bp={get:Ja(!0)};function Qa(t,e,n){const r=j(n);if(r!==n&&e.call(t,r)){const o=qa(t);console.warn(`Reactive ${o} contains both the raw and reactive versions of the same object${o==="Map"?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}var Za=new WeakMap,yp=new WeakMap,Ya=new WeakMap,xp=new WeakMap;function _p(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function vp(t){return t.__v_skip||!Object.isExtensible(t)?0:_p(qa(t))}function Fo(t){return t&&t.__v_isReadonly?t:tl(t,!1,fp,wp,Za)}function Xa(t){return tl(t,!0,pp,bp,Ya)}function tl(t,e,n,r,o){if(!Gn(t))return console.warn(`value cannot be made reactive: ${String(t)}`),t;if(t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=o.get(t);if(i)return i;const s=vp(t);if(s===0)return t;const a=new Proxy(t,s===2?r:n);return o.set(t,a),a}function j(t){return t&&j(t.__v_raw)||t}function ro(t){return!!(t&&t.__v_isRef===!0)}bt("nextTick",()=>Ro);bt("dispatch",t=>Ke.bind(Ke,t));bt("watch",(t,{evaluateLater:e,cleanup:n})=>(r,o)=>{let i=e(r),a=Ys(()=>{let l;return i(c=>l=c),l},o);n(a)});bt("store",Df);bt("data",t=>sa(t));bt("root",t=>Hn(t));bt("refs",t=>(t._x_refs_proxy||(t._x_refs_proxy=ae(Ep(t))),t._x_refs_proxy));function Ep(t){let e=[];return $t(t,n=>{n._x_refs&&e.push(n._x_refs)}),e}var ur={};function el(t){return ur[t]||(ur[t]=0),++ur[t]}function Cp(t,e){return $t(t,n=>{if(n._x_ids&&n._x_ids[e])return!0})}function kp(t,e){t._x_ids||(t._x_ids={}),t._x_ids[e]||(t._x_ids[e]=el(e))}bt("id",(t,{cleanup:e})=>(n,r=null)=>{let o=`${n}${r?`-${r}`:""}`;return Sp(t,o,e,()=>{let i=Cp(t,n),s=i?i._x_ids[n]:el(n);return r?`${n}-${s}-${r}`:`${n}-${s}`})});Wn((t,e)=>{t._x_id&&(e._x_id=t._x_id)});function Sp(t,e,n,r){if(t._x_id||(t._x_id={}),t._x_id[e])return t._x_id[e];let o=r();return t._x_id[e]=o,n(()=>{delete t._x_id[e]}),o}bt("el",t=>t);nl("Focus","focus","focus");nl("Persist","persist","persist");function nl(t,e,n){bt(e,r=>Ct(`You can't use [$${e}] without first installing the "${t}" plugin here: https://alpinejs.dev/plugins/${n}`,r))}G("modelable",(t,{expression:e},{effect:n,evaluateLater:r,cleanup:o})=>{let i=r(e),s=()=>{let d;return i(u=>d=u),d},a=r(`${e} = __placeholder`),l=d=>a(()=>{},{scope:{__placeholder:d}}),c=s();l(c),queueMicrotask(()=>{if(!t._x_model)return;t._x_removeModelListeners.default();let d=t._x_model.get,u=t._x_model.setWithModifiers,g=Ma({get(){return d()},set(h){u(h)}},{get(){return s()},set(h){l(h)}});o(g)})});G("teleport",(t,{modifiers:e,expression:n},{cleanup:r})=>{t.tagName.toLowerCase()!=="template"&&Ct("x-teleport can only be used on a <template> tag",t);let o=Ni(n),i=t.content.cloneNode(!0).firstElementChild;t._x_teleport=i,i._x_teleportBack=t,t.setAttribute("data-teleport-template",!0),i.setAttribute("data-teleport-target",!0),t._x_forwardEvents&&t._x_forwardEvents.forEach(a=>{i.addEventListener(a,l=>{l.stopPropagation(),t.dispatchEvent(new l.constructor(l.type,l))})}),rn(i,{},t);let s=(a,l,c)=>{c.includes("prepend")?l.parentNode.insertBefore(a,l):c.includes("append")?l.parentNode.insertBefore(a,l.nextSibling):l.appendChild(a)};V(()=>{Ht(()=>{s(i,o,e),Bt(i)})()}),t._x_teleportPutBack=()=>{let a=Ni(n);V(()=>{s(t._x_teleport,a,e)})},r(()=>V(()=>{i.remove(),$e(i)}))});var Ap=document.createElement("div");function Ni(t){let e=Ht(()=>document.querySelector(t),()=>Ap)();return e||Ct(`Cannot find x-teleport element for selector: "${t}"`),e}var rl=()=>{};rl.inline=(t,{modifiers:e},{cleanup:n})=>{e.includes("self")?t._x_ignoreSelf=!0:t._x_ignore=!0,n(()=>{e.includes("self")?delete t._x_ignoreSelf:delete t._x_ignore})};G("ignore",rl);G("effect",Ht((t,{expression:e},{effect:n})=>{n(et(t,e))}));function ye(t,e,n,r){let o=t,i=l=>r(l),s={},a=(l,c)=>d=>c(l,d);return n.includes("dot")&&(e=Tp(e)),n.includes("camel")&&(e=Rp(e)),n.includes("capture")&&(s.capture=!0),n.includes("window")&&(o=window),n.includes("document")&&(o=document),n.includes("passive")&&(s.passive=n[n.indexOf("passive")+1]!=="false"),i=ol(n,i),n.includes("prevent")&&(i=a(i,(l,c)=>{c.preventDefault(),l(c)})),n.includes("stop")&&(i=a(i,(l,c)=>{c.stopPropagation(),l(c)})),n.includes("once")&&(i=a(i,(l,c)=>{l(c),o.removeEventListener(e,i,s)})),(n.includes("away")||n.includes("outside"))&&(o=document,i=a(i,(l,c)=>{t.contains(c.target)||c.target.isConnected!==!1&&(t.offsetWidth<1&&t.offsetHeight<1||t._x_isShown!==!1&&l(c))})),n.includes("self")&&(i=a(i,(l,c)=>{c.target===t&&l(c)})),e==="submit"&&(i=a(i,(l,c)=>{c.target._x_pendingModelUpdates&&c.target._x_pendingModelUpdates.forEach(d=>d()),l(c)})),(Op(e)||il(e))&&(i=a(i,(l,c)=>{$p(c,n)||l(c)})),o.addEventListener(e,i,s),()=>{o.removeEventListener(e,i,s)}}function ol(t,e){if(t.includes("debounce")){let n=t[t.indexOf("debounce")+1]||"invalid-wait",r=$n(n.split("ms")[0])?Number(n.split("ms")[0]):250;e=Na(e,r)}if(t.includes("throttle")){let n=t[t.indexOf("throttle")+1]||"invalid-wait",r=$n(n.split("ms")[0])?Number(n.split("ms")[0]):250;e=Da(e,r)}return e}function Tp(t){return t.replace(/-/g,".")}function Rp(t){return t.toLowerCase().replace(/-(\w)/g,(e,n)=>n.toUpperCase())}function $n(t){return!Array.isArray(t)&&!isNaN(t)}function Pp(t){return[" ","_"].includes(t)?t:t.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/[_\s]/,"-").toLowerCase()}function Op(t){return["keydown","keyup"].includes(t)}function il(t){return["contextmenu","click","mouse"].some(e=>t.includes(e))}function $p(t,e){let n=e.filter(i=>!["window","document","prevent","stop","once","capture","self","away","outside","passive","preserve-scroll","blur","change","lazy"].includes(i));if(n.includes("debounce")){let i=n.indexOf("debounce");n.splice(i,$n((n[i+1]||"invalid-wait").split("ms")[0])?2:1)}if(n.includes("throttle")){let i=n.indexOf("throttle");n.splice(i,$n((n[i+1]||"invalid-wait").split("ms")[0])?2:1)}if(n.length===0||n.length===1&&Di(t.key).includes(n[0]))return!1;const o=["ctrl","shift","alt","meta","cmd","super"].filter(i=>n.includes(i));return n=n.filter(i=>!o.includes(i)),!(o.length>0&&o.filter(s=>((s==="cmd"||s==="super")&&(s="meta"),t[`${s}Key`])).length===o.length&&(il(t.type)||Di(t.key).includes(n[0])))}function Di(t){if(!t)return[];t=Pp(t);let e={ctrl:"control",slash:"/",space:" ",spacebar:" ",cmd:"meta",esc:"escape",up:"arrow-up",down:"arrow-down",left:"arrow-left",right:"arrow-right",period:".",comma:",",equal:"=",minus:"-",underscore:"_"};return e[t]=t,Object.keys(e).map(n=>{if(e[n]===t)return n}).filter(n=>n)}G("model",(t,{modifiers:e,expression:n},{effect:r,cleanup:o})=>{let i=t;e.includes("parent")&&(i=$t(t,m=>m!==t));let s=et(i,n),a;typeof n=="string"?a=et(i,`${n} = __placeholder`):typeof n=="function"&&typeof n()=="string"?a=et(i,`${n()} = __placeholder`):a=()=>{};let l=()=>{let m;return s(y=>m=y),Mi(m)?m.get():m},c=m=>{let y;s(p=>y=p),Mi(y)?y.set(m):a(()=>{},{scope:{__placeholder:m}})};typeof n=="string"&&t.type==="radio"&&V(()=>{t.hasAttribute("name")||t.setAttribute("name",n)});let d=e.includes("change")||e.includes("lazy"),u=e.includes("blur"),g=e.includes("enter"),h=d||u||g,w;if(Ut)w=()=>{};else if(h){let m=[],y=p=>c(yn(t,e,p,l()));if(d&&m.push(ye(t,"change",e,y)),u&&(m.push(ye(t,"blur",e,y)),t.form)){let p=t.form,x=()=>y({target:t});p._x_pendingModelUpdates||(p._x_pendingModelUpdates=[]),p._x_pendingModelUpdates.push(x),o(()=>{p._x_pendingModelUpdates&&p._x_pendingModelUpdates.splice(p._x_pendingModelUpdates.indexOf(x),1)})}g&&m.push(ye(t,"keydown",e,p=>{p.key==="Enter"&&y(p)})),w=()=>m.forEach(p=>p())}else{let m=t.tagName.toLowerCase()==="select"||["checkbox","radio"].includes(t.type)?"change":"input";w=ye(t,m,e,y=>{c(yn(t,e,y,l()))})}if(e.includes("fill")&&([void 0,null,""].includes(l())||On(t)&&Array.isArray(l())||t.tagName.toLowerCase()==="select"&&t.multiple)&&c(yn(t,e,{target:t},l())),t._x_removeModelListeners||(t._x_removeModelListeners={}),t._x_removeModelListeners.default=w,o(()=>t._x_removeModelListeners.default()),t.form){let m=ye(t.form,"reset",[],y=>{Ro(()=>t._x_model&&t._x_model.set(yn(t,e,{target:t},l())))});o(()=>m())}if(t._x_model={get(){return l()},set(m){c(m)},setWithModifiers:ol(e,c)},t._x_forceModelUpdate=m=>{m===void 0&&typeof n=="string"&&n.match(/\./)&&(m=""),V(()=>{On(t)?Array.isArray(m)?t.checked=m.some(y=>y==t.value):t.checked=!!m:$o(t)?typeof m=="boolean"?t.checked=kn(t.value)===m:t.checked=t.value==m:La(t,"value",m)})},t.tagName==="SELECT"){let m=new MutationObserver(()=>{t._x_forceModelUpdate(l())});m.observe(t,{childList:!0}),o(()=>m.disconnect())}r(()=>{let m=l();e.includes("unintrusive")&&document.activeElement.isSameNode(t)||t._x_forceModelUpdate(m)})});function yn(t,e,n,r){return V(()=>{if(n instanceof CustomEvent&&n.detail!==void 0)return n.detail!==null&&n.detail!==void 0?n.detail:n.target.value;if(On(t))if(Array.isArray(r)){let o=null;return e.includes("number")?o=fr(n.target.value):e.includes("boolean")?o=kn(n.target.value):o=n.target.value,n.target.checked?r.includes(o)?r:r.concat([o]):r.filter(i=>!Lp(i,o))}else return n.target.checked;else{if(t.tagName.toLowerCase()==="select"&&t.multiple)return e.includes("number")?Array.from(n.target.selectedOptions).map(o=>{let i=o.value||o.text;return fr(i)}):e.includes("boolean")?Array.from(n.target.selectedOptions).map(o=>{let i=o.value||o.text;return kn(i)}):Array.from(n.target.selectedOptions).map(o=>o.value||o.text);{let o;return $o(t)?n.target.checked?o=n.target.value:o=r:o=n.target.value,e.includes("number")?fr(o):e.includes("boolean")?kn(o):e.includes("trim")?o.trim():o}}})}function fr(t){let e=t?parseFloat(t):null;return Bp(e)?e:t}function Lp(t,e){return t==e}function Bp(t){return!Array.isArray(t)&&!isNaN(t)}function Mi(t){return t!==null&&typeof t=="object"&&typeof t.get=="function"&&typeof t.set=="function"}G("cloak",t=>queueMicrotask(()=>V(()=>t.removeAttribute(Oe("cloak")))));Aa(()=>`[${Oe("init")}]`);G("init",Ht((t,{expression:e},{evaluate:n})=>typeof e=="string"?!!e.trim()&&n(e,{},!1):n(e,{},!1)));G("text",(t,{expression:e},{effect:n,evaluateLater:r})=>{let o=r(e);n(()=>{o(i=>{V(()=>{t.textContent=i})})})});G("html",(t,{expression:e},{effect:n,evaluateLater:r})=>{let o=r(e);n(()=>{o(i=>{V(()=>{t.innerHTML=i??"",t._x_ignoreSelf=!0,Bt(t),delete t._x_ignoreSelf})})})});So(wa(":",ba(Oe("bind:"))));var sl=(t,{value:e,modifiers:n,expression:r,original:o},{effect:i,cleanup:s})=>{if(!e){let l={};Ff(l),et(t,r)(d=>{za(t,d,o)},{scope:l});return}if(e==="key")return Ip(t,r);if(t._x_inlineBindings&&t._x_inlineBindings[e]&&t._x_inlineBindings[e].extract)return;let a=et(t,r);i(()=>a(l=>{l===void 0&&typeof r=="string"&&r.match(/\./)&&(l=""),V(()=>La(t,e,l,n))})),s(()=>{t._x_undoAddedClasses&&t._x_undoAddedClasses(),t._x_undoAddedStyles&&t._x_undoAddedStyles()})};sl.inline=(t,{value:e,modifiers:n,expression:r})=>{e&&(t._x_inlineBindings||(t._x_inlineBindings={}),t._x_inlineBindings[e]={expression:r,extract:!1})};G("bind",sl);function Ip(t,e){t._x_keyExpression=e}Sa(()=>`[${Oe("data")}]`);var Kt=Symbol();G("data",(t,{expression:e},{cleanup:n})=>{if(Dp(t))return;let r=t[Kt];if(r?.expression===e)return;e=e===""?"{}":e;let o={};Qe(o,t);let i={};jf(i,o);let s=Xt(t,e,{scope:i});(s===void 0||s===!0)&&(s={}),Qe(s,t);let a;if(r?.reactiveData){a=r.reactiveData,Np(a,s);let c={expression:e};t[Kt]=c,queueMicrotask(()=>{t[Kt]===c&&delete t[Kt]})}else a=Re(s);Eo(a,n);let l=rn(t,a);a.init&&Xt(t,a.init),n(()=>{a.destroy&&Xt(t,a.destroy),l();let c={reactiveData:a};t[Kt]=c,queueMicrotask(()=>{t[Kt]===c&&delete t[Kt]})})});function Np(t,e){Object.keys(e).forEach(n=>{let r=Object.getOwnPropertyDescriptor(e,n),o=Object.getOwnPropertyDescriptor(t,n);r.get||r.set||o?.get||o?.set?(o&&delete t[n],o||(t[n]=void 0),r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]):t[n]=e[n]}),Object.keys(t).filter(n=>!Object.prototype.hasOwnProperty.call(e,n)).forEach(n=>delete t[n])}Wn((t,e)=>{t._x_dataStack&&(e._x_dataStack=t._x_dataStack,e.setAttribute("data-has-alpine-state",!0))});function Dp(t){return Ut?to?!0:t.hasAttribute("data-has-alpine-state"):!1}G("show",(t,{modifiers:e,expression:n},{effect:r})=>{let o=et(t,n);t._x_doHide||(t._x_doHide=()=>{V(()=>{t.style.setProperty("display","none",e.includes("important")?"important":void 0)})}),t._x_doShow||(t._x_doShow=()=>{V(()=>{t.style.length===1&&t.style.display==="none"?t.removeAttribute("style"):t.style.removeProperty("display")})});let i=()=>{t._x_doHide(),t._x_isShown=!1},s=()=>{t._x_doShow(),t._x_isShown=!0},a=()=>setTimeout(s),l=Yr(u=>u?s():i(),u=>{typeof t._x_toggleAndCascadeWithTransitions=="function"?t._x_toggleAndCascadeWithTransitions(t,u,s,i):u?a():i()}),c,d=!0;r(()=>o(u=>{!d&&u===c||(e.includes("immediate")&&(u?a():i()),l(u),c=u,d=!1)}))});G("for",Ht((t,{expression:e},{effect:n,cleanup:r})=>{let o=zp(e),i=et(t,o.items),s=et(t,t._x_keyExpression||"index");t._x_lookup=new Map,n(()=>Fp(t,o,i,s)),r(()=>{t._x_lookup.forEach(a=>V(()=>{$e(a),a.remove()})),delete t._x_lookup,delete t._x_lastRenderedEl})}));function Mp(t){return e=>{Object.entries(e).forEach(([n,r])=>{t[n]=r})}}function Fp(t,e,n,r){n(o=>{Up(o)&&(o=Array.from({length:o},(c,d)=>d+1)),o==null&&(o=[]),o instanceof Set&&(o=Array.from(o)),o instanceof Map&&(o=Array.from(o));let i=t._x_lookup,s=new Map;t._x_lookup=s;let a=qp(o),l=Object.entries(o).map(([c,d])=>{a||(c=parseInt(c));let u=jp(e,d,c,o),g;return r(h=>{typeof h=="object"&&Ct("x-for key cannot be an object, it must be a string or an integer",t),i.has(h)&&(s.set(h,i.get(h)),i.delete(h)),g=h},{scope:{index:c,...u}}),[g,u]});V(()=>{i.forEach(u=>{$e(u),u.remove()});let c=new Set,d=t;l.forEach(([u,g])=>{if(s.has(u)){let m=s.get(u);m._x_refreshXForScope(g),d.nextElementSibling!==m&&(d.nextElementSibling&&m.replaceWith(d.nextElementSibling),d.after(m)),d=m,m._x_currentIfEl&&(m.nextElementSibling!==m._x_currentIfEl&&d.after(m._x_currentIfEl),d=m._x_currentIfEl);return}t.content.children.length>1&&Ct("x-for templates require a single root element, additional elements will be ignored.",t);let h=document.importNode(t.content,!0).firstElementChild,w=Re(g);rn(h,w,t),h._x_refreshXForScope=Mp(w),s.set(u,h),c.add(h),d.after(h),d=h}),c.forEach(u=>Bt(u)),d!==t?t._x_lastRenderedEl=d:delete t._x_lastRenderedEl})})}function zp(t){let e=/,([^,\}\]]*)(?:,([^,\}\]]*))?$/,n=/^\s*\(|\)\s*$/g,r=/([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,o=t.match(r);if(!o)return;let i={};i.items=o[2].trim();let s=o[1].replace(n,"").trim(),a=s.match(e);return a?(i.item=s.replace(e,"").trim(),i.index=a[1].trim(),a[2]&&(i.collection=a[2].trim())):i.item=s,i}function jp(t,e,n,r){let o={};return/^\[.*\]$/.test(t.item)&&Array.isArray(e)?t.item.replace("[","").replace("]","").split(",").map(s=>s.trim()).forEach((s,a)=>{o[s]=e[a]}):/^\{.*\}$/.test(t.item)&&!Array.isArray(e)&&typeof e=="object"?t.item.replace("{","").replace("}","").split(",").map(s=>s.trim()).forEach(s=>{o[s]=e[s]}):o[t.item]=e,t.index&&(o[t.index]=n),t.collection&&(o[t.collection]=r),o}function Up(t){return typeof t!="object"&&!isNaN(t)}function qp(t){return typeof t=="object"&&!Array.isArray(t)}function al(){}al.inline=(t,{expression:e},{cleanup:n})=>{let r=Hn(t);r&&(r._x_refs||(r._x_refs={}),r._x_refs[e]=t,n(()=>delete r._x_refs[e]))};G("ref",al);G("if",Ht((t,{expression:e},{effect:n,cleanup:r})=>{t.tagName.toLowerCase()!=="template"&&Ct("x-if can only be used on a <template> tag",t);let o=et(t,e),i=()=>{if(t._x_currentIfEl)return t._x_currentIfEl;let a=t.content.cloneNode(!0).firstElementChild;return rn(a,{},t),V(()=>{t.after(a),Bt(a)}),t._x_currentIfEl=a,t._x_lastRenderedEl=a,t._x_undoIf=()=>{V(()=>{$e(a),a.remove()}),delete t._x_currentIfEl,delete t._x_lastRenderedEl},a},s=()=>{t._x_undoIf&&(t._x_undoIf(),delete t._x_undoIf)};n(()=>o(a=>{a?i():s()})),r(()=>t._x_undoIf&&t._x_undoIf())}));G("id",(t,{expression:e},{evaluate:n})=>{n(e).forEach(o=>kp(t,o))});Wn((t,e)=>{t._x_ids&&(e._x_ids=t._x_ids)});So(wa("@",ba(Oe("on:"))));G("on",Ht((t,{value:e,modifiers:n,expression:r},{cleanup:o})=>{let i=r?et(t,r):()=>{};t.tagName.toLowerCase()==="template"&&(t._x_forwardEvents||(t._x_forwardEvents=[]),t._x_forwardEvents.includes(e)||t._x_forwardEvents.push(e));let s=ye(t,e,n,a=>{i(()=>{},{scope:{$event:a},params:[a]})});o(()=>s())}));Qn("Collapse","collapse","collapse");Qn("Intersect","intersect","intersect");Qn("Focus","trap","focus");Qn("Mask","mask","mask");function Qn(t,e,n){G(e,r=>Ct(`You can't use [x-${e}] without first installing the "${t}" plugin here: https://alpinejs.dev/plugins/${n}`,r))}Le.setEvaluator(Vu);Le.setRawEvaluator(Qu);Le.setReactivityEngine({reactive:Fo,effect:Zf,release:Yf,raw:j});var Hp=Le,zo=Hp;function ll(t,e,n){if(typeof t=="function"?t===e:t.has(e))return arguments.length<3?e:n;throw new TypeError("Private element is not present on this object")}function Vp(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}function Fi(t,e){return t.get(ll(t,e))}function Wp(t,e,n){Vp(t,e),e.set(t,n)}function Kp(t,e,n){return t.set(ll(t,e),n),n}const Gp=100,A={},Jp=()=>{A.previousActiveElement instanceof HTMLElement?(A.previousActiveElement.focus(),A.previousActiveElement=null):document.body&&document.body.focus()},Qp=t=>new Promise(e=>{if(!t)return e();const n=window.scrollX,r=window.scrollY;A.restoreFocusTimeout=setTimeout(()=>{Jp(),e()},Gp),window.scrollTo(n,r)}),cl="swal2-",Zp=["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error","draggable","dragging"],b=Zp.reduce((t,e)=>(t[e]=cl+e,t),{}),Yp=["success","warning","info","question","error"],Ln=Yp.reduce((t,e)=>(t[e]=cl+e,t),{}),dl="SweetAlert2:",jo=t=>t.charAt(0).toUpperCase()+t.slice(1),nt=t=>{console.warn(`${dl} ${typeof t=="object"?t.join(" "):t}`)},fe=t=>{console.error(`${dl} ${t}`)},zi=[],Xp=t=>{zi.includes(t)||(zi.push(t),nt(t))},ul=(t,e=null)=>{Xp(`"${t}" is deprecated and will be removed in the next major release.${e?` Use "${e}" instead.`:""}`)},Zn=t=>typeof t=="function"?t():t,Uo=t=>t&&typeof t.toPromise=="function",on=t=>Uo(t)?t.toPromise():Promise.resolve(t),qo=t=>t&&Promise.resolve(t)===t,th=()=>navigator.userAgent.includes("Firefox"),rt=()=>document.body.querySelector(`.${b.container}`),sn=t=>{const e=rt();return e?e.querySelector(t):null},ut=t=>sn(`.${t}`),F=()=>ut(b.popup),Be=()=>ut(b.icon),eh=()=>ut(b["icon-content"]),fl=()=>ut(b.title),Ho=()=>ut(b["html-container"]),pl=()=>ut(b.image),Vo=()=>ut(b["progress-steps"]),Yn=()=>ut(b["validation-message"]),kt=()=>sn(`.${b.actions} .${b.confirm}`),Ie=()=>sn(`.${b.actions} .${b.cancel}`),pe=()=>sn(`.${b.actions} .${b.deny}`),nh=()=>ut(b["input-label"]),Ne=()=>sn(`.${b.loader}`),an=()=>ut(b.actions),hl=()=>ut(b.footer),Xn=()=>ut(b["timer-progress-bar"]),Wo=()=>ut(b.close),rh=`
  a[href],
  area[href],
  input:not([disabled]),
  select:not([disabled]),
  textarea:not([disabled]),
  button:not([disabled]),
  iframe,
  object,
  embed,
  [tabindex="0"],
  [contenteditable],
  audio[controls],
  video[controls],
  summary
`,Ko=()=>{const t=F();if(!t)return[];const e=t.querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'),n=Array.from(e).sort((i,s)=>{const a=parseInt(i.getAttribute("tabindex")||"0"),l=parseInt(s.getAttribute("tabindex")||"0");return a>l?1:a<l?-1:0}),r=t.querySelectorAll(rh),o=Array.from(r).filter(i=>i.getAttribute("tabindex")!=="-1");return[...new Set(n.concat(o))].filter(i=>st(i))},Go=()=>Lt(document.body,b.shown)&&!Lt(document.body,b["toast-shown"])&&!Lt(document.body,b["no-backdrop"]),tr=()=>{const t=F();return t?Lt(t,b.toast):!1},oh=()=>{const t=F();return t?t.hasAttribute("data-loading"):!1},ft=(t,e)=>{if(t.textContent="",e){const r=new DOMParser().parseFromString(e,"text/html"),o=r.querySelector("head");o&&Array.from(o.childNodes).forEach(s=>{t.appendChild(s)});const i=r.querySelector("body");i&&Array.from(i.childNodes).forEach(s=>{s instanceof HTMLVideoElement||s instanceof HTMLAudioElement?t.appendChild(s.cloneNode(!0)):t.appendChild(s)})}},Lt=(t,e)=>e?e.split(/\s+/).every(n=>t.classList.contains(n)):!1,ih=(t,e)=>{Array.from(t.classList).forEach(n=>{!Object.values(b).includes(n)&&!Object.values(Ln).includes(n)&&!Object.values(e.showClass||{}).includes(n)&&t.classList.remove(n)})},dt=(t,e,n)=>{if(ih(t,e),!e.customClass)return;const r=e.customClass[n];if(r){if(typeof r!="string"&&!r.forEach){nt(`Invalid type of customClass.${n}! Expected string or iterable object, got "${typeof r}"`);return}M(t,r)}},er=(t,e)=>{if(!e)return null;switch(e){case"select":case"textarea":case"file":return t.querySelector(`.${b.popup} > .${b[e]}`);case"checkbox":return t.querySelector(`.${b.popup} > .${b.checkbox} input`);case"radio":return t.querySelector(`.${b.popup} > .${b.radio} input:checked`)||t.querySelector(`.${b.popup} > .${b.radio} input:first-child`);case"range":return t.querySelector(`.${b.popup} > .${b.range} input`);default:return t.querySelector(`.${b.popup} > .${b.input}`)}},gl=t=>{if(t.focus(),t.type!=="file"){const e=t.value;t.value="",t.value=e}},ml=(t,e,n)=>{if(!t||!e)return;const r=typeof e=="string"?e.split(/\s+/).filter(Boolean):e;(Array.isArray(t)?t:[t]).forEach(i=>{r.forEach(s=>{n?i.classList.add(s):i.classList.remove(s)})})},M=(t,e)=>{ml(t,e,!0)},ht=(t,e)=>{ml(t,e,!1)},Ft=(t,e)=>Array.from(t.children).find(n=>n instanceof HTMLElement&&Lt(n,e)),ne=(t,e,n)=>{n===`${parseInt(`${n}`)}`&&(n=parseInt(n)),n||n===0?t.style.setProperty(e,typeof n=="number"?`${n}px`:n):t.style.removeProperty(e)},J=(t,e="flex")=>{t&&(t.style.display=e)},tt=t=>{t&&(t.style.display="none")},Jo=(t,e="block")=>{t&&new MutationObserver(()=>{ln(t,t.innerHTML,e)}).observe(t,{childList:!0,subtree:!0})},ji=(t,e,n,r)=>{const o=t.querySelector(e);o&&o.style.setProperty(n,r)},ln=(t,e,n="flex")=>{e?J(t,n):tt(t)},st=t=>!!(t&&(t.offsetWidth||t.offsetHeight||t.getClientRects().length)),sh=()=>!st(kt())&&!st(pe())&&!st(Ie()),oo=t=>t.scrollHeight>t.clientHeight,ah=(t,e)=>{let n=t;for(;n&&n!==e;){if(oo(n))return!0;n=n.parentElement}return!1},wl=t=>{const e=window.getComputedStyle(t),n=parseFloat(e.getPropertyValue("animation-duration")||"0"),r=parseFloat(e.getPropertyValue("transition-duration")||"0");return n>0||r>0},Qo=(t,e=!1)=>{const n=Xn();n&&st(n)&&(e&&(n.style.transition="none",n.style.width="100%"),setTimeout(()=>{n.style.transition=`width ${t/1e3}s linear`,n.style.width="0%"},10))},lh=()=>{const t=Xn();if(!t)return;const e=parseInt(window.getComputedStyle(t).width);t.style.removeProperty("transition"),t.style.width="100%";const n=parseInt(window.getComputedStyle(t).width),r=e/n*100;t.style.width=`${r}%`},ch=()=>typeof window>"u"||typeof document>"u",dh=`
 <div aria-labelledby="${b.title}" aria-describedby="${b["html-container"]}" class="${b.popup}" tabindex="-1">
   <button type="button" class="${b.close}"></button>
   <ul class="${b["progress-steps"]}"></ul>
   <div class="${b.icon}"></div>
   <img class="${b.image}" />
   <h2 class="${b.title}" id="${b.title}"></h2>
   <div class="${b["html-container"]}" id="${b["html-container"]}"></div>
   <input class="${b.input}" id="${b.input}" />
   <input type="file" class="${b.file}" />
   <div class="${b.range}">
     <input type="range" />
     <output></output>
   </div>
   <select class="${b.select}" id="${b.select}"></select>
   <div class="${b.radio}"></div>
   <label class="${b.checkbox}">
     <input type="checkbox" id="${b.checkbox}" />
     <span class="${b.label}"></span>
   </label>
   <textarea class="${b.textarea}" id="${b.textarea}"></textarea>
   <div class="${b["validation-message"]}" id="${b["validation-message"]}"></div>
   <div class="${b.actions}">
     <div class="${b.loader}"></div>
     <button type="button" class="${b.confirm}"></button>
     <button type="button" class="${b.deny}"></button>
     <button type="button" class="${b.cancel}"></button>
   </div>
   <div class="${b.footer}"></div>
   <div class="${b["timer-progress-bar-container"]}">
     <div class="${b["timer-progress-bar"]}"></div>
   </div>
 </div>
`.replace(/(^|\n)\s*/g,""),uh=()=>{const t=rt();return t?(t.remove(),ht([document.documentElement,document.body],[b["no-backdrop"],b["toast-shown"],b["has-column"]]),!0):!1},Gt=()=>{A.currentInstance&&A.currentInstance.resetValidationMessage()},fh=()=>{const t=F();if(!t)return;const e=Ft(t,b.input),n=Ft(t,b.file),r=t.querySelector(`.${b.range} input`),o=t.querySelector(`.${b.range} output`),i=Ft(t,b.select),s=t.querySelector(`.${b.checkbox} input`),a=Ft(t,b.textarea);e&&(e.oninput=Gt),n&&(n.onchange=Gt),i&&(i.onchange=Gt),s&&(s.onchange=Gt),a&&(a.oninput=Gt),r&&o&&(r.oninput=()=>{Gt(),o.value=r.value},r.onchange=()=>{Gt(),o.value=r.value})},ph=t=>{if(typeof t=="string"){const e=document.querySelector(t);if(!e)throw new Error(`Target element "${t}" not found`);return e}return t},hh=t=>{const e=F();e&&(e.setAttribute("role",t.toast?"alert":"dialog"),e.setAttribute("aria-live",t.toast?"polite":"assertive"),t.toast||e.setAttribute("aria-modal","true"))},gh=t=>{window.getComputedStyle(t).direction==="rtl"&&(M(rt(),b.rtl),A.isRTL=!0)},mh=t=>{const e=uh();if(ch()){fe("SweetAlert2 requires document to initialize");return}const n=document.createElement("div");n.className=b.container,e&&M(n,b["no-transition"]),ft(n,dh),n.dataset.swal2Theme=t.theme;const r=ph(t.target||"body");r.appendChild(n),t.topLayer&&(n.setAttribute("popover",""),n.showPopover()),hh(t),gh(r),fh()},Zo=(t,e)=>{t instanceof HTMLElement?e.appendChild(t):typeof t=="object"?wh(t,e):t&&ft(e,t)},wh=(t,e)=>{"jquery"in t?bh(e,t):ft(e,t.toString())},bh=(t,e)=>{if(t.textContent="",0 in e)for(let n=0;n in e;n++)t.appendChild(e[n].cloneNode(!0));else t.appendChild(e.cloneNode(!0))},yh=(t,e)=>{const n=an(),r=Ne();!n||!r||(!e.showConfirmButton&&!e.showDenyButton&&!e.showCancelButton?tt(n):J(n),dt(n,e,"actions"),xh(n,r,e),ft(r,e.loaderHtml||""),dt(r,e,"loader"))};function xh(t,e,n){const r=kt(),o=pe(),i=Ie();!r||!o||!i||(pr(r,"confirm",n),pr(o,"deny",n),pr(i,"cancel",n),_h(r,o,i,n),n.reverseButtons&&(n.toast?(t.insertBefore(i,r),t.insertBefore(o,r)):(t.insertBefore(i,e),t.insertBefore(o,e),t.insertBefore(r,e))))}function _h(t,e,n,r){if(!r.buttonsStyling){ht([t,e,n],b.styled);return}M([t,e,n],b.styled),[[t,"confirm",r.confirmButtonColor],[e,"deny",r.denyButtonColor],[n,"cancel",r.cancelButtonColor]].forEach(([i,s,a])=>{a&&i.style.setProperty(`--swal2-${s}-button-background-color`,a),vh(i)})}function vh(t){const e=window.getComputedStyle(t);if(e.getPropertyValue("--swal2-action-button-focus-box-shadow"))return;const n=e.backgroundColor.replace(/rgba?\((\d+), (\d+), (\d+).*/,"rgba($1, $2, $3, 0.5)");t.style.setProperty("--swal2-action-button-focus-box-shadow",e.getPropertyValue("--swal2-outline").replace(/ rgba\(.*/,` ${n}`))}function pr(t,e,n){const r=jo(e);ln(t,n[`show${r}Button`],"inline-block"),ft(t,n[`${e}ButtonText`]||""),t.setAttribute("aria-label",n[`${e}ButtonAriaLabel`]||""),t.className=b[e],dt(t,n,`${e}Button`)}const Eh=(t,e)=>{const n=Wo();n&&(ft(n,e.closeButtonHtml||""),dt(n,e,"closeButton"),ln(n,e.showCloseButton),n.setAttribute("aria-label",e.closeButtonAriaLabel||""))},Ch=(t,e)=>{const n=rt();n&&(kh(n,e.backdrop),Sh(n,e.position),Ah(n,e.grow),dt(n,e,"container"))};function kh(t,e){typeof e=="string"?t.style.background=e:e||M([document.documentElement,document.body],b["no-backdrop"])}function Sh(t,e){e&&(e in b?M(t,b[e]):(nt('The "position" parameter is not valid, defaulting to "center"'),M(t,b.center)))}function Ah(t,e){e&&M(t,b[`grow-${e}`])}var z={innerParams:new WeakMap,domCache:new WeakMap,focusedElement:new WeakMap};const Th=["input","file","range","select","radio","checkbox","textarea"],Rh=(t,e)=>{const n=F();if(!n)return;const r=z.innerParams.get(t),o=!r||e.input!==r.input;Th.forEach(i=>{const s=Ft(n,b[i]);s&&($h(i,e.inputAttributes),s.className=b[i],o&&tt(s))}),e.input&&(o&&Ph(e),Lh(e))},Ph=t=>{if(!t.input)return;if(!H[t.input]){fe(`Unexpected type of input! Expected ${Object.keys(H).join(" | ")}, got "${t.input}"`);return}const e=bl(t.input);if(!e)return;const n=H[t.input](e,t);J(e),t.inputAutoFocus&&setTimeout(()=>{gl(n)})},Oh=t=>{for(const{name:e}of Array.from(t.attributes))["id","type","value","style"].includes(e)||t.removeAttribute(e)},$h=(t,e)=>{const n=F();if(!n)return;const r=er(n,t);if(r){Oh(r);for(const o in e)r.setAttribute(o,e[o])}},Lh=t=>{if(!t.input)return;const e=bl(t.input);e&&dt(e,t,"input")},Yo=(t,e)=>{!t.placeholder&&e.inputPlaceholder&&(t.placeholder=e.inputPlaceholder)},cn=(t,e,n)=>{if(n.inputLabel){const r=document.createElement("label"),o=b["input-label"];r.setAttribute("for",t.id),r.className=o,typeof n.customClass=="object"&&M(r,n.customClass.inputLabel),r.innerText=n.inputLabel,e.insertAdjacentElement("beforebegin",r)}},bl=t=>{const e=F();if(e)return Ft(e,b[t]||b.input)},Bn=(t,e)=>{["string","number"].includes(typeof e)?t.value=`${e}`:qo(e)||nt(`Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof e}"`)},H={};H.text=H.email=H.password=H.number=H.tel=H.url=H.search=H.date=H["datetime-local"]=H.time=H.week=H.month=(t,e)=>{const n=t;return Bn(n,e.inputValue),cn(n,n,e),Yo(n,e),n.type=e.input,n};H.file=(t,e)=>{const n=t;return cn(n,n,e),Yo(n,e),n};H.range=(t,e)=>{const n=t,r=n.querySelector("input"),o=n.querySelector("output");return r&&(Bn(r,e.inputValue),r.type=e.input,cn(r,t,e)),o&&Bn(o,e.inputValue),t};H.select=(t,e)=>{const n=t;if(n.textContent="",e.inputPlaceholder){const r=document.createElement("option");ft(r,e.inputPlaceholder),r.value="",r.disabled=!0,r.selected=!0,n.appendChild(r)}return cn(n,n,e),n};H.radio=t=>{const e=t;return e.textContent="",t};H.checkbox=(t,e)=>{const n=F();if(!n)throw new Error("Popup not found");const r=er(n,"checkbox");if(!r)throw new Error("Checkbox input not found");r.value="1",r.checked=!!e.inputValue;const i=t.querySelector("span");if(i){const s=e.inputPlaceholder||e.inputLabel;s&&ft(i,s)}return r};H.textarea=(t,e)=>{const n=t;Bn(n,e.inputValue),Yo(n,e),cn(n,n,e);const r=o=>parseInt(window.getComputedStyle(o).marginLeft)+parseInt(window.getComputedStyle(o).marginRight);return setTimeout(()=>{if("MutationObserver"in window){const o=F();if(!o)return;const i=parseInt(window.getComputedStyle(o).width),s=()=>{if(!document.body.contains(n))return;const a=n.offsetWidth+r(n),l=F();l&&(a>i?l.style.width=`${a}px`:ne(l,"width",e.width))};new MutationObserver(s).observe(n,{attributes:!0,attributeFilter:["style"]})}}),n};const Bh=(t,e)=>{const n=Ho();n&&(Jo(n),dt(n,e,"htmlContainer"),e.html?(Zo(e.html,n),J(n,"block")):e.text?(n.textContent=e.text,J(n,"block")):tt(n),Rh(t,e))},Ih=(t,e)=>{const n=hl();n&&(Jo(n),ln(n,!!e.footer,"block"),e.footer&&Zo(e.footer,n),dt(n,e,"footer"))},Nh=(t,e)=>{const n=z.innerParams.get(t),r=Be();if(!r)return;if(n&&e.icon===n.icon){qi(r,e),Ui(r,e);return}if(!e.icon&&!e.iconHtml){tt(r);return}if(e.icon&&Object.keys(Ln).indexOf(e.icon)===-1){fe(`Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${e.icon}"`),tt(r);return}J(r),qi(r,e),Ui(r,e),M(r,e.showClass&&e.showClass.icon),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",yl)},Ui=(t,e)=>{for(const[n,r]of Object.entries(Ln))e.icon!==n&&ht(t,r);M(t,e.icon&&Ln[e.icon]),Fh(t,e),yl(),dt(t,e,"icon")},yl=()=>{const t=F();if(!t)return;const e=window.getComputedStyle(t).getPropertyValue("background-color");t.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix").forEach(r=>{r.style.backgroundColor=e})},Dh=t=>`
  ${t.animation?'<div class="swal2-success-circular-line-left"></div>':""}
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div>
  ${t.animation?'<div class="swal2-success-fix"></div>':""}
  ${t.animation?'<div class="swal2-success-circular-line-right"></div>':""}
`,Mh=`
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,qi=(t,e)=>{if(!e.icon&&!e.iconHtml)return;let n=t.innerHTML,r="";e.iconHtml?r=Hi(e.iconHtml):e.icon==="success"?(r=Dh(e),n=n.replace(/ style=".*?"/g,"")):e.icon==="error"?r=Mh:e.icon&&(r=Hi({question:"?",warning:"!",info:"i"}[e.icon])),n.trim()!==r.trim()&&ft(t,r)},Fh=(t,e)=>{if(e.iconColor){t.style.color=e.iconColor,t.style.borderColor=e.iconColor;for(const n of[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"])ji(t,n,"background-color",e.iconColor);ji(t,".swal2-success-ring","border-color",e.iconColor)}},Hi=t=>`<div class="${b["icon-content"]}">${t}</div>`,zh=(t,e)=>{const n=pl();if(n){if(!e.imageUrl){tt(n);return}J(n,""),n.setAttribute("src",e.imageUrl),n.setAttribute("alt",e.imageAlt||""),ne(n,"width",e.imageWidth),ne(n,"height",e.imageHeight),n.className=b.image,dt(n,e,"image")}};let Xo=!1,xl=0,_l=0,vl=0,El=0;const jh=t=>{t.addEventListener("mousedown",In),document.body.addEventListener("mousemove",Nn),t.addEventListener("mouseup",Dn),t.addEventListener("touchstart",In),document.body.addEventListener("touchmove",Nn),t.addEventListener("touchend",Dn)},Uh=t=>{t.removeEventListener("mousedown",In),document.body.removeEventListener("mousemove",Nn),t.removeEventListener("mouseup",Dn),t.removeEventListener("touchstart",In),document.body.removeEventListener("touchmove",Nn),t.removeEventListener("touchend",Dn)},In=t=>{const e=F();if(!e)return;const n=Be();if(t.target===e||n&&n.contains(t.target)){Xo=!0;const r=Cl(t);xl=r.clientX,_l=r.clientY,vl=parseInt(e.style.insetInlineStart)||0,El=parseInt(e.style.insetBlockStart)||0,M(e,"swal2-dragging")}},Nn=t=>{const e=F();if(e&&Xo){let{clientX:n,clientY:r}=Cl(t);const o=n-xl;e.style.insetInlineStart=`${vl+(A.isRTL?-o:o)}px`,e.style.insetBlockStart=`${El+(r-_l)}px`}},Dn=()=>{const t=F();Xo=!1,ht(t,"swal2-dragging")},Cl=t=>{const e=t.type.startsWith("touch")?t.touches[0]:t;return{clientX:e.clientX,clientY:e.clientY}},qh=(t,e)=>{const n=rt(),r=F();if(!(!n||!r)){if(e.toast){ne(n,"width",e.width),r.style.width="100%";const o=Ne();o&&r.insertBefore(o,Be())}else ne(r,"width",e.width);ne(r,"padding",e.padding),e.color&&(r.style.color=e.color),e.background&&(r.style.background=e.background),tt(Yn()),Hh(r,e),e.draggable&&!e.toast?(M(r,b.draggable),jh(r)):(ht(r,b.draggable),Uh(r))}},Hh=(t,e)=>{const n=e.showClass||{};t.className=`${b.popup} ${st(t)?n.popup:""}`,e.toast?(M([document.documentElement,document.body],b["toast-shown"]),M(t,b.toast)):M(t,b.modal),dt(t,e,"popup"),typeof e.customClass=="string"&&M(t,e.customClass),e.icon&&M(t,b[`icon-${e.icon}`])},Vh=(t,e)=>{const n=Vo();if(!n)return;const{progressSteps:r,currentProgressStep:o}=e;if(!r||r.length===0||o===void 0){tt(n);return}J(n),n.textContent="",o>=r.length&&nt("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),r.forEach((i,s)=>{const a=Wh(i);if(n.appendChild(a),s===o&&M(a,b["active-progress-step"]),s!==r.length-1){const l=Kh(e);n.appendChild(l)}})},Wh=t=>{const e=document.createElement("li");return M(e,b["progress-step"]),ft(e,t),e},Kh=t=>{const e=document.createElement("li");return M(e,b["progress-step-line"]),t.progressStepsDistance&&ne(e,"width",t.progressStepsDistance),e},Gh=(t,e)=>{const n=fl();n&&(Jo(n),ln(n,!!(e.title||e.titleText),"block"),e.title&&Zo(e.title,n),e.titleText&&(n.innerText=e.titleText),dt(n,e,"title"))},kl=(t,e)=>{var n;qh(t,e),Ch(t,e),Vh(t,e),Nh(t,e),zh(t,e),Gh(t,e),Eh(t,e),Bh(t,e),yh(t,e),Ih(t,e);const r=F();typeof e.didRender=="function"&&r&&e.didRender(r),(n=A.eventEmitter)===null||n===void 0||n.emit("didRender",r)},Jh=()=>st(F()),Sl=()=>{var t;return(t=kt())===null||t===void 0?void 0:t.click()},Qh=()=>{var t;return(t=pe())===null||t===void 0?void 0:t.click()},Zh=()=>{var t;return(t=Ie())===null||t===void 0?void 0:t.click()},De=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),Al=t=>{if(t.keydownTarget&&t.keydownHandlerAdded&&t.keydownHandler){const e=t.keydownHandler;t.keydownTarget.removeEventListener("keydown",e,{capture:t.keydownListenerCapture}),t.keydownHandlerAdded=!1}},Yh=(t,e,n)=>{if(Al(t),!e.toast){const r=i=>tg(e,i,n);t.keydownHandler=r;const o=e.keydownListenerCapture?window:F();if(o){t.keydownTarget=o,t.keydownListenerCapture=e.keydownListenerCapture;const i=r;t.keydownTarget.addEventListener("keydown",i,{capture:t.keydownListenerCapture}),t.keydownHandlerAdded=!0}}},io=(t,e)=>{var n;const r=Ko();return r.length?(t=t+e,t===-2&&(t=r.length-1),t===r.length?t=0:t===-1&&(t=r.length-1),r[t].focus(),!(th()&&r[t]instanceof HTMLIFrameElement)):((n=F())===null||n===void 0||n.focus(),!0)},Tl=["ArrowRight","ArrowDown"],Xh=["ArrowLeft","ArrowUp"],tg=(t,e,n)=>{t&&(e.isComposing||e.keyCode===229||(t.stopKeydownPropagation&&e.stopPropagation(),e.key==="Enter"?eg(e,t):e.key==="Tab"?ng(e):[...Tl,...Xh].includes(e.key)?rg(e.key):e.key==="Escape"&&og(e,t,n)))},eg=(t,e)=>{if(!Zn(e.allowEnterKey))return;const n=F();if(!n||!e.input)return;const r=er(n,e.input);if(t.target&&r&&t.target instanceof HTMLElement&&t.target.outerHTML===r.outerHTML){if(["textarea","file"].includes(e.input))return;Sl(),t.preventDefault()}},ng=t=>{const e=t.target,r=Ko().findIndex(i=>i===e);let o=!0;t.shiftKey?o=io(r,-1):o=io(r,1),t.stopPropagation(),o&&t.preventDefault()},rg=t=>{const e=an(),n=kt(),r=pe(),o=Ie();if(!e||!n||!r||!o)return;const i=[n,r,o];if(document.activeElement instanceof HTMLElement&&!i.includes(document.activeElement))return;const s=Tl.includes(t)?"nextElementSibling":"previousElementSibling";let a=document.activeElement;if(a){for(let l=0;l<e.children.length;l++){if(a=a[s],!a)return;if(a instanceof HTMLButtonElement&&st(a))break}a instanceof HTMLButtonElement&&a.focus()}},og=(t,e,n)=>{t.preventDefault(),Zn(e.allowEscapeKey)&&n(De.esc)};var ke={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap};const ig=()=>{const t=rt();Array.from(document.body.children).forEach(n=>{n.contains(t)||(n.hasAttribute("aria-hidden")&&n.setAttribute("data-previous-aria-hidden",n.getAttribute("aria-hidden")||""),n.setAttribute("aria-hidden","true"))})},Rl=()=>{Array.from(document.body.children).forEach(e=>{e.hasAttribute("data-previous-aria-hidden")?(e.setAttribute("aria-hidden",e.getAttribute("data-previous-aria-hidden")||""),e.removeAttribute("data-previous-aria-hidden")):e.removeAttribute("aria-hidden")})},ti=typeof window<"u"&&!!window.GestureEvent,sg=ti&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream,ag=()=>{if(ti&&!Lt(document.body,b.iosfix)){const t=document.body.scrollTop;document.body.style.top=`${t*-1}px`,M(document.body,b.iosfix),lg()}},lg=()=>{const t=rt();if(!t)return;let e;t.ontouchstart=n=>{e=cg(n)},t.ontouchmove=n=>{e&&(n.preventDefault(),n.stopPropagation())}},cg=t=>{const e=t.target,n=rt(),r=Ho();return!n||!r||dg(t)||ug(t)?!1:e===n||!oo(n)&&e instanceof HTMLElement&&!ah(e,r)&&e.tagName!=="INPUT"&&e.tagName!=="TEXTAREA"&&!(oo(r)&&r.contains(e))},dg=t=>!!(t.touches&&t.touches.length&&t.touches[0].touchType==="stylus"),ug=t=>t.touches&&t.touches.length>1,fg=()=>{if(Lt(document.body,b.iosfix)){const t=parseInt(document.body.style.top,10);ht(document.body,b.iosfix),document.body.style.top="",document.body.scrollTop=t*-1}},pg=()=>{const t=document.createElement("div");t.className=b["scrollbar-measure"],document.body.appendChild(t);const e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e};let ve=null;const hg=t=>{ve===null&&(document.body.scrollHeight>window.innerHeight||t==="scroll")&&(ve=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight=`${ve+pg()}px`)},gg=()=>{ve!==null&&(document.body.style.paddingRight=`${ve}px`,ve=null)};function Pl(t,e,n,r){tr()?Vi(t,r):(Qp(n).then(()=>Vi(t,r)),Al(A)),ti?(e.setAttribute("style","display:none !important"),e.removeAttribute("class"),e.innerHTML=""):e.remove(),Go()&&(gg(),fg(),Rl()),mg()}function mg(){ht([document.documentElement,document.body],[b.shown,b["height-auto"],b["no-backdrop"],b["toast-shown"]])}function zt(t){t=bg(t);const e=ke.swalPromiseResolve.get(this),n=wg(this);this.isAwaitingPromise?t.isDismissed||(dn(this),e(t)):n&&e(t)}const wg=t=>{const e=F();if(!e)return!1;const n=z.innerParams.get(t);if(!n||Lt(e,n.hideClass.popup))return!1;ht(e,n.showClass.popup),M(e,n.hideClass.popup);const r=rt();return ht(r,n.showClass.backdrop),M(r,n.hideClass.backdrop),yg(t,e,n),!0};function Ol(t){const e=ke.swalPromiseReject.get(this);dn(this),e&&e(t)}const dn=t=>{t.isAwaitingPromise&&(delete t.isAwaitingPromise,z.innerParams.get(t)||t._destroy())},bg=t=>typeof t>"u"?{isConfirmed:!1,isDenied:!1,isDismissed:!0}:Object.assign({isConfirmed:!1,isDenied:!1,isDismissed:!1},t),yg=(t,e,n)=>{var r;const o=rt(),i=wl(e);typeof n.willClose=="function"&&n.willClose(e),(r=A.eventEmitter)===null||r===void 0||r.emit("willClose",e),i&&o?xg(t,e,o,!!n.returnFocus,n.didClose):o&&Pl(t,o,!!n.returnFocus,n.didClose)},xg=(t,e,n,r,o)=>{A.swalCloseEventFinishedCallback=Pl.bind(null,t,n,r,o);const i=function(s){if(s.target===e){var a;(a=A.swalCloseEventFinishedCallback)===null||a===void 0||a.call(A),delete A.swalCloseEventFinishedCallback,e.removeEventListener("animationend",i),e.removeEventListener("transitionend",i)}};e.addEventListener("animationend",i),e.addEventListener("transitionend",i)},Vi=(t,e)=>{setTimeout(()=>{var n;typeof e=="function"&&e.bind(t.params)(),(n=A.eventEmitter)===null||n===void 0||n.emit("didClose"),t._destroy&&t._destroy()})},Se=t=>{let e=F();if(e||new de,e=F(),!e)return;const n=Ne();tr()?tt(Be()):_g(e,t),J(n),e.setAttribute("data-loading","true"),e.setAttribute("aria-busy","true"),e.focus()},_g=(t,e)=>{const n=an(),r=Ne();!n||!r||(!e&&st(kt())&&(e=kt()),J(n),e&&(tt(e),r.setAttribute("data-button-to-replace",e.className),n.insertBefore(r,e)),M([t,n],b.loading))},vg=(t,e)=>{e.input==="select"||e.input==="radio"?Ag(t,e):["text","email","number","tel","textarea"].some(n=>n===e.input)&&(Uo(e.inputValue)||qo(e.inputValue))&&(Se(kt()),Tg(t,e))},Eg=(t,e)=>{const n=t.getInput();if(!n)return null;switch(e.input){case"checkbox":return Cg(n);case"radio":return kg(n);case"file":return Sg(n);default:return e.inputAutoTrim?n.value.trim():n.value}},Cg=t=>t.checked?1:0,kg=t=>t.checked?t.value:null,Sg=t=>t.files&&t.files.length?t.getAttribute("multiple")!==null?t.files:t.files[0]:null,Ag=(t,e)=>{const n=F();if(!n)return;const r=o=>{e.input==="select"?Rg(n,so(o),e):e.input==="radio"&&Pg(n,so(o),e)};Uo(e.inputOptions)||qo(e.inputOptions)?(Se(kt()),on(e.inputOptions).then(o=>{t.hideLoading(),r(o)})):typeof e.inputOptions=="object"?r(e.inputOptions):fe(`Unexpected type of inputOptions! Expected object, Map or Promise, got ${typeof e.inputOptions}`)},Tg=(t,e)=>{const n=t.getInput();n&&(tt(n),on(e.inputValue).then(r=>{n.value=e.input==="number"?`${parseFloat(r)||0}`:`${r}`,J(n),n.focus(),t.hideLoading()}).catch(r=>{fe(`Error in inputValue promise: ${r}`),n.value="",J(n),n.focus(),t.hideLoading()}))};function Rg(t,e,n){const r=Ft(t,b.select);if(!r)return;const o=(i,s,a)=>{const l=document.createElement("option");l.value=a,ft(l,s),l.selected=$l(a,n.inputValue),i.appendChild(l)};e.forEach(i=>{const s=i[0],a=i[1];if(Array.isArray(a)){const l=document.createElement("optgroup");l.label=s,l.disabled=!1,r.appendChild(l),a.forEach(c=>o(l,c[1],c[0]))}else o(r,a,s)}),r.focus()}function Pg(t,e,n){const r=Ft(t,b.radio);if(!r)return;e.forEach(i=>{const s=i[0],a=i[1],l=document.createElement("input"),c=document.createElement("label");l.type="radio",l.name=b.radio,l.value=s,$l(s,n.inputValue)&&(l.checked=!0);const d=document.createElement("span");ft(d,a),d.className=b.label,c.appendChild(l),c.appendChild(d),r.appendChild(c)});const o=r.querySelectorAll("input");o.length&&o[0].focus()}const so=t=>(t instanceof Map?Array.from(t):Object.entries(t)).map(([n,r])=>[n,typeof r=="object"?so(r):r]),$l=(t,e)=>!!e&&e!=null&&e.toString()===t.toString(),Og=t=>{const e=z.innerParams.get(t);t.disableButtons(),e.input?Ll(t,"confirm"):ni(t,!0)},$g=t=>{const e=z.innerParams.get(t);t.disableButtons(),e.returnInputValueOnDeny?Ll(t,"deny"):ei(t,!1)},Lg=(t,e)=>{t.disableButtons(),e(De.cancel)},Ll=(t,e)=>{const n=z.innerParams.get(t);if(!n.input){fe(`The "input" parameter is needed to be set when using returnInputValueOn${jo(e)}`);return}const r=t.getInput(),o=Eg(t,n);n.inputValidator?Bg(t,o,e):r&&!r.checkValidity()?(t.enableButtons(),t.showValidationMessage(n.validationMessage||r.validationMessage)):e==="deny"?ei(t,o):ni(t,o)},Bg=(t,e,n)=>{const r=z.innerParams.get(t);t.disableInput(),Promise.resolve().then(()=>on(r.inputValidator(e,r.validationMessage))).then(i=>{t.enableButtons(),t.enableInput(),i?t.showValidationMessage(i):n==="deny"?ei(t,e):ni(t,e)})},ei=(t,e)=>{const n=z.innerParams.get(t);n.showLoaderOnDeny&&Se(pe()),n.preDeny?(t.isAwaitingPromise=!0,Promise.resolve().then(()=>on(n.preDeny(e,n.validationMessage))).then(o=>{o===!1?(t.hideLoading(),dn(t)):t.close({isDenied:!0,value:typeof o>"u"?e:o})}).catch(o=>Bl(t,o))):t.close({isDenied:!0,value:e})},Wi=(t,e)=>{t.close({isConfirmed:!0,value:e})},Bl=(t,e)=>{t.rejectPromise(e)},ni=(t,e)=>{const n=z.innerParams.get(t);n.showLoaderOnConfirm&&Se(),n.preConfirm?(t.resetValidationMessage(),t.isAwaitingPromise=!0,Promise.resolve().then(()=>on(n.preConfirm(e,n.validationMessage))).then(o=>{st(Yn())||o===!1?(t.hideLoading(),dn(t)):Wi(t,typeof o>"u"?e:o)}).catch(o=>Bl(t,o))):Wi(t,e)};function Mn(){const t=z.innerParams.get(this);if(!t)return;const e=z.domCache.get(this);tt(e.loader),tr()?t.icon&&J(Be()):Ig(e),ht([e.popup,e.actions],b.loading),e.popup.removeAttribute("aria-busy"),e.popup.removeAttribute("data-loading"),this.enableButtons()}const Ig=t=>{const e=t.loader.getAttribute("data-button-to-replace"),n=e?t.popup.getElementsByClassName(e):[];n.length?J(n[0],"inline-block"):sh()&&tt(t.actions)};function Il(){const t=z.innerParams.get(this),e=z.domCache.get(this);return e?er(e.popup,t.input):null}function Nl(t,e,n){const r=z.domCache.get(t);e.forEach(o=>{r[o].disabled=n})}function Dl(t,e){const n=F();!n||!t||(t.type==="radio"?n.querySelectorAll(`[name="${b.radio}"]`).forEach(o=>{o.disabled=e}):t.disabled=e)}function Ml(){Nl(this,["confirmButton","denyButton","cancelButton"],!1);const t=z.focusedElement.get(this);t instanceof HTMLElement&&document.activeElement===document.body&&t.focus(),z.focusedElement.delete(this)}function Fl(){z.focusedElement.set(this,document.activeElement),Nl(this,["confirmButton","denyButton","cancelButton"],!0)}function zl(){Dl(this.getInput(),!1)}function jl(){Dl(this.getInput(),!0)}function Ul(t){const e=z.domCache.get(this),n=z.innerParams.get(this);ft(e.validationMessage,t),e.validationMessage.className=b["validation-message"],n.customClass&&n.customClass.validationMessage&&M(e.validationMessage,n.customClass.validationMessage),J(e.validationMessage);const r=this.getInput();r&&(r.setAttribute("aria-invalid","true"),r.setAttribute("aria-describedby",b["validation-message"]),gl(r),M(r,b.inputerror))}function ql(){const t=z.domCache.get(this);t.validationMessage&&tt(t.validationMessage);const e=this.getInput();e&&(e.removeAttribute("aria-invalid"),e.removeAttribute("aria-describedby"),ht(e,b.inputerror))}const jt={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,draggable:!1,animation:!0,theme:"light",showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoFocus:!0,inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:!0,topLayer:!1},Ng=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","draggable","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","theme","willClose"],Dg={allowEnterKey:void 0},Mg=["allowOutsideClick","allowEnterKey","backdrop","draggable","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],Hl=t=>Object.prototype.hasOwnProperty.call(jt,t),Vl=t=>Ng.indexOf(t)!==-1,Wl=t=>Dg[t],Fg=t=>{Hl(t)||nt(`Unknown parameter "${t}"`)},zg=t=>{Mg.includes(t)&&nt(`The parameter "${t}" is incompatible with toasts`)},jg=t=>{const e=Wl(t);e&&ul(t,e)},Kl=t=>{t.backdrop===!1&&t.allowOutsideClick&&nt('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`'),t.theme&&!["light","dark","auto","minimal","borderless","bootstrap-4","bootstrap-4-light","bootstrap-4-dark","bootstrap-5","bootstrap-5-light","bootstrap-5-dark","material-ui","material-ui-light","material-ui-dark","embed-iframe","bulma","bulma-light","bulma-dark"].includes(t.theme)&&nt(`Invalid theme "${t.theme}"`);for(const e in t)Fg(e),t.toast&&zg(e),jg(e)};function Gl(t){const e=rt(),n=F(),r=z.innerParams.get(this);if(!n||Lt(n,r.hideClass.popup)){nt("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");return}const o=Ug(t),i=Object.assign({},r,o);Kl(i),e&&(e.dataset.swal2Theme=i.theme),kl(this,i),z.innerParams.set(this,i),Object.defineProperties(this,{params:{value:Object.assign({},this.params,t),writable:!1,enumerable:!0}})}const Ug=t=>{const e={};return Object.keys(t).forEach(n=>{if(Vl(n)){const r=t;e[n]=r[n]}else nt(`Invalid parameter to update: ${n}`)}),e};function Jl(){var t;const e=z.domCache.get(this),n=z.innerParams.get(this);if(!n){Ql(this);return}e.popup&&A.swalCloseEventFinishedCallback&&(A.swalCloseEventFinishedCallback(),delete A.swalCloseEventFinishedCallback),typeof n.didDestroy=="function"&&n.didDestroy(),(t=A.eventEmitter)===null||t===void 0||t.emit("didDestroy"),qg(this)}const qg=t=>{Ql(t),delete t.params,delete A.keydownHandler,delete A.keydownTarget,delete A.currentInstance},Ql=t=>{t.isAwaitingPromise?(hr(z,t),t.isAwaitingPromise=!0):(hr(ke,t),hr(z,t),delete t.isAwaitingPromise,delete t.disableButtons,delete t.enableButtons,delete t.getInput,delete t.disableInput,delete t.enableInput,delete t.hideLoading,delete t.disableLoading,delete t.showValidationMessage,delete t.resetValidationMessage,delete t.close,delete t.closePopup,delete t.closeModal,delete t.closeToast,delete t.rejectPromise,delete t.update,delete t._destroy)},hr=(t,e)=>{for(const n in t)t[n].delete(e)};var Hg=Object.freeze({__proto__:null,_destroy:Jl,close:zt,closeModal:zt,closePopup:zt,closeToast:zt,disableButtons:Fl,disableInput:jl,disableLoading:Mn,enableButtons:Ml,enableInput:zl,getInput:Il,handleAwaitingPromise:dn,hideLoading:Mn,rejectPromise:Ol,resetValidationMessage:ql,showValidationMessage:Ul,update:Gl});const Vg=(t,e,n)=>{t.toast?Wg(t,e,n):(Gg(e),Jg(e),Qg(t,e,n))},Wg=(t,e,n)=>{e.popup.onclick=()=>{t&&(Kg(t)||t.timer||t.input)||n(De.close)}},Kg=t=>!!(t.showConfirmButton||t.showDenyButton||t.showCancelButton||t.showCloseButton);let Fn=!1;const Gg=t=>{t.popup.onmousedown=()=>{t.container.onmouseup=function(e){t.container.onmouseup=()=>{},e.target===t.container&&(Fn=!0)}}},Jg=t=>{t.container.onmousedown=e=>{e.target===t.container&&e.preventDefault(),t.popup.onmouseup=function(n){t.popup.onmouseup=()=>{},(n.target===t.popup||n.target instanceof HTMLElement&&t.popup.contains(n.target))&&(Fn=!0)}}},Qg=(t,e,n)=>{e.container.onclick=r=>{if(Fn){Fn=!1;return}r.target===e.container&&Zn(t.allowOutsideClick)&&n(De.backdrop)}},Zg=t=>typeof t=="object"&&t!==null&&"jquery"in t,Ki=t=>t instanceof Element||Zg(t),Yg=t=>{const e={};return typeof t[0]=="object"&&!Ki(t[0])?Object.assign(e,t[0]):["title","html","icon"].forEach((n,r)=>{const o=t[r];typeof o=="string"||Ki(o)?e[n]=o:o!==void 0&&fe(`Unexpected type of ${n}! Expected "string" or "Element", got ${typeof o}`)}),e};function Xg(...t){return new this(...t)}function tm(t){class e extends this{_main(r,o){return super._main(r,Object.assign({},t,o))}}return e}const em=()=>A.timeout&&A.timeout.getTimerLeft(),Zl=()=>{if(A.timeout)return lh(),A.timeout.stop()},Yl=()=>{if(A.timeout){const t=A.timeout.start();return Qo(t),t}},nm=()=>{const t=A.timeout;return t&&(t.running?Zl():Yl())},rm=t=>{if(A.timeout){const e=A.timeout.increase(t);return Qo(e,!0),e}},om=()=>!!(A.timeout&&A.timeout.isRunning());let Gi=!1;const ao={};function im(t="data-swal-template"){ao[t]=this,Gi||(document.body.addEventListener("click",sm),Gi=!0)}const sm=t=>{for(let e=t.target;e&&e!==document;e=e.parentNode)for(const n in ao){const r=e.getAttribute&&e.getAttribute(n);if(r){ao[n].fire({template:r});return}}};class am{constructor(){this.events={}}_getHandlersByEventName(e){return typeof this.events[e]>"u"&&(this.events[e]=[]),this.events[e]}on(e,n){const r=this._getHandlersByEventName(e);r.includes(n)||r.push(n)}once(e,n){const r=(...o)=>{this.removeListener(e,r),n.apply(this,o)};this.on(e,r)}emit(e,...n){this._getHandlersByEventName(e).forEach(r=>{try{r.apply(this,n)}catch(o){console.error(o)}})}removeListener(e,n){const r=this._getHandlersByEventName(e),o=r.indexOf(n);o>-1&&r.splice(o,1)}removeAllListeners(e){this.events[e]!==void 0&&(this.events[e].length=0)}reset(){this.events={}}}A.eventEmitter=new am;const lm=(t,e)=>{A.eventEmitter&&A.eventEmitter.on(t,e)},cm=(t,e)=>{A.eventEmitter&&A.eventEmitter.once(t,e)},dm=(t,e)=>{if(A.eventEmitter){if(!t){A.eventEmitter.reset();return}e?A.eventEmitter.removeListener(t,e):A.eventEmitter.removeAllListeners(t)}};var um=Object.freeze({__proto__:null,argsToParams:Yg,bindClickHandler:im,clickCancel:Zh,clickConfirm:Sl,clickDeny:Qh,enableLoading:Se,fire:Xg,getActions:an,getCancelButton:Ie,getCloseButton:Wo,getConfirmButton:kt,getContainer:rt,getDenyButton:pe,getFocusableElements:Ko,getFooter:hl,getHtmlContainer:Ho,getIcon:Be,getIconContent:eh,getImage:pl,getInputLabel:nh,getLoader:Ne,getPopup:F,getProgressSteps:Vo,getTimerLeft:em,getTimerProgressBar:Xn,getTitle:fl,getValidationMessage:Yn,increaseTimer:rm,isDeprecatedParameter:Wl,isLoading:oh,isTimerRunning:om,isUpdatableParameter:Vl,isValidParameter:Hl,isVisible:Jh,mixin:tm,off:dm,on:lm,once:cm,resumeTimer:Yl,showLoading:Se,stopTimer:Zl,toggleTimer:nm});class fm{constructor(e,n){this.callback=e,this.remaining=n,this.running=!1,this.start()}start(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}stop(){return this.started&&this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date().getTime()-this.started.getTime()),this.remaining}increase(e){const n=this.running;return n&&this.stop(),this.remaining+=e,n&&this.start(),this.remaining}getTimerLeft(){return this.running&&(this.stop(),this.start()),this.remaining}isRunning(){return this.running}}const Xl=["swal-title","swal-html","swal-footer"],pm=t=>{const e=typeof t.template=="string"?document.querySelector(t.template):t.template;if(!e)return{};const n=e.content;return _m(n),Object.assign(hm(n),gm(n),mm(n),wm(n),bm(n),ym(n),xm(n,Xl))},hm=t=>{const e={};return Array.from(t.querySelectorAll("swal-param")).forEach(r=>{ce(r,["name","value"]);const o=r.getAttribute("name"),i=r.getAttribute("value");!o||!i||(o in jt&&typeof jt[o]=="boolean"?e[o]=i!=="false":o in jt&&typeof jt[o]=="object"?e[o]=JSON.parse(i):e[o]=i)}),e},gm=t=>{const e={};return Array.from(t.querySelectorAll("swal-function-param")).forEach(r=>{const o=r.getAttribute("name"),i=r.getAttribute("value");!o||!i||(e[o]=new Function(`return ${i}`)())}),e},mm=t=>{const e={};return Array.from(t.querySelectorAll("swal-button")).forEach(r=>{ce(r,["type","color","aria-label"]);const o=r.getAttribute("type");if(!o||!["confirm","cancel","deny"].includes(o))return;e[`${o}ButtonText`]=r.innerHTML,e[`show${jo(o)}Button`]=!0;const i=r.getAttribute("color");i!==null&&(e[`${o}ButtonColor`]=i);const s=r.getAttribute("aria-label");s!==null&&(e[`${o}ButtonAriaLabel`]=s)}),e},wm=t=>{const e={},n=t.querySelector("swal-image");if(n){ce(n,["src","width","height","alt"]);const r=n.getAttribute("src");r!==null&&(e.imageUrl=r||void 0);const o=n.getAttribute("width");o!==null&&(e.imageWidth=o||void 0);const i=n.getAttribute("height");i!==null&&(e.imageHeight=i||void 0);const s=n.getAttribute("alt");s!==null&&(e.imageAlt=s||void 0)}return e},bm=t=>{const e={},n=t.querySelector("swal-icon");return n&&(ce(n,["type","color"]),n.hasAttribute("type")&&(e.icon=n.getAttribute("type")),n.hasAttribute("color")&&(e.iconColor=n.getAttribute("color")),e.iconHtml=n.innerHTML),e},ym=t=>{const e={},n=t.querySelector("swal-input");n&&(ce(n,["type","label","placeholder","value"]),e.input=n.getAttribute("type")||"text",n.hasAttribute("label")&&(e.inputLabel=n.getAttribute("label")),n.hasAttribute("placeholder")&&(e.inputPlaceholder=n.getAttribute("placeholder")),n.hasAttribute("value")&&(e.inputValue=n.getAttribute("value")));const r=Array.from(t.querySelectorAll("swal-input-option"));return r.length&&(e.inputOptions={},r.forEach(o=>{ce(o,["value"]);const i=o.getAttribute("value");if(!i)return;const s=o.innerHTML;e.inputOptions[i]=s})),e},xm=(t,e)=>{const n={};for(const r in e){const o=e[r],i=t.querySelector(o);i&&(ce(i,[]),n[o.replace(/^swal-/,"")]=i.innerHTML.trim())}return n},_m=t=>{const e=Xl.concat(["swal-param","swal-function-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);Array.from(t.children).forEach(n=>{const r=n.tagName.toLowerCase();e.includes(r)||nt(`Unrecognized element <${r}>`)})},ce=(t,e)=>{Array.from(t.attributes).forEach(n=>{e.indexOf(n.name)===-1&&nt([`Unrecognized attribute "${n.name}" on <${t.tagName.toLowerCase()}>.`,`${e.length?`Allowed attributes are: ${e.join(", ")}`:"To set the value, use HTML within the element."}`])})},tc=10,vm=t=>{var e,n;const r=rt(),o=F();if(!r||!o)return;typeof t.willOpen=="function"&&t.willOpen(o),(e=A.eventEmitter)===null||e===void 0||e.emit("willOpen",o);const s=window.getComputedStyle(document.body).overflowY;if(km(r,o,t),setTimeout(()=>{Em(r,o)},tc),Go()&&(Cm(r,t.scrollbarPadding!==void 0?t.scrollbarPadding:!1,s),ig()),sg&&t.backdrop===!1&&o.scrollHeight>r.clientHeight&&(r.style.pointerEvents="auto"),!tr()&&!A.previousActiveElement&&(A.previousActiveElement=document.activeElement),typeof t.didOpen=="function"){const a=t.didOpen;setTimeout(()=>a(o))}(n=A.eventEmitter)===null||n===void 0||n.emit("didOpen",o)},zn=t=>{const e=F();if(!e||t.target!==e)return;const n=rt();n&&(e.removeEventListener("animationend",zn),e.removeEventListener("transitionend",zn),n.style.overflowY="auto",ht(n,b["no-transition"]))},Em=(t,e)=>{wl(e)?(t.style.overflowY="hidden",e.addEventListener("animationend",zn),e.addEventListener("transitionend",zn)):t.style.overflowY="auto"},Cm=(t,e,n)=>{ag(),e&&n!=="hidden"&&hg(n),setTimeout(()=>{t.scrollTop=0})},km=(t,e,n)=>{var r;(r=n.showClass)!==null&&r!==void 0&&r.backdrop&&M(t,n.showClass.backdrop),n.animation?(e.style.setProperty("opacity","0","important"),J(e,"grid"),setTimeout(()=>{var o;(o=n.showClass)!==null&&o!==void 0&&o.popup&&M(e,n.showClass.popup),e.style.removeProperty("opacity")},tc)):J(e,"grid"),M([document.documentElement,document.body],b.shown),n.heightAuto&&n.backdrop&&!n.toast&&M([document.documentElement,document.body],b["height-auto"])};var Ji={email:(t,e)=>/^[a-zA-Z0-9.+_'-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]+$/.test(t)?Promise.resolve():Promise.resolve(e||"Invalid email address"),url:(t,e)=>/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(t)?Promise.resolve():Promise.resolve(e||"Invalid URL")};function Sm(t){t.inputValidator||(t.input==="email"&&(t.inputValidator=Ji.email),t.input==="url"&&(t.inputValidator=Ji.url))}function Am(t){(!t.target||typeof t.target=="string"&&!document.querySelector(t.target)||typeof t.target!="string"&&!t.target.appendChild)&&(nt('Target parameter is not valid, defaulting to "body"'),t.target="body")}function Tm(t){Sm(t),t.showLoaderOnConfirm&&!t.preConfirm&&nt(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`),Am(t),typeof t.title=="string"&&(t.title=t.title.split(`
`).join("<br />")),mh(t)}let Et;var xn=new WeakMap;class K{constructor(...e){if(Wp(this,xn,Promise.resolve({isConfirmed:!1,isDenied:!1,isDismissed:!0})),typeof window>"u")return;Et=this;const n=Object.freeze(this.constructor.argsToParams(e));this.params=n,this.isAwaitingPromise=!1,Kp(xn,this,this._main(Et.params))}_main(e,n={}){if(Kl(Object.assign({},n,e)),A.currentInstance){const i=ke.swalPromiseResolve.get(A.currentInstance),{isAwaitingPromise:s}=A.currentInstance;A.currentInstance._destroy(),s||i({isDismissed:!0}),Go()&&Rl()}A.currentInstance=Et;const r=Pm(e,n);Tm(r),Object.freeze(r),A.timeout&&(A.timeout.stop(),delete A.timeout),clearTimeout(A.restoreFocusTimeout);const o=Om(Et);return kl(Et,r),z.innerParams.set(Et,r),Rm(Et,o,r)}then(e){return Fi(xn,this).then(e)}finally(e){return Fi(xn,this).finally(e)}}const Rm=(t,e,n)=>new Promise((r,o)=>{const i=s=>{t.close({isDismissed:!0,dismiss:s,isConfirmed:!1,isDenied:!1})};ke.swalPromiseResolve.set(t,r),ke.swalPromiseReject.set(t,o),e.confirmButton.onclick=()=>{Og(t)},e.denyButton.onclick=()=>{$g(t)},e.cancelButton.onclick=()=>{Lg(t,i)},e.closeButton.onclick=()=>{i(De.close)},Vg(n,e,i),Yh(A,n,i),vg(t,n),vm(n),$m(A,n,i),Lm(e,n),setTimeout(()=>{e.container.scrollTop=0})}),Pm=(t,e)=>{const n=pm(t),r=Object.assign({},jt,e,n,t);return r.showClass=Object.assign({},jt.showClass,r.showClass),r.hideClass=Object.assign({},jt.hideClass,r.hideClass),r.animation===!1&&(r.showClass={backdrop:"swal2-noanimation"},r.hideClass={}),r},Om=t=>{const e={popup:F(),container:rt(),actions:an(),confirmButton:kt(),denyButton:pe(),cancelButton:Ie(),loader:Ne(),closeButton:Wo(),validationMessage:Yn(),progressSteps:Vo()};return z.domCache.set(t,e),e},$m=(t,e,n)=>{const r=Xn();tt(r),e.timer&&(t.timeout=new fm(()=>{n("timer"),delete t.timeout},e.timer),e.timerProgressBar&&r&&(J(r),dt(r,e,"timerProgressBar"),setTimeout(()=>{t.timeout&&t.timeout.running&&Qo(e.timer)})))},Lm=(t,e)=>{if(!e.toast){if(!Zn(e.allowEnterKey)){ul("allowEnterKey","preConfirm: () => false"),t.popup.focus();return}Bm(t)||Im(t,e)||io(-1,1)}},Bm=t=>{const e=Array.from(t.popup.querySelectorAll("[autofocus]"));for(const n of e)if(n instanceof HTMLElement&&st(n))return n.focus(),!0;return!1},Im=(t,e)=>e.focusDeny&&st(t.denyButton)?(t.denyButton.focus(),!0):e.focusCancel&&st(t.cancelButton)?(t.cancelButton.focus(),!0):e.focusConfirm&&st(t.confirmButton)?(t.confirmButton.focus(),!0):!1;K.prototype.disableButtons=Fl;K.prototype.enableButtons=Ml;K.prototype.getInput=Il;K.prototype.disableInput=jl;K.prototype.enableInput=zl;K.prototype.hideLoading=Mn;K.prototype.disableLoading=Mn;K.prototype.showValidationMessage=Ul;K.prototype.resetValidationMessage=ql;K.prototype.close=zt;K.prototype.closePopup=zt;K.prototype.closeModal=zt;K.prototype.closeToast=zt;K.prototype.rejectPromise=Ol;K.prototype.update=Gl;K.prototype._destroy=Jl;Object.assign(K,um);Object.keys(Hg).forEach(t=>{K[t]=function(...e){if(Et&&Et[t])return Et[t](...e)}});K.DismissReason=De;K.version="11.26.25";const de=K;de.default=de;typeof document<"u"&&(function(t,e){var n=t.createElement("style");if(t.getElementsByTagName("head")[0].appendChild(n),n.styleSheet)n.styleSheet.disabled||(n.styleSheet.cssText=e);else try{n.innerHTML=e}catch{n.innerText=e}})(document,':root{--swal2-outline: 0 0 0 3px rgba(100, 150, 200, 0.5);--swal2-container-padding: 0.625em;--swal2-backdrop: rgba(0, 0, 0, 0.4);--swal2-backdrop-transition: background-color 0.15s;--swal2-width: 32em;--swal2-padding: 0 0 1.25em;--swal2-border: none;--swal2-border-radius: 0.3125rem;--swal2-background: white;--swal2-color: #545454;--swal2-show-animation: swal2-show 0.3s;--swal2-hide-animation: swal2-hide 0.15s forwards;--swal2-icon-zoom: 1;--swal2-title-padding: 0.8em 1em 0;--swal2-html-container-padding: 1em 1.6em 0.3em;--swal2-input-border: 1px solid #d9d9d9;--swal2-input-border-radius: 0.1875em;--swal2-input-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px transparent;--swal2-input-background: transparent;--swal2-input-transition: border-color 0.2s, box-shadow 0.2s;--swal2-input-hover-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px transparent;--swal2-input-focus-border: 1px solid #b4dbed;--swal2-input-focus-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px rgba(100, 150, 200, 0.5);--swal2-progress-step-background: #add8e6;--swal2-validation-message-background: #f0f0f0;--swal2-validation-message-color: #666;--swal2-footer-border-color: #eee;--swal2-footer-background: transparent;--swal2-footer-color: inherit;--swal2-timer-progress-bar-background: rgba(0, 0, 0, 0.3);--swal2-close-button-position: initial;--swal2-close-button-inset: auto;--swal2-close-button-font-size: 2.5em;--swal2-close-button-color: #ccc;--swal2-close-button-transition: color 0.2s, box-shadow 0.2s;--swal2-close-button-outline: initial;--swal2-close-button-box-shadow: inset 0 0 0 3px transparent;--swal2-close-button-focus-box-shadow: inset var(--swal2-outline);--swal2-close-button-hover-transform: none;--swal2-actions-justify-content: center;--swal2-actions-width: auto;--swal2-actions-margin: 1.25em auto 0;--swal2-actions-padding: 0;--swal2-actions-border-radius: 0;--swal2-actions-background: transparent;--swal2-action-button-transition: background-color 0.2s, box-shadow 0.2s;--swal2-action-button-hover: black 10%;--swal2-action-button-active: black 10%;--swal2-confirm-button-box-shadow: none;--swal2-confirm-button-border-radius: 0.25em;--swal2-confirm-button-background-color: #7066e0;--swal2-confirm-button-color: #fff;--swal2-deny-button-box-shadow: none;--swal2-deny-button-border-radius: 0.25em;--swal2-deny-button-background-color: #dc3741;--swal2-deny-button-color: #fff;--swal2-cancel-button-box-shadow: none;--swal2-cancel-button-border-radius: 0.25em;--swal2-cancel-button-background-color: #6e7881;--swal2-cancel-button-color: #fff;--swal2-toast-show-animation: swal2-toast-show 0.5s;--swal2-toast-hide-animation: swal2-toast-hide 0.1s forwards;--swal2-toast-border: none;--swal2-toast-box-shadow: 0 0 1px hsl(0deg 0% 0% / 0.075), 0 1px 2px hsl(0deg 0% 0% / 0.075), 1px 2px 4px hsl(0deg 0% 0% / 0.075), 1px 3px 8px hsl(0deg 0% 0% / 0.075), 2px 4px 16px hsl(0deg 0% 0% / 0.075)}[data-swal2-theme=dark]{--swal2-dark-theme-black: #19191a;--swal2-dark-theme-white: #e1e1e1;--swal2-background: var(--swal2-dark-theme-black);--swal2-color: var(--swal2-dark-theme-white);--swal2-footer-border-color: #555;--swal2-input-background: color-mix(in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10%);--swal2-validation-message-background: color-mix( in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10% );--swal2-validation-message-color: var(--swal2-dark-theme-white);--swal2-timer-progress-bar-background: rgba(255, 255, 255, 0.7)}@media(prefers-color-scheme: dark){[data-swal2-theme=auto]{--swal2-dark-theme-black: #19191a;--swal2-dark-theme-white: #e1e1e1;--swal2-background: var(--swal2-dark-theme-black);--swal2-color: var(--swal2-dark-theme-white);--swal2-footer-border-color: #555;--swal2-input-background: color-mix(in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10%);--swal2-validation-message-background: color-mix( in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10% );--swal2-validation-message-color: var(--swal2-dark-theme-white);--swal2-timer-progress-bar-background: rgba(255, 255, 255, 0.7)}}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:auto}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px var(--swal2-backdrop)}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}@media print{body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown) .swal2-container{position:static !important}}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:var(--swal2-container-padding);overflow-x:hidden;transition:var(--swal2-backdrop-transition);-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:var(--swal2-backdrop)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;place-self:start center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;place-self:start end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;place-self:center center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;place-self:center end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;place-self:end center}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;place-self:end end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container)[popover]{width:auto;border:0}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:var(--swal2-width);max-width:100%;padding:var(--swal2-padding);border:var(--swal2-border);border-radius:var(--swal2-border-radius);background:var(--swal2-background);color:var(--swal2-color);font-family:inherit;font-size:1rem}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) div:where(.swal2-popup).swal2-draggable{cursor:grab}div:where(.swal2-container) div:where(.swal2-popup).swal2-draggable div:where(.swal2-icon){cursor:grab}div:where(.swal2-container) div:where(.swal2-popup).swal2-dragging{cursor:grabbing}div:where(.swal2-container) div:where(.swal2-popup).swal2-dragging div:where(.swal2-icon){cursor:grabbing}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:var(--swal2-title-padding);color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;overflow-wrap:break-word;cursor:initial}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:var(--swal2-actions-justify-content);width:var(--swal2-actions-width);margin:var(--swal2-actions-margin);padding:var(--swal2-actions-padding);border-radius:var(--swal2-actions-border-radius);background:var(--swal2-actions-background)}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:var(--swal2-action-button-transition);border:none;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm){border-radius:var(--swal2-confirm-button-border-radius);background:initial;background-color:var(--swal2-confirm-button-background-color);box-shadow:var(--swal2-confirm-button-box-shadow);color:var(--swal2-confirm-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):hover{background-color:color-mix(in srgb, var(--swal2-confirm-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):active{background-color:color-mix(in srgb, var(--swal2-confirm-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny){border-radius:var(--swal2-deny-button-border-radius);background:initial;background-color:var(--swal2-deny-button-background-color);box-shadow:var(--swal2-deny-button-box-shadow);color:var(--swal2-deny-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny):hover{background-color:color-mix(in srgb, var(--swal2-deny-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny):active{background-color:color-mix(in srgb, var(--swal2-deny-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel){border-radius:var(--swal2-cancel-button-border-radius);background:initial;background-color:var(--swal2-cancel-button-background-color);box-shadow:var(--swal2-cancel-button-box-shadow);color:var(--swal2-cancel-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):hover{background-color:color-mix(in srgb, var(--swal2-cancel-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):active{background-color:color-mix(in srgb, var(--swal2-cancel-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):focus-visible{outline:none;box-shadow:var(--swal2-action-button-focus-box-shadow)}div:where(.swal2-container) button:where(.swal2-styled)[disabled]:not(.swal2-loading){opacity:.4}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid var(--swal2-footer-border-color);background:var(--swal2-footer-background);color:var(--swal2-footer-color);font-size:1em;text-align:center;cursor:initial}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:var(--swal2-border-radius);border-bottom-left-radius:var(--swal2-border-radius)}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:var(--swal2-timer-progress-bar-background)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em;cursor:initial}div:where(.swal2-container) button:where(.swal2-close){position:var(--swal2-close-button-position);inset:var(--swal2-close-button-inset);z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:var(--swal2-close-button-transition);border:none;border-radius:var(--swal2-border-radius);outline:var(--swal2-close-button-outline);background:rgba(0,0,0,0);color:var(--swal2-close-button-color);font-family:monospace;font-size:var(--swal2-close-button-font-size);cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:var(--swal2-close-button-hover-transform);background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus-visible{outline:none;box-shadow:var(--swal2-close-button-focus-box-shadow)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-html-container){z-index:1;justify-content:center;margin:0;padding:var(--swal2-html-container-padding);overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;overflow-wrap:break-word;word-break:break-word;cursor:initial}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:var(--swal2-input-transition);border:var(--swal2-input-border);border-radius:var(--swal2-input-border-radius);background:var(--swal2-input-background);box-shadow:var(--swal2-input-box-shadow);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):hover,div:where(.swal2-container) input:where(.swal2-file):hover,div:where(.swal2-container) textarea:where(.swal2-textarea):hover{box-shadow:var(--swal2-input-hover-box-shadow)}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:var(--swal2-input-focus-border);outline:none;box-shadow:var(--swal2-input-focus-box-shadow)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:var(--swal2-background)}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:var(--swal2-input-background);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:var(--swal2-input-background);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:var(--swal2-background);color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:var(--swal2-validation-message-background);color:var(--swal2-validation-message-color);font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:var(--swal2-progress-step-background);color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:var(--swal2-progress-step-background)}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;zoom:var(--swal2-icon-zoom);border:.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}div:where(.swal2-icon).swal2-warning{border-color:#f8bb86;color:#f8bb86}div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}div:where(.swal2-icon).swal2-info{border-color:#3fc3ee;color:#3fc3ee}div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}div:where(.swal2-icon).swal2-question{border-color:#87adbd;color:#87adbd}div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:var(--swal2-show-animation)}.swal2-hide{animation:var(--swal2-hide-animation)}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;border:var(--swal2-toast-border);background:var(--swal2-background);box-shadow:var(--swal2-toast-box-shadow);pointer-events:auto}.swal2-toast>*{grid-column:2}.swal2-toast h2:where(.swal2-title){margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-toast .swal2-loading{justify-content:center}.swal2-toast input:where(.swal2-input){height:2em;margin:.5em;font-size:1em}.swal2-toast .swal2-validation-message{font-size:1em}.swal2-toast div:where(.swal2-footer){margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-toast button:where(.swal2-close){grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-toast div:where(.swal2-html-container){margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-toast div:where(.swal2-html-container):empty{padding:0}.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-toast div:where(.swal2-actions){justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-toast button:where(.swal2-styled){margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;border-radius:50%}.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}.swal2-toast.swal2-show{animation:var(--swal2-toast-show-animation)}.swal2-toast.swal2-hide{animation:var(--swal2-toast-hide-animation)}@keyframes swal2-show{0%{transform:translate3d(0, -50px, 0) scale(0.9);opacity:0}100%{transform:translate3d(0, 0, 0) scale(1);opacity:1}}@keyframes swal2-hide{0%{transform:translate3d(0, 0, 0) scale(1);opacity:1}100%{transform:translate3d(0, -50px, 0) scale(0.9);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}');function Nm(t=""){if(!t)return{score:0,label:"Belum diisi",color:"bg-gray-200 text-gray-400",barColor:"bg-gray-200",width:"0%",checks:{length:!1,uppercase:!1,lowercase:!1,number:!1,special:!1}};const e={length:t.length>=8,uppercase:/[A-Z]/.test(t),lowercase:/[a-z]/.test(t),number:/[0-9]/.test(t),special:/[^A-Za-z0-9]/.test(t)};let n=0;return e.length&&n++,e.uppercase&&e.lowercase&&n++,e.number&&n++,e.special&&n++,n<=1?{score:1,label:"Lemah",color:"text-rose-600",barColor:"bg-rose-500",width:"25%",checks:e}:n===2?{score:2,label:"Sedang",color:"text-amber-600",barColor:"bg-amber-500",width:"50%",checks:e}:n===3?{score:3,label:"Kuat",color:"text-emerald-600",barColor:"bg-emerald-500",width:"75%",checks:e}:{score:4,label:"Sangat Kuat",color:"text-teal-600 font-bold",barColor:"bg-teal-600",width:"100%",checks:e}}function Dm(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var be={},gr,Qi;function Mm(){return Qi||(Qi=1,gr=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then}),gr}var mr={},Dt={},Zi;function he(){if(Zi)return Dt;Zi=1;let t;const e=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];return Dt.getSymbolSize=function(r){if(!r)throw new Error('"version" cannot be null or undefined');if(r<1||r>40)throw new Error('"version" should be in range from 1 to 40');return r*4+17},Dt.getSymbolTotalCodewords=function(r){return e[r]},Dt.getBCHDigit=function(n){let r=0;for(;n!==0;)r++,n>>>=1;return r},Dt.setToSJISFunction=function(r){if(typeof r!="function")throw new Error('"toSJISFunc" is not a valid function.');t=r},Dt.isKanjiModeEnabled=function(){return typeof t<"u"},Dt.toSJIS=function(r){return t(r)},Dt}var wr={},Yi;function ri(){return Yi||(Yi=1,(function(t){t.L={bit:1},t.M={bit:0},t.Q={bit:3},t.H={bit:2};function e(n){if(typeof n!="string")throw new Error("Param is not a string");switch(n.toLowerCase()){case"l":case"low":return t.L;case"m":case"medium":return t.M;case"q":case"quartile":return t.Q;case"h":case"high":return t.H;default:throw new Error("Unknown EC Level: "+n)}}t.isValid=function(r){return r&&typeof r.bit<"u"&&r.bit>=0&&r.bit<4},t.from=function(r,o){if(t.isValid(r))return r;try{return e(r)}catch{return o}}})(wr)),wr}var br,Xi;function Fm(){if(Xi)return br;Xi=1;function t(){this.buffer=[],this.length=0}return t.prototype={get:function(e){const n=Math.floor(e/8);return(this.buffer[n]>>>7-e%8&1)===1},put:function(e,n){for(let r=0;r<n;r++)this.putBit((e>>>n-r-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(e){const n=Math.floor(this.length/8);this.buffer.length<=n&&this.buffer.push(0),e&&(this.buffer[n]|=128>>>this.length%8),this.length++}},br=t,br}var yr,ts;function zm(){if(ts)return yr;ts=1;function t(e){if(!e||e<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=e,this.data=new Uint8Array(e*e),this.reservedBit=new Uint8Array(e*e)}return t.prototype.set=function(e,n,r,o){const i=e*this.size+n;this.data[i]=r,o&&(this.reservedBit[i]=!0)},t.prototype.get=function(e,n){return this.data[e*this.size+n]},t.prototype.xor=function(e,n,r){this.data[e*this.size+n]^=r},t.prototype.isReserved=function(e,n){return this.reservedBit[e*this.size+n]},yr=t,yr}var xr={},es;function jm(){return es||(es=1,(function(t){const e=he().getSymbolSize;t.getRowColCoords=function(r){if(r===1)return[];const o=Math.floor(r/7)+2,i=e(r),s=i===145?26:Math.ceil((i-13)/(2*o-2))*2,a=[i-7];for(let l=1;l<o-1;l++)a[l]=a[l-1]-s;return a.push(6),a.reverse()},t.getPositions=function(r){const o=[],i=t.getRowColCoords(r),s=i.length;for(let a=0;a<s;a++)for(let l=0;l<s;l++)a===0&&l===0||a===0&&l===s-1||a===s-1&&l===0||o.push([i[a],i[l]]);return o}})(xr)),xr}var _r={},ns;function Um(){if(ns)return _r;ns=1;const t=he().getSymbolSize,e=7;return _r.getPositions=function(r){const o=t(r);return[[0,0],[o-e,0],[0,o-e]]},_r}var vr={},rs;function qm(){return rs||(rs=1,(function(t){t.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const e={N1:3,N2:3,N3:40,N4:10};t.isValid=function(o){return o!=null&&o!==""&&!isNaN(o)&&o>=0&&o<=7},t.from=function(o){return t.isValid(o)?parseInt(o,10):void 0},t.getPenaltyN1=function(o){const i=o.size;let s=0,a=0,l=0,c=null,d=null;for(let u=0;u<i;u++){a=l=0,c=d=null;for(let g=0;g<i;g++){let h=o.get(u,g);h===c?a++:(a>=5&&(s+=e.N1+(a-5)),c=h,a=1),h=o.get(g,u),h===d?l++:(l>=5&&(s+=e.N1+(l-5)),d=h,l=1)}a>=5&&(s+=e.N1+(a-5)),l>=5&&(s+=e.N1+(l-5))}return s},t.getPenaltyN2=function(o){const i=o.size;let s=0;for(let a=0;a<i-1;a++)for(let l=0;l<i-1;l++){const c=o.get(a,l)+o.get(a,l+1)+o.get(a+1,l)+o.get(a+1,l+1);(c===4||c===0)&&s++}return s*e.N2},t.getPenaltyN3=function(o){const i=o.size;let s=0,a=0,l=0;for(let c=0;c<i;c++){a=l=0;for(let d=0;d<i;d++)a=a<<1&2047|o.get(c,d),d>=10&&(a===1488||a===93)&&s++,l=l<<1&2047|o.get(d,c),d>=10&&(l===1488||l===93)&&s++}return s*e.N3},t.getPenaltyN4=function(o){let i=0;const s=o.data.length;for(let l=0;l<s;l++)i+=o.data[l];return Math.abs(Math.ceil(i*100/s/5)-10)*e.N4};function n(r,o,i){switch(r){case t.Patterns.PATTERN000:return(o+i)%2===0;case t.Patterns.PATTERN001:return o%2===0;case t.Patterns.PATTERN010:return i%3===0;case t.Patterns.PATTERN011:return(o+i)%3===0;case t.Patterns.PATTERN100:return(Math.floor(o/2)+Math.floor(i/3))%2===0;case t.Patterns.PATTERN101:return o*i%2+o*i%3===0;case t.Patterns.PATTERN110:return(o*i%2+o*i%3)%2===0;case t.Patterns.PATTERN111:return(o*i%3+(o+i)%2)%2===0;default:throw new Error("bad maskPattern:"+r)}}t.applyMask=function(o,i){const s=i.size;for(let a=0;a<s;a++)for(let l=0;l<s;l++)i.isReserved(l,a)||i.xor(l,a,n(o,l,a))},t.getBestMask=function(o,i){const s=Object.keys(t.Patterns).length;let a=0,l=1/0;for(let c=0;c<s;c++){i(c),t.applyMask(c,o);const d=t.getPenaltyN1(o)+t.getPenaltyN2(o)+t.getPenaltyN3(o)+t.getPenaltyN4(o);t.applyMask(c,o),d<l&&(l=d,a=c)}return a}})(vr)),vr}var _n={},os;function ec(){if(os)return _n;os=1;const t=ri(),e=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],n=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];return _n.getBlocksCount=function(o,i){switch(i){case t.L:return e[(o-1)*4+0];case t.M:return e[(o-1)*4+1];case t.Q:return e[(o-1)*4+2];case t.H:return e[(o-1)*4+3];default:return}},_n.getTotalCodewordsCount=function(o,i){switch(i){case t.L:return n[(o-1)*4+0];case t.M:return n[(o-1)*4+1];case t.Q:return n[(o-1)*4+2];case t.H:return n[(o-1)*4+3];default:return}},_n}var Er={},Ve={},is;function Hm(){if(is)return Ve;is=1;const t=new Uint8Array(512),e=new Uint8Array(256);return(function(){let r=1;for(let o=0;o<255;o++)t[o]=r,e[r]=o,r<<=1,r&256&&(r^=285);for(let o=255;o<512;o++)t[o]=t[o-255]})(),Ve.log=function(r){if(r<1)throw new Error("log("+r+")");return e[r]},Ve.exp=function(r){return t[r]},Ve.mul=function(r,o){return r===0||o===0?0:t[e[r]+e[o]]},Ve}var ss;function Vm(){return ss||(ss=1,(function(t){const e=Hm();t.mul=function(r,o){const i=new Uint8Array(r.length+o.length-1);for(let s=0;s<r.length;s++)for(let a=0;a<o.length;a++)i[s+a]^=e.mul(r[s],o[a]);return i},t.mod=function(r,o){let i=new Uint8Array(r);for(;i.length-o.length>=0;){const s=i[0];for(let l=0;l<o.length;l++)i[l]^=e.mul(o[l],s);let a=0;for(;a<i.length&&i[a]===0;)a++;i=i.slice(a)}return i},t.generateECPolynomial=function(r){let o=new Uint8Array([1]);for(let i=0;i<r;i++)o=t.mul(o,new Uint8Array([1,e.exp(i)]));return o}})(Er)),Er}var Cr,as;function Wm(){if(as)return Cr;as=1;const t=Vm();function e(n){this.genPoly=void 0,this.degree=n,this.degree&&this.initialize(this.degree)}return e.prototype.initialize=function(r){this.degree=r,this.genPoly=t.generateECPolynomial(this.degree)},e.prototype.encode=function(r){if(!this.genPoly)throw new Error("Encoder not initialized");const o=new Uint8Array(r.length+this.degree);o.set(r);const i=t.mod(o,this.genPoly),s=this.degree-i.length;if(s>0){const a=new Uint8Array(this.degree);return a.set(i,s),a}return i},Cr=e,Cr}var kr={},Sr={},Ar={},ls;function nc(){return ls||(ls=1,Ar.isValid=function(e){return!isNaN(e)&&e>=1&&e<=40}),Ar}var _t={},cs;function rc(){if(cs)return _t;cs=1;const t="[0-9]+",e="[A-Z $%*+\\-./:]+";let n="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";n=n.replace(/u/g,"\\u");const r="(?:(?![A-Z0-9 $%*+\\-./:]|"+n+`)(?:.|[\r
]))+`;_t.KANJI=new RegExp(n,"g"),_t.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),_t.BYTE=new RegExp(r,"g"),_t.NUMERIC=new RegExp(t,"g"),_t.ALPHANUMERIC=new RegExp(e,"g");const o=new RegExp("^"+n+"$"),i=new RegExp("^"+t+"$"),s=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");return _t.testKanji=function(l){return o.test(l)},_t.testNumeric=function(l){return i.test(l)},_t.testAlphanumeric=function(l){return s.test(l)},_t}var ds;function ge(){return ds||(ds=1,(function(t){const e=nc(),n=rc();t.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},t.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},t.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},t.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},t.MIXED={bit:-1},t.getCharCountIndicator=function(i,s){if(!i.ccBits)throw new Error("Invalid mode: "+i);if(!e.isValid(s))throw new Error("Invalid version: "+s);return s>=1&&s<10?i.ccBits[0]:s<27?i.ccBits[1]:i.ccBits[2]},t.getBestModeForData=function(i){return n.testNumeric(i)?t.NUMERIC:n.testAlphanumeric(i)?t.ALPHANUMERIC:n.testKanji(i)?t.KANJI:t.BYTE},t.toString=function(i){if(i&&i.id)return i.id;throw new Error("Invalid mode")},t.isValid=function(i){return i&&i.bit&&i.ccBits};function r(o){if(typeof o!="string")throw new Error("Param is not a string");switch(o.toLowerCase()){case"numeric":return t.NUMERIC;case"alphanumeric":return t.ALPHANUMERIC;case"kanji":return t.KANJI;case"byte":return t.BYTE;default:throw new Error("Unknown mode: "+o)}}t.from=function(i,s){if(t.isValid(i))return i;try{return r(i)}catch{return s}}})(Sr)),Sr}var us;function Km(){return us||(us=1,(function(t){const e=he(),n=ec(),r=ri(),o=ge(),i=nc(),s=7973,a=e.getBCHDigit(s);function l(g,h,w){for(let m=1;m<=40;m++)if(h<=t.getCapacity(m,w,g))return m}function c(g,h){return o.getCharCountIndicator(g,h)+4}function d(g,h){let w=0;return g.forEach(function(m){const y=c(m.mode,h);w+=y+m.getBitsLength()}),w}function u(g,h){for(let w=1;w<=40;w++)if(d(g,w)<=t.getCapacity(w,h,o.MIXED))return w}t.from=function(h,w){return i.isValid(h)?parseInt(h,10):w},t.getCapacity=function(h,w,m){if(!i.isValid(h))throw new Error("Invalid QR Code version");typeof m>"u"&&(m=o.BYTE);const y=e.getSymbolTotalCodewords(h),p=n.getTotalCodewordsCount(h,w),x=(y-p)*8;if(m===o.MIXED)return x;const _=x-c(m,h);switch(m){case o.NUMERIC:return Math.floor(_/10*3);case o.ALPHANUMERIC:return Math.floor(_/11*2);case o.KANJI:return Math.floor(_/13);case o.BYTE:default:return Math.floor(_/8)}},t.getBestVersionForData=function(h,w){let m;const y=r.from(w,r.M);if(Array.isArray(h)){if(h.length>1)return u(h,y);if(h.length===0)return 1;m=h[0]}else m=h;return l(m.mode,m.getLength(),y)},t.getEncodedBits=function(h){if(!i.isValid(h)||h<7)throw new Error("Invalid QR Code version");let w=h<<12;for(;e.getBCHDigit(w)-a>=0;)w^=s<<e.getBCHDigit(w)-a;return h<<12|w}})(kr)),kr}var Tr={},fs;function Gm(){if(fs)return Tr;fs=1;const t=he(),e=1335,n=21522,r=t.getBCHDigit(e);return Tr.getEncodedBits=function(i,s){const a=i.bit<<3|s;let l=a<<10;for(;t.getBCHDigit(l)-r>=0;)l^=e<<t.getBCHDigit(l)-r;return(a<<10|l)^n},Tr}var Rr={},Pr,ps;function Jm(){if(ps)return Pr;ps=1;const t=ge();function e(n){this.mode=t.NUMERIC,this.data=n.toString()}return e.getBitsLength=function(r){return 10*Math.floor(r/3)+(r%3?r%3*3+1:0)},e.prototype.getLength=function(){return this.data.length},e.prototype.getBitsLength=function(){return e.getBitsLength(this.data.length)},e.prototype.write=function(r){let o,i,s;for(o=0;o+3<=this.data.length;o+=3)i=this.data.substr(o,3),s=parseInt(i,10),r.put(s,10);const a=this.data.length-o;a>0&&(i=this.data.substr(o),s=parseInt(i,10),r.put(s,a*3+1))},Pr=e,Pr}var Or,hs;function Qm(){if(hs)return Or;hs=1;const t=ge(),e=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function n(r){this.mode=t.ALPHANUMERIC,this.data=r}return n.getBitsLength=function(o){return 11*Math.floor(o/2)+6*(o%2)},n.prototype.getLength=function(){return this.data.length},n.prototype.getBitsLength=function(){return n.getBitsLength(this.data.length)},n.prototype.write=function(o){let i;for(i=0;i+2<=this.data.length;i+=2){let s=e.indexOf(this.data[i])*45;s+=e.indexOf(this.data[i+1]),o.put(s,11)}this.data.length%2&&o.put(e.indexOf(this.data[i]),6)},Or=n,Or}var $r,gs;function Zm(){if(gs)return $r;gs=1;const t=ge();function e(n){this.mode=t.BYTE,typeof n=="string"?this.data=new TextEncoder().encode(n):this.data=new Uint8Array(n)}return e.getBitsLength=function(r){return r*8},e.prototype.getLength=function(){return this.data.length},e.prototype.getBitsLength=function(){return e.getBitsLength(this.data.length)},e.prototype.write=function(n){for(let r=0,o=this.data.length;r<o;r++)n.put(this.data[r],8)},$r=e,$r}var Lr,ms;function Ym(){if(ms)return Lr;ms=1;const t=ge(),e=he();function n(r){this.mode=t.KANJI,this.data=r}return n.getBitsLength=function(o){return o*13},n.prototype.getLength=function(){return this.data.length},n.prototype.getBitsLength=function(){return n.getBitsLength(this.data.length)},n.prototype.write=function(r){let o;for(o=0;o<this.data.length;o++){let i=e.toSJIS(this.data[o]);if(i>=33088&&i<=40956)i-=33088;else if(i>=57408&&i<=60351)i-=49472;else throw new Error("Invalid SJIS character: "+this.data[o]+`
Make sure your charset is UTF-8`);i=(i>>>8&255)*192+(i&255),r.put(i,13)}},Lr=n,Lr}var Br={exports:{}},ws;function Xm(){return ws||(ws=1,(function(t){var e={single_source_shortest_paths:function(n,r,o){var i={},s={};s[r]=0;var a=e.PriorityQueue.make();a.push(r,0);for(var l,c,d,u,g,h,w,m,y;!a.empty();){l=a.pop(),c=l.value,u=l.cost,g=n[c]||{};for(d in g)g.hasOwnProperty(d)&&(h=g[d],w=u+h,m=s[d],y=typeof s[d]>"u",(y||m>w)&&(s[d]=w,a.push(d,w),i[d]=c))}if(typeof o<"u"&&typeof s[o]>"u"){var p=["Could not find a path from ",r," to ",o,"."].join("");throw new Error(p)}return i},extract_shortest_path_from_predecessor_list:function(n,r){for(var o=[],i=r;i;)o.push(i),n[i],i=n[i];return o.reverse(),o},find_path:function(n,r,o){var i=e.single_source_shortest_paths(n,r,o);return e.extract_shortest_path_from_predecessor_list(i,o)},PriorityQueue:{make:function(n){var r=e.PriorityQueue,o={},i;n=n||{};for(i in r)r.hasOwnProperty(i)&&(o[i]=r[i]);return o.queue=[],o.sorter=n.sorter||r.default_sorter,o},default_sorter:function(n,r){return n.cost-r.cost},push:function(n,r){var o={value:n,cost:r};this.queue.push(o),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};t.exports=e})(Br)),Br.exports}var bs;function tw(){return bs||(bs=1,(function(t){const e=ge(),n=Jm(),r=Qm(),o=Zm(),i=Ym(),s=rc(),a=he(),l=Xm();function c(p){return unescape(encodeURIComponent(p)).length}function d(p,x,_){const E=[];let N;for(;(N=p.exec(_))!==null;)E.push({data:N[0],index:N.index,mode:x,length:N[0].length});return E}function u(p){const x=d(s.NUMERIC,e.NUMERIC,p),_=d(s.ALPHANUMERIC,e.ALPHANUMERIC,p);let E,N;return a.isKanjiModeEnabled()?(E=d(s.BYTE,e.BYTE,p),N=d(s.KANJI,e.KANJI,p)):(E=d(s.BYTE_KANJI,e.BYTE,p),N=[]),x.concat(_,E,N).sort(function(T,P){return T.index-P.index}).map(function(T){return{data:T.data,mode:T.mode,length:T.length}})}function g(p,x){switch(x){case e.NUMERIC:return n.getBitsLength(p);case e.ALPHANUMERIC:return r.getBitsLength(p);case e.KANJI:return i.getBitsLength(p);case e.BYTE:return o.getBitsLength(p)}}function h(p){return p.reduce(function(x,_){const E=x.length-1>=0?x[x.length-1]:null;return E&&E.mode===_.mode?(x[x.length-1].data+=_.data,x):(x.push(_),x)},[])}function w(p){const x=[];for(let _=0;_<p.length;_++){const E=p[_];switch(E.mode){case e.NUMERIC:x.push([E,{data:E.data,mode:e.ALPHANUMERIC,length:E.length},{data:E.data,mode:e.BYTE,length:E.length}]);break;case e.ALPHANUMERIC:x.push([E,{data:E.data,mode:e.BYTE,length:E.length}]);break;case e.KANJI:x.push([E,{data:E.data,mode:e.BYTE,length:c(E.data)}]);break;case e.BYTE:x.push([{data:E.data,mode:e.BYTE,length:c(E.data)}])}}return x}function m(p,x){const _={},E={start:{}};let N=["start"];for(let v=0;v<p.length;v++){const T=p[v],P=[];for(let k=0;k<T.length;k++){const R=T[k],S=""+v+k;P.push(S),_[S]={node:R,lastCount:0},E[S]={};for(let O=0;O<N.length;O++){const $=N[O];_[$]&&_[$].node.mode===R.mode?(E[$][S]=g(_[$].lastCount+R.length,R.mode)-g(_[$].lastCount,R.mode),_[$].lastCount+=R.length):(_[$]&&(_[$].lastCount=R.length),E[$][S]=g(R.length,R.mode)+4+e.getCharCountIndicator(R.mode,x))}}N=P}for(let v=0;v<N.length;v++)E[N[v]].end=0;return{map:E,table:_}}function y(p,x){let _;const E=e.getBestModeForData(p);if(_=e.from(x,E),_!==e.BYTE&&_.bit<E.bit)throw new Error('"'+p+'" cannot be encoded with mode '+e.toString(_)+`.
 Suggested mode is: `+e.toString(E));switch(_===e.KANJI&&!a.isKanjiModeEnabled()&&(_=e.BYTE),_){case e.NUMERIC:return new n(p);case e.ALPHANUMERIC:return new r(p);case e.KANJI:return new i(p);case e.BYTE:return new o(p)}}t.fromArray=function(x){return x.reduce(function(_,E){return typeof E=="string"?_.push(y(E,null)):E.data&&_.push(y(E.data,E.mode)),_},[])},t.fromString=function(x,_){const E=u(x,a.isKanjiModeEnabled()),N=w(E),v=m(N,_),T=l.find_path(v.map,"start","end"),P=[];for(let k=1;k<T.length-1;k++)P.push(v.table[T[k]].node);return t.fromArray(h(P))},t.rawSplit=function(x){return t.fromArray(u(x,a.isKanjiModeEnabled()))}})(Rr)),Rr}var ys;function ew(){if(ys)return mr;ys=1;const t=he(),e=ri(),n=Fm(),r=zm(),o=jm(),i=Um(),s=qm(),a=ec(),l=Wm(),c=Km(),d=Gm(),u=ge(),g=tw();function h(v,T){const P=v.size,k=i.getPositions(T);for(let R=0;R<k.length;R++){const S=k[R][0],O=k[R][1];for(let $=-1;$<=7;$++)if(!(S+$<=-1||P<=S+$))for(let L=-1;L<=7;L++)O+L<=-1||P<=O+L||($>=0&&$<=6&&(L===0||L===6)||L>=0&&L<=6&&($===0||$===6)||$>=2&&$<=4&&L>=2&&L<=4?v.set(S+$,O+L,!0,!0):v.set(S+$,O+L,!1,!0))}}function w(v){const T=v.size;for(let P=8;P<T-8;P++){const k=P%2===0;v.set(P,6,k,!0),v.set(6,P,k,!0)}}function m(v,T){const P=o.getPositions(T);for(let k=0;k<P.length;k++){const R=P[k][0],S=P[k][1];for(let O=-2;O<=2;O++)for(let $=-2;$<=2;$++)O===-2||O===2||$===-2||$===2||O===0&&$===0?v.set(R+O,S+$,!0,!0):v.set(R+O,S+$,!1,!0)}}function y(v,T){const P=v.size,k=c.getEncodedBits(T);let R,S,O;for(let $=0;$<18;$++)R=Math.floor($/3),S=$%3+P-8-3,O=(k>>$&1)===1,v.set(R,S,O,!0),v.set(S,R,O,!0)}function p(v,T,P){const k=v.size,R=d.getEncodedBits(T,P);let S,O;for(S=0;S<15;S++)O=(R>>S&1)===1,S<6?v.set(S,8,O,!0):S<8?v.set(S+1,8,O,!0):v.set(k-15+S,8,O,!0),S<8?v.set(8,k-S-1,O,!0):S<9?v.set(8,15-S-1+1,O,!0):v.set(8,15-S-1,O,!0);v.set(k-8,8,1,!0)}function x(v,T){const P=v.size;let k=-1,R=P-1,S=7,O=0;for(let $=P-1;$>0;$-=2)for($===6&&$--;;){for(let L=0;L<2;L++)if(!v.isReserved(R,$-L)){let at=!1;O<T.length&&(at=(T[O]>>>S&1)===1),v.set(R,$-L,at),S--,S===-1&&(O++,S=7)}if(R+=k,R<0||P<=R){R-=k,k=-k;break}}}function _(v,T,P){const k=new n;P.forEach(function(L){k.put(L.mode.bit,4),k.put(L.getLength(),u.getCharCountIndicator(L.mode,v)),L.write(k)});const R=t.getSymbolTotalCodewords(v),S=a.getTotalCodewordsCount(v,T),O=(R-S)*8;for(k.getLengthInBits()+4<=O&&k.put(0,4);k.getLengthInBits()%8!==0;)k.putBit(0);const $=(O-k.getLengthInBits())/8;for(let L=0;L<$;L++)k.put(L%2?17:236,8);return E(k,v,T)}function E(v,T,P){const k=t.getSymbolTotalCodewords(T),R=a.getTotalCodewordsCount(T,P),S=k-R,O=a.getBlocksCount(T,P),$=k%O,L=O-$,at=Math.floor(k/O),mt=Math.floor(S/O),Me=mt+1,un=at-mt,fn=new l(un);let pt=0;const U=new Array(O),yt=new Array(O);let xt=0;const Vt=new Uint8Array(v.buffer);for(let St=0;St<O;St++){const Fe=St<L?mt:Me;U[St]=Vt.slice(pt,pt+Fe),yt[St]=fn.encode(U[St]),pt+=Fe,xt=Math.max(xt,Fe)}const me=new Uint8Array(k);let D=0,q,ot;for(q=0;q<xt;q++)for(ot=0;ot<O;ot++)q<U[ot].length&&(me[D++]=U[ot][q]);for(q=0;q<un;q++)for(ot=0;ot<O;ot++)me[D++]=yt[ot][q];return me}function N(v,T,P,k){let R;if(Array.isArray(v))R=g.fromArray(v);else if(typeof v=="string"){let at=T;if(!at){const mt=g.rawSplit(v);at=c.getBestVersionForData(mt,P)}R=g.fromString(v,at||40)}else throw new Error("Invalid data");const S=c.getBestVersionForData(R,P);if(!S)throw new Error("The amount of data is too big to be stored in a QR Code");if(!T)T=S;else if(T<S)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+S+`.
`);const O=_(T,P,R),$=t.getSymbolSize(T),L=new r($);return h(L,T),w(L),m(L,T),p(L,P,0),T>=7&&y(L,T),x(L,O),isNaN(k)&&(k=s.getBestMask(L,p.bind(null,L,P))),s.applyMask(k,L),p(L,P,k),{modules:L,version:T,errorCorrectionLevel:P,maskPattern:k,segments:R}}return mr.create=function(T,P){if(typeof T>"u"||T==="")throw new Error("No input text");let k=e.M,R,S;return typeof P<"u"&&(k=e.from(P.errorCorrectionLevel,e.M),R=c.from(P.version),S=s.from(P.maskPattern),P.toSJISFunc&&t.setToSJISFunction(P.toSJISFunc)),N(T,R,k,S)},mr}var Ir={},Nr={},xs;function oc(){return xs||(xs=1,(function(t){function e(n){if(typeof n=="number"&&(n=n.toString()),typeof n!="string")throw new Error("Color should be defined as hex string");let r=n.slice().replace("#","").split("");if(r.length<3||r.length===5||r.length>8)throw new Error("Invalid hex color: "+n);(r.length===3||r.length===4)&&(r=Array.prototype.concat.apply([],r.map(function(i){return[i,i]}))),r.length===6&&r.push("F","F");const o=parseInt(r.join(""),16);return{r:o>>24&255,g:o>>16&255,b:o>>8&255,a:o&255,hex:"#"+r.slice(0,6).join("")}}t.getOptions=function(r){r||(r={}),r.color||(r.color={});const o=typeof r.margin>"u"||r.margin===null||r.margin<0?4:r.margin,i=r.width&&r.width>=21?r.width:void 0,s=r.scale||4;return{width:i,scale:i?4:s,margin:o,color:{dark:e(r.color.dark||"#000000ff"),light:e(r.color.light||"#ffffffff")},type:r.type,rendererOpts:r.rendererOpts||{}}},t.getScale=function(r,o){return o.width&&o.width>=r+o.margin*2?o.width/(r+o.margin*2):o.scale},t.getImageWidth=function(r,o){const i=t.getScale(r,o);return Math.floor((r+o.margin*2)*i)},t.qrToImageData=function(r,o,i){const s=o.modules.size,a=o.modules.data,l=t.getScale(s,i),c=Math.floor((s+i.margin*2)*l),d=i.margin*l,u=[i.color.light,i.color.dark];for(let g=0;g<c;g++)for(let h=0;h<c;h++){let w=(g*c+h)*4,m=i.color.light;if(g>=d&&h>=d&&g<c-d&&h<c-d){const y=Math.floor((g-d)/l),p=Math.floor((h-d)/l);m=u[a[y*s+p]?1:0]}r[w++]=m.r,r[w++]=m.g,r[w++]=m.b,r[w]=m.a}}})(Nr)),Nr}var _s;function nw(){return _s||(_s=1,(function(t){const e=oc();function n(o,i,s){o.clearRect(0,0,i.width,i.height),i.style||(i.style={}),i.height=s,i.width=s,i.style.height=s+"px",i.style.width=s+"px"}function r(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}t.render=function(i,s,a){let l=a,c=s;typeof l>"u"&&(!s||!s.getContext)&&(l=s,s=void 0),s||(c=r()),l=e.getOptions(l);const d=e.getImageWidth(i.modules.size,l),u=c.getContext("2d"),g=u.createImageData(d,d);return e.qrToImageData(g.data,i,l),n(u,c,d),u.putImageData(g,0,0),c},t.renderToDataURL=function(i,s,a){let l=a;typeof l>"u"&&(!s||!s.getContext)&&(l=s,s=void 0),l||(l={});const c=t.render(i,s,l),d=l.type||"image/png",u=l.rendererOpts||{};return c.toDataURL(d,u.quality)}})(Ir)),Ir}var Dr={},vs;function rw(){if(vs)return Dr;vs=1;const t=oc();function e(o,i){const s=o.a/255,a=i+'="'+o.hex+'"';return s<1?a+" "+i+'-opacity="'+s.toFixed(2).slice(1)+'"':a}function n(o,i,s){let a=o+i;return typeof s<"u"&&(a+=" "+s),a}function r(o,i,s){let a="",l=0,c=!1,d=0;for(let u=0;u<o.length;u++){const g=Math.floor(u%i),h=Math.floor(u/i);!g&&!c&&(c=!0),o[u]?(d++,u>0&&g>0&&o[u-1]||(a+=c?n("M",g+s,.5+h+s):n("m",l,0),l=0,c=!1),g+1<i&&o[u+1]||(a+=n("h",d),d=0)):l++}return a}return Dr.render=function(i,s,a){const l=t.getOptions(s),c=i.modules.size,d=i.modules.data,u=c+l.margin*2,g=l.color.light.a?"<path "+e(l.color.light,"fill")+' d="M0 0h'+u+"v"+u+'H0z"/>':"",h="<path "+e(l.color.dark,"stroke")+' d="'+r(d,c,l.margin)+'"/>',w='viewBox="0 0 '+u+" "+u+'"',y='<svg xmlns="http://www.w3.org/2000/svg" '+(l.width?'width="'+l.width+'" height="'+l.width+'" ':"")+w+' shape-rendering="crispEdges">'+g+h+`</svg>
`;return typeof a=="function"&&a(null,y),y},Dr}var Es;function ow(){if(Es)return be;Es=1;const t=Mm(),e=ew(),n=nw(),r=rw();function o(i,s,a,l,c){const d=[].slice.call(arguments,1),u=d.length,g=typeof d[u-1]=="function";if(!g&&!t())throw new Error("Callback required as last argument");if(g){if(u<2)throw new Error("Too few arguments provided");u===2?(c=a,a=s,s=l=void 0):u===3&&(s.getContext&&typeof c>"u"?(c=l,l=void 0):(c=l,l=a,a=s,s=void 0))}else{if(u<1)throw new Error("Too few arguments provided");return u===1?(a=s,s=l=void 0):u===2&&!s.getContext&&(l=a,a=s,s=void 0),new Promise(function(h,w){try{const m=e.create(a,l);h(i(m,s,l))}catch(m){w(m)}})}try{const h=e.create(a,l);c(null,i(h,s,l))}catch(h){c(h)}}return be.create=e.create,be.toCanvas=o.bind(null,n.render),be.toDataURL=o.bind(null,n.renderToDataURL),be.toString=o.bind(null,function(i,s,a){return r.render(i,a)}),be}var iw=ow();const sw=Dm(iw);window.QRCode=sw;window.loadChartJs=async function(){return window.Chart?window.Chart:(window.__chartPromise||(window.__chartPromise=dc(()=>import("./auto-CquwA8NN.js"),[]).then(t=>(window.Chart=t.default||t,window.Chart))),window.__chartPromise)};const aw=t=>{switch(t){case 413:return"File yang dikirim terlalu besar untuk server. Ulangi dengan foto yang lebih kecil.";case 419:return"Sesi kedaluwarsa atau file terlalu besar sehingga data tidak terkirim utuh. Muat ulang halaman lalu coba lagi.";case 401:return"Sesi Anda sudah berakhir. Silakan masuk kembali.";case 403:return"Akses ditolak untuk tindakan ini.";case 404:return"Alamat tujuan tidak ditemukan di server.";case 500:case 502:case 503:return"Server sedang bermasalah (kode "+t+"). Coba lagi sebentar lagi.";default:return"Terjadi kesalahan pada server (kode "+t+")."}},Y=async(t,e={})=>{const n=e.skipLoading||!1,r=e.loadingText||"Memproses...",o=e.timeout||3e4;!n&&typeof window.showLoading=="function"&&window.showLoading(r);const i=document.querySelector('meta[name="csrf-token"]')?.getAttribute("content"),s={Accept:"application/json","X-Requested-With":"XMLHttpRequest",...e.headers||{}};i&&(s["X-CSRF-TOKEN"]=i),e.body instanceof FormData||(s["Content-Type"]="application/json",e.body&&typeof e.body=="object"&&(e.body=JSON.stringify(e.body)));const a=new AbortController,l=setTimeout(()=>a.abort(),o);try{const c=await fetch(t,{...e,headers:s,signal:a.signal});if(clearTimeout(l),c.status===413)throw new Error("Ukuran file terlalu besar. Coba foto dengan resolusi lebih rendah atau gunakan screenshot.");const d=await c.json().catch(()=>({success:!1,message:null}));if(!c.ok)throw new Error(d.message||aw(c.status));return d}catch(c){throw clearTimeout(l),c.name==="AbortError"?new Error("Koneksi timeout. Periksa jaringan internet Anda dan coba lagi."):c instanceof TypeError&&c.message==="Failed to fetch"?new Error("Koneksi terputus. Pastikan Anda terhubung ke internet dan coba lagi."):c}finally{!n&&typeof window.hideLoading=="function"&&window.hideLoading()}};window.Alpine=zo;window.Swal=de;window.evaluatePasswordStrength=Nm;const ic={popup:"rounded-3xl shadow-2xl border border-[#eceae0] font-sans p-6 text-center",title:"text-lg sm:text-xl font-black text-[#2e2e2a] tracking-tight",htmlContainer:"text-xs sm:text-sm text-[#595952] font-medium leading-relaxed mt-2",confirmButton:"px-6 py-2.5 rounded-full bg-[#8b9b70] hover:bg-[#7a8a60] text-white text-xs sm:text-sm font-black shadow-md shadow-[#8b9b70]/25 transition-all cursor-pointer mx-1.5 active:scale-95",cancelButton:"px-6 py-2.5 rounded-full bg-[#eceae0] hover:bg-slate-200 text-[#2e2e2a] text-xs sm:text-sm font-black transition-all cursor-pointer mx-1.5 active:scale-95"},Pt=(t="success",e="",n="",r=null)=>{let o=t;t==="danger"&&(o="error"),t==="warn"&&(o="warning");const s=r!==null?r:t==="success"?2200:t==="info"?3e3:void 0;return de.fire({icon:o,title:e||(t==="success"?"Berhasil":t==="error"?"Perhatian":"Pemberitahuan"),text:n||"",buttonsStyling:!1,customClass:ic,timer:s,timerProgressBar:!!s,confirmButtonText:"Oke, Mengerti"})},lw=async(t="Konfirmasi",e="",n="Ya, Lanjutkan",r="Batal")=>(await de.fire({title:t,text:e,icon:"warning",showCancelButton:!0,confirmButtonText:n,cancelButtonText:r,buttonsStyling:!1,customClass:ic,reverseButtons:!0})).isConfirmed;window.showSwal=Pt;window.showConfirm=lw;window.apiFetch=Y;const I=t=>t==null||isNaN(t)?"Rp 0":new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR",minimumFractionDigits:0,maximumFractionDigits:0}).format(t),cw=(t,e=600,n=600,r=.8)=>new Promise((o,i)=>{if(!t||!t.type.startsWith("image/"))return i(new Error("File is not an image"));const s=new FileReader;s.readAsDataURL(t),s.onload=a=>{const l=new Image;l.src=a.target.result,l.onload=()=>{const c=document.createElement("canvas");let d=l.width,u=l.height;d>u?d>e&&(u=Math.round(u*=e/d),d=e):u>n&&(d=Math.round(d*=n/u),u=n),c.width=d,c.height=u,c.getContext("2d").drawImage(l,0,0,d,u);const h="image/webp",w=t.name.replace(/\.[^/.]+$/,"")+".webp";c.toBlob(m=>{if(!m){c.toBlob(y=>{o({file:new File([y],t.name,{type:"image/jpeg",lastModified:Date.now()}),previewUrl:c.toDataURL("image/jpeg",r)})},"image/jpeg",r);return}o({file:new File([m],w,{type:h,lastModified:Date.now()}),previewUrl:c.toDataURL(h,r)})},h,r)},l.onerror=c=>i(c)},s.onerror=a=>i(a)}),sc=t=>{if(!t||typeof t!="string")return;const e=new Image;e.decoding="async",e.src=t},dw=t=>{Array.isArray(t)&&t.forEach(e=>{if(e&&e.photo){const n=e.photo.startsWith("http")||e.photo.startsWith("/")?e.photo:"/storage/"+e.photo;sc(n)}})};window.preloadImage=sc;window.preloadProductImages=dw;const Mt=t=>Math.round(Number(t)||0),xe=t=>{if(t==null||t==="")return"";let e;if(typeof t=="number")e=t;else if(typeof t=="string"){const n=t.trim();/^\d+(\.\d+)?$/.test(n)?e=Math.round(parseFloat(n)):e=parseFloat(n.replace(/\D/g,""))}return isNaN(e)||e===void 0?"":new Intl.NumberFormat("id-ID").format(e)},Ot="Asia/Jakarta",ct=t=>{if(!t)return"-";try{const e=new Date(t);return isNaN(e.getTime())?t:e.toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit",timeZone:Ot})}catch{return t}};window.formatRupiah=I;window.formatNumber=xe;window.formatDateTime=ct;try{["events","stores","products","transactions","helpdesk","role"].forEach(t=>{localStorage.removeItem(`pos_umkm_${t}`),localStorage.removeItem(t)})}catch{}zo.store("app",{currentUser:window.__AUTH_USER__||null,currentRole:window.__AUTH_USER__?.role||"user",sidebarOpen:!1,user:window.__AUTH_USER__||null,userStores:window.__USER_STORES__||[],activeEvent:window.__ACTIVE_EVENT__||null,events:window.__INITIAL_EVENTS__||[],stores:window.__INITIAL_STORES__||[],products:window.__INITIAL_PRODUCTS__||[],transactions:window.__INITIAL_TRANSACTIONS__||[],helpdeskTickets:window.__INITIAL_TICKETS__||[],get activeStoreEventActive(){if(!this.user||this.user.role!=="user"||!this.user.store_id){const e=this.getActiveEvent();return e?e.is_operational!==void 0?!!e.is_operational:!!e.is_active&&!e.is_expired:!0}const t=this.userStores.find(e=>Number(e.id)===Number(this.user.store_id));return t?!!t.event_is_active:!1},get stats(){const t=this.transactions.filter(e=>e.status==="pending"&&e.payment_method==="cash").length;return{pendingCashCount:t,pendingCount:t}},cart:[],isCartOpen:!1,isCheckoutOpen:!1,activePaymentTab:"cash",cashAmountPaid:"",qrisProofPreview:null,qrisProofFile:null,qrisUploadFailed:!1,qrisFailureReason:"",dynamicQrisLoading:!1,dynamicQrisDataUrl:null,globalLoading:!1,globalLoadingText:"Memproses...",showLoading(t="Memproses..."){this.globalLoadingText=t,this.globalLoading=!0},hideLoading(){this.globalLoading=!1},receiptModalOpen:!1,activeReceiptTransaction:null,qrisModalOpen:!1,selectedQrisTransaction:null,rejectModalOpen:!1,rejectionReason:"",cancelModalOpen:!1,transactionToCancel:null,cancelReasonCategory:"",cancelCustomNote:"",cancelRefundConfirmed:!1,productModalOpen:!1,isEditingProduct:!1,productFormData:{id:null,title:"",price:"",is_negotiable:!1,min_price:"",max_price:"",category:"Makanan",description:"",photo:"",stock_badge:"Tersedia"},deleteProductConfirmOpen:!1,productToDelete:null,eventModalOpen:!1,isEditingEvent:!1,eventFormData:{name:"",slug:"",start_date:"",end_date:"",location:""},activateEventConfirmOpen:!1,eventToActivate:null,ticketModalOpen:!1,ticketFormData:{category:"Kasir & Pembayaran",subject:"",message:""},selectedTicket:null,ticketReplyText:"",toasts:[],init(){window.__AUTH_USER__&&(this.currentUser=window.__AUTH_USER__,this.currentRole=window.__AUTH_USER__.role),window.__ACTIVE_EVENT__&&(this.activeEvent=window.__ACTIVE_EVENT__),window.__INITIAL_EVENTS__&&(this.events=window.__INITIAL_EVENTS__),window.__INITIAL_STORES__&&(this.stores=window.__INITIAL_STORES__),window.__INITIAL_PRODUCTS__&&(this.products=window.__INITIAL_PRODUCTS__.map(t=>({...t,photo:this.getProductPhoto(t.photo)}))),window.__INITIAL_TRANSACTIONS__&&(this.transactions=window.__INITIAL_TRANSACTIONS__),window.__INITIAL_HELPDESK__&&(this.helpdesk=window.__INITIAL_HELPDESK__),window.__FLASH_SUCCESS__&&this.notify("success","Berhasil",window.__FLASH_SUCCESS__),window.__FLASH_ERROR__&&this.notify("error","Perhatian",window.__FLASH_ERROR__)},formatRupiah(t){return I(t)},formatDateTime(t){return ct(t)},formatNumber(t){return xe(t)},getProductPhoto(t){const e="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect width='400' height='300' fill='%23eef2e8'/%3E%3Cg transform='translate(168 92)' fill='none' stroke='%238b9b70' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='0' y='0' width='64' height='64' rx='8'/%3E%3Ccircle cx='20' cy='20' r='7'/%3E%3Cpath d='M2 50l18-16 16 13 12-10 14 12'/%3E%3C/g%3E%3Ctext x='200' y='205' font-family='Arial,sans-serif' font-size='15' fill='%238b9b70' text-anchor='middle' font-weight='bold'%3ETanpa Foto%3C/text%3E%3C/svg%3E";return t?t.startsWith("http://")||t.startsWith("https://")||t.startsWith("data:")||t.startsWith("/")?t:"/storage/"+t:e},getRoleLabel(t){return t==="user"?"Pemilik Cabang (User)":t==="admin"?"Admin ":t==="superadmin"?"Super Admin":t},normalizeTransaction(t){if(!t||t.store_name!==void 0&&t.cashier_name!==void 0)return t;const e={...t};if(t.store&&typeof t.store=="object"&&(e.store_name=t.store.name||"",e.store_id=t.store_id||t.store.id),e.store_name||(e.store_name=t.store_name||""),t.cashier&&typeof t.cashier=="object"&&(e.cashier_name=t.cashier.name||"",e.cashier_id=t.cashier_id||t.cashier.id),e.cashier_name||(e.cashier_name=t.cashier_name||""),t.payment_proof&&typeof t.payment_proof=="object"){const n=t.payment_proof.proof_url||(t.payment_proof.proof_path?"/storage/"+t.payment_proof.proof_path:null);e.payment_proof=n,e.proof_image=n}else typeof t.payment_proof=="string"&&(e.proof_image=e.proof_image||t.payment_proof);return t.revenue_split&&typeof t.revenue_split=="object"&&(e.revenue_split={owner_share:parseFloat(t.revenue_split.owner_share)||0,admin_gross_share:parseFloat(t.revenue_split.admin_gross_share)||0,superadmin_share:parseFloat(t.revenue_split.superadmin_share)||0,admin_net_share:parseFloat(t.revenue_split.admin_net_share)||0}),e.total_amount=parseFloat(t.total_amount)||0,e.amount_paid=t.amount_paid!=null?parseFloat(t.amount_paid):null,e.change_due=t.change_due!=null?parseFloat(t.change_due):null,Array.isArray(t.items)&&(e.items=t.items.map(n=>({...n,price:parseFloat(n.price)||0,original_price:n.original_price!=null?parseFloat(n.original_price):null,qty:parseInt(n.qty)||0,subtotal:parseFloat(n.subtotal)||0}))),e.paid_at=t.paid_at||null,e.created_at=t.created_at||null,e},getCurrentUser(){return this.currentUser||window.__AUTH_USER__||{name:"User",email:"",role:this.currentRole}},getActiveEvent(){return this.activeEvent||window.__ACTIVE_EVENT__||{name:"Event Belum Aktif"}},storeUniqueCode(t){if(!t)return 0;if(t.unique_code!==null&&t.unique_code!==void 0)return parseInt(t.unique_code,10)||0;const e=String(t.booth_number??"").replace(/\D/g,"");return e?parseInt(e,10)||0:parseInt(t.id,10)||0},getCurrentStore(){const t=this.getCurrentUser();if(t&&(t.store_id||t.store_name)){const e=this.stores.find(n=>n.id==t.store_id)||this.userStores.find(n=>n.id==t.store_id);return e||{id:t.store_id,name:t.store_name||"Cabang Saya",booth_number:t.booth_number||"-"}}return this.stores[0]||null},notify(t="success",e="Pemberitahuan",n=""){Pt(t,e,n)},removeToast(t){},_refreshQrisIfActive(){this.activePaymentTab==="qris"&&this.generateDynamicQris()},priceRangeOf(t){const e=parseFloat(t?.price)||0;if(!t?.is_negotiable)return{min:e,max:e};const n=t.min_price!==null&&t.min_price!==void 0?parseFloat(t.min_price):0,r=t.max_price!==null&&t.max_price!==void 0?parseFloat(t.max_price):e;return{min:isNaN(n)?0:n,max:isNaN(r)?e:r}},cartItemPrice(t){const e=parseFloat(t?.price);return isNaN(e)?parseFloat(t?.product?.price)||0:e},addToCart(t){const e=this.cart.find(n=>n.product.id===t.id);e?e.qty++:this.cart.push({product:t,qty:1,price:this.priceRangeOf(t).max,notes:""}),this.notify("success","Produk Ditambahkan",`${t.title} (x1) masuk keranjang`),this._refreshQrisIfActive()},updateCartPrice(t,e){const n=this.cart.find(a=>a.product.id===t);if(!n||!n.product.is_negotiable)return;const{min:r,max:o}=this.priceRangeOf(n.product),i=String(e??"").replace(/\D/g,"");let s=i===""?NaN:parseFloat(i);isNaN(s)?s=o:s<r?(s=r,this.notify("warning","Di Bawah Batas",`Harga nego ${n.product.title} minimal ${I(r)}.`)):s>o&&(s=o,this.notify("warning","Di Atas Batas",`Harga nego ${n.product.title} maksimal ${I(o)}.`)),n.price=s,this._refreshQrisIfActive()},updateCartQty(t,e){const n=this.cart.findIndex(r=>r.product.id===t);n>-1&&(this.cart[n].qty+=e,this.cart[n].qty<=0&&this.cart.splice(n,1),this._refreshQrisIfActive())},removeFromCart(t){this.cart=this.cart.filter(e=>e.product.id!==t),this._refreshQrisIfActive()},clearCart(){this.cart=[],this.cashAmountPaid="",this.qrisProofPreview=null,this.qrisProofFile=null,this.qrisUploadFailed=!1,this.qrisFailureReason=""},get cartTotal(){return this.cart.reduce((t,e)=>t+this.cartItemPrice(e)*e.qty,0)},get cartNegotiatedDiscount(){return this.cart.reduce((t,e)=>{const r=this.priceRangeOf(e.product).max-this.cartItemPrice(e);return t+(r>0?r*e.qty:0)},0)},get cartItemCount(){return this.cart.reduce((t,e)=>t+e.qty,0)},get cashChangeDue(){const t=parseFloat(this.cashAmountPaid)||0,e=this.cartTotal;return Math.max(0,t-e)},get isCashValid(){const t=parseFloat(this.cashAmountPaid)||0;return this.cart.length>0&&t>=this.cartTotal},setCashPreset(t){this.cashAmountPaid=t},async processCashCheckout(){if(!this.isCashValid){this.notify("error","Validasi Gagal","Nominal uang diterima kurang dari total tagihan.");return}try{const t={items:this.cart.map(n=>({product_id:n.product.id,qty:n.qty,price:this.cartItemPrice(n)})),amount_paid:parseFloat(this.cashAmountPaid)},e=await Y("/user/kasir/checkout-cash",{method:"POST",body:t});if(e.success&&e.transaction){const n=this.normalizeTransaction(e.transaction);this.transactions.unshift(n),this.activeReceiptTransaction=n,this.receiptModalOpen=!0,this.isCheckoutOpen=!1,this.clearCart(),this.notify("success","Berhasil!","Transaksi berhasil & lunas. Struk siap dicetak.")}}catch(t){this.notify("error","Gagal",t.message)}},async generateDynamicQris(){const t=this.getCurrentStore();if(!(!t||!t.use_dynamic_qris||!window.__ACTIVE_EVENT__||!window.__ACTIVE_EVENT__.qris_payload)){if(this.cartTotal<=0){this.dynamicQrisDataUrl=null;return}this.dynamicQrisLoading=!0;try{const e=await Y("/user/kasir/generate-qris",{method:"POST",body:{amount:this.cartTotal}}),n=e.qris_payload||e.payload;e.success&&n?this.dynamicQrisDataUrl=await window.QRCode.toDataURL(n,{width:400,margin:2,color:{dark:"#2e2e2a",light:"#ffffff"}}):console.error("Failed to generate dynamic QRIS:",e.message)}catch(e){console.error("Error generating dynamic QRIS",e)}finally{this.dynamicQrisLoading=!1}}},compressImage(t,e={}){const n=e.maxWidth||1200,r=e.maxHeight||1200,o=e.quality||.7;return new Promise((i,s)=>{if(!t.type.startsWith("image/")){i(t);return}if(/^image\/(jpeg|jpg|png|gif|bmp|webp)$/i.test(t.type)&&t.size<=500*1024){i(t);return}const l=new Image,c=document.createElement("canvas"),d=c.getContext("2d");l.onload=()=>{let{width:u,height:g}=l;if(u>n||g>r){const h=Math.min(n/u,r/g);u=Math.round(u*h),g=Math.round(g*h)}c.width=u,c.height=g,d.drawImage(l,0,0,u,g),c.toBlob(h=>{if(!h){i(t);return}const w=new File([h],t.name.replace(/\.[^.]+$/,".jpg"),{type:"image/jpeg",lastModified:Date.now()});console.log(`[Compress] ${(t.size/1024/1024).toFixed(2)} MB → ${(w.size/1024).toFixed(0)} KB`),i(w)},"image/jpeg",o)},l.onerror=()=>{console.warn("[Compress] Gagal load image, gunakan file asli"),i(t)},l.src=URL.createObjectURL(t)})},async handleQrisProofUpload(t){const e=t.target.files[0];if(e)try{const n=new FileReader;if(n.onload=r=>{this.qrisProofPreview=r.target.result},n.readAsDataURL(e),this.qrisProofFile=await this.compressImage(e),this.qrisProofFile.size>2*1024*1024&&(this.qrisProofFile=await this.compressImage(e,{maxWidth:900,maxHeight:900,quality:.6})),this.qrisProofFile.size>2*1024*1024){const r=(this.qrisProofFile.size/1024/1024).toFixed(1);this.notify("warning","Gambar Melebihi Kapasitas",`Setelah dikompres ukurannya masih ${r} MB. Coba pakai screenshot bukti transfer, bukan foto layar.`,6e3)}}catch(n){console.error("[Upload] Error processing image:",n),this.qrisProofFile=e;const r=(e.size/1024/1024).toFixed(1);this.notify("warning","Foto Tidak Bisa Dikompres",`Format foto ini tidak dikenali browser, jadi dikirim apa adanya (${r} MB) dan bisa ditolak server. Screenshot bukti transfer lebih aman.`,6e3)}},removeQrisProof(){this.qrisProofFile=null,this.qrisProofPreview=null,this.qrisUploadFailed=!1,this.qrisFailureReason="";const t=document.getElementById("qris_proof_camera");t&&(t.value="");const e=document.getElementById("qris_proof_gallery");e&&(e.value="")},async processQrisCheckout(){if(!this.qrisProofFile){this.notify("error","Bukti Belum Ada","Unggah bukti transfer QRIS terlebih dahulu sebelum menyimpan transaksi.");return}try{const t=new FormData;this.cart.forEach((n,r)=>{t.append(`items[${r}][product_id]`,n.product.id),t.append(`items[${r}][qty]`,n.qty),t.append(`items[${r}][price]`,this.cartItemPrice(n))}),t.append("proof_image",this.qrisProofFile);const e=await Y("/user/kasir/checkout-qris",{method:"POST",body:t,timeout:9e4});if(e.success&&e.transaction){const n=this.normalizeTransaction(e.transaction);this.transactions.unshift(n),this.activeReceiptTransaction=n,this.receiptModalOpen=!0,this.isCheckoutOpen=!1,this.clearCart(),this.notify("success","Berhasil",e.message)}}catch(t){this.qrisUploadFailed=!0;const e=this.qrisProofFile,n=e?` (${e.type||"tipe tidak dikenal"}, ${(e.size/1024/1024).toFixed(1)} MB)`:"";this.qrisFailureReason=(t.message||"Bukti transfer gagal diunggah.")+n,this.notify("error","Gagal Mengirim Bukti",t.message)}},async saveQrisWithoutProof(){const t=this.qrisFailureReason||"Bukti transfer gagal diunggah.";if((await de.fire({icon:"warning",title:"Simpan Tanpa Bukti Transfer?",html:`Pastikan pembayaran <b>benar-benar sudah masuk</b> ke rekening QRIS.<br><br>
 Transaksi akan dicatat <b>lunas</b> sebesar <b>${I(this.cartTotal+(this.getCurrentStore()?this.storeUniqueCode(this.getCurrentStore()):0))}</b>
 dan langsung masuk laporan, tanpa arsip bukti transfer.`,showCancelButton:!0,confirmButtonColor:"#f4212e",cancelButtonColor:"#eceae0",confirmButtonText:"Ya, Sudah Dibayar",cancelButtonText:"<span class='text-[#2e2e2a]'>Batal</span>"})).isConfirmed)try{const n=await Y("/user/kasir/checkout-qris-tanpa-bukti",{method:"POST",loadingText:"Mencatat transaksi tanpa bukti...",body:{items:this.cart.map(r=>({product_id:r.product.id,qty:r.qty,price:this.cartItemPrice(r)})),reason:t}});if(n.success&&n.transaction){const r=this.normalizeTransaction(n.transaction);this.transactions.unshift(r),this.activeReceiptTransaction=r,this.receiptModalOpen=!0,this.isCheckoutOpen=!1,this.clearCart(),this.notify("success","Tercatat di Laporan",n.message)}}catch(n){this.notify("error","Gagal",n.message)}},openQrisVerifyModal(t){this.selectedQrisTransaction=t,this.qrisModalOpen=!0},async approveQris(t){try{const e=await Y(`/admin/verifikasi-qris/${t}/approve`,{method:"POST"});if(e.success){const n=this.transactions.findIndex(r=>r.id===t);n!==-1&&(this.transactions[n]=this.normalizeTransaction(e.transaction)),this.qrisModalOpen=!1,this.notify("success","Berhasil",e.message)}}catch(e){this.notify("error","Gagal",e.message)}},openRejectModal(t){this.selectedQrisTransaction=t,this.rejectionReason="",this.rejectModalOpen=!0},async confirmRejectQris(){if(!this.rejectionReason.trim()){this.notify("error","Alasan Wajib","Harap masukkan alasan penolakan.");return}if(this.selectedQrisTransaction)try{const t=await Y(`/admin/verifikasi-qris/${this.selectedQrisTransaction.id}/reject`,{method:"POST",body:{reason:this.rejectionReason}});if(t.success){const e=this.transactions.findIndex(n=>n.id===this.selectedQrisTransaction.id);e!==-1&&(this.transactions[e]=this.normalizeTransaction(t.transaction)),this.rejectModalOpen=!1,this.qrisModalOpen=!1,this.notify("success","Ditolak",t.message)}}catch(t){this.notify("error","Gagal",t.message)}},openCancelTransactionModal(t){this.transactionToCancel=t,this.cancelReasonCategory="Salah input barang/harga",this.cancelCustomNote="",this.cancelRefundConfirmed=!1,this.cancelModalOpen=!0},async confirmCancelTransaction(){if(!this.transactionToCancel)return;if(!this.cancelRefundConfirmed){this.notify("error","Konfirmasi Diperlukan","Harap centang checkbox konfirmasi koordinasi refund.");return}if(this.cancelReasonCategory==="Lainnya (isi manual)"&&!this.cancelCustomNote.trim()){this.notify("error","Catatan Wajib","Harap ketikkan detail alasan pembatalan.");return}const t=this.cancelReasonCategory==="Lainnya (isi manual)"?`Lainnya: ${this.cancelCustomNote.trim()}`:this.cancelCustomNote.trim()?`${this.cancelReasonCategory} (${this.cancelCustomNote.trim()})`:this.cancelReasonCategory;try{const e=await Y(`/admin/transaksi/${this.transactionToCancel.id}/cancel`,{method:"POST",body:{reason_category:this.cancelReasonCategory||"Lainnya (isi manual)",custom_note:this.cancelCustomNote||"",cancellation_reason:t,refund_ack_confirmed:this.cancelRefundConfirmed}});if(e.success){const n=this.transactions.findIndex(r=>r.id===this.transactionToCancel.id);n!==-1&&(this.transactions[n]=this.normalizeTransaction?this.normalizeTransaction(e.transaction):e.transaction),this.cancelModalOpen=!1,this.notify("warning","Transaksi Dibatalkan",e.message)}}catch(e){this.notify("error","Gagal",e.message)}},openAddProductModal(){this.isEditingProduct=!1,this.productFormData={id:null,title:"",price:"",is_negotiable:!1,min_price:"",max_price:"",category:"Makanan",description:"",photo:"",photoFile:null,photoPreview:"",stock_badge:"Tersedia",store_id:""},this.productModalOpen=!0},openEditProductModal(t){this.isEditingProduct=!0;const e=t.price!==null&&t.price!==void 0?Math.round(parseFloat(t.price)):"";this.productFormData={id:t.id,title:t.title,price:isNaN(e)?"":e,is_negotiable:!!t.is_negotiable,min_price:t.min_price!==null&&t.min_price!==void 0?Math.round(parseFloat(t.min_price)):"",max_price:t.max_price!==null&&t.max_price!==void 0?Math.round(parseFloat(t.max_price)):"",category:t.category||"Makanan",description:t.description||"",photo:t.photo||"",photoFile:null,photoPreview:t.photo_url||t.photo||"",stock_badge:t.stock_badge||"Tersedia",store_id:t.store_id||""},this.productModalOpen=!0},async handleProductPhotoUpload(t){const e=t.target.files[0];if(e)try{this.notify("info","Memproses Foto","Sedang mengompres gambar...",2e3);const n=await cw(e);this.productFormData.photoFile=n.file,this.productFormData.photoPreview=n.previewUrl}catch(n){this.notify("error","Gagal","Gagal memproses gambar: "+n.message)}},async saveProduct(){if(!this.productFormData.title.trim()){this.notify("error","Validasi Form","Judul produk wajib diisi."),typeof window.hideLoading=="function"&&window.hideLoading();return}if(this.productFormData.is_negotiable){const t=parseFloat(this.productFormData.min_price),e=parseFloat(this.productFormData.max_price);if(isNaN(t)||isNaN(e)){this.notify("error","Validasi Form","Harga terendah dan tertinggi wajib diisi untuk produk yang bisa ditawar."),typeof window.hideLoading=="function"&&window.hideLoading();return}if(e<t){this.notify("error","Validasi Form","Harga tertinggi tidak boleh lebih kecil dari harga terendah."),typeof window.hideLoading=="function"&&window.hideLoading();return}}else if(!this.productFormData.price){this.notify("error","Validasi Form","Harga produk wajib diisi."),typeof window.hideLoading=="function"&&window.hideLoading();return}if(!this.productFormData.store_id){this.notify("error","Validasi Form","Pilih cabang terlebih dahulu."),typeof window.hideLoading=="function"&&window.hideLoading();return}try{const t=this.currentRole==="superadmin"||window.location.pathname.startsWith("/superadmin")?"/superadmin":this.currentRole==="admin"||window.location.pathname.startsWith("/admin")?"/admin":"/user",e=this.isEditingProduct?`${t}/produk/${this.productFormData.id}`:`${t}/produk`;let n;this.productFormData.photoFile?(n=new FormData,n.append("title",this.productFormData.title.trim()),n.append("price",this.productFormData.price||""),n.append("is_negotiable",this.productFormData.is_negotiable?"1":"0"),n.append("min_price",this.productFormData.is_negotiable?this.productFormData.min_price:""),n.append("max_price",this.productFormData.is_negotiable?this.productFormData.max_price:""),n.append("category",this.productFormData.category),n.append("description",this.productFormData.description||""),n.append("stock_badge",this.productFormData.stock_badge),n.append("store_id",this.productFormData.store_id),n.append("photo",this.productFormData.photoFile),this.isEditingProduct&&n.append("_method","PUT")):n={title:this.productFormData.title.trim(),price:this.productFormData.price!==""?parseFloat(this.productFormData.price):null,is_negotiable:!!this.productFormData.is_negotiable,min_price:this.productFormData.is_negotiable?parseFloat(this.productFormData.min_price):null,max_price:this.productFormData.is_negotiable?parseFloat(this.productFormData.max_price):null,category:this.productFormData.category,description:this.productFormData.description,stock_badge:this.productFormData.stock_badge,store_id:this.productFormData.store_id};const r=this.isEditingProduct&&this.productFormData.photoFile?"POST":this.isEditingProduct?"PUT":"POST",o=await Y(e,{method:r,body:n});if(o.success&&o.product){if(this.isEditingProduct){const i=this.products.findIndex(s=>s.id===this.productFormData.id);i>-1&&(this.products[i]=o.product)}else this.products.unshift(o.product);this.productModalOpen=!1,this.notify("success","Berhasil",o.message)}}catch(t){this.notify("error","Gagal",t.message)}},openDeleteProductModal(t){this.productToDelete=t,this.deleteProductConfirmOpen=!0},async confirmDeleteProduct(){if(this.productToDelete)try{const t=this.currentRole==="superadmin"||window.location.pathname.startsWith("/superadmin")?"/superadmin":this.currentRole==="admin"||window.location.pathname.startsWith("/admin")?"/admin":"/user",e=await Y(`${t}/produk/${this.productToDelete.id}`,{method:"DELETE"});e.success&&(this.products=this.products.filter(n=>n.id!==this.productToDelete.id),this.deleteProductConfirmOpen=!1,this.notify("warning","Terhapus",e.message),this.productToDelete=null)}catch(t){this.notify("error","Gagal",t.message)}},openCreateEventModal(){this.isEditingEvent=!1,this.eventFormData={id:null,name:"",slug:"",start_date:"",end_date:"",location:"",qris_payload:""},this.eventModalOpen=!0},openEditEventModal(t){this.isEditingEvent=!0,this.eventFormData={id:t.id,name:t.name,slug:t.slug,start_date:t.start_date?String(t.start_date).substring(0,10):"",end_date:t.end_date?String(t.end_date).substring(0,10):"",location:t.location||"",qris_image_url:t.qris_image_url||null,qris_payload:t.qris_payload||""},this.eventModalOpen=!0},openActivateEventModal(t){this.eventToActivate=t,this.activateEventConfirmOpen=!0},async confirmActivateEvent(){if(!this.eventToActivate)return;const t=this.eventToActivate,e=this.currentRole==="superadmin"?"superadmin":"admin";this.activateEventConfirmOpen=!1;try{const n=await Y(`/${e}/events/${t.id}/activate`,{method:"POST",loadingText:"Mengaktifkan event..."});n.success?(this.events.forEach(r=>{r.is_active=r.id===t.id}),n.event&&(this.activeEvent=n.event),this.notify("success","Event Diaktifkan",n.message)):this.notify("error","Gagal",n.message||"Gagal mengaktifkan event.")}catch(n){this.notify("error","Gagal",n.message||"Gagal mengaktifkan event.")}finally{this.eventToActivate=null}},openNewTicketModal(){this.ticketFormData={category:"Kasir & Pembayaran",subject:"",message:""},this.ticketModalOpen=!0},async saveNewTicket(){if(!this.ticketFormData.subject.trim()||!this.ticketFormData.message.trim()){this.notify("error","Form Tidak Lengkap","Subjek dan rincian kendala wajib diisi.");return}try{const t=await Y("/user/helpdesk",{method:"POST",body:{category:this.ticketFormData.category,subject:this.ticketFormData.subject.trim(),message:this.ticketFormData.message.trim()}});t.success&&t.ticket&&(this.helpdesk.unshift(t.ticket),this.ticketModalOpen=!1,this.notify("success","Tiket Terkirim",`Tiket ${t.ticket.ticket_code} berhasil dibuat.`))}catch(t){this.notify("error","Gagal",t.message)}},async sendTicketReply(){if(!this.selectedTicket||!this.ticketReplyText.trim())return;const t=this.currentRole,e=t==="admin"||t==="superadmin"?`/admin/helpdesk/${this.selectedTicket.id}/reply`:`/user/helpdesk/${this.selectedTicket.id}/reply`;try{const n=await Y(e,{method:"POST",body:{message:this.ticketReplyText.trim()}});if(n.success&&n.ticket){const r=this.helpdesk.findIndex(o=>o.id===this.selectedTicket.id);r!==-1&&(this.helpdesk[r]=n.ticket,this.selectedTicket=n.ticket),this.ticketReplyText="",this.notify("success","Balasan Terkirim",n.message||"Pesan berhasil dikirim.")}}catch(n){this.notify("error","Gagal",n.message)}},async changeTicketStatus(t,e){try{const n=await Y(`/admin/helpdesk/${t}/status`,{method:"POST",body:{status:e}});if(n.success&&n.ticket){const r=this.helpdesk.findIndex(o=>o.id===t);r!==-1&&(this.helpdesk[r]=n.ticket,this.selectedTicket&&this.selectedTicket.id===t&&(this.selectedTicket=n.ticket)),this.notify("info","Status Tiket Diubah",n.message||`Status tiket kini: ${e}`)}}catch(n){this.notify("error","Gagal",n.message)}},openReceipt(t){this.activeReceiptTransaction=t,this.receiptModalOpen=!0},printReceipt(){const t=this.activeReceiptTransaction;if(!t){window.print();return}const e=this.getActiveEvent(),n=this.getCurrentStore(),r=(t.items||[]).map((s,a)=>`
 <tr>
 <td style="text-align: center; color: #64748b;">${a+1}</td>
 <td style="font-weight: 600; color: #0f172a;">${s.title}</td>
 <td style="text-align: right; color: #475569;">${s.is_negotiated?`<s style="color:#94a3b8;">${I(s.original_price)}</s> `:""}${I(s.price)}</td>
 <td style="text-align: center; font-weight: 700; color: #0f172a;">${s.qty}</td>
 <td style="text-align: right; font-weight: 700; color: #0f172a;">${I(s.subtotal)}</td>
 </tr>
 `).join(""),o=t.payment_method==="cash"?`
 <tr>
 <td style="padding: 4px 0; color: #475569;">Metode Pembayaran:</td>
 <td style="padding: 4px 0; text-align: right; font-weight: 700; color: #0f172a; text-transform: uppercase;">TUNAI / CASH</td>
 </tr>
 <tr>
 <td style="padding: 4px 0; color: #475569;">Uang Diterima:</td>
 <td style="padding: 4px 0; text-align: right; font-weight: 700; color: #0f172a;">${I(t.amount_paid)}</td>
 </tr>
 <tr>
 <td style="padding: 4px 0; color: #047857; font-weight: 700;">Kembalian:</td>
 <td style="padding: 4px 0; text-align: right; font-weight: 800; color: #047857; font-size: 14px;">${I(t.change_due)}</td>
 </tr>
 `:`
 <tr>
 <td style="padding: 4px 0; color: #475569;">Metode Pembayaran:</td>
 <td style="padding: 4px 0; text-align: right; font-weight: 700; color: #1d4ed8;">QRIS RESMI </td>
 </tr>
 <tr>
 <td style="padding: 4px 0; color: #475569;">Status Pembayaran:</td>
 <td style="padding: 4px 0; text-align: right; font-weight: 700; color: #047857;">${t.status==="paid"?"LUNAS / TERVERIFIKASI":"MENUNGGU VERIFIKASI"}</td>
 </tr>
 `,i=`
 <!DOCTYPE html>
 <html lang="id">
 <head>
 <meta charset="utf-8">
 <title>Struk_${t.invoice_code.replace(/[^a-zA-Z0-9]/g,"_")}</title>
 <style>
 @page {
 size: auto;
 margin: 12mm 15mm;
 }
 * {
 box-sizing: border-box;
 margin: 0;
 padding: 0;
 }
 body {
 font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
 color: #1e293b;
 background: #ffffff;
 font-size: 12px;
 line-height: 1.5;
 padding: 8px;
 }
.container {
 max-width: 620px;
 margin: 0 auto;
 border: 1px solid #e2e8f0;
 border-radius: 12px;
 padding: 24px;
 background: #ffffff;
 }
.header {
 display: flex;
 justify-content: space-between;
 align-items: flex-start;
 padding-bottom: 16px;
 border-bottom: 2px solid #059669;
 }
.store-name {
 font-size: 18px;
 font-weight: 800;
 color: #0f172a;
 letter-spacing: -0.3px;
 }
.event-name {
 font-size: 13px;
 font-weight: 700;
 color: #059669;
 margin-top: 2px;
 }
.store-sub {
 font-size: 11px;
 color: #64748b;
 margin-top: 2px;
 }
.invoice-info {
 text-align: right;
 }
.transaction-code {
 font-size: 24px;
 font-weight: 900;
 color: #1d4ed8;
 text-align: center;
 margin: 16px 0;
 padding: 10px;
 border: 2px dashed #1d4ed8;
 border-radius: 12px;
 letter-spacing: 3px;
 background: #f0f7ff;
 }
.transaction-code-label {
 font-size: 10px;
 font-weight: 800;
 color: #64748b;
 letter-spacing: 1px;
 text-transform: uppercase;
 display: block;
 margin-bottom: 2px;
 }
.badge-paid {
 display: inline-block;
 background: #ecfdf5;
 color: #047857;
 border: 1px solid #a7f3d0;
 font-weight: 800;
 font-size: 10px;
 padding: 3px 8px;
 border-radius: 6px;
 text-transform: uppercase;
 margin-bottom: 4px;
 }
.invoice-code {
 font-size: 14px;
 font-weight: 800;
 color: #0f172a;
 font-family: monospace;
 }
.invoice-date {
 font-size: 11px;
 color: #64748b;
 margin-top: 2px;
 }
.meta-bar {
 display: flex;
 justify-content: space-between;
 background: #f8fafc;
 border: 1px solid #e2e8f0;
 border-radius: 8px;
 padding: 10px 14px;
 margin: 16px 0;
 font-size: 11px;
 }
.meta-item span:first-child {
 color: #64748b;
 margin-right: 4px;
 }
.meta-item span:last-child {
 font-weight: 700;
 color: #0f172a;
 }
 table.items-table {
 width: 100%;
 border-collapse: collapse;
 margin: 16px 0;
 }
 table.items-table th {
 background: #f1f5f9;
 color: #475569;
 font-size: 10px;
 font-weight: 800;
 text-transform: uppercase;
 letter-spacing: 0.5px;
 padding: 8px 10px;
 border-bottom: 1px solid #cbd5e1;
 }
 table.items-table td {
 padding: 10px 10px;
 border-bottom: 1px solid #f1f5f9;
 font-size: 12px;
 }
.summary-container {
 display: flex;
 justify-content: flex-end;
 margin-top: 10px;
 margin-bottom: 20px;
 }
.summary-box {
 width: 280px;
 }
.summary-box table {
 width: 100%;
 border-collapse: collapse;
 }
.total-row {
 border-top: 2px solid #e2e8f0;
 border-bottom: 2px solid #e2e8f0;
 }
.total-row td {
 padding: 8px 0 !important;
 font-size: 15px !important;
 font-weight: 900 !important;
 color: #0f172a !important;
 }
.footer {
 border-top: 1px dashed #cbd5e1;
 padding-top: 14px;
 margin-top: 32px;
 text-align: center;
 font-size: 11px;
 color: #94a3b8;
 border-top: 1px solid #e2e8f0;
 padding-top: 16px;
 }
.footer p {
 margin-bottom: 2px;
 }
 @media print {
 body {
 background: none;
 padding: 0;
 }
.container {
 border: none;
 padding: 0;
 max-width: 100%;
 }
 }
 </style>
 </head>
 <body onload="window.print(); window.onafterprint = function(){ window.close(); }">
 <div class="container">
 <div class="transaction-code">
 <span class="transaction-code-label">NOMOR PESANAN / KODE TRANSAKSI</span>
 #${String(t.id||0).padStart(4,"0")}
 </div>
 <!-- Header -->
 <div class="header">
 <div>
 <div class="store-name">${t.store_name||n.name}</div>
 <div class="event-name">${e?e.name:"Bazar UMKM Kuliner Nusantara 2026"}</div>
 <div class="store-sub">Cabang: ${n.booth_number||"-"} • ${e?e.location:"-"} • Telp/WA: ${n.phone||"-"}</div>
 </div>
 <div class="invoice-info">
 <div class="badge-paid">BUKTI PEMBAYARAN SAH</div>
 <div class="invoice-code">${t.invoice_code}</div>
 <div class="invoice-date">${ct(t.paid_at||t.created_at)}</div>
 </div>
 </div>

 <!-- Meta Bar -->
 <div class="meta-bar">
 <div class="meta-item">
 <span>Kasir:</span>
 <span>${t.cashier_name||"Kasir Cabang"}</span>
 </div>
 <div class="meta-item">
 <span>Metode:</span>
 <span style="text-transform: uppercase;">${t.payment_method}</span>
 </div>
 <div class="meta-item">
 <span>Status:</span>
 <span style="color: #047857;">${t.status.toUpperCase()}</span>
 </div>
 </div>

 <!-- Table of Items -->
 <table class="items-table">
 <thead>
 <tr>
 <th style="width: 35px; text-align: center;">No</th>
 <th style="text-align: left;">Nama Menu / Produk</th>
 <th style="text-align: right;">Harga Satuan</th>
 <th style="text-align: center; width: 50px;">Qty</th>
 <th style="text-align: right;">Subtotal</th>
 </tr>
 </thead>
 <tbody>
 ${r}
 </tbody>
 </table>

 <!-- Summary Section -->
 <div class="summary-container">
 <div class="summary-box">
 <table>
 <tr>
 <td style="padding: 4px 0; color: #64748b;">Subtotal Item:</td>
 <td style="padding: 4px 0; text-align: right; font-weight: 600;">${I(t.total_amount)}</td>
 </tr>
 <tr class="total-row">
 <td>TOTAL TAGIHAN:</td>
 <td style="text-align: right; color: #8b9b70;">${I(t.total_amount)}</td>
 </tr>
 ${t.status==="paid"?"":`
 <tr>
 <td colspan="2" style="padding: 4px 0; text-align: center; color: #f59e0b; font-size: 11px; font-weight: bold; font-style: italic;">(Menunggu konfirmasi pembayaran)</td>
 </tr>
 `}
 ${o}
 </table>
 </div>
 </div>

 <!-- Footer -->
 <div class="footer">
 <p style="font-weight: 700; color: #1e293b;">Terima kasih atas kunjungan Anda!</p>
 <p>Struk ini dicetak otomatis oleh sistem POS Kasir UMKM Event dan merupakan bukti transaksi yang sah.</p>
 <p style="font-size: 10px; color: #94a3b8; margin-top: 4px;">Dukung & Bangga Produk UMKM Indonesia</p>
 </div>
 </div>

 <script>
 window.onload = function() {
 window.print();
 setTimeout(function() {
 window.close();
 }, 500);
 };
 <\/script>
 </body>
 </html>
 `;this.printDocument(i)},printDocument(t){try{const e=document.createElement("iframe");e.style.position="fixed",e.style.right="0",e.style.bottom="0",e.style.width="0",e.style.height="0",e.style.border="0",document.body.appendChild(e);const n=e.contentWindow.document;n.open(),n.write(t),n.close(),setTimeout(()=>{e.contentWindow.focus(),e.contentWindow.print(),setTimeout(()=>{document.body.removeChild(e)},1500)},300)}catch(e){console.warn("Iframe print fallback to window.open",e);const n=window.open("","_blank","width=900,height=1000");n?(n.document.open(),n.document.write(t),n.document.close(),setTimeout(()=>{n.focus(),n.print()},400)):window.print()}},printAdminReport(t=null){const e=t||this.transactions,n=this.getActiveEvent()||{name:"Event Bazaar UMKM",location:"-"},r=this.getAdminReportStats(),o=new Date().toLocaleDateString("id-ID",{weekday:"long",day:"numeric",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit",timeZone:Ot}),s=this.stores.map(d=>{const u=e.filter(h=>h.store_id===d.id&&h.status==="paid"),g=u.reduce((h,w)=>h+w.total_amount,0);return{name:d.name,booth:d.booth_number||"-",count:u.length,gross:g}}).map((d,u)=>`
 <tr>
 <td style="text-align: center; border: 1px solid #000; padding: 6px 8px;">${u+1}</td>
 <td style="border: 1px solid #000; padding: 6px 8px; font-weight: bold;">${d.name}</td>
 <td style="text-align: center; border: 1px solid #000; padding: 6px 8px;">${d.booth}</td>
 <td style="text-align: center; border: 1px solid #000; padding: 6px 8px;">${d.count}</td>
 <td style="text-align: right; border: 1px solid #000; padding: 6px 8px; font-weight: bold;">${I(d.gross)}</td>
 </tr>
 `).join(""),a=e.map((d,u)=>{const g=d.is_without_payment||d.status==="rejected"&&d.rejection_reason==="Tanpa Pembayaran";return`
 <tr style="${d.status==="cancelled"?"text-decoration: line-through; color: #555;":""}">
 <td style="text-align: center; border: 1px solid #000; padding: 5px 6px;">${u+1}</td>
 <td style="border: 1px solid #000; padding: 5px 6px; font-family: monospace; font-weight: bold;">${d.invoice_code}</td>
 <td style="border: 1px solid #000; padding: 5px 6px; font-size: 11px;">${ct(d.paid_at||d.created_at)}</td>
 <td style="border: 1px solid #000; padding: 5px 6px;">${d.store_name||"-"}</td>
 <td style="text-align: center; border: 1px solid #000; padding: 5px 6px; text-transform: uppercase; font-size: 11px;">${d.payment_method}</td>
 <td style="text-align: right; border: 1px solid #000; padding: 5px 6px; font-weight: bold;">${g?"-":I(d.total_amount)}</td>
 <td style="text-align: center; border: 1px solid #000; padding: 5px 6px; font-weight: bold; font-size: 11px;">${g?"TANPA PEMBAYARAN":d.status.toUpperCase()}</td>
 </tr>
 `}).join(""),l=window.__LOGO_BASE64__||window.__LOGO_URL__||"",c=`
 <!DOCTYPE html>
 <html lang="id">
 <head>
 <meta charset="UTF-8">
 <title>Laporan Penjualan — ${n.name}</title>
 <style>
 @page {
 size: A4 portrait;
 margin: 15mm 12mm 15mm 12mm;
 }
 * {
 box-sizing: border-box;
 -webkit-print-color-adjust: exact;
 print-color-adjust: exact;
 }
 body {
 font-family: 'Arial', 'Helvetica', sans-serif;
 font-size: 12px;
 line-height: 1.4;
 color: #000;
 background: #fff;
 margin: 0;
 padding: 0;
 }
.header {
 border-bottom: 3px double #000;
 padding-bottom: 8px;
 margin-bottom: 14px;
 }
.header h1 {
 font-size: 15px;
 font-weight: 900;
 text-transform: uppercase;
 margin: 0 0 2px 0;
 letter-spacing: 0.5px;
 }
.header h2 {
 font-size: 12px;
 font-weight: bold;
 margin: 0 0 3px 0;
 }
.header.meta {
 font-size: 10px;
 color: #333;
 }
.section-title {
 font-size: 12px;
 font-weight: bold;
 text-transform: uppercase;
 margin: 16px 0 6px 0;
 border-bottom: 1px solid #000;
 padding-bottom: 3px;
 }
.summary-grid {
 width: 100%;
 border-collapse: collapse;
 margin-bottom: 14px;
 }
.summary-grid td {
 border: 1px solid #000;
 padding: 7px 9px;
 vertical-align: top;
 }
.summary-label {
 font-size: 9.5px;
 text-transform: uppercase;
 font-weight: bold;
 color: #333;
 display: block;
 }
.summary-value {
 font-size: 14px;
 font-weight: 900;
 margin-top: 2px;
 display: block;
 }
.summary-sub {
 font-size: 9.5px;
 color: #444;
 margin-top: 1px;
 display: block;
 }
 table.data-table {
 width: 100%;
 border-collapse: collapse;
 font-size: 10.5px;
 margin-bottom: 14px;
 }
 table.data-table th {
 border: 1px solid #000;
 background-color: #eee !important;
 padding: 5px 7px;
 font-weight: bold;
 text-align: left;
 font-size: 9.5px;
 text-transform: uppercase;
 }
.signature-table {
 width: 100%;
 margin-top: 28px;
 page-break-inside: avoid;
 }
.signature-table td {
 width: 50%;
 text-align: center;
 vertical-align: top;
 font-size: 11px;
 }
.signature-space {
 height: 55px;
 }
.footer-note {
 margin-top: 20px;
 padding-top: 6px;
 border-top: 1px dashed #000;
 font-size: 9px;
 text-align: center;
 color: #444;
 }
 </style>
 </head>
 <body>
 <div class="header">
 <table style="width: 100%; border: none;">
 <tr>
 ${l?`
 <td style="width: 65px; border: none; text-align: left; vertical-align: middle; padding: 0;">
 <img src="${l}" style="height: 50px; width: auto; object-fit: contain;">
 </td>
 `:""}
 <td style="border: none; text-align: ${l?"left":"center"}; vertical-align: middle; padding: 0 0 0 10px;">
 <h1>Laporan Penjualan</h1>
 <h2>${n.name} &bull; ${n.location||"-"}</h2>
 <div class="meta">
 <span>Tanggal Cetak: <strong>${o}</strong></span> &bull;
 <span>Sistem: <strong>RZ Kasir</strong></span>
 </div>
 </td>
 </tr>
 </table>
 </div>

 <div class="section-title">1. Ringkasan Eksekutif Finansial</div>
 <table class="summary-grid">
 <tr>
 <td style="width: 50%; background: #f2f2f2;">
 <span class="summary-label">Total Omzet</span>
 <span class="summary-value">${I(r.totalGross)}</span>
 <span class="summary-sub">Seluruh transaksi lunas</span>
 </td>
 <td style="width: 50%;">
 <span class="summary-label">Jumlah Transaksi Lunas</span>
 <span class="summary-value">${r.paidCount} Transaksi</span>
 <span class="summary-sub">Cash & QRIS</span>
 </td>
 </tr>
 </table>

 <div class="section-title">2. Rekapitulasi Pendapatan per Cabang / Cabang</div>
 <table class="data-table">
 <thead>
 <tr>
 <th style="text-align: center; width: 30px;">No</th>
 <th>Nama Cabang</th>
 <th style="text-align: center; width: 70px;">Kode</th>
 <th style="text-align: center; width: 60px;">Tx Lunas</th>
 <th style="text-align: right; width: 120px;">Total Omzet</th>
 </tr>
 </thead>
 <tbody>
 ${s.length>0?s:'<tr><td colspan="5" style="text-align: center; padding: 8px; border: 1px solid #000;">Belum ada data cabang</td></tr>'}
 </tbody>
 </table>

 <div class="section-title">3. Rincian Data Transaksi (Total ${e.length} Transaksi)</div>
 <table class="data-table">
 <thead>
 <tr>
 <th style="text-align: center; width: 28px;">No</th>
 <th style="width: 105px;">Invoice</th>
 <th style="width: 85px;">Waktu</th>
 <th>Cabang</th>
 <th style="text-align: center; width: 50px;">Metode</th>
 <th style="text-align: right; width: 100px;">Nominal</th>
 <th style="text-align: center; width: 60px;">Status</th>
 </tr>
 </thead>
 <tbody>
 ${a.length>0?a:'<tr><td colspan="7" style="text-align: center; padding: 8px; border: 1px solid #000;">Belum ada transaksi</td></tr>'}
 </tbody>
 </table>

 <div class="footer-note">
 Dokumen ini digenerate otomatis oleh Sistem RZ Kasir.
 </div>
 </body>
 </html>
 `;this.printDocument(c)},printCabangReport(t){const e=this.stores.find(w=>w.id==t)||this.userStores.find(w=>w.id==t)||{name:"Cabang",booth_number:"-"},n=this.getActiveEvent()||{name:"Event Bazaar UMKM"},r=this.transactions.filter(w=>w.store_id==t),o=r.filter(w=>w.status==="paid"),i=o.reduce((w,m)=>w+m.total_amount,0),s=o.reduce((w,m)=>w+(m.revenue_split?.owner_share||m.total_amount*.75),0);o.reduce((w,m)=>w+(m.revenue_split?.admin_net_share||m.total_amount*.225),0),o.reduce((w,m)=>w+(m.revenue_split?.superadmin_share||m.total_amount*.025),0);const a=o.length,l=o.filter(w=>w.payment_method==="cash").length,c=o.filter(w=>w.payment_method==="qris").length,d=new Date().toLocaleDateString("id-ID",{weekday:"long",day:"numeric",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit",timeZone:Ot}),u=r.map((w,m)=>{const y=w.is_without_payment||w.status==="rejected"&&w.rejection_reason==="Tanpa Pembayaran";return`
 <tr style="${w.status==="cancelled"?"text-decoration: line-through; color: #555;":""}">
 <td style="text-align: center; border: 1px solid #000; padding: 5px 6px;">${m+1}</td>
 <td style="border: 1px solid #000; padding: 5px 6px; font-family: monospace; font-weight: bold;">${w.invoice_code}</td>
 <td style="border: 1px solid #000; padding: 5px 6px; font-size: 11px;">${ct(w.paid_at||w.created_at)}</td>
 <td style="text-align: center; border: 1px solid #000; padding: 5px 6px; text-transform: uppercase; font-size: 11px;">${w.payment_method}</td>
 <td style="text-align: right; border: 1px solid #000; padding: 5px 6px; font-weight: bold;">${y?"-":I(w.total_amount)}</td>
 <td style="text-align: right; border: 1px solid #000; padding: 5px 6px; font-weight: bold;">${w.status==="paid"?I(w.revenue_split?.owner_share||w.total_amount*.75):"-"}</td>
 <td style="text-align: right; border: 1px solid #000; padding: 5px 6px; font-weight: bold;">${w.status==="paid"?I(w.revenue_split?.admin_gross_share||w.total_amount*.25):"-"}</td>
 <td style="text-align: center; border: 1px solid #000; padding: 5px 6px; font-weight: bold; font-size: 11px;">${y?"TANPA PEMBAYARAN":w.status.toUpperCase()}</td>
 </tr>
 `}).join(""),g=window.__LOGO_BASE64__||window.__LOGO_URL__||"",h=`
 <!DOCTYPE html>
 <html lang="id">
 <head>
 <meta charset="UTF-8">
 <title>Laporan Penjualan & Bagi Hasil Cabang — ${e.name}</title>
 <style>
 @page {
 size: A4 portrait;
 margin: 15mm 12mm 15mm 12mm;
 }
 * {
 box-sizing: border-box;
 -webkit-print-color-adjust: exact;
 print-color-adjust: exact;
 }
 body {
 font-family: 'Arial', 'Helvetica', sans-serif;
 font-size: 12px;
 line-height: 1.4;
 color: #000;
 background: #fff;
 margin: 0;
 padding: 0;
 }
.header {
 border-bottom: 3px double #000;
 padding-bottom: 8px;
 margin-bottom: 14px;
 }
.header h1 {
 font-size: 15px;
 font-weight: 900;
 text-transform: uppercase;
 margin: 0 0 2px 0;
 letter-spacing: 0.5px;
 }
.header h2 {
 font-size: 12px;
 font-weight: bold;
 margin: 0 0 3px 0;
 }
.header.meta {
 font-size: 10px;
 color: #333;
 }
.section-title {
 font-size: 12px;
 font-weight: bold;
 text-transform: uppercase;
 margin: 16px 0 6px 0;
 border-bottom: 1px solid #000;
 padding-bottom: 3px;
 }
.summary-grid {
 width: 100%;
 border-collapse: collapse;
 margin-bottom: 14px;
 }
.summary-grid td {
 border: 1px solid #000;
 padding: 7px 9px;
 vertical-align: top;
 }
.summary-label {
 font-size: 9.5px;
 text-transform: uppercase;
 font-weight: bold;
 color: #333;
 display: block;
 }
.summary-value {
 font-size: 14px;
 font-weight: 900;
 margin-top: 2px;
 display: block;
 }
.summary-sub {
 font-size: 9.5px;
 color: #444;
 margin-top: 1px;
 display: block;
 }
 table.data-table {
 width: 100%;
 border-collapse: collapse;
 font-size: 10.5px;
 margin-bottom: 14px;
 }
 table.data-table th {
 border: 1px solid #000;
 background-color: #eee !important;
 padding: 5px 7px;
 font-weight: bold;
 text-align: left;
 font-size: 9.5px;
 text-transform: uppercase;
 }
.signature-table {
 width: 100%;
 margin-top: 28px;
 page-break-inside: avoid;
 }
.signature-table td {
 width: 50%;
 text-align: center;
 vertical-align: top;
 font-size: 11px;
 }
.signature-space {
 height: 55px;
 }
.footer-note {
 margin-top: 20px;
 padding-top: 6px;
 border-top: 1px dashed #000;
 font-size: 9px;
 text-align: center;
 color: #444;
 }
 </style>
 </head>
 <body>
 <div class="header">
 <table style="width: 100%; border: none;">
 <tr>
 ${g?`
 <td style="width: 65px; border: none; text-align: left; vertical-align: middle; padding: 0;">
 <img src="${g}" style="height: 50px; width: auto; object-fit: contain;">
 </td>
 `:""}
 <td style="border: none; text-align: ${g?"left":"center"}; vertical-align: middle; padding: 0 0 0 10px;">
 <h1>Laporan Penjualan & Bagi Hasil Cabang</h1>
 <h2>${e.name} (${e.booth_number?"Cabang "+e.booth_number:"Cabang"}) &bull; ${n.name}</h2>
 <div class="meta">
 <span>Pemilik: <strong>${e.owner_name||"-"}</strong> (${e.phone||"-"})</span> &bull;
 <span>Tanggal Cetak: <strong>${d}</strong></span> &bull; 
 <span>Sistem: <strong>RZ Event</strong></span>
 </div>
 </td>
 </tr>
 </table>
 </div>

 <div class="section-title">1. Ringkasan Eksekutif Finansial Cabang</div>
 <table class="summary-grid">
 <tr>
 <td style="width: 33.3%;">
 <span class="summary-label">Total Omzet Cabang</span>
 <span class="summary-value">${I(i)}</span>
 <span class="summary-sub">${a} Tx Paid (${l} Cash / ${c} QRIS)</span>
 </td>
 <td style="width: 33.3%; background: #f2f2f2;">
 <span class="summary-label">Hak Bersih Cabang (75%)</span>
 <span class="summary-value">${I(s)}</span>
 <span class="summary-sub">Porsi Hak Pemilik Cabang</span>
 </td>
 <td style="width: 33.3%;">
 <span class="summary-label">Bagian (25%)</span>
 <span class="summary-value">${I(i*.25)}</span>
 <span class="summary-sub">Bagi Hasil Penyelenggara</span>
 </td>
 </tr>
 </table>

 <div class="section-title">2. Rincian Data Transaksi Cabang (Total ${r.length} Transaksi)</div>
 <table class="data-table">
 <thead>
 <tr>
 <th style="text-align: center; width: 28px;">No</th>
 <th style="width: 110px;">Invoice</th>
 <th style="width: 95px;">Waktu</th>
 <th style="text-align: center; width: 60px;">Metode</th>
 <th style="text-align: right; width: 90px;">Nominal</th>
 <th style="text-align: right; width: 95px;">Cabang (75%)</th>
 <th style="text-align: right; width: 90px;">Bagian (25%)</th>
 <th style="text-align: center; width: 70px;">Status</th>
 </tr>
 </thead>
 <tbody>
 ${u.length>0?u:'<tr><td colspan="8" style="text-align: center; padding: 8px; border: 1px solid #000;">Belum ada transaksi pada cabang ini</td></tr>'}
 </tbody>
 </table>

 <table class="signature-table">
 <tr>
 <td>
 <div>Dibuat & Divalidasi Oleh:</div>
 <div style="font-weight: bold; margin-top: 2px;">Admin Event Organizer</div>
 <div class="signature-space"></div>
 <div>( __________________________)</div>
 <div style="font-size: 10px; color: #555; margin-top: 2px;">Pemilik</div>
 </td>
 <td>
 <div>Mengetahui & Menyetujui:</div>
 <div style="font-weight: bold; margin-top: 2px;">Pemilik Cabang / Cabang</div>
 <div class="signature-space"></div>
 <div>( ${e.owner_name||"__________________________"})</div>
 <div style="font-size: 10px; color: #555; margin-top: 2px;">${e.name}</div>
 </td>
 </tr>
 </table>

 <div class="footer-note">
 Dokumen ini digenerate otomatis oleh Sistem RZ &bull; Dokumen resmi untuk proses rekonsiliasi finansial dan pembagian hasil.
 </div>
 </body>
 </html>
 `;this.printDocument(h)},printUserReport(t=null){const e=this.getCurrentStore()||{id:1,name:"Cabang"},n=this.getActiveEvent()||{name:"Event Bazaar UMKM",location:"-"},r=this.getUserReportStats(e.id),o=t||this.transactions.filter(c=>c.store_id===e.id),i=window.__LOGO_BASE64__||window.__LOGO_URL__||"",s=new Date().toLocaleDateString("id-ID",{weekday:"long",day:"numeric",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit",timeZone:Ot}),a=o.map((c,d)=>{const u=c.is_without_payment||c.status==="rejected"&&c.rejection_reason==="Tanpa Pembayaran";return`
 <tr style="${c.status==="cancelled"?"text-decoration: line-through; color: #555;":""}">
 <td style="text-align: center; border: 1px solid #000; padding: 5px 6px;">${d+1}</td>
 <td style="border: 1px solid #000; padding: 5px 6px; font-family: monospace; font-weight: bold;">${c.invoice_code}</td>
 <td style="border: 1px solid #000; padding: 5px 6px; font-size: 11px;">${ct(c.paid_at||c.created_at)}</td>
 <td style="text-align: center; border: 1px solid #000; padding: 5px 6px; text-transform: uppercase; font-size: 11px;">${c.payment_method}</td>
 <td style="text-align: right; border: 1px solid #000; padding: 5px 6px; font-weight: bold;">${u?"-":I(c.total_amount)}</td>
 <td style="text-align: center; border: 1px solid #000; padding: 5px 6px; font-weight: bold; font-size: 11px;">${u?"TANPA PEMBAYARAN":c.status.toUpperCase()}</td>
 </tr>
 `}).join(""),l=`
 <!DOCTYPE html>
 <html lang="id">
 <head>
 <meta charset="UTF-8">
 <title>Laporan Penjualan Cabang — ${e.name}</title>
 <style>
 @page {
 size: A4 portrait;
 margin: 15mm 12mm 15mm 12mm;
 }
 * {
 box-sizing: border-box;
 -webkit-print-color-adjust: exact;
 print-color-adjust: exact;
 }
 body {
 font-family: 'Arial', 'Helvetica', sans-serif;
 font-size: 12px;
 line-height: 1.4;
 color: #000;
 background: #fff;
 margin: 0;
 padding: 0;
 }
.header {
 border-bottom: 3px double #000;
 padding-bottom: 8px;
 margin-bottom: 14px;
 }
.header h1 {
 font-size: 15px;
 font-weight: 900;
 text-transform: uppercase;
 margin: 0 0 2px 0;
 letter-spacing: 0.5px;
 }
.header h2 {
 font-size: 12px;
 font-weight: bold;
 margin: 0 0 3px 0;
 }
.header.meta {
 font-size: 10px;
 color: #333;
 }
.section-title {
 font-size: 12px;
 font-weight: bold;
 text-transform: uppercase;
 margin: 16px 0 6px 0;
 border-bottom: 1px solid #000;
 padding-bottom: 3px;
 }
.summary-grid {
 width: 100%;
 border-collapse: collapse;
 margin-bottom: 14px;
 }
.summary-grid td {
 border: 1px solid #000;
 padding: 7px 9px;
 vertical-align: top;
 }
.summary-label {
 font-size: 9.5px;
 text-transform: uppercase;
 font-weight: bold;
 color: #333;
 display: block;
 }
.summary-value {
 font-size: 14px;
 font-weight: 900;
 margin-top: 2px;
 display: block;
 }
 table.data-table {
 width: 100%;
 border-collapse: collapse;
 font-size: 10.5px;
 margin-bottom: 14px;
 }
 table.data-table th {
 border: 1px solid #000;
 background-color: #eee !important;
 padding: 5px 7px;
 font-weight: bold;
 text-align: left;
 font-size: 9.5px;
 text-transform: uppercase;
 }
.footer-note {
 margin-top: 24px;
 padding-top: 8px;
 border-top: 1px dashed #000;
 font-size: 9px;
 text-align: center;
 color: #444;
 }
 </style>
 </head>
 <body>
 <div class="header">
 <table style="width: 100%; border: none;">
 <tr>
 ${i?`
 <td style="width: 65px; border: none; text-align: left; vertical-align: middle; padding: 0;">
 <img src="${i}" style="height: 50px; width: auto; object-fit: contain;">
 </td>
 `:""}
 <td style="border: none; text-align: ${i?"left":"center"}; vertical-align: middle; padding: 0 0 0 10px;">
 <h1>Laporan Penjualan Cabang</h1>
 <h2>${e.name} &bull; ${n.name}</h2>
 <div class="meta">
 <span>Tanggal Cetak: <strong>${s}</strong></span> &bull;
 <span>Lokasi: <strong>${n.location||"-"}</strong></span> &bull;
 <span>Sistem: <strong>RZ Kasir</strong></span>
 </div>
 </td>
 </tr>
 </table>
 </div>

 <div class="section-title">1. Ringkasan Omzet Cabang</div>
 <table class="summary-grid">
 <tr>
 <td style="width: 33.3%; background: #f2f2f2;">
 <span class="summary-label">Total Omzet</span>
 <span class="summary-value">${I(r.totalGross)}</span>
 <span style="font-size: 9.5px; color: #444;">${r.totalCount} Transaksi Lunas</span>
 </td>
 <td style="width: 33.3%;">
 <span class="summary-label">Total Cash</span>
 <span class="summary-value">${I(r.totalCash)}</span>
 <span style="font-size: 9.5px; color: #444;">Pembayaran tunai</span>
 </td>
 <td style="width: 33.3%;">
 <span class="summary-label">Total QRIS</span>
 <span class="summary-value">${I(r.totalQris)}</span>
 <span style="font-size: 9.5px; color: #444;">Pembayaran QRIS</span>
 </td>
 </tr>
 </table>

 <div class="section-title">2. Rincian Riwayat Transaksi</div>
 <table class="data-table">
 <thead>
 <tr>
 <th style="text-align: center; width: 28px;">No</th>
 <th style="width: 130px;">Invoice</th>
 <th style="width: 120px;">Waktu</th>
 <th style="text-align: center; width: 70px;">Metode</th>
 <th style="text-align: right; width: 120px;">Total Belanja</th>
 <th style="text-align: center; width: 75px;">Status</th>
 </tr>
 </thead>
 <tbody>
 ${a.length>0?a:'<tr><td colspan="6" style="text-align: center; padding: 8px; border: 1px solid #000;">Belum ada transaksi</td></tr>'}
 </tbody>
 </table>

 <div class="footer-note">
 Dokumen ini digenerate otomatis oleh Sistem RZ Kasir.
 </div>
 </body>
 </html>
 `;this.printDocument(l)},printSuperAdminReport(t=null){const e=this.getSuperAdminStats(),n=t||this.transactions.filter(l=>l.status==="paid"),r=this.getActiveEvent()||{name:"Multi-Event UMKM"},o=new Date().toLocaleDateString("id-ID",{weekday:"long",day:"numeric",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit",timeZone:Ot}),i=n.map((l,c)=>`
 <tr>
 <td style="text-align: center; border: 1px solid #000; padding: 5px 6px;">${c+1}</td>
 <td style="border: 1px solid #000; padding: 5px 6px; font-family: monospace; font-weight: bold;">${l.invoice_code}</td>
 <td style="border: 1px solid #000; padding: 5px 6px; font-size: 11px;">${ct(l.paid_at||l.created_at)}</td>
 <td style="border: 1px solid #000; padding: 5px 6px;">${l.store_name||"-"}</td>
 <td style="text-align: center; border: 1px solid #000; padding: 5px 6px; text-transform: uppercase; font-size: 11px;">${l.payment_method}</td>
 <td style="text-align: right; border: 1px solid #000; padding: 5px 6px; font-weight: bold;">${I(l.total_amount)}</td>
 </tr>
 `).join(""),s=window.__LOGO_BASE64__||window.__LOGO_URL__||"",a=`
 <!DOCTYPE html>
 <html lang="id">
 <head>
 <meta charset="UTF-8">
 <title>Laporan Omzet Sistem — ${r.name}</title>
 <style>
 @page {
 size: A4 portrait;
 margin: 15mm 12mm 15mm 12mm;
 }
 * {
 box-sizing: border-box;
 -webkit-print-color-adjust: exact;
 print-color-adjust: exact;
 }
 body {
 font-family: 'Arial', 'Helvetica', sans-serif;
 font-size: 12px;
 line-height: 1.4;
 color: #000;
 background: #fff;
 margin: 0;
 padding: 0;
 }
.header {
 text-align: center;
 border-bottom: 3px double #000;
 padding-bottom: 10px;
 margin-bottom: 14px;
 }
.header h1 {
 font-size: 16px;
 font-weight: 900;
 text-transform: uppercase;
 margin: 0 0 3px 0;
 }
.header h2 {
 font-size: 13px;
 font-weight: bold;
 margin: 0 0 5px 0;
 }
.header.meta {
 font-size: 10.5px;
 color: #222;
 }
.section-title {
 font-size: 12px;
 font-weight: bold;
 text-transform: uppercase;
 margin: 16px 0 6px 0;
 border-bottom: 1px solid #000;
 padding-bottom: 3px;
 }
.summary-grid {
 width: 100%;
 border-collapse: collapse;
 margin-bottom: 14px;
 }
.summary-grid td {
 border: 1px solid #000;
 padding: 7px 9px;
 vertical-align: top;
 }
.summary-label {
 font-size: 9.5px;
 text-transform: uppercase;
 font-weight: bold;
 color: #333;
 display: block;
 }
.summary-value {
 font-size: 14px;
 font-weight: 900;
 margin-top: 2px;
 display: block;
 }
 table.data-table {
 width: 100%;
 border-collapse: collapse;
 font-size: 10.5px;
 margin-bottom: 14px;
 }
 table.data-table th {
 border: 1px solid #000;
 background-color: #eee !important;
 padding: 5px 7px;
 font-weight: bold;
 text-align: left;
 font-size: 9.5px;
 text-transform: uppercase;
 }
.signature-table {
 width: 100%;
 margin-top: 28px;
 page-break-inside: avoid;
 }
.signature-table td {
 width: 50%;
 text-align: center;
 vertical-align: top;
 font-size: 11px;
 }
.signature-space {
 height: 55px;
 }
.footer-note {
 margin-top: 20px;
 padding-top: 6px;
 border-top: 1px dashed #000;
 font-size: 9px;
 text-align: center;
 color: #444;
 }
 </style>
 </head>
 <body>
 <div class="header">
 <table style="width: 100%; border: none;">
 <tr>
 ${s?`
 <td style="width: 65px; border: none; text-align: left; vertical-align: middle; padding: 0;">
 <img src="${s}" style="height: 50px; width: auto; object-fit: contain;">
 </td>
 `:""}
 <td style="border: none; text-align: ${s?"left":"center"}; vertical-align: middle; padding: 0 0 0 10px;">
 <h1>Laporan Omzet Lintas Cabang</h1>
 <h2>${r.name}</h2>
 <div class="meta">
 <span>Tanggal Cetak: <strong>${o}</strong></span> &bull;
 <span>Sistem: <strong>RZ Kasir</strong></span>
 </div>
 </td>
 </tr>
 </table>
 </div>

 <div class="section-title">1. Ringkasan Omzet Sistem</div>
 <table class="summary-grid">
 <tr>
 <td style="width: 33.3%; background: #f2f2f2;">
 <span class="summary-label">Total Omzet Sistem</span>
 <span class="summary-value">${I(e.totalVolume)}</span>
 <span style="font-size: 9.5px; color: #444;">Seluruh cabang</span>
 </td>
 <td style="width: 33.3%;">
 <span class="summary-label">Total Transaksi Lunas</span>
 <span class="summary-value">${n.length} Transaksi</span>
 <span style="font-size: 9.5px; color: #444;">Periode terpilih</span>
 </td>
 <td style="width: 33.3%;">
 <span class="summary-label">Total Cabang</span>
 <span class="summary-value">${e.totalEvents} Cabang</span>
 <span style="font-size: 9.5px; color: #444;">Terdaftar</span>
 </td>
 </tr>
 </table>

 <div class="section-title">2. Rincian Transaksi Lunas</div>
 <table class="data-table">
 <thead>
 <tr>
 <th style="text-align: center; width: 28px;">No</th>
 <th style="width: 120px;">Invoice</th>
 <th style="width: 95px;">Waktu</th>
 <th>Cabang</th>
 <th style="text-align: center; width: 55px;">Metode</th>
 <th style="text-align: right; width: 110px;">Total Omzet</th>
 </tr>
 </thead>
 <tbody>
 ${i.length>0?i:'<tr><td colspan="6" style="text-align: center; padding: 8px; border: 1px solid #000;">Belum ada transaksi lunas</td></tr>'}
 </tbody>
 </table>

 <div class="footer-note">
 Dokumen ini digenerate otomatis oleh Sistem RZ Kasir.
 </div>
 </body>
 </html>
 `;this.printDocument(a)},exportSuperAdminReportWord(t=null){const e=this.getSuperAdminStats(),n=t||this.transactions.filter(c=>c.status==="paid"),r=this.getActiveEvent()||{name:"Multi-Event UMKM"},o=new Date().toISOString().slice(0,10),i=new Date().toLocaleDateString("id-ID",{weekday:"long",day:"numeric",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit",timeZone:Ot}),s=n.map((c,d)=>`
 <tr>
 <td style="text-align: center; border: 1pt solid #000; padding: 4pt 5pt;">${d+1}</td>
 <td style="border: 1pt solid #000; padding: 4pt 5pt; font-family: monospace; font-weight: bold;">${c.invoice_code}</td>
 <td style="border: 1pt solid #000; padding: 4pt 5pt; font-size: 8.5pt;">${ct(c.paid_at||c.created_at)}</td>
 <td style="border: 1pt solid #000; padding: 4pt 5pt;">${c.store_name||"-"}</td>
 <td style="text-align: center; border: 1pt solid #000; padding: 4pt 5pt; text-transform: uppercase; font-size: 8.5pt;">${c.payment_method}</td>
 <td style="text-align: right; border: 1pt solid #000; padding: 4pt 5pt; font-weight: bold;">${I(c.total_amount)}</td>
 </tr>
 `).join(""),a=window.__LOGO_BASE64__||window.__LOGO_URL__||"",l=`
 <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
 <head>
 <meta charset="utf-8">
 <title>Laporan_Omzet_Sistem_${o}</title>
 <!--[if gte mso 9]>
 <xml>
 <w:WordDocument>
 <w:View>Print</w:View>
 <w:Zoom>100</w:Zoom>
 <w:DoNotOptimizeForBrowser/>
 </w:WordDocument>
 </xml>
 <![endif]-->
 <style>
 @page Section1 {
 size: 595.3pt 841.9pt; /* A4 */
 margin: 42.5pt 42.5pt 42.5pt 42.5pt;
 mso-header-margin: 35.4pt;
 mso-footer-margin: 35.4pt;
 mso-paper-source: 0;
 }
 div.Section1 { page: Section1; }
 body { font-family: 'Arial', sans-serif; font-size: 9.5pt; color: #000; line-height: 1.3; }
 h1 { font-size: 14pt; font-weight: bold; text-transform: uppercase; margin: 0 0 2pt 0; }
 h2 { font-size: 11pt; font-weight: bold; color: #111; margin: 0 0 4pt 0; }
.meta { font-size: 8.5pt; color: #333; }
.section-title { font-size: 10pt; font-weight: bold; text-transform: uppercase; margin: 12pt 0 4pt 0; border-bottom: 1pt solid #000; padding-bottom: 2pt; }
 table { width: 100%; border-collapse: collapse; margin-bottom: 10pt; font-size: 9pt; }
 th { border: 1pt solid #000; background-color: #f2f2f2; padding: 4pt 5pt; font-weight: bold; text-align: left; text-transform: uppercase; font-size: 8.5pt; }
 td { border: 1pt solid #000; padding: 4pt 5pt; vertical-align: top; }
.sig-table { width: 100%; border: none; margin-top: 24pt; }
.sig-table td { border: none; width: 50%; text-align: center; vertical-align: top; }
.sig-space { height: 48pt; }
.footer-note { font-size: 8.5pt; text-align: center; color: #555; border-top: 1pt dashed #000; padding-top: 6pt; margin-top: 16pt; }
 </style>
 </head>
 <body>
 <div class="Section1">
 <div style="border-bottom: 2pt double #000; padding-bottom: 6pt; margin-bottom: 10pt;">
 <table style="width: 100%; border: none;">
 <tr>
 ${a?`
 <td style="width: 60pt; border: none; text-align: left; vertical-align: middle; padding: 0;">
 <img src="${a}" style="height: 45pt; width: auto;" width="60" height="45">
 </td>
 `:""}
 <td style="border: none; text-align: ${a?"left":"center"}; vertical-align: middle; padding-left: 8pt;">
 <h1 style="text-align: ${a?"left":"center"};">Laporan Omzet Lintas Cabang</h1>
 <h2 style="text-align: ${a?"left":"center"};">${r.name}</h2>
 <div class="meta" style="text-align: ${a?"left":"center"};">
 Tanggal Cetak: <strong>${i}</strong> &bull; Sistem: <strong>RZ Kasir</strong>
 </div>
 </td>
 </tr>
 </table>
 </div>

 <div class="section-title">1. Ringkasan Omzet Sistem</div>
 <table>
 <tr>
 <td style="width: 33.3%; background-color: #f2f2f2;">
 <div style="font-size: 8.5pt; font-weight: bold; text-transform: uppercase; color: #444;">Total Omzet Sistem</div>
 <div style="font-size: 12pt; font-weight: bold; margin-top: 2pt;">${I(e.totalVolume)}</div>
 <div style="font-size: 8.5pt; color: #555;">Seluruh cabang</div>
 </td>
 <td style="width: 33.3%;">
 <div style="font-size: 8.5pt; font-weight: bold; text-transform: uppercase; color: #444;">Total Transaksi Lunas</div>
 <div style="font-size: 12pt; font-weight: bold; margin-top: 2pt;">${n.length} Transaksi</div>
 <div style="font-size: 8.5pt; color: #555;">Periode terpilih</div>
 </td>
 <td style="width: 33.3%;">
 <div style="font-size: 8.5pt; font-weight: bold; text-transform: uppercase; color: #444;">Total Cabang</div>
 <div style="font-size: 12pt; font-weight: bold; margin-top: 2pt;">${e.totalEvents} Cabang</div>
 <div style="font-size: 8.5pt; color: #555;">Terdaftar</div>
 </td>
 </tr>
 </table>

 <div class="section-title">2. Rincian Transaksi Lunas</div>
 <table>
 <thead>
 <tr>
 <th style="text-align: center; width: 20pt;">No</th>
 <th style="width: 70pt;">Invoice</th>
 <th style="width: 65pt;">Waktu</th>
 <th>Cabang</th>
 <th style="text-align: center; width: 40pt;">Metode</th>
 <th style="text-align: right; width: 90pt;">Total Omzet</th>
 </tr>
 </thead>
 <tbody>
 ${s.length>0?s:'<tr><td colspan="6" style="text-align: center; padding: 6pt;">Belum ada transaksi lunas</td></tr>'}
 </tbody>
 </table>

 <div class="footer-note">
 Dokumen ini digenerate otomatis oleh Sistem RZ Kasir.
 </div>
 </div>
 </body>
 </html>
 `;this.downloadReportFile(l,`Laporan_Sistem_${o}.doc`,"application/msword")},exportSuperAdminReportExcel(t=null){const e=this.getSuperAdminStats(),n=t||this.transactions.filter(l=>l.status==="paid"),r=this.getActiveEvent()||{name:"Multi-Event UMKM"},o=new Date().toISOString().slice(0,10),i=new Date().toLocaleDateString("id-ID",{weekday:"long",day:"numeric",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit",timeZone:Ot}),s=n.map((l,c)=>`
 <tr>
 <td style="text-align: center; border: 1px solid #000;">${c+1}</td>
 <td style="border: 1px solid #000; font-family: monospace;">${l.invoice_code}</td>
 <td style="border: 1px solid #000;">${ct(l.paid_at||l.created_at)}</td>
 <td style="border: 1px solid #000;">${l.store_name||"-"}</td>
 <td style="text-align: center; border: 1px solid #000; text-transform: uppercase;">${l.payment_method}</td>
 <td style="text-align: right; border: 1px solid #000; mso-number-format:'\\#\\,\\#\\#0'; ">${Mt(l.total_amount)}</td>
 </tr>
 `).join(""),a=`
 <html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40">
 <head>
 <meta charset="utf-8">
 <!--[if gte mso 9]>
 <xml>
 <x:ExcelWorkbook>
 <x:ExcelWorksheets>
 <x:ExcelWorksheet>
 <x:Name>Laporan Sistem</x:Name>
 <x:WorksheetOptions>
 <x:DisplayGridlines/>
 </x:WorksheetOptions>
 </x:ExcelWorksheet>
 </x:ExcelWorksheets>
 </x:ExcelWorkbook>
 </xml>
 <![endif]-->
 </head>
 <body>
 <table>
 <tr><td colspan="6" style="font-size: 14pt; font-weight: bold;">LAPORAN OMZET LINTAS CABANG</td></tr>
 <tr><td colspan="6" style="font-size: 11pt; font-weight: bold; color: #8b9b70;">${r.name}</td></tr>
 <tr><td colspan="6" style="font-size: 9pt; color: #555;">Tanggal Ekspor: ${i} | Sistem: RZ Kasir</td></tr>
 <tr><td colspan="6"></td></tr>
 <tr style="background-color: #f2f2f2; font-weight: bold;">
 <td colspan="3" style="border: 1px solid #000;">TOTAL OMZET SISTEM</td>
 <td colspan="3" style="border: 1px solid #000;">TOTAL TRANSAKSI LUNAS</td>
 </tr>
 <tr style="font-weight: bold; font-size: 12pt;">
 <td colspan="3" style="border: 1px solid #000; color: #8b9b70;">${I(e.totalVolume)}</td>
 <td colspan="3" style="border: 1px solid #000;">${n.length} Transaksi</td>
 </tr>
 <tr><td colspan="6"></td></tr>
 <tr style="background-color: #2e2e2a; color: #ffffff; font-weight: bold; text-align: center;">
 <th style="border: 1px solid #000;">No</th>
 <th style="border: 1px solid #000;">Invoice</th>
 <th style="border: 1px solid #000;">Waktu</th>
 <th style="border: 1px solid #000;">Cabang</th>
 <th style="border: 1px solid #000;">Metode</th>
 <th style="border: 1px solid #000;">Total Omzet</th>
 </tr>
 ${s}
 </table>
 </body>
 </html>
 `;this.downloadReportFile(a,`Laporan_Sistem_${o}.xls`,"application/vnd.ms-excel")},downloadReportFile(t,e,n){const r=new Blob(["\uFEFF"+t],{type:n}),o=URL.createObjectURL(r),i=document.createElement("a");i.href=o,i.download=e,document.body.appendChild(i),i.click(),setTimeout(()=>{document.body.removeChild(i),URL.revokeObjectURL(o)},500),this.notify("success","Ekspor Berhasil",`File ${e} berhasil diunduh.`)},exportAdminReportWord(t=null){const e=t||this.transactions,n=this.getActiveEvent()||{name:"Event Bazaar UMKM",location:"-"},r=this.getAdminReportStats(),o=new Date().toISOString().slice(0,10),i=new Date().toLocaleDateString("id-ID",{weekday:"long",day:"numeric",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit",timeZone:Ot}),a=this.stores.map(u=>{const g=e.filter(w=>w.store_id===u.id&&w.status==="paid"),h=g.reduce((w,m)=>w+m.total_amount,0);return{name:u.name,booth:u.booth_number||"-",count:g.length,gross:h}}).map((u,g)=>`
 <tr>
 <td style="text-align: center; border: 1pt solid #000; padding: 4pt 6pt;">${g+1}</td>
 <td style="border: 1pt solid #000; padding: 4pt 6pt; font-weight: bold;">${u.name}</td>
 <td style="text-align: center; border: 1pt solid #000; padding: 4pt 6pt;">${u.booth}</td>
 <td style="text-align: center; border: 1pt solid #000; padding: 4pt 6pt;">${u.count}</td>
 <td style="text-align: right; border: 1pt solid #000; padding: 4pt 6pt; font-weight: bold;">${I(u.gross)}</td>
 </tr>
 `).join(""),l=e.map((u,g)=>{const h=u.is_without_payment||u.status==="rejected"&&u.rejection_reason==="Tanpa Pembayaran";return`
 <tr style="${u.status==="cancelled"?"text-decoration: line-through; color: #777;":""}">
 <td style="text-align: center; border: 1pt solid #000; padding: 4pt 5pt;">${g+1}</td>
 <td style="border: 1pt solid #000; padding: 4pt 5pt; font-family: monospace; font-weight: bold;">${u.invoice_code}</td>
 <td style="border: 1pt solid #000; padding: 4pt 5pt; font-size: 9.5pt;">${ct(u.paid_at||u.created_at)}</td>
 <td style="border: 1pt solid #000; padding: 4pt 5pt;">${u.store_name||"-"}</td>
 <td style="text-align: center; border: 1pt solid #000; padding: 4pt 5pt; text-transform: uppercase;">${u.payment_method}</td>
 <td style="text-align: right; border: 1pt solid #000; padding: 4pt 5pt; font-weight: bold;">${h?"-":I(u.total_amount)}</td>
 <td style="text-align: center; border: 1pt solid #000; padding: 4pt 5pt; font-weight: bold;">${h?"TANPA PEMBAYARAN":u.status.toUpperCase()}</td>
 </tr>
 `}).join(""),c=window.__LOGO_BASE64__||window.__LOGO_URL__||"",d=`
 <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
 <head>
 <meta charset='utf-8'>
 <title>Laporan Penjualan — ${n.name}</title>
 <!--[if gte mso 9]>
 <xml>
 <w:WordDocument>
 <w:View>Print</w:View>
 <w:Zoom>100</w:Zoom>
 <w:DoNotOptimizeForBrowser/>
 </w:WordDocument>
 </xml>
 <![endif]-->
 <style>
 @page Section1 {
 size: 21cm 29.7cm;
 margin: 2cm 1.8cm 2cm 1.8cm;
 mso-header-margin: 1cm;
 mso-footer-margin: 1cm;
 mso-paper-source: 0;
 }
 div.Section1 { page: Section1; }
 body { font-family: 'Arial', 'Calibri', sans-serif; font-size: 10pt; line-height: 1.3; color: #000; }
 h1 { font-size: 14pt; font-weight: bold; text-align: center; text-transform: uppercase; margin: 0 0 3pt 0; }
 h2 { font-size: 11.5pt; font-weight: bold; text-align: center; margin: 0 0 4pt 0; }
.meta { font-size: 9pt; text-align: center; color: #333; margin-bottom: 10pt; }
.section-title { font-size: 11pt; font-weight: bold; text-transform: uppercase; margin-top: 14pt; margin-bottom: 4pt; border-bottom: 1pt solid #000; padding-bottom: 2pt; }
 table { width: 100%; border-collapse: collapse; margin-bottom: 12pt; font-size: 9.5pt; }
 th { border: 1pt solid #000; background-color: #eee; padding: 4pt 5pt; font-weight: bold; text-align: left; text-transform: uppercase; font-size: 9pt; }
 td { border: 1pt solid #000; padding: 4pt 5pt; vertical-align: top; }
.sig-table { width: 100%; border: none; margin-top: 24pt; }
.sig-table td { border: none; width: 50%; text-align: center; vertical-align: top; }
.sig-space { height: 48pt; }
.footer-note { font-size: 8.5pt; text-align: center; color: #555; border-top: 1pt dashed #000; padding-top: 6pt; margin-top: 16pt; }
 </style>
 </head>
 <body>
 <div class="Section1">
 <div style="border-bottom: 2pt double #000; padding-bottom: 6pt; margin-bottom: 10pt;">
 <table style="width: 100%; border: none;">
 <tr>
 ${c?`
 <td style="width: 60pt; border: none; text-align: left; vertical-align: middle; padding: 0;">
 <img src="${c}" style="height: 45pt; width: auto;" width="60" height="45">
 </td>
 `:""}
 <td style="border: none; text-align: ${c?"left":"center"}; vertical-align: middle; padding-left: 8pt;">
 <h1 style="text-align: ${c?"left":"center"};">Laporan Penjualan</h1>
 <h2 style="text-align: ${c?"left":"center"};">${n.name} &bull; ${n.location||"-"}</h2>
 <div class="meta" style="text-align: ${c?"left":"center"};">
 Tanggal Cetak: <strong>${i}</strong> &bull; Sistem: <strong>RZ Kasir</strong>
 </div>
 </td>
 </tr>
 </table>
 </div>

 <div class="section-title">1. Ringkasan Penjualan</div>
 <table>
 <tr>
 <td style="width: 50%; background-color: #f2f2f2;">
 <div style="font-size: 8.5pt; font-weight: bold; text-transform: uppercase; color: #444;">Total Omzet</div>
 <div style="font-size: 12pt; font-weight: bold; margin-top: 2pt;">${I(r.totalGross)}</div>
 <div style="font-size: 8.5pt; color: #555;">Seluruh transaksi lunas</div>
 </td>
 <td style="width: 50%;">
 <div style="font-size: 8.5pt; font-weight: bold; text-transform: uppercase; color: #444;">Jumlah Transaksi Lunas</div>
 <div style="font-size: 12pt; font-weight: bold; margin-top: 2pt;">${r.paidCount} Transaksi</div>
 <div style="font-size: 8.5pt; color: #555;">Cash & QRIS</div>
 </td>
 </tr>
 </table>

 <div class="section-title">2. Rekapitulasi Pendapatan per Cabang / Cabang</div>
 <table>
 <thead>
 <tr>
 <th style="text-align: center; width: 25pt;">No</th>
 <th>Nama Cabang</th>
 <th style="text-align: center; width: 55pt;">Kode</th>
 <th style="text-align: center; width: 45pt;">Tx Lunas</th>
 <th style="text-align: right; width: 100pt;">Total Omzet</th>
 </tr>
 </thead>
 <tbody>
 ${a.length>0?a:'<tr><td colspan="5" style="text-align: center; padding: 6pt;">Belum ada data cabang</td></tr>'}
 </tbody>
 </table>

 <div class="section-title">3. Rincian Seluruh Transaksi (${e.length} Transaksi)</div>
 <table>
 <thead>
 <tr>
 <th style="text-align: center; width: 20pt;">No</th>
 <th style="width: 80pt;">Invoice</th>
 <th style="width: 70pt;">Waktu</th>
 <th>Cabang</th>
 <th style="text-align: center; width: 40pt;">Metode</th>
 <th style="text-align: right; width: 90pt;">Nominal</th>
 <th style="text-align: center; width: 45pt;">Status</th>
 </tr>
 </thead>
 <tbody>
 ${l.length>0?l:'<tr><td colspan="7" style="text-align: center; padding: 6pt;">Belum ada transaksi</td></tr>'}
 </tbody>
 </table>

 <div class="footer-note">
 Dokumen ini digenerate secara otomatis oleh Sistem RZ Kasir.
 </div>
 </div>
 </body>
 </html>
 `;this.downloadReportFile(d,`Laporan_${n.name.replace(/[^a-zA-Z0-9]/g,"_")}_${o}.doc`,"application/msword")},exportAdminReportExcel(t=null){const e=t||this.transactions,n=this.getActiveEvent()||{name:"Event Bazaar UMKM",location:"-"},r=this.getAdminReportStats(),o=new Date().toISOString().slice(0,10),i=new Date().toLocaleDateString("id-ID",{day:"numeric",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit"});let a=this.stores.map(d=>{const u=e.filter(h=>h.store_id===d.id&&h.status==="paid"),g=u.reduce((h,w)=>h+w.total_amount,0);return{name:d.name,booth:d.booth_number||"-",count:u.length,gross:g}}).map((d,u)=>`
 <tr>
 <td style="text-align: center; border: 1px solid #cbd5e1;">${u+1}</td>
 <td style="border: 1px solid #cbd5e1; font-weight: bold;">${d.name}</td>
 <td style="text-align: center; border: 1px solid #cbd5e1;">${d.booth}</td>
 <td style="text-align: center; border: 1px solid #cbd5e1;">${d.count}</td>
 <td style="text-align: right; border: 1px solid #cbd5e1; font-weight: bold; mso-number-format:'\\#\\,\\#\\#0'; ">${Mt(d.gross)}</td>
 </tr>
 `).join(""),l=e.map((d,u)=>{const g=d.is_without_payment||d.status==="rejected"&&d.rejection_reason==="Tanpa Pembayaran";return`
 <tr>
 <td style="text-align: center; border: 1px solid #cbd5e1;">${u+1}</td>
 <td style="border: 1px solid #cbd5e1; font-family: monospace; font-weight: bold;">${d.invoice_code}</td>
 <td style="border: 1px solid #cbd5e1;">${ct(d.paid_at||d.created_at)}</td>
 <td style="border: 1px solid #cbd5e1;">${d.store_name||"-"}</td>
 <td style="text-align: center; border: 1px solid #cbd5e1; text-transform: uppercase;">${d.payment_method}</td>
 <td style="text-align: right; border: 1px solid #cbd5e1; mso-number-format:'\\#\\,\\#\\#0'; ">${g?0:Mt(d.total_amount)}</td>
 <td style="text-align: center; border: 1px solid #cbd5e1; font-weight: bold;">${g?"TANPA PEMBAYARAN":d.status.toUpperCase()}</td>
 </tr>
 `}).join("");const c=`
 <html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40">
 <head>
 <meta charset="utf-8">
 <!--[if gte mso 9]>
 <xml>
 <x:ExcelWorkbook>
 <x:ExcelWorksheets>
 <x:ExcelWorksheet>
 <x:Name>Laporan </x:Name>
 <x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions>
 </x:ExcelWorksheet>
 </x:ExcelWorksheets>
 </x:ExcelWorkbook>
 </xml>
 <![endif]-->
 <style>
 body { font-family: Calibri, Arial, sans-serif; font-size: 11pt; }
 th { background-color: #e2e8f0; font-weight: bold; border: 1px solid #94a3b8; padding: 6px 8px; text-align: left; }
 td { border: 1px solid #cbd5e1; padding: 5px 8px; vertical-align: middle; }
 </style>
 </head>
 <body>
 <table>
 <tr>
 <td colspan="5" style="font-size: 14pt; font-weight: bold;">LAPORAN PENJUALAN</td>
 </tr>
 <tr>
 <td colspan="5" style="font-size: 12pt; font-weight: bold; color: #1e293b;">${n.name}</td>
 </tr>
 <tr>
 <td colspan="5" style="font-size: 10pt; color: #475569;">Lokasi: ${n.location||"-"} | Tanggal Ekspor: ${i} | Sistem: RZ Kasir</td>
 </tr>
 <tr><td colspan="5"></td></tr>
 <tr style="background-color: #f1f5f9;">
 <th colspan="5" style="font-size: 11pt;">1. RINGKASAN PENJUALAN</th>
 </tr>
 <tr>
 <td colspan="2" style="font-weight: bold;">Total Omzet:</td>
 <td colspan="3" style="font-weight: bold;">${xe(Mt(r.totalGross))} (${r.paidCount} Transaksi Lunas)</td>
 </tr>
 <tr><td colspan="5"></td></tr>
 <tr style="background-color: #f1f5f9;">
 <th colspan="5" style="font-size: 11pt;">2. REKAPITULASI PER CABANG</th>
 </tr>
 <tr>
 <th style="text-align: center; width: 40px;">No</th>
 <th>Nama Cabang</th>
 <th style="text-align: center;">Kode</th>
 <th style="text-align: center;">Tx Lunas</th>
 <th style="text-align: right;">Total Omzet (Rp)</th>
 </tr>
 ${a}
 <tr><td colspan="5"></td></tr>
 <tr style="background-color: #f1f5f9;">
 <th colspan="5" style="font-size: 11pt;">3. RINCIAN DATA TRANSAKSI</th>
 </tr>
 <tr>
 <th style="text-align: center; width: 40px;">No</th>
 <th>Invoice</th>
 <th>Waktu</th>
 <th>Cabang</th>
 <th style="text-align: center;">Metode</th>
 <th style="text-align: right;">Total Belanja (Rp)</th>
 <th style="text-align: center;">Status</th>
 </tr>
 ${l}
 </table>
 </body>
 </html>
 `;this.downloadReportFile(c,`Laporan_${n.name.replace(/[^a-zA-Z0-9]/g,"_")}_${o}.xls`,"application/vnd.ms-excel")},exportUserReportWord(t=null){const e=this.getCurrentStore()||{id:1,name:"Cabang"},n=this.getActiveEvent()||{name:"Event Bazaar UMKM",location:"-"},r=this.getUserReportStats(e.id),o=t||this.transactions.filter(d=>d.store_id===e.id),i=window.__LOGO_BASE64__||window.__LOGO_URL__||"",s=new Date().toISOString().slice(0,10),a=new Date().toLocaleDateString("id-ID",{weekday:"long",day:"numeric",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit",timeZone:Ot}),l=o.map((d,u)=>{const g=d.is_without_payment||d.status==="rejected"&&d.rejection_reason==="Tanpa Pembayaran";return`
 <tr style="${d.status==="cancelled"?"text-decoration: line-through; color: #777;":""}">
 <td style="text-align: center; border: 1pt solid #000; padding: 4pt 5pt;">${u+1}</td>
 <td style="border: 1pt solid #000; padding: 4pt 5pt; font-family: monospace; font-weight: bold;">${d.invoice_code}</td>
 <td style="border: 1pt solid #000; padding: 4pt 5pt; font-size: 9.5pt;">${ct(d.paid_at||d.created_at)}</td>
 <td style="text-align: center; border: 1pt solid #000; padding: 4pt 5pt; text-transform: uppercase;">${d.payment_method}</td>
 <td style="text-align: right; border: 1pt solid #000; padding: 4pt 5pt; font-weight: bold;">${g?"-":I(d.total_amount)}</td>
 <td style="text-align: center; border: 1pt solid #000; padding: 4pt 5pt; font-weight: bold;">${g?"TANPA PEMBAYARAN":d.status.toUpperCase()}</td>
 </tr>
 `}).join(""),c=`
 <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
 <head>
 <meta charset='utf-8'>
 <title>Laporan Penjualan Cabang — ${e.name}</title>
 <!--[if gte mso 9]>
 <xml>
 <w:WordDocument>
 <w:View>Print</w:View>
 <w:Zoom>100</w:Zoom>
 <w:DoNotOptimizeForBrowser/>
 </w:WordDocument>
 </xml>
 <![endif]-->
 <style>
 @page Section1 {
 size: 21cm 29.7cm;
 margin: 2cm 1.8cm 2cm 1.8cm;
 }
 div.Section1 { page: Section1; }
 body { font-family: 'Arial', 'Calibri', sans-serif; font-size: 10pt; line-height: 1.3; color: #000; }
 h1 { font-size: 14pt; font-weight: bold; text-align: center; text-transform: uppercase; margin: 0 0 3pt 0; }
 h2 { font-size: 11.5pt; font-weight: bold; text-align: center; margin: 0 0 4pt 0; }
.meta { font-size: 9pt; text-align: center; color: #333; margin-bottom: 10pt; }
.section-title { font-size: 11pt; font-weight: bold; text-transform: uppercase; margin-top: 14pt; margin-bottom: 4pt; border-bottom: 1pt solid #000; padding-bottom: 2pt; }
 table { width: 100%; border-collapse: collapse; margin-bottom: 12pt; font-size: 9.5pt; }
 th { border: 1pt solid #000; background-color: #eee; padding: 4pt 5pt; font-weight: bold; text-align: left; text-transform: uppercase; font-size: 9pt; }
 td { border: 1pt solid #000; padding: 4pt 5pt; vertical-align: top; }
.footer-note { font-size: 8.5pt; text-align: center; color: #555; border-top: 1pt dashed #000; padding-top: 6pt; margin-top: 20pt; }
 </style>
 </head>
 <body>
 <div class="Section1">
 <div style="border-bottom: 2pt double #000; padding-bottom: 6pt; margin-bottom: 10pt;">
 <table style="width: 100%; border: none;">
 <tr>
 ${i?`
 <td style="width: 60pt; border: none; text-align: left; vertical-align: middle; padding: 0;">
 <img src="${i}" style="height: 45pt; width: auto;" width="60" height="45">
 </td>
 `:""}
 <td style="border: none; text-align: ${i?"left":"center"}; vertical-align: middle; padding-left: 8pt;">
 <h1 style="text-align: ${i?"left":"center"};">Laporan Penjualan Cabang</h1>
 <h2 style="text-align: ${i?"left":"center"};">${e.name} &bull; ${n.name}</h2>
 <div class="meta" style="text-align: ${i?"left":"center"};">
 Tanggal Cetak: <strong>${a}</strong> &bull; Lokasi: <strong>${n.location||"-"}</strong> &bull; Sistem: <strong>RZ Kasir</strong>
 </div>
 </td>
 </tr>
 </table>
 </div>

 <div class="section-title">1. Ringkasan Omzet Cabang</div>
 <table>
 <tr>
 <td style="width: 33.3%; background-color: #f2f2f2;">
 <div style="font-size: 8.5pt; font-weight: bold; text-transform: uppercase; color: #444;">Total Omzet</div>
 <div style="font-size: 12pt; font-weight: bold; margin-top: 2pt;">${I(r.totalGross)}</div>
 <div style="font-size: 8.5pt; color: #555;">${r.totalCount} Transaksi Lunas</div>
 </td>
 <td style="width: 33.3%;">
 <div style="font-size: 8.5pt; font-weight: bold; text-transform: uppercase; color: #444;">Total Cash</div>
 <div style="font-size: 12pt; font-weight: bold; margin-top: 2pt;">${I(r.totalCash)}</div>
 <div style="font-size: 8.5pt; color: #555;">Pembayaran tunai</div>
 </td>
 <td style="width: 33.3%;">
 <div style="font-size: 8.5pt; font-weight: bold; text-transform: uppercase; color: #444;">Total QRIS</div>
 <div style="font-size: 12pt; font-weight: bold; margin-top: 2pt;">${I(r.totalQris)}</div>
 <div style="font-size: 8.5pt; color: #555;">Pembayaran QRIS</div>
 </td>
 </tr>
 </table>

 <div class="section-title">2. Rincian Riwayat Transaksi Cabang</div>
 <table>
 <thead>
 <tr>
 <th style="text-align: center; width: 20pt;">No</th>
 <th style="width: 90pt;">Invoice</th>
 <th style="width: 80pt;">Waktu</th>
 <th style="text-align: center; width: 45pt;">Metode</th>
 <th style="text-align: right; width: 100pt;">Total Belanja</th>
 <th style="text-align: center; width: 50pt;">Status</th>
 </tr>
 </thead>
 <tbody>
 ${l.length>0?l:'<tr><td colspan="6" style="text-align: center; padding: 6pt;">Belum ada transaksi</td></tr>'}
 </tbody>
 </table>

 <div class="footer-note">
 Dokumen ini digenerate otomatis oleh Sistem RZ Kasir.
 </div>
 </div>
 </body>
 </html>
 `;this.downloadReportFile(c,`Laporan_Cabang_${e.name.replace(/[^a-zA-Z0-9]/g,"_")}_${s}.doc`,"application/msword")},exportUserReportExcel(t=null){const e=this.getCurrentStore()||{id:1,name:"Cabang"},n=this.getActiveEvent()||{name:"Event Bazaar UMKM",location:"-"},r=this.getUserReportStats(e.id),o=t||this.transactions.filter(c=>c.store_id===e.id),i=new Date().toISOString().slice(0,10),s=new Date().toLocaleDateString("id-ID",{day:"numeric",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit"});let a=o.map((c,d)=>{const u=c.is_without_payment||c.status==="rejected"&&c.rejection_reason==="Tanpa Pembayaran";return`
 <tr>
 <td style="text-align: center; border: 1px solid #cbd5e1;">${d+1}</td>
 <td style="border: 1px solid #cbd5e1; font-family: monospace; font-weight: bold;">${c.invoice_code}</td>
 <td style="border: 1px solid #cbd5e1;">${ct(c.paid_at||c.created_at)}</td>
 <td style="text-align: center; border: 1px solid #cbd5e1; text-transform: uppercase;">${c.payment_method}</td>
 <td style="text-align: right; border: 1px solid #cbd5e1; mso-number-format:'\\#\\,\\#\\#0'; ">${u?0:Mt(c.total_amount)}</td>
 <td style="text-align: center; border: 1px solid #cbd5e1; font-weight: bold;">${u?"TANPA PEMBAYARAN":c.status.toUpperCase()}</td>
 </tr>
 `}).join("");const l=`
 <html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40">
 <head>
 <meta charset="utf-8">
 <!--[if gte mso 9]>
 <xml>
 <x:ExcelWorkbook>
 <x:ExcelWorksheets>
 <x:ExcelWorksheet>
 <x:Name>Laporan Cabang</x:Name>
 <x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions>
 </x:ExcelWorksheet>
 </x:ExcelWorksheets>
 </x:ExcelWorkbook>
 </xml>
 <![endif]-->
 <style>
 body { font-family: Calibri, Arial, sans-serif; font-size: 11pt; }
 th { background-color: #e2e8f0; font-weight: bold; border: 1px solid #94a3b8; padding: 6px 8px; text-align: left; }
 td { border: 1px solid #cbd5e1; padding: 5px 8px; vertical-align: middle; }
 </style>
 </head>
 <body>
 <table>
 <tr>
 <td colspan="5" style="font-size: 14pt; font-weight: bold;">LAPORAN PENJUALAN CABANG</td>
 </tr>
 <tr>
 <td colspan="5" style="font-size: 12pt; font-weight: bold;">${e.name} — ${n.name}</td>
 </tr>
 <tr>
 <td colspan="5" style="font-size: 10pt; color: #475569;">Lokasi: ${n.location||"-"} | Tanggal Ekspor: ${s} | Sistem: RZ Kasir</td>
 </tr>
 <tr><td colspan="5"></td></tr>
 <tr style="background-color: #f1f5f9;">
 <th colspan="5" style="font-size: 11pt;">1. RINGKASAN OMZET CABANG</th>
 </tr>
 <tr>
 <td colspan="2" style="font-weight: bold;">Total Omzet:</td>
 <td colspan="3" style="font-weight: bold;">${xe(Mt(r.totalGross))} (${r.totalCount} Transaksi Lunas)</td>
 </tr>
 <tr>
 <td colspan="2" style="font-weight: bold;">Total Cash:</td>
 <td colspan="3">${xe(Mt(r.totalCash))}</td>
 </tr>
 <tr>
 <td colspan="2" style="font-weight: bold;">Total QRIS:</td>
 <td colspan="3">${xe(Mt(r.totalQris))}</td>
 </tr>
 <tr><td colspan="5"></td></tr>
 <tr style="background-color: #f1f5f9;">
 <th colspan="5" style="font-size: 11pt;">2. RINCIAN DATA TRANSAKSI</th>
 </tr>
 <tr>
 <th style="text-align: center; width: 40px;">No</th>
 <th>Invoice</th>
 <th>Waktu</th>
 <th style="text-align: center;">Metode</th>
 <th style="text-align: right;">Total Belanja (Rp)</th>
 <th style="text-align: center;">Status</th>
 </tr>
 ${a}
 </table>
 </body>
 </html>
 `;this.downloadReportFile(l,`Laporan_Cabang_${e.name.replace(/[^a-zA-Z0-9]/g,"_")}_${i}.xls`,"application/vnd.ms-excel")},getUserReportStats(t=null){const e=this.transactions||[],n=e.filter(l=>(t?l.store_id==t:!0)&&l.status==="paid"),r=n.reduce((l,c)=>l+(c.total_amount||0),0),o=n.length,i=n.filter(l=>l.payment_method==="cash").reduce((l,c)=>l+(c.total_amount||0),0),s=n.filter(l=>l.payment_method==="qris").reduce((l,c)=>l+(c.total_amount||0),0),a=e.filter(l=>(t?l.store_id==t:!0)&&["cancelled","rejected"].includes(l.status)).length;return{totalGross:r||0,totalCash:i||0,totalQris:s||0,totalCount:o||0,cancelledCount:a||0}},getAdminReportStats(){const t=this.transactions.filter(y=>y.status==="paid"),e=t.reduce((y,p)=>y+p.total_amount,0),n=t.reduce((y,p)=>y+(p.revenue_split?.owner_share||p.total_amount*.75),0),r=t.reduce((y,p)=>y+(p.revenue_split?.admin_gross_share||p.total_amount*.25),0),o=t.reduce((y,p)=>y+(p.revenue_split?.superadmin_share||p.total_amount*.025),0),i=t.reduce((y,p)=>y+(p.revenue_split?.admin_net_share||p.total_amount*.225),0),s=t.filter(y=>y.payment_method==="cash"),a=t.filter(y=>y.payment_method==="qris"),l=s.reduce((y,p)=>y+p.total_amount,0),c=a.reduce((y,p)=>y+p.total_amount,0),d=a.reduce((y,p)=>y+(p.revenue_split?.owner_share||p.total_amount*.75),0),u=s.reduce((y,p)=>y+(p.revenue_split?.owner_share||p.total_amount*.75),0),g=n,h=this.transactions.filter(y=>y.status==="pending"&&y.payment_method==="cash").length,w=h,m=this.transactions.filter(y=>y.status==="cancelled").length;return{totalGross:e,ownerTotal:n,adminGross:r,superadminTotal:o,adminNet:i,totalCash:l,totalQris:c,cashCount:s.length,qrisCount:a.length,qrisHakCabang:d,cashHakCabang:u,netSettlement:g,paidCount:t.length,pendingCount:w,pendingCashCount:h,cancelledCount:m,storesCount:this.stores.length}},getSettlementPerStore(){const t=this.transactions.filter(n=>n.status==="paid"),e={};return t.forEach(n=>{const r=n.store_id;e[r]||(e[r]={store_id:r,store_name:n.store_name||"Unknown",totalGross:0,totalCash:0,totalQris:0,hakCabang:0,hakAdmin:0,qrisHakCabang:0,cashHakCabang:0,txCount:0});const o=e[r],i=n.revenue_split?.owner_share||n.total_amount*.75,s=n.revenue_split?.admin_gross_share||n.total_amount*.25;o.totalGross+=n.total_amount,o.hakCabang+=i,o.hakAdmin+=s,o.txCount++,n.payment_method==="cash"?(o.totalCash+=n.total_amount,o.cashHakCabang+=i):n.payment_method==="qris"&&(o.totalQris+=n.total_amount,o.qrisHakCabang+=i)}),Object.values(e).map(n=>({...n,netSettlement:n.hakCabang,cashDipegang:n.totalCash,qrisDipegang:n.totalQris})).sort((n,r)=>r.totalGross-n.totalGross)},getSuperAdminStats(){const t=this.transactions.filter(a=>a.status==="paid"),e=t.reduce((a,l)=>a+l.total_amount,0),n=t.reduce((a,l)=>a+(l.revenue_split?.superadmin_share||l.total_amount*.025),0),r=t.reduce((a,l)=>a+(l.revenue_split?.owner_share||l.total_amount*.75),0),o=t.reduce((a,l)=>a+(l.revenue_split?.admin_gross_share||l.total_amount*.25),0),i=this.events.length,s=this.getActiveEvent();return{totalVolume:e,totalSuperAdminRevenue:n,ownerTotal:r,potonganTotal:o,totalEvents:i,paidCount:t.length,activeEventName:s?s.name:"-"}},resetTestingModalOpen:!1,resetTestingEventTarget:null,openResetTestingModal(t=null){this.resetTestingEventTarget=t||this.getActiveEvent(),this.resetTestingModalOpen=!0},async toggleEventTesting(t=null){const e=t?this.events.find(r=>r.id==t)||this.getActiveEvent():this.getActiveEvent();if(!e){Pt("warn","Event Tidak Ditemukan","Harap pilih event terlebih dahulu.");return}const n=this.currentRole==="superadmin"?"superadmin":"admin";try{this.showLoading("Mengubah status Masa Testing...");const r=await Y(`/${n}/events/${e.id}/toggle-testing`,{method:"POST",body:{is_testing_mode:!e.is_testing_mode}});r.success?(e.is_testing_mode=r.is_testing_mode,this.activeEvent&&this.activeEvent.id==e.id&&(this.activeEvent.is_testing_mode=r.is_testing_mode),Pt("success","Status Berubah",r.message)):Pt("danger","Gagal",r.message||"Gagal mengubah mode testing.")}catch(r){Pt("danger","Kesalahan",r.message||"Terjadi kesalahan saat memproses permintaan.")}finally{this.hideLoading()}},async confirmResetTesting(){const t=this.resetTestingEventTarget||this.getActiveEvent();if(!t)return;const e=this.currentRole==="superadmin"?"superadmin":"admin";this.resetTestingModalOpen=!1;try{this.showLoading("Membersihkan seluruh data transaksi testing...");const n=await Y(`/${e}/events/${t.id}/reset-testing`,{method:"POST"});n.success?(this.transactions=this.transactions.filter(r=>!r.is_testing),Pt("success","Berhasil Direset",n.message),setTimeout(()=>{window.location.reload()},1200)):Pt("danger","Gagal Reset",n.message||"Terjadi kesalahan saat reset transaksi.")}catch(n){Pt("danger","Kesalahan",n.message||"Terjadi kesalahan pada server.")}finally{this.hideLoading()}}});zo.start();
