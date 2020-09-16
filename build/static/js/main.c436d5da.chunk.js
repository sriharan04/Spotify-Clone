(this["webpackJsonpspotify-clone"]=this["webpackJsonpspotify-clone"]||[]).push([[0],{47:function(e,t,a){e.exports=a(67)},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(16),r=a.n(c),o=(a(52),a(10)),s=(a(53),a(54),"".concat("https://accounts.spotify.com/authorize","?client_id=").concat("09c0d00e092949dcb8d0ccbf1c240497","&redirect_uri=").concat("http://localhost:3000/","&scope=").concat(["user-read-currently-playing","user-read-recently-played","user-read-playback-state","user-top-read","user-modify-playback-state"].join("%20"),"&response_type=token&show_dialog=true"));var i=function(){return l.a.createElement("div",{className:"login"},l.a.createElement("img",{src:"https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg",alt:"Logo"}),l.a.createElement("a",{href:s},"Login with spotify"))},m=a(26),u=a.n(m);a(55),a(56),a(57);var d=function(e){var t=e.title,a=e.Icon;return l.a.createElement("div",{className:"sidebarOption"},a&&l.a.createElement(a,{className:"sidebarOption__icon"}),a?l.a.createElement("h4",null,t):l.a.createElement("p",null,t))},E=a(19),v=a.n(E),f=a(27),p=a.n(f),_=a(32),y=a.n(_),g=l.a.createContext(),h=function(e){var t=e.initialState,a=e.reducer,c=e.children;return l.a.createElement(g.Provider,{value:Object(n.useReducer)(a,t)},c)},b=function(){return Object(n.useContext)(g)};var N=function(){var e,t=b(),a=Object(o.a)(t,2),n=a[0].playlists;return a[1],console.log(n.items),l.a.createElement("div",{className:"sidebar"},l.a.createElement("img",{className:"sidebar__logo",src:"https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg",alt:"side_logo"}),l.a.createElement(d,{Icon:p.a,title:"Home"}),l.a.createElement(d,{Icon:v.a,title:"Search"}),l.a.createElement(d,{Icon:y.a,title:"Your Library"}),l.a.createElement("br",null),l.a.createElement("strong",{className:"sidebar_title"},"PLAYLISTS"),l.a.createElement("hr",null),null===n||void 0===n||null===(e=n.items)||void 0===e?void 0:e.map((function(e){return l.a.createElement(d,{title:e.name})})))},w=(a(63),a(33)),S=a.n(w),k=a(34),O=a.n(k),j=a(35),T=a.n(j);a(64);var L=function(e){var t=e.track,a=void 0===t?"test":t;return l.a.createElement("div",{className:"songRow"},l.a.createElement("img",{className:"songRow__album",src:a.album.images[0].url,alt:""}),l.a.createElement("div",{className:"songRow__info"},l.a.createElement("h1",null,a.name),l.a.createElement("p",null,a.artists.map((function(e){return e.name})).join(", "),"-"," ",a.album.name)))},I=(a(65),a(81));var R=function(e){e.spotify;var t,a=b(),n=Object(o.a)(a,2),c=n[0].user;return n[1],l.a.createElement("div",{className:"header"},l.a.createElement("div",{className:"header__left"},l.a.createElement(v.a,null),l.a.createElement("input",{placeholder:"search for Artists, Songs",type:"text"})),l.a.createElement("div",{className:"header__right"},l.a.createElement(I.a,{src:null===c||void 0===c||null===(t=c.images[0])||void 0===t?void 0:t.url,alt:null===c||void 0===c?void 0:c.display_name}),l.a.createElement("h4",null,null===c||void 0===c?void 0:c.display_name)))};var x=function(e){var t=e.spotify,a=b(),n=Object(o.a)(a,2),c=n[0].discover_weekly;return n[1],console.log(c),l.a.createElement("div",{className:"body"},l.a.createElement(R,{spotify:t}),l.a.createElement("div",{className:"body__info"},l.a.createElement("img",{src:null===c||void 0===c?void 0:c.images[0].url,alt:"discover_weekly_img"}),l.a.createElement("div",{className:"body__infoText"},l.a.createElement("strong",null,"PLAYLIST"),l.a.createElement("h2",null,"Discover Weekly"),l.a.createElement("p",null,null===c||void 0===c?void 0:c.description))),l.a.createElement("div",{className:"body__songs"},l.a.createElement("div",{className:"body__icons"},l.a.createElement(S.a,{className:"body__shuffle"}),l.a.createElement(O.a,null),l.a.createElement(T.a,null)),null===c||void 0===c?void 0:c.tracks.items.map((function(e){return l.a.createElement(L,{track:e.track})}))))},A=(a(66),a(38)),P=a.n(A),W=a(37),Y=a.n(W),C=a(39),U=a.n(C),D=a(36),K=a.n(D),J=a(40),z=a.n(J),B=a(79),Q=a(80),V=a(41),F=a.n(V),G=a(42),H=a.n(G);var M=function(){return l.a.createElement("div",{className:"footer"},l.a.createElement("div",{className:"footer_left"},l.a.createElement("img",{className:"footer_alubmLogo",src:"https://i.scdn.co/image/ab67616d0000b273c956570aa19c0b82b719fee6",alt:"Song_logo"}),l.a.createElement("div",{className:"footer__songInfo"},l.a.createElement("h4",null,"Chellamma"),l.a.createElement("p",null,"Anirudh Ravichander, Jonita Gandhi"))),l.a.createElement("div",{className:"footer_center"},l.a.createElement(K.a,{className:"footer__green"}),l.a.createElement(Y.a,{className:"footer__icon"}),l.a.createElement(P.a,{fontSize:"large",className:"footer__icon"}),l.a.createElement(U.a,{className:"footer__icon"}),l.a.createElement(z.a,{className:"footer__green"})),l.a.createElement("div",{className:"footer_right"},l.a.createElement(B.a,{container:!0,spacing:2},l.a.createElement(B.a,{item:!0},l.a.createElement(F.a,null)),l.a.createElement(B.a,{item:!0},l.a.createElement(H.a,null)),l.a.createElement(B.a,{item:!0,xs:!0},l.a.createElement(Q.a,null)))))};var X=function(e){var t=e.spotify;return l.a.createElement("div",{className:"player"},l.a.createElement("div",{className:"player_body"},l.a.createElement(N,null),l.a.createElement(x,{spotify:t})),l.a.createElement(M,null))},Z=new u.a;var $=function(){var e=b(),t=Object(o.a)(e,2),a=t[0],c=a.user,r=a.token,s=t[1];return Object(n.useEffect)((function(){var e=window.location.hash.substring(1).split("&").reduce((function(e,t){var a=t.split("=");return e[a[0]]=decodeURIComponent(a[1]),e}),{});window.location.hash="";var t=e.access_token;t&&(s({type:"SET_TOKEN",token:t}),Z.setAccessToken(t),Z.getMe().then((function(e){s({type:"SET_USER",user:e})}))),Z.getUserPlaylists().then((function(e){s({type:"SET_PLAYLISTS",playlists:e})})),Z.getPlaylist("37i9dQZF1DX0TyiNWW7uUQ").then((function(e){s({type:"SET_DISCOVER_WEEKLY",discover_weekly:e})}))}),[]),console.log(c),l.a.createElement("div",{className:"app"},r?l.a.createElement(X,{spotify:Z}):l.a.createElement(i,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var q=a(9),ee=function(e,t){switch(console.log(t),t.type){case"SET_USER":return Object(q.a)(Object(q.a)({},e),{},{user:t.user});case"SET_TOKEN":return Object(q.a)(Object(q.a)({},e),{},{token:t.token});case"SET_PLAYLISTS":return Object(q.a)(Object(q.a)({},e),{},{playlists:t.playlists});case"SET_DISCOVER_WEEKLY":return Object(q.a)(Object(q.a)({},e),{},{discover_weekly:t.discover_weekly});default:return e}};r.a.render(l.a.createElement(h,{initialState:{user:null,playlists:[],playing:!1,item:null},reducer:ee},l.a.createElement($,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[47,1,2]]]);
//# sourceMappingURL=main.c436d5da.chunk.js.map