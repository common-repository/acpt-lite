import{j as r,r as $}from"./fields-B4O9Q4Yk.js";import{a as i,R as u}from"./vendor-BwziPlmK.js";import{P as p}from"./index-DIgvZvNa.js";const n=({title:c,children:l})=>r.jsx("div",{children:l});n.propTypes={title:p.string.isRequired};const T=({handleClick:c,defaultActiveTab:l=0,children:o})=>{const[t,b]=i.useState(l),s=$(),m=e=>{b(e),c&&c(e)};return i.useEffect(()=>{b(l)},[l]),r.jsx("div",{className:"acpt-tabs",id:`tabs-${s}`,children:o&&o.length>0&&r.jsxs(u.Fragment,{children:[r.jsx("ul",{role:"tablist",className:"tablist",children:o.map((e,a)=>e?r.jsx("li",{"data-cy":`tab-${s}-${a+1}`,id:`tab-${s}-${a+1}`,"aria-selected":t===a,"aria-controls":`tabpanel-${s}-${a+1}`,tabIndex:a+1,role:"tab",className:`acpt-accordion-tab ${t===a?"active":""}`,onClick:f=>m(a),children:e.props&&e.props.title?e.props.title:`Tab ${a+1}`},a):null)}),r.jsx("div",{"data-cy":`tabpanel-${s}-${t+1}`,id:`tabpanel-${s}-${t+1}`,className:"tab-panel",role:"tabpanel",tabIndex:t+1,"aria-labelledby":`tab-${s}-${t+1}`,children:o[t]})]})})};T.propTypes={handleClick:p.func,defaultActiveTab:p.number,children:p.arrayOf(n)};export{T,n as a};
