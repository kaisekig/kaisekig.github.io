(this.webpackJsonpcli=this.webpackJsonpcli||[]).push([[8],{105:function(e,t,s){},114:function(e,t,s){"use strict";s.r(t),s.d(t,"default",(function(){return w}));var n=s(57);function o(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,n)}return s}function c(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?o(Object(s),!0).forEach((function(t){Object(n.a)(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):o(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}for(var a=s(13),r=s(14),i=s(19),u=s(16),l=s(15),j=s(0),b=s.n(j),h=(s(105),s(116)),d=s(108),O=s(110),p=s(75),m=s(76),x=s(17),g=s(40),f=s(41),v=s(3),y=[],Q=0;Q<5;Q++)y.push(Object(v.jsxs)("div",{children:[Object(v.jsxs)(h.a,{children:[Object(v.jsxs)(h.a.Body,{children:[Object(v.jsx)(h.a.Title,{children:Object(v.jsx)("p",{})}),Object(v.jsx)(h.a.Text,{children:Object(v.jsx)("br",{})})]}),Object(v.jsx)(h.a.Footer,{children:Object(v.jsx)(h.a.Text,{children:Object(v.jsx)("br",{})})})]},Q),Object(v.jsx)("br",{}),Object(v.jsx)("br",{})]}));var w=function(e){Object(u.a)(s,e);var t=Object(l.a)(s);function s(e){var n;return Object(a.a)(this,s),(n=t.call(this,e)).getAllQuotes=function(){Object(g.a)("api/post","get",{}).then((function(e){if(console.log("response",e),"error"!==e.status)if("login"===e.status&&n.setLogginState(!1),Array.isArray(e.data)){var t=e.data;n.setQuotesState(t)}else n.setQuotesState([])})).catch((function(e){return console.log(e)}))},n.setQuotesState=function(e){n.setState(Object.assign(n.state,{quotes:e}))},n.state={newQuote:{author:"",body:""},isLoggedIn:!0,quotes:[],quotesComment:new Map},n.setNewQuote=n.setNewQuote.bind(Object(i.a)(n)),n.postQuote=n.postQuote.bind(Object(i.a)(n)),n}return Object(r.a)(s,[{key:"componentDidMount",value:function(){var e=this;this.getAllQuotes(),new BroadcastChannel("sync-channel").onmessage=function(t){t.data.finished&&e.getAllQuotes()}}},{key:"postQuote",value:function(e){var t=this;e.preventDefault(),Object(g.a)("api/post/create","post",c({},this.state.newQuote)).then((function(e){console.log(e),"ok"===e.status&&t.getAllQuotes()})).catch((function(e){return console.log(e)}))}},{key:"postQuoteComment",value:function(e,t){t.preventDefault(),this.state.quotesComment.has(e)&&Object(g.a)("api/post/".concat(e,"/comment"),"post",{text:this.state.quotesComment.get(e)}).then((function(t){Object(g.a)("api/post/"+e,"get",{}).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)})),console.log("returned comment from api",t)})).catch((function(e){return console.log(e)}))}},{key:"setLogginState",value:function(e){var t=Object.assign(this.state,{isLoggedIn:e});this.setState(t)}},{key:"setNewQuote",value:function(e){this.setState((function(t){return c(c({},t),{},{newQuote:c(c({},t.newQuote),{},Object(n.a)({},e.target.id,e.target.value))})}))}},{key:"setQuoteComment",value:function(e,t){this.setState((function(s){return c(c({},s),{},{quotesComment:s.quotesComment.set(e,t.target.value)})}))}},{key:"getIniitalComment",value:function(e){return this.state.quotesComment.has(e)?this.state.quotesComment.get(e):""}},{key:"render",value:function(){var e=this;if(!1===this.state.isLoggedIn)return Object(v.jsxs)(d.a,{children:[Object(v.jsx)("br",{}),Object(v.jsxs)(h.a.Text,{children:[Object(v.jsx)("h3",{children:"You are not signed in!"}),Object(v.jsxs)("p",{children:["Please, go back and ",Object(v.jsx)("span",{children:"\ud83d\udc49 "}),Object(v.jsx)(x.b,{to:"/signin",children:"sign in"})]})]})]});var t=y;return this.state.quotes.length&&(t=this.state.quotes.map((function(t,s){return Object(v.jsxs)("div",{children:[Object(v.jsxs)(h.a,{children:[Object(v.jsx)(h.a.Body,{children:Object(v.jsxs)("blockquote",{className:"blockquote mb-0",children:[Object(v.jsxs)("p",{children:[" ",t.body," "]}),Object(v.jsxs)("footer",{className:"blockquote-footer",children:["Someone famous in ",Object(v.jsx)("cite",{title:"Source Title",children:t.author})]})]})}),Object(v.jsx)(h.a.Footer,{children:Object(v.jsx)(h.a.Text,{children:Object(v.jsx)(O.a,{onSubmit:function(s){return e.postQuoteComment(t.postId,s)},children:Object(v.jsxs)(O.a.Row,{className:"align-items-center",children:[Object(v.jsxs)(p.a,{Col:!0,xs:7,children:[Object(v.jsx)(O.a.Label,{htmlFor:"inlineFormInput",srOnly:!0,children:"Comment"}),Object(v.jsx)(O.a.Control,{className:"mb-2",id:"inlineFormInput",placeholder:"Comment...",value:e.getIniitalComment(t.postId),onChange:function(s){return e.setQuoteComment(t.postId,s)}})]}),Object(v.jsxs)(p.a,{xs:"auto",children:[Object(v.jsx)(m.a,{type:"submit",variant:"dark",className:"mb-2",size:"sm",children:"Post"}),Object(v.jsx)(x.b,{to:"/"+t.postId,children:Object(v.jsx)("div",{className:"link-params",children:"Open"})})]})]})})})})]}),Object(v.jsx)("br",{}),Object(v.jsx)("br",{})]},t.postId)}))),Object(v.jsx)(f.a,{isLoggedIn:this.state.isLoggedIn,children:Object(v.jsxs)("div",{className:"quotes-input",children:[Object(v.jsx)(p.a,{md:{span:6,offset:3},children:Object(v.jsxs)(h.a.Body,{children:[Object(v.jsxs)(h.a.Title,{children:[Object(v.jsx)("p",{children:"Quotes goes here"}),Object(v.jsx)("span",{role:"img","aria-label":"pointing_down",children:" \ud83d\udc47 "})]}),Object(v.jsx)(h.a.Text,{children:Object(v.jsxs)(O.a,{onSubmit:this.postQuote,children:[Object(v.jsxs)(O.a.Group,{controlId:"author",children:[Object(v.jsx)(O.a.Label,{children:" Author: "}),Object(v.jsx)(O.a.Control,{type:"text",value:this.state.newQuote.author,onChange:this.setNewQuote})]}),Object(v.jsxs)(O.a.Group,{controlId:"body",children:[Object(v.jsx)(O.a.Label,{children:"Quote:"}),Object(v.jsx)(O.a.Control,{as:"textarea",rows:3,value:this.state.newQuote.body,onChange:this.setNewQuote})]}),Object(v.jsx)(O.a.Group,{children:Object(v.jsx)(m.a,{type:"submit",variant:"dark",size:"sm",children:"Post"})})]})})]})}),Object(v.jsx)(d.a,{children:t})]})})}}]),s}(b.a.Component)}}]);
//# sourceMappingURL=8.5c648086.chunk.js.map