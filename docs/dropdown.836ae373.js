function e(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}var t=globalThis,r={},n={},o=t.parcelRequire27b0;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},t.parcelRequire27b0=o),(0,o.register)("1Ovn3",function(t,r){function n(e,t){let r;let{state:n={},view:i,mounted:l}=t;if(null==e)return;let s={get:(e,t)=>"object"==typeof e[t]&&null!=e[t]?new Proxy(e[t],s):e[t],set(t,n,l){if(!t.hasOwnProperty(n))throw Error(`The property "${String(n)}" does not exist on the state object.`);if(t[n]===l)return!0;let s=Reflect.set(t,n,l);return function e(t,r){let n=Array.from(r.childNodes),o=Array.from(t.childNodes);(0!==o.length||0!==n.length)&&(a(t,r),t.nodeType!==Node.TEXT_NODE&&(o.length<n.length&&n.forEach((e,r)=>{null==o[r]&&t.append(function e(t,r){if(!t.$tent&&!r.$tent)return t;if(Object.keys(r.$tent.attributes).forEach(e=>t[e]=r.$tent.attributes[e]),t.hasChildNodes())for(let[n,o]of t.childNodes.entries())e(o,r.childNodes[n]);return t}(e.cloneNode(!0),e))}),o.length>n.length&&o.forEach((e,t)=>{null==n[t]&&e.remove()}),o.forEach((t,r)=>{let o=n[r];null!=o&&(t.tagName!==o.tagName&&t.replaceWith(o),a(t,o),e(t,o))})))}(r,i({state:c,el:e,attr:o(e)})),s}},c=new Proxy({...n},s);(r=i({state:c,el:e,attr:o(e)})).$tent={attributes:{},isComponent:!0},e.append(r),l?.({state:c,el:e,attr:o(e)})}function o(e){return t=>{let r=e.attributes.getNamedItem(t);if(r)return r.value}}function a(e,t){if(e.nodeType===Node.TEXT_NODE){e.nodeValue!==t.nodeValue&&(e.nodeValue=t.nodeValue);return}t.attributes?.length&&Array.from(t.attributes).forEach(t=>{e.getAttribute(t.name)!==t.value&&e.setAttribute(t.name,t.value)}),e.attributes?.length&&Array.from(e.attributes).forEach(r=>{t.hasAttribute(r.name)||e.removeAttribute(r.name)})}e(t.exports,"mount",()=>n),e(t.exports,"tags",()=>i);let i={};["div","p","ul","li","button","input","label","form","span","h1","h2","h3","h4","h5","h6","a","img","video","audio","canvas","table","tr","td","th","thead","tbody","tfoot","select","option","textarea","pre","code","blockquote","hr","br","iframe","nav","header","footer","main","section","article","aside","small","b"].forEach(e=>i[e]=(t,r)=>(function e(t){let[r,n,o]=t,a=document.createElement(r);for(let t in a.$tent={attributes:{},isComponent:!1},Array.isArray(n)?n.forEach(t=>{a.append(Array.isArray(t)?e(t):t)}):a.append("number"==typeof n?n.toString():n),o)if(a.$tent.attributes[t]=o[t],t.startsWith("on")||/[A-Z]/.test(t))a[t]=o[t];else{let e=o[t];"boolean"==typeof e?e?a.setAttribute(t,""):a.removeAttribute(t):a.setAttribute(t,o[t])}return a})([e,t,r]))});var a=o("1Ovn3");const{div:i,button:l,span:s,ul:c,li:u}=a.tags;function d(e){return u([s(e.title),s(e.tag??"")],{...e.attributes,onclick:()=>{"function"==typeof e.attributes?.onclick?e.attributes.onclick():e.selected=!e.selected},className:e.selected?"C8xY4q_selected":""})}(0,a.mount)(document.querySelector(".recipe"),{state:{open:!0,collection:[{title:"Unread",tag:4,selected:!1},{title:"Flagged",tag:23,selected:!1},{title:"Tags",items:[{title:"#daretoshare24",selected:!1},{title:"#tent",selected:!1},{title:"#javascript",selected:!1}]},{title:"",items:[{title:"Source",selected:!1,attributes:{role:"link",onclick:()=>{window.open("https://github.com/tentjs/cookbook/tree/main/src/components/dropdown.ts","_blank")}}}]}]},view:({state:e})=>i([l("Filters",{onclick:()=>e.open=!e.open}),c(e.open?e.collection.map(e=>{var t,r;return e.items?(t=e.title,r=e.items,i([u([s(t),s("")]),...r.map(e=>d(e))])):d(e)}):[])],{className:"C8xY4q_dropdown"})});
//# sourceMappingURL=dropdown.836ae373.js.map
