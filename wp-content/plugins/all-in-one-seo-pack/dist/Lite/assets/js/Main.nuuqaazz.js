import{j as R,e as x,i as O,l as U,D as h}from"./index.lqcu3hi3.js";import{l as D}from"./license.md0nmssw.js";import{u as J}from"./GoogleSearchConsole.mrngyubh.js";import{C as w,_ as P}from"./Caret.g6s6s7gs.js";import"./translations.e22mvhfh.js";import{_}from"./_plugin-vue_export-helper.oebm7xum.js";import{_ as o}from"./default-i18n.bz7purh4.js";import{v as m,o as a,k as c,l as u,a as f,t as d,b as l,c as S,C as v,x as C,q as y,F}from"./runtime-dom.esm-bundler.h3clfjuw.js";import{B as N}from"./DatePicker.ns06gy6o.js";import{_ as V}from"./ConnectCta.oy9zv6h9.js";import{C as G}from"./Blur.mu93d3e2.js";import{C as z}from"./Index.n6mrumm5.js";import $ from"./ContentRankings.e0wrie6x.js";import{C as j}from"./Index.bojstwek.js";import q from"./Dashboard.ifctqnzo.js";import E from"./KeywordRankTracker.isqj9wg9.js";import I from"./SeoStatistics.m36lktq1.js";import"./cleanForSlug.etvx808q.js";import"./upperFirst.d9alxexs.js";import"./Calendar.fbofsn3b.js";import"./pick.gnbqgz74.js";import"./_getTag.k19irihw.js";import"./debounce.lmahs4m3.js";import"./toNumber.o3a8s20t.js";import"./isEqual.izz0yjhb.js";import"./_baseIsEqual.btyep0ht.js";import"./vue-router.eypfdvl5.js";import"./allowed.cnz2h8ma.js";/* empty css             */import"./params.k8e95b6q.js";import"./Tabs.nyi4b4w1.js";import"./ProBadge.e32os6n3.js";import"./Information.djrr3pec.js";import"./Slide.dop8j51m.js";import"./Header.caiwury0.js";import"./addons.ds3c4v6r.js";import"./LicenseKeyBar.hoq3y8n1.js";import"./ScrollTo.ntqtkazp.js";import"./LogoGear.gxsz2m6s.js";import"./AnimatedNumber.halltd8n.js";import"./numbers.oc93q9ut.js";import"./Logo.nueehhao.js";import"./index.cw7tfyil.js";import"./Support.eets7z2w.js";import"./date.cp76fgkd.js";import"./constants.dnzd2kuo.js";import"./Url.mx7n0tnd.js";import"./Exclamation.f0pmbpi9.js";import"./Gear.dx9icaxx.js";import"./vue3-apexcharts.cwogygg0.js";import"./Row.h4gujlzc.js";import"./PostsTable.ccrxbf05.js";import"./PostTypes.k189gg5t.js";import"./Statistic.e2nsrpa0.js";import"./_baseClone.memmt1nf.js";import"./_arrayEach.n8ou32wp.js";import"./Tooltip.i4md1nj9.js";import"./WpTable.ku0ajsnd.js";import"./ScoreButton.erl7ixj3.js";import"./Table.fw94frzs.js";import"./Download.cmimu09k.js";import"./IndexStatus.em5kj4fs.js";import"./CheckSolid.ktze41sq.js";import"./Mobile.livanyta.js";import"./Checkmark.d5kkjaf5.js";import"./ExclamationSolid.jc4spp6p.js";import"./Link.lo5szjwl.js";import"./RequiredPlans.l7pjpdqj.js";import"./License.mtof02qk.js";import"./Card.nubn9etl.js";import"./Overview.bwm096cl.js";import"./DonutChartWithLegend.b89pd2eq.js";import"./KeywordsGraph.o1197tep.js";import"./Graph.bw9skznb.js";import"./SeoStatisticsOverview.cdvyu2ck.js";import"./List.f5ej79xc.js";import"./Statistics.l9vto0az.js";import"./SettingsRow.d9u0swi1.js";import"./Editor.i8px02kg.js";import"./Index.gtlvh3ar.js";import"./External.lyui8nzf.js";import"./Star.pcr8i0t9.js";const K="all-in-one-seo-pack",Y={setup(){return{optionsStore:R(),searchStatisticsStore:x()}},components:{CoreAlert:w},data(){return{error:o("Your connection with Google Search Console has expired or is invalid. Please check that your site is verified in Google Search Console and try to reconnect. If the problem persists, please contact our support team.",K)}},computed:{invalidAuthentication(){var t,e;return this.searchStatisticsStore.unverifiedSite||typeof((e=(t=this.optionsStore.internalOptions.internal)==null?void 0:t.searchStatistics)==null?void 0:e.profile)!="object"}}};function Z(t,e,r,i,p,s){const g=m("core-alert");return s.invalidAuthentication?(a(),c(g,{key:0,class:"aioseo-input-error aioseo-search-statistics-authentication-alert",type:"red"},{default:u(()=>[f("strong",null,d(p.error),1)]),_:1})):l("",!0)}const H=_(Y,[["render",Z]]),Q={};function W(t,e){return a(),S("div")}const X=_(Q,[["render",W]]),tt={};function et(t,e){return a(),S("div")}const st=_(tt,[["render",et]]),n="all-in-one-seo-pack",at={emits:["rolling"],setup(){const{connect:t,loading:e}=J();return{connect:t,licenseStore:O(),links:U,loading:e,searchStatisticsStore:x()}},components:{AuthenticationAlert:H,BaseButton:P,BaseDatePicker:N,ConnectCta:V,CoreAlert:w,CoreBlur:G,CoreMain:z,ContentRankings:$,Cta:j,Dashboard:q,KeywordRankTracker:E,PostDetail:X,Settings:st,SeoStatistics:I},data(){return{maxDate:null,minDate:null,strings:{pageName:o("Search Statistics",n),sampleDataAlert:o("Sample data is available for you to explore. Connect your site to Google Search Console to receive insights on how content is being discovered. Identify areas for improvement and drive traffic to your website.",n),ctaButtonText:o("Connect to Google Search Console",n),ctaUnlockButtonText:o("Unlock Search Statistics",n)}}},computed:{defaultRange(){const t=new Date(`${this.searchStatisticsStore.range.start} 00:00:00`),e=new Date(`${this.searchStatisticsStore.range.end} 00:00:00`);return[t,e]},excludeTabs(){const t=["post-detail"];return(this.licenseStore.isUnlicensed||!D.hasCoreFeature("search-statistics"))&&t.push("settings"),t},isSettings(){return this.$route.name==="settings"},showSampleDataUnlockCta(){return D.hasCoreFeature("search-statistics")&&!this.searchStatisticsStore.isConnected||this.searchStatisticsStore.unverifiedSite},showConnectCta(){return(D.hasCoreFeature("search-statistics")&&!this.searchStatisticsStore.isConnected||this.searchStatisticsStore.unverifiedSite)&&!this.isSettings},showDatePicker(){const t=this.searchStatisticsStore.isConnected&&!this.searchStatisticsStore.unverifiedSite,e=this.searchStatisticsStore.range.start&&this.searchStatisticsStore.range.end;return!["settings","content-rankings"].includes(this.$route.name)&&t&&e},containerClasses(){const t=[];return this.searchStatisticsStore.fetching&&t.push("aioseo-blur"),t},getOriginalMaxDate(){return this.searchStatisticsStore.latestAvailableDate?h.fromFormat(this.searchStatisticsStore.latestAvailableDate,"yyyy-MM-dd").setZone(h.zone)||h.local().plus({days:-2}):h.local().plus({days:-2})},datepickerShortcuts(){return[{text:o("Last 7 Days",n),value:()=>(window.aioseoBus.$emit("rolling","last7Days"),[this.getOriginalMaxDate.plus({days:-6}).toJSDate(),this.getOriginalMaxDate.toJSDate()])},{text:o("Last 28 Days",n),value:()=>(window.aioseoBus.$emit("rolling","last28Days"),[this.getOriginalMaxDate.plus({days:-27}).toJSDate(),this.getOriginalMaxDate.toJSDate()])},{text:o("Last 3 Months",n),value:()=>(window.aioseoBus.$emit("rolling","last3Months"),[this.getOriginalMaxDate.plus({days:-89}).toJSDate(),this.getOriginalMaxDate.toJSDate()])}]}},methods:{isDisabledDate(t){return this.minDate===null?!0:t.getTime()<this.minDate.getTime()||t.getTime()>this.maxDate.getTime()},onDateChange(t,e){this.searchStatisticsStore.setDateRange({dateRange:t,rolling:e})},highlightShortcut(t){if(!t)return;document.querySelectorAll(".el-picker-panel__shortcut").forEach(r=>{switch(r.innerText){case o("Last 7 Days",n):t==="last7Days"?r.classList.add("active"):r.classList.remove("active");break;case o("Last 28 Days",n):t==="last28Days"?r.classList.add("active"):r.classList.remove("active");break;case o("Last 3 Months",n):t==="last3Months"?r.classList.add("active"):r.classList.remove("active");break;case o("Last 6 Months",n):t==="last6Months"?r.classList.add("active"):r.classList.remove("active");break;default:r.classList.remove("active")}})}},mounted(){this.minDate=h.now().plus({months:-16}).toJSDate(),this.maxDate=this.getOriginalMaxDate.toJSDate()}},rt=f("br",null,null,-1),ot=f("br",null,null,-1),it={key:1,class:"connect-cta"};function nt(t,e,r,i,p,s){const g=m("base-date-picker"),b=m("authentication-alert"),k=m("base-button"),L=m("core-alert"),B=m("core-blur"),M=m("connect-cta"),T=m("core-main");return a(),c(T,{"page-name":p.strings.pageName,"exclude-tabs":s.excludeTabs,showTabs:!s.excludeTabs.includes(t.$route.name),containerClasses:s.containerClasses},{extra:u(()=>[s.showDatePicker?(a(),c(g,{key:0,onChange:s.onDateChange,onUpdated:e[0]||(e[0]=A=>s.highlightShortcut(A)),clearable:!1,defaultValue:s.defaultRange,defaultRolling:i.searchStatisticsStore.rolling,isDisabledDate:s.isDisabledDate,shortcuts:s.datepickerShortcuts,size:"small"},null,8,["onChange","defaultValue","defaultRolling","isDisabledDate","shortcuts"])):l("",!0)]),default:u(()=>[f("div",null,[v(b),i.searchStatisticsStore.shouldShowSampleReports?(a(),S(F,{key:0},[v(L,{class:"description sample-data-alert",type:"yellow",onCloseAlert:()=>{}},{default:u(()=>[C(d(p.strings.sampleDataAlert)+" ",1),rt,ot,s.showSampleDataUnlockCta?(a(),c(k,{key:0,type:"green",size:"small",onClick:i.connect,loading:i.loading},{default:u(()=>[C(d(p.strings.ctaButtonText),1)]),_:1},8,["onClick","loading"])):l("",!0),s.showSampleDataUnlockCta?l("",!0):(a(),c(k,{key:1,tag:"a",href:i.links.getPricingUrl("search-statistics","search-statistics-demo-upsell",t.$route.name),target:"_blank",type:"green",size:"small",onClick:i.searchStatisticsStore.showSampleReports,loading:i.loading},{default:u(()=>[C(d(p.strings.ctaUnlockButtonText),1)]),_:1},8,["href","onClick","loading"]))]),_:1}),(a(),c(y(t.$route.name)))],64)):l("",!0),s.showConnectCta?(a(),S("div",it,[i.searchStatisticsStore.shouldShowSampleReports?l("",!0):(a(),c(B,{key:0},{default:u(()=>[(a(),c(y(t.$route.name)))]),_:1})),i.searchStatisticsStore.shouldShowSampleReports?l("",!0):(a(),c(M,{key:1}))])):l("",!0),!s.showConnectCta&&!i.searchStatisticsStore.shouldShowSampleReports?(a(),c(y(t.$route.name),{key:2})):l("",!0)])]),_:1},8,["page-name","exclude-tabs","showTabs","containerClasses"])}const Pe=_(at,[["render",nt]]);export{Pe as default};