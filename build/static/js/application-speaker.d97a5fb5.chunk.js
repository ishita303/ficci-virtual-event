(this["webpackJsonpgogo-react"]=this["webpackJsonpgogo-react"]||[]).push([[6],{103:function(e,a,t){"use strict";t.d(a,"a",(function(){return s})),t.d(a,"b",(function(){return c}));var n=t(3),r=t.n(n),i=t(121),s=function(e){return r.a.createElement(i.a,Object.assign({},e,{widths:["xxs","xs","sm","md","lg","xl","xxl"]}))},c=function(e){var a=e.className;return r.a.createElement("div",{className:"separator ".concat(a)})}},155:function(e,a,t){"use strict";var n=t(104),r=t(3),i=t.n(r),s=t(302);a.a=function(e){var a=e.children,t=Object(r.useRef)(),c=Object(r.useState)(!1),o=Object(n.a)(c,2),l=o[0],m=o[1],d=function(e){if(l){var a=t.current;if(a.contains(e.target)||a===e.target)return;m(!1)}};return Object(r.useEffect)((function(){return["click","touchstart"].forEach((function(e){return document.addEventListener(e,d,!1)})),function(){["click","touchstart"].forEach((function(e){return document.removeEventListener(e,d,!1)}))}}),[l]),i.a.createElement("div",{ref:t,className:"app-menu ".concat(l?"shown":"")},a,i.a.createElement(s.a,{className:"app-menu-button d-inline-block d-xl-none",onClick:function(){return m(!l)}},i.a.createElement("i",{className:"simple-icon-options"})))}},184:function(e,a,t){"use strict";var n=t(11),r=t(15),i=t(3),s=t.n(i),c=t(26),o=t.n(c),l=t(99),m=t.n(l),d=t(100),u={tag:d.q,className:o.a.string,cssModule:o.a.object},h=function(e){var a=e.className,t=e.cssModule,i=e.tag,c=Object(r.a)(e,["className","cssModule","tag"]),o=Object(d.m)(m()(a,"card-title"),t);return s.a.createElement(i,Object(n.a)({},c,{className:o}))};h.propTypes=u,h.defaultProps={tag:"div"},a.a=h},279:function(e,a,t){"use strict";t.r(a);var n=t(104),r=t(3),i=t.n(r),s=t(120),c=t(38),o=t(137),l=t.n(o),m=t(138),d=t(103),u=t(1),h=t(11),f=t(15),p=t(26),g=t.n(p),b=t(99),v=t.n(b),E=t(100),y={tag:E.q,className:g.a.string,cssModule:g.a.object},N=function(e){var a=e.className,t=e.cssModule,n=e.tag,r=Object(f.a)(e,["className","cssModule","tag"]),s=Object(E.m)(v()(a,"card-header"),t);return i.a.createElement(n,Object(h.a)({},r,{className:s}))};N.propTypes=y,N.defaultProps={tag:"div"};var x=N,C=t(288),w=t(289),S=t(17),j=i.a.createContext({}),I={tag:E.q,activeTab:g.a.any,className:g.a.string,cssModule:g.a.object},A=function(e){function a(a){var t;return(t=e.call(this,a)||this).state={activeTab:t.props.activeTab},t}return Object(S.a)(a,e),a.getDerivedStateFromProps=function(e,a){return a.activeTab!==e.activeTab?{activeTab:e.activeTab}:null},a.prototype.render=function(){var e=this.props,a=e.className,t=e.cssModule,n=e.tag,r=Object(E.n)(this.props,Object.keys(I)),s=Object(E.m)(v()("tab-content",a),t);return i.a.createElement(j.Provider,{value:{activeTabId:this.state.activeTab}},i.a.createElement(n,Object(h.a)({},r,{className:s})))},a}(r.Component),O=A;A.propTypes=I,A.defaultProps={tag:"div"};var M={tag:E.q,className:g.a.string,cssModule:g.a.object,tabId:g.a.any};function k(e){var a=e.className,t=e.cssModule,n=e.tabId,r=e.tag,s=Object(f.a)(e,["className","cssModule","tabId","tag"]),c=function(e){return Object(E.m)(v()("tab-pane",a,{active:n===e}),t)};return i.a.createElement(j.Consumer,null,(function(e){var a=e.activeTabId;return i.a.createElement(r,Object(h.a)({},s,{className:c(a)}))}))}k.propTypes=M,k.defaultProps={tag:"div"};var D=t(78),T=t(102),P=t(155),B=Object(s.c)(Object(c.b)((function(e){var a=e.chatApp;return{contacts:a.contacts,allContacts:a.allContacts,conversations:a.conversations,loadingConversations:a.loadingConversations,loadingContacts:a.loadingContacts,currentUser:a.currentUser}}),{changeConversationAction:u.Q,createConversationAction:u.V,searchContactAction:u.hb})((function(e){var a=e.intl,t=e.activeTab,s=e.toggleAppMenu,c=e.contacts,o=e.allContacts,m=e.conversations,d=e.loadingConversations,u=e.loadingContacts,h=e.currentUser,f=e.changeConversationAction,p=e.createConversationAction,g=e.searchContactAction,b=Object(r.useState)(""),E=Object(n.a)(b,2),y=E[0],N=E[1],S=function(e){N(e),e.length>0?("contacts"!==t&&s("contacts"),g(e)):g("")},j=a.messages;return i.a.createElement(P.a,null,i.a.createElement(x,{className:"pl-0 pr-0"},i.a.createElement(C.a,{tabs:!0,className:"card-header-tabs ml-0 mr-0"},i.a.createElement(w.a,{className:"w-50 text-center"},i.a.createElement(D.b,{to:"#",location:{},className:v()({active:"messages"===t,"nav-link":!0}),onClick:function(){return t!==(e="messages")&&s(e),void("messages"===e&&S(""));var e}},i.a.createElement(T.a,{id:"chat.messages"}))),i.a.createElement(w.a,{className:"w-50 text-center"},i.a.createElement(D.b,{to:"#",location:{},className:v()({active:"contacts"===t,"nav-link":!0}),onClick:function(){return s("contacts")}},i.a.createElement(T.a,{id:"chat.contacts"}))))),i.a.createElement("div",{className:"pt-4 pr-4 pl-4 pb-0"},i.a.createElement("div",{className:"form-group"},i.a.createElement("input",{type:"text",className:"form-control rounded",placeholder:j["menu.search"],value:y,onChange:function(e){return S(e.target.value)}}))),i.a.createElement(O,{activeTab:t,className:"chat-app-tab-content"},i.a.createElement(k,{tabId:"messages",className:"chat-app-tab-pane"},i.a.createElement(l.a,{options:{suppressScrollX:!0,wheelPropagation:!1}},i.a.createElement("div",{className:"pt-2 pr-4 pl-4 pb-2"},u&&d&&m.map((function(e,a){var t=o.find((function(a){return a.id===e.users.find((function(e){return e!==h.id}))}));return i.a.createElement("div",{key:a,className:"d-flex flex-row mb-1 border-bottom pb-3 mb-3"},i.a.createElement(D.b,{className:"d-flex",to:"#",location:{},onClick:function(e){return a=t.id,f(a),void S("");var a}},i.a.createElement("img",{alt:t.name,src:t.thumb,className:"img-thumbnail border-0 rounded-circle mr-3 list-thumbnail align-self-center xsmall"}),i.a.createElement("div",{className:"d-flex flex-grow-1 min-width-zero"},i.a.createElement("div",{className:"pl-0 align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero"},i.a.createElement("div",{className:"min-width-zero"},i.a.createElement("p",{className:" mb-0 truncate"},t.name),i.a.createElement("p",{className:"mb-1 text-muted text-small"},e.lastMessageTime))))))}))))),i.a.createElement(k,{tabId:"contacts",className:"chat-app-tab-pane"},i.a.createElement(l.a,{options:{suppressScrollX:!0,wheelPropagation:!1}},i.a.createElement("div",{className:"pt-2 pr-4 pl-4 pb-2"},u&&c.filter((function(e){return e.id!==h.id})).map((function(e,a){return i.a.createElement("div",{key:a,className:"d-flex flex-row mb-3 border-bottom pb-3"},i.a.createElement(D.b,{className:"d-flex",to:"#",location:{},onClick:function(){return a=e.id,"messages"!==t&&(s("messages"),g("")),m.find((function(e){return e.users.includes(h.id)&&e.users.includes(a)}))||p(h.id,a,m),void f(a);var a}},i.a.createElement("img",{alt:e.name,src:e.thumb,className:"img-thumbnail border-0 rounded-circle mr-3 list-thumbnail align-self-center xsmall"}),i.a.createElement("div",{className:"d-flex flex-grow-1 min-width-zero"},i.a.createElement("div",{className:"m-2 pl-0 align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero"},i.a.createElement("div",{className:"min-width-zero"},i.a.createElement("p",{className:"mb-0 truncate"},e.name))))))})))))))}))),H=i.a.memo((function(e){var a=e.name,t=e.thumb,n=e.lastSeenDate;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"d-flex flex-row chat-heading"},i.a.createElement("div",{className:"d-flex"},i.a.createElement("img",{alt:a,src:t,className:"img-thumbnail border-0 rounded-circle ml-0 mr-4 list-thumbnail align-self-center small"})),i.a.createElement("div",{className:" d-flex min-width-zero"},i.a.createElement("div",{className:"card-body pl-0 align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero"},i.a.createElement("div",{className:"min-width-zero"},i.a.createElement("div",null,i.a.createElement("p",{className:"list-item-heading mb-1 truncate "},a)),i.a.createElement("p",{className:"mb-0 text-muted text-small"},"0"===n?"-":n))))),i.a.createElement("div",{className:"separator mb-5"}))})),F=t(150),G=t(273),U=i.a.memo((function(e){var a=e.sender,t=e.item,n=e.currentUserid;return i.a.createElement(i.a.Fragment,null,i.a.createElement(F.a,{className:"d-inline-block mb-3 float-".concat(t.sender!==n?"left":"right")},i.a.createElement("div",{className:"position-absolute  pt-1 pr-2 r-0"},i.a.createElement("span",{className:"text-extra-small text-muted"},t.time)),i.a.createElement(G.a,null,i.a.createElement("div",{className:"d-flex flex-row pb-1"},i.a.createElement("img",{alt:a.name,src:a.thumb,className:"img-thumbnail border-0 rounded-circle mr-3 list-thumbnail align-self-center xsmall"}),i.a.createElement("div",{className:" d-flex flex-grow-1 min-width-zero"},i.a.createElement("div",{className:"m-2 pl-0 align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero"},i.a.createElement("div",{className:"min-width-zero"},i.a.createElement("p",{className:"mb-0 truncate list-item-heading"},a.name))))),i.a.createElement("div",{className:"chat-text-left"},i.a.createElement("p",{className:"mb-0 text-semi-muted"},t.text)))),i.a.createElement("div",{className:"clearfix"}))})),K=t(301),z=t(128),R=i.a.memo((function(e){var a=e.placeholder,t=e.messageInput,n=e.handleChatInputPress,r=e.handleChatInputChange,s=e.handleSendButtonClick;return i.a.createElement("div",{className:"chat-input-container d-flex justify-content-between align-items-center"},i.a.createElement(K.a,{className:"form-control flex-grow-1",type:"text",placeholder:a,value:t,onKeyPress:function(e){return n(e)},onChange:function(e){return r(e)}}),i.a.createElement("div",null,i.a.createElement(z.a,{outline:!0,color:"primary",className:"icon-button large ml-1"},i.a.createElement("i",{className:"simple-icon-paper-clip"})),i.a.createElement(z.a,{color:"primary",className:"icon-button large ml-1",onClick:function(){return s()}},i.a.createElement("i",{className:"simple-icon-arrow-right"}))))}));a.default=Object(s.c)(Object(c.b)((function(e){var a=e.chatApp;return{allContacts:a.allContacts,conversations:a.conversations,loadingConversations:a.loadingConversations,loadingContacts:a.loadingContacts,currentUser:a.currentUser,selectedUser:a.selectedUser,selectedUserId:a.selectedUserId}}),{getContactsAction:u.X,getConversationsAction:u.Y,changeConversationAction:u.Q,addMessageToConversationAction:u.O})((function(e){var a=e.intl,t=e.allContacts,s=e.conversations,c=e.loadingConversations,o=e.loadingContacts,u=e.currentUser,h=e.selectedUser,f=e.selectedUserId,p=e.getContactsAction,g=e.getConversationsAction,b=e.changeConversationAction,v=e.addMessageToConversationAction,E=Object(r.useState)("messages"),y=Object(n.a)(E,2),N=y[0],x=y[1],C=Object(r.useState)(""),w=Object(n.a)(C,2),S=w[0],j=w[1],I=Object(r.useRef)(null);Object(r.useEffect)((function(){document.body.classList.add("no-footer");return p(),g(0),function(){document.body.classList.remove("no-footer")}}),[p,g]);var A=function(){setTimeout((function(){I.current&&(I.current._ps.element.scrollTop=I.current._ps.contentHeight)}),100)};Object(r.useEffect)((function(){c&&o&&null==h&&(b(f),A())}),[b,o,c,h,f]),Object(r.useEffect)((function(){A()}),[f]);var O=a.messages,M=c&&o&&h?s.find((function(e){return e.users.includes(u.id)&&e.users.includes(h.id)})):null;return c&&o?i.a.createElement(i.a.Fragment,null,i.a.createElement(m.a,{className:"app-row"},i.a.createElement(d.a,{xxs:"12",className:"chat-app"},c&&h&&i.a.createElement(H,{name:h.name,thumb:h.thumb,lastSeenDate:h.lastSeenDate}),M&&i.a.createElement(l.a,{ref:I,options:{suppressScrollX:!0,wheelPropagation:!1}},M.messages.map((function(e,a){var n=t.find((function(a){return a.id===e.sender}));return i.a.createElement(U,{key:a,sender:n,item:e,currentUserid:u.id})}))))),i.a.createElement(R,{placeholder:O["chat.saysomething"],messageInput:S,handleChatInputPress:function(e){"Enter"===e.key&&S.length>0&&(v(u.id,h.id,S,s),j(""),x("messages"),A())},handleChatInputChange:function(e){j(e.target.value)},handleSendButtonClick:function(){S.length>0&&(v(u.id,h.id,S,s),j(""),x("messages"),A())}}),i.a.createElement(B,{activeTab:N,toggleAppMenu:x})):i.a.createElement("h1",null," Not Done ")})))},280:function(e,a,t){"use strict";t.r(a);var n=t(104),r=t(3),i=t.n(r),s=t(138),c=t(184),o=t(128),l=t(202),m=t(193),d=t(194),u=t(195),h=t(150),f=t(273),p=t(11),g=t(15),b=t(26),v=t.n(b),E=t(99),y=t.n(E),N=t(100),x={tag:N.q,top:v.a.bool,bottom:v.a.bool,className:v.a.string,cssModule:v.a.object},C=function(e){var a=e.className,t=e.cssModule,n=e.top,r=e.bottom,s=e.tag,c=Object(g.a)(e,["className","cssModule","top","bottom","tag"]),o="card-img";n&&(o="card-img-top"),r&&(o="card-img-bottom");var l=Object(N.m)(y()(a,o),t);return i.a.createElement(s,Object(p.a)({},c,{className:l}))};C.propTypes=x,C.defaultProps={tag:"img"};var w=C,S={tag:N.q,className:v.a.string,cssModule:v.a.object},j=function(e){var a=e.className,t=e.cssModule,n=e.tag,r=Object(g.a)(e,["className","cssModule","tag"]),s=Object(N.m)(y()(a,"card-subtitle"),t);return i.a.createElement(n,Object(p.a)({},r,{className:s}))};j.propTypes=S,j.defaultProps={tag:"div"};var I=j,A={tag:N.q,className:v.a.string,cssModule:v.a.object},O=function(e){var a=e.className,t=e.cssModule,n=e.tag,r=Object(g.a)(e,["className","cssModule","tag"]),s=Object(N.m)(y()(a,"card-text"),t);return i.a.createElement(n,Object(p.a)({},r,{className:s}))};O.propTypes=A,O.defaultProps={tag:"p"};var M=O,k=t(102),D=t(103);i.a.memo((function(e){var a=e.alt,t=e.src,n=e.className,r=e.rounded,s=e.small;return i.a.createElement("img",{alt:a,src:t,className:"img-thumbnail list-thumbnail align-self-center ".concat(n,"  ").concat(y()({"rounded-circle":r,small:s}))})})),i.a.memo((function(e){var a=e.text,t=e.color,n=e.className,r=e.rounded,s=e.small,c="";return a.indexOf(" ")>-1?a.split(" ").map((function(e){return e.length>1&&(c+=e.slice(0,1)),""})):c+=a.slice(0,2),c.length>2&&(c=c.slice(0,2)),i.a.createElement("div",{className:"align-self-center list-thumbnail-letters ".concat(t?"btn-".concat(t):"","  ").concat(n,"  ").concat(y()({"rounded-circle":r,small:s})),title:a},c)})),t(9),a.default=function(){var e=Object(r.useState)(!1),a=Object(n.a)(e,2),t=a[0],p=a[1],g=Object(r.useState)(!1),b=Object(n.a)(g,2),v=(b[0],b[1],Object(r.useState)(!1)),E=Object(n.a)(v,2),y=(E[0],E[1],Object(r.useState)(!0)),N=Object(n.a)(y,2),x=(N[0],N[1],Object(r.useState)(!1)),C=Object(n.a)(x,2),S=C[0],j=C[1],A=Object(r.useState)(!1),O=Object(n.a)(A,2),T=(O[0],O[1],Object(r.useState)(!1)),P=Object(n.a)(T,2),B=(P[0],P[1],Object(r.useState)(!1)),H=Object(n.a)(B,2),F=(H[0],H[1],Object(r.useState)(!1)),G=Object(n.a)(F,2),U=(G[0],G[1],Object(r.useState)(!1)),K=Object(n.a)(U,2);K[0],K[1];return i.a.createElement("div",{style:{padding:"20px"}},i.a.createElement(s.a,null,i.a.createElement(D.a,{xxs:"12"},i.a.createElement(c.a,{className:"mb-4"},i.a.createElement("div",{className:"mb-2"},i.a.createElement("h1",null,"Speakers"),i.a.createElement("div",{className:"text-zero top-right-button-container"},i.a.createElement(o.a,{color:"primary",size:"lg",className:"top-right-button",onClick:function(){return j(!0)}},i.a.createElement(k.a,{id:"ADD NEW"})),i.a.createElement(l.a,{isOpen:S,toggle:function(){return j(!S)},wrapClassName:"modal-right"},i.a.createElement(m.a,null,"Add New FAQ"),i.a.createElement(d.a,null),i.a.createElement(u.a,null,i.a.createElement(o.a,{color:"secondary",onClick:function(){return j(!1)},align:"right"},"Submit")))),i.a.createElement(D.b,{className:"mb-5"}))),i.a.createElement(s.a,null,i.a.createElement(D.a,{md:"6",sm:"6",lg:"4",xxs:"12"},i.a.createElement(h.a,{className:"mb-4"},i.a.createElement(f.a,null,i.a.createElement("div",{className:"text-center"},i.a.createElement(w,{top:!0,src:"https://ficci-capam.framez.sg/speakerspic/Shri%20Ajay%20Tyagi.png",alt:"Card image cap",className:"img-thumbnail border-0 rounded-circle mb-4 list-thumbnail"}),i.a.createElement(I,{className:"mb-1"},"Mr. Ajay Tyagi"),i.a.createElement(M,{className:"text-muted text-small mb-4"},"Chairman (Securities and Exchange Board of India)"),i.a.createElement("div",null,i.a.createElement(o.a,{color:"primary",outline:!0,onClick:function(){return p(!0)}},"Know More"),i.a.createElement(l.a,{isOpen:t,toggle:function(){return p(!t)}},i.a.createElement(m.a,null,"Mr. Ajay Tyagi"),i.a.createElement(d.a,null,"Shri Ajay Tyagi took charge as Chairman, Securities and Exchange Board of India, on 01 March 2017. Prior to this, Shri Tyagi was Additional Secretary, Department of Economic Affairs, Ministry of Finance, Government of India, handling the portfolios of Capital Market Division, Investment Division, Infrastructure Division and Currency and Coinage Division. Shri Tyagi, an Indian Administrative Service Officer of Himachal Pradesh Cadre, has held several responsible positions with distinction in the State and Central Governments. He did his graduation in Electrical Engineering and Post Graduation in Computer Science. He also did his Masters in Public Administration from Harvard University."),i.a.createElement(u.a,null,i.a.createElement(o.a,{color:"secondary",onClick:function(){return p(!1)}},"Cancel")))))))),i.a.createElement(D.a,{md:"6",sm:"6",lg:"4",xxs:"12"},i.a.createElement(h.a,{className:"mb-4"},i.a.createElement(f.a,null,i.a.createElement("div",{className:"text-center"},i.a.createElement(w,{top:!0,src:"https://ficci-capam.framez.sg/speakerspic/Ajay%20Bhushan%20Pandey.png",alt:"Card image cap",className:"img-thumbnail border-0 rounded-circle mb-4 list-thumbnail"}),i.a.createElement(I,{className:"mb-1"},"Mr. Ajay Bhushan Pandey"),i.a.createElement(M,{className:"text-muted text-small mb-4"},"Finance Secretary (Ministry of Finance)"),i.a.createElement("div",null,i.a.createElement(o.a,{color:"primary",outline:!0,onClick:function(){return p(!0)}},"Know More"),i.a.createElement(l.a,{isOpen:t,toggle:function(){return p(!t)}},i.a.createElement(m.a,null,"Mr. Ajay Bhushan Pandey"),i.a.createElement(d.a,null,"Finance Secretary, Dr. Ajay Bhushan Pandey has been at the helm of significant taxation reforms since he took over as the Revenue Secretary in Dec 2018. It is in his tenure that the corporate tax was reduced historically from 30% to 22% and for new manufacturers it was brought down to 15% without exemption, the lowest ever in any other country in the world. He fetched in the simplification of taxation processes and thereby enhanced transparency and accountability towards building a self-compliant society through use of technology and increased digitisation of the taxation system; and augmented revenue growth with data triangulation and data analytics without any overreach. It is under his term that India became one of the first countries in the world to switch to almost 100 % electronic filing. Dr. Pandey set his priorities among others to enhance tax compliance and increase tax base through integration of technology, improve Tax\u2013GDP ratio, further stabilize implementation of Good & Services Tax (GST) and system based compliance without human interface, bring in transparency and simplification of laws and procedures for better tax administration without overreach and create ease of business. He has been involved and played a pivot role in introducing faceless assessment, faceless appeal, Document Identification Number (DIN) system, pre-filled income tax returns, quick refunds on ITRs, reduction in corporate tax rate, improved SFTs and 26 AS, quick and online PAN, New tax regime sans exemptions with much lower tax rates, TDS/TCS on cash dealings to stop leakages and tax avoidance and specific measures to bring down litigation in tax matters. In GST, in his capacity as Revenue Secretary and Member Secretary of the GST Council and, also, as the Chairman of GSTN, he has been continuously endeavouring for system\u2019s upgradation, ease of doing business, revenue augmentation, electronic and faceless online facilitation of services to taxpayers such as filing of nil return just by an SMS. During this hard time of Covid-19, he has been resiliently involved in the government\u2019s efforts of taking up Atamnirbhar Bharat Abhiyan to meet the challenges of pandemic induced lockdown to cater the needy and poor on the one hand and to fulfil demands coming from business and trading community, on the other. He believes that recent decisions of the government will help in laying the foundation of a simple and self-compliant tax regime, which will benefit both the taxpayers and the tax department and will go further to create non-litigant tax compliant society. With keen interest in technology and law, Dr. Pandey\u2019s perseverance on putting technology to effect transformation and building faith on the institutions with transparent and responsive good governance practices has made him a quiet performer who delivers against all odds. He has proven this while steering the Government\u2019s prestigious flagship identity programme \u2013 Aadhaar as its CEO, and also in straightening out the GSTN by settling smooth implementation as its Chairman. He was also an expert member of Srikrishna Committee on Data Protection Framework and is the Chairman of the Inter-Ministerial Co-ordination Committee (IMCC) to prevent money-laundering activities. An IAS officer with over 35+ years of experience in State and Central Governments, he had a remarkable stint of more than 9 years in UIDAI where he played a key role in establishing and steering Aadhaar across the country and drafting the historic Aadhaar legislation for providing statutory basis to Aadhaar. It was under his headship as CEO of UIDAI up till Oct. 2019 that this nodal agency had issued digital identity Aadhaar to more than 124 crore Indian residents. He also successfully explained Aadhaar and its benefits and the underlying technology to the 5-judges Constitution bench in the Supreme Court through his two-day long power point presentation in the open court room which helped the Government in successfully defending the Aadhaar case against 37 petitions. He is the only non-lawyer person and bureaucrat to have been ever allowed to address the Supreme Court Constitution Bench for six hours spread over two days. He was also instrumental in scaling up Aadhaar in delivery of government subsidies and benefits which led to savings of more than Rs. 1,40,000 crore so far by eliminating ghosts and duplicates and ensuring that the benefits reach the real and deserving beneficiaries. It is under his steering that Aadhaar has earned worldwide acclaim. He is also a recipient of the prestigious ET Award for Policy Change Agent for 2019. An Electrical Engineering graduate from IIT Kanpur, he joined the University of Minnesota in 1998 to obtain his MS and PhD in Computer Science and was later awarded Distinguished Leadership Award for Internationals by the University of Minnesota for his outstanding leadership accomplishments in his professional career."),i.a.createElement(u.a,null,i.a.createElement(o.a,{color:"secondary",onClick:function(){return p(!1)}},"Cancel")))))))),i.a.createElement(D.a,{md:"6",sm:"6",lg:"4",xxs:"12"},i.a.createElement(h.a,{className:"mb-4"},i.a.createElement(f.a,null,i.a.createElement("div",{className:"text-center"},i.a.createElement(w,{top:!0,src:"https://ficci-capam.framez.sg/speakerspic/Tarun%20Bajaj.png",alt:"Card image cap",className:"img-thumbnail border-0 rounded-circle mb-4 list-thumbnail"}),i.a.createElement(I,{className:"mb-1"},"Mr. Tarun Bajaj"),i.a.createElement(M,{className:"text-muted text-small mb-4"},"Secretary, Department of Economic Affairs (Ministry of Finance)"),i.a.createElement("div",null,i.a.createElement(o.a,{color:"primary",outline:!0,onClick:function(){return p(!0)}},"Know More"),i.a.createElement(l.a,{isOpen:t,toggle:function(){return p(!t)}},i.a.createElement(m.a,null,"Mr. Tarun Bajaj"),i.a.createElement(d.a,null,"Shri Tarun Bajaj assumed the responsibility of the Secretary, Department of Economic Affairs, Ministry of Finance on 1st May, 2020. He belongs to the Indian Administrative Service, 1988 batch, Haryana Cadre. Shri Bajaj has a Bachelor Degree in Commerce from Delhi University, MBA from IIM Ahmedabad and Post Graduate (M.Sc) from London School of Economics and Political Science. Shri Bajaj before joining the Department of Economic Affairs worked as Joint Secretary and Additional Secretary to the Prime Minister from April 2015 to April, 2020. He has served as Joint Secretary, Department of Economic Affairs in 2014-15 and as Director and Joint Secretary in the Department of Financial Services from 2006 to 2011. Shri Bajaj has over 31 years of experience in Administration, Management and Public Policy. He has primarily worked in the areas of Finance and Industry. Shri Bajaj has also served on the Boards of SIDBI, Bank of Maharashtra, Bank of India, New India Assurance Company, United India Insurance Company. Shri Bajaj currently chairs the National Investment and Infrastructure Fund (NIIF). He is currently also the Director on the Central Board of the Reserve Bank of India and SEBI. Shri Bajaj serves as Governor of India for International Fund for Agriculture Development (IFAD), and as Alternate Governor of India for the World Bank, Asian Development Bank (ADB), Asian Infrastructure Investment Bank (AIIB) and New Development Bank (NDB)."),i.a.createElement(u.a,null,i.a.createElement(o.a,{color:"secondary",onClick:function(){return p(!1)}},"Cancel"))))))))),i.a.createElement(s.a,null,i.a.createElement(D.a,{md:"6",sm:"6",lg:"4",xxs:"12"},i.a.createElement(h.a,{className:"mb-4"},i.a.createElement(f.a,null,i.a.createElement("div",{className:"text-center"},i.a.createElement(w,{top:!0,src:"https://ficci-capam.framez.sg/speakerspic/Tuhin%20Kanta%20Pandey%20-%20PHOTO%20-%203x3.jpg",alt:"Card image cap",className:"img-thumbnail border-0 rounded-circle mb-4 list-thumbnail"}),i.a.createElement(I,{className:"mb-1"},"Mr. Tuhin Kanta Pandey"),i.a.createElement(M,{className:"text-muted text-small mb-4"},"Secretary DIPAM (Ministry of Finance)"),i.a.createElement("div",null,i.a.createElement(o.a,{color:"primary",outline:!0,onClick:function(){return p(!0)}},"Know More"),i.a.createElement(l.a,{isOpen:t,toggle:function(){return p(!t)}},i.a.createElement(m.a,null,"Mr. Tuhin Kanta Pandey"),i.a.createElement(d.a,null,"Shri TUHIN KANTA PANDEY, Secretary, Dept. of Investment and Public Asset Management (DIPAM) Ministry of Finance, Govt. of India Shri Tuhin Kanta Pandey, who is presently holding the charge of Secretary in the Dept. of Investment and Public Asset Management (DIPAM), M/o Finance, Govt. of India since 24th October, 2019, had joined the IAS in the year 1987 and was allotted Odisha cadre. Shri Pandey served as Joint Secretary in the then Planning Commission, Joint Secretary in the Cabinet Secretariat and Deputy Secretary in Ministry of Commerce at the Govt. of India. He held the key portfolio of Principal Secretary/ Addl. Chief Secretary, Finance Department, Govt. of Odisha during September 2016 till December 2018. He has also served as Health Secretary, Commissioner, Commercial Taxes, Transport Commissioner and Special Secretary, General Administration, Govt. of Odisha. In early part of his career, Shri Pandey served as Executive Director of Odisha State Finance Corporation and Managing Director of Odisha Small Industries Corporation and as Collector and District Magistrate of Sambalpur District. Shri Pandey has acquired wide experience in the areas of Economy & Finance, Industrial Development, Tax administration and has been instrumental in bringing about several institutional innovations, new policies and systems in the Departments he has served."),i.a.createElement(u.a,null,i.a.createElement(o.a,{color:"secondary",onClick:function(){return p(!1)}},"Cancel")))))))),i.a.createElement(D.a,{md:"6",sm:"6",lg:"4",xxs:"12"},i.a.createElement(h.a,{className:"mb-4"},i.a.createElement(f.a,null,i.a.createElement("div",{className:"text-center"},i.a.createElement(w,{top:!0,src:"https://ficci-capam.framez.sg/speakerspic/K%20Rajaraman.png",alt:"Card image cap",className:"img-thumbnail border-0 rounded-circle mb-4 list-thumbnail"}),i.a.createElement(I,{className:"mb-1"},"Mr. K. Rajaraman"),i.a.createElement(M,{className:"text-muted text-small mb-4"},"Additional Secretary, DEA (Ministry of Finance)"),i.a.createElement("div",null,i.a.createElement(o.a,{color:"primary",outline:!0,onClick:function(){return p(!0)}},"Know More"),i.a.createElement(l.a,{isOpen:t,toggle:function(){return p(!t)}},i.a.createElement(m.a,null,"Mr. K. Rajaraman"),i.a.createElement(d.a,null,"Shri K. Rajaraman, a senior Indian Administrative Service Officer of Tamil Nadu cadre, is a B. Tech in Electronics & Communications, a first class MBA and Master of Economics. Starting his career as a Design Engineer in BHEL, Trichy, during his rich and varied experience as an IAS Officer, he had held various administrative positions in the areas of Investment Promotion, Foreign Direct Investment, Public Sector Undertakings, Industrial Infrastructure, VAT Administration, etc. He was MD of Chennai Metro Railways for nearly 4 years during its early construction phase, Commissioner for Commercial Taxes in Government of Tamil Nadu and Joint Secretary Expenditure in Government of India in the recent past. He currently serves as Additional Secretary, Investment, IER and Admn. in the Department of Economic Affairs, Ministry of Finance. He has published articles in Business Line on \u2018Right to Information\u2019 and \u2018Energy conservation Policy\u2019. He is a certified trainer in Incident Command System for Disaster Management and has served as a Disaster Rescue Team leader in Nagapattinam (Tsunami relief) and Kanchipuram (Floods 2015, 2016). His special interest is in the field of Right to Information, Industrial Policy and Investment Promotion, Human Development, Consumer Protection, Disaster Management, Urban Mobility and Entrepreneurship."),i.a.createElement(u.a,null,i.a.createElement(o.a,{color:"secondary",onClick:function(){return p(!1)}},"Cancel")))))))),i.a.createElement(D.a,{md:"6",sm:"6",lg:"4",xxs:"12"},i.a.createElement(h.a,{className:"mb-4"},i.a.createElement(f.a,null,i.a.createElement("div",{className:"text-center"},i.a.createElement(w,{top:!0,src:"https://ficci-capam.framez.sg/speakerspic/Dr.%20Krishnamurthy%20V%20Subramanian.png",alt:"Card image cap",className:"img-thumbnail border-0 rounded-circle mb-4 list-thumbnail"}),i.a.createElement(I,{className:"mb-1"},"Dr. Krishnamurthy V Subramanian"),i.a.createElement(M,{className:"text-muted text-small mb-4"},"Chief Economic Advisor(Government of India)"),i.a.createElement("div",null,i.a.createElement(o.a,{color:"primary",outline:!0,onClick:function(){return p(!0)}},"Know More"),i.a.createElement(l.a,{isOpen:t,toggle:function(){return p(!t)}},i.a.createElement(m.a,null,"Dr. Krishnamurthy V Subramanian"),i.a.createElement(d.a,null,"Dr. Krishnamurthy V Subramanian, currently the Chief Economic Advisor to the Government of India, is a leading expert on economic policy, banking and corporate governance. A PhD from Chicago-Booth and a top-ranking IIT-IIM alumnus, he authored the path-breaking Economic Survey that commends \u201cEthical Wealth Creation\u201d for a prosperous India. By integrating India\u2019s rich economic and spiritual heritage with modern economic ideas, he advocates ethical wealth creation through a marriage of the invisible hand of the market with the hand of trust. Given India\u2019s tryst with socialistic ideas, where wealth and wealth creators were considered a necessary evil, the advocacy of ethical wealth creation has been hailed as a path-breaking departure in policy thinking. His idea of Thalinomics \u2013 what a common person pays for a vegetarian or non-vegetarian thali \u2013 has been acclaimed as the Indian Big Mac Index. The 2019 Economic Survey \u2013 again authored by Dr. Subramanian \u2013 laid out the Strategic Blueprint for India to become a $5 trillion economy by generating a virtuous cycle where private investment, wage and employment growth as well as consumption feed into each other. His push for the behavioural economics of Nudge has been acknowledged for its potential to bring behavioural change in India. The slew of reforms implemented in the Covid economic package draw on key reform ideas advocated by him in the Economic Surveys of 2019 and 2020."),i.a.createElement(u.a,null,i.a.createElement(o.a,{color:"secondary",onClick:function(){return p(!1)}},"Cancel"))))))))))))}}}]);
//# sourceMappingURL=application-speaker.d97a5fb5.chunk.js.map