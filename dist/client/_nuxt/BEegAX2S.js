import{V as v,a as n}from"./B0JyLMqm.js";import{r as c,v as e,x as t,z as s,A as o,t as r,N as u,P as i,S as d,y as p,R as g}from"./BdF_XNO5.js";/* empty css        */import"./DD1uyfc1.js";import"./C_9V_Kc3.js";const h={class:"learningDiagnostics"},B=t("h3",{class:"learn-title bullet-bot"},"단어 학습 진단",-1),f={class:"chart-bar"},D={__name:"ChartBar",setup(F){c({txt:"최근 7일"}),c([{txt:"최근 7일"},{txt:"최근 30일"}]);const a=[{title:"완벽하게 이해하고 활용한 단어",color:"#42C5B1",value:"85"},{title:"이해하지만 활용하지 못한 단어",color:"#8DBB2C",value:"26"},{title:"잘못 이해하고 활용한 단어",color:"#FFBF00",value:"38"},{title:"철자를 잘못 알고 있는 단어",color:"#FF8D00",value:"32"},{title:"아예 모르는 단어",color:"#FD6E7F",value:"5"},{title:"학습한 누적 단어 개수",color:"#B0B0B0",value:"100"}];return(b,k)=>(r(),e("div",h,[B,t("div",f,[s(v,{"no-gutters":"",class:"gap2"},{default:o(()=>[s(n,null,{default:o(()=>[(r(),e(u,null,i(a,l=>t("div",{class:"use-word",key:l.title},[t("span",{class:"bullet",style:d({background:l.color})},null,4),t("p",null,p(l.title),1)])),64))]),_:1}),s(n,null,{default:o(()=>[(r(),e(u,null,i(a,(l,_)=>t("div",{class:"progress-background",key:l.title},[t("div",{class:g(["progress-date",l.value>70?"white":""]),style:d({width:l.value+"%",background:l.color})},[t("span",null,p(_===a.length-1?l.value+"개":l.value),1)],6)])),64))]),_:1})]),_:1})])]))}};export{D as default};
