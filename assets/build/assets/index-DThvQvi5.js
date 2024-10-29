import{j as t,u as e,s as Z}from"./fields-B4O9Q4Yk.js";import{a as b,R as I,d as W,u as V}from"./vendor-BwziPlmK.js";import{P as n,I as ee,B as R,s as P,a as E,e as te,u as se,w as ie,m as G,b as ae,L as re,o as le,r as ne}from"./index-DIgvZvNa.js";import{S as L,a as oe}from"./StepsHeader-DtZkMRXM.js";import{I as S}from"./Input-ChkMYR6a.js";import{g as ue,b as D}from"./index.esm-Czmjla35.js";import{L as F,s as pe,n as O}from"./Layout-Cn7fGwLD.js";import{C as M,a as m}from"./CardRow-CjwXcCAq.js";import{i as ce,a as de,v as U}from"./validation-CP_fiPHK.js";import{M as he}from"./index-D2c1mKCA.js";import{E as me}from"./index-_Wru927e.js";import{C as _e}from"./Checkbox-DDYcq2tg.js";import{p as fe}from"./postLabels-CcFvIocl.js";import{T as w}from"./Toggle-BxQlEymb.js";import"./Select-VZ2U2AxS.js";import{I as ge}from"./InputHidden-CK3-4WAk.js";import{P as be}from"./index-DRsY62G1.js";const Q=({icon:v,isSelected:f,callback:j})=>t.jsx("div",{title:v,className:`icon ${f?"selected":""}`,onClick:()=>{j(v)},children:t.jsx(ee,{icon:v,width:"24px"})});Q.propTypes={icon:n.string.isRequired,isSelected:n.bool,callback:n.func};const Y=({type:v,defaultIcon:f=null,callback:j})=>{const[_,x]=b.useState([]),y="https://api.iconify.design/",d=r=>{fetch(`${y}search?query=${r}&prefix=dashicons&limit=96`).then(a=>a.json()).then(a=>{x(a.icons)})},p=()=>{fetch(`${y}collection?prefix=dashicons`).then(r=>r.json()).then(r=>{let a=[];r.uncategorized.map(i=>{a.push(`dashicons-${i}`)}),x(a)})},l=()=>{if(!wp||!wp.media){alert(e("The media gallery is not available. You must admin_enqueue this function: wp_enqueue_media()"));return}const r=wp.media({title:e("Upload an Image"),library:{type:["image"]},multiple:!1});r.on("select",function(a){const o=r.state().get("selection").first().toJSON().url;j(o)}),r.open()};return b.useEffect(()=>{p()},[]),v==="image"?t.jsxs(I.Fragment,{children:[f&&t.jsx("div",{className:"fit-content mt-8 mb-8 p-8 with-border b-rounded",children:t.jsx("img",{src:f,alt:"",width:128})}),t.jsx("a",{href:"#",className:"mt-1 acpt-btn acpt-btn-primary-o acpt-btn-block",onClick:r=>{r.preventDefault(),r.stopPropagation(),l()},children:e("Upload an Image")})]}):t.jsxs(I.Fragment,{children:[t.jsx("div",{className:"form-group",children:t.jsx("input",{type:"text",className:"form-control",placeholder:e("Type at least 3 characters to start searching."),onChange:async r=>{const a=r.currentTarget.value;a.length===0&&p(),a.length>=3&&d(a)}})}),_.length>0&&t.jsx("div",{className:"mt-24 icon-picker-wrapper","data-cy":"icon-picker-wrapper",children:_.map(r=>t.jsx(Q,{isSelected:f===r,icon:r,callback:j}))})]})};Y.propTypes={type:n.string.isRequired,defaultIcon:n.string,callback:n.func};const B=({callback:v,id:f,validate:j,register:_,description:x,defaultValue:y,errors:d})=>{const p=ue(d,f),[l,r]=b.useState(y),[a,i]=b.useState(!1),[o,s]=b.useState(null),h=u=>{r(u),v(u),i(!1)};return b.useEffect(()=>{y!==null&&r(y)},[y]),t.jsxs(I.Fragment,{children:[a&&t.jsxs(he,{title:e("Choose icon"),visible:a,testId:f,children:[t.jsxs("div",{className:"text-left",children:[t.jsx("label",{className:"form-label",htmlFor:"icon-picker",children:e("Select icon type from the list")}),t.jsxs("select",{"data-cy":"select-icon",onChange:u=>{u.preventDefault(),u.stopPropagation(),s(u.currentTarget.value)},defaultValue:o,className:"form-control",id:"icon-picker",children:[t.jsx("option",{value:"",children:e("--Select--")}),t.jsx("option",{value:"dashicon",children:e("Select a Dashicon")}),t.jsx("option",{value:"image",children:e("Upload an icon image")})]})]}),o&&t.jsx("div",{className:"mt-8",children:t.jsx(Y,{type:o,defaultIcon:l,callback:h})})]}),t.jsxs("div",{className:"flex-center s-8",children:[l&&t.jsx(me,{value:l}),t.jsx("input",{id:f,name:f,type:"text","data-cy":"input-icon",value:l||"",className:"hidden",..._(f,j)}),t.jsx(R,{onClick:u=>{u.preventDefault(),u.stopPropagation(),i(!a)},style:P.SECONDARY,size:"sm",testId:f,children:e("Choose icon")})]}),x&&t.jsx("div",{className:"form-description",children:x}),p&&t.jsx("div",{"data-cy":"input-error-icon",className:"invalid-feedback",children:p.message})]})};B.propTypes={id:n.string.isRequired,defaultValue:n.string,description:n.string,callback:n.func,validate:n.func,register:n.func.isRequired,errors:n.array.isRequired};const H=({title:v,crumbs:f,headings:j,stepActive:_,setStepActive:x,handleSubmit:y,edit:d=!1,formValues:p})=>{const{data:l}=E(c=>c.fetchCustomPostTypes),[r,a]=b.useState(null),[i,o]=b.useState({title:!0,editor:!0,thumbnail:!0,excerpt:!0,author:!1,trackbacks:!1,custom_fields:!1,comments:!1,revisions:!1,page_attributes:!1,post_formats:!1}),{register:s,handleSubmit:h,setValue:u,formState:{errors:g}}=D({mode:"all"});b.useEffect(()=>{p&&p[1]&&(a(p[1].icon),o({title:p[1].support_0,editor:p[1].support_1,thumbnail:p[1].support_2,excerpt:p[1].support_3,author:p[1].support_4,trackbacks:p[1].support_5,custom_fields:p[1].support_6,comments:p[1].support_7,revisions:p[1].support_8,page_attributes:p[1].support_9,post_formats:p[1].support_10}),u("post_name",p[1].post_name),u("singular_label",p[1].singular_label),u("plural_label",p[1].plural_label),u("icon",p[1].icon),u("support_0",p[1].support_0),u("support_1",p[1].support_1),u("support_2",p[1].support_2),u("support_3",p[1].support_3),u("support_4",p[1].support_4),u("support_5",p[1].support_5),u("support_6",p[1].support_6),u("support_7",p[1].support_7),u("support_8",p[1].support_8),u("support_9",p[1].support_9),u("support_10",p[1].support_10))},[p]),b.useEffect(()=>{l.length>0&&(a(l[0].icon),o({title:l[0].supports.includes("title"),editor:l[0].supports.includes("editor"),thumbnail:l[0].supports.includes("thumbnail"),excerpt:l[0].supports.includes("excerpt"),author:l[0].supports.includes("author"),trackbacks:l[0].supports.includes("trackbacks"),custom_fields:l[0].supports.includes("custom-fields"),comments:l[0].supports.includes("comments"),revisions:l[0].supports.includes("revisions"),page_attributes:l[0].supports.includes("page-attributes"),post_formats:l[0].supports.includes("post-formats")}),u("post_name",l[0].name),u("singular_label",l[0].singular),u("plural_label",l[0].plural),u("icon",l[0].icon),u("support_0",l[0].supports.includes("title")?"title":!1),u("support_1",l[0].supports.includes("editor")?"editor":!1),u("support_2",l[0].supports.includes("thumbnail")?"thumbnail":!1),u("support_3",l[0].supports.includes("excerpt")?"excerpt":!1),u("support_4",l[0].supports.includes("author")?"author":!1),u("support_5",l[0].supports.includes("trackbacks")?"trackbacks":!1),u("support_6",l[0].supports.includes("custom-fields")?"custom-fields":!1),u("support_7",l[0].supports.includes("comments")?"comments":!1),u("support_8",l[0].supports.includes("revisions")?"revisions":!1),u("support_9",l[0].supports.includes("page-attributes")?"page-attributes":!1),u("support_10",l[0].supports.includes("post-formats")?"post-formats":!1))},[l]);const q=c=>{u("post_name",Z(c,20))},k=c=>{y(c,1),x(1)},T=[t.jsx(R,{testId:"next-step",style:P.SECONDARY,children:e("Next Step")})];return t.jsx("form",{onSubmit:h(k),children:t.jsx(F,{crumbs:f,title:v,actions:T,children:t.jsxs(M,{style:"with-shadow",children:[t.jsx(L,{stepActive:_,headings:j}),t.jsx(m,{label:e("Post name"),value:t.jsx(S,{id:"post_name",placeholder:e("Post name"),readOnly:l.length>0,description:e("The post name/slug. Used for various queries."),onChangeCapture:c=>q(c.currentTarget.value),register:s,errors:g,isRequired:!0,validate:{validate:d?ce:de,required:e("This field is mandatory")}})}),t.jsx(m,{label:e("Singular label"),value:t.jsx(S,{id:"singular_label",placeholder:e("(e.g. Movie)"),defaultValue:l.length>0?l[0].singular:null,description:e("Used when a singular label is needed"),register:s,errors:g,isRequired:!0,validate:{required:e("This field is mandatory")}})}),t.jsx(m,{label:e("Plural label"),value:t.jsx(S,{id:"plural_label",placeholder:e("(e.g. Movies)"),defaultValue:l.length>0?l[0].plural:null,description:e("Used for the post type admin menu item"),register:s,errors:g,isRequired:!0,validate:{required:e("This field is mandatory")}})}),t.jsx(m,{label:e("Icon"),value:t.jsx(B,{id:"icon",callback:c=>{u("icon",c)},defaultValue:r,register:s,errors:g,description:e("Displayed on the sidebar of the admin panel"),validate:{required:e("This field is mandatory")}})}),t.jsx(m,{label:e("Support"),wizard:`${e("Add support for various available post edit features. For more info")} <a target='_blank' href='https://developer.wordpress.org/reference/functions/register_post_type/#supports'>${e("see here")}<a/>.`,value:t.jsx(_e,{register:s,errors:g,id:"support",values:{title:{value:"title",checked:i.title},editor:{value:"editor",checked:i.editor},thumbnail:{value:"thumbnail",checked:i.thumbnail},excerpt:{value:"excerpt",checked:i.excerpt},author:{value:"author",checked:i.author},trackbacks:{value:"trackbacks",checked:i.trackbacks},"custom-fields":{value:"custom-fields",checked:i.custom_fields},comments:{value:"comments",checked:i.comments},revisions:{value:"revisions",checked:i.revisions},"page-attributes":{value:"page-attributes",checked:i.page_attributes},"post-formats":{value:"post-formats",checked:i.post_formats}}})})]})})})};H.propTypes={headings:n.arrayOf(n.shape({label:n.string.isRequired,description:n.string.isRequired})).isRequired,title:n.string.isRequired,crumbs:n.arrayOf(R).isRequired,stepActive:n.number.isRequired,setStepActive:n.func.isRequired,handleSubmit:n.func.isRequired,formValues:n.object.isRequired,edit:n.bool};const z=({title:v,crumbs:f,headings:j,stepActive:_,setStepActive:x,handleSubmit:y,formValues:d,edit:p})=>{const{data:l}=E(g=>g.fetchCustomPostTypes);let r={};l.length>0&&(r=l[0].labels);const{register:a,handleSubmit:i,formState:{errors:o},setValue:s}=D({mode:"all"});b.useEffect(()=>{!p&&d&&d[1]&&(s("menu_name",d[1].singular_label),s("all_items",`${e("All {{r}}",{r:d[1].singular_label})}`),s("add_new",`${e("Add")} ${d[1].singular_label}`),s("add_new_item",`${e("Add new {{r}}",{r:d[1].singular_label})}`),s("edit_item",`${e("Edit")} ${d[1].singular_label}`),s("new_item",`${e("New")} ${d[1].singular_label}`),s("view_item",`${e("View")} ${d[1].singular_label}`),s("view_items",`${e("View")} ${d[1].plural_label}`),s("search_item",`${e("Search")} ${d[1].plural_label}`),s("not_found",e("No {{r}} found",{r:d[1].singular_label})),s("not_found_in_trash",e("No {{r}} found",{r:d[1].singular_label})),s("parent_item_colon",e("Parent item")),s("featured_image",e("Featured image")),s("set_featured_image",e("Set featured image")),s("remove_featured_image",e("Remove featured image")),s("use_featured_image",e("Use featured image")),s("archives",e("Archives")),s("insert_into_item",e("Insert")),s("uploaded_to_this_item",e("Upload")),s("filter_items_list",e("Filter {{r}} list",{r:d[1].plural_label})),s("items_list_navigation",e("Navigation list {{r}}",{r:d[1].plural_label})),s("items_list",e("List {{r}}",{r:d[1].plural_label})),s("filter_by_date",e("Filter by date")),s("item_published",e("{{r}} published",{r:d[1].singular_label})),s("item_published_privately",e("{{r}} published privately",{r:d[1].singular_label})),s("item_reverted_to_draft",e("{{r}} reverted to draft",{r:d[1].singular_label})),s("item_scheduled",e("{{r}} scheduled",{r:d[1].singular_label})),s("item_updated",e("{{r}} updated",{r:d[1].singular_label})))},[d]),b.useEffect(()=>{p&&l.length>0&&(s("menu_name",r.menu_name),s("all_items",r.all_items),s("add_new",r.add_new),s("add_new_item",r.add_new_item),s("edit_item",r.edit_item),s("new_item",r.new_item),s("view_item",r.view_item),s("view_items",r.view_items),s("search_item",r.search_item),s("not_found",r.not_found),s("not_found_in_trash",r.not_found_in_trash),s("parent_item_colon",r.parent_item_colon),s("featured_image",r.featured_image),s("set_featured_image",r.set_featured_image),s("remove_featured_image",r.remove_featured_image),s("use_featured_image",r.use_featured_image),s("archives",r.archives),s("insert_into_item",r.insert_into_item),s("uploaded_to_this_item",r.uploaded_to_this_item),s("filter_items_list",r.filter_items_list),s("items_list_navigation",r.items_list_navigation),s("items_list",r.items_list),s("filter_by_date",r.filter_by_date),s("item_published",r.item_published),s("item_published_privately",r.item_published_privately),s("item_reverted_to_draft",r.item_reverted_to_draft),s("item_scheduled",r.item_scheduled),s("item_updated",r.item_updated))},[l]);const h=g=>{y(g,2),x(2)},u=[t.jsx(R,{testId:"prev-step",type:"button",onClick:()=>x(0),style:P.SECONDARY,children:e("Previous Step")}),t.jsx(R,{testId:"next-step",style:P.SECONDARY,children:e("Next Step")})];return t.jsx("form",{onSubmit:i(h),children:t.jsx(F,{crumbs:f,title:v,actions:u,children:t.jsxs(M,{style:"with-shadow",children:[t.jsx(L,{stepActive:_,headings:j}),fe.map(g=>t.jsx(m,{label:g.label,value:t.jsx(S,{id:g.id,register:a,description:g.description,errors:o,isRequired:!0,validate:{required:e("This field is mandatory")}})}))]})})})};z.propTypes={headings:n.arrayOf(n.shape({label:n.string.isRequired,description:n.string.isRequired})).isRequired,title:n.string.isRequired,crumbs:n.arrayOf(R).isRequired,stepActive:n.number.isRequired,setStepActive:n.func.isRequired,handleSubmit:n.func.isRequired,formValues:n.object.isRequired,edit:n.bool.isRequired};const J=({id:v,register:f,setValue:j,defaultValue:_,description:x})=>{const y=b.useRef(null),d=b.useRef(null),p=()=>{const a=y.current.value,i=d.current.value;if(a&&i){const o=a==="after"?parseInt(i)+1:parseInt(i)-1;j(v,o)}},l=()=>{const a=o=>{const s=o.replace(/(<([^>]+)>)/gi,"");return o.length!==s.length?o.split(" ")[0]:o};let i=[];for(const[o,s]of Object.entries(document.globals.menu))i.push({label:s[0]!==""?a(s[0]):"----",value:o});return i},r=()=>{if(!_)return{position:null,menu:null};for(const[o,s]of Object.entries(document.globals.menu)){if(parseInt(o)+1===_)return{position:"after",menu:o};if(parseInt(o)-1===_)return{position:"before",menu:o}}const i=Object.keys(document.globals.menu).findIndex(o=>parseInt(o)===parseInt(_));return Object.entries(document.globals.menu)[i+1]?{position:"before",menu:Object.entries(document.globals.menu)[i+1][0]}:Object.entries(document.globals.menu)[i-1]?{position:"after",menu:Object.entries(document.globals.menu)[i-1][0]}:{position:null,menu:null}};return t.jsxs(I.Fragment,{children:[t.jsx(ge,{register:f,id:v,value:_}),t.jsxs("div",{className:"i-flex-center s-8",children:[t.jsx("div",{className:"acpt-select",children:t.jsxs("select",{ref:y,"data-cy":`position-${v}`,className:"form-control",onChangeCapture:p,defaultValue:r().position,children:[t.jsx("option",{value:"",children:e("Select")}),t.jsx("option",{value:"after",children:e("After")}),t.jsx("option",{value:"before",children:e("Before")})]})}),t.jsx("div",{className:"acpt-select",children:t.jsxs("select",{ref:d,"data-cy":`menu-${v}`,className:"form-control",onChangeCapture:p,defaultValue:r().menu,children:[t.jsx("option",{value:"",children:e("Select")}),l().map(a=>t.jsx("option",{value:a.value,children:a.label},a.value))]})})]}),x&&t.jsx("div",{className:"form-description",children:x})]})};J.propTypes={id:n.string.isRequired,defaultValue:n.number,description:n.string,setValue:n.func.isRequired,register:n.func.isRequired};const K=({title:v,crumbs:f,headings:j,stepActive:_,setStepActive:x,handleSubmit:y,formValues:d,isWPGraphQLActive:p=!1,loading:l=!1,edit:r=!1})=>{const{data:a}=E(N=>N.fetchCustomPostTypes);let i={};a.length>0&&(i=a[0].settings);const{register:o,handleSubmit:s,formState:{errors:h,isValid:u},setValue:g,watch:q}=D({mode:"all",defaultValues:{public:a.length>0?i.public:null,publicly_queryable:a.length>0?i.publicly_queryable:null,show_ui:a.length>0?i.show_ui:null,show_in_menu:a.length>0?i.show_in_menu:null,show_in_nav_menus:a.length>0?i.show_in_nav_menus:null,show_in_admin_bar:a.length>0?i.show_in_admin_bar:null,show_in_rest:a.length>0?i.show_in_rest:null,rest_base:a.length>0?i.rest_base:null,menu_position:a.length>0?i.menu_position:null,capability_type:a.length>0?i.capability_type:"post",has_archive:a.length>0?i.has_archive:null,rewrite:a.length>0?i.rewrite:null,custom_rewrite:a.length>0?i.custom_rewrite:null,query_var:a.length>0?i.query_var:null,custom_query_var:a.length>0?i.custom_query_var:null}});b.useEffect(()=>{d&&!te(d)&&(g("show_in_graphql",a.length>0?i.show_in_graphql:!0),g("graphql_single_name",a.length>0?i.graphql_single_name:d[1].singular_label),g("graphql_plural_name",a.length>0?i.graphql_plural_name:d[1].plural_label))},[d]);const k=q("show_in_graphql");q("graphql_single_name");const T=q("graphql_plural_name"),c=N=>{if(N===T)return e("Single name MUST be different from plural name")},$=q("rewrite"),C=q("query_var"),A=N=>{y(N,3)},X=[t.jsx(R,{testId:"prev-step",type:"button",onClick:()=>x(1),style:P.SECONDARY,children:e("Previous Step")}),t.jsx(R,{testId:"save",style:P.PRIMARY,disabled:l,children:e("Save")})];return t.jsx("form",{onSubmit:s(A),children:t.jsx(F,{crumbs:f,title:v,actions:X,children:t.jsxs(M,{style:"with-shadow",children:[t.jsx(L,{stepActive:_,headings:j}),p&&t.jsxs(I.Fragment,{children:[t.jsx(m,{label:e("Show in GraphQL"),value:t.jsx(w,{id:"show_in_graphql",description:e("Show the custom post type in WPGraphQL."),defaultValue:!0,register:o,errors:h})}),t.jsx(m,{label:e("GraphQL single name"),value:t.jsx(S,{id:"graphql_single_name",register:o,placeholder:e("Ex. movie"),description:e("Camel case string with no punctuation or spaces. Needs to start with a letter (not a number). Important to be different than the plural name."),errors:h,isRequired:k,validate:{validate:{validWPGraphQLName:U,handleGraphQLSingleNameChange:c}}})}),t.jsx(m,{label:e("GraphQL plural name"),value:t.jsx(S,{id:"graphql_plural_name",register:o,placeholder:e("Ex. movies"),description:e("Camel case string with no punctuation or spaces. Needs to start with a letter (not a number). Important to be different than the single name."),errors:h,isRequired:k,validate:{validate:{validWPGraphQLName:U,handleGraphQLSingleNameChange:c}}})})]}),t.jsx(m,{label:e("Hierarchical"),value:t.jsx(w,{id:"hierarchical",description:e("Whether the post type is hierarchical (e.g. page). Default false."),defaultValue:a.length>0?i.hierarchical:!1,register:o,errors:h})}),t.jsx(m,{label:e("Is Public"),value:t.jsx(w,{id:"public",description:e("Whether a post type is intended for use publicly either via the admin interface or by front-end users."),defaultValue:a.length>0?i.public:!0,register:o,errors:h})}),t.jsx(m,{label:e("Publicly queryable"),value:t.jsx(w,{id:"publicly_queryable",description:e("Whether queries can be performed on the front end for the post type as part of parse_request()."),defaultValue:a.length>0?i.publicly_queryable:!0,register:o,errors:h})}),t.jsx(m,{label:e("Show in UI"),value:t.jsx(w,{id:"show_ui",description:e("Whether to generate and allow a UI for managing this post type in the admin. Default is value of $public."),defaultValue:a.length>0?i.show_ui:!0,register:o,errors:h})}),t.jsx(m,{label:e("Show in menu"),value:t.jsx(w,{id:"show_in_menu",description:e("Where to show the post type in the admin menu. To work, $show_ui must be true. If true, the post type is shown in its own top level menu. If false, no menu is shown."),defaultValue:a.length>0?i.show_in_menu:!0,register:o,errors:h})}),t.jsx(m,{label:e("Show in nav menus"),value:t.jsx(w,{id:"show_in_nav_menus",description:e("Makes this post type available for selection in navigation menus. Default is value of $public."),defaultValue:a.length>0?i.show_in_nav_menus:!0,register:o,errors:h})}),t.jsx(m,{label:e("Show in admin bar"),value:t.jsx(w,{id:"show_in_admin_bar",description:e("Makes this post type available via the admin bar. Default is value of $show_in_menu."),defaultValue:a.length>0?i.show_in_admin_bar:!0,register:o,errors:h})}),t.jsx(m,{label:e("Show in REST API"),value:t.jsx(w,{id:"show_in_rest",description:e("Whether to include the post type in the REST API. Set this to true for the post type to be available in the block editor. SET TRUE TO ENABLE GUTEMBERG EDITOR."),defaultValue:a.length>0?i.show_in_rest:!0,register:o,errors:h})}),t.jsx(m,{label:e("REST API base slug"),value:t.jsx(S,{id:"rest_base",placeholder:e("REST API base slug"),description:e("To change the base url of REST API route. Default is $post_type."),validate:{maxLength:{value:255,message:e("max length is 255")}},register:o,errors:h})}),t.jsx(m,{label:e("Menu position"),value:t.jsx(J,{id:"menu_position",defaultValue:a.length>0?i.menu_position:null,description:e("The position in the menu order the post type should appear. To work, $show_in_menu must be true. Default null (at the bottom)."),register:o,setValue:g})}),t.jsx(m,{label:e("Capability type"),value:t.jsx(S,{id:"capability_type",defaultValue:"post",description:e("The string to use to build the read, edit, and delete capabilities. May be passed as an array to allow for alternative plurals when using this argument as a base to construct the capabilities, e.g. array('story', 'stories'). Default 'post'."),validate:{maxLength:{value:255,message:"max length is 255"}},register:o,errors:h})}),t.jsx(m,{label:e("Has archive"),value:t.jsx(w,{id:"has_archive",description:e("Whether there should be post type archives, or if a string, the archive slug to use. Will generate the proper rewrite rules if $rewrite is enabled."),defaultValue:a.length>0?i.has_archive:!0,register:o,errors:h})}),t.jsx(m,{label:e("Rewrite"),value:t.jsx(w,{id:"rewrite",description:e("Triggers the handling of rewrites for this post type. To prevent rewrite, set to false. Defaults to true, using $post_type as slug. To specify rewrite rules, an array can be passed with any of these keys:"),defaultValue:a.length>0?i.rewrite:!0,register:o,errors:h})}),$&&t.jsx(m,{label:e("Custom rewrite rules"),value:t.jsx(S,{id:"custom_rewrite",placeholder:e("Custom rewrite rules"),description:e("Custom post type slug to use instead of default."),validate:{maxLength:{value:255,message:e("max length is 255")}},register:o,errors:h})}),t.jsx(m,{label:e("Query var"),value:t.jsx(w,{id:"query_var",description:e("Sets the query_var key for this post type. Defaults to  key. If false, a post type cannot be loaded at ?{query_var}={post_slug}. If specified as a string, the query {post_slug} will be valid."),defaultValue:a.length>0?i.query_var:!0,register:o,errors:h})}),C&&t.jsx(m,{label:e("Custom query var"),value:t.jsx(S,{id:"custom_query_var",placeholder:e("Custom query var"),description:e("Custom query var slug to use instead of default."),validate:{maxLength:{value:255,message:e("min length is")+" 255"}},register:o,errors:h})})]})})})};K.propTypes={headings:n.arrayOf(n.shape({label:n.string.isRequired,description:n.string.isRequired})).isRequired,title:n.string.isRequired,crumbs:n.arrayOf(R).isRequired,stepActive:n.number.isRequired,setStepActive:n.func.isRequired,handleSubmit:n.func.isRequired,formValues:n.object.isRequired,isWPGraphQLActive:n.bool,loading:n.bool,edit:n.bool};const Oe=({})=>{const v=se(),{loading:f}=E(c=>c.saveCustomPostType),{loading:j}=E(c=>c.fetchCustomPostTypes),{postType:_}=W(),{step:x}=W(),[y,d]=b.useState(!1),[p,l]=b.useState(!1),[r,a]=b.useState(x?parseInt(x):0),[i,o]=b.useState({}),[s,h]=b.useState(!1),u=V();(_==="page"||_==="post")&&u("/"),b.useEffect(()=>{ie("isWPGraphQLActiveAction",{}).then(c=>{h(c.status)}).catch(c=>{console.error(c.message)})},[]),b.useEffect(()=>{_?(G(e("Edit Custom Post Type")),d(!0),v(ae({postType:_})).then(c=>{c.payload.length!==1?l(!0):o({1:{icon:c.payload[0].icon,plural_label:c.payload[0].plural,post_name:c.payload[0].name,singular_label:c.payload[0].singular,support_0:c.payload[0].supports.includes("title")?"title":!1,support_1:c.payload[0].supports.includes("editor")?"editor":!1,support_2:c.payload[0].supports.includes("thumbnail")?"thumbnail":!1,support_3:c.payload[0].supports.includes("excerpt")?"excerpt":!1,support_4:c.payload[0].supports.includes("author")?"author":!1,support_5:c.payload[0].supports.includes("trackbacks")?"trackbacks":!1,support_6:c.payload[0].supports.includes("custom-fields")?"custom-fields":!1,support_7:c.payload[0].supports.includes("comments")?"comments":!1,support_8:c.payload[0].supports.includes("revisions")?"revisions":!1,support_9:c.payload[0].supports.includes("page-attributes")?"page-attributes":!1,support_10:c.payload[0].supports.includes("post-formats")?"post-formats":!1},2:c.payload[0].labels,3:c.payload[0].settings})}).catch(c=>{l(!0),console.error(c)})):G(e("Register new Post Type"))},[]);const g=_?e("Edit Custom Post Type"):e("Create new Custom Post Type"),q=[{label:e("Registered Custom Post Types"),link:"/"},{label:_?e("Edit Custom Post Type"):e("Create new Custom Post Type")}],k=[{label:e("Basic"),description:e("Minimum configuration")},{label:e("Labels"),description:e("Additional labels")},{label:e("Settings"),description:e("Other settings")}],T=(c,$)=>{i[$]=c,o(i),pe(),r===2&&v(le(i)).then(C=>{const A=C.payload;A.success?(u("/"),O.success(e("Custom post type successfully saved. The browser will refresh after 5 seconds.")),ne(5e3)):O.error(A.error)}).catch(C=>{O.error(C)})};return y&&j?t.jsx(re,{}):p?t.jsx(be,{}):t.jsx(I.Fragment,{children:t.jsx(oe,{steps:[t.jsx(H,{edit:y,title:g,headings:k,crumbs:q,stepActive:r,setStepActive:a,handleSubmit:T,formValues:i}),t.jsx(z,{edit:y,title:g,headings:k,crumbs:q,stepActive:r,setStepActive:a,handleSubmit:T,formValues:i}),t.jsx(K,{edit:y,title:g,headings:k,crumbs:q,stepActive:r,setStepActive:a,handleSubmit:T,formValues:i,isWPGraphQLActive:s,loading:f})],activeStep:r})})};export{Oe as default};
