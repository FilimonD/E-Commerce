(this["webpackJsonpfitness-store"]=this["webpackJsonpfitness-store"]||[]).push([[0],{35:function(e,t,a){},43:function(e,t,a){e.exports=a(56)},56:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(17),l=a.n(c),o=a(7),i=a(5),m=a(63),u=a(64),s=a(6),d=a(20),E=r.a.createContext(),p=[];function f(e,t){switch(t.type){case"add":var a=function(e,t){return t.size?e.findIndex((function(e){return e.id===t.id&&e.size===t.size})):t.color?e.findIndex((function(e){return e.id&&t.id&&e.color===t.color})):e.findIndex((function(e){return e.id===t.id}))}(e,t.product);if(-1===a)return[].concat(Object(d.a)(e),[t.product]);var n={id:t.product.id,name:t.product.name,size:t.product.size,quantity:t.product.quantity+e[a].quantity,price:t.product.price};return[].concat(Object(d.a)(e.slice(0,a)),Object(d.a)(e.slice(a+1,e.length)),[n]);case"remove":var r=e.findIndex((function(e){return e.name===t.product.name}));if(r<0)return e;var c=Object(d.a)(e);return c.splice(r,1),c;default:return e}}var h=function(e){var t=e.children,a=Object(n.useReducer)(f,p),c=Object(s.a)(a,2),l=c[0],o=c[1];return r.a.createElement(E.Provider,{value:{state:l,dispatch:o}},t)},y=function(){return r.a.useContext(E)},b=function(){var e=y(),t=e.state;e.dispatch;return r.a.createElement(m.a,{sticky:"top",className:"navbar-items",expand:"md"},r.a.createElement(m.a.Brand,{style:{color:"white"}},r.a.createElement(o.b,{to:"/"},"Bouna-Sal")),r.a.createElement(m.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(m.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(u.a,{className:"mr-auto",style:{textDecoration:"none",color:"white"}},r.a.createElement(o.b,{to:"/"},"Home"),r.a.createElement(o.b,{to:"/clothings"},"Clothings"),r.a.createElement(o.b,{to:"/trainers"},"Trainers"),r.a.createElement(o.b,{to:"/accessories"},"Accessories")),r.a.createElement(u.a,{className:"mr-2"},r.a.createElement(o.b,{to:"/checkout"},"Checkout ",function(){var e=t.reduce((function(e,t){return e+t.quantity}),0);if(e>0)return"(".concat(e,")")}()," "))))},g=a(59),v=a(60),x=a(42),j=a(65),S=a(62),C=a(58),O=Array.from(Array(10),(function(e,t){return t+1})),k=Array.from(Array(10),(function(e,t){return t+1}));var N=function(e){var t=Object(n.useState)(O[0]),a=Object(s.a)(t,2),c=a[0],l=a[1],i=Object(n.useState)(k[0]),m=Object(s.a)(i,2),u=m[0],d=m[1];return r.a.createElement(x.a,{className:"mb-5",xs:12,md:6,lg:4,xl:3},r.a.createElement(j.a,null,r.a.createElement(o.b,{to:"/trainers/"+e.id.toString()},r.a.createElement(j.a.Img,{style:{height:"300px",objectFit:"contain"},variant:"top",src:e.imageUrl})),r.a.createElement(j.a.Body,{style:{height:"100%"}},r.a.createElement(j.a.Title,{style:{height:"48px"}},r.a.createElement("h6",null,e.name)),r.a.createElement(j.a.Text,null,"\xa3",e.price),r.a.createElement(S.a.Group,{style:{maxWidth:"fit-content"},controlId:"exampleForm.ControlSelect1"},r.a.createElement(S.a.Label,null,"Select Size"),r.a.createElement(S.a.Control,{as:"select",onChange:function(e){l(e.target.value)},value:c},O.map((function(e){return r.a.createElement("option",{key:e},e)}))),r.a.createElement(S.a.Label,null," Quantity"),r.a.createElement(S.a.Control,{style:{maxWidth:"fit-content"},as:"select",onChange:function(e){d(Number(e.target.value))},value:u},k.map((function(e){return r.a.createElement("option",{key:e},e)})))),r.a.createElement(C.a,{onClick:function(){var t={id:e.id,name:e.name,price:e.price,image:e.imageUrl,size:c,quantity:u};e.addToStore(t)},variant:"primary"},"Add To Cart"))))};var T=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],c=t[1],l=y(),o=(l.state,l.dispatch);function i(e){o({product:e,type:"add"})}return Object(n.useEffect)((function(){fetch("https://bouna-sal.herokuapp.com/trainers").then((function(e){return e.json()})).then((function(e){return c(e)}))}),[]),r.a.createElement(g.a,{className:"my-5"},r.a.createElement(v.a,null,a.map((function(e){return r.a.createElement(N,{key:e.id,id:e.id,imageUrl:e.imageUrl,price:e.price,name:e.name,addToStore:i})}))))},A=a(61);var U=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){fetch("https://bouna-sal.herokuapp.com/categories").then((function(e){return e.json()})).then((function(e){return c(e)}))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(A.a,{fluid:!0,className:"hero mb-0"},r.a.createElement(g.a,{style:{paddingBottom:"8rem",paddingTop:"8rem"}},r.a.createElement("h1",null,"Become the best version of yourself"),r.a.createElement("p",null,"Welcome to our home page"))),r.a.createElement(g.a,{className:"my-5 gym"},r.a.createElement(v.a,null,a.map((function(e){return r.a.createElement(x.a,{key:e.id,className:"mb-5 ",xs:12,md:6,lg:4,xl:4},r.a.createElement(o.b,{to:e.name},r.a.createElement(j.a,{className:"mt-0 py-0"},r.a.createElement(j.a.Img,{className:"Home-images",variant:"top",src:e.imageUrl,style:{height:"250px",width:"100%",objectFit:"contain"}}),r.a.createElement(j.a.Body,{className:"py-1"},r.a.createElement(j.a.Title,{className:"mb-1 text-center",style:{textDecoration:"none",color:"blue"}},e.name.toUpperCase())))))})))))},w=["X-small","Small","Medium","Large"],B=Array.from(Array(10),(function(e,t){return t+1}));var I=function(e){var t=Object(n.useState)(w[0]),a=Object(s.a)(t,2),c=a[0],l=a[1],i=Object(n.useState)(B[0]),m=Object(s.a)(i,2),u=m[0],d=m[1];return r.a.createElement(x.a,{className:"mb-5",xs:12,md:6,lg:4,xl:3},r.a.createElement(j.a,null,r.a.createElement(o.b,{to:"/clothings/"+e.id.toString()},r.a.createElement(j.a.Img,{style:{height:"300px",objectFit:"contain"},variant:"top",src:e.imageUrl})),r.a.createElement(j.a.Body,{style:{height:"100%"}},r.a.createElement(j.a.Title,{style:{height:"48px"}},e.name),r.a.createElement(j.a.Text,null,"\xa3",e.price),r.a.createElement(S.a.Group,{style:{maxWidth:"fit-content"},controlId:"exampleForm.ControlSelect1"},r.a.createElement(S.a.Label,null,"Select Size"),r.a.createElement(S.a.Control,{as:"select",onChange:function(e){l(e.target.value)},value:c},w.map((function(e){return r.a.createElement("option",{key:e},e)}))),r.a.createElement(S.a.Label,null,"Quantity"),r.a.createElement(S.a.Control,{style:{maxWidth:"fit-content"},as:"select",onChange:function(e){d(Number(e.target.value))},value:u},B.map((function(e){return r.a.createElement("option",{key:e},e)})))),r.a.createElement(C.a,{onClick:function(){var t={id:e.id,name:e.name,price:e.price,image:e.imageUrl,size:c,quantity:u};e.addToStore(t)},variant:"primary"},"Add To Cart"))))};var z=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],c=t[1],l=y(),o=(l.state,l.dispatch);function i(e){o({product:e,type:"add"})}return Object(n.useEffect)((function(){fetch("https://bouna-sal.herokuapp.com/clothings").then((function(e){return e.json()})).then((function(e){return c(e)}))}),[]),r.a.createElement(g.a,{className:"my-5"},r.a.createElement(v.a,null,a.map((function(e){return r.a.createElement(I,{key:e.id,id:e.id,imageUrl:e.imageUrl,price:e.price,name:e.name,addToStore:i})}))))},W=["Red","Blue","Black"],q=Array.from(Array(10),(function(e,t){return t+1}));var F=function(e){var t=Object(n.useState)(W[0]),a=Object(s.a)(t,2),c=a[0],l=a[1],i=Object(n.useState)(q[0]),m=Object(s.a)(i,2),u=m[0],d=m[1];return r.a.createElement(x.a,{className:"mb-5",xs:12,md:6,lg:4,xl:3},r.a.createElement(j.a,null,r.a.createElement(o.b,{to:"/accessories/"+e.id.toString()},r.a.createElement(j.a.Img,{style:{height:"300px",objectFit:"contain"},variant:"top",src:e.imageUrl})),r.a.createElement(j.a.Body,{style:{height:"100%"}},r.a.createElement(j.a.Title,{style:{height:"48px"}},r.a.createElement("h6",null,e.name)),r.a.createElement(j.a.Text,null,"\xa3",e.price),r.a.createElement(S.a.Group,{style:{maxWidth:"fit-content"},controlId:"exampleForm.ControlSelect1"},r.a.createElement(S.a.Label,null,"Select Color"),r.a.createElement(S.a.Control,{as:"select",onChange:function(e){l(e.target.value)},value:c},W.map((function(e){return r.a.createElement("option",{key:e},e)}))),r.a.createElement(S.a.Label,null,"Quantity"),r.a.createElement(S.a.Control,{style:{maxWidth:"fit-content"},as:"select",onChange:function(e){d(Number(e.target.value))},value:u},q.map((function(e){return r.a.createElement("option",{key:e},e)})))),r.a.createElement(C.a,{onClick:function(){var t={id:e.id,name:e.name,price:e.price,image:e.imageUrl,color:c,quantity:u};e.addToStore(t)},variant:"primary"},"Add To Cart"))))};var L=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],c=t[1],l=y(),o=(l.state,l.dispatch);function i(e){o({product:e,type:"add"})}return Object(n.useEffect)((function(){fetch("https://bouna-sal.herokuapp.com/accessories").then((function(e){return e.json()})).then((function(e){return c(e)}))}),[]),r.a.createElement(g.a,{className:"my-5"},r.a.createElement(v.a,null,a.map((function(e){return r.a.createElement(F,{key:e.id,id:e.id,imageUrl:e.imageUrl,price:e.price,name:e.name,addToStore:i})}))))};var Q=function(){var e=y(),t=e.state,a=e.dispatch;return r.a.createElement(g.a,{className:"ml-2 mt-5 checkout"},r.a.createElement("table",{className:"mt-5 "},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Price"),r.a.createElement("th",null,"Size"),r.a.createElement("th",null,"Color"),r.a.createElement("th",null,"Quantity"),r.a.createElement("th",null,"Actions"))),r.a.createElement("tbody",null,t.map((function(e){return r.a.createElement("tr",{key:e.name},r.a.createElement("td",null,e.name),r.a.createElement("td",null,"\xa3",e.price),r.a.createElement("td",null,e.size),r.a.createElement("td",null,e.color),r.a.createElement("td",null,e.quantity),r.a.createElement("td",null,r.a.createElement(C.a,{className:"ml-1 py-0",onClick:function(){return function(e){a({product:e,type:"remove"})}(e)},variant:"primary"},"Remove from cart")))})),r.a.createElement("tr",null,r.a.createElement("td",null,"Total items:",t.length),r.a.createElement("td",{style:{textAlign:"end"}},"Total is :\xa3",t.reduce((function(e,t){return e+t.price*t.quantity}),0))))))};var R=function(){return r.a.createElement("h1",null,"We are are Sorry Page Not Found")};a(35),a(54);var G=function(){return r.a.createElement(h,null,r.a.createElement("div",{className:"App"},r.a.createElement(o.a,null,r.a.createElement(b,null),r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/E-Commerce"},r.a.createElement(U,null)),r.a.createElement(i.a,{exact:!0,path:"/trainers"},r.a.createElement(T,null)),r.a.createElement(i.a,{exact:!0,path:"/clothings"},r.a.createElement(z,null)),r.a.createElement(i.a,{exact:!0,path:"/accessories"},r.a.createElement(L,null)),r.a.createElement(i.a,null,r.a.createElement(R,null)),r.a.createElement(i.a,{exact:!0,path:"/checkout"},r.a.createElement(Q,null))))),r.a.createElement("footer",{className:"footer"}," All rights Reserved"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(55);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(G,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[43,1,2]]]);
//# sourceMappingURL=main.dd078c71.chunk.js.map