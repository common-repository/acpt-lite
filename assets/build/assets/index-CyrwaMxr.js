import{j as e,f as b}from"./fields-B4O9Q4Yk.js";import{R as m}from"./vendor-BwziPlmK.js";import{m as x}from"./metaTypes-DSJrX6O3.js";const j=()=>{let l=!1;if(typeof _<"u"&&typeof _.forEach=="function"){const n=["get","set","at","cloneDeep"];l=!0,n.forEach(function(t){l=typeof _[t]!="function"?!1:l})}return!!l},v=({attributes:l,setAttributes:n})=>{const{__:t}=wp.i18n,{PanelRow:c,SelectControl:s}=wp.components;return e.jsx(c,{children:e.jsx(s,{label:t("Display as","acpt"),value:l.display,options:[{label:t("text","acpt"),value:t("text","acpt")},{label:t("link","acpt"),value:t("link","acpt")}],onChange:o=>{n({...l,display:o})}})})},C=({attributes:l,setAttributes:n})=>{const{__:t}=wp.i18n,{PanelRow:c,SelectControl:s}=wp.components,o=[{label:t("--Select---","acpt"),value:null},{value:"d-M-y",label:"dd-mmm-yy (ex. 28-OCT-90)"},{value:"d-M-Y",label:"dd-mmm-yyyy (ex. 28-OCT-1990)"},{value:"d M y",label:"mmm yy (ex. 28 OCT 90)"},{value:"d M Y",label:"mmm yyyy (ex. 28 OCT 1990)"},{value:"d/m/Y",label:"dd/mm/yy (ex. 28/10/90)"},{value:"d/m/Y",label:"dd/mm/yyyy (ex. 28/10/1990)"},{value:"m/d/y",label:"mm/dd/yy (ex. 10/28/90)"},{value:"m/d/Y",label:"mm/dd/yyyy (ex. 10/28/1990)"},{value:"d.m.Y",label:"dd.mm.yy (ex. 28.10.90)"},{value:"d.m.Y",label:"dd.mm.yyyy (ex. 28.10.1990)"}];return e.jsx(c,{children:e.jsx(s,{label:t("Select date format","acpt"),value:l.dateFormat,options:o,onChange:a=>{n({...l,dateFormat:a})}})})},w=({fields:l,attributes:n,setAttributes:t})=>{const{__:c}=wp.i18n,{PanelRow:s,SelectControl:o}=wp.components,a=n.field?JSON.parse(n.field):null;return a&&a.block_name?e.jsx(m.Fragment,{children:e.jsx(s,{children:e.jsxs("div",{className:"acpt-inline-block",children:[e.jsx("span",{className:"acpt-badge acpt-badge-primary",children:a.parent_field}),e.jsx("span",{className:"acpt-badge acpt-badge-success",children:a.block_name}),e.jsx("span",{className:"acpt-badge acpt-badge-success-outline",children:a.block_index}),e.jsx("span",{className:"acpt-badge acpt-badge-secondary-outline",children:a.field}),e.jsx("span",{className:"acpt-badge acpt-badge-secondary-outline",children:a.index})]})})}):a&&a.parent_field?e.jsx(m.Fragment,{children:e.jsx(s,{children:e.jsxs("div",{className:"acpt-inline-block",children:[e.jsx("span",{className:"acpt-badge acpt-badge-primary",children:a.parent_field}),e.jsx("span",{className:"acpt-badge acpt-badge-secondary-outline",children:a.field}),e.jsx("span",{className:"acpt-badge acpt-badge-secondary-outline",children:a.index})]})})}):a?e.jsx(m.Fragment,{children:e.jsx(s,{children:e.jsx("div",{className:"acpt-inline-block",children:e.jsx("span",{className:"acpt-badge acpt-badge-secondary-outline",children:a.label})})})}):e.jsx(m.Fragment,{children:e.jsx(s,{children:e.jsx(o,{label:c("Field","acpt"),value:n.field,options:l,onChange:i=>t({...n,field:i})})})})},k=({attributes:l,setAttributes:n,context:t})=>{const{__:c}=wp.i18n,{useBlockProps:s,InspectorControls:o,BlockControls:a,AlignmentControl:i}=wp.blockEditor,r=wp.serverSideRender,{Panel:d,PanelBody:f}=wp.components,h=s(),u=l.field?JSON.parse(l.field):null;return e.jsxs("div",{...h,children:[e.jsx(a,{children:e.jsx(i,{value:l.align,onChange:p=>n({...l,align:p})})}),e.jsx(o,{children:e.jsxs(d,{children:[e.jsx(f,{title:c("General settings","acpt"),initialOpen:!0,children:e.jsx(w,{fields:document.metaFields.filter(p=>p.group==="all"||p.group==="basic"||p.group==="media"),attributes:l,setAttributes:n})}),e.jsxs(f,{title:c("Advanced settings","acpt"),initialOpen:!0,children:[u&&u.type===b.EMAIL&&e.jsx(v,{attributes:l,setAttributes:n}),u&&u.type===b.DATE&&e.jsx(C,{attributes:l,setAttributes:n})]})]})}),e.jsx(r,{block:"advanced-custom-post-type/basic-block",attributes:{...l,...t}})]})},y=async(l,n)=>{let t;return t=n instanceof FormData?n:new FormData,t.append("action",l),t.append("data",JSON.stringify(n)),await(await fetch(typeof ajaxurl=="string"?ajaxurl:"/wp-admin/admin-ajax.php",{method:"POST",body:t})).json()};wp.i18n;const L=async()=>{let l=[];if(pagenow==="site-editor"){let n=await y("fetchAllMetaAction",{gutenberg:!0});for(const[t,c]of Object.entries(n))for(const[s,o]of Object.entries(c))o.length>0&&l.push({belongsTo:t,find:s,records:o})}else if(typenow!==""){let n=await y("fetchMetaAction",{belongsTo:x.CUSTOM_POST_TYPE,find:typenow});l.push({belongsTo:x.CUSTOM_POST_TYPE,find:typenow,records:n.records})}return l},T=async()=>{let l=await y("fetchAllFindBelongsAction",{});document.globals.globals=l},S=e.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 634 572",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M465.039 115.5L339.505 42.9755C333.314 39.3991 325.686 39.3991 319.495 42.9755L193.961 115.5L319.495 188.024C325.686 191.601 333.314 191.601 339.505 188.024L465.039 115.5ZM359.515 8.34015C340.943 -2.3891 318.057 -2.3891 299.485 8.34015L114 115.5L299.485 222.66C318.057 233.389 340.943 233.389 359.515 222.66L545 115.5L359.515 8.34015Z",fill:"#000"}),e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M520.34 209.498L394.765 281.952C388.572 285.524 384.758 292.131 384.76 299.28L384.801 444.258L510.376 371.805C516.568 368.232 520.383 361.625 520.381 354.476L520.34 209.498ZM374.775 247.305C356.197 258.024 344.754 277.844 344.76 299.292L344.82 513.507L530.366 406.452C548.944 395.733 560.387 375.913 560.381 354.465L560.32 140.25L374.775 247.305Z",fill:"#000"}),e.jsx("path",{opacity:"0.5",fillRule:"evenodd",clipRule:"evenodd",d:"M275.34 444.259L275.381 299.281C275.383 292.131 271.568 285.525 265.376 281.952L139.801 209.498L139.76 354.476C139.758 361.625 143.572 368.232 149.765 371.805L275.34 444.259ZM315.381 299.292C315.387 277.844 303.944 258.024 285.366 247.305L99.8202 140.25L99.7599 354.465C99.7538 375.913 111.197 395.733 129.775 406.452L315.32 513.507L315.381 299.292Z",fill:"#000"})]}),{__:g}=wp.i18n,{registerBlockType:F}=wp.blocks,{useBlockProps:P,InnerBlocks:B}=wp.blockEditor;j()&&_.noConflict();T();const O=async()=>{let l=[{value:null,label:g("--Select---","acpt"),group:"all"}];return L().then(n=>{n.map(t=>{const c=t.records,s=t.belongsTo,o=t.find?t.find:null,a=(i,r,d,f=null)=>({group:i,value:o+"_"+d.db_name,label:"["+o+"] - "+d.ui_name,box:r.name,field:d.name,type:d.type,belongsTo:s,find:o,relations:null,parent_field:null,blocks:[],children:[]});c.length>0&&c.map(i=>{i.boxes.length>0&&i.boxes.map(r=>{r.fields&&r.fields.map(d=>{l.push({label:"["+o+"] - "+d.ui_name,group:d.group,value:JSON.stringify(a(i.name,r,d))})})})})})}),l},M=l=>{document.metaFields=l,wp.blocks.updateCategory("advanced-custom-post-type-blocks",{icon:S}),F("advanced-custom-post-type/basic-block",{apiVersion:3,title:g("ACPT Basic fields","acpt"),description:g("Include an ACPT basic field.","acpt"),icon:"block-default",category:"advanced-custom-post-type-blocks",textdomain:"advanced-custom-post-type",usesContext:["postId"],supports:{color:{gradients:!0},typography:{fontSize:!0},spacing:{padding:!0,margin:!0}},attributes:{postId:{type:"integer",default:1e17},field:{type:"string",default:null},gradient:{type:"string",default:null},backgroundColor:{type:"string",default:null},textColor:{type:"string",default:null},style:{type:"object",default:{}},display:{type:"string",default:null},color:{type:"string",default:null},fontSize:{type:"string",default:null},target:{type:"string",default:null},width:{type:"string",default:null},height:{type:"string",default:null},uomFormatDecimalPoints:{type:"string",default:null},uomFormatDecimalSeparator:{type:"string",default:null},uomFormatThousandsSeparator:{type:"string",default:null},uomFormat:{type:"string",default:null},uomPosition:{type:"string",default:null},dateFormat:{type:"string",default:null},timeFormat:{type:"string",default:null},align:{type:"string",default:"left"},zoom:{type:"integer",default:14},gap:{type:"integer",default:20},elements:{type:"integer",default:3},border:{type:"object",default:{}},borderRadius:{type:"object",default:{}},padding:{type:"object",default:{}}},edit:k,save:n=>{const t=P.save();return e.jsx("div",{...t,children:n.attributes.content})}})};O().then(l=>{l.length>0&&M(l)});
