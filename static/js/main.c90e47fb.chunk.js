(this.webpackJsonpnewapp=this.webpackJsonpnewapp||[]).push([[0],{11:function(e,t,n){e.exports=n(18)},16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(4),i=n.n(o),c=(n(16),n(8)),s=n(9),l=n(5),u=n(6),h=n(10),m=n(7),f=n(17),v=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).ref=a.a.createRef(),e.state={url:[]},e.observer=null,e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.observer=new IntersectionObserver((function(t){Object(s.a)(t,1)[0].intersectionRatio>0&&e.getNewImage()}),{threshold:1}),this.observer.observe(this.ref.current)}},{key:"getNewImage",value:function(){var e=this,t=f(),n="https://api.giphy.com/v1/gifs/search?api_key=bAK3lUZJd4RlBw8fyq6Cq8WYEmMiZAlp&limit=1&q=";n=n.concat(t),fetch(n).then((function(e){return e.json()})).then((function(t){var n=t.data[0].images.downsized.url,r=[].concat(Object(c.a)(e.state.url),[n]);e.setState({url:r})}))}},{key:"render",value:function(){var e=this;return a.a.createElement("div",null,a.a.createElement("h1",null,"Infinite Scroll using IO"),a.a.createElement("div",null,this.state.url.map((function(t,n){return a.a.createElement("div",{key:n,newref:function(t){e.divitem=t}},a.a.createElement("img",{src:t,style:{height:"800px",width:"100%"},alt:"img not loaded"}))}))),a.a.createElement("footer",{ref:this.ref},"Loading"))}}]),n}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[11,1,2]]]);
//# sourceMappingURL=main.c90e47fb.chunk.js.map