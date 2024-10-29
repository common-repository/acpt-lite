import{u as t,j as i}from"./fields-B4O9Q4Yk.js";import{u as C,d as S,a as h}from"./vendor-BwziPlmK.js";import{b as g}from"./index.esm-Czmjla35.js";import{L as I,n as c}from"./Layout-Cn7fGwLD.js";import{u as P,a as k,m as R,ad as W,B as T,s as E,L,Q as D,ae as V}from"./index-DIgvZvNa.js";import{a as H}from"./woocommerce_icons-DfNVjrUt.js";import{C as q,a as u}from"./CardRow-CjwXcCAq.js";import{I as B}from"./Input-ChkMYR6a.js";import{T as M}from"./Toggle-BxQlEymb.js";import{C as U}from"./Checkbox-DDYcq2tg.js";import{S as A}from"./SelectMulti-WydgNDJ5.js";import{I as F}from"./InputHidden-CK3-4WAk.js";const te=({})=>{const n=P(),{data:e}=k(r=>r.fetchWooCommerceProductData),v=C(),{id:o}=S(),m=o?"Edit WooCommerce product data":"Create new WooCommerce product data",[b,p]=h.useState(!1),{register:s,handleSubmit:_,setValue:l,formState:{errors:d},clearErrors:y}=g({mode:"all"}),x=()=>e?typeof e.icon>"u"?null:typeof e.icon=="object"?[e.icon.icon]:[e.icon]:null;h.useEffect(()=>{R(t(m)),o?n(W({id:o})).then(r=>{const a=r.payload;l("product_data_name",a.name),l("icon",a.icon),l("show_ui",a.showInUI),p(!0)}):p(!0)},[]);const w=r=>{n(V(r)).then(a=>{const f=a.payload;f.success?(v("/product-data/product"),c.success(t("Product data successfully saved"))):c.error(f.error)}).catch(a=>{c.error(a)})},j=[i.jsx(T,{type:"submit",style:E.PRIMARY,children:t("Save")})];return b?i.jsx("form",{onSubmit:_(w),children:i.jsx(I,{crumbs:[{label:t("Registered Custom Post Types"),link:"/"},{label:t("WooCommerce product data"),link:"/product-data/product"},{label:o?t("Edit WooCommerce product data"):t("Create new WooCommerce product data")}],title:m,actions:j,children:i.jsxs(q,{style:"with-shadow",children:[i.jsx(F,{register:s,id:"id",value:o||D()}),i.jsx(u,{label:t("Product data name"),value:i.jsx(B,{id:"product_data_name",placeholder:t("Product data name"),description:t("The product data name."),register:s,errors:d,isRequired:!0,validate:{maxLength:{value:20,message:t("max length is 20")},required:t("This field is mandatory")}})}),i.jsx(u,{label:t("Icon"),value:i.jsx(A,{id:"icon",register:s,setValue:l,defaultValue:x(),values:H,clearErrors:y,errors:d,maxItems:1})}),i.jsx(u,{label:t("visibility"),value:i.jsx(U,{register:s,errors:d,id:"visibility",values:{"Show in simple products":{value:"show_if_simple",checked:e&&e.visibility?e.visibility.includes("show_if_simple"):!0},"Show in variable products":{value:"show_if_variable",checked:e&&e.visibility?e.visibility.includes("show_if_variable"):!0},"Show in grouped products":{value:"show_if_grouped",checked:e&&e.visibility?e.visibility.includes("show_if_grouped"):!0},"Show in external products":{value:"show_if_external",checked:e&&e.visibility?e.visibility.includes("show_if_external"):!0},"Hide in virtual products":{value:"hide_if_virtual",checked:e&&e.visibility?e.visibility.includes("hide_if_virtual"):!1},"Hide in external products":{value:"hide_if_external",checked:e&&e.visibility?e.visibility.includes("hide_if_external"):!1}}})}),i.jsx(u,{label:t("Show in UI"),value:i.jsx(M,{register:s,errors:d,id:"show_ui",description:t("Show the product data on the front store page."),defaultValue:null})})]})})}):i.jsx(L,{})};export{te as default};
