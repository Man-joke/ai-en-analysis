import{m as j}from"./DD1uyfc1.js";import{U as I,a2 as B,an as W,V as Y,W as A,al as S,ah as N,c as o,ai as Z,ax as J,Y as K,Z as i,z as d,aq as R,r as Q,bc as X,$ as P,a3 as p,aC as ee,N as le,aj as ae,ao as x,bb as te,a1 as ne,aT as oe}from"./BdF_XNO5.js";import{m as ue,R as ie,V as re,u as ce}from"./BvskC3bI.js";import{u as F,a as se,b as de}from"./atxgjqlj.js";import{V as ve}from"./CnuepXYu.js";const O=Symbol.for("vuetify:selection-control-group"),q=I({color:String,disabled:{type:Boolean,default:null},defaultsTarget:String,error:Boolean,id:String,inline:Boolean,falseIcon:B,trueIcon:B,ripple:{type:[Boolean,Object],default:!0},multiple:{type:Boolean,default:null},name:String,readonly:{type:Boolean,default:null},modelValue:null,type:String,valueComparator:{type:Function,default:W},...j(),...ue(),...Y()},"SelectionControlGroup"),fe=I({...q({defaultsTarget:"VSelectionControl"})},"VSelectionControlGroup");A()({name:"VSelectionControlGroup",props:fe(),emits:{"update:modelValue":e=>!0},setup(e,u){let{slots:c}=u;const l=S(e,"modelValue"),t=N(),v=o(()=>e.id||`v-selection-control-group-${t}`),r=o(()=>e.name||v.value),a=new Set;return Z(O,{modelValue:l,forceUpdate:()=>{a.forEach(n=>n())},onForceUpdate:n=>{a.add(n),J(()=>{a.delete(n)})}}),K({[e.defaultsTarget]:{color:i(e,"color"),disabled:i(e,"disabled"),density:i(e,"density"),error:i(e,"error"),inline:i(e,"inline"),modelValue:l,multiple:o(()=>!!e.multiple||e.multiple==null&&Array.isArray(l.value)),name:r,falseIcon:i(e,"falseIcon"),trueIcon:i(e,"trueIcon"),readonly:i(e,"readonly"),ripple:i(e,"ripple"),type:i(e,"type"),valueComparator:i(e,"valueComparator")}}),F(()=>{var n;return d("div",{class:["v-selection-control-group",{"v-selection-control-group--inline":e.inline},e.class],style:e.style,role:e.type==="radio"?"radiogroup":void 0},[(n=c.default)==null?void 0:n.call(c)])}),{}}});const E=I({label:String,baseColor:String,trueValue:null,falseValue:null,value:null,...j(),...q()},"VSelectionControl");function me(e){const u=ae(O,void 0),{densityClasses:c}=ce(e),l=S(e,"modelValue"),t=o(()=>e.trueValue!==void 0?e.trueValue:e.value!==void 0?e.value:!0),v=o(()=>e.falseValue!==void 0?e.falseValue:!1),r=o(()=>!!e.multiple||e.multiple==null&&Array.isArray(l.value)),a=o({get(){const m=u?u.modelValue.value:l.value;return r.value?x(m).some(s=>e.valueComparator(s,t.value)):e.valueComparator(m,t.value)},set(m){if(e.readonly)return;const s=m?t.value:v.value;let b=s;r.value&&(b=m?[...x(l.value),s]:x(l.value).filter(C=>!e.valueComparator(C,t.value))),u?u.modelValue.value=b:l.value=b}}),{textColorClasses:n,textColorStyles:y}=se(o(()=>{if(!(e.error||e.disabled))return a.value?e.color:e.baseColor})),{backgroundColorClasses:V,backgroundColorStyles:k}=de(o(()=>a.value&&!e.error&&!e.disabled?e.color:e.baseColor)),h=o(()=>a.value?e.trueIcon:e.falseIcon);return{group:u,densityClasses:c,trueValue:t,falseValue:v,model:a,textColorClasses:n,textColorStyles:y,backgroundColorClasses:V,backgroundColorStyles:k,icon:h}}const _=A()({name:"VSelectionControl",directives:{Ripple:ie},inheritAttrs:!1,props:E(),emits:{"update:modelValue":e=>!0},setup(e,u){let{attrs:c,slots:l}=u;const{group:t,densityClasses:v,icon:r,model:a,textColorClasses:n,textColorStyles:y,backgroundColorClasses:V,backgroundColorStyles:k,trueValue:h}=me(e),m=N(),s=R(!1),b=R(!1),C=Q(),g=o(()=>e.id||`input-${m}`),T=o(()=>!e.disabled&&!e.readonly);t==null||t.onForceUpdate(()=>{C.value&&(C.value.checked=a.value)});function U(f){T.value&&(s.value=!0,te(f.target,":focus-visible")!==!1&&(b.value=!0))}function w(){s.value=!1,b.value=!1}function L(f){f.stopPropagation()}function M(f){T.value&&(e.readonly&&t&&ne(()=>t.forceUpdate()),a.value=f.target.checked)}return F(()=>{var G,$;const f=l.label?l.label({label:e.label,props:{for:g.value}}):e.label,[z,H]=X(c),D=d("input",P({ref:C,checked:a.value,disabled:!!e.disabled,id:g.value,onBlur:w,onFocus:U,onInput:M,"aria-disabled":!!e.disabled,"aria-label":e.label,type:e.type,value:h.value,name:e.name,"aria-checked":e.type==="checkbox"?a.value:void 0},H),null);return d("div",P({class:["v-selection-control",{"v-selection-control--dirty":a.value,"v-selection-control--disabled":e.disabled,"v-selection-control--error":e.error,"v-selection-control--focused":s.value,"v-selection-control--focus-visible":b.value,"v-selection-control--inline":e.inline},v.value,e.class]},z,{style:e.style}),[d("div",{class:["v-selection-control__wrapper",n.value],style:y.value},[(G=l.default)==null?void 0:G.call(l,{backgroundColorClasses:V,backgroundColorStyles:k}),p(d("div",{class:["v-selection-control__input"]},[(($=l.input)==null?void 0:$.call(l,{model:a,textColorClasses:n,textColorStyles:y,backgroundColorClasses:V,backgroundColorStyles:k,inputNode:D,icon:r.value,props:{onFocus:U,onBlur:w,id:g.value}}))??d(le,null,[r.value&&d(re,{key:"icon",icon:r.value},null),D])]),[[ee("ripple"),e.ripple&&[!e.disabled&&!e.readonly,null,["center","circle"]]]])]),f&&d(ve,{for:g.value,onClick:L},{default:()=>[f]})])}),{isFocused:s,input:C}}}),be=I({indeterminate:Boolean,indeterminateIcon:{type:B,default:"$checkboxIndeterminate"},...E({falseIcon:"$checkboxOff",trueIcon:"$checkboxOn"})},"VCheckboxBtn"),Se=A()({name:"VCheckboxBtn",props:be(),emits:{"update:modelValue":e=>!0,"update:indeterminate":e=>!0},setup(e,u){let{slots:c}=u;const l=S(e,"indeterminate"),t=S(e,"modelValue");function v(n){l.value&&(l.value=!1)}const r=o(()=>l.value?e.indeterminateIcon:e.falseIcon),a=o(()=>l.value?e.indeterminateIcon:e.trueIcon);return F(()=>{const n=oe(_.filterProps(e),["modelValue"]);return d(_,P(n,{modelValue:t.value,"onUpdate:modelValue":[y=>t.value=y,v],class:["v-checkbox-btn",e.class],style:e.style,type:"checkbox",falseIcon:r.value,trueIcon:a.value,"aria-checked":l.value?"mixed":void 0}),c)}),{}}});export{Se as V,be as m};
