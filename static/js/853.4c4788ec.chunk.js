"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[853],{760:function(e,t,n){var s=n(184);t.Z=function(){return(0,s.jsx)("p",{children:"Oops, something went wrong. Try again!"})}},38:function(e,t){var n={headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZWIxOWFlZTJiNTU2ZTg3MmFlYjRkMTJmM2UzZDBlZiIsInN1YiI6IjY0NmY2NjQzMTdjNDQzMDBjMjI0OTMzZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nSQ1KLIUK97f2ypbV38GEeFR4HBt9RE_gR1cSa6SUjM"}};t.Z=function(e){return fetch("".concat("https://api.themoviedb.org/3","/").concat(e),n).then((function(e){return e.ok?e.json():Promise.reject(e.status)}))}},853:function(e,t,n){n.r(t),n.d(t,{default:function(){return w}});var s=n(439),i=n(689),r=n(87),o=n(791),a=n(38),c="MovieDetails_det__HX3Ca",l="MovieDetails_button__uXZxd",u=n(323),d=n(760),h="movieInfoComponent_descr__2tUgQ",_=n(184),v=function(e){var t=e.title,n=e.info;return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)("h4",{children:t}),(0,_.jsx)("p",{className:h,children:n})]})},j="MovieInfo_wrapper__TIELc",f="MovieInfo_title__oNnRW",x="MovieInfo_rating__1fUe2",m="MovieInfo_overview__yDlwF",p="MovieInfo_genres__SMFEJ",g=function(e){var t=e.poster,n=e.title,s=e.rating,i=e.overview,r=e.genres;return(0,_.jsxs)("div",{className:j,children:[(0,_.jsx)("div",{children:(0,_.jsx)("img",{src:t,alt:"poster",width:"200"})}),(0,_.jsxs)("div",{children:[(0,_.jsx)("h2",{className:f,children:n}),0!==s?(0,_.jsxs)("p",{className:x,children:["Rating: ",s,"/10"]}):null,i&&(0,_.jsx)("div",{className:m,children:(0,_.jsx)(_.Fragment,{children:(0,_.jsx)(v,{title:"Overview",info:i})})}),(0,_.jsx)("div",{className:p,children:r&&(0,_.jsx)(_.Fragment,{children:(0,_.jsx)(v,{title:"Genres",info:r})})})]})]})},I="MovieInfoSeeMore_seeMore__25BVP",M="MovieInfoSeeMore_list__Yc-T-",Z="MovieInfoSeeMore_link__PUIYs",N=function(){return(0,_.jsx)(_.Fragment,{children:(0,_.jsxs)("div",{className:I,children:[(0,_.jsx)("h4",{children:"See more:"}),(0,_.jsxs)("ul",{className:M,children:[(0,_.jsx)("li",{className:Z,children:(0,_.jsx)(r.OL,{to:"cast",children:"Cast"})}),(0,_.jsx)("li",{className:Z,children:(0,_.jsx)(r.OL,{to:"reviews",children:"Reviews"})})]})]})})},w=function(){var e,t,n=(0,i.UO)().movieId,h=(0,o.useState)(""),v=(0,s.Z)(h,2),j=v[0],f=v[1],x=(0,o.useState)(""),m=(0,s.Z)(x,2),p=m[0],I=m[1],M=(0,o.useState)(""),Z=(0,s.Z)(M,2),w=Z[0],S=Z[1],b=(0,o.useState)(""),J=(0,s.Z)(b,2),U=J[0],y=J[1],F=(0,o.useState)(""),O=(0,s.Z)(F,2),T=O[0],k=O[1],C=(0,o.useState)(!1),Q=(0,s.Z)(C,2),R=Q[0],z=Q[1],B=(0,o.useState)(!1),D=(0,s.Z)(B,2),G=D[0],L=D[1],W=null!==(e=null===(t=(0,o.useRef)((0,i.TH)()).current.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/";return(0,o.useEffect)((function(){z(!0),L(!1),(0,a.Z)("/movie/".concat(n,"?append_to_response=poster_path")).then((function(e){f(e.title),I(null!==e.poster_path?"https://image.tmdb.org/t/p/w500".concat(e.poster_path):"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb17OLPVxDbgiMnuuXiy3uJoJaUQRsGB6y8Q&usqp=CAU"),S(e.overview),y(e.genres.map((function(e){return e.name})).join(", ")),k(0!==e.vote_average?e.vote_average.toFixed(1):0)})).catch((function(){return L(!0)})).finally((function(){return z(!1)}))}),[n]),(0,_.jsxs)("div",{className:c,children:[(0,_.jsx)(r.rU,{to:W,className:l,children:"\u2190 Go back"}),R&&(0,_.jsx)(u.Z,{}),G&&(0,_.jsx)(d.Z,{}),(0,_.jsx)(g,{poster:p,title:j,rating:T,overview:w,genres:U}),(0,_.jsx)(N,{}),(0,_.jsx)(o.Suspense,{fallback:(0,_.jsx)(u.Z,{}),children:(0,_.jsx)(i.j3,{})})]})}}}]);
//# sourceMappingURL=853.4c4788ec.chunk.js.map