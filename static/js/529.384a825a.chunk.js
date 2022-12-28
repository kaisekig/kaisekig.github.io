"use strict";(self.webpackChunkcli=self.webpackChunkcli||[]).push([[529,114],{6713:function(t,e,n){n.d(e,{Fr:function(){return d},ZP:function(){return a},gy:function(){return h},kD:function(){return f}});var s=n(4165),r=n(5861),i=n(4569),o=n.n(i);function a(t,e,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"allowed";return new Promise((function(a){var c={method:e,url:"https://service-forum.herokuapp.com/"+t,data:JSON.stringify(n),headers:{"Content-Type":"application/json",Authorization:l(i)}};o()(c).then((function(t){return u(t,a)})).catch(function(){var t=(0,r.Z)((0,s.Z)().mark((function t(e){var n;return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.response||401!==e.response.status){t.next=4;break}return n={status:"login",data:null},console.log(n),t.abrupt("return",a(n));case 4:a({status:"error",data:e});case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}))}function u(t,e){return c.apply(this,arguments)}function c(){return(c=(0,r.Z)((0,s.Z)().mark((function t(e,n){var r,i;return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(console.log(e),!(e.status<200||e.status>=300)){t.next=4;break}return r={status:"error",data:e.data},t.abrupt("return",n(r));case 4:return i={status:"ok",data:e.data},t.abrupt("return",n(i));case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(t){return"Bearer "+localStorage.getItem("token_"+t)}function f(t){return!!localStorage.getItem("token_"+t)}function d(t,e){localStorage.setItem("token_"+t,e)}function h(t){localStorage.removeItem("token_"+t)}},5114:function(t,e,n){n.r(e),n.d(e,{default:function(){return v}});var s=n(5671),r=n(3144),i=n(136),o=n(8557),a=n(2791),u=n(8695),c=n(3360),l=n(6713),f=n(3847),d=n(184),h=function(t){(0,i.Z)(n,t);var e=(0,o.Z)(n);function n(t){var r;return(0,s.Z)(this,n),(r=e.call(this,t)).onReloadClickHandler=function(){window.isOffline||window.location.reload()},r.state={isLoggedIn:(0,l.kD)("allowed")},r}return(0,r.Z)(n,[{key:"render",value:function(){return(0,d.jsx)(f.Z,{isLoggedIn:this.state.isLoggedIn,children:(0,d.jsx)("div",{className:"fallback",children:(0,d.jsx)(u.Z,{children:(0,d.jsxs)(u.Z.Body,{children:[(0,d.jsx)("h1",{children:"No Internet Connection"}),(0,d.jsx)(c.Z,{variant:"primary",onClick:this.onReloadClickHandler,children:"Reload"})]})})})})}}]),n}(a.Component),v=h},2529:function(t,e,n){n.r(e),n.d(e,{default:function(){return y}});var s=n(5671),r=n(3144),i=n(136),o=n(8557),a=n(2791),u=n(8695),c=n(7462),l=n(3366),f=n(1694),d=n.n(f),h=n(162),v=["bsPrefix","className","noGutters","as"],m=["xl","lg","md","sm","xs"],p=a.forwardRef((function(t,e){var n=t.bsPrefix,s=t.className,r=t.noGutters,i=t.as,o=void 0===i?"div":i,u=(0,l.Z)(t,v),f=(0,h.vE)(n,"row"),p=f+"-cols",g=[];return m.forEach((function(t){var e,n=u[t];delete u[t];var s="xs"!==t?"-"+t:"";null!=(e=null!=n&&"object"===typeof n?n.cols:n)&&g.push(""+p+s+"-"+e)})),a.createElement(o,(0,c.Z)({ref:e},u,{className:d().apply(void 0,[s,f,r&&"no-gutters"].concat(g))}))}));p.displayName="Row",p.defaultProps={noGutters:!1};var g=p,x=n(7022),Z=n(9271),w=n(6713),k=n(3847),j=n(5114),b=n(184),y=function(t){(0,i.Z)(n,t);var e=(0,o.Z)(n);function n(t){var r;return(0,s.Z)(this,n),(r=e.call(this,t)).state={quote:{comments:[]},isLoggedIn:!0,isOffline:!1},r}return(0,r.Z)(n,[{key:"loadQuote",value:function(){var t=this,e=this.props.match.params.postId;(0,w.ZP)("api/post/"+e,"get",{}).then((function(e){if(console.log(e),"error"!==e.status){"login"===e.status&&t.setLogginState(!1);var n=e.data;n&&t.setQuoteState(n),t.setState({isOffline:!1}),console.log("QUOTE",n)}else t.setState({isOffline:!0})})).catch((function(t){return console.log(t)}))}},{key:"componentDidMount",value:function(){var t=this;this.loadQuote(),new BroadcastChannel("sync-channel").onmessage=function(e){console.log(e),e.data.finished&&t.loadQuote()}}},{key:"render",value:function(){if(!1===this.state.isLoggedIn)return(0,b.jsx)(Z.l_,{to:"/signin"});if(this.state.isOffline)return(0,b.jsx)(j.default,{});var t=(0,b.jsxs)(u.Z,{children:[(0,b.jsx)(u.Z.Body,{children:(0,b.jsxs)("blockquote",{className:"blockquote mb-0",children:[(0,b.jsxs)("p",{children:[" ",this.state.quote.body," "]}),(0,b.jsxs)("footer",{className:"blockquote-footer",children:["Someone famous in ",(0,b.jsx)("cite",{title:"Source Title",children:this.state.quote.author})]})]})}),(0,b.jsxs)(u.Z.Footer,{children:[0===this.state.quote.comments.length&&(0,b.jsx)("br",{}),this.state.quote.comments.map((function(t){return(0,b.jsx)("div",{children:(0,b.jsx)(u.Z.Text,{children:(0,b.jsx)(g,{children:(0,b.jsxs)("p",{children:["Comment ",t.text]})})},t.id)})}))]})]});return(0,b.jsx)(k.Z,{isLoggedIn:this.state.isLoggedIn,showBackButton:!0,children:(0,b.jsxs)(x.Z,{children:[(0,b.jsx)("br",{}),(0,b.jsx)("br",{}),t]})})}},{key:"setLogginState",value:function(t){var e=Object.assign(this.state,{isLoggedIn:t});this.setState(e)}},{key:"setQuoteState",value:function(t){this.setState(Object.assign(this.state,{quote:t}))}},{key:"setCommentsState",value:function(t){this.setState(Object.assign(this.state,{comments:t}))}}]),n}(a.Component)},3847:function(t,e,n){n.d(e,{Z:function(){return Z}});var s=n(8152),r=n(2791),i=(n(7632),n(613),n(6144),n(5427)),o=n(5671),a=n(3144),u=n(136),c=n(8557),l=n(9005),f=n(7022),d=n(4034),h=n(1523),v=n(184),m=(0,a.Z)((function t(e,n){(0,o.Z)(this,t),this.text="",this.link="",this.text=e,this.link=n})),p=function(t){(0,u.Z)(n,t);var e=(0,c.Z)(n);function n(t){var s;return(0,o.Z)(this,n),(s=e.call(this,t)).state={items:[]},s}return(0,a.Z)(n,[{key:"render",value:function(){return(0,v.jsx)("div",{children:(0,v.jsx)(l.Z,{bg:"light",variant:"light",fixed:"top",children:(0,v.jsxs)(f.Z,{children:[(0,v.jsx)(l.Z.Brand,{children:"QR"}),(0,v.jsx)(d.Z,{className:"mr-auto",children:(0,v.jsx)(h.UT,{children:this.props.items.map((function(t){return(0,v.jsx)(h.rU,{to:t.link,children:t.text})}))})})]})})})}}]),n}(r.Component),g=function(t){(0,u.Z)(n,t);var e=(0,c.Z)(n);function n(t){var s;return(0,o.Z)(this,n),(s=e.call(this,t)).state={role:""},s}return(0,a.Z)(n,[{key:"render",value:function(){var t=[];switch(this.props.role){case"visitor":t=this.visitorMenuItems();break;case"allowed":t=this.userMenuItems()}return(0,v.jsx)(p,{items:t})}},{key:"visitorMenuItems",value:function(){return[new m("Home","/"),new m("Sign In","/signin"),new m("Register","/register")]}},{key:"userMenuItems",value:function(){return[new m("Quotes","/quotes"),new m("Sign Out","/signout")]}}]),n}(r.Component),x={position:"fixed",left:0,bottom:0,width:"100%",zIndex:9999,margin:0,textAlign:"center"},Z=function(t){var e=(0,r.useState)(!1),n=(0,s.Z)(e,2),o=n[0],a=n[1];(0,r.useEffect)((function(){var t=function(){window.isOffline=!1,a(!1)},e=function(){window.isOffline=!0,a(!0)};return window.addEventListener("online",t),window.addEventListener("offline",e),function(){window.removeEventListener("online",t),window.removeEventListener("offline",e)}})),(0,r.useEffect)((function(){window.isOffline&&a(!0)}),[]);var u,c,l=(u=t.isLoggedIn,c=t.showBackButton,(0,v.jsx)(g,{role:u?"allowed":"visitor",showBackButton:c}));return(0,v.jsxs)("div",{children:[l,o?(0,v.jsx)(i.Z,{variant:"warning",style:x,children:"Offline mode"}):null,(0,v.jsx)("br",{}),t.children]})}},3360:function(t,e,n){var s=n(7462),r=n(3366),i=n(1694),o=n.n(i),a=n(2791),u=n(162),c=n(8054),l=["bsPrefix","variant","size","active","className","block","type","as"],f=a.forwardRef((function(t,e){var n=t.bsPrefix,i=t.variant,f=t.size,d=t.active,h=t.className,v=t.block,m=t.type,p=t.as,g=(0,r.Z)(t,l),x=(0,u.vE)(n,"btn"),Z=o()(h,x,d&&"active",i&&x+"-"+i,v&&x+"-block",f&&x+"-"+f);if(g.href)return a.createElement(c.Z,(0,s.Z)({},g,{as:p,ref:e,className:o()(Z,g.disabled&&"disabled")}));e&&(g.ref=e),m?g.type=m:p||(g.type="button");var w=p||"button";return a.createElement(w,(0,s.Z)({},g,{className:Z}))}));f.displayName="Button",f.defaultProps={variant:"primary",active:!1,disabled:!1},e.Z=f}}]);
//# sourceMappingURL=529.384a825a.chunk.js.map