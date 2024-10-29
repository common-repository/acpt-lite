import{j as e,u as s}from"./fields-B4O9Q4Yk.js";import{a as j,u as G,R as S,L as y,d as U}from"./vendor-BwziPlmK.js";import{n as b,L as q,s as V}from"./Layout-Cn7fGwLD.js";import{P as N,f as A,u as $,B as P,s as f,A as R,d as z,r as O,i as F,w as E,a as H,m as J,b as M,L as K}from"./index-DIgvZvNa.js";import{T as D}from"./index-BDkVNFtw.js";import{E as Q}from"./index-_Wru927e.js";import{E as X}from"./index-BWdAJ22J.js";import{F as Z,E as ee}from"./FieldGroupsModal-anVa-Z0H.js";import{m as v}from"./metaTypes-DSJrX6O3.js";import{M as Y}from"./index-D2c1mKCA.js";import{u as _,a as L,b as se,F as te}from"./index.esm-Czmjla35.js";import{P as oe}from"./index-C-SLOP4R.js";import{B as le}from"./index-oBSPYE0D.js";import{u as ne}from"./index-tMNRH81H.js";import"./index-BgeiEoxz.js";const W=({postType:t})=>{const c=document.globals.settings,r=A(c,"key","delete_posts").value,{reset:i}=_(),m=$(),[l,x]=j.useState(!1),d=G(),T=()=>{m(z(t,"all")).then(u=>{const g=u.payload;g.success?(i(),d("/"),x(!l),b.success(s("Custom post type successfully deleted. The browser will refresh after 5 seconds.")),O(5e3)):b.error(g.error)}).catch(u=>{b.error(u)})},h=[e.jsx(P,{style:f.DANGER,onClick:()=>{T()},children:s("Yes, delete it")}),e.jsx(P,{style:f.SECONDARY,onClick:()=>{x(!l)},children:s("Return back to list")})];return e.jsxs(S.Fragment,{children:[e.jsxs(Y,{title:s("Delete custom post type"),buttons:h,visible:l,children:[e.jsx("div",{children:s("You are going to delete this custom post type. Are you sure?")}),r&&e.jsx("div",{className:"mt-24",children:e.jsx(R,{style:f.WARNING,children:s("WARNING: This action will delete all posts and metadata for this post type. The action is irreversible.")})})]}),e.jsx("a",{href:"#",onClick:u=>{u.preventDefault(),x(!l)},children:s("Delete")})]})};W.propTypes={postType:N.string.isRequired};const I=j.memo(({record:t,showWooCommerceColumn:p})=>{const{register:c}=_(),r=`elements.${t.name}`;return e.jsx(S.Fragment,{children:e.jsxs("tr",{children:[e.jsx("td",{style:{width:"24px"},children:!t.isNative&&e.jsxs("label",{className:"checkbox",htmlFor:r,"data-cy":`select-${t.name}`,children:[e.jsx("input",{type:"checkbox",id:r,name:r,defaultChecked:!1,...c(r)}),e.jsx("span",{})]})}),e.jsx("td",{children:e.jsx(Q,{value:t.icon})}),e.jsx("td",{children:t.name}),e.jsx("td",{children:e.jsx(X,{element:t})}),e.jsx("td",{children:F(t,"taxonomies")&&t.taxonomies.length>0?e.jsx(y,{to:`/assoc-taxonomy-post/${t.name}`,children:s("Manage")}):e.jsx(y,{to:`/assoc-taxonomy-post/${t.name}`,children:s("Associate")})}),p&&e.jsx("td",{children:t.isWooCommerce===!0&&e.jsx(S.Fragment,{children:F(t,"woocommerceProductData")&&t.woocommerceProductData.length>0?e.jsx(y,{to:`/product-data/${t.name}`,children:s("Manage")}):e.jsx(y,{to:`/product-data/${t.name}`,children:s("Create")})})}),e.jsx("td",{children:e.jsxs("div",{className:"i-flex-center s-8",children:[e.jsx(y,{to:`/register_meta?belongsTo=${v.CUSTOM_POST_TYPE}&find=${t.name}`,children:s("Create")}),e.jsx(Z,{find:t.name,belongsTo:v.CUSTOM_POST_TYPE})]})}),e.jsx("td",{children:!t.isNative&&e.jsxs("div",{className:"i-flex-center s-8",children:[e.jsx(y,{to:`view/${t.name}`,children:s("View")}),e.jsx(y,{to:`edit/${t.name}`,children:s("Edit")}),e.jsx(W,{postType:t.name}),e.jsx(ee,{belongsTo:v.CUSTOM_POST_TYPE,find:t.name})]})})]})})});I.propTypes={record:N.object.isRequired,showWooCommerceColumn:N.bool.isRequired};const ae=()=>{const{control:t,register:p}=_(),c=L({control:t,name:"elements"}),r=()=>{let i=0;for(const[m,l]of Object.entries(c))l===!0&&i++;return i};return e.jsxs("div",{className:"flex-between s-8 mb-24","data-cy":"bulk-actions",children:[e.jsxs("span",{children:[r()," ",s("Selected items")]}),e.jsxs("div",{className:"i-flex-center s-8",children:[e.jsxs("select",{name:"action","data-cy":"cpt-bulk-actions",className:"form-control sm",...p("action"),children:[e.jsx("option",{value:"",children:s("Select")}),e.jsx("option",{value:"delete",children:s("Delete")})]}),e.jsx(P,{testId:"cpt-bulk-actions",style:f.WHITE,size:"sm",children:s("Execute")})]})]})},ce=()=>{const p=document.globals.globals,[c,r]=j.useState(!1),[i,m]=j.useState([]),[l,x]=j.useState(!1),[d,T]=j.useState([]);j.useEffect(()=>{c===!0&&(x(!0),E("fetchPostTypesAction",{}).then(o=>{m(o),x(!1)}).catch(o=>{console.error(o.message),x(!1)}))},[c]);const h=()=>{E("syncPostsAction",{postTypes:d}).then(o=>{o.success&&(b.success(s("Successfully post sync. The browser will refresh after 5 seconds.")),O(5e3)),o.error&&b.error(error),r(!c)}).catch(o=>{console.error(o.message)})},u=(o,k)=>{T(k===!0?C=>[...C,o]:C=>C.filter(w=>w!==o))},g=[e.jsx(P,{style:f.PRIMARY,disabled:d.length===0,onClick:()=>{h()},children:s("Sync")}),e.jsx(P,{style:f.SECONDARY,onClick:()=>{r(!c)},children:s("Return back to list")})];return e.jsxs(S.Fragment,{children:[e.jsx(Y,{title:s("Sync with post types"),buttons:g,visible:c,children:l?e.jsx("div",{children:"Loading..."}):e.jsx(S.Fragment,{children:i&&i.length>0?e.jsx("div",{className:"responsive",children:e.jsx("table",{className:`acpt-table spaceless ${p.is_rtl?"rtl":""}`,children:e.jsx("tbody",{children:i.map(o=>e.jsx("tr",{children:e.jsx("td",{children:e.jsxs("label",{className:"checkbox",htmlFor:`select_${o.name}`,children:[e.jsx("input",{name:`select_${o.name}`,defaultChecked:!1,type:"checkbox",id:`select_${o.name}`,onChange:k=>u(o.name,k.target.checked)}),e.jsx("span",{children:o.label})]})})}))})})}):e.jsx(R,{style:f.SECONDARY,children:s("No custom post type found.")})})}),e.jsx(P,{type:"button",style:f.SECONDARY,onClick:o=>{o.preventDefault(),r(!c)},children:s("Sync with post types")})]})},re=()=>{const t=document.globals,p=t.settings,c=t.globals,[r]=ne(),i=j.useRef(),m=se({mode:"all"}),l=L({control:m.control,name:"elements"}),x=$(),{data:d,loading:T}=H(n=>n.fetchCustomPostTypes),{page:h}=U(),u=p.length>0&&A(p,"key","records_per_page")!==""?A(p,"key","records_per_page").value:20,g=Math.ceil(d.count/u);j.useEffect(()=>{J(s("Registered Custom Post Types")),x(M({page:h||1,perPage:u}))},[h]),j.useEffect(()=>{(()=>{if(!l)return!1;let a=0;for(const[ie,B]of Object.entries(l))B===!0&&a++;return a===Object.entries(l).length})()?i.current.checked=!0:i.current&&(i.current.checked=!1)},[l]);const o=()=>{if(!l)return!1;for(const[n,a]of Object.entries(l))if(a===!0)return!0;return!1},k=n=>{m.reset(),n.belongsTo=v.CUSTOM_POST_TYPE,E("bulkActionsAction",n).then(a=>{if(a.success===!0)switch(n.action){case"delete":b.success(s("Custom post type successfully deleted. The browser will refresh after 5 seconds.")),m.resetField("elements"),V(),x(M({page:h||1,perPage:u})),O(5e3);break}else b.error(a.error)}).catch(a=>{console.error(a),b.error(s("Unknown error, please retry later"))})},C=()=>{if(!d.records)return!1;let n=0;return d.records.map(a=>{a.isWooCommerce===!0&&n++}),n>0},w=[e.jsx(le,{style:f.PRIMARY,to:"/register",children:s("Register new Post Type")}),e.jsx(ce,{})];return T?e.jsx(K,{}):e.jsx(te,{...m,children:e.jsx("form",{onSubmit:m.handleSubmit(k),children:e.jsxs(q,{title:s("Registered Custom Post Types"),actions:w,crumbs:[{label:s("Registered Custom Post Types")}],children:[e.jsx("div",{ref:r,children:o()&&e.jsx(ae,{})}),d.records&&d.records.length>0?e.jsx("div",{className:"responsive",children:e.jsxs("table",{"data-cy":"cpt-table",className:`acpt-table with-shadow ${c.is_rtl?"rtl":""}`,children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{width:"24px"},children:e.jsxs("label",{"data-cy":"select-all",className:"checkbox",htmlFor:"all",children:[e.jsx("input",{ref:i,type:"checkbox",id:"all",defaultChecked:!1,onClick:n=>{d.records.filter(a=>a.isNative===!1).map(a=>{m.setValue(`elements.${a.name}`,n.currentTarget.checked)})}}),e.jsx("span",{})]})}),e.jsx("th",{}),e.jsx("th",{children:s("Name")}),e.jsx("th",{children:s("Type")}),e.jsx("th",{children:e.jsx(D,{tip:s("Associated taxonomies with the post"),label:s("Associated taxonomies")})}),C()&&e.jsx("th",{children:e.jsx(D,{tip:s("Associated WooCommerce product data"),label:s("Product data")})}),e.jsx("th",{children:s("Field groups")}),e.jsx("th",{children:s("Actions")})]})}),e.jsx("tbody",{children:d.records&&d.records.map(n=>e.jsx(I,{record:n,showWooCommerceColumn:C()},n.id))}),g>1&&e.jsx("tfoot",{children:e.jsx("tr",{children:e.jsx("td",{colSpan:7,children:e.jsx(oe,{currentPage:h?parseInt(h):1,totalPages:g,baseLink:""})})})})]})}):e.jsxs(R,{style:f.SECONDARY,children:[s("No custom post types found.")," ",e.jsx(y,{to:"/register",children:s("Register the first one")}),"!"]})]})})})};re.propTypes={};export{re as default};
