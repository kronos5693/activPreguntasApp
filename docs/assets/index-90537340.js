(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const u of t.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&c(u)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const d=[{pregunta:"Cual es la formula de velocidad",respuesta:[{respuesta:"Velecidad=KM/t",correcta:!0},{respuesta:"Velocidad=t/KM",correcta:!1},{respuesta:"Velocidad=Aceleracion/KM",correcta:!1}]},{pregunta:"Cual es la Raiz cuadrada de 4",respuesta:[{respuesta:"2",correcta:!0},{respuesta:"1",correcta:!1},{respuesta:"4",correcta:!1}]},{pregunta:"Que pais es Limitrofe con la Argentina",respuesta:[{respuesta:"Peru",correcta:!1},{respuesta:"Chile",correcta:!0},{respuesta:"Ecuador",correcta:!1}]},{pregunta:"En que provincia Argentina podemos encontrar Las Cataratas del Iguazu",respuesta:[{respuesta:"Corrientes",correcta:!1},{respuesta:"Salta",correcta:!1},{respuesta:"Misiones",correcta:!0}]}];let o=0,i=0;const n=d;function l(s){if(o<n.length){s.innerHTML=`<h1>${n[o].pregunta}</h1>`;const r=document.createElement("ul");n[o].respuesta.forEach(a=>{const c=document.createElement("li"),e=document.createElement("button");e.value=String(a.correcta),e.classList.add("botonclick"),e.textContent=a.respuesta,e.addEventListener("click",()=>{console.log(a.correcta),a.correcta&&(i+=1),l(s)}),c.appendChild(e),r.appendChild(c)}),s.appendChild(r),++o}else s.innerHTML=`<h1>COMPLETADO!!! 🎆 🔥  </h1> <h3>puntos: ${i} / ${n.length}  </h3>`}const p=document.querySelector("#app");l(p);
