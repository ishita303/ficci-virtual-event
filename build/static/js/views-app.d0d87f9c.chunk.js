(this["webpackJsonpgogo-react"]=this["webpackJsonpgogo-react"]||[]).push([[25],{102:function(e,t,n){"use strict";var a=n(3),s=n.n(a),l=n(126),c=n(120);t.a=Object(c.c)((function(e){return s.a.createElement(l.a,e)}),{withRef:!1})},304:function(e,t,n){"use strict";n.r(t);var a=n(3),s=n.n(a),l=n(37),c=n(38),i=n(104),r=n(120),o=n(311),u=n(312),m=n(286),d=n(287),b=n(78),p=n(102),f=n(1),h=n(9),E=(n(278),n(221),n(308),n(12)),g=Object(r.c)(Object(c.b)((function(e){var t=e.menu,n=e.settings;return{containerClassnames:t.containerClassnames,menuClickCount:t.menuClickCount,selectedMenuHasSubItems:t.selectedMenuHasSubItems,locale:n.locale}}),{setContainerClassnamesAction:f.jb,clickOnMobileMenuAction:f.U,logoutUserAction:f.eb,changeLocaleAction:f.S})((function(e){var t=e.intl,n=e.history,l=(e.containerClassnames,e.menuClickCount,e.selectedMenuHasSubItems,e.locale,e.setContainerClassnamesAction,e.clickOnMobileMenuAction,e.logoutUserAction),c=(e.changeLocaleAction,Object(a.useState)(!1)),r=Object(i.a)(c,2),p=r[0],f=r[1],g=Object(a.useState)(""),v=Object(i.a)(g,2),C=(v[0],v[1],Object(E.d)());t.messages;return s.a.createElement("nav",{className:"navbar fixed-top"},s.a.createElement("div",{className:"d-flex align-items-center navbar-left"}),s.a.createElement(b.b,{className:"navbar-logo",to:h.a},s.a.createElement("span",{className:"logo d-none d-xs-block"}),s.a.createElement("span",{className:"logo-mobile d-block d-xs-none"})),s.a.createElement("div",{className:"navbar-right"},s.a.createElement("div",{className:"header-icons d-inline-block align-middle"},s.a.createElement("button",{className:"header-icon btn btn-empty d-none d-sm-inline-block",type:"button",id:"fullScreenButton",onClick:function(){var e=document.fullscreenElement&&null!==document.fullscreenElement||document.webkitFullscreenElement&&null!==document.webkitFullscreenElement||document.mozFullScreenElement&&null!==document.mozFullScreenElement||document.msFullscreenElement&&null!==document.msFullscreenElement,t=document.documentElement;e?document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen():t.requestFullscreen?t.requestFullscreen():t.mozRequestFullScreen?t.mozRequestFullScreen():t.webkitRequestFullScreen?t.webkitRequestFullScreen():t.msRequestFullscreen&&t.msRequestFullscreen(),f(!e)}},p?s.a.createElement("i",{className:"simple-icon-size-actual d-block"}):s.a.createElement("i",{className:"simple-icon-size-fullscreen d-block"}))),s.a.createElement("div",{className:"user d-inline-block"},s.a.createElement(o.a,{className:"dropdown-menu-right"},s.a.createElement(u.a,{className:"p-0",color:"empty"},s.a.createElement("span",{className:"name mr-1"},C.title),s.a.createElement("span",null,s.a.createElement("img",{alt:"Profile",src:C.img}))),s.a.createElement(m.a,{className:"mt-3",right:!0},s.a.createElement(d.a,null,s.a.createElement(b.b,{to:"/app/dashboards/profile"},"My Profile")),s.a.createElement(d.a,{divider:!0}),s.a.createElement(d.a,{onClick:function(){l(n)}},"Sign out"))))))}))),v=n(106),C=n(107),S=n(141),k=n(109),M=n(108),w=n(30),N=n.n(w),y=n(288),L=n(289),P=n(99),F=n.n(P),O=n(137),H=n.n(O),j=[{id:"dashboards",icon:"iconsminds-shop-4",label:"Lobby",to:"".concat(h.a,"/dashboards/default")},{id:"applications",icon:"simple-icon-screen-desktop",label:"Sessions",to:"".concat(h.a,"/applications"),subs:[{icon:"simple-icon-check",label:"Agenda",to:"".concat(h.a,"/applications/todo")},{icon:"simple-icon-check",label:"Chat",to:"".concat(h.a,"/applications/chat")},{icon:"simple-icon-bubbles",label:"Speakers Profile",to:"".concat(h.a,"/applications/speaker")}]},{id:"menu",icon:"simple-icon-calculator",label:"Conference",to:"".concat(h.a,"/applications/conference")},{id:"docs",icon:"simple-icon-phone",label:"Lounge",to:"".concat(h.a,"/dashboards/analytics")},{id:"pages",icon:"iconsminds-library",label:"Resources",to:"".concat(h.a,"/pages/blog"),subs:[{icon:"simple-icon-check",label:"Document library",to:"".concat(h.a,"/pages/doc-lib")},{icon:"simple-icon-calculator",label:"Video library",to:"".concat(h.a,"/pages/video-lib")}]},{id:"ui",icon:"iconsminds-bucket",label:"Support",to:"".concat(h.a,"/ui"),subs:[{icon:"simple-icon-check",label:"Help Desk",to:"".concat(h.a,"/ui/help")},{icon:"simple-icon-calculator",label:"FAQs",to:"".concat(h.a,"/ui/faq")}]}],z=function(e){Object(k.a)(n,e);var t=Object(M.a)(n);function n(e){var a;return Object(v.a)(this,n),(a=t.call(this,e)).handleWindowResize=function(e){if(!e||e.isTrusted){var t=a.props.containerClassnames,n=a.getMenuClassesForResize(t);a.props.setContainerClassnames(0,n.join(" "),a.props.selectedMenuHasSubItems)}},a.handleDocumentClick=function(e){var t=a.getContainer(),n=!0;(e.target&&e.target.classList&&(e.target.classList.contains("menu-button")||e.target.classList.contains("menu-button-mobile"))||e.target.parentElement&&e.target.parentElement.classList&&(e.target.parentElement.classList.contains("menu-button")||e.target.parentElement.classList.contains("menu-button-mobile"))||e.target.parentElement&&e.target.parentElement.parentElement&&e.target.parentElement.parentElement.classList&&(e.target.parentElement.parentElement.classList.contains("menu-button")||e.target.parentElement.parentElement.classList.contains("menu-button-mobile")))&&(n=!0),t.contains(e.target)||t===e.target||n||(a.setState({viewingParentMenu:""}),a.toggle())},a.getMenuClassesForResize=function(e){var t=a.props,n=t.menuHiddenBreakpoint,s=t.subHiddenBreakpoint,l=e.split(" ").filter((function(e){return""!==e})),c=window.innerWidth;return c<n?l.push("menu-mobile"):c<s?(l=l.filter((function(e){return"menu-mobile"!==e}))).includes("menu-default")&&!l.includes("menu-sub-hidden")&&l.push("menu-sub-hidden"):(l=l.filter((function(e){return"menu-mobile"!==e}))).includes("menu-default")&&l.includes("menu-sub-hidden")&&(l=l.filter((function(e){return"menu-sub-hidden"!==e}))),l},a.getContainer=function(){return N.a.findDOMNode(Object(S.a)(a))},a.toggle=function(){a.props.changeSelectedMenuHasSubItems(!1);var e=a.props,t=e.containerClassnames,n=e.menuClickCount,s=t?t.split(" ").filter((function(e){return""!==e})):"",l=-1;!s.includes("menu-default")||n%4!==0&&n%4!==3?!s.includes("menu-default")||2!==n&&3!==n?(s.includes("menu-default")||s.includes("menu-default"))&&(l=0):l=0:l=1,l>=0&&a.props.setContainerClassnames(l,t,!1)},a.handleProps=function(){a.addEvents()},a.addEvents=function(){["click","touchstart","touchend"].forEach((function(e){return document.addEventListener(e,a.handleDocumentClick,!0)}))},a.removeEvents=function(){["click","touchstart","touchend"].forEach((function(e){return document.removeEventListener(e,a.handleDocumentClick,!0)}))},a.setSelectedLiActive=function(e){var t=document.querySelector(".sub-menu  li.active");null!=t&&t.classList.remove("active");var n=document.querySelector(".third-level-menu  li.active");null!=n&&n.classList.remove("active");var s=document.querySelector(".third-level-menu  a.active");null!=s&&s.parentElement.classList.add("active");var l=document.querySelector(".sub-menu  a.active");if(null!=l)l.parentElement.classList.add("active"),a.setState({selectedParentMenu:l.parentElement.parentElement.getAttribute("data-parent")},e);else{var c=document.querySelector(".main-menu  li a.active");null!=c?a.setState({selectedParentMenu:c.getAttribute("data-flag")},e):""===a.state.selectedParentMenu&&a.setState({selectedParentMenu:j[0].id},e)}},a.setHasSubItemStatus=function(){var e=a.getIsHasSubItem();a.props.changeSelectedMenuHasSubItems(e),a.toggle()},a.getIsHasSubItem=function(){var e=a.state.selectedParentMenu,t=j.find((function(t){return t.id===e}));return!!t&&!!(t&&t.subs&&t.subs.length>0)},a.openSubMenu=function(e,t){var n=t.id,s=t.subs&&t.subs.length>0;if(a.props.changeSelectedMenuHasSubItems(s),s){e.preventDefault();var l=a.props,c=l.containerClassnames,i=l.menuClickCount,r=c?c.split(" ").filter((function(e){return""!==e})):"";r.includes("menu-mobile")?a.props.addContainerClassname("sub-show-temporary",c):!r.includes("menu-default")||2!==i&&0!==i?!r.includes("menu-sub-hidden")||1!==i&&3!==i?!r.includes("menu-default")||r.includes("menu-sub-hidden")||1!==i&&3!==i||a.props.setContainerClassnames(0,c,s):a.props.setContainerClassnames(2,c,s):a.props.setContainerClassnames(3,c,s),a.setState({viewingParentMenu:n})}else a.setState({viewingParentMenu:n,selectedParentMenu:n}),a.toggle()},a.closeSubMenu=function(e,t){var n=t.id,s=t.subs&&t.subs.length>0;a.props.changeSelectedMenuHasSubItems(s),a.setState({viewingParentMenu:n,selectedParentMenu:n}),a.toggle()},a.toggleMenuCollapse=function(e,t){e.preventDefault();var n=a.state.collapsedMenus;return n.indexOf(t)>-1?a.setState({collapsedMenus:n.filter((function(e){return e!==t}))}):(n.push(t),a.setState({collapsedMenus:n})),!1},a.filteredList=function(e){var t=a.props.currentUser;return t?e.filter((function(e){return e.roles&&e.roles.includes(t.role)||!e.roles})):e},a.state={selectedParentMenu:"",viewingParentMenu:"",collapsedMenus:[]},a}return Object(C.a)(n,[{key:"componentDidUpdate",value:function(e){this.props.location.pathname!==e.location.pathname&&(this.setSelectedLiActive(this.setHasSubItemStatus),window.scrollTo(0,0)),this.handleProps()}},{key:"componentDidMount",value:function(){window.addEventListener("resize",this.handleWindowResize),this.handleWindowResize(),this.handleProps(),this.setSelectedLiActive(this.setHasSubItemStatus)}},{key:"componentWillUnmount",value:function(){this.removeEvents(),window.removeEventListener("resize",this.handleWindowResize)}},{key:"render",value:function(){var e=this,t=this.state,n=t.selectedParentMenu,a=t.viewingParentMenu;t.collapsedMenus;return s.a.createElement("div",{className:"sidebar"},s.a.createElement("div",{className:"main-menu"},s.a.createElement("div",{className:"scroll"},s.a.createElement(H.a,{options:{suppressScrollX:!0,wheelPropagation:!1},isOpen:this.state.menuOpen},s.a.createElement(y.a,{vertical:!0,className:"list-unstyled"},j&&this.filteredList(j).map((function(t){return s.a.createElement(L.a,{key:t.id,className:F()({active:n===t.id&&""===a||a===t.id})},t.newWindow?s.a.createElement("a",{href:t.to,rel:"noopener noreferrer",target:"_blank"},s.a.createElement("i",{className:t.icon})," ",s.a.createElement(p.a,{id:t.label})):s.a.createElement(b.b,{to:t.to,onClick:function(n){return e.openSubMenu(n,t)},"data-flag":t.id},s.a.createElement("i",{className:t.icon})," ",s.a.createElement(p.a,{id:t.label})))})))))),s.a.createElement("div",{className:"sub-menu"},s.a.createElement("div",{className:"scroll"},s.a.createElement(H.a,{options:{suppressScrollX:!0,wheelPropagation:!1}},j&&this.filteredList(j).map((function(t){return s.a.createElement(y.a,{key:t.id,className:F()({"d-block":e.state.selectedParentMenu===t.id&&""===e.state.viewingParentMenu||e.state.viewingParentMenu===t.id}),"data-parent":t.id},t.subs&&e.filteredList(t.subs).map((function(n,a){return s.a.createElement(L.a,{key:"".concat(t.id,"_").concat(a),className:"".concat(n.subs&&n.subs.length>0?"has-sub-item":""),onClick:function(t){return e.closeSubMenu(t,n)}},n.newWindow?s.a.createElement("a",{href:n.to,rel:"noopener noreferrer",target:"_blank"},s.a.createElement("i",{className:n.icon})," ",s.a.createElement(p.a,{id:n.label})):n.subs&&n.subs.length>0?{}:s.a.createElement(b.b,{to:n.to},s.a.createElement("i",{className:n.icon})," ",s.a.createElement(p.a,{id:n.label})))})))}))))))}}]),n}(a.Component),I=Object(l.g)(Object(c.b)((function(e){var t=e.menu,n=e.authUser;return{containerClassnames:t.containerClassnames,subHiddenBreakpoint:t.subHiddenBreakpoint,menuHiddenBreakpoint:t.menuHiddenBreakpoint,menuClickCount:t.menuClickCount,selectedMenuHasSubItems:t.selectedMenuHasSubItems,currentUser:n.currentUser}}),{setContainerClassnames:f.jb,addContainerClassname:f.N,changeDefaultClassnames:f.R,changeSelectedMenuHasSubItems:f.T})(z)),A=Object(l.g)(Object(c.b)((function(e){return{containerClassnames:e.menu.containerClassnames}}),{})((function(e){var t=e.containerClassnames,n=e.children,a=e.history;return s.a.createElement("div",{id:"app-container",className:t},s.a.createElement(g,{history:a}),s.a.createElement(I,null),s.a.createElement("main",null,s.a.createElement("div",{className:"container-fluid"},n)))}))),R=s.a.lazy((function(){return n.e(13).then(n.bind(null,292))})),q=s.a.lazy((function(){return n.e(17).then(n.bind(null,293))})),x=s.a.lazy((function(){return n.e(8).then(n.bind(null,294))})),D=s.a.lazy((function(){return n.e(19).then(n.bind(null,295))}));t.default=Object(l.g)(Object(c.b)((function(e){return{containerClassnames:e.menu.containerClassnames}}),{})((function(e){var t=e.match;return s.a.createElement(A,null,s.a.createElement("div",{className:"dashboard-wrapper"},s.a.createElement(a.Suspense,{fallback:s.a.createElement("div",{className:"loading"})},s.a.createElement(l.d,null,s.a.createElement(l.a,{exact:!0,from:"".concat(t.url,"/"),to:"".concat(t.url,"/dashboards")}),s.a.createElement(l.b,{path:"".concat(t.url,"/dashboards"),render:function(e){return s.a.createElement(R,e)}}),s.a.createElement(l.b,{path:"".concat(t.url,"/applications"),render:function(e){return s.a.createElement(x,e)}}),s.a.createElement(l.b,{path:"".concat(t.url,"/pages"),render:function(e){return s.a.createElement(q,e)}}),s.a.createElement(l.b,{path:"".concat(t.url,"/ui"),render:function(e){return s.a.createElement(D,e)}}),s.a.createElement(l.a,{to:"/error"})))))})))}}]);
//# sourceMappingURL=views-app.d0d87f9c.chunk.js.map