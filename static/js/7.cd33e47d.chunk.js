(this.webpackJsonpcli=this.webpackJsonpcli||[]).push([[7],{103:function(e,t,n){},107:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return b}));var r=n(13),a=n(14),o=n(16),s=n(15),i=n(0),c=n.n(i),u=n(40),l=n(108),d=n(75),h=n(116),j=n(41),f=(n(103),n(3)),b=function(e){Object(o.a)(n,e);var t=Object(s.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"componentDidMount",value:function(){Object(u.c)("allowed")&&(console.log("radi"),this.props.history.push("/quotes"))}},{key:"render",value:function(){return Object(f.jsx)(j.a,{children:Object(f.jsx)("div",{className:"home-page",children:Object(f.jsx)(l.a,{children:Object(f.jsxs)(d.a,{md:{span:6,offset:3},children:[Object(f.jsxs)(h.a,{children:[Object(f.jsx)(h.a.Header,{children:Object(f.jsx)("h1",{children:Object(f.jsx)("span",{role:"img","aria-label":"books",children:" \ud83d\udcda "})})}),Object(f.jsxs)(h.a.Body,{children:["Welcome to the quotes app ",Object(f.jsx)("br",{}),"Small based forum to discover other's favourite quotes"]})]}),Object(f.jsxs)(h.a,{children:[Object(f.jsx)(h.a.Header,{children:Object(f.jsx)("h1",{children:Object(f.jsx)("span",{role:"img","aria-label":"collage",children:" \ud83c\udf93 "})})}),Object(f.jsx)(h.a.Body,{children:'Quotation is the repetition or copy of someone else\'s statement or thoughts. Quotation marks are punctuation marks used in text to indicate a quotation. Both of these words are sometimes abbreviated as "quote(s)".'})]}),Object(f.jsxs)(h.a,{children:[Object(f.jsx)(h.a.Header,{children:Object(f.jsx)("h1",{children:Object(f.jsx)("span",{role:"img","aria-label":"announcement",children:" \ud83d\udce2 "})})}),Object(f.jsx)(h.a.Body,{children:'Quotation is the repetition or copy of someone else\'s statement or thoughts. Quotation marks are punctuation marks used in text to indicate a quotation. Both of these words are sometimes abbreviated as "quote(s)".'})]}),Object(f.jsxs)(h.a,{children:[Object(f.jsx)(h.a.Header,{children:Object(f.jsx)("h1",{children:Object(f.jsx)("span",{role:"img","aria-label":"announcement",children:" \ud83d\udce2 "})})}),Object(f.jsx)(h.a.Body,{children:'Quotation is the repetition or copy of someone else\'s statement or thoughts. Quotation marks are punctuation marks used in text to indicate a quotation. Both of these words are sometimes abbreviated as "quote(s)".'})]})]})})})})}}]),n}(c.a.Component)},40:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"c",(function(){return h})),n.d(t,"b",(function(){return j}));var r=n(45),a=n.n(r),o=n(46),s=n(47),i=n.n(s);function c(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"allowed";return new Promise((function(s){var c={method:t,url:"https://service-forum.herokuapp.com/"+e,data:JSON.stringify(n),headers:{"Content-Type":"application/json",Authorization:d(r)}};i()(c).then((function(e){return u(e,s)})).catch(function(){var e=Object(o.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.response||401!==t.response.status){e.next=4;break}return n={status:"login",data:null},console.log(n),e.abrupt("return",s(n));case 4:s({status:"error",data:t});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}))}function u(e,t){return l.apply(this,arguments)}function l(){return(l=Object(o.a)(a.a.mark((function e(t,n){var r,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(t),!(t.status<200||t.status>=300)){e.next=4;break}return r={status:"error",data:t.data},e.abrupt("return",n(r));case 4:return o={status:"ok",data:t.data},e.abrupt("return",n(o));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return"Bearer "+localStorage.getItem("token_"+e)}function h(e){return!!localStorage.getItem("token_"+e)}function j(e,t){localStorage.setItem("token_"+e,t)}},41:function(e,t,n){"use strict";var r=n(53),a=n(0),o=n.n(a),s=(n(48),n(49),n(50),n(113)),i=n(13),c=n(14),u=n(16),l=n(15),d=n(112),h=n(108),j=n(111),f=n(17),b=(n(42),n(3)),p=function e(t,n){Object(i.a)(this,e),this.text="",this.link="",this.text=t,this.link=n},m=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).state={items:[]},r}return Object(c.a)(n,[{key:"render",value:function(){return Object(b.jsx)("div",{children:Object(b.jsx)(d.a,{bg:"light",variant:"light",fixed:"top",children:Object(b.jsxs)(h.a,{children:[Object(b.jsx)(d.a.Brand,{children:"QR"}),Object(b.jsx)(j.a,{className:"mr-auto",children:Object(b.jsx)(f.a,{children:this.props.items.map((function(e){return Object(b.jsx)(f.b,{to:e.link,children:e.text})}))})})]})})})}}]),n}(o.a.Component),O=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).state={role:""},r}return Object(c.a)(n,[{key:"render",value:function(){var e=[];switch(this.props.role){case"visitor":e=this.visitorMenuItems();break;case"allowed":e=this.userMenuItems()}return Object(b.jsx)(m,{items:e})}},{key:"visitorMenuItems",value:function(){return[new p("Home","/"),new p("Sign In","/signin")]}},{key:"userMenuItems",value:function(){return[new p("Quotes","/quotes")]}}]),n}(o.a.Component),v={position:"fixed",left:0,bottom:0,width:"100%",zIndex:9999,margin:0,textAlign:"center"};t.a=function(e){var t=Object(a.useState)(!1),n=Object(r.a)(t,2),o=n[0],i=n[1];Object(a.useEffect)((function(){var e=function(){window.isOffline=!1,i(!1)},t=function(){window.isOffline=!0,i(!0)};return window.addEventListener("online",e),window.addEventListener("offline",t),function(){window.removeEventListener("online",e),window.removeEventListener("offline",t)}})),Object(a.useEffect)((function(){window.isOffline&&i(!0)}),[]);var c,u,l=(c=e.isLoggedIn,u=e.showBackButton,Object(b.jsx)(O,{role:c?"allowed":"visitor",showBackButton:u}));return Object(b.jsxs)("div",{children:[l,o?Object(b.jsx)(s.a,{variant:"warning",style:v,children:"Offline mode"}):null,Object(b.jsx)("br",{}),e.children]})}},42:function(e,t,n){},75:function(e,t,n){"use strict";var r=n(2),a=n(7),o=n(36),s=n.n(o),i=n(0),c=n.n(i),u=n(37),l=["bsPrefix","className","as"],d=["xl","lg","md","sm","xs"],h=c.a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.className,i=e.as,h=void 0===i?"div":i,j=Object(a.a)(e,l),f=Object(u.a)(n,"col"),b=[],p=[];return d.forEach((function(e){var t,n,r,a=j[e];if(delete j[e],"object"===typeof a&&null!=a){var o=a.span;t=void 0===o||o,n=a.offset,r=a.order}else t=a;var s="xs"!==e?"-"+e:"";t&&b.push(!0===t?""+f+s:""+f+s+"-"+t),null!=r&&p.push("order"+s+"-"+r),null!=n&&p.push("offset"+s+"-"+n)})),b.length||b.push(f),c.a.createElement(h,Object(r.a)({},j,{ref:t,className:s.a.apply(void 0,[o].concat(b,p))}))}));h.displayName="Col",t.a=h}}]);
//# sourceMappingURL=7.cd33e47d.chunk.js.map