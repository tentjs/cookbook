function t(t,e,r,n){Object.defineProperty(t,e,{get:r,set:n,enumerable:!0,configurable:!0})}var e=globalThis,r={},n={},o=e.parcelRequire27b0;null==o&&((o=function(t){if(t in r)return r[t].exports;if(t in n){var e=n[t];delete n[t];var o={id:t,exports:{}};return r[t]=o,e.call(o.exports,o,o.exports),o.exports}var a=Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(t,e){n[t]=e},e.parcelRequire27b0=o),(0,o.register)("1Ovn3",function(e,r){function n(t,e){let r;if(null==t)return i.div([]);let{state:n={},view:l,mounted:s}=e;if(t.$tent?.isComponent)return t;t.$tent={attributes:{},isComponent:!0};let u={get:(t,e)=>"object"==typeof t[e]&&null!=t[e]?new Proxy(t[e],u):t[e],set(e,n,i){if(!e.hasOwnProperty(n))throw Error(`The property "${String(n)}" does not exist on the state object.`);if(e[n]===i)return!0;let s=Reflect.set(e,n,i);return function t(e,r){let n=Array.from(r.childNodes),o=Array.from(e.childNodes);(0!==o.length||0!==n.length)&&(a(e,r),e.nodeType!==Node.TEXT_NODE&&(o.length<n.length&&n.forEach((t,r)=>{null==o[r]&&e.append(t)}),o.length>n.length&&o.forEach((t,e)=>{null==n[e]&&t.remove()}),o.forEach((e,r)=>{let o=n[r];null!=o&&(e.tagName!==o.tagName&&e.replaceWith(o),a(e,o),t(e,o))})))}(r,l({state:c,el:t,attr:o(t)})),s}},c=new Proxy({...n},u);return(r=l({state:c,el:t,attr:o(t)})).$tent={attributes:{},isComponent:!1},t.append(r),s?.({state:c,el:t,attr:o(t)}),t}function o(t){return e=>{let r=t.attributes.getNamedItem(e);if(!r)return;let n=r.value;return""===n?"true":n}}function a(t,e){if(t.nodeType===Node.TEXT_NODE){t.nodeValue!==e.nodeValue&&(t.nodeValue=e.nodeValue);return}e.attributes?.length&&Array.from(e.attributes).forEach(e=>{t.getAttribute(e.name)!==e.value&&t.setAttribute(e.name,e.value)}),t.attributes?.length&&Array.from(t.attributes).forEach(r=>{e.hasAttribute(r.name)||t.removeAttribute(r.name)})}t(e.exports,"mount",()=>n),t(e.exports,"tags",()=>i);let i={};["div","p","ul","li","button","input","label","form","span","h1","h2","h3","h4","h5","h6","a","img","video","audio","canvas","table","tr","td","th","thead","tbody","tfoot","select","option","textarea","pre","code","blockquote","hr","br","iframe","nav","header","footer","main","section","article","aside","small","b"].forEach(t=>i[t]=(e,r)=>(function t(e){let[r,n,o]=e,a=document.createElement(r);for(let e in a.$tent={attributes:{},isComponent:!1},Array.isArray(n)?n.forEach(e=>{a.append(Array.isArray(e)?t(e):e)}):a.append("number"==typeof n?n.toString():n),o)if(a.$tent.attributes[e]=o[e],e.startsWith("on")||/[A-Z]/.test(e))a[e]=o[e];else{let t=o[e];"boolean"==typeof t?t?a.setAttribute(e,""):a.removeAttribute(e):a.setAttribute(e,o[e])}return a})([t,e,r]))});var a=o("1Ovn3");const{div:i,button:l,span:s,ul:u,li:c}=a.tags;function d(t){return c([s(t.title),s(t.tag??"")],{...t.attributes,onclick:()=>{"function"==typeof t.attributes?.onclick?t.attributes.onclick():t.selected=!t.selected},className:t.selected?"C8xY4q_selected":""})}(0,a.mount)(document.querySelector(".recipe"),{state:{open:!0,collection:[{title:"Unread",tag:4,selected:!1},{title:"Flagged",tag:23,selected:!1},{title:"Tags",items:[{title:"#daretoshare24",selected:!1},{title:"#tent",selected:!1},{title:"#javascript",selected:!1}]},{title:"",items:[{title:"Source",selected:!1,attributes:{role:"link",onclick:()=>{window.open("https://github.com/tentjs/cookbook/tree/main/src/components/dropdown.ts","_blank")}}}]}]},view:({state:t})=>i([l("Filters",{onclick:()=>t.open=!t.open}),u(t.open?t.collection.map(t=>{var e,r;return t.items?(e=t.title,r=t.items,i([c([s(e),s("")]),...r.map(t=>d(t))])):d(t)}):[])],{className:"C8xY4q_dropdown"})});
//# sourceMappingURL=dropdown.318c3bb4.js.map
