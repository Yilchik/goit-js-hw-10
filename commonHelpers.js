import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{f as S,i as v}from"./assets/vendor-77e16229.js";let y,l=null;const f=document.querySelector('input[type="text"]'),o=document.querySelector("button[data-start]"),d=document.querySelector(".value[data-days]"),i=document.querySelector(".value[data-hours]"),m=document.querySelector(".value[data-minutes]"),h=document.querySelector(".value[data-seconds]");o.disabled=!0;function a(t){return String(t).padStart(2,"0")}const x={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){const e=t[0],n=new Date;console.log(t[0]),e.getTime()<=n.getTime()?(o.disabled=!0,v.error({title:"Error",message:"Please choose a date in the future",position:"topRight"})):(o.disabled=!1,y=e)}};S(f,x);o.addEventListener("click",C);function C(){o.disabled=!0,f.disabled=!0,l=setInterval(()=>{const t=Date.now(),e=y.getTime()-t,{days:n,hours:u,minutes:c,seconds:s}=r(e);d.textContent=a(n),i.textContent=a(u),m.textContent=a(c),h.textContent=a(s),e<=0&&(clearInterval(l),d.textContent="00",i.textContent="00",m.textContent="00",h.textContent="00")},1e3)}function r(t){const s=Math.floor(t/864e5),g=Math.floor(t%864e5/36e5),p=Math.floor(t%864e5%36e5/6e4),D=Math.floor(t%864e5%36e5%6e4/1e3);return{days:s,hours:g,minutes:p,seconds:D}}console.log(r(2e3));console.log(r(14e4));console.log(r(2414e4));
//# sourceMappingURL=commonHelpers.js.map