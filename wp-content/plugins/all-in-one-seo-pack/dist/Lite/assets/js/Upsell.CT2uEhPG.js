import{S as m}from"./Profile.M-HlXLzG.js";import{_ as u}from"./_plugin-vue_export-helper.BN1snXvA.js";import{v as o,o as r,c as h,k as _,l as a,C as c,t as l,B as g}from"./runtime-dom.esm-bundler.tPRhSV4q.js";import{f as v}from"./links.Byq_3x2e.js";import{C as y}from"./Index.Cf5ujj4F.js";import{R as $}from"./RequiredPlans.BaQ2NBS5.js";const S={components:{SvgDannieProfile:m},props:{src:String,size:{required:!0,type:Number}}},k=["src","width","height"];function x(n,p,t,i,e,d){const s=o("svg-dannie-profile");return t.src?(r(),h("img",{key:0,src:t.src,width:t.size,height:t.size,alt:"avatar",loading:"lazy",decoding:"async",class:"aioseo-user-avatar"},null,8,k)):(r(),_(s,{key:1,width:t.size,height:t.size,class:"aioseo-user-avatar aioseo-user-avatar--dannie"},null,8,["width","height"]))}const B=u(S,[["render",x],["__scopeId","data-v-4705aae0"]]),C={setup(){return{licenseStore:v()}},components:{Cta:y,RequiredPlans:$},props:{parentComponentContext:String},data(){return{strings:{ctaHeader:this.$t.sprintf(this.$t.__("SEO Revisions is a %1$s Feature",this.$td),"PRO"),ctaDescription:this.$t.__("Our powerful revisions feature provides a valuable record of SEO updates, allowing you to monitor the effectiveness of your SEO efforts and make informed decisions.",this.$td),ctaFeatures:[this.$t.__("Improved SEO strategy",this.$td),this.$t.__("Easy to manage revisions",this.$td),this.$t.__("Greater transparency and accountability",this.$td),this.$t.__("Historical record of optimization efforts",this.$td)],ctaButtonText:this.$t.__("Unlock SEO Revisions",this.$td)}}}};function U(n,p,t,i,e,d){const s=o("required-plans"),f=o("cta");return r(),_(f,{"cta-link":n.$links.getPricingUrl("seo-revisions","seo-revisions",t.parentComponentContext),"button-text":e.strings.ctaButtonText,"learn-more-link":n.$links.getUpsellUrl("seo-revisions",t.parentComponentContext,n.$isPro?"pricing":"liteUpgrade"),"feature-list":e.strings.ctaFeatures,"hide-bonus":!i.licenseStore.isUnlicensed},{"header-text":a(()=>[c(l(e.strings.ctaHeader),1)]),description:a(()=>[g(s,{"core-feature":["seo-revisions"]}),c(" "+l(e.strings.ctaDescription),1)]),_:1},8,["cta-link","button-text","learn-more-link","feature-list","hide-bonus"])}const P=u(C,[["render",U]]);export{P as S,B as U};