"use strict";(self.webpackChunkcli=self.webpackChunkcli||[]).push([[114],{6713:function(n,e,t){t.d(e,{Fr:function(){return d},ZP:function(){return s},gy:function(){return h},kD:function(){return f}});var r=t(4165),i=t(5861),o=t(4569),a=t.n(o);function s(n,e,t){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"allowed";return new Promise((function(s){var c={method:e,url:"https://service-forum.herokuapp.com/"+n,data:JSON.stringify(t),headers:{"Content-Type":"application/json",Authorization:l(o)}};a()(c).then((function(n){return u(n,s)})).catch(function(){var n=(0,i.Z)((0,r.Z)().mark((function n(e){var t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!e.response||401!==e.response.status){n.next=4;break}return t={status:"login",data:null},console.log(t),n.abrupt("return",s(t));case 4:s({status:"error",data:e});case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}())}))}function u(n,e){return c.apply(this,arguments)}function c(){return(c=(0,i.Z)((0,r.Z)().mark((function n(e,t){var i,o;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(console.log(e),!(e.status<200||e.status>=300)){n.next=4;break}return i={status:"error",data:e.data},n.abrupt("return",t(i));case 4:return o={status:"ok",data:e.data},n.abrupt("return",t(o));case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n){return"Bearer "+localStorage.getItem("token_"+n)}function f(n){return!!localStorage.getItem("token_"+n)}function d(n,e){localStorage.setItem("token_"+n,e)}function h(n){localStorage.removeItem("token_"+n)}},5114:function(n,e,t){t.r(e),t.d(e,{default:function(){return v}});var r=t(5671),i=t(3144),o=t(136),a=t(8557),s=t(2791),u=t(8695),c=t(3360),l=t(6713),f=t(3847),d=t(184),h=function(n){(0,o.Z)(t,n);var e=(0,a.Z)(t);function t(n){var i;return(0,r.Z)(this,t),(i=e.call(this,n)).onReloadClickHandler=function(){window.isOffline||window.location.reload()},i.state={isLoggedIn:(0,l.kD)("allowed")},i}return(0,i.Z)(t,[{key:"render",value:function(){return(0,d.jsx)(f.Z,{isLoggedIn:this.state.isLoggedIn,children:(0,d.jsx)("div",{className:"fallback",children:(0,d.jsx)(u.Z,{children:(0,d.jsxs)(u.Z.Body,{children:[(0,d.jsx)("h1",{children:"No Internet Connection"}),(0,d.jsx)(c.Z,{variant:"primary",onClick:this.onReloadClickHandler,children:"Reload"})]})})})})}}]),t}(s.Component),v=h},3847:function(n,e,t){t.d(e,{Z:function(){return k}});var r=t(8152),i=t(2791),o=(t(7632),t(613),t(6144),t(5427)),a=t(5671),s=t(3144),u=t(136),c=t(8557),l=t(9005),f=t(7022),d=t(4034),h=t(1523),v=t(184),p=(0,s.Z)((function n(e,t){(0,a.Z)(this,n),this.text="",this.link="",this.text=e,this.link=t})),m=function(n){(0,u.Z)(t,n);var e=(0,c.Z)(t);function t(n){var r;return(0,a.Z)(this,t),(r=e.call(this,n)).state={items:[]},r}return(0,s.Z)(t,[{key:"render",value:function(){return(0,v.jsx)("div",{children:(0,v.jsx)(l.Z,{bg:"light",variant:"light",fixed:"top",children:(0,v.jsxs)(f.Z,{children:[(0,v.jsx)(l.Z.Brand,{children:"QR"}),(0,v.jsx)(d.Z,{className:"mr-auto",children:(0,v.jsx)(h.UT,{children:this.props.items.map((function(n){return(0,v.jsx)(h.rU,{to:n.link,children:n.text})}))})})]})})})}}]),t}(i.Component),w=function(n){(0,u.Z)(t,n);var e=(0,c.Z)(t);function t(n){var r;return(0,a.Z)(this,t),(r=e.call(this,n)).state={role:""},r}return(0,s.Z)(t,[{key:"render",value:function(){var n=[];switch(this.props.role){case"visitor":n=this.visitorMenuItems();break;case"allowed":n=this.userMenuItems()}return(0,v.jsx)(m,{items:n})}},{key:"visitorMenuItems",value:function(){return[new p("Home","/"),new p("Sign In","/signin"),new p("Register","/register")]}},{key:"userMenuItems",value:function(){return[new p("Quotes","/quotes"),new p("Sign Out","/signout")]}}]),t}(i.Component),Z={position:"fixed",left:0,bottom:0,width:"100%",zIndex:9999,margin:0,textAlign:"center"},k=function(n){var e=(0,i.useState)(!1),t=(0,r.Z)(e,2),a=t[0],s=t[1];(0,i.useEffect)((function(){var n=function(){window.isOffline=!1,s(!1)},e=function(){window.isOffline=!0,s(!0)};return window.addEventListener("online",n),window.addEventListener("offline",e),function(){window.removeEventListener("online",n),window.removeEventListener("offline",e)}})),(0,i.useEffect)((function(){window.isOffline&&s(!0)}),[]);var u,c,l=(u=n.isLoggedIn,c=n.showBackButton,(0,v.jsx)(w,{role:u?"allowed":"visitor",showBackButton:c}));return(0,v.jsxs)("div",{children:[l,a?(0,v.jsx)(o.Z,{variant:"warning",style:Z,children:"Offline mode"}):null,(0,v.jsx)("br",{}),n.children]})}},3360:function(n,e,t){var r=t(7462),i=t(3366),o=t(1694),a=t.n(o),s=t(2791),u=t(162),c=t(8054),l=["bsPrefix","variant","size","active","className","block","type","as"],f=s.forwardRef((function(n,e){var t=n.bsPrefix,o=n.variant,f=n.size,d=n.active,h=n.className,v=n.block,p=n.type,m=n.as,w=(0,i.Z)(n,l),Z=(0,u.vE)(t,"btn"),k=a()(h,Z,d&&"active",o&&Z+"-"+o,v&&Z+"-block",f&&Z+"-"+f);if(w.href)return s.createElement(c.Z,(0,r.Z)({},w,{as:m,ref:e,className:a()(k,w.disabled&&"disabled")}));e&&(w.ref=e),p?w.type=p:m||(w.type="button");var g=m||"button";return s.createElement(g,(0,r.Z)({},w,{className:k}))}));f.displayName="Button",f.defaultProps={variant:"primary",active:!1,disabled:!1},e.Z=f}}]);
//# sourceMappingURL=114.ca65e24e.chunk.js.map