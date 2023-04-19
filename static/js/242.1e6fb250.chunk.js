"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[242],{242:function(n,e,t){t.r(e),t.d(e,{default:function(){return q}});var r,o,c,i,a,s,u,f,l,p=t(861),h=t(439),d=t(757),v=t.n(d),g=t(791),m=t(689),x=t(308),Z=t(87),b=t(184),k=function(n){var e=n.movies;return(0,b.jsx)("ul",{children:e.map((function(n){return(0,b.jsx)("li",{children:(0,b.jsx)(Z.rU,{to:"/movies/".concat(n.id),children:n.title})},n.id)}))})},w=t(168),y=t(444),j=y.ZP.div(r||(r=(0,w.Z)(["\n  background-color: #f4f4f4;\n  min-height: 100vh;\n"]))),P=y.ZP.div(o||(o=(0,w.Z)(["\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n"]))),E=y.ZP.h1(c||(c=(0,w.Z)(["\n  font-size: 36px;\n  margin-bottom: 20px;\n  text-align: center;\n"]))),M=y.ZP.form(i||(i=(0,w.Z)(["\n  display: flex;\n  margin-bottom: 20px;\n"]))),S=y.ZP.input(a||(a=(0,w.Z)(["\n  flex: 1;\n  padding: 10px;\n  font-size: 18px;\n  border: 2px solid #ccc;\n  border-radius: 4px;\n  margin-right: 10px;\n\n  &:focus {\n    border-color: #0077ff;\n    outline: none;\n  }\n"]))),_=y.ZP.button(s||(s=(0,w.Z)(["\n  padding: 10px 20px;\n  font-size: 18px;\n  border: none;\n  border-radius: 4px;\n  background-color: #0077ff;\n  color: #fff;\n  cursor: pointer;\n"]))),z=y.ZP.p(u||(u=(0,w.Z)(["\n  font-size: 24px;\n  font-weight: bold;\n  text-align: center;\n  margin-top: 50px;\n"]))),C=y.ZP.p(f||(f=(0,w.Z)(["\n  font-size: 24px;\n  font-weight: bold;\n  color: red;\n  text-align: center;\n  margin-top: 50px;\n"]))),L=y.ZP.button(l||(l=(0,w.Z)(["\n  display: block;\n  margin: 20px auto;\n  padding: 10px 20px;\n  font-size: 18px;\n  border: none;\n  border-radius: 4px;\n  background-color: #0077ff;\n  color: #fff;\n  cursor: pointer;\n"]))),q=function(){var n=(0,m.TH)(),e=(0,g.useState)(""),t=(0,h.Z)(e,2),r=t[0],o=t[1],c=(0,g.useState)([]),i=(0,h.Z)(c,2),a=i[0],s=i[1],u=(0,g.useState)(null),f=(0,h.Z)(u,2),l=f[0],d=f[1],Z=(0,g.useState)(!1),w=(0,h.Z)(Z,2),y=w[0],q=w[1];(0,g.useEffect)((function(){var e=new URLSearchParams(n.search).get("query")||"";o(e),e&&(q(!0),x.Z.searchMovies(e).then((function(n){var e=n.results;return s(e)})).catch((function(n){return d(n.message)})).finally((function(){return q(!1)})))}),[n.search]);var R=function(){var n=(0,p.Z)(v().mark((function n(e){var t,o;return v().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.preventDefault(),n.prev=1,q(!0),n.next=5,x.Z.searchMovies(r);case 5:t=n.sent,o=t.results,s(o),setTimeout((function(){window.location.replace("/movies?query=".concat(r))}),1e3),n.next=15;break;case 11:n.prev=11,n.t0=n.catch(1),console.error(n.t0),d(n.t0.message);case 15:return n.prev=15,q(!1),n.finish(15);case 18:case"end":return n.stop()}}),n,null,[[1,11,15,18]])})));return function(e){return n.apply(this,arguments)}}();(0,g.useEffect)((function(){function n(n){return e.apply(this,arguments)}function e(){return(e=(0,p.Z)(v().mark((function n(e){var t,r,c,i;return v().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t=new URLSearchParams(window.location.search),r=t.get("query")||"",o(r),!r){n.next=22;break}return q(!0),n.prev=5,n.next=8,x.Z.searchMovies(r);case 8:c=n.sent,i=c.results,s(i),n.next=17;break;case 13:n.prev=13,n.t0=n.catch(5),console.error(n.t0),d(n.t0.message);case 17:return n.prev=17,q(!1),n.finish(17);case 20:n.next=23;break;case 22:s([]);case 23:case"end":return n.stop()}}),n,null,[[5,13,17,20]])})))).apply(this,arguments)}return window.addEventListener("popstate",n),function(){return window.removeEventListener("popstate",n)}}),[]);var T=(0,g.useCallback)((function(){window.history.back()}),[]);return(0,b.jsxs)(j,{children:[(0,b.jsx)(E,{children:"Search Movies"}),(0,b.jsxs)(P,{children:[(0,b.jsxs)(M,{onSubmit:R,children:[(0,b.jsx)(S,{type:"text",placeholder:"Search for a movie...",value:r,onChange:function(n){return o(n.target.value)}}),(0,b.jsx)(_,{type:"submit",children:"Search"})]}),y&&(0,b.jsx)(z,{children:"Loading..."}),l&&(0,b.jsx)(C,{children:l}),a.length>0&&(0,b.jsx)(k,{movies:a}),(0,b.jsx)(L,{onClick:T,children:"Go back"})]})]})}},308:function(n,e,t){var r=t(243),o="7d23f984db6827219fae104a9cbe345d",c="https://api.themoviedb.org/3",i={fetchMovies:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return r.Z.get("".concat(c,"/trending/movie/day?api_key=").concat(o,"&page=").concat(n)).then((function(n){return n.data})).catch((function(n){return console.log("Error fetching movies:",n),Promise.reject(n)}))},searchMovies:function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return r.Z.get("".concat(c,"/search/movie?api_key=").concat(o,"&query=").concat(n,"&page=").concat(e)).then((function(n){return n.data})).catch((function(n){return console.log("Error searching movies:",n),Promise.reject(n)}))},fetchMovieDetails:function(n){return r.Z.get("".concat(c,"/movie/").concat(n,"?api_key=").concat(o)).then((function(n){return n.data})).catch((function(n){return console.log("Error fetching movie details:",n),Promise.reject(n)}))},fetchMovieCast:function(n){return r.Z.get("".concat(c,"/movie/").concat(n,"/credits?api_key=").concat(o)).then((function(n){return n.data})).catch((function(n){return console.log("Error fetching movie cast:",n),Promise.reject(n)}))},fetchMovieReviews:function(n){return r.Z.get("".concat(c,"/movie/").concat(n,"/reviews?api_key=").concat(o)).then((function(n){return n.data})).catch((function(n){return console.log("Error fetching movie reviews:",n),Promise.reject(n)}))},getTrendingMovies:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return r.Z.get("".concat(c,"/trending/movie/day?api_key=").concat(o,"&page=").concat(n)).then((function(n){return n.data})).catch((function(n){return console.log("Error fetching trending movies:",n),Promise.reject(n)}))}};e.Z=i}}]);
//# sourceMappingURL=242.1e6fb250.chunk.js.map