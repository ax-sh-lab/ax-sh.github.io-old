import{R as e,a as t,E as n}from"./vendor.866aa9ce.js";const l={home:"",about:"",work:"",contact:""},r=()=>e.createElement("nav",null,e.createElement("ul",null,Object.entries(l).map((([t,n])=>e.createElement("li",null,e.createElement("a",{href:n},t)))))),a=()=>e.createElement("section",{className:"about"}),c=()=>e.createElement("section",{className:"contact"}),o=()=>e.createElement("section",{className:"work"},e.createElement("h1",null,"Work"));function m(){return e.createElement("div",{id:"app"},"this was a test",e.createElement(r,null),e.createElement(a,null),e.createElement(o,null),e.createElement(c,null))}t.render(e.createElement(e.StrictMode,null,e.createElement(n,{FallbackComponent:function({error:t,resetErrorBoundary:n}){return e.createElement("section",{role:"alert",className:"error__boundary"},e.createElement("div",{className:"error__content"},e.createElement("h1",null,"Something went wrong:"),e.createElement("pre",null,t.message),e.createElement("pre",null,JSON.stringify(t)),e.createElement("button",{onClick:void 0},"Try again")))},onReset:()=>{}},e.createElement(m,null))),document.getElementById("root"));
