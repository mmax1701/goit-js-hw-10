var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var l={id:e,exports:{}};return t[e]=l,o.call(l.exports,l,l.exports),l.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o);var l=o("9dxg1");const r=document.querySelector(".breed-select"),c=document.querySelector(".loader"),d=document.querySelector(".error"),a=document.querySelector(".cat-info");function i(){c.style.display="block"}function s(){c.style.display="none"}function p(){d.style.display="block"}function u(){d.style.display="none"}r.addEventListener("change",(()=>{const e=r.value;a.style.display="none",i(),u(),(0,l.fetchCatByBreed)(e).then((e=>{const t=e[0].breeds[0];!function(e,t,n,o){const l=document.createElement("img");l.src=e;const r=document.createElement("p");r.textContent=`${t}`,r.classList.add("cat-name"),r.style.fontWeight="bold",r.style.fontSize="20px";const c=document.createElement("p");c.textContent=`Description: ${n}`;const d=document.createElement("p");d.innerHTML=`<span class="temperament">Temperament:</span> ${o}`,d.querySelector(".temperament").style.fontWeight="bold",a.innerHTML="",a.appendChild(l),a.appendChild(r),a.appendChild(c),a.appendChild(d),a.style.display="block"}(e[0].url,t.name,t.description,t.temperament)})).catch((e=>{p(),console.error(e)})).finally((()=>{s()}))})),i(),u(),(0,l.fetchBreeds)().then((e=>{e.forEach((e=>{const t=document.createElement("option");t.value=e.id,t.textContent=e.name,r.appendChild(t)}))})).catch((e=>{p(),console.error(e)})).finally((()=>{s()}));
//# sourceMappingURL=index.14b000dd.js.map
