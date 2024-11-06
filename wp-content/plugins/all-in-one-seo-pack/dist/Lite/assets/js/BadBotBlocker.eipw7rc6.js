import{j as f,u as g}from"./index.lqcu3hi3.js";import{B as _}from"./Textarea.gulsuctc.js";import{C as S}from"./Caret.g6s6s7gs.js";import{C as V}from"./Card.nubn9etl.js";import{C as x}from"./SettingsRow.d9u0swi1.js";import"./translations.e22mvhfh.js";import{_ as C}from"./_plugin-vue_export-helper.oebm7xum.js";import{_ as s,s as y}from"./default-i18n.bz7purh4.js";import{c as H,C as r,l as c,v as i,o as p,k as m,b as k}from"./runtime-dom.esm-bundler.h3clfjuw.js";import"./cleanForSlug.etvx808q.js";import"./Tooltip.i4md1nj9.js";import"./index.cw7tfyil.js";import"./Slide.dop8j51m.js";import"./Row.h4gujlzc.js";const n="all-in-one-seo-pack",L={setup(){return{optionsStore:f(),rootStore:g()}},components:{BaseTextarea:_,CoreAlert:S,CoreCard:V,CoreSettingsRow:x},data(){return{strings:{badBotBlocker:s("Bad Bot Blocker",n),blockBadBotsHttp:s("Block Bad Bots using HTTP",n),blockReferralSpamHttp:s("Block Referral Spam using HTTP",n),trackBlockedBots:s("Track Blocked Bots",n),useCustomBlocklists:s("Use Custom Blocklists",n),userAgentBlocklist:s("User Agent Blocklist",n),refererBlockList:s("Referer Blocklist",n),blockedBotsLog:s("Blocked Bots Log",n),logLocation:y(s("The log for the blocked bots is located here: %1$s",n),'<br><a href="'+this.rootStore.aioseo.urls.blockedBotsLogUrl+'" target="_blank">'+this.rootStore.aioseo.urls.blockedBotsLogUrl+"</a>")}}}},R={class:"aioseo-tools-bad-bot-blocker"};function U(T,e,A,o,l,w){const d=i("base-toggle"),a=i("core-settings-row"),u=i("base-textarea"),b=i("core-alert"),B=i("core-card");return p(),H("div",R,[r(B,{slug:"badBotBlocker","header-text":l.strings.badBotBlocker},{default:c(()=>[r(a,{name:l.strings.blockBadBotsHttp},{content:c(()=>[r(d,{modelValue:o.optionsStore.options.deprecated.tools.blocker.blockBots,"onUpdate:modelValue":e[0]||(e[0]=t=>o.optionsStore.options.deprecated.tools.blocker.blockBots=t)},null,8,["modelValue"])]),_:1},8,["name"]),r(a,{name:l.strings.blockReferralSpamHttp},{content:c(()=>[r(d,{modelValue:o.optionsStore.options.deprecated.tools.blocker.blockReferer,"onUpdate:modelValue":e[1]||(e[1]=t=>o.optionsStore.options.deprecated.tools.blocker.blockReferer=t)},null,8,["modelValue"])]),_:1},8,["name"]),o.optionsStore.options.deprecated.tools.blocker.blockBots||o.optionsStore.options.deprecated.tools.blocker.blockReferer?(p(),m(a,{key:0,name:l.strings.useCustomBlocklists},{content:c(()=>[r(d,{modelValue:o.optionsStore.options.deprecated.tools.blocker.custom.enable,"onUpdate:modelValue":e[2]||(e[2]=t=>o.optionsStore.options.deprecated.tools.blocker.custom.enable=t)},null,8,["modelValue"])]),_:1},8,["name"])):k("",!0),o.optionsStore.options.deprecated.tools.blocker.blockBots&&o.optionsStore.options.deprecated.tools.blocker.custom.enable?(p(),m(a,{key:1,name:l.strings.userAgentBlocklist},{content:c(()=>[r(u,{minHeight:200,maxHeight:200,modelValue:o.optionsStore.options.deprecated.tools.blocker.custom.bots,"onUpdate:modelValue":e[3]||(e[3]=t=>o.optionsStore.options.deprecated.tools.blocker.custom.bots=t)},null,8,["modelValue"])]),_:1},8,["name"])):k("",!0),o.optionsStore.options.deprecated.tools.blocker.blockReferer&&o.optionsStore.options.deprecated.tools.blocker.custom.enable?(p(),m(a,{key:2,name:l.strings.refererBlockList},{content:c(()=>[r(u,{minHeight:200,maxHeight:200,modelValue:o.optionsStore.options.deprecated.tools.blocker.custom.referer,"onUpdate:modelValue":e[4]||(e[4]=t=>o.optionsStore.options.deprecated.tools.blocker.custom.referer=t)},null,8,["modelValue"])]),_:1},8,["name"])):k("",!0),o.optionsStore.options.deprecated.tools.blocker.blockBots||o.optionsStore.options.deprecated.tools.blocker.blockReferer?(p(),m(a,{key:3,name:l.strings.trackBlockedBots},{content:c(()=>[r(d,{modelValue:o.optionsStore.options.deprecated.tools.blocker.track,"onUpdate:modelValue":e[5]||(e[5]=t=>o.optionsStore.options.deprecated.tools.blocker.track=t)},null,8,["modelValue"]),r(b,{type:"blue",innerHTML:l.strings.logLocation},null,8,["innerHTML"])]),_:1},8,["name"])):k("",!0)]),_:1},8,["header-text"])])}const J=C(L,[["render",U]]);export{J as default};
