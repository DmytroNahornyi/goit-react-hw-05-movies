"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[599],{854:function(t,n,e){var r=e(184),a=e(6153).TailSpin;n.Z=function(){return(0,r.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",minHeight:"50px"},children:(0,r.jsx)(a,{visible:!0,height:"60",width:"60",color:"#0170ca",ariaLabel:"rotating-triangels-loading",wrapperStyle:{marginLeft:"auto",marginRight:"auto"},wrapperClass:"rotating-triangels-wrapper"})})}},2048:function(t,n,e){e.d(n,{Hx:function(){return d},I2:function(){return g},Tg:function(){return o},Yi:function(){return f},kK:function(){return x}});var r=e(5861),a=e(7757),c=e.n(a),i=e(1243),u="?api_key=7d23f984db6827219fae104a9cbe345d",s="https://api.themoviedb.org/3";function o(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("".concat(s,"/trending/movie/day").concat(u));case 2:if(200!==(n=t.sent).status){t.next=5;break}return t.abrupt("return",n.data.results);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(t){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("".concat(s,"/movie/").concat(n).concat(u));case 2:if(200!==(e=t.sent).status){t.next=5;break}return t.abrupt("return",e.data);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("".concat(s,"/movie/").concat(n,"/reviews").concat(u));case 2:if(200!==(e=t.sent).status){t.next=5;break}return t.abrupt("return",e.data);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function x(t){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("".concat(s,"/movie/").concat(n,"/credits").concat(u));case 2:if(200!==(e=t.sent).status){t.next=5;break}return t.abrupt("return",e.data);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function g(t){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("".concat(s,"/search/movie").concat(u,"&query=").concat(n));case 2:if(200!==(e=t.sent).status){t.next=5;break}return t.abrupt("return",e.data);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},9599:function(t,n,e){e.r(n),e.d(n,{default:function(){return l}});var r,a=e(9439),c=e(2791),i=e(7689),u=e(2048),s=e(854),o=e(168),p=e(6444).default.ul(r||(r=(0,o.Z)(["\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 20px;\n\n  padding-top: 20px;\n  & li {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n\n    overflow: hidden;\n    border-radius: 0.5em;\n    box-shadow: rgb(150, 150, 150) 2px 2px 5px;\n\n    flex-basis: calc((100% - 150px) / 6);\n\n    & > div {\n      padding: 10px 12px;\n    }\n  }\n"]))),f=e(184);var l=function(){var t=(0,c.useState)([]),n=(0,a.Z)(t,2),e=n[0],r=n[1],o=(0,i.UO)();return(0,c.useEffect)((function(){(0,u.kK)(o.id).then((function(t){return r(t.cast)}))}),[o.id]),(0,f.jsx)(c.Suspense,{fallback:(0,f.jsx)(s.Z,{}),children:(0,f.jsx)("div",{children:(0,f.jsx)(p,{children:e.map((function(t){return(0,f.jsxs)("li",{children:[(0,f.jsx)("img",{src:t.profile_path?"https://image.tmdb.org/t/p/w500".concat(t.profile_path):"https://upload.wikimedia.org/wikipedia/commons/9/9a/%D0%9D%D0%B5%D1%82_%D1%84%D0%BE%D1%82%D0%BE.png",alt:"".concat(t.name)}),(0,f.jsxs)("div",{children:[(0,f.jsx)("p",{children:t.name}),(0,f.jsxs)("p",{children:["Character: ",t.character]})]})]},t.id)}))})})})}}}]);
//# sourceMappingURL=599.aaec5d07.chunk.js.map