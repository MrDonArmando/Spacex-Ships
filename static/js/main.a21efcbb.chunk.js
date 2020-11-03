(this.webpackJsonptask=this.webpackJsonptask||[]).push([[0],{79:function(e,t,n){},88:function(e,t,n){"use strict";n.r(t);var r=n(3),i=n(2),c=n.n(i),s=n(28),a=n.n(s),l=(n(79),n(23)),o=n(27),u=n(10),b=n(22),j=n(41),d=n(51),h="ADD_ADDITIONAL_INFORMATION_ABOUT_SHIP",f="SET_SEARCH_PHRASE",p={additionalInformationAboutShips:{},searchPhrase:""},O=Object(j.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:var n=t.payload,r=n.shipID,i=n.additionalInformationAboutShip,c=Object(d.a)(e,(function(e){e.additionalInformationAboutShips[r]=i}));return c;case f:var s=t.payload.searchPhrase,a=Object(d.a)(e,(function(e){e.searchPhrase=s}));return a;default:return e}}),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),x=n(42),m=function(){return Object(r.jsxs)("div",{className:"lds-ring",children:[Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{})]})},v=n(54),g=function(e){var t=e.children,n=e.isOpened;if(Object(i.useEffect)((function(){var e=document.getElementById("root");return function(){if(!n||!e)return null;e.style.filter="blur(3px)"}(),function(){!function(){if(!e)return null;e.style.filter="none"}()}}),[n]),!n)return null;var c=document.getElementById("modal");return c?a.a.createPortal(Object(r.jsx)("div",{className:"w-full h-screen absolute top-0 flex items-center justify-center",children:t}),c):null},N=function(e){var t=e.shipID,n=e.image,c=Object(b.b)(),s=Object(b.c)((function(e){return e.additionalInformationAboutShips[t]})),a=Object(i.useState)(!1),l=Object(v.a)(a,2),o=l[0],u=l[1],j=Object(i.useState)(""),d=Object(v.a)(j,2),f=d[0],p=d[1];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("div",{className:"flex h-auto mb-4",children:[Object(r.jsxs)("div",{className:"flex-2 relative flex flex-col",children:[Object(r.jsx)("div",{className:"flex-1 tracking-wide",children:s||"No additional information given"}),Object(r.jsx)("div",{className:"h-12",children:Object(r.jsx)("button",{className:"p-2 bg-blue-400 rounded text-white tracking-wide absolute left-0 bottom-0",onClick:function(){return u(!0)},children:"Add more information"})})]}),Object(r.jsx)("div",{className:"flex-3",children:Object(r.jsx)("img",{src:n,alt:"Ship"})})]}),Object(r.jsx)(g,{isOpened:o,children:Object(r.jsx)("div",{className:"bg-white rounded-xl w-2/6 mb-20 border p-4",children:Object(r.jsxs)("form",{children:[Object(r.jsx)("label",{className:"mb-2 block",htmlFor:"moreInformationAboutShip",children:"Type addtional information about this ship"}),Object(r.jsx)("textarea",{className:"w-full h-40 resize-none border p-2 tracking-wide",id:"moreInformationAboutShip",name:"moreInformationAboutShip",rows:"1",cols:"40",placeholder:"For example: This is my favourite ship...",value:f,onChange:function(e){return p(e.target.value)}}),Object(r.jsxs)("div",{className:"flex justify-between mt-2",children:[Object(r.jsx)("button",{className:"btn",onClick:function(){return u(!1)},children:"Cancel"}),Object(r.jsx)("button",{className:"btn-blue",onClick:function(e){e.preventDefault(),c(function(e,t){return{type:h,payload:{shipID:e,additionalInformationAboutShip:t}}}(t,f)),u(!1)},children:"Save"})]})]})})})]})};function w(){var e=Object(x.a)(["\n  query S($shipID: ID!) {\n    ship(id: $shipID) {\n      id\n      name\n      image\n      active\n      url\n      year_built\n      home_port\n      weight_kg\n      type\n      roles\n    }\n  }\n"]);return w=function(){return e},e}var y=Object(l.gql)(w()),I=function(){var e=Object(u.f)().shipID,t=Object(l.useQuery)(y,{variables:{shipID:e}}),n=t.loading,i=t.error,c=t.data;if(!e)return null;if(n)return Object(r.jsx)(m,{});if(i)return Object(r.jsx)("p",{children:"Error :("});var s=c.ship,a=s.id,o=s.image;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(N,{shipID:a,image:o}),Object.keys(c.ship).map((function(e,t){return Object(r.jsx)(S,{title:e,value:null===c.ship[e]?"Unknown":c.ship[e].toString(),bgColor:t%2?"gray":"white",isEven:t%2===0},e)}))]})},S=function(e){var t=e.title,n=e.value,i=e.isEven;return Object(r.jsxs)("div",{className:"p-4 flex justify-between ".concat(i&&"bg-gray-400"),children:[Object(r.jsx)("span",{children:D(t.toUpperCase())}),Object(r.jsx)("span",{children:n})]})},D=function(e){return e.replace("_"," ")},_=Object(i.memo)((function(e){var t=e.ship,n=t.id,i=t.name,c=e.isSelected;return Object(r.jsx)("li",{className:"w-full h-auto cursor-pointer border-solid border-b border-black ".concat(c&&"bg-blue-400"),children:Object(r.jsx)(o.b,{to:"/ships/".concat(n),className:"block w-full h-full text-center p-4",children:Object(r.jsx)("span",{className:"text-2xl text-shadow",children:i})})})}));function E(){var e=Object(x.a)(["\n  query {\n    ships {\n      id\n      name\n    }\n  }\n"]);return E=function(){return e},e}var A=Object(l.gql)(E()),k=function(){var e=Object(l.useQuery)(A),t=e.loading,n=e.error,i=e.data,c=Object(u.f)().shipID,s=Object(b.c)((function(e){return e.searchPhrase}));if(t)return Object(r.jsx)(m,{});if(n)return Object(r.jsx)("p",{children:"Error :("});var a=i.ships;return Object(r.jsx)("ul",{children:a.map((function(e){if(e.name.toLowerCase().includes(s.toLowerCase()))return Object(r.jsx)(_,{ship:e,isSelected:c===e.id},e.id)}))})},C=function(){var e=Object(b.b)(),t=Object(b.c)((function(e){return e.searchPhrase}));return Object(r.jsx)("input",{className:"outline-none w-1/5 border-2 rounded-full py-2 px-6 ml-8",placeholder:"Search",value:t,onChange:function(t){e(function(e){return{type:f,payload:{searchPhrase:e}}}(t.target.value))}})},P=function(){return Object(r.jsxs)("div",{className:"flex flex-col h-screen",children:[Object(r.jsx)("div",{className:"height-80px border-solid border-b border-gray flex items-center",children:Object(r.jsx)(C,{})}),Object(r.jsxs)("div",{className:"height--80px flex",children:[Object(r.jsx)("div",{className:"overflow-auto pretty-scrollbar relative flex-1 h-full",children:Object(r.jsx)(k,{})}),Object(r.jsxs)("div",{className:"relative flex-3 p-4 overflow-auto pretty-scrollbar h-full",children:[Object(r.jsx)(u.b,{exact:!0,path:"/ships",children:Object(r.jsx)("h3",{className:"text-center mt-64 text-2xl tracking-wide",children:"Please select a ship"})}),Object(r.jsx)(u.b,{path:"/ships/:shipID",children:Object(r.jsx)(I,{})})]})]})]})},T=new l.ApolloClient({uri:"https://api.spacex.land/graphql/",cache:new l.InMemoryCache({addTypename:!1})}),F=function(){return Object(r.jsx)(l.ApolloProvider,{client:T,children:Object(r.jsx)(b.a,{store:O,children:Object(r.jsxs)(o.a,{children:[Object(r.jsx)(u.b,{exact:!0,path:"/",children:Object(r.jsx)(u.a,{to:"/ships"})}),Object(r.jsx)(u.b,{exact:!0,path:["/ships","/ships/:shipID"],children:Object(r.jsx)(P,{})})]})})})},L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,90)).then((function(t){var n=t.getCLS,r=t.getFID,i=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),i(e),c(e),s(e)}))};a.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(F,{})}),document.getElementById("root")),L()}},[[88,1,2]]]);
//# sourceMappingURL=main.a21efcbb.chunk.js.map