"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[853],{760:function(e,t,n){var i=n(184);t.Z=function(){return(0,i.jsx)("p",{children:"Oops, something went wrong. Try again!"})}},38:function(e,t){var n={headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZWIxOWFlZTJiNTU2ZTg3MmFlYjRkMTJmM2UzZDBlZiIsInN1YiI6IjY0NmY2NjQzMTdjNDQzMDBjMjI0OTMzZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nSQ1KLIUK97f2ypbV38GEeFR4HBt9RE_gR1cSa6SUjM"}};t.Z=function(e){return fetch("".concat("https://api.themoviedb.org/3","/").concat(e),n).then((function(e){return e.ok?e.json():Promise.reject(e.status)}))}},853:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});var i=n(439),s=n(689),r=n(87),o=n(791),a=n(38),c="MovieDetails_det__GGNp2",l="MovieDetails_button__CI4u7",d=n(323),u=n(760),h="movieInfoComponent_descr__DDxdJ",v=n(184),_=function(e){var t=e.title,n=e.info;return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("h4",{children:t}),(0,v.jsx)("p",{className:h,children:n})]})},j="MovieInfo_wrapper__PIxl0",f="MovieInfo_title__6kcKz",x="MovieInfo_rating__MDuth",m="MovieInfo_overview__7Zot1",g="MovieInfo_genres__uMoCf",p=function(e){var t=e.poster,n=e.title,i=e.rating,s=e.overview,r=e.genres;return(0,v.jsxs)("div",{className:j,children:[(0,v.jsx)("div",{children:(0,v.jsx)("img",{src:t,alt:"poster",width:"200"})}),(0,v.jsxs)("div",{children:[(0,v.jsx)("h2",{className:f,children:n}),0!==i&&(0,v.jsxs)("p",{className:x,children:["Rating: ",i,"/10"]}),s&&(0,v.jsx)("div",{className:m,children:(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(_,{title:"Overview",info:s})})}),(0,v.jsx)("div",{className:g,children:r&&(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(_,{title:"Genres",info:r})})})]})]})},I="MovieInfoSeeMore_seeMore__WdgJx",M="MovieInfoSeeMore_list__Ky2qt",N="MovieInfoSeeMore_link__BHVh7",Z=function(){return(0,v.jsx)(v.Fragment,{children:(0,v.jsxs)("div",{className:I,children:[(0,v.jsx)("h4",{children:"See more:"}),(0,v.jsxs)("ul",{className:M,children:[(0,v.jsx)("li",{className:N,children:(0,v.jsx)(r.OL,{to:"cast",children:"Cast"})}),(0,v.jsx)("li",{className:N,children:(0,v.jsx)(r.OL,{to:"reviews",children:"Reviews"})})]})]})})},b=function(){var e,t,n=(0,s.UO)().movieId,h=(0,o.useState)(""),_=(0,i.Z)(h,2),j=_[0],f=_[1],x=(0,o.useState)(""),m=(0,i.Z)(x,2),g=m[0],I=m[1],M=(0,o.useState)(""),N=(0,i.Z)(M,2),b=N[0],w=N[1],S=(0,o.useState)(""),J=(0,i.Z)(S,2),y=J[0],k=J[1],C=(0,o.useState)(""),O=(0,i.Z)(C,2),D=O[0],G=O[1],L=(0,o.useState)(!1),U=(0,i.Z)(L,2),z=U[0],F=U[1],Q=(0,o.useState)(!1),R=(0,i.Z)(Q,2),T=R[0],B=R[1],W=null!==(e=null===(t=(0,o.useRef)((0,s.TH)()).current.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/",K="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb17OLPVxDbgiMnuuXiy3uJoJaUQRsGB6y8Q&usqp=CAU";return(0,o.useEffect)((function(){F(!0),B(!1),(0,a.Z)("/movie/".concat(n,"?append_to_response=poster_path")).then((function(e){f(e.title),e.poster_path?I("https://image.tmdb.org/t/p/w500".concat(e.poster_path)):I(K),w(e.overview),k(e.genres.map((function(e){return e.name})).join(", ")),G(0!==e.vote_average?e.vote_average.toFixed(1):0)})).catch((function(){B(!0)})).finally((function(){return F(!1)}))}),[n]),(0,v.jsxs)("div",{className:c,children:[(0,v.jsx)(r.rU,{to:W,className:l,children:"\u2190 Go back"}),z&&(0,v.jsx)(d.Z,{}),T&&(0,v.jsx)(u.Z,{}),(0,v.jsx)(p,{poster:z?K:g,title:z?"Loading...":j||"No title available",rating:z?"Loading...":D||"0.0",overview:z?"Loading...":b||"No overview available",genres:z?"Loading...":y||"No genres available"}),(0,v.jsx)(Z,{}),(0,v.jsx)(o.Suspense,{fallback:(0,v.jsx)(d.Z,{}),children:(0,v.jsx)(s.j3,{})})]})}}}]);
//# sourceMappingURL=853.2ebf7559.chunk.js.map