var $=Object.defineProperty;var C=(o,t,s)=>t in o?$(o,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):o[t]=s;var c=(o,t,s)=>(C(o,typeof t!="symbol"?t+"":t,s),s);import{P as p}from"./Plan-BJnWljSG.js";import{ac as P,b as k,D as d,E as _,F as e,H as i,G as x,J as b,K as T,I as N,B,r as h,g as v,O as H,Q as F,R as L,A as S,ad as M,S as R}from"./index-DRkaJlvC.js";import{u as U,P as j,a as z,b as D}from"./User-Do7w9z6T.js";import{_ as E}from"./index-B1kXxv-8.js";import{B as O}from"./index-Ce82sHUd.js";import"./index-BoCG2yQc.js";import{S as V}from"./Skeleton-DAfT_4ud.js";import"./moment-BjLXg0w5.js";import"./User-BGMk0TC4.js";import"./omit-f96Oznw2.js";import"./vnode--2Vkbv_C.js";import"./index-DpT_JXnx.js";const G={class:"w-full rounded-xl p-5 bg-white flex-1",style:{"box-shadow":"var(--shadow)"}},A={class:"text-xl font-black"},I=["innerHTML"],J={class:"mt-5 rounded-xl p-5 bg-white",style:{"box-shadow":"var(--shadow)"}},K=e("p",{class:"text-md font-black"},"付款周期",-1),Q={class:"flex lg:flex-wrap lg:flex-row flex-col text-sm font-black text-[var(--text-gray)] gap-5 items-center mt-5"},q=["onClick"],W={__name:"Left",props:{P:{},PModifiers:{}},emits:["update:P"],setup(o){const t=P(o,"P");k(()=>{t.value.Type=p.prototype.Handel_One(t.value.data),s()});const s=()=>{let r=[];return p.List.forEach(a=>{t.value.data[a]&&r.push({type:a,money:(t.value.data[a]/100).toFixed(2),title:p.prototype.Handel_name(a)})}),r};return(r,a)=>{var u,l;return d(),_(b,null,[e("div",G,[e("p",A,i((u=t.value.data)==null?void 0:u.name),1),e("div",{class:"html mt-3",innerHTML:x(p).Handel_Plan((l=t.value.data)==null?void 0:l.content)},null,8,I)]),e("div",J,[K,e("div",Q,[(d(!0),_(b,null,T(s(),n=>(d(),_("p",{class:N([n.type===t.value.Type?"border-[var(--bg)] text-[var(--bg)]":"","lg:px-14 lg:w-auto w-full text-center cursor-pointer rounded-lg border py-2"]),onClick:f=>t.value.Type=n.type},i(n.title),11,q))),256))])])],64)}}},X={class:"bg-white p-5 mb-5 lg:mb-0 rounded-xl h-[100%]",style:{"box-shadow":"var(--shadow)"}},Y=e("p",{class:"font-black"},"订单详情",-1),Z={class:"mt-4"},tt=e("p",{class:"text-[12px] font-black text-[var(--text-gray)]"},"订单总额",-1),et={class:"flex gap-2 font-black justify-between mt-2"},at={class:"text-[var(--text-gray)]"},st=e("p",{class:"text-[12px] mt-5 font-black text-[var(--text-gray)]"},"套餐流量",-1),ot={class:"font-black text-[var(--text-gray)] mt-2"},lt=e("div",{class:"mt-5 flex justify-between"},[e("p",{class:"text-[12px] font-black text-[var(--text-gray)]"},"折扣金额")],-1),nt={class:"flex flex-col mt-5 justify-between"},rt={class:"mt-5"},it=e("p",{class:"text-[12px] font-black text-[var(--text-gray)]"},"抵扣金额",-1),ut={class:"mt-2 font-black text-[var(--text-gray)]"},dt=e("hr",{class:"mt-5"},null,-1),ct={class:"mt-5 flex text-lg justify-between items-center"},pt=e("p",null,"支付总计",-1),_t={class:"font-black text-xl"},vt={__name:"Right",props:{P:{},PModifiers:{}},emits:["update:P"],setup(o){const t=P(o,"P"),s=B(),r=U(),a=h({value:"",ok(){j({plan_id:t.value.data.id,code:this.value}).then(l=>{t.value.Handel_Coupon(l.data),t.value.Coupon=this.value})}}),u=h({loading:!1,submit(){this.loading=!0,setTimeout(async()=>{const l=await t.value.BuyNow();L.success("订单创建成功"),this.loading=!1,await s.push({name:"CheckOut",params:{id:l.data}})},100)}});return(l,n)=>{var g,y;const f=E,w=O;return d(),_("div",X,[Y,e("div",Z,[tt,e("div",et,[e("p",null,i((g=t.value.data)==null?void 0:g.name)+"x "+i(x(p).prototype.Handel_name(t.value.Type)),1),e("p",at,i((y=x(r).Config)==null?void 0:y.currency_symbol)+i((t.value.data[t.value.Type]/100).toFixed(2)),1)])]),st,e("p",ot,i(t.value.data.transfer_enable)+" GB",1),lt,e("div",nt,[v(f,{value:a.value.value,"onUpdate:value":n[0]||(n[0]=m=>a.value.value=m),"enter-button":"验证",placeholder:"请输入优惠券",size:"middle",onSearch:n[1]||(n[1]=m=>a.value.ok())},null,8,["value"])]),e("div",rt,[it,e("p",ut,"¥"+i(t.value.Number.toFixed(2)),1)]),dt,e("div",ct,[pt,e("p",_t,"¥"+i((t.value.data[t.value.Type]/100-t.value.Number).toFixed(2)),1)]),v(w,{loading:u.value.loading,block:"",class:"mt-5",size:"large",type:"primary",onClick:n[2]||(n[2]=m=>u.value.submit())},{default:H(()=>[F("立即购买")]),_:1},8,["loading"])])}}};class mt{constructor(){c(this,"data");c(this,"Coupon");c(this,"Type");c(this,"Number",0)}Handel_Coupon(t){t.type===1?this.Number=t.value/100:this.Number=this.data[this.Type]/100*t.value/100}BuyNow(){return z({period:this.Type,plan_id:this.data.id,coupon_code:this.Coupon})}}const xt={key:0,class:"lg:flex gap-5"},ht={class:"lg:w-[65%] flex flex-col"},ft={class:"lg:flex-1"},Lt={__name:"Layout",setup(o){const t=h(new mt),s=S();return k(()=>{D(s.params.id).then(r=>{t.value.data=r.data}).catch(r=>{M.push("/dashboard")})}),(r,a)=>{const u=V;return t.value.data?(d(),_("div",xt,[e("div",ht,[v(W,{P:t.value,"onUpdate:P":a[0]||(a[0]=l=>t.value=l)},null,8,["P"])]),e("div",ft,[v(vt,{P:t.value,"onUpdate:P":a[1]||(a[1]=l=>t.value=l)},null,8,["P"])])])):(d(),R(u,{key:1,active:"",avatar:""}))}}};export{Lt as default};