"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[349],{760:function(e,t,n){var r=n(184);t.Z=function(){return(0,r.jsx)("p",{children:"Oops, something went wrong. Try again!"})}},38:function(e,t){var n={headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZWIxOWFlZTJiNTU2ZTg3MmFlYjRkMTJmM2UzZDBlZiIsInN1YiI6IjY0NmY2NjQzMTdjNDQzMDBjMjI0OTMzZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nSQ1KLIUK97f2ypbV38GEeFR4HBt9RE_gR1cSa6SUjM"}};t.Z=function(e){return fetch("".concat("https://api.themoviedb.org/3","/").concat(e),n).then((function(e){return e.ok?e.json():Promise.reject(e.status)}))}},349:function(e,t,n){n.r(t),n.d(t,{default:function(){return Z}});var r=n(433),i=n(439),s=n(791),a=n(87),c=n(38),o=n(323),u=n(760),l="SearchForm_input__HOxJo",h="SearchForm_button__UXY06",m=n(184),f=function(e){var t=e.handleSubmit;return(0,m.jsxs)("form",{onSubmit:t,children:[(0,m.jsx)("input",{name:"movie",type:"text",autoFocus:!0,placeholder:"Movie title",className:l}),(0,m.jsx)("button",{type:"submit",className:h,children:"Search"})]})},v="Movies_movList__kynF6",j=n(689),d=function(e){var t=e.movies,n=(0,j.TH)(),r=t.map((function(e){var t=e.id,r=e.title;return(0,m.jsx)("li",{className:"list_item",children:(0,m.jsx)(a.OL,{to:"/movies/".concat(t),state:{from:n},className:"link",children:r})},t)}));return(0,m.jsx)("ul",{children:r})},Z=function(){var e,t=(0,a.lr)(),n=(0,i.Z)(t,2),l=n[0],h=n[1],j=(0,s.useState)(null!==(e=l.get("search"))&&void 0!==e?e:""),Z=(0,i.Z)(j,2),_=Z[0],x=Z[1],p=(0,s.useState)(!1),g=(0,i.Z)(p,2),I=g[0],y=g[1],S=(0,s.useState)(!1),b=(0,i.Z)(S,2),N=b[0],J=b[1],M=(0,s.useState)([]),T=(0,i.Z)(M,2),k=T[0],z=T[1];(0,s.useEffect)((function(){""!==_&&(y(!0),J(!1),(0,c.Z)("search/movie?query=".concat(_)).then((function(e){var t=e.results;z((0,r.Z)(t))})).catch((function(){return J(!0)})).finally((function(){return y(!1)})))}),[_]);return(0,m.jsxs)("div",{className:v,children:[(0,m.jsx)(f,{handleSubmit:function(e){e.preventDefault();var t=e.target.elements.movie.value.trim();""!==t&&(h({search:t}),x(t),e.target.reset())}}),I&&(0,m.jsx)(o.Z,{}),N&&(0,m.jsx)(u.Z,{}),k.length>0&&!N&&(0,m.jsx)(d,{movies:k}),0===k.length&&""!==_&&!N&&(0,m.jsx)("p",{children:"We've found nothing. Try another query!"})]})}}}]);
//# sourceMappingURL=349.1dd4eb7e.chunk.js.map