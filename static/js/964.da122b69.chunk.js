"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[964],{760:function(e,t,n){var r=n(184);t.Z=function(){return(0,r.jsx)("p",{children:"Oops, something went wrong. Try again!"})}},911:function(e,t,n){var r=n(184);t.Z=function(e){var t=e.children,n=e.className;return(0,r.jsx)("ul",{className:n,children:t})}},38:function(e,t){var n={headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZWIxOWFlZTJiNTU2ZTg3MmFlYjRkMTJmM2UzZDBlZiIsInN1YiI6IjY0NmY2NjQzMTdjNDQzMDBjMjI0OTMzZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nSQ1KLIUK97f2ypbV38GEeFR4HBt9RE_gR1cSa6SUjM"}};t.Z=function(e){return fetch("".concat("https://api.themoviedb.org/3","/").concat(e),n).then((function(e){return e.ok?e.json():Promise.reject(e.status)}))}},964:function(e,t,n){n.r(t),n.d(t,{default:function(){return Z}});var r=n(433),i=n(439),a=n(791),c=n(38),s=n(87),u=n(689),o=n(323),l=n(911),h=n(760),m="SearchForm_input__k4ukm",f="SearchForm_button__76exa",v=n(184),d=function(e){var t=e.handleSubmit;return(0,v.jsxs)("form",{onSubmit:t,children:[(0,v.jsx)("input",{name:"movie",type:"text",autoFocus:!0,placeholder:"Movie title",className:m}),(0,v.jsx)("button",{type:"submit",className:f,children:"Search"})]})},j="Movies_movList__wD674",Z=function(){var e,t=(0,s.lr)(),n=(0,i.Z)(t,2),m=n[0],f=n[1],Z=(0,a.useState)(null!==(e=m.get("search"))&&void 0!==e?e:""),_=(0,i.Z)(Z,2),x=_[0],p=_[1],I=(0,a.useState)(!1),N=(0,i.Z)(I,2),g=N[0],S=N[1],b=(0,a.useState)(!1),y=(0,i.Z)(b,2),J=y[0],M=y[1],k=(0,a.useState)([]),T=(0,i.Z)(k,2),w=T[0],z=T[1],F=(0,u.TH)();(0,a.useEffect)((function(){""!==x&&(S(!0),M(!1),(0,c.Z)("search/movie?query=".concat(x)).then((function(e){var t=e.results;z((0,r.Z)(t))})).catch((function(){return M(!0)})).finally((function(){return S(!1)})))}),[x]);var O=w.map((function(e){var t=e.id,n=e.title;return(0,v.jsx)("li",{className:"list_item",children:(0,v.jsx)(s.OL,{to:"/movies/".concat(t),state:{from:F},className:"link",children:n})},t)}));return(0,v.jsxs)("div",{className:j,children:[(0,v.jsx)(d,{handleSubmit:function(e){e.preventDefault();var t=e.target.elements.movie.value.trim();""!==t&&(f({search:t}),p(t),e.target.reset())}}),g&&(0,v.jsx)(o.Z,{}),J&&(0,v.jsx)(h.Z,{}),w&&(0,v.jsx)(l.Z,{children:O}),0===w.length&&""!==x&&!J&&(0,v.jsx)("p",{children:"We've found nothing. Try another query!"})]})}}}]);
//# sourceMappingURL=964.da122b69.chunk.js.map