import{j as r,u as a}from"./fields-B4O9Q4Yk.js";import"./vendor-BwziPlmK.js";import{P as o}from"./index-DIgvZvNa.js";const p=({visibility:s})=>{let e=[];return s.includes("show_if_simple")&&e.push("Show in simple products"),s.includes("show_if_variable")&&e.push("Show in variable products"),s.includes("show_if_grouped")&&e.push("Show in grouped products"),s.includes("show_if_external")&&e.push("Show in external products"),s.includes("hide_if_virtual")&&e.push("Hide in virtual products"),s.includes("hide_if_external")&&e.push("Hide in external products"),r.jsx("div",{className:"max-w-400 flex-wrap i-flex-center s-8",children:e.map(i=>r.jsx("span",{className:"acpt-badge",children:r.jsx("span",{className:"label",children:a(i)})}))})};p.propTypes={visibility:o.array.isRequired};export{p as W};
