import"./vendor-BwziPlmK.js";import{w as r}from"./index-DIgvZvNa.js";const s=["attachment","attachment_id","author","author_name","calendar","cat","category","category__and","category__in","category__not_in","category_name","comments_per_page","comments_popup","custom","customize_messenger_channel","customized","cpage","day","debug","embed","error","exact","feed","fields","hour","link_category","m","minute","monthnum","more","name","nav_menu","nonce","nopaging","offset","order","orderby","p","page","page_id","paged","pagename","pb","perm","post","post__in","post__not_in","post_format","post_mime_type","post_status","post_tag","post_type","posts","posts_per_archive_page","posts_per_page","preview","robots","s","search","second","sentence","showposts","static","status","subpost","subpost_id","tag","tag__and","tag__in","tag__not_in","tag_id","tag_slug__and","tag_slug__in","taxonomy","tb","term","terms","theme","title","type","types","w","withcomments","withoutcomments","year"],i=e=>e.match(/^[0-9a-zA-Z_-]+$/g)===null?"Only alphanumeric characters allowed":!0,l=e=>{const t=e.length;if(t>20)return"Max post type name lenght is 20";const a=e.match(/[a-z0-9_-]/g);return a===null||t!==a.length?"Allowed characters: [Lowercase alphanumeric characters, dashes, and underscores]":!0},m=async e=>{const t=e.length;if(t>20)return"Max post type name lenght is 20";const a=e.match(/[a-z0-9_-]/g);return a===null||t!==a.length?"Allowed characters: [Lowercase alphanumeric characters, dashes, and underscores]":(await r("checkPostTypeNameAction",{postType:e})).exists===!0?e+" post type already exists.":!0},h=async e=>{const t=e.length;if(t>32)return"Max post type name lenght is 32";if(s.includes(e))return'Slug must not collide with any reserved term. Please see the <a href="https://developer.wordpress.org/reference/functions/register_taxonomy/#reserved-terms" target="_blank">official docs</a> for more info';const a=e.match(/[a-z0-9_-]/g);return a===null||t!==a.length?"Allowed characters: [Lowercase alphanumeric characters, dashes, and underscores]":!0},u=async e=>{const t=e.length;if(t>32)return"Max post type name lenght is 32";if(s.includes(e))return'Slug must not collide with any reserved term. Please see the <a href="https://developer.wordpress.org/reference/functions/register_taxonomy/#reserved-terms" target="_blank">official docs</a> for more info';const a=e.match(/[a-z0-9_-]/g);return a===null||t!==a.length?"Allowed characters: [Lowercase alphanumeric characters, dashes, and underscores]":(await r("checkTaxonomySlugAction",{slug:e})).exists===!0?e+" taxonomy already exists.":!0},p=e=>{if(e.match(/^[a-z]/)===null)return"The string needs to start with a letter.";if(e.match(/^[0-9a-zA-Z]+$/)===null)return"The string needs to be alphanumeric (camelcase)."};export{m as a,h as b,u as c,i as d,l as i,p as v};
