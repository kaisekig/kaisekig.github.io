"use strict";(self.webpackChunkcli=self.webpackChunkcli||[]).push([[58],{6713:function(e,t,n){n.d(t,{Fr:function(){return h},ZP:function(){return o},gy:function(){return f},kD:function(){return d}});var r=n(4165),s=n(5861),i=n(4569),a=n.n(i);function o(e,t,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"allowed";return new Promise((function(o){var l={method:t,url:"https://service-forum.herokuapp.com/"+e,data:JSON.stringify(n),headers:{"Content-Type":"application/json",Authorization:c(i)}};a()(l).then((function(e){return u(e,o)})).catch(function(){var e=(0,s.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.response||401!==t.response.status){e.next=4;break}return n={status:"login",data:null},console.log(n),e.abrupt("return",o(n));case 4:o({status:"error",data:t});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}))}function u(e,t){return l.apply(this,arguments)}function l(){return(l=(0,s.Z)((0,r.Z)().mark((function e(t,n){var s,i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(t),!(t.status<200||t.status>=300)){e.next=4;break}return s={status:"error",data:t.data},e.abrupt("return",n(s));case 4:return i={status:"ok",data:t.data},e.abrupt("return",n(i));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function c(e){return"Bearer "+localStorage.getItem("token_"+e)}function d(e){return!!localStorage.getItem("token_"+e)}function h(e,t){localStorage.setItem("token_"+e,t)}function f(e){localStorage.removeItem("token_"+e)}},58:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var r=n(4942),s=n(5671),i=n(3144),a=n(136),o=n(8557),u=n(2791),l=n(2677),c=n(8695),d=n(6149),h=n(3360),f=n(9271),g=n(6713),p=n(3847),m=n(184),v=function(e){(0,a.Z)(n,e);var t=(0,o.Z)(n);function n(e){var r;return(0,s.Z)(this,n),(r=t.call(this,e)).state={username:"",email:"",password:"",isLoggedIn:!1},r}return(0,i.Z)(n,[{key:"formInputChange",value:function(e){var t=Object.assign(this.state,(0,r.Z)({},e.target.id,e.target.value));this.setState(t)}},{key:"setRegisterState",value:function(e){var t=Object.assign(this.state,{isLoggedIn:e});this.setState(t)}},{key:"doRegister",value:function(){var e=this;(0,g.ZP)("auth/register","post",{username:this.state.username,email:this.state.email,password:this.state.password}).then((function(t){console.log(t),"error"!==t.status?"ok"===t.status&&e.setRegisterState(!0):console.log(t.data)}))}},{key:"render",value:function(){var e=this;return this.state.isLoggedIn?(0,m.jsx)(f.l_,{to:"/signin"}):(0,m.jsx)(p.Z,{isLoggedIn:this.state.isLoggedIn,children:(0,m.jsxs)("div",{className:"signin-page",children:[(0,m.jsx)("br",{}),(0,m.jsx)(l.Z,{md:{span:6,offset:3},children:(0,m.jsxs)(c.Z.Body,{children:[(0,m.jsxs)(c.Z.Title,{children:[(0,m.jsx)("p",{children:"Register"}),(0,m.jsx)("span",{role:"img","aria-label":"pointing_down",children:" \ud83d\udc47 "})]}),(0,m.jsx)(c.Z.Text,{children:(0,m.jsxs)(d.Z,{children:[(0,m.jsxs)(d.Z.Group,{as:l.Z,children:[(0,m.jsx)(d.Z.Label,{htmlFor:"username",children:" Username: "}),(0,m.jsx)(d.Z.Control,{type:"text",id:"username",value:this.state.username,onChange:function(t){return e.formInputChange(t)}})]}),(0,m.jsxs)(d.Z.Group,{as:l.Z,children:[(0,m.jsx)(d.Z.Label,{htmlFor:"email",children:" Email: "}),(0,m.jsx)(d.Z.Control,{type:"email",id:"email",value:this.state.email,onChange:function(t){return e.formInputChange(t)}})]}),(0,m.jsxs)(d.Z.Group,{as:l.Z,children:[(0,m.jsx)(d.Z.Label,{htmlFor:"password",children:" Password: "}),(0,m.jsx)(d.Z.Control,{type:"password",id:"password",value:this.state.password,onChange:function(t){return e.formInputChange(t)}})]}),(0,m.jsx)(d.Z.Group,{children:(0,m.jsx)(h.Z,{variant:"dark",size:"sm",onClick:function(){return e.doRegister()},children:" Register"})})]})})]})})]})})}}]),n}(u.Component)},3847:function(e,t,n){n.d(t,{Z:function(){return x}});var r=n(8152),s=n(2791),i=(n(7632),n(613),n(6144),n(5427)),a=n(5671),o=n(3144),u=n(136),l=n(8557),c=n(9005),d=n(7022),h=n(4034),f=n(1523),g=n(184),p=(0,o.Z)((function e(t,n){(0,a.Z)(this,e),this.text="",this.link="",this.text=t,this.link=n})),m=function(e){(0,u.Z)(n,e);var t=(0,l.Z)(n);function n(e){var r;return(0,a.Z)(this,n),(r=t.call(this,e)).state={items:[]},r}return(0,o.Z)(n,[{key:"render",value:function(){return(0,g.jsx)("div",{children:(0,g.jsx)(c.Z,{bg:"light",variant:"light",fixed:"top",children:(0,g.jsxs)(d.Z,{children:[(0,g.jsx)(c.Z.Brand,{children:"QR"}),(0,g.jsx)(h.Z,{className:"mr-auto",children:(0,g.jsx)(f.UT,{children:this.props.items.map((function(e){return(0,g.jsx)(f.rU,{to:e.link,children:e.text})}))})})]})})})}}]),n}(s.Component),v=function(e){(0,u.Z)(n,e);var t=(0,l.Z)(n);function n(e){var r;return(0,a.Z)(this,n),(r=t.call(this,e)).state={role:""},r}return(0,o.Z)(n,[{key:"render",value:function(){var e=[];switch(this.props.role){case"visitor":e=this.visitorMenuItems();break;case"allowed":e=this.userMenuItems()}return(0,g.jsx)(m,{items:e})}},{key:"visitorMenuItems",value:function(){return[new p("Home","/"),new p("Sign In","/signin"),new p("Register","/register")]}},{key:"userMenuItems",value:function(){return[new p("Quotes","/quotes"),new p("Sign Out","/signout")]}}]),n}(s.Component),Z={position:"fixed",left:0,bottom:0,width:"100%",zIndex:9999,margin:0,textAlign:"center"},x=function(e){var t=(0,s.useState)(!1),n=(0,r.Z)(t,2),a=n[0],o=n[1];(0,s.useEffect)((function(){var e=function(){window.isOffline=!1,o(!1)},t=function(){window.isOffline=!0,o(!0)};return window.addEventListener("online",e),window.addEventListener("offline",t),function(){window.removeEventListener("online",e),window.removeEventListener("offline",t)}})),(0,s.useEffect)((function(){window.isOffline&&o(!0)}),[]);var u,l,c=(u=e.isLoggedIn,l=e.showBackButton,(0,g.jsx)(v,{role:u?"allowed":"visitor",showBackButton:l}));return(0,g.jsxs)("div",{children:[c,a?(0,g.jsx)(i.Z,{variant:"warning",style:Z,children:"Offline mode"}):null,(0,g.jsx)("br",{}),e.children]})}}}]);
//# sourceMappingURL=58.96e9efa0.chunk.js.map