function t(t,e,r,n){Object.defineProperty(t,e,{get:r,set:n,enumerable:!0,configurable:!0})}var e=globalThis,r={},n={},o=e.parcelRequire27b0;null==o&&((o=function(t){if(t in r)return r[t].exports;if(t in n){var e=n[t];delete n[t];var o={id:t,exports:{}};return r[t]=o,e.call(o.exports,o,o.exports),o.exports}var a=Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(t,e){n[t]=e},e.parcelRequire27b0=o),(0,o.register)("1Ovn3",function(e,r){function n(t,e){let r;if(null==t)return i.div([]);let{state:n={},view:l,mounted:u}=e;if(t.$tent?.isComponent)return t;t.$tent={attributes:{},isComponent:!0};let s={get:(t,e)=>"object"==typeof t[e]&&null!=t[e]?new Proxy(t[e],s):t[e],set(e,n,i){if(!e.hasOwnProperty(n))throw Error(`The property "${String(n)}" does not exist on the state object.`);if(e[n]===i)return!0;let u=Reflect.set(e,n,i);return function t(e,r){let n=Array.from(r.childNodes),o=Array.from(e.childNodes);(0!==o.length||0!==n.length)&&(a(e,r),e.nodeType!==Node.TEXT_NODE&&(o.length<n.length&&n.forEach((t,r)=>{null==o[r]&&e.append(t)}),o.length>n.length&&o.forEach((t,e)=>{null==n[e]&&t.remove()}),o.forEach((e,r)=>{let o=n[r];null!=o&&(e.tagName!==o.tagName&&e.replaceWith(o),a(e,o),t(e,o))})))}(r,l({state:h,el:t,attr:o(t)})),u}},h=new Proxy({...n},s);return(r=l({state:h,el:t,attr:o(t)})).$tent={attributes:{},isComponent:!1},t.append(r),u?.({state:h,el:t,attr:o(t)}),t}function o(t){return e=>{let r=t.attributes.getNamedItem(e);if(!r)return;let n=r.value;return""===n?"true":n}}function a(t,e){if(t.nodeType===Node.TEXT_NODE){t.nodeValue!==e.nodeValue&&(t.nodeValue=e.nodeValue);return}e.attributes?.length&&Array.from(e.attributes).forEach(e=>{t.getAttribute(e.name)!==e.value&&t.setAttribute(e.name,e.value)}),t.attributes?.length&&Array.from(t.attributes).forEach(r=>{e.hasAttribute(r.name)||t.removeAttribute(r.name)})}t(e.exports,"mount",()=>n),t(e.exports,"tags",()=>i);let i={};["div","p","ul","li","button","input","label","form","span","h1","h2","h3","h4","h5","h6","a","img","video","audio","canvas","table","tr","td","th","thead","tbody","tfoot","select","option","textarea","pre","code","blockquote","hr","br","iframe","nav","header","footer","main","section","article","aside","small","b"].forEach(t=>i[t]=(e,r)=>(function t(e){let[r,n,o]=e,a=document.createElement(r);for(let e in a.$tent={attributes:{},isComponent:!1},Array.isArray(n)?n.forEach(e=>{a.append(Array.isArray(e)?t(e):e)}):a.append("number"==typeof n?n.toString():n),o)if(a.$tent.attributes[e]=o[e],e.startsWith("on")||/[A-Z]/.test(e))a[e]=o[e];else{let t=o[e];"boolean"==typeof t?t?a.setAttribute(e,""):a.removeAttribute(e):a.setAttribute(e,o[e])}return a})([t,e,r]))});var a=o("1Ovn3");const{div:i}=a.tags,l={view:({attr:t})=>{let e=t("src"),r=t("width"),n=t("height"),o=t("size");if(!e&&!o)return i([]);let a=o?`${o}px`:r??"50px",l=o?`${o}px`:n??"50px";return i("",{style:`
        background-image: url(${e||(o?`https://source.unsplash.com/${o}x${o}`:"")});
        width: ${a};
        height: ${l};
        border-radius: ${a};
      `})}};document.querySelectorAll(".avatar").forEach(t=>{(0,a.mount)(t,l)});
//# sourceMappingURL=avatar.a0ca58dc.js.map
