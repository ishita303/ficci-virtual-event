(this["webpackJsonpgogo-react"]=this["webpackJsonpgogo-react"]||[]).push([[9],{103:function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return r}));var n=a(3),o=a.n(n),s=a(121),i=function(e){return o.a.createElement(s.a,Object.assign({},e,{widths:["xxs","xs","sm","md","lg","xl","xxl"]}))},r=function(e){var t=e.className;return o.a.createElement("div",{className:"separator ".concat(t)})}},110:function(e,t,a){"use strict";var n=a(3),o=a.n(n),s=a(122),i=a(102),r=(a(9),function(e){var t=e.match.path.substr(1).split("/");return t[t.length-1].indexOf(":")>-1&&(t=t.filter((function(e){return-1===e.indexOf(":")}))),o.a.createElement(o.a.Fragment,null,o.a.createElement(s.a,{className:"pt-0 breadcrumb-container d-none d-sm-block d-lg-inline-block"}))});t.a=function(e){var t=e.heading,a=e.match;return o.a.createElement(o.a.Fragment,null,t&&o.a.createElement("h1",null,o.a.createElement(i.a,{id:t})),o.a.createElement(r,{match:a}))}},121:function(e,t,a){"use strict";var n=a(11),o=a(15),s=a(3),i=a.n(s),r=a(26),l=a.n(r),c=a(99),d=a.n(c),p=a(100),u=l.a.oneOfType([l.a.number,l.a.string]),m=l.a.oneOfType([l.a.bool,l.a.number,l.a.string,l.a.shape({size:l.a.oneOfType([l.a.bool,l.a.number,l.a.string]),order:u,offset:u})]),h={tag:p.q,xs:m,sm:m,md:m,lg:m,xl:m,className:l.a.string,cssModule:l.a.object,widths:l.a.array},b={tag:"div",widths:["xs","sm","md","lg","xl"]},f=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},g=function(e){var t=e.className,a=e.cssModule,s=e.widths,r=e.tag,l=Object(o.a)(e,["className","cssModule","widths","tag"]),c=[];s.forEach((function(t,n){var o=e[t];if(delete l[t],o||""===o){var s=!n;if(Object(p.k)(o)){var i,r=s?"-":"-"+t+"-",u=f(s,t,o.size);c.push(Object(p.m)(d()(((i={})[u]=o.size||""===o.size,i["order"+r+o.order]=o.order||0===o.order,i["offset"+r+o.offset]=o.offset||0===o.offset,i)),a))}else{var m=f(s,t,o);c.push(m)}}})),c.length||c.push("col");var u=Object(p.m)(d()(t,c),a);return i.a.createElement(r,Object(n.a)({},l,{className:u}))};g.propTypes=h,g.defaultProps=b,t.a=g},122:function(e,t,a){"use strict";var n=a(11),o=a(15),s=a(3),i=a.n(s),r=a(26),l=a.n(r),c=a(99),d=a.n(c),p=a(100),u={tag:p.q,listTag:p.q,className:l.a.string,listClassName:l.a.string,cssModule:l.a.object,children:l.a.node,"aria-label":l.a.string},m=function(e){var t=e.className,a=e.listClassName,s=e.cssModule,r=e.children,l=e.tag,c=e.listTag,u=e["aria-label"],m=Object(o.a)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),h=Object(p.m)(d()(t),s),b=Object(p.m)(d()("breadcrumb",a),s);return i.a.createElement(l,Object(n.a)({},m,{className:h,"aria-label":u}),i.a.createElement(c,{className:b},r))};m.propTypes=u,m.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"},t.a=m},138:function(e,t,a){"use strict";var n=a(11),o=a(15),s=a(3),i=a.n(s),r=a(26),l=a.n(r),c=a(99),d=a.n(c),p=a(100),u=l.a.oneOfType([l.a.number,l.a.string]),m={tag:p.q,noGutters:l.a.bool,className:l.a.string,cssModule:l.a.object,form:l.a.bool,xs:u,sm:u,md:u,lg:u,xl:u},h={tag:"div",widths:["xs","sm","md","lg","xl"]},b=function(e){var t=e.className,a=e.cssModule,s=e.noGutters,r=e.tag,l=e.form,c=e.widths,u=Object(o.a)(e,["className","cssModule","noGutters","tag","form","widths"]),m=[];c.forEach((function(t,a){var n=e[t];if(delete u[t],n){var o=!a;m.push(o?"row-cols-"+n:"row-cols-"+t+"-"+n)}}));var h=Object(p.m)(d()(t,s?"no-gutters":null,l?"form-row":"row",m),a);return i.a.createElement(r,Object(n.a)({},u,{className:h}))};b.propTypes=m,b.defaultProps=h,t.a=b},193:function(e,t,a){"use strict";var n=a(11),o=a(15),s=a(3),i=a.n(s),r=a(26),l=a.n(r),c=a(99),d=a.n(c),p=a(100),u={tag:p.q,wrapTag:p.q,toggle:l.a.func,className:l.a.string,cssModule:l.a.object,children:l.a.node,closeAriaLabel:l.a.string,charCode:l.a.oneOfType([l.a.string,l.a.number]),close:l.a.object},m=function(e){var t,a=e.className,s=e.cssModule,r=e.children,l=e.toggle,c=e.tag,u=e.wrapTag,m=e.closeAriaLabel,h=e.charCode,b=e.close,f=Object(o.a)(e,["className","cssModule","children","toggle","tag","wrapTag","closeAriaLabel","charCode","close"]),g=Object(p.m)(d()(a,"modal-header"),s);if(!b&&l){var O="number"===typeof h?String.fromCharCode(h):h;t=i.a.createElement("button",{type:"button",onClick:l,className:Object(p.m)("close",s),"aria-label":m},i.a.createElement("span",{"aria-hidden":"true"},O))}return i.a.createElement(u,Object(n.a)({},f,{className:g}),i.a.createElement(c,{className:Object(p.m)("modal-title",s)},r),b||t)};m.propTypes=u,m.defaultProps={tag:"h5",wrapTag:"div",closeAriaLabel:"Close",charCode:215},t.a=m},194:function(e,t,a){"use strict";var n=a(11),o=a(15),s=a(3),i=a.n(s),r=a(26),l=a.n(r),c=a(99),d=a.n(c),p=a(100),u={tag:p.q,className:l.a.string,cssModule:l.a.object},m=function(e){var t=e.className,a=e.cssModule,s=e.tag,r=Object(o.a)(e,["className","cssModule","tag"]),l=Object(p.m)(d()(t,"modal-body"),a);return i.a.createElement(s,Object(n.a)({},r,{className:l}))};m.propTypes=u,m.defaultProps={tag:"div"},t.a=m},195:function(e,t,a){"use strict";var n=a(11),o=a(15),s=a(3),i=a.n(s),r=a(26),l=a.n(r),c=a(99),d=a.n(c),p=a(100),u={tag:p.q,className:l.a.string,cssModule:l.a.object},m=function(e){var t=e.className,a=e.cssModule,s=e.tag,r=Object(o.a)(e,["className","cssModule","tag"]),l=Object(p.m)(d()(t,"modal-footer"),a);return i.a.createElement(s,Object(n.a)({},r,{className:l}))};m.propTypes=u,m.defaultProps={tag:"div"},t.a=m},202:function(e,t,a){"use strict";var n=a(118),o=a(11),s=a(105),i=a(17),r=a(3),l=a.n(r),c=a(26),d=a.n(c),p=a(99),u=a.n(p),m=a(30),h=a.n(m),b=a(100),f={children:d.a.node.isRequired,node:d.a.any},g=function(e){function t(){return e.apply(this,arguments)||this}Object(i.a)(t,e);var a=t.prototype;return a.componentWillUnmount=function(){this.defaultNode&&document.body.removeChild(this.defaultNode),this.defaultNode=null},a.render=function(){return b.f?(this.props.node||this.defaultNode||(this.defaultNode=document.createElement("div"),document.body.appendChild(this.defaultNode)),h.a.createPortal(this.props.children,this.props.node||this.defaultNode)):null},t}(l.a.Component);g.propTypes=f;var O=g,E=a(134);function j(){}var y=d.a.shape(E.a.propTypes),v={isOpen:d.a.bool,autoFocus:d.a.bool,centered:d.a.bool,scrollable:d.a.bool,size:d.a.string,toggle:d.a.func,keyboard:d.a.bool,role:d.a.string,labelledBy:d.a.string,backdrop:d.a.oneOfType([d.a.bool,d.a.oneOf(["static"])]),onEnter:d.a.func,onExit:d.a.func,onOpened:d.a.func,onClosed:d.a.func,children:d.a.node,className:d.a.string,wrapClassName:d.a.string,modalClassName:d.a.string,backdropClassName:d.a.string,contentClassName:d.a.string,external:d.a.node,fade:d.a.bool,cssModule:d.a.object,zIndex:d.a.oneOfType([d.a.number,d.a.string]),backdropTransition:y,modalTransition:y,innerRef:d.a.oneOfType([d.a.object,d.a.string,d.a.func]),unmountOnClose:d.a.bool,returnFocusAfterClose:d.a.bool,container:b.r},C=Object.keys(v),k={isOpen:!1,autoFocus:!0,centered:!1,scrollable:!1,role:"dialog",backdrop:!0,keyboard:!0,zIndex:1050,fade:!0,onOpened:j,onClosed:j,modalTransition:{timeout:b.e.Modal},backdropTransition:{mountOnEnter:!0,timeout:b.e.Fade},unmountOnClose:!0,returnFocusAfterClose:!0,container:"body"},x=function(e){function t(t){var a;return(a=e.call(this,t)||this)._element=null,a._originalBodyPadding=null,a.getFocusableChildren=a.getFocusableChildren.bind(Object(s.a)(a)),a.handleBackdropClick=a.handleBackdropClick.bind(Object(s.a)(a)),a.handleBackdropMouseDown=a.handleBackdropMouseDown.bind(Object(s.a)(a)),a.handleEscape=a.handleEscape.bind(Object(s.a)(a)),a.handleStaticBackdropAnimation=a.handleStaticBackdropAnimation.bind(Object(s.a)(a)),a.handleTab=a.handleTab.bind(Object(s.a)(a)),a.onOpened=a.onOpened.bind(Object(s.a)(a)),a.onClosed=a.onClosed.bind(Object(s.a)(a)),a.manageFocusAfterClose=a.manageFocusAfterClose.bind(Object(s.a)(a)),a.clearBackdropAnimationTimeout=a.clearBackdropAnimationTimeout.bind(Object(s.a)(a)),a.state={isOpen:!1,showStaticBackdropAnimation:!1},a}Object(i.a)(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this.props,t=e.isOpen,a=e.autoFocus,n=e.onEnter;t&&(this.init(),this.setState({isOpen:!0}),a&&this.setFocus()),n&&n(),this._isMounted=!0},a.componentDidUpdate=function(e,t){if(this.props.isOpen&&!e.isOpen)return this.init(),void this.setState({isOpen:!0});this.props.autoFocus&&this.state.isOpen&&!t.isOpen&&this.setFocus(),this._element&&e.zIndex!==this.props.zIndex&&(this._element.style.zIndex=this.props.zIndex)},a.componentWillUnmount=function(){this.clearBackdropAnimationTimeout(),this.props.onExit&&this.props.onExit(),this._element&&(this.destroy(),(this.props.isOpen||this.state.isOpen)&&this.close()),this._isMounted=!1},a.onOpened=function(e,t){this.props.onOpened(),(this.props.modalTransition.onEntered||j)(e,t)},a.onClosed=function(e){var t=this.props.unmountOnClose;this.props.onClosed(),(this.props.modalTransition.onExited||j)(e),t&&this.destroy(),this.close(),this._isMounted&&this.setState({isOpen:!1})},a.setFocus=function(){this._dialog&&this._dialog.parentNode&&"function"===typeof this._dialog.parentNode.focus&&this._dialog.parentNode.focus()},a.getFocusableChildren=function(){return this._element.querySelectorAll(b.h.join(", "))},a.getFocusedChild=function(){var e,t=this.getFocusableChildren();try{e=document.activeElement}catch(a){e=t[0]}return e},a.handleBackdropClick=function(e){if(e.target===this._mouseDownElement){e.stopPropagation();var t=this._dialog?this._dialog.parentNode:null;if(t&&e.target===t&&"static"===this.props.backdrop&&this.handleStaticBackdropAnimation(),!this.props.isOpen||!0!==this.props.backdrop)return;t&&e.target===t&&this.props.toggle&&this.props.toggle(e)}},a.handleTab=function(e){if(9===e.which){var t=this.getFocusableChildren(),a=t.length;if(0!==a){for(var n=this.getFocusedChild(),o=0,s=0;s<a;s+=1)if(t[s]===n){o=s;break}e.shiftKey&&0===o?(e.preventDefault(),t[a-1].focus()):e.shiftKey||o!==a-1||(e.preventDefault(),t[0].focus())}}},a.handleBackdropMouseDown=function(e){this._mouseDownElement=e.target},a.handleEscape=function(e){this.props.isOpen&&e.keyCode===b.l.esc&&this.props.toggle&&(this.props.keyboard?(e.preventDefault(),e.stopPropagation(),this.props.toggle(e)):"static"===this.props.backdrop&&(e.preventDefault(),e.stopPropagation(),this.handleStaticBackdropAnimation()))},a.handleStaticBackdropAnimation=function(){var e=this;this.clearBackdropAnimationTimeout(),this.setState({showStaticBackdropAnimation:!0}),this._backdropAnimationTimeout=setTimeout((function(){e.setState({showStaticBackdropAnimation:!1})}),100)},a.init=function(){try{this._triggeringElement=document.activeElement}catch(e){this._triggeringElement=null}this._element||(this._element=document.createElement("div"),this._element.setAttribute("tabindex","-1"),this._element.style.position="relative",this._element.style.zIndex=this.props.zIndex,this._mountContainer=Object(b.j)(this.props.container),this._mountContainer.appendChild(this._element)),this._originalBodyPadding=Object(b.i)(),Object(b.g)(),0===t.openCount&&(document.body.className=u()(document.body.className,Object(b.m)("modal-open",this.props.cssModule))),t.openCount+=1},a.destroy=function(){this._element&&(this._mountContainer.removeChild(this._element),this._element=null),this.manageFocusAfterClose()},a.manageFocusAfterClose=function(){if(this._triggeringElement){var e=this.props.returnFocusAfterClose;this._triggeringElement.focus&&e&&this._triggeringElement.focus(),this._triggeringElement=null}},a.close=function(){if(t.openCount<=1){var e=Object(b.m)("modal-open",this.props.cssModule),a=new RegExp("(^| )"+e+"( |$)");document.body.className=document.body.className.replace(a," ").trim()}this.manageFocusAfterClose(),t.openCount=Math.max(0,t.openCount-1),Object(b.p)(this._originalBodyPadding)},a.renderModalDialog=function(){var e,t=this,a=Object(b.n)(this.props,C);return l.a.createElement("div",Object(o.a)({},a,{className:Object(b.m)(u()("modal-dialog",this.props.className,(e={},e["modal-"+this.props.size]=this.props.size,e["modal-dialog-centered"]=this.props.centered,e["modal-dialog-scrollable"]=this.props.scrollable,e)),this.props.cssModule),role:"document",ref:function(e){t._dialog=e}}),l.a.createElement("div",{className:Object(b.m)(u()("modal-content",this.props.contentClassName),this.props.cssModule)},this.props.children))},a.render=function(){var e=this.props.unmountOnClose;if(this._element&&(this.state.isOpen||!e)){var t=!!this._element&&!this.state.isOpen&&!e;this._element.style.display=t?"none":"block";var a=this.props,s=a.wrapClassName,i=a.modalClassName,r=a.backdropClassName,c=a.cssModule,d=a.isOpen,p=a.backdrop,m=a.role,h=a.labelledBy,f=a.external,g=a.innerRef,j={onClick:this.handleBackdropClick,onMouseDown:this.handleBackdropMouseDown,onKeyUp:this.handleEscape,onKeyDown:this.handleTab,style:{display:"block"},"aria-labelledby":h,role:m,tabIndex:"-1"},y=this.props.fade,v=Object(n.a)({},E.a.defaultProps,{},this.props.modalTransition,{baseClass:y?this.props.modalTransition.baseClass:"",timeout:y?this.props.modalTransition.timeout:0}),C=Object(n.a)({},E.a.defaultProps,{},this.props.backdropTransition,{baseClass:y?this.props.backdropTransition.baseClass:"",timeout:y?this.props.backdropTransition.timeout:0}),k=p&&(y?l.a.createElement(E.a,Object(o.a)({},C,{in:d&&!!p,cssModule:c,className:Object(b.m)(u()("modal-backdrop",r),c)})):l.a.createElement("div",{className:Object(b.m)(u()("modal-backdrop","show",r),c)}));return l.a.createElement(O,{node:this._element},l.a.createElement("div",{className:Object(b.m)(s)},l.a.createElement(E.a,Object(o.a)({},j,v,{in:d,onEntered:this.onOpened,onExited:this.onClosed,cssModule:c,className:Object(b.m)(u()("modal",i,this.state.showStaticBackdropAnimation&&"modal-static"),c),innerRef:g}),f,this.renderModalDialog()),k))}return null},a.clearBackdropAnimationTimeout=function(){this._backdropAnimationTimeout&&(clearTimeout(this._backdropAnimationTimeout),this._backdropAnimationTimeout=void 0)},t}(l.a.Component);x.propTypes=v,x.defaultProps=k,x.openCount=0;t.a=x},274:function(e,t,a){"use strict";a.r(t);var n=a(104),o=a(3),s=a.n(o),i=a(138),r=a(202),l=a(193),c=a(194),d=a(195),p=a(128),u=(a(102),a(103)),m=a(110);t.default=function(e){var t=e.match,a=Object(o.useState)(!1),h=Object(n.a)(a,2),b=(h[0],h[1],Object(o.useState)(!0)),f=Object(n.a)(b,2),g=(f[0],f[1],Object(o.useState)(!1)),O=Object(n.a)(g,2),E=(O[0],O[1],Object(o.useState)(!0)),j=Object(n.a)(E,2),y=(j[0],j[1],Object(o.useState)(!0)),v=Object(n.a)(y,2),C=v[0],k=v[1],x=Object(o.useState)(!1),N=Object(n.a)(x,2),S=(N[0],N[1],Object(o.useState)(!1)),T=Object(n.a)(S,2),_=(T[0],T[1],Object(o.useState)(!1)),M=Object(n.a)(_,2),w=(M[0],M[1],Object(o.useState)(!1)),A=Object(n.a)(w,2),F=(A[0],A[1],Object(o.useState)(!1)),B=Object(n.a)(F,2),z=(B[0],B[1],Object(o.useState)("https://ficci-capam.framez.sg/docs/Sponsors.pdf")),I=Object(n.a)(z,2),D=I[0],P=I[1],R={position:"relative",padding:"10px 10px 10px 0px",backgroundcolor:"#fff",fontSize:"14.6px",float:"left"};return s.a.createElement("div",null,s.a.createElement(i.a,null,s.a.createElement(u.a,{xxs:"12"},s.a.createElement(m.a,{heading:"Document Library",match:t}),s.a.createElement(u.b,{className:"mb-5"}))),s.a.createElement("div",null,s.a.createElement(r.a,{isOpen:C,toggle:function(){return k(!C)},style:{maxWidth:"800px"}},s.a.createElement(l.a,null,"DOCUMENT LIBRARY"),s.a.createElement(c.a,null,s.a.createElement("div",{style:{position:"inline-block"}},s.a.createElement("div",{style:{height:"400px",width:"70%",float:"left",position:"relative"}},s.a.createElement("iframe",{src:D,height:"400px",width:"100%"},s.a.createElement("embed",{width:"100%",height:"100%",src:D,type:"application/pdf"}))),s.a.createElement("div",{style:{width:"27%",float:"right",position:"relative",borderRadius:"20px",border:"2px solid rgba(34,41,47,.125"}},s.a.createElement("ul",{style:{listStyle:"none"}},s.a.createElement("li",{style:{position:"relative",padding:"15px 10px 10px 0px",backgroundcolor:"#fff",textcolor:"purple",fontSize:"14.6px",fontAlign:"center"},onClick:function(){return P("https://ficci-capam.framez.sg/docs/Sponsors.pdf")}},"SPONSORS"),s.a.createElement("li",{style:R,onClick:function(){return P("https://ficci-capam.framez.sg/docs/FICCI%20EOS%20-%20July%202020.pdf")}},"FICCI EOS - JULY 2020 "),s.a.createElement("li",{style:R,onClick:function(){return P("https://ficci-capam.framez.sg/docs/Sponsors.pdf")}},"MANUFACTURING SURVEY REPORT "),s.a.createElement("li",{style:R,onClick:function(){return P("https://ficci-capam.framez.sg/docs/FICCI%20EOS%20-%20July%202020.pdf")}},"FICCI DHRUVA SURVEY "),s.a.createElement("li",{style:R,onClick:function(){return P("https://ficci-capam.framez.sg/docs/Sponsors.pdf")}},"WOB_FINAL REPORT_3103_V12 "),s.a.createElement("li",{style:R,onClick:function(){return P("https://ficci-capam.framez.sg/docs/FICCI%20EOS%20-%20July%202020.pdf")}},"CAPAM COMPENDIUM 2020 "),s.a.createElement("li",{style:R,onClick:function(){return P("https://ficci-capam.framez.sg/docs/Sponsors.pdf")}},"L&T PROFILE "))))),s.a.createElement(d.a,null,s.a.createElement(p.a,{color:"secondary",onClick:function(){return k(!1)}},"Cancel")))))}},275:function(e,t,a){"use strict";a.r(t);var n=a(104),o=a(3),s=a.n(o),i=a(138),r=a(202),l=a(193),c=a(194),d=a(195),p=a(128),u=(a(102),a(103)),m=a(110);t.default=function(e){var t=e.match,a=Object(o.useState)(!1),h=Object(n.a)(a,2),b=(h[0],h[1],Object(o.useState)(!1)),f=Object(n.a)(b,2),g=(f[0],f[1],Object(o.useState)(!1)),O=Object(n.a)(g,2),E=(O[0],O[1],Object(o.useState)(!0)),j=Object(n.a)(E,2),y=(j[0],j[1],Object(o.useState)(!1)),v=Object(n.a)(y,2),C=(v[0],v[1],Object(o.useState)(!1)),k=Object(n.a)(C,2),x=(k[0],k[1],Object(o.useState)(!1)),N=Object(n.a)(x,2),S=(N[0],N[1],Object(o.useState)(!1)),T=Object(n.a)(S,2),_=(T[0],T[1],Object(o.useState)(!1)),M=Object(n.a)(_,2),w=(M[0],M[1],Object(o.useState)(!0)),A=Object(n.a)(w,2),F=A[0],B=A[1],z=Object(o.useState)("https://player.vimeo.com/video/451526648?autoplay=1&app_id=122963"),I=Object(n.a)(z,2),D=I[0],P=I[1],R={display:"block",transform:"skew(".concat(0,"deg, ",0,"deg)"),position:"absolute",top:"0.40%",left:"0%"};return s.a.createElement("div",{style:{padding:"20px"}},s.a.createElement(i.a,null,s.a.createElement(u.a,{xxs:"12"},s.a.createElement(m.a,{heading:"Video Library",match:t}),s.a.createElement(u.b,{className:"mb-5"}))),s.a.createElement("div",null,s.a.createElement(r.a,{isOpen:F,toggle:function(){return B(!F)},style:{maxWidth:"800px"}},s.a.createElement(l.a,null,"VIDEO LIBRARY"),s.a.createElement(c.a,null,s.a.createElement("div",{style:{position:"inline-block"}},s.a.createElement("div",{style:{height:"400px",width:"70%",float:"left",position:"relative"}},s.a.createElement("div",{style:R},s.a.createElement("iframe",{src:D,height:"300px",width:"525px"}))),s.a.createElement("div",{style:{width:"27%",float:"right",position:"relative",borderRadius:"20px",border:"2px solid rgba(34,41,47,.125"}},s.a.createElement("ul",{style:{listStyle:"none"}},s.a.createElement("li",{style:{position:"relative",padding:"15px 10px 10px 0px",backgroundcolor:"#fff",textcolor:"purple",fontSize:"14.6px",fontAlign:"center"},onClick:function(){return P("https://player.vimeo.com/video/451526648?autoplay=1&app_id=122963")}},"WELCOME VIDEO"),s.a.createElement("li",{style:{position:"relative",padding:"10px 10px 10px 0px",backgroundcolor:"#fff",fontSize:"14.6px",float:"left"},onClick:function(){return P("https://player.vimeo.com/video/451526648?autoplay=1&app_id=122963")}}," L&T "))))),s.a.createElement(d.a,null,s.a.createElement(p.a,{color:"secondary",onClick:function(){return B(!1)}},"Cancel")))))}}}]);
//# sourceMappingURL=blog-list.534581e0.chunk.js.map