import{G as D}from"./constants.hcfrsngk.js";import{j as F,u as R,e as E,a as M,g as V}from"./index.jlplx4ex.js";import{u as K}from"./AddonConditions.cn9pddfc.js";import{u as j}from"./PostTypes.pd67gy5m.js";import{A as q,T as z}from"./TitleDescription.efvmzdkp.js";import{B as I}from"./RadioToggle.h9afcyfi.js";import{C as H}from"./Card.m3lmtg1o.js";import{C as W}from"./Tabs.jvzsqe7o.js";import{C as J}from"./ProBadge.ab6jhp8x.js";import{C as N}from"./SettingsRow.1l1umqn0.js";import{_ as x}from"./_plugin-vue_export-helper.oebm7xum.js";import{o as c,c as v,v as r,k as b,l as s,a as p,C as n,b as C,x as w,t as d,F as P,J as O,$ as Q,G as X,q as Y,T as Z}from"./runtime-dom.esm-bundler.h3clfjuw.js";import{C as $,S as ee}from"./Schema.mitz9a1c.js";import{B as te}from"./Checkbox.fww0datn.js";import{C as oe}from"./Blur.f3nyx4yc.js";import{C as ae}from"./HtmlTagsEditor.lf2fbwqe.js";import{G as se,a as ne}from"./Row.o0q8mn7y.js";import"./translations.b896ab1m.js";import{_ as e,a as k}from"./default-i18n.hohxoesu.js";import{R as re}from"./RequiredPlans.kyt85n6a.js";import{C as ie}from"./Index.h6ka6vtn.js";import"./helpers.cti0cl6i.js";import"./addons.b0mmvdz0.js";import"./upperFirst.c4ega9c0.js";import"./_stringToArray.mpukyt2g.js";import"./toString.fflnj7pf.js";import"./Caret.hnvbzqgq.js";import"./JsonValues.g6ep3o3z.js";import"./RobotsMeta.edcih9ko.js";import"./Editor.fji40euo.js";import"./isEqual.czpd1uhn.js";import"./_baseIsEqual.h4qr0q1d.js";import"./_getTag.fj45ivwn.js";import"./_baseClone.j5qc2kco.js";import"./_arrayEach.n8ou32wp.js";import"./index.npoectbv.js";import"./Tags.bchklxw9.js";import"./postSlug.iva7u65b.js";import"./metabox.imp54zfh.js";import"./cleanForSlug.i05mvw2m.js";import"./_baseTrim.ohbpllmu.js";import"./_baseSet.c1i96bqt.js";import"./GoogleSearchPreview.j1gqkkrz.js";import"./Tooltip.jx4casvt.js";import"./Slide.dop8j51m.js";import"./vue-router.eypfdvl5.js";import"./TruSeoScore.kirz7zix.js";import"./Information.djrr3pec.js";import"./Ellipse.mhzh8c2h.js";import"./Textarea.h6l2nel1.js";import"./Checkmark.d5kkjaf5.js";import"./UnfilteredHtml.d5n2qgzt.js";import"./license.d8rszxb2.js";const le={};function ce(u,i){return c(),v("div")}const pe=x(le,[["render",ce]]),o="all-in-one-seo-pack",me={components:{BaseCheckbox:te,BaseRadioToggle:I,CoreBlur:oe,CoreHtmlTagsEditor:ae,CoreSettingsRow:N,GridColumn:se,GridRow:ne},props:{activeTab:Object},data(){return{GLOBAL_STRINGS:D,stripPunctuationSettings:[{value:"dashes",label:e("Dashes (-)",o)},{value:"underscores",label:e("Underscores (_)",o)},{value:"numbers",label:e("Numbers (0-9)",o)},{value:"plus",label:e("Plus (+)",o)},{value:"apostrophe",label:e("Apostrophe (')",o)},{value:"pound",label:e("Pound (#)",o)},{value:"ampersand",label:e("Ampersand (&)",o)}],strings:{attributeFormat:k(e("%1$s Format",o),e("Title",o)),clickToAddTags:k(e("Click on the tags below to insert variables into your %1$s attribute.",o),e("Title",o).toLowerCase()),stripPunctuation:e("Strip Punctuation",o),punctuationCharactersToKeep:e("Punctuation Characters to Keep:",o),casing:e("Casing",o),casingDescription:e("Choose which casing should be applied to the attribute.",o),wordsToStrip:e("Words to Strip",o),autogenerate:k(e("Autogenerate %1$s on Upload",o),e("Title",o))},tags:{title:{context:"imageSeoTitle",default:["image_title","separator_sa","site_title"]},altTag:{context:"imageSeoAlt",default:["alt_tag","separator_sa","site_title"]},caption:{context:"imageSeoCaption",default:["attachment_caption","separator_sa","site_title"]},description:{context:"imageSeoDescription",default:["attachment_description","separator_sa","site_title"]}},casings:{lowerCase:{label:e("Lower Case",o),description:e("All letters are converted to lower case (small) letters.",o)},titleCase:{label:e("Title Case",o),description:e("Major words are capitalized and minor words remain in their original casing.",o)},sentenceCase:{label:e("Sentence Case",o),description:e("The first word of each sentence starts with a capital.",o)}}}}},ue={class:"aioseo-sa-image-seo"},de={class:"global-robots-settings aioseo-description"},ge={class:"aioseo-description"},_e=p("br",null,null,-1),he={class:"casing-options"};function be(u,i,A,a,t,m){const S=r("base-radio-toggle"),_=r("core-settings-row"),f=r("core-html-tags-editor"),y=r("base-checkbox"),L=r("grid-column"),U=r("grid-row"),B=r("core-blur");return c(),b(B,null,{default:s(()=>[p("div",ue,[["caption","description"].includes("title")?(c(),b(_,{key:0,name:t.strings.autogenerate,align:""},{content:s(()=>[n(S,{name:"autogenerate",options:[{label:t.GLOBAL_STRINGS.disabled,value:!1,activeClass:"dark"},{label:t.GLOBAL_STRINGS.enabled,value:!0}]},null,8,["options"])]),_:1},8,["name"])):C("",!0),n(_,{name:t.strings.attributeFormat},{content:s(()=>[n(f,{"line-numbers":!1,single:"","tags-context":t.tags.title.context,"default-tags":t.tags.title.default},{"tags-description":s(()=>[w(d(t.strings.clickToAddTags),1)]),_:1},8,["tags-context","default-tags"])]),_:1},8,["name"]),n(_,{name:t.strings.stripPunctuation,align:""},{content:s(()=>[n(S,{name:"stripPunctuation",options:[{label:t.GLOBAL_STRINGS.disabled,value:!1,activeClass:"dark"},{label:t.GLOBAL_STRINGS.enabled,value:!0}]},null,8,["options"]),p("div",de,[p("strong",null,d(t.strings.punctuationCharactersToKeep),1),n(U,{class:"settings"},{default:s(()=>[(c(!0),v(P,null,O(t.stripPunctuationSettings,(T,g)=>(c(),b(L,{key:g,xl:"3",md:"4",sm:"6"},{default:s(()=>[n(y,{size:"medium"},{default:s(()=>[w(d(T.label),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})])]),_:1},8,["name"]),n(_,{name:t.strings.casing,align:""},{content:s(()=>[n(S,{name:"casing",options:[{label:t.GLOBAL_STRINGS.disabled,value:"",activeClass:"dark"},{label:t.casings.lowerCase.label,value:"lower"},{label:t.casings.titleCase.label,value:"title"},{label:t.casings.sentenceCase.label,value:"sentence"}]},null,8,["options"]),p("div",ge,[p("span",null,d(t.strings.casingDescription),1),_e,p("ul",he,[(c(!0),v(P,null,O(t.casings,(T,g)=>(c(),v("li",{key:g},[p("span",null,d(T.label),1),p("span",null,d(T.description),1)]))),128))])])]),_:1},8,["name"])])]),_:1})}const Se=x(me,[["render",be]]),h="all-in-one-seo-pack",fe={setup(){return{licenseStore:F(),rootStore:R(),links:E}},components:{Blur:Se,RequiredPlans:re,Cta:ie},data(){return{strings:{titleAttributeFormat:e("Title Attribute Format",h),ctaDescription:e("The Image SEO module is a premium feature that enables you to globally control the title, alt tag, caption, description and filename of the images on your site.",h),ctaButtonText:e("Unlock Image SEO",h),ctaHeader:k(e("Image SEO is a %1$s Feature",h),"PRO")},features:[e("Autogenerate image attributes",h),e("Clean uploaded image filenames",h),e("Strip punctuation from image attributes",h),e("Convert casing of image attributes",h)]}}},Te={class:"aioseo-sa-image-seo"};function ve(u,i,A,a,t,m){const S=r("blur"),_=r("required-plans"),f=r("cta");return c(),v("div",Te,[n(S),n(f,{"cta-link":a.links.getPricingUrl("image-seo","image-seo-upsell"),"button-text":t.strings.ctaButtonText,"learn-more-link":a.links.getUpsellUrl("image-seo",null,a.rootStore.isPro?"pricing":"liteUpgrade"),"feature-list":t.features,"hide-bonus":!a.licenseStore.isUnlicensed},{"header-text":s(()=>[w(d(t.strings.ctaHeader),1)]),description:s(()=>[n(_,{addon:"aioseo-image-seo"}),w(" "+d(t.strings.ctaDescription),1)]),_:1},8,["cta-link","button-text","learn-more-link","feature-list","hide-bonus"])])}const G=x(fe,[["render",ve],["__scopeId","data-v-6effa7af"]]),l="all-in-one-seo-pack",Ce={setup(){const{shouldShowActivate:u,shouldShowLite:i,shouldShowMain:A,shouldShowUpdate:a}=K({addonSlug:"aioseo-image-seo"}),{getPostIconClass:t}=j();return{GLOBAL_STRINGS:D,getPostIconClass:t,optionsStore:M(),rootStore:R(),settingsStore:V(),shouldShowActivate:u,shouldShowLite:i,shouldShowMain:A,shouldShowUpdate:a}},components:{Advanced:q,BaseRadioToggle:I,CoreCard:H,CoreMainTabs:W,CoreProBadge:J,CoreSettingsRow:N,Cta:pe,CustomFields:$,ImageSeo:G,Lite:G,Schema:ee,TitleDescription:z},data(){return{imageSeoKey:0,internalDebounce:!1,imageSeoActiveTab:{slug:"title",name:e("Title",l),pro:!0},strings:{redirectAttachmentUrls:e("Redirect Attachment URLs",l),attachment:e("Attachment",l),attachmentParent:e("Attachment Parent",l),attachmentUrlsDescription:e("We recommended redirecting attachment URLs back to the attachment since the default WordPress attachment pages have little SEO value.",l),imageSeo:e("Image SEO",l),advancedSettings:e("Advanced Settings",l)},tabs:{attachments:[{slug:"title-description",name:e("Title & Description",l),access:"aioseo_search_appearance_settings",pro:!1},{slug:"Schema",name:e("Schema Markup",l),access:"aioseo_search_appearance_settings",pro:!0},{slug:"advanced",name:e("Advanced",l),access:"aioseo_search_appearance_settings",pro:!1}],imageSeo:[{slug:"title",name:e("Title",l),pro:!0},{slug:"altTag",name:e("Alt Tag",l),pro:!0},{slug:"caption",name:e("Caption",l),pro:!0},{slug:"description",name:e("Description",l),pro:!0},{slug:"filename",name:e("Filename",l),pro:!0}]}}},computed:{postType(){return this.rootStore.aioseo.postData.postTypes.filter(u=>u.name==="attachment")[0]}},methods:{processChangeTab(u,i){this.internalDebounce||(this.internalDebounce=!0,this.settingsStore.changeTab({slug:`${u}SA`,value:i}),setTimeout(()=>{this.internalDebounce=!1},50))},setImageSeoActiveTab(u){this.imageSeoActiveTab=this.tabs.imageSeo.find(i=>i.slug===u),this.imageSeoKey++}}},Ae={class:"aioseo-search-appearance-content-types"},ye={class:"aioseo-description"};function ke(u,i,A,a,t,m){const S=r("base-radio-toggle"),_=r("core-settings-row"),f=r("core-main-tabs"),y=r("core-card"),L=r("core-pro-badge"),U=r("image-seo"),B=r("cta"),T=r("lite");return c(),v("div",Ae,[n(y,{slug:`${m.postType.name}SA`},Q({header:s(()=>[p("div",{class:X(["icon dashicons",a.getPostIconClass(m.postType.icon)])},null,2),p("div",null,d(m.postType.label),1)]),"before-tabs":s(()=>[n(_,{name:t.strings.redirectAttachmentUrls,align:""},{content:s(()=>[n(S,{modelValue:a.optionsStore.dynamicOptions.searchAppearance.postTypes.attachment.redirectAttachmentUrls,"onUpdate:modelValue":i[0]||(i[0]=g=>a.optionsStore.dynamicOptions.searchAppearance.postTypes.attachment.redirectAttachmentUrls=g),name:"redirectAttachmentUrls",options:[{label:a.GLOBAL_STRINGS.disabled,value:"disabled",activeClass:"dark"},{label:t.strings.attachment,value:"attachment"},{label:t.strings.attachmentParent,value:"attachment_parent"}]},null,8,["modelValue","options"]),p("div",ye,d(t.strings.attachmentUrlsDescription),1)]),_:1},8,["name"])]),default:s(()=>[a.optionsStore.dynamicOptions.searchAppearance.postTypes.attachment.redirectAttachmentUrls==="disabled"?(c(),b(Z,{key:0,name:"route-fade",mode:"out-in"},{default:s(()=>[(c(),b(Y(a.settingsStore.settings.internalTabs[`${m.postType.name}SA`]),{object:m.postType,separator:a.optionsStore.options.searchAppearance.global.separator,options:a.optionsStore.dynamicOptions.searchAppearance.postTypes[m.postType.name],type:"postTypes"},null,8,["object","separator","options"]))]),_:1})):C("",!0)]),_:2},[a.optionsStore.dynamicOptions.searchAppearance.postTypes.attachment.redirectAttachmentUrls==="disabled"?{name:"tabs",fn:s(()=>[n(f,{tabs:t.tabs.attachments,showSaveButton:!1,active:a.settingsStore.settings.internalTabs[`${m.postType.name}SA`],internal:"",onChanged:i[1]||(i[1]=g=>m.processChangeTab(m.postType.name,g))},null,8,["tabs","active"])]),key:"0"}:void 0]),1032,["slug"]),n(y,{slug:"imageSeo",noSlide:!a.shouldShowMain},{header:s(()=>[p("span",null,d(t.strings.imageSeo),1),n(L)]),tabs:s(()=>[n(f,{tabs:t.tabs.imageSeo,showSaveButton:!1,active:t.imageSeoActiveTab.slug,internal:"",onChanged:i[2]||(i[2]=g=>m.setImageSeoActiveTab(g))},null,8,["tabs","active"])]),default:s(()=>[a.shouldShowMain?(c(),b(U,{activeTab:t.imageSeoActiveTab,key:t.imageSeoKey},null,8,["activeTab"])):C("",!0),a.shouldShowUpdate||a.shouldShowActivate?(c(),b(B,{key:1})):C("",!0),a.shouldShowLite?(c(),b(T,{key:2})):C("",!0)]),_:1},8,["noSlide"])])}const kt=x(Ce,[["render",ke]]);export{kt as default};
