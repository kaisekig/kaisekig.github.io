(this.webpackJsonpcli=this.webpackJsonpcli||[]).push([[9],{104:function(e,t,s){},109:function(e,t,s){"use strict";s.r(t),s.d(t,"default",(function(){return x}));var a=s(57),n=s(13),i=s(14),r=s(16),o=s(15),c=s(0),j=s.n(c),u=s(75),d=s(116),l=s(110),h=s(76),b=s(1),g=s(40),p=s(41),O=(s(104),s(3)),x=function(e){Object(r.a)(s,e);var t=Object(o.a)(s);function s(e){var a;return Object(n.a)(this,s),(a=t.call(this,e)).state={username:"",password:"",isLoggedIn:!1},a}return Object(i.a)(s,[{key:"formInputChange",value:function(e){var t=Object.assign(this.state,Object(a.a)({},e.target.id,e.target.value));this.setState(t)}},{key:"setLoginState",value:function(e){var t=Object.assign(this.state,{isLoggedIn:e});this.setState(t)}},{key:"doLogin",value:function(){var e=this;Object(g.a)("auth/signin","post",{username:this.state.username,password:this.state.password}).then((function(t){"error"!==t.status?"ok"===t.status&&(Object(g.b)("allowed",t.data.token),e.setLoginState(!0)):console.log(t.data)}))}},{key:"render",value:function(){var e=this;return!0===this.state.isLoggedIn?Object(O.jsx)(b.a,{to:"/quotes"}):Object(O.jsx)(p.a,{isLoggedIn:this.state.isLoggedIn,children:Object(O.jsxs)("div",{className:"signin-page",children:[Object(O.jsx)("br",{}),Object(O.jsx)(u.a,{md:{span:6,offset:3},children:Object(O.jsxs)(d.a.Body,{children:[Object(O.jsxs)(d.a.Title,{children:[Object(O.jsx)("p",{children:"Sign in here!"}),Object(O.jsx)("span",{role:"img","aria-label":"pointing_down",children:" \ud83d\udc47 "})]}),Object(O.jsx)(d.a.Text,{children:Object(O.jsxs)(l.a,{children:[Object(O.jsxs)(l.a.Group,{as:u.a,children:[Object(O.jsx)(l.a.Label,{htmlFor:"username",children:" Username: "}),Object(O.jsx)(l.a.Control,{type:"text",id:"username",value:this.state.username,onChange:function(t){return e.formInputChange(t)}})]}),Object(O.jsxs)(l.a.Group,{as:u.a,children:[Object(O.jsx)(l.a.Label,{htmlFor:"password",children:" Password: "}),Object(O.jsx)(l.a.Control,{type:"password",id:"password",value:this.state.password,onChange:function(t){return e.formInputChange(t)}})]}),Object(O.jsx)(l.a.Group,{children:Object(O.jsx)(h.a,{variant:"dark",size:"sm",onClick:function(){return e.doLogin()},children:" Jump in"})})]})})]})})]})})}}]),s}(j.a.Component)}}]);
//# sourceMappingURL=9.62107554.chunk.js.map