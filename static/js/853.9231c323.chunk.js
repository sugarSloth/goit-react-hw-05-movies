"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[853],{760:function(e,t,n){var i=n(184);t.Z=function(){return(0,i.jsx)("p",{children:"Oops, something went wrong. Try again!"})}},38:function(e,t){var n={headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZWIxOWFlZTJiNTU2ZTg3MmFlYjRkMTJmM2UzZDBlZiIsInN1YiI6IjY0NmY2NjQzMTdjNDQzMDBjMjI0OTMzZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nSQ1KLIUK97f2ypbV38GEeFR4HBt9RE_gR1cSa6SUjM"}};t.Z=function(e){return fetch("".concat("https://api.themoviedb.org/3","/").concat(e),n).then((function(e){return e.ok?e.json():Promise.reject(e.status)}))}},853:function(e,t,n){n.r(t),n.d(t,{default:function(){return w}});var i=n(439),s=n(689),r=n(87),o=n(791),a=n(38),c="MovieDetails_det__HX3Ca",l="MovieDetails_button__uXZxd",d=n(323),u=n(760),v="movieInfoComponent_descr__2tUgQ",h=n(184),_=function(e){var t=e.title,n=e.info;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("h4",{children:t}),(0,h.jsx)("p",{className:v,children:n})]})},j="MovieInfo_wrapper__TIELc",f="MovieInfo_title__oNnRW",x="MovieInfo_rating__1fUe2",m="MovieInfo_overview__yDlwF",g="MovieInfo_genres__SMFEJ",p=function(e){var t=e.poster,n=e.title,i=e.rating,s=e.overview,r=e.genres;return(0,h.jsxs)("div",{className:j,children:[(0,h.jsx)("div",{children:(0,h.jsx)("img",{src:t,alt:"poster",width:"200"})}),(0,h.jsxs)("div",{children:[(0,h.jsx)("h2",{className:f,children:n}),0!==i&&(0,h.jsxs)("p",{className:x,children:["Rating: ",i,"/10"]}),s&&(0,h.jsx)("div",{className:m,children:(0,h.jsx)(h.Fragment,{children:(0,h.jsx)(_,{title:"Overview",info:s})})}),(0,h.jsx)("div",{className:g,children:r&&(0,h.jsx)(h.Fragment,{children:(0,h.jsx)(_,{title:"Genres",info:r})})})]})]})},I="MovieInfoSeeMore_seeMore__25BVP",M="MovieInfoSeeMore_list__Yc-T-",N="MovieInfoSeeMore_link__PUIYs",Z=function(){return(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)("div",{className:I,children:[(0,h.jsx)("h4",{children:"See more:"}),(0,h.jsxs)("ul",{className:M,children:[(0,h.jsx)("li",{className:N,children:(0,h.jsx)(r.OL,{to:"cast",children:"Cast"})}),(0,h.jsx)("li",{className:N,children:(0,h.jsx)(r.OL,{to:"reviews",children:"Reviews"})})]})]})})},w=function(){var e,t,n=(0,s.UO)().movieId,v=(0,o.useState)(""),_=(0,i.Z)(v,2),j=_[0],f=_[1],x=(0,o.useState)(""),m=(0,i.Z)(x,2),g=m[0],I=m[1],M=(0,o.useState)(""),N=(0,i.Z)(M,2),w=N[0],b=N[1],S=(0,o.useState)(""),J=(0,i.Z)(S,2),U=J[0],y=J[1],F=(0,o.useState)(""),L=(0,i.Z)(F,2),O=L[0],T=L[1],k=(0,o.useState)(!1),C=(0,i.Z)(k,2),Q=C[0],R=C[1],z=(0,o.useState)(!1),B=(0,i.Z)(z,2),D=B[0],G=B[1],W=null!==(e=null===(t=(0,o.useRef)((0,s.TH)()).current.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/",Y="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb17OLPVxDbgiMnuuXiy3uJoJaUQRsGB6y8Q&usqp=CAU";return(0,o.useEffect)((function(){R(!0),G(!1),(0,a.Z)("/movie/".concat(n,"?append_to_response=poster_path")).then((function(e){f(e.title),e.poster_path?I("https://image.tmdb.org/t/p/w500".concat(e.poster_path)):I(Y),b(e.overview),y(e.genres.map((function(e){return e.name})).join(", ")),T(0!==e.vote_average?e.vote_average.toFixed(1):0)})).catch((function(){G(!0)})).finally((function(){return R(!1)}))}),[n]),(0,h.jsxs)("div",{className:c,children:[(0,h.jsx)(r.rU,{to:W,className:l,children:"\u2190 Go back"}),Q&&(0,h.jsx)(d.Z,{}),D&&(0,h.jsx)(u.Z,{}),(0,h.jsx)(p,{poster:Q?Y:g,title:Q?"Loading...":j||"No title available",rating:Q?"Loading...":O||"0.0",overview:Q?"Loading...":w||"No overview available",genres:Q?"Loading...":U||"No genres available"}),(0,h.jsx)(Z,{}),(0,h.jsx)(o.Suspense,{fallback:(0,h.jsx)(d.Z,{}),children:(0,h.jsx)(s.j3,{})})]})}}}]);
//# sourceMappingURL=853.9231c323.chunk.js.map