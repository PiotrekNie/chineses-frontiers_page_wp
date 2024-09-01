import{u as V,Q as D,D as O,g as F,f as W,e as H,a as K}from"./links.Ce9S4kjc.js";import{l as X}from"./license.4lyTI3li.js";import{n as U}from"./numbers.BT5e8rgb.js";import{W as Z}from"./WpTable.aGv2G4lv.js";import{_ as z}from"./ScoreButton.BV7psxHV.js";import{C as Y}from"./Table.vI2Sprsc.js";import{C as J}from"./Index.Dq9-2wXY.js";import{q as Q,S as ee,T as te,c as se}from"./LicenseConditions.DhdYCq3P.js";import{_ as T}from"./_plugin-vue_export-helper.BN1snXvA.js";import{v as _,o as l,c as d,B as y,t as h,b as m,f as v,F as oe,J as ie,a as p,k as f,q as re,G as B,u as b,l as c,E as ne,C as w}from"./runtime-dom.esm-bundler.tPRhSV4q.js";import{_ as ae}from"./IndexStatus.BjMK9kJ5.js";import{_ as s,s as E}from"./default-i18n.DXRQgkn2.js";import{S as L,b as le}from"./Caret.BthVBOwE.js";import{C as ce}from"./Tooltip.DhkkBQWW.js";import{S as ue}from"./Calendar.CIqx63em.js";import{S as de,a as he}from"./Mobile.CAgFd5PM.js";import{S as I}from"./Checkmark.DOG99yeO.js";import{S as N}from"./ExclamationSolid.BrF8E3jp.js";import{S as A}from"./Link.tEuvygox.js";import{S as pe}from"./CheckSolid.CDvG9IOI.js";import{P as fe}from"./PostTypes.Cef6XkQ_.js";const i="all-in-one-seo-pack",ge=()=>{const e=V();return{items:[{title:s("Index Status:",i),key:"verdict",description:s("Indicates the index status of the page in Search Statistics. This is the verdict result for the analysis.",i),getIcon:t=>{switch(t){case"PASS":return I;case"NEUTRAL":case"PARTIAL":return N;case"VERDICT_UNSPECIFIED":case"FAIL":default:return L}},getDescription:(t,{resultLink:r})=>{switch(t){case"PASS":return s("The page is indexed.",i);case"NEUTRAL":return E(s("The page has not been indexed. Please check %1$sGoogle Search Console%2$s for more details.",i),'<a href="'+r+'" target="_blank">',"</a>");case"FAIL":case"VERDICT_UNSPECIFIED":case"PARTIAL":default:return E(s("The page is invalid or has errors. Please check %1$sGoogle Search Console%2$s for more details.",i),'<a href="'+r+'" target="_blank">',"</a>")}}},{title:s("Last Crawl:",i),key:"lastCrawlTime",description:s("This shows the date and time when Google's crawler (Googlebot) last visited and crawled the page.",i),getIcon:()=>ue,getDescription:t=>{if(!t)return s("Never",i);const r=new Date(t),n=D(r,e.aioseo.data.dateFormat),u=D(r,e.aioseo.data.timeFormat);return`${n}, ${u}`}},{title:s("Crawled As:",i),key:"crawledAs",description:s("Indicates whether Google crawled the page as a mobile or desktop user agent. This is important because Google uses mobile-first indexing for most websites.",i),getIcon:t=>t==="DESKTOP"?de:he,getDescription:t=>{switch(t){case"DESKTOP":return s("Desktop user agent",i);case"MOBILE":return s("Mobile user agent",i);default:return s("Unknown user agent",i)}}},{title:s("Crawl Allowed?",i),key:"robotsTxtState",description:s("This specifies whether your website's robots.txt file allows Googlebot to crawl the page.",i),getIcon:t=>t==="ALLOWED"?I:L,getDescription:t=>{switch(t){case"ALLOWED":return s("Crawl allowed by robots.txt",i);case"DISALLOWED":return s("Crawl blocked by robots.txt",i);default:return s("Unknown robots.txt state, typically because the page wasn't fetched or found, or because robots.txt itself couldn't be reached",i)}}},{title:s("Indexing Allowed?",i),key:"indexingState",description:s("This specifies whether your website's robots meta tag allows Googlebot to index the page.",i),getIcon:t=>t==="INDEXING_ALLOWED"?I:L,getDescription:t=>{switch(t){case"INDEXING_ALLOWED":return s("Indexing allowed",i);case"BLOCKED_BY_META_TAG":return s("Indexing not allowed, 'noindex' detected in 'robots' meta tag",i);case"BLOCKED_BY_HTTP_HEADER":return s("Indexing not allowed, 'noindex' detected in 'X-Robots-Tag' http header",i);case"BLOCKED_BY_ROBOTS_TXT":return s("Indexing not allowed, blocking robots.txt rule detected",i);default:return s("Unknown indexing status",i)}}},{title:s("Page Fetch:",i),key:"pageFetchState",description:s("Indicates whether Google successfully fetched the page during its last visit.",i),getIcon:t=>t==="SUCCESSFUL"?I:L,getDescription:t=>{switch(t){case"SUCCESSFUL":return s("Successful fetch",i);case"SOFT_404":return s("Soft 404",i);case"BLOCKED_ROBOTS_TXT":return s("Blocked by robots.txt",i);case"NOT_FOUND":return s("Not found (404)",i);case"ACCESS_DENIED":return s("Blocked due to unauthorized request (401)",i);case"SERVER_ERROR":return s("Server error (5xx)",i);case"REDIRECT_ERROR":return s("Redirection error",i);case"ACCESS_FORBIDDEN":return s("Blocked due to access forbidden (403)",i);case"BLOCKED_4XX":return s("Blocked due to other 4xx issue (not 403, 404)",i);case"INTERNAL_CRAWL_ERROR":return s("Internal error",i);case"INVALID_URL":return s("Invalid URL",i);default:return s("Unknown fetch state",i)}}},{title:s("User-Declared Canonical:",i),key:"userCanonical",description:s("Shows the canonical URL specified by you (the website owner). Canonical URLs help indicate the preferred version of a page, especially for duplicate content.",i),getIcon:()=>A,getDescription:t=>t?`<a href="${t}" target="_blank">${t}</a>`:s("None",i)},{title:s("Google-Selected Canonical:",i),key:"googleCanonical",description:s("Reveals the canonical URL chosen by Googlebot. Sometimes, Googlebot may select a different canonical URL than the user-declared one.",i),getIcon:()=>A,getDescription:t=>t?`<a href="${t}" target="_blank" title=${t}>${t}</a>`:s("None",i)}]}},me={components:{apexchart:Q},props:{points:{type:Object,required:!0},peak:{type:Number,default(){return 0}},recovering:{type:Boolean,default(){return!1}},height:{type:Number,default(){return 50}}},data(){return{strings:{recovering:this.$t.__("Slowly Recovering",this.$td),peak:this.$t.__("Peak",this.$td)}}},computed:{getSeries(){const e=this.points,a=[];return Object.keys(e).forEach(t=>{a.push({x:t,y:e[t]})}),[{data:a}]},chartOptions(){const e=this.peak;return{colors:[function({value:a}){return a===e?"#005AE0":"#99C2FF"}],chart:{type:"bar",sparkline:{enabled:!0},zoom:{enabled:!1},toolbar:{show:!1},parentHeightOffset:0,background:"#fff"},grid:{show:!1,padding:{top:2,right:2,bottom:0,left:2}},plotOptions:{bar:{columnWidth:"85%",barHeight:"100%"}},fill:{type:"solid"},tooltip:{enabled:!0,x:{show:!0,formatter:a=>O.fromFormat(a,"yyyy-MM").setZone(O.zone).toLocaleString({month:"long",year:"numeric"})},y:{formatter:a=>{const t=this.$t.sprintf(this.$t.__("%1$s points",this.$td),U.numberFormat(a,0));let r="";return a===e&&(r=`<span class="peak">${this.strings.peak}</span>`),t+r}},marker:{show:!1}}}}}},Se={class:"aioseo-graph-decay"},_e={key:0,class:"aioseo-graph-decay-recovering"};function be(e,a,t,r,n,u){const g=_("apexchart");return l(),d("div",Se,[y(g,{width:"100%",height:t.height,ref:"apexchart",options:u.chartOptions,series:u.getSeries,class:"aioseo-graph-decay-chart"},null,8,["height","options","series"]),t.recovering?(l(),d("div",_e,h(n.strings.recovering),1)):m("",!0)])}const ye=T(me,[["render",be]]),we={class:"aioseo-index-status-result"},ke={key:0},xe={class:"aioseo-index-status-result__row-title"},Ce=["innerHTML"],Le={key:1},Ie={__name:"IndexStatusResult",props:{result:{type:Object,default(){return{}}},resultLink:{type:String,default:""},errorMessage:{type:String,default:""}},setup(e){const a="all-in-one-seo-pack",t=e,{items:r}=ge(),n=v(()=>t.errorMessage?t.errorMessage:s("Oops! It looks like something went wrong while loading the results for this page. Please try again by refreshing the page.",a));return(u,g)=>(l(),d("div",we,[e.result.verdict?(l(),d("div",ke,[(l(!0),d(oe,null,ie(b(r),(S,R)=>(l(),d("div",{class:"aioseo-index-status-result__row",key:R},[p("div",xe,h(S.title),1),p("div",{class:B(["aioseo-index-status-result__row-description",S.key])},[(l(),f(re(S.getIcon(e.result[S.key])))),p("span",{innerHTML:S.getDescription(e.result[S.key],{resultLink:e.resultLink})},null,8,Ce)],2)]))),128))])):(l(),d("div",Le,h(n.value),1))]))}},Te={},Re={viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",class:"aioseo-circle-close-solid"},Pe=p("path",{d:"M8.4748 17.0008L11.9998 13.4758L15.5248 17.0008L16.9998 15.5258L13.4748 12.0008L16.9998 8.47578L15.5248 7.00078L11.9998 10.5258L8.4748 7.00078L6.9998 8.47578L10.5248 12.0008L6.9998 15.5258L8.4748 17.0008ZM11.9998 22.2008C10.5831 22.2008 9.2538 21.9341 8.0118 21.4008C6.77047 20.8674 5.69147 20.1424 4.7748 19.2258C3.85814 18.3091 3.13314 17.2301 2.5998 15.9888C2.06647 14.7468 1.7998 13.4174 1.7998 12.0008C1.7998 10.5841 2.06647 9.25478 2.5998 8.01278C3.13314 6.77145 3.85814 5.69245 4.7748 4.77578C5.69147 3.85911 6.77047 3.13411 8.0118 2.60078C9.2538 2.06745 10.5831 1.80078 11.9998 1.80078C13.4165 1.80078 14.7458 2.06745 15.9878 2.60078C17.2291 3.13411 18.3081 3.85911 19.2248 4.77578C20.1415 5.69245 20.8665 6.77145 21.3998 8.01278C21.9331 9.25478 22.1998 10.5841 22.1998 12.0008C22.1998 13.4174 21.9331 14.7468 21.3998 15.9888C20.8665 17.2301 20.1415 18.3091 19.2248 19.2258C18.3081 20.1424 17.2291 20.8674 15.9878 21.4008C14.7458 21.9341 13.4165 22.2008 11.9998 22.2008Z"},null,-1),ve=[Pe];function Ee(e,a){return l(),d("svg",Re,ve)}const $e=T(Te,[["render",Ee]]),De={__name:"IndexStatus",props:{loading:{type:Boolean,default:!1},result:{type:Object,default(){return{}}},resultLink:{type:String,default:""},tooltipOffset:{type:String,default(){return"0,0"}},viewable:{type:Boolean,default:!0}},setup(e){const a=F(),t="all-in-one-seo-pack",r=e,n=v(()=>{var g;if(!r.viewable||!((g=r==null?void 0:r.result)!=null&&g.verdict)&&a.quotaExceeded.urlInspection)return"exclamation";switch(r.result.verdict){case"PASS":return"check";case"NEUTRAL":case"PARTIAL":return"exclamation";case"VERDICT_UNSPECIFIED":case"FAIL":default:return"close"}}),u=v(()=>r.viewable?a.quotaExceeded.urlInspection?s("Your site ran out of URL inspection quota. Please try again after 24 hours when the quota is renewed.",t):"":E(s("This page is not published so its index status cannot be determined. %1$s will determine the index status as soon as the page is published.",t),"AIOSEO"));return(g,S)=>(l(),d("div",{class:B(["aioseo-index-status",[e.viewable?"aioseo-index-status--viewable":"aioseo-index-status--not-viewable",b(a).quotaExceeded.urlInspection?"aioseo-index-status--quota-exceeded":""]]),key:e.resultLink},[e.loading?(l(),f(b(le),{key:0,dark:""})):m("",!0),e.loading?m("",!0):(l(),f(b(ce),{key:1,flip:"",offset:e.tooltipOffset},{tooltip:c(()=>[y(b(Ie),{result:e.result,"result-link":e.resultLink,"error-message":u.value},null,8,["result","result-link","error-message"])]),default:c(()=>[n.value==="check"?(l(),f(b(pe),{key:0})):n.value==="close"?(l(),f(b($e),{key:1})):(l(),f(b(N),{key:2}))]),_:1},8,["offset"]))],2))}},Oe={};function Ae(e,a){return l(),d("div")}const Fe=T(Oe,[["render",Ae]]),Ue={setup(){return{licenseStore:W(),searchStatisticsStore:F(),settingsStore:H(),optionsStore:K()}},components:{CoreScoreButton:z,CoreWpTable:Y,Cta:J,GraphDecay:ye,IndexStatus:ae,IndexStatusPro:De,ObjectActions:Fe,Statistic:ee},mixins:[fe,Z,te],data(){return{numbers:U,tableId:"aioseo-search-statistics-post-table",changeItemsPerPageSlug:"searchStatisticsSeoStatistics",showUpsell:!1,sortableColumns:[],strings:{position:this.$t.__("Position",this.$td),ctaButtonText:this.$t.__("Unlock Post Tracking",this.$td),ctaHeader:this.$t.sprintf(this.$t.__("Post Tracking is a %1$s Feature",this.$td),"PRO")},license:X}},props:{posts:Object,isLoading:Boolean,showHeader:{type:Boolean,default(){return!0}},showTableFooter:Boolean,showItemsPerPage:Boolean,columns:{type:Array,default(){return["postTitle","seoScore","clicks","impressions","position"]}},appendColumns:{type:Object,default(){return{}}},defaultSorting:{type:Object,default(){return{}}},initialFilter:{type:String,default(){return""}},updateAction:{type:String,default(){return"updateSeoStatistics"}}},computed:{getFilters(){return this.searchStatisticsStore.shouldShowSampleReports?[]:this.posts.filters},allColumns(){var t,r;const e=se(this.columns),a=((r=(t=this.posts)==null?void 0:t.filters)==null?void 0:r.find(n=>n.active))||{};return this.appendColumns[a.slug||"all"]&&e.push(this.appendColumns[a.slug||"all"]),e.map(n=>(n.endsWith("Sortable")&&(n=n.replace("Sortable",""),this.sortableColumns.push(n)),n))},tableColumns(){return[{slug:"row",label:"#",width:"40px"},{slug:"postTitle",label:this.$t.__("Title",this.$td),width:"100%"},{slug:"seoScore",label:this.$t.__("TruSEO Score",this.$td),width:"130px"},{slug:"indexStatus",label:this.$t.__("Indexed",this.$td),width:"80px",coreFeature:"index-status"},{slug:"clicks",label:this.$t.__("Clicks",this.$td),width:"80px"},{slug:"impressions",label:this.$t.__("Impressions",this.$td),width:"110px"},{slug:"position",label:this.$t.__("Position",this.$td),width:"90px"},{slug:"lastUpdated",label:this.$t.__("Last Updated On",this.$td),width:"160px"},{slug:"decay",label:this.$t.__("Loss",this.$td),width:"140px"},{slug:"decayPercent",label:this.$t.__("Drop (%)",this.$td),width:"120px"},{slug:"performance",label:this.$t.__("Performance Score",this.$td),width:"150px"},{slug:"diffDecay",label:this.$t.__("Diff",this.$td),width:"95px"},{slug:"diffPosition",label:this.$t.__("Diff",this.$td),width:"80px"}].filter(e=>e.coreFeature&&((!this.$isPro||this.licenseStore.isUnlicensed)&&!this.searchStatisticsStore.shouldShowSampleReports||!this.license.hasCoreFeature("search-statistics",e.coreFeature)&&!this.searchStatisticsStore.shouldShowSampleReports)?!1:e.slug==="seoScore"?this.optionsStore.options.advanced.truSeo:this.allColumns.includes(e.slug)).map(e=>(e.sortable=this.isSortable&&this.sortableColumns.includes(e.slug),e.sortable&&(e.sortDir=e.slug===this.orderBy?this.orderDir:"asc",e.sorted=e.slug===this.orderBy),e))},isSortable(){return this.filter==="all"&&this.$isPro&&!this.licenseStore.isUnlicensed}},watch:{isLoading(e){e||this.$nextTick(()=>{this.loadInspectionResult()})}},methods:{resetSelectedFilters(){this.selectedFilters.postType="",this.processAdditionaFilterOptionSelected({name:"postType",selectedValue:""})},fetchData(e){if(typeof this.searchStatisticsStore[this.updateAction]=="function")return this.searchStatisticsStore[this.updateAction](e)},loadInspectionResult(){var t;if(!((t=this.posts)!=null&&t.rows)||this.searchStatisticsStore.quotaExceeded.urlInspection)return;const e=Object.values(this.posts.rows),a=e.filter(r=>{var n;return!r.inspectionResult||((n=r.inspectionResult)==null?void 0:n.length)===0});a.length&&(a.forEach(r=>{const n=e.find(u=>u.page===r.page);n&&(n.inspectionResultLoading=!0)}),this.searchStatisticsStore.getInspectionResult(a.map(r=>r.page)).then(r=>{a.forEach(n=>{const u=e.find(g=>g.page===n.page);u&&(u.inspectionResult=r[n.page],u.inspectionResultLoading=!1)})}))}},mounted(){this.initialFilter&&this.processFilter({slug:this.initialFilter}),this.loadInspectionResult()}},Be={class:"aioseo-search-statistics-post-table"},Ne={class:"object-row"},je={class:"object-title"},Me=["onClick"],Ge={key:1,class:"object-title"},qe={key:0,class:"row-actions"},Ve=["href"],We=["href"];function He(e,a,t,r,n,u){const g=_("object-actions"),S=_("core-score-button"),R=_("index-status"),j=_("index-status-pro"),C=_("statistic"),M=_("graph-decay"),G=_("cta"),q=_("core-wp-table");return l(),d("div",Be,[y(q,{ref:"table",class:"posts-table",id:n.tableId,columns:u.tableColumns,rows:Object.values(t.posts.rows),totals:t.posts.totals,filters:u.getFilters,"additional-filters":t.posts.additionalFilters,"selected-filters":e.selectedFilters,loading:t.isLoading,"initial-page-number":e.pageNumber,"initial-search-term":e.searchTerm,"initial-items-per-page":r.settingsStore.settings.tablePagination[n.changeItemsPerPageSlug],"show-header":t.showHeader,"show-bulk-actions":!1,"show-table-footer":t.showTableFooter,"show-items-per-page":t.showItemsPerPage&&!r.searchStatisticsStore.shouldShowSampleReports,"show-pagination":"","blur-rows":n.showUpsell,onFilterTable:e.processFilter,onProcessAdditionalFilters:e.processAdditionalFilters,onAdditionalFilterOptionSelected:e.processAdditionaFilterOptionSelected,onPaginate:e.processPagination,onProcessChangeItemsPerPage:e.processChangeItemsPerPage,onSearch:e.processSearch,onSortColumn:e.processSort},{row:c(({index:o})=>[p("div",Ne,h(o+1),1)]),postTitle:c(({row:o})=>{var k,x;return[p("div",je,[o.objectId&&o.objectType==="post"&&r.searchStatisticsStore.isConnected?(l(),d("a",{key:0,href:"#",onClick:ne(P=>e.openPostDetail(o),["prevent"])},h(o.objectTitle),9,Me)):(l(),d("span",Ge,h(o.objectTitle),1))]),y(g,{row:o},null,8,["row"]),o.objectId&&o.objectType==="post"?(l(),d("div",qe,[p("span",null,[p("a",{class:"view",href:o.context.permalink,target:"_blank"},[p("span",null,h(e.viewPost((k=o.context.postType)==null?void 0:k.singular)),1)],8,Ve),w(" | ")]),p("span",null,[p("a",{class:"edit",href:o.context.editLink,target:"_blank"},[p("span",null,h(e.editPost((x=o.context.postType)==null?void 0:x.singular)),1)],8,We)])])):m("",!0)]}),seoScore:c(({row:o})=>[o.seoScore?(l(),f(S,{key:0,class:"table-score-button",score:o.seoScore},null,8,["score"])):m("",!0)]),indexStatus:c(({row:o})=>{var k,x,P,$;return[r.searchStatisticsStore.shouldShowSampleReports?m("",!0):(l(),f(R,{key:0,result:(k=o.inspectionResult)==null?void 0:k.indexStatusResult,"result-link":(x=o.inspectionResult)==null?void 0:x.inspectionResultLink,loading:o.inspectionResultLoading},null,8,["result","result-link","loading"])),r.searchStatisticsStore.shouldShowSampleReports?(l(),f(j,{key:1,result:(P=o.inspectionResult)==null?void 0:P.indexStatusResult,"result-link":($=o.inspectionResult)==null?void 0:$.inspectionResultLink,loading:o.inspectionResultLoading},null,8,["result","result-link","loading"])):m("",!0)]}),clicks:c(({row:o})=>[w(h(n.numbers.compactNumber(o.clicks)),1)]),impressions:c(({row:o})=>[w(h(n.numbers.compactNumber(o.impressions)),1)]),position:c(({row:o})=>[w(h(Math.round(o.position).toFixed(0)),1)]),lastUpdated:c(({row:o})=>[w(h(o.context.lastUpdated||"-"),1)]),decay:c(({row:o})=>[y(C,{type:"decay","show-difference":!1,total:o.decay,showZeroValues:!0,class:"no-margin"},null,8,["total"])]),decayPercent:c(({row:o})=>[y(C,{type:"decayPercent","show-difference":!1,total:o.decayPercent,showZeroValues:!0,class:"no-margin"},null,8,["total"])]),performance:c(({row:o})=>[y(M,{points:o.points,peak:o.peak,recovering:o.recovering,height:38},null,8,["points","peak","recovering"])]),diffPosition:c(({row:o})=>[o.difference.comparison?(l(),f(C,{key:0,type:"position","show-original":!1,difference:o.difference.position,"tooltip-offset":"-100px,0"},null,8,["difference"])):m("",!0)]),diffDecay:c(({row:o})=>[o.difference.comparison?(l(),f(C,{key:0,type:"diffDecay","show-original":!1,difference:o.difference.decay,"tooltip-offset":"-100px,0"},null,8,["difference"])):m("",!0)]),cta:c(()=>[n.showUpsell?(l(),f(G,{key:0,"cta-link":e.$links.getPricingUrl("search-statistics","search-statistics-upsell"),"button-text":n.strings.ctaButtonText,"learn-more-link":e.$links.getUpsellUrl("search-statistics","search-statistics-upsell",e.$isPro?"pricing":"liteUpgrade"),"hide-bonus":!r.licenseStore.isUnlicensed},{"header-text":c(()=>[w(h(n.strings.ctaHeader),1)]),_:1},8,["cta-link","button-text","learn-more-link","hide-bonus"])):m("",!0)]),_:1},8,["id","columns","rows","totals","filters","additional-filters","selected-filters","loading","initial-page-number","initial-search-term","initial-items-per-page","show-header","show-table-footer","show-items-per-page","blur-rows","onFilterTable","onProcessAdditionalFilters","onAdditionalFilterOptionSelected","onPaginate","onProcessChangeItemsPerPage","onSearch","onSortColumn"])])}const ft=T(Ue,[["render",He]]);export{ft as P};