import"./BdF_XNO5.js";let p;const a=new Uint8Array(16);function c(){if(!p&&(p=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!p))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return p(a)}const m=[];for(let t=0;t<256;++t)m.push((t+256).toString(16).slice(1));function u(t,n=0){return m[t[n+0]]+m[t[n+1]]+m[t[n+2]]+m[t[n+3]]+"-"+m[t[n+4]]+m[t[n+5]]+"-"+m[t[n+6]]+m[t[n+7]]+"-"+m[t[n+8]]+m[t[n+9]]+"-"+m[t[n+10]]+m[t[n+11]]+m[t[n+12]]+m[t[n+13]]+m[t[n+14]]+m[t[n+15]]}const s=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),o={randomUUID:s};function g(t,n,r){if(o.randomUUID&&!n&&!t)return o.randomUUID();t=t||{};const e=t.random||(t.rng||c)();if(e[6]=e[6]&15|64,e[8]=e[8]&63|128,n){r=r||0;for(let i=0;i<16;++i)n[r+i]=e[i];return n}return u(e)}const U=""+new URL("img_stamp_06.Vcj__xtx.svg",import.meta.url).href,l=""+new URL("img_stamp_07.VeTDx0hp.svg",import.meta.url).href,y=""+new URL("img_stamp_08.C9Wv6x-l.svg",import.meta.url).href,_=""+new URL("img_stamp_09.Cmo9irOz.svg",import.meta.url).href,x=""+new URL("img_stamp_10.IbUiHqLz.svg",import.meta.url).href;export{_ as a,y as b,l as c,U as d,x as s,g as v};
