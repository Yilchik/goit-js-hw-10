import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{f as m,i as h}from"./assets/vendor-77e16229.js";const d=document.querySelector('input[type="text"]'),n=document.querySelector("button[data-start]"),f=document.querySelector(".value[data-days]"),y=document.querySelector(".value[data-hours]"),g=document.querySelector(".value[data-minutes]"),w=document.querySelector(".value[data-seconds]"),v={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){const o=e[0],t=new Date;console.log(e[0]),o.getTime()<t.getTime()?(window.alert("Please choose a date in the future"),n.disabled=!0):n.disabled=!1}};m(d,v);n.addEventListener("click",p);function p(){const e=new Date(d.value).getTime(),o=new Date().getTime(),t=e-o;if(t<=0){window.alert("Please choose a date in the future");return}n.disabled=!0,countdownInterval=setInterval(()=>{const{days:c,hours:u,minutes:s,seconds:r}=a(t);f.textContent=addLeadingZero(c),y.textContent=addLeadingZero(u),g.textContent=addLeadingZero(s),w.textContent=addLeadingZero(r),t-=1e3,t<0&&(clearInterval(countdownInterval),h.success({title:"Countdown Finished",message:"The countdown timer has ended",position:"topRight"}))},1e3)}function a(e){const s=Math.floor(e/864e5),r=Math.floor(e%864e5/36e5),i=Math.floor(e%864e5%36e5/6e4),l=Math.floor(e%864e5%36e5%6e4/1e3);return{days:s,hours:r,minutes:i,seconds:l}}console.log(a(2e3));console.log(a(14e4));console.log(a(2414e4));
//# sourceMappingURL=commonHelpers.js.map
