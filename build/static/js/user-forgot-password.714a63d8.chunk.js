/*! For license information please see user-forgot-password.714a63d8.chunk.js.LICENSE.txt */
(this["webpackJsonpgogo-react"]=this["webpackJsonpgogo-react"]||[]).push([[20],{100:function(e,t,n){"use strict";n.d(t,"p",(function(){return i})),n.d(t,"i",(function(){return c})),n.d(t,"g",(function(){return s})),n.d(t,"m",(function(){return u})),n.d(t,"n",(function(){return l})),n.d(t,"o",(function(){return f})),n.d(t,"s",(function(){return m})),n.d(t,"a",(function(){return y})),n.d(t,"r",(function(){return b})),n.d(t,"q",(function(){return h})),n.d(t,"e",(function(){return v})),n.d(t,"c",(function(){return g})),n.d(t,"d",(function(){return E})),n.d(t,"l",(function(){return x})),n.d(t,"b",(function(){return O})),n.d(t,"f",(function(){return j})),n.d(t,"k",(function(){return C})),n.d(t,"j",(function(){return A})),n.d(t,"h",(function(){return T}));var r,a=n(26),o=n.n(a);function i(e){document.body.style.paddingRight=e>0?e+"px":null}function c(){var e=window.getComputedStyle(document.body,null);return parseInt(e&&e.getPropertyValue("padding-right")||0,10)}function s(){var e=function(){var e=document.createElement("div");e.style.position="absolute",e.style.top="-9999px",e.style.width="50px",e.style.height="50px",e.style.overflow="scroll",document.body.appendChild(e);var t=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),t}(),t=document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")[0],n=t?parseInt(t.style.paddingRight||0,10):0;document.body.clientWidth<window.innerWidth&&i(n+e)}function u(e,t){return void 0===e&&(e=""),void 0===t&&(t=r),t?e.split(" ").map((function(e){return t[e]||e})).join(" "):e}function l(e,t){var n={};return Object.keys(e).forEach((function(r){-1===t.indexOf(r)&&(n[r]=e[r])})),n}function f(e,t){for(var n,r=Array.isArray(t)?t:[t],a=r.length,o={};a>0;)o[n=r[a-=1]]=e[n];return o}var d={};function m(e){d[e]||("undefined"!==typeof console&&console.error(e),d[e]=!0)}var p="object"===typeof window&&window.Element||function(){};function y(e,t,n){if(!(e[t]instanceof p))return new Error("Invalid prop `"+t+"` supplied to `"+n+"`. Expected prop to be an instance of Element. Validation failed.")}var b=o.a.oneOfType([o.a.string,o.a.func,y,o.a.shape({current:o.a.any})]),h=o.a.oneOfType([o.a.func,o.a.string,o.a.shape({$$typeof:o.a.symbol,render:o.a.func}),o.a.arrayOf(o.a.oneOfType([o.a.func,o.a.string,o.a.shape({$$typeof:o.a.symbol,render:o.a.func})]))]),v={Fade:150,Collapse:350,Modal:300,Carousel:600},g=["in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],E={ENTERING:"entering",ENTERED:"entered",EXITING:"exiting",EXITED:"exited"},x={esc:27,space:32,enter:13,tab:9,up:38,down:40,home:36,end:35,n:78,p:80},O=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],j=!("undefined"===typeof window||!window.document||!window.document.createElement);function w(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}function C(e){var t=typeof e;return null!=e&&("object"===t||"function"===t)}function N(e){if(function(e){return!(!e||"object"!==typeof e)&&"current"in e}(e))return e.current;if(function(e){if(!C(e))return!1;var t=w(e);return"[object Function]"===t||"[object AsyncFunction]"===t||"[object GeneratorFunction]"===t||"[object Proxy]"===t}(e))return e();if("string"===typeof e&&j){var t=document.querySelectorAll(e);if(t.length||(t=document.querySelectorAll("#"+e)),!t.length)throw new Error("The target '"+e+"' could not be identified in the dom, tip: check spelling");return t}return e}function k(e){return null!==e&&(Array.isArray(e)||j&&"number"===typeof e.length)}function A(e,t){var n=N(e);return t?k(n)?n:null===n?[]:[n]:k(n)?n[0]:n}var T=["a[href]","area[href]","input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","object","embed","[tabindex]:not(.modal)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])']},102:function(e,t,n){"use strict";var r=n(3),a=n.n(r),o=n(126),i=n(120);t.a=Object(i.c)((function(e){return a.a.createElement(o.a,e)}),{withRef:!1})},103:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return c}));var r=n(3),a=n.n(r),o=n(121),i=function(e){return a.a.createElement(o.a,Object.assign({},e,{widths:["xxs","xs","sm","md","lg","xl","xxl"]}))},c=function(e){var t=e.className;return a.a.createElement("div",{className:"separator ".concat(t)})}},104:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(113);function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(s){a=!0,o=s}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return n}}(e,t)||Object(r.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},105:function(e,t,n){"use strict";function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",(function(){return r}))},113:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(114);function a(e,t){if(e){if("string"===typeof e)return Object(r.a)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(r.a)(e,t):void 0}}},114:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.d(t,"a",(function(){return r}))},117:function(e,t,n){"use strict";n.d(t,"a",(function(){return C}));var r=n(106),a=n(107),o=n(109),i=n(108),c=n(3),s=n.n(c),u=n(314),l=n(306),f=n(99),d=n.n(f),m=function(e){var t=e.title,n=e.type,r=e.message,a=e.customClassName,o=e.timeOut,i=e.onClick,u=e.onRequestHide,l=function(){u&&u()};Object(c.useEffect)((function(){var e=null;return 0!==o&&(e=setTimeout(l,o)),function(){e&&clearTimeout(e)}}),[]);var f=function(){i&&i(),l()},m=d()(["notification","notification-".concat(n),a]),p=t?s.a.createElement("h4",{className:"title"},t):null;return s.a.createElement("div",{className:m,onClick:function(){return f()}},s.a.createElement("div",{className:"notification-message",role:"alert"},p,s.a.createElement("div",{className:"message"},r)))};m.defaultProps={type:"info",title:null,message:null,timeOut:5e3,onClick:function(){},onRequestHide:function(){},customClassName:""};var p=m,y=function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).handleRequestHide=function(t){return function(){var n=e.props.onRequestHide;n&&n(t)}},e}return Object(a.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.notifications,r=t.enterTimeout,a=t.leaveTimeout,o=d()("notification-container",{"notification-container-empty":0===n.length});return s.a.createElement("div",{className:o},s.a.createElement(u.a,null,n.map((function(t){var n=t.id||(new Date).getTime();return s.a.createElement(l.a,{classNames:"notification",key:n,timeout:{exit:a,enter:r}},s.a.createElement(p,{key:n,type:t.type,title:t.title,message:t.message,timeOut:t.timeOut,onClick:t.onClick,onRequestHide:e.handleRequestHide(t),customClassName:t.customClassName}))}))))}}]),n}(s.a.Component);y.defaultProps={notifications:[],onRequestHide:function(){},enterTimeout:400,leaveTimeout:400};var b=y,h=n(129),v="change",g="primary",E="secondary",x="info",O="success",j="warning",w="error",C=new(function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(){var e;return Object(r.a)(this,n),(e=t.call(this)).listNotify=[],e}return Object(a.a)(n,[{key:"create",value:function(e){var t={id:"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)})),type:"info",title:null,message:null,timeOut:5e3,customClassName:""};e.priority?this.listNotify.unshift(Object.assign(t,e)):this.listNotify.push(Object.assign(t,e)),this.emitChange()}},{key:"primary",value:function(e,t,n,r,a,o){this.create({type:g,message:e,title:t,timeOut:n,onClick:r,priority:a,customClassName:o})}},{key:"secondary",value:function(e,t,n,r,a,o){this.create({type:E,message:e,title:t,timeOut:n,onClick:r,priority:a,customClassName:o})}},{key:"info",value:function(e,t,n,r,a,o){this.create({type:x,message:e,title:t,timeOut:n,onClick:r,priority:a,customClassName:o})}},{key:"success",value:function(e,t,n,r,a,o){this.create({type:O,message:e,title:t,timeOut:n,onClick:r,priority:a,customClassName:o})}},{key:"warning",value:function(e,t,n,r,a,o){this.create({type:j,message:e,title:t,timeOut:n,onClick:r,priority:a,customClassName:o})}},{key:"error",value:function(e,t,n,r,a,o){this.create({type:w,message:e,title:t,timeOut:n,onClick:r,priority:a,customClassName:o})}},{key:"remove",value:function(e){this.listNotify=this.listNotify.filter((function(t){return e.id!==t.id})),this.emitChange()}},{key:"emitChange",value:function(){this.emit(v,this.listNotify)}},{key:"addChangeListener",value:function(e){this.addListener(v,e)}},{key:"removeChangeListener",value:function(e){this.removeListener(v,e)}}]),n}(h.EventEmitter)),N=function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).componentWillUnmount=function(){C.removeChangeListener(a.handleStoreChange)},a.handleStoreChange=function(e){a.setState({notifications:e})},a.handleRequestHide=function(e){C.remove(e)},C.addChangeListener(a.handleStoreChange),a.state={notifications:[]},a}return Object(a.a)(n,[{key:"render",value:function(){var e=this.state.notifications,t=this.props,n=t.enterTimeout,r=t.leaveTimeout;return s.a.createElement(b,{enterTimeout:n,leaveTimeout:r,notifications:e,onRequestHide:this.handleRequestHide})}}]),n}(s.a.Component);N.defaultProps={enterTimeout:400,leaveTimeout:400}},126:function(e,t,n){"use strict";var r=n(3),a=n(120),o=n(112),i=n(119),c=n.n(i),s=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),u=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},l=function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),a=0;for(t=0;t<n;t++)for(var o=arguments[t],i=0,c=o.length;i<c;i++,a++)r[a]=o[i];return r},f=c.a||i,d=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return s(t,e),t.prototype.shouldComponentUpdate=function(e){var t=this.props,n=t.values,r=u(t,["values"]),a=e.values,o=u(e,["values"]);return!f(a,n)||!f(r,o)},t.prototype.render=function(){var e=this;return r.createElement(a.a.Consumer,null,(function(t){Object(o.g)(t);var n=t.formatMessage,a=t.textComponent,i=void 0===a?r.Fragment:a,c=e.props,s=c.id,u=c.description,f=c.defaultMessage,d=c.values,m=c.children,p=c.tagName,y=void 0===p?i:p,b=n({id:s,description:u,defaultMessage:f},d);return Array.isArray(b)||(b=[b]),"function"===typeof m?m(b):y?r.createElement.apply(r,l([y,null],b)):b}))},t.displayName="FormattedMessage",t}(r.Component);t.a=d},128:function(e,t,n){"use strict";var r=n(11),a=n(15),o=n(105),i=n(17),c=n(3),s=n.n(c),u=n(26),l=n.n(u),f=n(99),d=n.n(f),m=n(100),p={active:l.a.bool,"aria-label":l.a.string,block:l.a.bool,color:l.a.string,disabled:l.a.bool,outline:l.a.bool,tag:m.q,innerRef:l.a.oneOfType([l.a.object,l.a.func,l.a.string]),onClick:l.a.func,size:l.a.string,children:l.a.node,className:l.a.string,cssModule:l.a.object,close:l.a.bool},y=function(e){function t(t){var n;return(n=e.call(this,t)||this).onClick=n.onClick.bind(Object(o.a)(n)),n}Object(i.a)(t,e);var n=t.prototype;return n.onClick=function(e){this.props.disabled?e.preventDefault():this.props.onClick&&this.props.onClick(e)},n.render=function(){var e=this.props,t=e.active,n=e["aria-label"],o=e.block,i=e.className,c=e.close,u=e.cssModule,l=e.color,f=e.outline,p=e.size,y=e.tag,b=e.innerRef,h=Object(a.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);c&&"undefined"===typeof h.children&&(h.children=s.a.createElement("span",{"aria-hidden":!0},"\xd7"));var v="btn"+(f?"-outline":"")+"-"+l,g=Object(m.m)(d()(i,{close:c},c||"btn",c||v,!!p&&"btn-"+p,!!o&&"btn-block",{active:t,disabled:this.props.disabled}),u);h.href&&"button"===y&&(y="a");var E=c?"Close":null;return s.a.createElement(y,Object(r.a)({type:"button"===y&&h.onClick?"button":void 0},h,{className:g,ref:b,onClick:this.onClick,"aria-label":n||E}))},t}(s.a.Component);y.propTypes=p,y.defaultProps={color:"secondary",tag:"button"},t.a=y},298:function(e,t,n){"use strict";n.r(t);var r=n(104),a=n(3),o=n.n(a),i=n(138),c=n(150),s=n(184),u=n(296),l=n(252),f=n(128),d=n(78),m=n(124),p=n(38),y=n(103),b=n(102),h=n(1),v=n(117),g=function(e){var t;return e?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)||(t="Invalid email address"):t="Please enter your email address",t};t.default=Object(p.b)((function(e){var t=e.authUser;return{forgotUserMail:t.forgotUserMail,loading:t.loading,error:t.error}}),{forgotPasswordAction:h.W})((function(e){var t=e.history,n=e.forgotUserMail,p=e.loading,h=e.error,E=e.forgotPasswordAction,x=Object(a.useState)("demo@coloredstrategies.com"),O=Object(r.a)(x,1)[0];Object(a.useEffect)((function(){h?v.a.warning(h,"Forgot Password Error",3e3,null,null,""):p||"success"!==n||v.a.success("Please check your email.","Forgot Password Success",3e3,null,null,"")}),[h,n,p]);var j={email:O};return o.a.createElement(i.a,{className:"h-100"},o.a.createElement(y.a,{xxs:"12",md:"10",className:"mx-auto my-auto"},o.a.createElement(c.a,{className:"auth-card"},o.a.createElement("div",{className:"position-relative image-side "},o.a.createElement("p",{className:"text-white h2"},"FICCI CAPAM-2020"),o.a.createElement("p",{className:"white mb-0"},"Please use your e-mail to reset your password. ",o.a.createElement("br",null),"If you are not a member, please"," ",o.a.createElement(d.b,{to:"/user/register",className:"white"},"REGISTER"),".")),o.a.createElement("div",{className:"form-side"},o.a.createElement(d.b,{to:"/",className:"white"},o.a.createElement("span",{className:"logo-single"})),o.a.createElement(s.a,{className:"mb-4"},o.a.createElement(b.a,{id:"user.forgot-password"})),o.a.createElement(m.c,{initialValues:j,onSubmit:function(e){p||""!==e.email&&E(e,t)}},(function(e){var t=e.errors,n=e.touched;return o.a.createElement(m.b,{className:"av-tooltip tooltip-label-bottom"},o.a.createElement(u.a,{className:"form-group has-float-label"},o.a.createElement(l.a,null,o.a.createElement(b.a,{id:"user.email"})),o.a.createElement(m.a,{className:"form-control",name:"email",validate:g}),t.email&&n.email&&o.a.createElement("div",{className:"invalid-feedback d-block"},t.email)),o.a.createElement("div",{className:"d-flex justify-content-between align-items-center"},o.a.createElement(d.b,{to:"/user/forgot-password"},o.a.createElement(b.a,{id:"user.forgot-password-question"})),o.a.createElement(f.a,{color:"primary",className:"btn-shadow btn-multiple-state ".concat(p?"show-spinner":""),size:"lg"},o.a.createElement("span",{className:"spinner d-inline-block"},o.a.createElement("span",{className:"bounce1"}),o.a.createElement("span",{className:"bounce2"}),o.a.createElement("span",{className:"bounce3"})),o.a.createElement("span",{className:"label"},o.a.createElement(b.a,{id:"user.reset-password-button"})))))}))))))}))},99:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var i=a.apply(null,r);i&&e.push(i)}else if("object"===o)for(var c in r)n.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()}}]);
//# sourceMappingURL=user-forgot-password.714a63d8.chunk.js.map