function e(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}var t=globalThis,r={},n={},o=t.parcelRequire27b0;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},t.parcelRequire27b0=o),(0,o.register)("1Ovn3",function(t,r){function n(e,t){let r;let{state:n={},view:a,mounted:l}=t;if(null==e)return;let c={get:(e,t)=>"object"==typeof e[t]&&null!==e[t]?new Proxy(e[t],c):e[t],set(e,t,n){if(!e.hasOwnProperty(t))throw Error(`The property "${String(t)}" does not exist on the state object.`);if(e[t]===n)return!0;let l=Reflect.set(e,t,n);return function e(t,r){let n=Array.from(r.children);o(t,r),t.children.length<n.length&&n.forEach((e,r)=>{t.children[r]||t.append(i(e.cloneNode(!0),e))}),Array.from(t.children).forEach((t,r)=>{let a=n[r];if(!(a?.$tent?.isComponent||t?.$tent?.isComponent)){if(!a){t.remove();return}if(t.tagName!==a.tagName&&t.replaceWith(a),t.children.length<a.children.length){let e=Array.from(t.children);Array.from(a.children).forEach((r,n)=>{e[n]||t.append(i(r.cloneNode(!0),r))})}if(t.children.length>a.children.length){let e=Array.from(a.children);Array.from(t.children).forEach((t,r)=>{e[r]||t.remove()})}o(t,a),e(t,a)}})}(r,a({state:s})),l}},s=new Proxy({...n},c);(r=a({state:s})).$tent={attributes:{},isComponent:!0},e.append(r),l?.({state:s})}function o(e,t){Array.from(t.attributes).forEach(t=>{e.getAttribute(t.name)!==t.value&&e.setAttribute(t.name,t.value)}),Array.from(e.attributes).forEach(r=>{t.hasAttribute(r.name)||e.removeAttribute(r.name)}),e.textContent!==t.textContent&&0===t.children.length&&0===e.children.length&&(e.textContent=t.textContent)}function i(e,t){if(!e.$tent&&!t.$tent)return e;if(Object.keys(t.$tent.attributes).forEach(r=>e[r]=t.$tent.attributes[r]),e.hasChildNodes())for(let[r,n]of e.childNodes.entries())i(n,t.childNodes[r]);return e}e(t.exports,"mount",()=>n),e(t.exports,"tags",()=>a);let a={};["div","p","ul","li","button","input","label","form","span","h1","h2","h3","h4","h5","h6","a","img","video","audio","canvas","table","tr","td","th","thead","tbody","tfoot","select","option","textarea","pre","code","blockquote","hr","br","iframe","nav","header","footer","main","section","article","aside","small","b"].forEach(e=>a[e]=(t,r)=>(function e(t){let[r,n,o]=t,i=document.createElement(r);for(let t in i.$tent={attributes:{},isComponent:!1},Array.isArray(n)?n.forEach(t=>i.append(Array.isArray(t)?e(t):t)):i.append("number"==typeof n?n.toString():n),o)if(i.$tent.attributes[t]=o[t],t.startsWith("on")||/[A-Z]/.test(t))i[t]=o[t];else{let e=o[t];"boolean"==typeof e?e?i.setAttribute(t,""):i.removeAttribute(t):i.setAttribute(t,o[t])}return i})([e,t,r]))});var i=o("1Ovn3");const{div:a,button:l,span:c,ul:s,li:u}=i.tags;function d(e){return u([c(e.title),c(e.tag??"")],{...e.attributes,onclick:()=>{"function"==typeof e.attributes?.onclick?e.attributes.onclick():e.selected=!e.selected},className:e.selected?"C8xY4q_selected":""})}(0,i.mount)(document.querySelector(".recipe"),{state:{open:!0,collection:[{title:"Unread",tag:4,selected:!1},{title:"Flagged",tag:23,selected:!1},{title:"Tags",items:[{title:"#daretoshare24",selected:!1},{title:"#tent",selected:!1},{title:"#javascript",selected:!1}]},{title:"",items:[{title:"Source",selected:!1,attributes:{role:"link",onclick:()=>{window.open("https://github.com/tentjs/cookbook/tree/main/src/components/dropdown.ts","_blank")}}}]}]},view:({state:e})=>a([l("Filters",{onclick:()=>e.open=!e.open}),s(e.open?e.collection.map(e=>{var t,r;return e.items?(t=e.title,r=e.items,a([u([c(t),c("")]),...r.map(e=>d(e))])):d(e)}):[])],{className:"C8xY4q_dropdown"})});
//# sourceMappingURL=dropdown.6f8428fc.js.map
