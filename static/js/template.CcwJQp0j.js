import{d as e,r as a,o as l,B as t,c as o,e as i,a0 as s,w as u,k as r,a4 as n,g as p,t as m,az as c,Y as v,aH as d,a2 as f,a3 as g}from"./index.NByQEtge.js";import{E as y}from"./el-card.C-3ioL7M.js";import{E as _,a as j,b as x}from"./el-table-column.B375TQNi.js";import{E as C}from"./el-tag.CnoBvLCb.js";import"./el-select.o9lKb39c.js";import"./el-scrollbar.WNuCJrQP.js";import"./el-popper.mgMmiG3o.js";import"./el-tooltip.l0sNRNKZ.js";import{E as h}from"./el-dialog.B9UqQcYO.js";import{g as w,A as b,U as k,D as V}from"./temp.Bvqf2kun.js";import{_ as z}from"./_plugin-vue_export-helper.BCo6x5W8.js";import"./isEqual.Dt8RzauZ.js";import"./_initCloneObject.CX1oVPiC.js";import"./debounce.DDqR4grL.js";import"./index.D-rn06_P.js";import"./strings.CaQsokC0.js";import"./castArray.Bw0AKaiM.js";import"./index.DvAu8cC1.js";import"./isUndefined.DgmxjSXK.js";import"./use-dialog.BXefHeCX.js";import"./refs.Be5fksNl.js";const E={class:"dialog-footer"},B=z(e({__name:"template",setup(e){const z=a([]),B=a(""),T=a(""),U=a(""),O=a(!1),S=a(),A=a(""),D=a("1");async function H(){const{data:e}=await w();z.value=e}l((async()=>{H()}));const I=()=>{A.value="添加模版",T.value="",U.value="",D.value="1",O.value=!0},K=async()=>{"添加模版"==A.value?(await b({filename:T.value.trim(),text:U.value.trim()}),c.success("添加成功")):(await k({filename:T.value.trim(),oldname:B.value.trim(),text:U.value.trim()}),c.success("更新成功")),H(),T.value="",U.value="",O.value=!1},J=a([]),R=e=>{J.value=e},q=()=>{0!==J.value.length&&d.confirm("你是否要删除选中这些 ?","提示",{confirmButtonText:"OK",cancelButtonText:"Cancel",type:"warning"}).then((()=>{for(let e=0;e<J.value.length;e++)V({filename:J.value[e].file}),z.value=z.value.filter((a=>a.file!==J.value[e].file));c({type:"success",message:"删除成功"})}))},F=a(1),N=a(10),W=e=>{N.value=e},Y=e=>{F.value=e},$=t((()=>{const e=(F.value-1)*N.value,a=e+N.value;return z.value.slice(e,a)}));return(e,a)=>{const l=f,t=g,w=h,b=_,k=C,D=j,J=x,G=y;return o(),i("div",null,[s(w,{modelValue:O.value,"onUpdate:modelValue":a[3]||(a[3]=e=>O.value=e),title:A.value,width:"80%"},{footer:u((()=>[r("div",E,[s(t,{onClick:a[2]||(a[2]=e=>O.value=!1)},{default:u((()=>a[6]||(a[6]=[n("关闭")]))),_:1}),s(t,{type:"primary",onClick:K},{default:u((()=>a[7]||(a[7]=[n("确定")]))),_:1})])])),default:u((()=>[s(l,{modelValue:U.value,"onUpdate:modelValue":a[0]||(a[0]=e=>U.value=e),placeholder:"模版内容",rows:10,type:"textarea",style:{"margin-bottom":"10px"}},null,8,["modelValue"]),s(l,{modelValue:T.value,"onUpdate:modelValue":a[1]||(a[1]=e=>T.value=e),placeholder:"模版文件名"},null,8,["modelValue"])])),_:1},8,["modelValue","title"]),s(G,null,{default:u((()=>[s(t,{type:"primary",onClick:I},{default:u((()=>a[8]||(a[8]=[n("添加模版")]))),_:1}),a[14]||(a[14]=r("div",{style:{"margin-bottom":"10px"}},null,-1)),s(D,{ref_key:"table",ref:S,data:p($),style:{width:"100%"},onSelectionChange:R},{default:u((()=>[s(b,{type:"selection",fixed:"",prop:"ID",label:"id"}),s(b,{prop:"file",label:"模版文件名"},{default:u((e=>[s(k,{type:"success"},{default:u((()=>[n(m(e.row.file),1)])),_:2},1024)])),_:1}),s(b,{prop:"create_date",label:"创建时间",sortable:""}),s(b,{fixed:"right",label:"操作",width:"120"},{default:u((e=>[s(t,{link:"",type:"primary",size:"small",onClick:a=>(e=>{for(let a=0;a<z.value.length;a++)z.value[a].file===e.file&&(A.value="编辑模版",T.value=z.value[a].file,B.value=T.value,U.value=z.value[a].text,O.value=!0)})(e.row)},{default:u((()=>a[9]||(a[9]=[n("编辑")]))),_:2},1032,["onClick"]),s(t,{link:"",type:"primary",size:"small",onClick:a=>{return l=e.row,void d.confirm(`你是否要删除 ${l.file} ?`,"提示",{confirmButtonText:"OK",cancelButtonText:"Cancel",type:"warning"}).then((async()=>{await V({filename:l.file,type:l.type}),c({type:"success",message:"删除成功"}),H()}));var l}},{default:u((()=>a[10]||(a[10]=[n("删除")]))),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"]),a[15]||(a[15]=r("div",{style:{"margin-top":"20px"}},null,-1)),s(t,{type:"info",onClick:a[4]||(a[4]=e=>{v((()=>{z.value.forEach((e=>{S.value.toggleRowSelection(e,!0)}))}))})},{default:u((()=>a[11]||(a[11]=[n("全选")]))),_:1}),s(t,{type:"warning",onClick:a[5]||(a[5]=e=>{S.value.clearSelection()})},{default:u((()=>a[12]||(a[12]=[n("取消选择")]))),_:1}),s(t,{type:"danger",onClick:q},{default:u((()=>a[13]||(a[13]=[n("批量删除")]))),_:1}),a[16]||(a[16]=r("div",{style:{"margin-top":"20px"}},null,-1)),s(J,{onSizeChange:W,onCurrentChange:Y,"current-page":F.value,"page-size":N.value,layout:"total, sizes, prev, pager, next, jumper","page-sizes":[10,20,30,40],total:z.value.length},null,8,["current-page","page-size","total"])])),_:1})])}}}),[["__scopeId","data-v-0c7c8c5b"]]);export{B as default};