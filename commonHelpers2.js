import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{i}from"./assets/vendor-77e16229.js";const r=document.querySelector(".form");r.addEventListener("submit",m=>{m.preventDefault();const s=new FormData(r),e=s.get("delay"),o=s.get("state");new Promise((t,c)=>{o==="fulfilled"?setTimeout(()=>t(e),e):o==="rejected"&&setTimeout(()=>c(e),e)}).then(t=>i.success({title:"Success",message:`✅ Fulfilled promise in ${e}ms`,position:"topRight"})).catch(t=>i.error({title:"Error",message:`❌ Rejected promise in ${e}ms`,position:"topRight"}))});
//# sourceMappingURL=commonHelpers2.js.map
