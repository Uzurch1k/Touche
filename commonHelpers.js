import{s as I,I as g,i as d,_ as f,a as p,f as _,b as q,c as B}from"./assets/vendor-a9a541d7.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();document.addEventListener("DOMContentLoaded",()=>{const r=document.querySelector(".hero__logo"),s=document.querySelector(".hero__address"),t=document.querySelector(".hero__title"),n=document.querySelector(".hero__sumtitle"),e=document.querySelector(".hero__box"),o=document.querySelector(".hero__btn");r&&setTimeout(function(){r.classList.add("up")},100),s&&setTimeout(function(){s.classList.add("up")},100),t&&setTimeout(function(){t.classList.add("up")},250),n&&setTimeout(function(){n.classList.add("up")},300),e&&setTimeout(function(){e.classList.add("up")},350),o&&setTimeout(function(){o.classList.add("up")},600)});document.addEventListener("DOMContentLoaded",()=>{const r=document.querySelector(".hero"),s=document.querySelector(".vector__icon");if(r){const t=r.getBoundingClientRect().height,n=r.getBoundingClientRect().bottom,e=t/2;s&&(e>n?s.classList.add("stopped"):s.classList.remove("stopped"),window.addEventListener("scroll",()=>{const o=r.getBoundingClientRect().bottom;s&&(e>o?s.classList.add("stopped"):s.classList.remove("stopped"))}))}});const b=document.querySelector(".vector");b&&b.addEventListener("click",()=>{const r=document.querySelector(".authorization");I(r,{duration:1e3})});function k(){const r=document.querySelector(".survey-area__btn"),s=document.querySelectorAll('.survey-area input[type="checkbox"]');function t(){const n=Array.from(s).every(e=>!e.checked);r.disabled=n,n?r.classList.add("disabled"):r.classList.remove("disabled")}r&&s.length>0&&(t(),s.forEach(n=>{n.addEventListener("change",t)}))}function x(){const r=document.querySelector(".allergy__btn"),s=document.querySelectorAll('.allergy input[type="checkbox"]');function t(){const n=Array.from(s).every(e=>!e.checked);r.disabled=n,n?r.classList.add("disabled"):r.classList.remove("disabled")}r&&s.length>0&&(t(),s.forEach(n=>{n.addEventListener("change",t)}))}function A(){const r=document.querySelectorAll('.epilation input[type="radio"]'),s=document.querySelector(".epilation__btn");s&&(s.disabled=!0,s.classList.add("disabled"),r&&r.forEach(t=>{t.addEventListener("change",()=>{s.disabled=!1,s.classList.remove("disabled")})}))}function D(){if(!document.getElementById("destination"))return;const s=document.querySelectorAll(".destination__box-inputs input"),t=document.getElementById("destination-name"),n=document.getElementById("destination-surname"),e=document.getElementById("destination-tel"),o=document.getElementById("destination-email"),a=document.getElementById("destination-check"),c=document.querySelector(".destination__btn");g(e,{mask:"+1 (000) 000-0000"});function l(){let i=!0;d(t.value.trim())&&(i=!1),d(n.value.trim())&&(i=!1);const u=e.value.replace(/[^\d+]/g,"");f(u,"en-CA")||(i=!1),p(o.value.trim())||(i=!1),a.checked||(i=!1),c.disabled=!i,i?c.classList.remove("disabled"):c.classList.add("disabled")}function m(i){if(i===t&&(d(t.value.trim())?t.classList.add("error"):t.classList.remove("error")),i===n&&(d(n.value.trim())?n.classList.add("error"):n.classList.remove("error")),i===e){const u=e.value.replace(/[^\d+]/g,"");f(u,"en-CA")?e.classList.remove("error"):e.classList.add("error")}i===o&&(p(o.value.trim())?o.classList.remove("error"):o.classList.add("error")),i===a&&(a.checked?a.classList.remove("error"):a.classList.add("error")),l()}s.forEach(i=>{i.addEventListener("input",l),i.addEventListener("blur",()=>m(i))}),a.addEventListener("change",()=>{l(),m(a)}),l()}_("#reservation-date",{locale:q.French,altInput:!0,altFormat:"M j, Y",dateFormat:"d.m.Y",showMonths:1,minDate:"today",shorthandCurrentMonth:!0,maxDate:new Date().fp_incr(21),inline:!0});const E=document.createElement("style");E.innerHTML=`
    .flatpickr-calendar .dayContainer span:nth-child(n+36) {
      display: none !important;
    }
  `;document.head.appendChild(E);function y(){if(!document.getElementById("reservation"))return;const s=document.getElementById("reservation-date"),t=document.querySelectorAll('input[name="reservation-time"]'),n=document.querySelector(".reservation__btn");let e=!0;s.value.trim()||(e=!1);let o=!1;t.forEach(a=>{a.checked&&(o=!0)}),o||(e=!1),n.disabled=!e,e?n.classList.remove("disabled"):n.classList.add("disabled")}const M=document.getElementById("reservation");if(M){const r=document.getElementById("reservation-date"),s=document.querySelectorAll('input[name="reservation-time"]');r.addEventListener("change",y),s.forEach(t=>{t.addEventListener("change",y)})}function F(){if(!document.getElementById("submit"))return;const s=document.querySelectorAll(".submit__box-inputs input"),t=document.getElementById("submit-name"),n=document.getElementById("submit-surname"),e=document.getElementById("submit-email"),o=document.getElementById("submit-tel"),a=document.getElementById("submit-check"),c=document.querySelector(".submit__btn");g(o,{mask:"+1 (000) 000-0000"});function l(){let i=!0;d(t.value.trim())&&(i=!1),d(n.value.trim())&&(i=!1);const u=o.value.replace(/[^\d+]/g,"");f(u,"en-CA")||(i=!1),p(e.value.trim())||(i=!1),a.checked||(i=!1),c.disabled=!i,i?c.classList.remove("disabled"):c.classList.add("disabled")}function m(i){if(i===t&&(d(t.value.trim())?t.classList.add("error"):t.classList.remove("error")),i===n&&(d(n.value.trim())?n.classList.add("error"):n.classList.remove("error")),i===o){const u=o.value.replace(/[^\d+]/g,"");f(u,"en-CA")?o.classList.remove("error"):o.classList.add("error")}i===e&&(p(e.value.trim())?e.classList.remove("error"):e.classList.add("error")),i===a&&(a.checked?a.classList.remove("error"):a.classList.add("error")),l()}s.forEach(i=>{i.addEventListener("input",l),i.addEventListener("blur",()=>m(i))}),a.addEventListener("change",()=>{l(),m(a)}),l()}const L=document.querySelectorAll(".btn-next");function N(){L&&L.forEach(r=>{r.addEventListener("click",s=>{s.preventDefault();const t=s.currentTarget,n=t.dataset.id,e=document.getElementById(n);if(!t.classList.contains("disabled")){const o=document.querySelector(".form-active");o&&(o.classList.remove("form-active"),e.classList.add("form-active"))}})})}const v=document.querySelector(".form-submit");function O(){if(v){const r=v.dataset.id,s=document.getElementById(r);if(!v.classList.contains("disabled")){const t=document.querySelector(".form-active");t&&(t.classList.remove("form-active"),s.classList.add("form-active"))}}}async function C(r,s){const t="E9TBO3+Qgnjyf77/P4fhrbQ+7TiLbOrurVX+5kkNMTb73cstzOtfEHqaMxyO8MlqdXt3a/wzj5Un3asFKkKarA==",n="14117F0E-FCE4-48A3-8514-1CD4D58A6FD6",e="https://rest-api.telesign.com/v1/messaging",o={phone_number:r,message:s,message_type:"ARN"},a={headers:{accept:"application/json","content-type":"application/x-www-form-urlencoded",authorization:"Basic "+btoa(n+":"+t)}};try{const c=await B.post(e,o,a);console.log("SMS відправлено успішно:",c.data)}catch(c){console.error("Помилка при відправці SMS:",c)}}const h=document.getElementById("submitForm");h.addEventListener("submit",async r=>{r.preventDefault();const s=new FormData(h),t={};s.forEach((a,c)=>{t[c]||(t[c]=[]),t[c].push(a)}),O(),console.log("Form Data:",t);const n=t["submit-tel"][0],o=`Bonjour ${t["submit-name"][0]} :)
Pour vous - 70% de réduction
pour votre première séance d'épilation laser chez Touche Laser Clinique!
Si vous ne souhaitez pas poursuivre la conversation, écrivez STOP

Notre salon est le plus honnête à Montréal! Nous ne vous vendons pas de séances supplémentaires et ne réduisons pas la puissance de l'appareil ! Nos mots-clés sont honnêteté, transparence, qualité et efficacité.

Vous verrez des résultats après la première séance. Pouvez-vous nous donner une chance de vous le prouver ? Veuillez écrire quels domaines spécifiques souhaiteriez-vous influencer ? Écrivez-moi s'il vous plaît.`;await C(n,o),h.reset()});k();x();A();D();y();F();N();
//# sourceMappingURL=commonHelpers.js.map