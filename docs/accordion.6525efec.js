function e(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}var t=globalThis,r={},n={},o=t.parcelRequire27b0;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},t.parcelRequire27b0=o),(0,o.register)("1Ovn3",function(t,r){function n(e,t){let r;let{state:n={},view:i,mounted:s}=t;if(null==e)return;let l={get:(e,t)=>"object"==typeof e[t]&&null!=e[t]?new Proxy(e[t],l):e[t],set(e,t,n){if(!e.hasOwnProperty(t))throw Error(`The property "${String(t)}" does not exist on the state object.`);if(e[t]===n)return!0;let s=Reflect.set(e,t,n);return function e(t,r){let n=Array.from(r.children);o(t,r),t.children.length<n.length&&n.forEach((e,r)=>{null==t.children[r]&&t.append(a(e.cloneNode(!0),e))}),Array.from(t.children).forEach((t,r)=>{let i=n[r];if(!(i?.$tent?.isComponent||t?.$tent?.isComponent)){if(null==i){t.remove();return}if(t.tagName!==i.tagName&&t.replaceWith(i),t.children.length<i.children.length){let e=Array.from(t.children);Array.from(i.children).forEach((r,n)=>{null==e[n]&&t.append(a(r.cloneNode(!0),r))})}if(t.children.length>i.children.length){let e=Array.from(i.children);Array.from(t.children).forEach((t,r)=>{null==e[r]&&t.remove()})}o(t,i),t.children.length&&i.children.length&&e(t,i)}})}(r,i({state:c})),s}},c=new Proxy({...n},l);(r=i({state:c})).$tent={attributes:{},isComponent:!0},e.append(r),s?.({state:c})}function o(e,t){Array.from(t.attributes).forEach(t=>{e.getAttribute(t.name)!==t.value&&e.setAttribute(t.name,t.value)}),Array.from(e.attributes).forEach(r=>{t.hasAttribute(r.name)||e.removeAttribute(r.name)}),e.textContent!==t.textContent&&0===t.children.length&&0===e.children.length&&(e.textContent=t.textContent)}function a(e,t){if(!e.$tent&&!t.$tent)return e;if(Object.keys(t.$tent.attributes).forEach(r=>e[r]=t.$tent.attributes[r]),e.hasChildNodes())for(let[r,n]of e.childNodes.entries())a(n,t.childNodes[r]);return e}e(t.exports,"mount",()=>n),e(t.exports,"tags",()=>i);let i={};["div","p","ul","li","button","input","label","form","span","h1","h2","h3","h4","h5","h6","a","img","video","audio","canvas","table","tr","td","th","thead","tbody","tfoot","select","option","textarea","pre","code","blockquote","hr","br","iframe","nav","header","footer","main","section","article","aside","small","b"].forEach(e=>i[e]=(t,r)=>(function e(t){let[r,n,o]=t,a=document.createElement(r);for(let t in a.$tent={attributes:{},isComponent:!1},Array.isArray(n)?n.forEach(t=>a.append(Array.isArray(t)?e(t):t)):a.append("number"==typeof n?n.toString():n),o)if(a.$tent.attributes[t]=o[t],t.startsWith("on")||/[A-Z]/.test(t))a[t]=o[t];else{let e=o[t];"boolean"==typeof e?e?a.setAttribute(t,""):a.removeAttribute(t):a.setAttribute(t,o[t])}return a})([e,t,r]))});var a=o("1Ovn3");const{div:i,h3:s,p:l}=a.tags,c=["Italian Delights","Spicy Sizzlers of Asia","Desserts Around the World"];(0,a.mount)(document.querySelector(".recipe"),{state:{current:0},view:({state:e})=>i(c.map((t,r)=>i([s(t,{onclick:()=>e.current=e.current===r?-1:r,role:"button",className:["_5OvEOG_title",r===e.current?"_5OvEOG_active":""].join(" ")}),i(r===e.current?function(e){switch(e){case 0:return i([l("Indulge in the rich flavors of Italy, from hearty pasta dishes to mouthwatering pizzas. Explore the diverse regional cuisines that make Italian food a culinary masterpiece.")]);case 1:return i([l("Embark on a journey through the vibrant and spicy world of Asian cuisine. From the fiery streets of Bangkok to the savory delights of Tokyo, discover the diverse and tantalizing flavors that make Asian food an unforgettable experience.")]);case 2:return i([l("Treat your taste buds to a sweet symphony as we explore desserts from various corners of the globe. Indulge in the decadence of French pastries, savor the sweetness of Turkish delights, and experience the sugary wonders that make desserts a universal delight.")]);default:return i([])}}(r):[],{className:"_5OvEOG_content"})])),{className:"_5OvEOG_accordion"})});
//# sourceMappingURL=accordion.6525efec.js.map
