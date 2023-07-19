import { preguntasDB } from "./DB/db";

let ContadorPregunta = 0;
let puntos = 0;
const db = preguntasDB;

export function dibujarPreguntasRespuestas(elemento: HTMLDivElement) {
	if (ContadorPregunta < db.length) {
		elemento.innerHTML = `<h1>${db[ContadorPregunta].pregunta}</h1>`;

		const ul = document.createElement('ul');

		db[ContadorPregunta].respuesta.forEach((r) => {
			const li = document.createElement('li');
			const btn = document.createElement('button');
			btn.value = String(r.correcta);
			btn.classList.add('botonclick');
			btn.textContent = r.respuesta;
			btn.addEventListener('click', () => {
				console.log(r.correcta);
				if (r.correcta) {
					// ++puntos;
					puntos += 1;
				}
				dibujarPreguntasRespuestas(elemento);
			});
			li.appendChild(btn);
			ul.appendChild(li);
		});

		elemento.appendChild(ul);

		++ContadorPregunta;
	} else {
		elemento.innerHTML = `<h1>COMPLETADO!!! 🎆 🔥  </h1> <h3>puntos: ${puntos} / ${db.length}  </h3>`;
	}
}