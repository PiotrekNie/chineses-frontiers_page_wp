import{j as A,u as v,f as S}from"./index.lqcu3hi3.js";import{u as y}from"./PostTypes.k189gg5t.js";import{A as C,T}from"./TitleDescription.ity9pdd4.js";import{C as D}from"./Card.nubn9etl.js";import{C as k}from"./Tabs.nyi4b4w1.js";import"./translations.e22mvhfh.js";import{c as i,F as x,J as P,v as c,o as s,k as p,l as a,a as l,G as B,t as w,C as m,q as O,T as j}from"./runtime-dom.esm-bundler.h3clfjuw.js";import{_ as L}from"./_plugin-vue_export-helper.oebm7xum.js";import{_ as u}from"./default-i18n.bz7purh4.js";import"./cleanForSlug.etvx808q.js";import"./constants.dnzd2kuo.js";import"./JsonValues.g6ep3o3z.js";import"./RadioToggle.cler7vn3.js";import"./RobotsMeta.mr4vep9v.js";import"./Checkbox.cv4w58s0.js";import"./Checkmark.d5kkjaf5.js";import"./Row.h4gujlzc.js";import"./SettingsRow.d9u0swi1.js";import"./Editor.i8px02kg.js";import"./isEqual.izz0yjhb.js";import"./_baseIsEqual.btyep0ht.js";import"./_getTag.k19irihw.js";import"./_baseClone.memmt1nf.js";import"./_arrayEach.n8ou32wp.js";import"./index.cw7tfyil.js";import"./Caret.g6s6s7gs.js";import"./Tags.lgcgntse.js";import"./GoogleSearchPreview.iw4vtoyb.js";import"./HtmlTagsEditor.b5rm37z5.js";import"./UnfilteredHtml.gvs5qb56.js";import"./Tooltip.i4md1nj9.js";import"./Slide.dop8j51m.js";import"./vue-router.eypfdvl5.js";import"./ProBadge.e32os6n3.js";import"./Information.djrr3pec.js";const h="all-in-one-seo-pack",F={setup(){const{getPostIconClass:e}=y();return{getPostIconClass:e,optionsStore:A(),rootStore:v(),settingsStore:S()}},components:{Advanced:C,CoreCard:D,CoreMainTabs:k,TitleDescription:T},data(){return{internalDebounce:null,tabs:[{slug:"title-description",name:u("Title & Description",h),access:"aioseo_search_appearance_settings",pro:!1},{slug:"advanced",name:u("Advanced",h),access:"aioseo_search_appearance_settings",pro:!1}],archives:[{label:"Author Archives",name:"author",singular:"Author",icon:"dashicons-admin-users"},{label:"Date Archives",name:"date",singular:"Date",icon:"dashicons-calendar-alt"},{label:"Search Page",name:"search",singular:"Search Page",icon:"dashicons-search"}]}},computed:{getArchives(){return this.archives.concat(this.rootStore.aioseo.postData.archives.map(e=>({label:`${e.label} Archives`,name:`${e.name}Archive`,icon:"dashicons-category",singular:e.singular,dynamic:!0})))}},methods:{processChangeTab(e,n){this.internalDebounce||(this.internalDebounce=!0,this.settingsStore.changeTab({slug:`${e}Archives`,value:n}),setTimeout(()=>{this.internalDebounce=!1},50))},getOptions(e){return e.dynamic?this.optionsStore.dynamicOptions.searchAppearance.archives[e.name.replace("Archive","")]:this.optionsStore.options.searchAppearance.archives[e.name]}}},I={class:"aioseo-search-appearance-archives"};function N(e,n,R,o,d,r){const _=c("core-main-tabs"),g=c("core-card");return s(),i("div",I,[(s(!0),i(x,null,P(r.getArchives,(t,f)=>(s(),p(g,{key:f,slug:`${t.name}Archives`},{header:a(()=>[l("div",{class:B(["icon dashicons",o.getPostIconClass(t.icon)])},null,2),l("div",null,w(t.label),1)]),tabs:a(()=>[m(_,{tabs:d.tabs,showSaveButton:!1,active:o.settingsStore.settings.internalTabs[`${t.name}Archives`],internal:"",onChanged:b=>r.processChangeTab(t.name,b)},null,8,["tabs","active","onChanged"])]),default:a(()=>[m(j,{name:"route-fade",mode:"out-in"},{default:a(()=>[(s(),p(O(o.settingsStore.settings.internalTabs[`${t.name}Archives`]),{object:t,separator:o.optionsStore.options.searchAppearance.global.separator,options:r.getOptions(t),type:"archives","show-bulk":!1,"no-meta-box":"","include-keywords":""},null,8,["object","separator","options"]))]),_:2},1024)]),_:2},1032,["slug"]))),128))])}const Ae=L(F,[["render",N]]);export{Ae as default};