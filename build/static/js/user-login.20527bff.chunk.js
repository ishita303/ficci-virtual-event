/*! For license information please see user-login.20527bff.chunk.js.LICENSE.txt */
(this["webpackJsonpgogo-react"]=this["webpackJsonpgogo-react"]||[]).push([[21],{100:function(e,t,n){"use strict";n.d(t,"p",(function(){return i})),n.d(t,"i",(function(){return c})),n.d(t,"g",(function(){return s})),n.d(t,"m",(function(){return l})),n.d(t,"n",(function(){return u})),n.d(t,"o",(function(){return f})),n.d(t,"s",(function(){return m})),n.d(t,"a",(function(){return b})),n.d(t,"r",(function(){return y})),n.d(t,"q",(function(){return h})),n.d(t,"e",(function(){return v})),n.d(t,"c",(function(){return g})),n.d(t,"d",(function(){return E})),n.d(t,"l",(function(){return x})),n.d(t,"b",(function(){return O})),n.d(t,"f",(function(){return N})),n.d(t,"k",(function(){return w})),n.d(t,"j",(function(){return A})),n.d(t,"h",(function(){return T}));var a,r=n(26),o=n.n(r);function i(e){document.body.style.paddingRight=e>0?e+"px":null}function c(){var e=window.getComputedStyle(document.body,null);return parseInt(e&&e.getPropertyValue("padding-right")||0,10)}function s(){var e=function(){var e=document.createElement("div");e.style.position="absolute",e.style.top="-9999px",e.style.width="50px",e.style.height="50px",e.style.overflow="scroll",document.body.appendChild(e);var t=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),t}(),t=document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")[0],n=t?parseInt(t.style.paddingRight||0,10):0;document.body.clientWidth<window.innerWidth&&i(n+e)}function l(e,t){return void 0===e&&(e=""),void 0===t&&(t=a),t?e.split(" ").map((function(e){return t[e]||e})).join(" "):e}function u(e,t){var n={};return Object.keys(e).forEach((function(a){-1===t.indexOf(a)&&(n[a]=e[a])})),n}function f(e,t){for(var n,a=Array.isArray(t)?t:[t],r=a.length,o={};r>0;)o[n=a[r-=1]]=e[n];return o}var d={};function m(e){d[e]||("undefined"!==typeof console&&console.error(e),d[e]=!0)}var p="object"===typeof window&&window.Element||function(){};function b(e,t,n){if(!(e[t]instanceof p))return new Error("Invalid prop `"+t+"` supplied to `"+n+"`. Expected prop to be an instance of Element. Validation failed.")}var y=o.a.oneOfType([o.a.string,o.a.func,b,o.a.shape({current:o.a.any})]),h=o.a.oneOfType([o.a.func,o.a.string,o.a.shape({$$typeof:o.a.symbol,render:o.a.func}),o.a.arrayOf(o.a.oneOfType([o.a.func,o.a.string,o.a.shape({$$typeof:o.a.symbol,render:o.a.func})]))]),v={Fade:150,Collapse:350,Modal:300,Carousel:600},g=["in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],E={ENTERING:"entering",ENTERED:"entered",EXITING:"exiting",EXITED:"exited"},x={esc:27,space:32,enter:13,tab:9,up:38,down:40,home:36,end:35,n:78,p:80},O=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],N=!("undefined"===typeof window||!window.document||!window.document.createElement);function j(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}function w(e){var t=typeof e;return null!=e&&("object"===t||"function"===t)}function C(e){if(function(e){return!(!e||"object"!==typeof e)&&"current"in e}(e))return e.current;if(function(e){if(!w(e))return!1;var t=j(e);return"[object Function]"===t||"[object AsyncFunction]"===t||"[object GeneratorFunction]"===t||"[object Proxy]"===t}(e))return e();if("string"===typeof e&&N){var t=document.querySelectorAll(e);if(t.length||(t=document.querySelectorAll("#"+e)),!t.length)throw new Error("The target '"+e+"' could not be identified in the dom, tip: check spelling");return t}return e}function k(e){return null!==e&&(Array.isArray(e)||N&&"number"===typeof e.length)}function A(e,t){var n=C(e);return t?k(n)?n:null===n?[]:[n]:k(n)?n[0]:n}var T=["a[href]","area[href]","input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","object","embed","[tabindex]:not(.modal)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])']},102:function(e,t,n){"use strict";var a=n(3),r=n.n(a),o=n(126),i=n(120);t.a=Object(i.c)((function(e){return r.a.createElement(o.a,e)}),{withRef:!1})},103:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return c}));var a=n(3),r=n.n(a),o=n(121),i=function(e){return r.a.createElement(o.a,Object.assign({},e,{widths:["xxs","xs","sm","md","lg","xl","xxl"]}))},c=function(e){var t=e.className;return r.a.createElement("div",{className:"separator ".concat(t)})}},104:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(113);function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],a=!0,r=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(a=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(s){r=!0,o=s}finally{try{a||null==c.return||c.return()}finally{if(r)throw o}}return n}}(e,t)||Object(a.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},105:function(e,t,n){"use strict";function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",(function(){return a}))},113:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(114);function r(e,t){if(e){if("string"===typeof e)return Object(a.a)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(a.a)(e,t):void 0}}},114:function(e,t,n){"use strict";function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}n.d(t,"a",(function(){return a}))},117:function(e,t,n){"use strict";n.d(t,"a",(function(){return w}));var a=n(106),r=n(107),o=n(109),i=n(108),c=n(3),s=n.n(c),l=n(314),u=n(306),f=n(99),d=n.n(f),m=function(e){var t=e.title,n=e.type,a=e.message,r=e.customClassName,o=e.timeOut,i=e.onClick,l=e.onRequestHide,u=function(){l&&l()};Object(c.useEffect)((function(){var e=null;return 0!==o&&(e=setTimeout(u,o)),function(){e&&clearTimeout(e)}}),[]);var f=function(){i&&i(),u()},m=d()(["notification","notification-".concat(n),r]),p=t?s.a.createElement("h4",{className:"title"},t):null;return s.a.createElement("div",{className:m,onClick:function(){return f()}},s.a.createElement("div",{className:"notification-message",role:"alert"},p,s.a.createElement("div",{className:"message"},a)))};m.defaultProps={type:"info",title:null,message:null,timeOut:5e3,onClick:function(){},onRequestHide:function(){},customClassName:""};var p=m,b=function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(a.a)(this,n);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).handleRequestHide=function(t){return function(){var n=e.props.onRequestHide;n&&n(t)}},e}return Object(r.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.notifications,a=t.enterTimeout,r=t.leaveTimeout,o=d()("notification-container",{"notification-container-empty":0===n.length});return s.a.createElement("div",{className:o},s.a.createElement(l.a,null,n.map((function(t){var n=t.id||(new Date).getTime();return s.a.createElement(u.a,{classNames:"notification",key:n,timeout:{exit:r,enter:a}},s.a.createElement(p,{key:n,type:t.type,title:t.title,message:t.message,timeOut:t.timeOut,onClick:t.onClick,onRequestHide:e.handleRequestHide(t),customClassName:t.customClassName}))}))))}}]),n}(s.a.Component);b.defaultProps={notifications:[],onRequestHide:function(){},enterTimeout:400,leaveTimeout:400};var y=b,h=n(129),v="change",g="primary",E="secondary",x="info",O="success",N="warning",j="error",w=new(function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(){var e;return Object(a.a)(this,n),(e=t.call(this)).listNotify=[],e}return Object(r.a)(n,[{key:"create",value:function(e){var t={id:"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)})),type:"info",title:null,message:null,timeOut:5e3,customClassName:""};e.priority?this.listNotify.unshift(Object.assign(t,e)):this.listNotify.push(Object.assign(t,e)),this.emitChange()}},{key:"primary",value:function(e,t,n,a,r,o){this.create({type:g,message:e,title:t,timeOut:n,onClick:a,priority:r,customClassName:o})}},{key:"secondary",value:function(e,t,n,a,r,o){this.create({type:E,message:e,title:t,timeOut:n,onClick:a,priority:r,customClassName:o})}},{key:"info",value:function(e,t,n,a,r,o){this.create({type:x,message:e,title:t,timeOut:n,onClick:a,priority:r,customClassName:o})}},{key:"success",value:function(e,t,n,a,r,o){this.create({type:O,message:e,title:t,timeOut:n,onClick:a,priority:r,customClassName:o})}},{key:"warning",value:function(e,t,n,a,r,o){this.create({type:N,message:e,title:t,timeOut:n,onClick:a,priority:r,customClassName:o})}},{key:"error",value:function(e,t,n,a,r,o){this.create({type:j,message:e,title:t,timeOut:n,onClick:a,priority:r,customClassName:o})}},{key:"remove",value:function(e){this.listNotify=this.listNotify.filter((function(t){return e.id!==t.id})),this.emitChange()}},{key:"emitChange",value:function(){this.emit(v,this.listNotify)}},{key:"addChangeListener",value:function(e){this.addListener(v,e)}},{key:"removeChangeListener",value:function(e){this.removeListener(v,e)}}]),n}(h.EventEmitter)),C=function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).componentWillUnmount=function(){w.removeChangeListener(r.handleStoreChange)},r.handleStoreChange=function(e){r.setState({notifications:e})},r.handleRequestHide=function(e){w.remove(e)},w.addChangeListener(r.handleStoreChange),r.state={notifications:[]},r}return Object(r.a)(n,[{key:"render",value:function(){var e=this.state.notifications,t=this.props,n=t.enterTimeout,a=t.leaveTimeout;return s.a.createElement(y,{enterTimeout:n,leaveTimeout:a,notifications:e,onRequestHide:this.handleRequestHide})}}]),n}(s.a.Component);C.defaultProps={enterTimeout:400,leaveTimeout:400}},126:function(e,t,n){"use strict";var a=n(3),r=n(120),o=n(112),i=n(119),c=n.n(i),s=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function a(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(a.prototype=n.prototype,new a)}}(),l=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},u=function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var a=Array(e),r=0;for(t=0;t<n;t++)for(var o=arguments[t],i=0,c=o.length;i<c;i++,r++)a[r]=o[i];return a},f=c.a||i,d=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return s(t,e),t.prototype.shouldComponentUpdate=function(e){var t=this.props,n=t.values,a=l(t,["values"]),r=e.values,o=l(e,["values"]);return!f(r,n)||!f(a,o)},t.prototype.render=function(){var e=this;return a.createElement(r.a.Consumer,null,(function(t){Object(o.g)(t);var n=t.formatMessage,r=t.textComponent,i=void 0===r?a.Fragment:r,c=e.props,s=c.id,l=c.description,f=c.defaultMessage,d=c.values,m=c.children,p=c.tagName,b=void 0===p?i:p,y=n({id:s,description:l,defaultMessage:f},d);return Array.isArray(y)||(y=[y]),"function"===typeof m?m(y):b?a.createElement.apply(a,u([b,null],y)):y}))},t.displayName="FormattedMessage",t}(a.Component);t.a=d},128:function(e,t,n){"use strict";var a=n(11),r=n(15),o=n(105),i=n(17),c=n(3),s=n.n(c),l=n(26),u=n.n(l),f=n(99),d=n.n(f),m=n(100),p={active:u.a.bool,"aria-label":u.a.string,block:u.a.bool,color:u.a.string,disabled:u.a.bool,outline:u.a.bool,tag:m.q,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),onClick:u.a.func,size:u.a.string,children:u.a.node,className:u.a.string,cssModule:u.a.object,close:u.a.bool},b=function(e){function t(t){var n;return(n=e.call(this,t)||this).onClick=n.onClick.bind(Object(o.a)(n)),n}Object(i.a)(t,e);var n=t.prototype;return n.onClick=function(e){this.props.disabled?e.preventDefault():this.props.onClick&&this.props.onClick(e)},n.render=function(){var e=this.props,t=e.active,n=e["aria-label"],o=e.block,i=e.className,c=e.close,l=e.cssModule,u=e.color,f=e.outline,p=e.size,b=e.tag,y=e.innerRef,h=Object(r.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);c&&"undefined"===typeof h.children&&(h.children=s.a.createElement("span",{"aria-hidden":!0},"\xd7"));var v="btn"+(f?"-outline":"")+"-"+u,g=Object(m.m)(d()(i,{close:c},c||"btn",c||v,!!p&&"btn-"+p,!!o&&"btn-block",{active:t,disabled:this.props.disabled}),l);h.href&&"button"===b&&(b="a");var E=c?"Close":null;return s.a.createElement(b,Object(a.a)({type:"button"===b&&h.onClick?"button":void 0},h,{className:g,ref:y,onClick:this.onClick,"aria-label":n||E}))},t}(s.a.Component);b.propTypes=p,b.defaultProps={color:"secondary",tag:"button"},t.a=b},185:function(e,t,n){"use strict";n.r(t);var a=n(104),r=n(3),o=n.n(r),i=n(138),c=n(150),s=n(184),l=n(296),u=n(252),f=n(128),d=n(78),m=n(38),p=n(124),b=n(117),y=n(1),h=n(103),v=n(102),g=function(e){var t;return e?e.length<4&&(t="Value must be longer than 3 characters"):t="Please enter your password",t},E=function(e){var t;return e?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)||(t="Invalid email address"):t="Please enter your email address",t};t.default=Object(m.b)((function(e){var t=e.authUser;return{loading:t.loading,error:t.error}}),{loginUserAction:y.db})((function(e){var t=e.history,n=e.loading,m=e.error,y=e.loginUserAction,x=Object(r.useState)("demo@gogo.com"),O=Object(a.a)(x,1)[0],N=Object(r.useState)("gogo123"),j=Object(a.a)(N,1)[0];Object(r.useEffect)((function(){m&&b.a.warning(m,"Login Error",3e3,null,null,"")}),[m]);var w={email:O,password:j};return o.a.createElement(i.a,{className:"h-100"},o.a.createElement(h.a,{xxs:"12",md:"10",className:"mx-auto my-auto"},o.a.createElement(c.a,{className:"auth-card"},o.a.createElement("div",{className:"position-relative image-side "},o.a.createElement("p",{className:"text-white h2"},"MAGIC IS IN THE DETAILS"),o.a.createElement("p",{className:"white mb-0"},"Please use your credentials to login.",o.a.createElement("br",null),"If you are not a member, please"," ",o.a.createElement(d.b,{to:"/user/register",className:"white"},"register"),".")),o.a.createElement("div",{className:"form-side"},o.a.createElement(d.b,{to:"/",className:"white"},o.a.createElement("span",{className:"logo-single"})),o.a.createElement(s.a,{className:"mb-4"},o.a.createElement(v.a,{id:"user.login-title"})),o.a.createElement(p.c,{initialValues:w,onSubmit:function(e){n||""!==e.email&&""!==e.password&&y(e,t)}},(function(e){var t=e.errors,a=e.touched;return o.a.createElement(p.b,{className:"av-tooltip tooltip-label-bottom"},o.a.createElement(l.a,{className:"form-group has-float-label"},o.a.createElement(u.a,null,o.a.createElement(v.a,{id:"user.email"})),o.a.createElement(p.a,{className:"form-control",name:"email",validate:E}),t.email&&a.email&&o.a.createElement("div",{className:"invalid-feedback d-block"},t.email)),o.a.createElement(l.a,{className:"form-group has-float-label"},o.a.createElement(u.a,null,o.a.createElement(v.a,{id:"user.password"})),o.a.createElement(p.a,{className:"form-control",type:"password",name:"password",validate:g}),t.password&&a.password&&o.a.createElement("div",{className:"invalid-feedback d-block"},t.password)),o.a.createElement("div",{className:"d-flex justify-content-between align-items-center"},o.a.createElement(d.b,{to:"/user/forgot-password"},o.a.createElement(v.a,{id:"user.forgot-password-question"})),o.a.createElement(f.a,{color:"primary",className:"btn-shadow btn-multiple-state ".concat(n?"show-spinner":""),size:"lg"},o.a.createElement("span",{className:"spinner d-inline-block"},o.a.createElement("span",{className:"bounce1"}),o.a.createElement("span",{className:"bounce2"}),o.a.createElement("span",{className:"bounce3"})),o.a.createElement("span",{className:"label"},o.a.createElement(v.a,{id:"user.login-button"})))))}))))))}))},99:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var o=typeof a;if("string"===o||"number"===o)e.push(a);else if(Array.isArray(a)&&a.length){var i=r.apply(null,a);i&&e.push(i)}else if("object"===o)for(var c in a)n.call(a,c)&&a[c]&&e.push(c)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()}}]);
//# sourceMappingURL=user-login.20527bff.chunk.js.map