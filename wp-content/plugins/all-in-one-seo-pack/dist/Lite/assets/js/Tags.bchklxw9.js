import{d as m,s as _}from"./index.jlplx4ex.js";import{c as d}from"./postSlug.iva7u65b.js";import{g as x}from"./runtime-dom.esm-bundler.h3clfjuw.js";const E=({separator:l})=>{const o=x(l);return{parseTags:e=>{const n=m();return!e||!n.tags?e:(n.tags.forEach(a=>{if(a.id==="custom_field"){const t=new RegExp(`#${a.id}-([a-zA-Z0-9_-]+)`,"g"),s=e.match(t);s&&s.forEach(f=>{const u=new RegExp(`#${a.id}-([a-zA-Z0-9_-]+)`),c=f.match(u);c&&c[1]&&(e=e.replace(u,d(c[1])))});return}if(a.id==="tax_name"){const t=new RegExp(`#${a.id}-([a-zA-Z0-9_-]+)`,"g");e=e.replace(t,`[${a.name} - $1]`);return}const r=new RegExp(`#${a.id}(?![a-zA-Z0-9_])`,"g");a.id==="separator_sa"&&o.value!==void 0&&(e=e.replace(r,o.value));const p=e.match(r),i=n.liveTags[a.id]||a.value;p&&(e=e.replace(r,"%|%"+i))}),e=e.replace(/%\|%/g,""),_(e))},separator:o}};export{E as u};
