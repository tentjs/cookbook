function e(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}var t=globalThis,r={},n={},o=t.parcelRequire27b0;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},t.parcelRequire27b0=o),(0,o.register)("1Ovn3",function(t,r){function n(e,t){let r;let{state:n={},view:l,mounted:a}=t;if(null==e)return;let s={get:(e,t)=>"object"==typeof e[t]&&null!=e[t]?new Proxy(e[t],s):e[t],set(e,t,n){if(!e.hasOwnProperty(t))throw Error(`The property "${String(t)}" does not exist on the state object.`);if(e[t]===n)return!0;let a=Reflect.set(e,t,n);return function e(t,r){let n=Array.from(r.children);o(t,r),t.children.length<n.length&&n.forEach((e,r)=>{null==t.children[r]&&t.append(i(e.cloneNode(!0),e))}),Array.from(t.children).forEach((t,r)=>{let l=n[r];if(!(l?.$tent?.isComponent||t?.$tent?.isComponent)){if(null==l){t.remove();return}if(t.tagName!==l.tagName&&t.replaceWith(l),t.children.length<l.children.length){let e=Array.from(t.children);Array.from(l.children).forEach((r,n)=>{null==e[n]&&t.append(i(r.cloneNode(!0),r))})}if(t.children.length>l.children.length){let e=Array.from(l.children);Array.from(t.children).forEach((t,r)=>{null==e[r]&&t.remove()})}o(t,l),t.children.length&&l.children.length&&e(t,l)}})}(r,l({state:c})),a}},c=new Proxy({...n},s);(r=l({state:c})).$tent={attributes:{},isComponent:!0},e.append(r),a?.({state:c})}function o(e,t){Array.from(t.attributes).forEach(t=>{e.getAttribute(t.name)!==t.value&&e.setAttribute(t.name,t.value)}),Array.from(e.attributes).forEach(r=>{t.hasAttribute(r.name)||e.removeAttribute(r.name)}),e.textContent!==t.textContent&&0===t.children.length&&0===e.children.length&&(e.textContent=t.textContent)}function i(e,t){if(!e.$tent&&!t.$tent)return e;if(Object.keys(t.$tent.attributes).forEach(r=>e[r]=t.$tent.attributes[r]),e.hasChildNodes())for(let[r,n]of e.childNodes.entries())i(n,t.childNodes[r]);return e}e(t.exports,"mount",()=>n),e(t.exports,"tags",()=>l);let l={};["div","p","ul","li","button","input","label","form","span","h1","h2","h3","h4","h5","h6","a","img","video","audio","canvas","table","tr","td","th","thead","tbody","tfoot","select","option","textarea","pre","code","blockquote","hr","br","iframe","nav","header","footer","main","section","article","aside","small","b"].forEach(e=>l[e]=(t,r)=>(function e(t){let[r,n,o]=t,i=document.createElement(r);for(let t in i.$tent={attributes:{},isComponent:!1},Array.isArray(n)?n.forEach(t=>i.append(Array.isArray(t)?e(t):t)):i.append("number"==typeof n?n.toString():n),o)if(i.$tent.attributes[t]=o[t],t.startsWith("on")||/[A-Z]/.test(t))i[t]=o[t];else{let e=o[t];"boolean"==typeof e?e?i.setAttribute(t,""):i.removeAttribute(t):i.setAttribute(t,o[t])}return i})([e,t,r]))});var i=o("1Ovn3");const{div:l,ul:a,li:s,input:c}=i.tags;(0,i.mount)(document.querySelector(".recipe"),{state:{list:[{title:"To-do #1",done:!1},{title:"To-do #2",done:!0},{title:"To-do #3",done:!1}],title:""},view:({state:e})=>l([c([],{type:"text",placeholder:"A new to-do...",oninput:({target:t})=>e.title=t.value,onkeydown:({key:t,target:r})=>{"Enter"===t&&(e.list=[...e.list,{title:r.value,done:!1}],r.value="",e.title="")}}),a(e.list.map(e=>s(e.title,{onclick:()=>e.done=!e.done,className:e.done?"wgN8TW_done":""})),{className:"wgN8TW_todo"})])});
//# sourceMappingURL=todo.144f6f90.js.map
