import{a as x}from"./vendor-BwziPlmK.js";var E={exports:{}},l={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var T=x,R=Symbol.for("react.element"),p=Symbol.for("react.fragment"),k=Object.prototype.hasOwnProperty,S=T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function i(s,e,r){var t,b={},o=null,c=null;r!==void 0&&(o=""+r),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(c=e.ref);for(t in e)k.call(e,t)&&!d.hasOwnProperty(t)&&(b[t]=e[t]);if(s&&s.defaultProps)for(t in e=s.defaultProps,e)b[t]===void 0&&(b[t]=e[t]);return{$$typeof:R,type:s,key:o,ref:c,props:b,_owner:S.current}}l.Fragment=p;l.jsx=i;l.jsxs=i;E.exports=l;var m=E.exports;const f=(s,e)=>s.toString().toLowerCase().indexOf(e.toString().toLowerCase())>-1,A=(s,e)=>{let r="";return typeof s=="string"&&(r=s.toLowerCase(),r=r.replace(" ","-"),r=r.replace(/[^a-z0-9_\-]/g,"-")),r.substr(0,e||20)},u=s=>s.replace(/&#(\d+);/g,function(r,t){return String.fromCharCode(t)}).replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#039;/g,"'"),L=(s=10)=>{let e="";const r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",t=r.length;for(let b=0;b<s;b++)e+=r.charAt(Math.floor(Math.random()*t));return e},n=(s,e)=>{if(document.globals){const r=document.globals;if(typeof r.globals>"u")return s;const t=r.globals.translations;if(typeof t>"u")return s;if(typeof t[s]<"u"&&t[s]!==""){let b=u(t[s]);if(e!==null&&typeof e<"u")for(const o in e)b=b.replace("{{"+o+"}}",e[o]);return b}return s}return s},_=s=>{let e="bx:bx-map",r="Address";switch(s){case a.BUTTON:e="bx:bx-pointer",r="Button";break;case a.CAPTCHA:e="bx:bx-lock",r="Captcha";break;case a.COUNTRY:e="bx:bx-flag",r="Country";break;case a.COLOR:e="bx:bx-color-fill",r="Color";break;case a.CURRENCY:e="bx:bx-euro",r="Currency";break;case a.WEIGHT:e="bx:bx-tachometer",r="Weight";break;case a.LENGTH:e="bx:bx-ruler",r="Length";break;case a.DATE:e="bx:bx-calendar",r="Date";break;case a.EDITOR:e="bx:bx-font-color",r="Editor";break;case a.EMAIL:e="bx:bx-envelope",r="Email";break;case a.HIDDEN:e="ant-design:eye-invisible-outlined",r="Hidden";break;case a.NUMBER:e="bx:bx-hash",r="Number";break;case a.PHONE:e="bx:bx-phone",r="Phone";break;case a.TEXT:e="bx:bx-text",r="Text";break;case a.TEXTAREA:e="bx:bx-pen",r="Textarea";break;case a.LIST:e="bx:bx-list-ul",r="List";break;case a.HTML:e="bx:bx-code-alt",r="HTML";break;case a.URL:e="bx:bx-link",r="Url";break;case a.SELECT:e="bx:bx-select-multiple",r="Select";break;case a.SELECT_MULTI:e="bx:bxs-select-multiple",r="Select(multiple)";break;case a.POST_OBJECT:e="bx:pen",r="Post";break;case a.POST_OBJECT_MULTI:e="bxs:pen",r="Post(multiple)";break;case a.TERM_OBJECT:e="bx:purchase-tag-alt",r="Term";break;case a.TERM_OBJECT_MULTI:e="bxs:purchase-tag-alt",r="Term(multiple)";break;case a.TOGGLE:e="bx:bx-toggle-right",r="Toggle";break;case a.EMBED:e="bx:bx-extension",r="Embed";break;case a.FILE:e="bx:bx-cloud-upload",r="File";break;case a.GALLERY:e="bx:bx-images",r="Gallery";break;case a.IMAGE:e="bx:bx-image",r="Image";break;case a.VIDEO:e="bx:bx-video",r="Video";break;case a.POST:e="bx:bx-repost",r="Relationship";break;case a.TIME:e="bx:time-five",r="Time";break;case a.REPEATER:e="bx:folder-plus",r="Repeater";break;case a.USER:e="bx:user",r="User";break;case a.USER_MULTI:e="bx:user-plus",r="User(multiple)";break;case a.CHECKBOX:e="bx:checkbox-checked",r="Checkbox";break;case a.RADIO:e="bx:radio-circle-marked",r="Radio";break;case a.DATE_RANGE:e="bx:calendar-check",r="DateRange";break;case a.DATE_TIME:e="bxs:calendar-check",r="DateTime";break;case a.FLEXIBLE:e="bx:hive",r="Flexible";break;case a.ICON:e="bx:wink-smile",r="Icon";break;case a.RANGE:e="bx:slider-alt",r="Range";break;case a.RATING:e="bx:star",r="Rating";break;case a.WORDPRESS_POST_TITLE:e="bxl:wordpress",r="PostTitle";break;case a.WORDPRESS_POST_CONTENT:e="bxl:wordpress",r="PostContent";break;case a.WORDPRESS_POST_EXCERPT:e="bxl:wordpress",r="PostExcerpt";break;case a.WORDPRESS_POST_DATE:e="bxl:wordpress",r="PostDate";break;case a.WORDPRESS_POST_AUTHOR:e="bxl:wordpress",r="PostAuthor";break;case a.WORDPRESS_USER_EMAIL:e="bxl:wordpress",r="UserEmail";break;case a.WORDPRESS_USER_FIRST_NAME:e="bxl:wordpress",r="UserFirstName";break;case a.WORDPRESS_USER_LAST_NAME:e="bxl:wordpress",r="UserLastName";break;case a.WORDPRESS_USER_USERNAME:e="bxl:wordpress",r="Username";break;case a.WORDPRESS_USER_PASSWORD:e="bxl:wordpress",r="UserPassword";break;case a.WORDPRESS_TERM_NAME:e="bxl:wordpress",r="TermName";break;case a.WORDPRESS_TERM_DESCRIPTION:e="bxl:wordpress",r="TermDescription";break;case a.WORDPRESS_TERM_SLUG:e="bxl:wordpress",r="TermSlug";break}return{icon:e,label:r}},D={STANDARD:"standard",ACCORDION:"accordion",VERTICAL_TABS:"verticalTabs",HORIZONTAL_TABS:"horizontalTabs"},a={DATE:"Date",EMAIL:"Email",SELECT:"Select",TEXT:"Text",TEXTAREA:"Textarea"},P=s=>{const e=r=>{const{label:t}=_(r);return{label:n(t),value:r}};return[{label:n("BASIC"),options:[e(a.DATE),e(a.EMAIL),e(a.TEXT),e(a.TEXTAREA),e(a.SELECT)]}]},C=s=>s===a.SELECT;export{D as a,P as b,C as c,_ as d,a as f,m as j,f as l,L as r,A as s,n as u};