(this["webpackJsonpgogo-react"]=this["webpackJsonpgogo-react"]||[]).push([[12],{103:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return l}));var n=a(3),r=a.n(n),i=a(121),o=function(e){return r.a.createElement(i.a,Object.assign({},e,{widths:["xxs","xs","sm","md","lg","xl","xxl"]}))},l=function(e){var t=e.className;return r.a.createElement("div",{className:"separator ".concat(t)})}},110:function(e,t,a){"use strict";var n=a(3),r=a.n(n),i=a(122),o=a(102),l=(a(9),function(e){var t=e.match.path.substr(1).split("/");return t[t.length-1].indexOf(":")>-1&&(t=t.filter((function(e){return-1===e.indexOf(":")}))),r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,{className:"pt-0 breadcrumb-container d-none d-sm-block d-lg-inline-block"}))});t.a=function(e){var t=e.heading,a=e.match;return r.a.createElement(r.a.Fragment,null,t&&r.a.createElement("h1",null,r.a.createElement(o.a,{id:t})),r.a.createElement(l,{match:a}))}},122:function(e,t,a){"use strict";var n=a(11),r=a(15),i=a(3),o=a.n(i),l=a(26),s=a.n(l),c=a(99),u=a.n(c),d=a(100),f={tag:d.q,listTag:d.q,className:s.a.string,listClassName:s.a.string,cssModule:s.a.object,children:s.a.node,"aria-label":s.a.string},p=function(e){var t=e.className,a=e.listClassName,i=e.cssModule,l=e.children,s=e.tag,c=e.listTag,f=e["aria-label"],p=Object(r.a)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),m=Object(d.m)(u()(t),i),h=Object(d.m)(u()("breadcrumb",a),i);return o.a.createElement(s,Object(n.a)({},p,{className:m,"aria-label":f}),o.a.createElement(c,{className:h},l))};p.propTypes=f,p.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"},t.a=p},152:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.wizardShape=t.withWizard=t.Steps=t.Wizard=t.WithWizard=t.Step=void 0;var n=s(a(267)),r=s(a(268)),i=s(a(269)),o=s(a(270)),l=s(a(272));function s(e){return e&&e.__esModule?e:{default:e}}var c=(0,n.default)("Step"),u=(0,n.default)("WithWizard");t.Step=c,t.WithWizard=u,t.Wizard=r.default,t.Steps=i.default,t.withWizard=o.default,t.wizardShape=l.default},156:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(114);var r=a(113);function i(e){return function(e){if(Array.isArray(e))return Object(n.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(r.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},192:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e,t){var a=e.render,n=e.children;return a?a(t):"function"===typeof n?n(t):n}},267:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(a(26)),r=i(a(192));function i(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t=function(e,t){var a=t.wizard,n=(a.init,function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(a,["init"]));return(0,r.default)(e,n)};return t.contextTypes={wizard:n.default.object},t.displayName=e,t}},268:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var a=[],n=!0,r=!1,i=void 0;try{for(var o,l=e[Symbol.iterator]();!(n=(o=l.next()).done)&&(a.push(o.value),!t||a.length!==t);n=!0);}catch(s){r=!0,i=s}finally{try{!n&&l.return&&l.return()}finally{if(r)throw i}}return a}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},i=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),o=a(3),l=u(a(26)),s=a(22),c=u(a(192));function u(e){return e&&e.__esModule?e:{default:e}}function d(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var m=function(e){function t(){var e,a,n;f(this,t);for(var i=arguments.length,o=Array(i),l=0;l<i;l++)o[l]=arguments[l];return a=n=p(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),n.state={step:{id:null},steps:[]},n.history=n.props.history||(0,s.createMemoryHistory)(),n.steps=[],n.pathToStep=function(e){var t=e.replace(n.basename,""),a=n.state.steps.filter((function(e){return e.id===t}));return r(a,1)[0]||n.state.step},n.init=function(e){n.setState({steps:e},(function(){var e=n.pathToStep(n.history.location.pathname);e.id?n.setState({step:e}):n.history.replace(""+n.basename+n.ids[0])}))},n.push=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n.nextStep;return n.history.push(""+n.basename+e)},n.replace=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n.nextStep;return n.history.replace(""+n.basename+e)},n.next=function(){n.props.onNext?n.props.onNext(n.getChildContext().wizard):n.push()},p(n,a)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),i(t,[{key:"getChildContext",value:function(){return{wizard:n({go:this.history.go,history:this.history,init:this.init,next:this.next,previous:this.history.goBack,push:this.push,replace:this.replace},this.state)}}},{key:"componentWillMount",value:function(){var e=this;if(this.unlisten=this.history.listen((function(t){var a=t.pathname;return e.setState({step:e.pathToStep(a)})})),this.props.onNext){var t=this.getChildContext().wizard,a=(t.init,d(t,["init"]));this.props.onNext(a)}}},{key:"componentWillUnmount",value:function(){this.unlisten()}},{key:"render",value:function(){var e=this.getChildContext().wizard,t=(e.init,d(e,["init"]));return(0,c.default)(this.props,t)}},{key:"basename",get:function(){return this.props.basename+"/"}},{key:"ids",get:function(){return this.state.steps.map((function(e){return e.id}))}},{key:"nextStep",get:function(){return this.ids[this.ids.indexOf(this.state.step.id)+1]}}]),t}(o.Component);m.propTypes={basename:l.default.string,history:l.default.shape({entries:l.default.array,go:l.default.func,goBack:l.default.func,listen:l.default.func,location:l.default.object,push:l.default.func,replace:l.default.func}),onNext:l.default.func},m.defaultProps={basename:"",history:null,onNext:null,render:null},m.childContextTypes={wizard:l.default.object},t.default=m},269:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var a=[],n=!0,r=!1,i=void 0;try{for(var o,l=e[Symbol.iterator]();!(n=(o=l.next()).done)&&(a.push(o.value),!t||a.length!==t);n=!0);}catch(s){r=!0,i=s}finally{try{!n&&l.return&&l.return()}finally{if(r)throw i}}return a}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),i=a(3),o=s(i),l=s(a(26));function s(e){return e&&e.__esModule?e:{default:e}}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var d=function(e){function t(){return c(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentWillMount",value:function(){var e=o.default.Children.map(this.props.children,(function(e){var t=e.props;t.children,t.render;return function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(t,["children","render"])}));this.context.wizard.init(e)}},{key:"render",value:function(){var e=(this.props.step||this.context.wizard.step).id,t=o.default.Children.toArray(this.props.children).filter((function(t){return t.props.id===e})),a=n(t,1)[0];return void 0===a?null:a}}]),t}(i.Component);d.propTypes={children:l.default.node.isRequired,step:l.default.shape({id:l.default.string.isRequired})},d.defaultProps={step:null},d.contextTypes={wizard:l.default.object},t.default=d},270:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=l(a(3)),i=l(a(26)),o=l(a(271));function l(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t=function(t,a){var i=a.wizard,o=(i.init,function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(i,["init"]));return r.default.createElement(e,n({wizard:o},t))};return t.contextTypes={wizard:i.default.object},t.displayName="withWizard("+(e.displayName||e.name)+")",t.WrappedComponent=e,(0,o.default)(t,e)}},271:function(e,t,a){"use strict";var n={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},r={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},i=Object.defineProperty,o=Object.getOwnPropertyNames,l=Object.getOwnPropertySymbols,s=Object.getOwnPropertyDescriptor,c=Object.getPrototypeOf,u=c&&c(Object);e.exports=function e(t,a,d){if("string"!==typeof a){if(u){var f=c(a);f&&f!==u&&e(t,f,d)}var p=o(a);l&&(p=p.concat(l(a)));for(var m=0;m<p.length;++m){var h=p[m];if(!n[h]&&!r[h]&&(!d||!d[h])){var b=s(a,h);try{i(t,h,b)}catch(v){}}}return t}return t}},272:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(26),i=(n=r)&&n.__esModule?n:{default:n};t.default=i.default.shape({go:i.default.func.isRequired,history:i.default.object.isRequired,next:i.default.func.isRequired,previous:i.default.func.isRequired,push:i.default.func.isRequired,replace:i.default.func.isRequired,step:i.default.shape({id:i.default.string.isRequired}).isRequired,steps:i.default.arrayOf(i.default.shape({id:i.default.string.isRequired}).isRequired).isRequired})},273:function(e,t,a){"use strict";var n=a(11),r=a(15),i=a(3),o=a.n(i),l=a(26),s=a.n(l),c=a(99),u=a.n(c),d=a(100),f={tag:d.q,className:s.a.string,cssModule:s.a.object,innerRef:s.a.oneOfType([s.a.object,s.a.string,s.a.func])},p=function(e){var t=e.className,a=e.cssModule,i=e.innerRef,l=e.tag,s=Object(r.a)(e,["className","cssModule","innerRef","tag"]),c=Object(d.m)(u()(t,"card-body"),a);return o.a.createElement(l,Object(n.a)({},s,{className:c,ref:i}))};p.propTypes=f,p.defaultProps={tag:"div"},t.a=p},281:function(e,t,a){"use strict";a.r(t);var n=a(3),r=a.n(n),i=a(138),o=a(103),l=a(110),s=(a(9),a(156)),c=a(104),u=a(150),d=a(273),f=a(296),p=a(252),m=a(11),h=a(15),b=a(26),v=a.n(b),y=a(99),g=a.n(y),O=a(100),w={tag:O.q,type:v.a.string,size:v.a.string,color:v.a.string,className:v.a.string,cssModule:v.a.object,children:v.a.string},E=function(e){var t=e.className,a=e.cssModule,n=e.type,i=e.size,o=e.color,l=e.children,s=e.tag,c=Object(h.a)(e,["className","cssModule","type","size","color","children","tag"]),u=Object(O.m)(g()(t,!!i&&"spinner-"+n+"-"+i,"spinner-"+n,!!o&&"text-"+o),a);return r.a.createElement(s,Object(m.a)({role:"status"},c,{className:u}),l&&r.a.createElement("span",{className:Object(O.m)("sr-only",a)},l))};E.propTypes=w,E.defaultProps={tag:"div",type:"border",children:"Loading..."};var j=E,N=a(152),x=a(120),z=a(124),_=a(102),P=a(128),S=function(e){var t=e.className,a=e.onClickPrev,n=e.prevLabel,i=e.onClickNext,o=e.nextLabel;return r.a.createElement(N.WithWizard,{render:function(e){var l=e.next,s=e.previous,c=e.step,u=e.steps;return r.a.createElement("div",{className:"wizard-buttons ".concat(t)},r.a.createElement(P.a,{color:"primary",className:"mr-1 ".concat(u.indexOf(c)<=0?"disabled":""),onClick:function(){a(s,u,c)}},n),r.a.createElement(P.a,{color:"primary",className:u.indexOf(c)>=u.length-1?"disabled":"",onClick:function(){i(l,u,c)}},o))}})},k=a(78),T=function(e){var t=e.className,a=e.disableNav,n=e.topNavClick,i=function(e,t,a,n){return e.indexOf(t)===a?"step-doing":e.indexOf(t)>a||n.isDone?(n.isDone=!0,"step-done"):"step"};return r.a.createElement(N.WithWizard,{render:function(e){e.next,e.previous;var o=e.step,l=e.steps,s=(e.go,e.push);return r.a.createElement("ul",{className:"nav nav-tabs ".concat(t).concat(a?" disabled":"")},l.map((function(e,t){return e.hideTopNav?r.a.createElement("span",{key:"topNavStep_".concat(t)}):r.a.createElement("li",{key:"topNavStep_".concat(t),className:"nav-item ".concat(i(l,o,t,e))},r.a.createElement(k.b,{to:"#",location:{},className:"nav-link",onClick:function(){return function(e,t){a||n(e,t)}(e,s)}},r.a.createElement("span",null,e.name),r.a.createElement("small",null,e.desc)))})))}})},C=function(e){var t;return e?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)||(t="Invalid email address"):t="Please enter your email address",t},M=function(e){var t;return e?e.length<2&&(t="Value must be longer than 2 characters"):t="Please enter your name",t},R=function(e){var t;return e?e.length<6&&(t="Password must be longer than 6 characters"):t="Please enter your password",t};Object(x.c)((function(e){var t=e.intl,a=[Object(n.createRef)(null),Object(n.createRef)(null),Object(n.createRef)(null)],i=Object(n.useState)(!1),o=Object(c.a)(i,2),l=o[0],m=o[1],h=Object(n.useState)(!1),b=Object(c.a)(h,2),v=b[0],y=b[1],g=Object(n.useState)([{valid:!1,name:"name",value:""},{valid:!1,name:"email",value:""},{valid:!1,name:"password",value:""}]),O=Object(c.a)(g,2),w=O[0],E=O[1],x=t.messages;return r.a.createElement(u.a,null,r.a.createElement(d.a,{className:"wizard wizard-default"},r.a.createElement(N.Wizard,null,r.a.createElement(T,{className:"justify-content-center",disableNav:!0}),r.a.createElement(N.Steps,null,r.a.createElement(N.Step,{id:"step1",name:x["wizard.step-name-1"],desc:x["wizard.step-desc-1"]},r.a.createElement("div",{className:"wizard-basic-step"},r.a.createElement(z.c,{innerRef:a[0],initialValues:{name:w[0].value},onSubmit:function(){}},(function(e){var t=e.errors,a=e.touched;return r.a.createElement(z.b,{className:"av-tooltip tooltip-label-right"},r.a.createElement(f.a,null,r.a.createElement(p.a,null,x["forms.name"]),r.a.createElement(z.a,{className:"form-control",name:"name",validate:M}),t.name&&a.name&&r.a.createElement("div",{className:"invalid-feedback d-block"},t.name)))})))),r.a.createElement(N.Step,{id:"step2",name:x["wizard.step-name-2"],desc:x["wizard.step-desc-2"]},r.a.createElement("div",{className:"wizard-basic-step"},r.a.createElement(z.c,{innerRef:a[1],initialValues:{email:w[1].value},onSubmit:function(){}},(function(e){var t=e.errors,a=e.touched;return r.a.createElement(z.b,{className:"av-tooltip tooltip-label-right"},r.a.createElement(f.a,null,r.a.createElement(p.a,null,x["forms.email"]),r.a.createElement(z.a,{className:"form-control",name:"email",validate:C}),t.email&&a.email&&r.a.createElement("div",{className:"invalid-feedback d-block"},t.email)))})))),r.a.createElement(N.Step,{id:"step3",name:x["wizard.step-name-3"],desc:x["wizard.step-desc-3"]},r.a.createElement("div",{className:"wizard-basic-step"},r.a.createElement(z.c,{innerRef:a[2],initialValues:{password:w[2].value},onSubmit:function(){}},(function(e){var t=e.errors,a=e.touched;return r.a.createElement(z.b,{className:"av-tooltip tooltip-label-right error-l-75"},r.a.createElement(f.a,null,r.a.createElement(p.a,null,x["forms.password"]),r.a.createElement(z.a,{className:"form-control",name:"password",type:"password",validate:R}),t.password&&a.password&&r.a.createElement("div",{className:"invalid-feedback d-block"},t.password)))})))),r.a.createElement(N.Step,{id:"step4",hideTopNav:!0},r.a.createElement("div",{className:"wizard-basic-step text-center pt-3"},v?r.a.createElement("div",null,r.a.createElement(j,{color:"primary",className:"mb-1"}),r.a.createElement("p",null,r.a.createElement(_.a,{id:"wizard.async"}))):r.a.createElement("div",null,r.a.createElement("h2",{className:"mb-2"},r.a.createElement(_.a,{id:"wizard.content-thanks"})),r.a.createElement("p",null,r.a.createElement(_.a,{id:"wizard.registered"})))))),r.a.createElement(S,{onClickNext:function(e,t,n){if(!(t.length-1<=t.indexOf(n))){var r=t.indexOf(n),i=a[r].current,o=w[r].name;i.submitForm().then((function(){var a=Object(s.a)(w);a[r].value=i.values[o],a[r].valid=!i.errors[o],E(a),!i.errors[o]&&i.touched[o]&&(e(),n.isDone=!0,t.length-2<=t.indexOf(n)&&(m(!0),y(!0),setTimeout((function(){y(!1)}),3e3)))}))}},onClickPrev:function(e,t,a){t.indexOf(a)<=0||e()},className:"justify-content-center ".concat(l&&"invisible"),prevLabel:x["wizard.prev"],nextLabel:x["wizard.next"]}))))})),t.default=function(e){var t=e.match;return r.a.createElement("div",{style:{padding:"20px"}},r.a.createElement(i.a,null,r.a.createElement(o.a,{xxs:"12"},r.a.createElement(l.a,{heading:"My Profile",match:t}),r.a.createElement(o.b,{className:"mb-5"}))))}}}]);
//# sourceMappingURL=dashboard-profile.85136244.chunk.js.map