import{_ as e,d as t,f as o,r as l,p as a,k as n,o as r,g as i,al as s,b as p,h as u,i as d,a7 as c}from"./index.CbUOdihh.js";import{u as f,a as m}from"./el-popper.uv0IDWXX.js";var y=e(t({inheritAttrs:!1}),[["render",function(e,t,l,a,n,r){return o(e.$slots,"default")}],["__file","collection.vue"]]);var g=e(t({name:"ElCollectionItem",inheritAttrs:!1}),[["render",function(e,t,l,a,n,r){return o(e.$slots,"default")}],["__file","collection-item.vue"]]);const C="data-el-collection-item",E=e=>{const t=`El${e}Collection`,o=`${t}Item`,p=Symbol(t),u=Symbol(o),d={...y,name:t,setup(){const e=l(null),t=new Map;a(p,{itemMap:t,getItems:()=>{const o=i(e);if(!o)return[];const l=Array.from(o.querySelectorAll(`[${C}]`));return[...t.values()].sort(((e,t)=>l.indexOf(e.ref)-l.indexOf(t.ref)))},collectionRef:e})}},c={...g,name:o,setup(e,{attrs:t}){const o=l(null),d=n(p,void 0);a(u,{collectionItemRef:o}),r((()=>{const e=i(o);e&&d.itemMap.set(e,{ref:e,...t})})),s((()=>{const e=i(o);d.itemMap.delete(e)}))}};return{COLLECTION_INJECTION_KEY:p,COLLECTION_ITEM_INJECTION_KEY:u,ElCollection:d,ElCollectionItem:c}},I=p({trigger:f.trigger,effect:{...m.effect,default:"light"},type:{type:u(String)},placement:{type:u(String),default:"bottom"},popperOptions:{type:u(Object),default:()=>({})},id:String,size:{type:String,default:""},splitButton:Boolean,hideOnClick:{type:Boolean,default:!0},loop:{type:Boolean,default:!0},showTimeout:{type:Number,default:150},hideTimeout:{type:Number,default:150},tabindex:{type:u([Number,String]),default:0},maxHeight:{type:u([Number,String]),default:""},popperClass:{type:String,default:""},disabled:{type:Boolean,default:!1},role:{type:String,default:"menu"},buttonProps:{type:u(Object)},teleported:m.teleported}),O=p({command:{type:[Object,String,Number],default:()=>({})},disabled:Boolean,divided:Boolean,textValue:String,icon:{type:d}}),b=p({onKeydown:{type:u(Function)}}),N=[c.down,c.pageDown,c.home],_=[c.up,c.pageUp,c.end],S=[...N,..._],{ElCollection:T,ElCollectionItem:h,COLLECTION_INJECTION_KEY:L,COLLECTION_ITEM_INJECTION_KEY:v}=E("Dropdown");export{v as C,T as E,S as F,_ as L,O as a,C as b,E as c,I as d,h as e,b as f,L as g};
