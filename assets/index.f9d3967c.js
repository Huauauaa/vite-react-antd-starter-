import{M as l,a as h,D as E,A as y,B as R,m as g,P as v,u as x,b as u,l as $,H as M,S as P,R as k,C as D,z as L}from"./vendor.d3fc04a2.js";const b=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}};b();const A="modulepreload",i={},C="/vite-react-antd-starter/",Y=function(r,c){return!c||c.length===0?r():Promise.all(c.map(a=>{if(a=`${C}${a}`,a in i)return;i[a]=!0;const e=a.endsWith(".css"),t=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${t}`))return;const o=document.createElement("link");if(o.rel=e?"stylesheet":A,e||(o.as="script",o.crossOrigin=""),o.href=a,document.head.appendChild(o),e)return new Promise((p,f)=>{o.addEventListener("load",p),o.addEventListener("error",f)})})).then(()=>r())};function m(n,r){return l.mock(`http://test.cn${n}`,r)}m("/me",{name:"@name","age|1-10":10});m("/text",l.Random.paragraph(1,3));const d=h.create({baseURL:"/api",timeout:6e4});d.interceptors.response.use(n=>{const{data:r}=n;return r},n=>{const{response:r}=n;return Promise.reject(r.data)});function O(){const[n,r]=React.useState(null),[c,a]=React.useState("");React.useEffect(()=>{(async()=>{try{const t=await d.get("http://test.cn/text");a(t)}catch(t){console.error(t)}})()},[]);const e=t=>{g.info(`\u60A8\u9009\u62E9\u7684\u65E5\u671F\u662F: ${t?t.format("YYYY\u5E74MM\u6708DD\u65E5"):"\u672A\u9009\u62E9"}`),r(t)};return React.createElement("div",{style:{width:400,margin:"100px auto"}},React.createElement(E,{onChange:e}),React.createElement(y,{message:"\u5F53\u524D\u65E5\u671F",description:n?n.format("YYYY\u5E74MM\u6708DD\u65E5"):"\u672A\u9009\u62E9"}),React.createElement("p",null,c),React.createElement(R,{type:"primary"},"primary"))}function s({children:n}){const r=x(),c=r.location.pathname,a=({key:e})=>{r.location.pathname!==e&&r.push(e)};return React.createElement(React.Fragment,null,React.createElement(u,{onClick:a,mode:"horizontal",selectedKeys:[c]},React.createElement(u.Item,{key:"/"},"Home"),React.createElement(u.Item,{key:"/about"},"About")),n)}s.propTypes={children:v.node};s.defaultProps={children:null};const S=[{path:"/",exact:!0,component:O,layout:s},{path:"/about",exact:!0,component:$(()=>Y(()=>import("./AboutView.f524247b.js"),["assets/AboutView.f524247b.js","assets/vendor.d3fc04a2.js"])),layout:s}];function _(){return React.createElement(M,null,React.createElement(P,null,S.map(n=>React.createElement(k,{path:n.path,exact:n.exact,key:n.path},React.createElement(n.layout,null,React.createElement(n.component,null))))))}ReactDOM.render(React.createElement(D,{locale:L},React.createElement(_,null)),document.getElementById("root"));export{d as h};
