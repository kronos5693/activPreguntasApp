import { IPreguntaRespuesta } from "../db.pregunt.interface";


export const preguntasDB : IPreguntaRespuesta [] =[
{pregunta: "Cual es la formula de velocidad",
respuesta:[
    {respuesta:"Velecidad=KM/t",correcta:true},
    {respuesta:"Velocidad=t/KM",correcta:false},
    {respuesta:"Velocidad=Aceleracion/KM",correcta:false}
]
},
{pregunta:"Cual es la Raiz cuadrada de 4",
respuesta:[
    {respuesta:"2",correcta:true},
    {respuesta:"1",correcta:false},
    {respuesta:"4",correcta:false}
]
},
{pregunta:"Que pais es Limitrofe con la Argentina",
respuesta:[
    {respuesta:"Peru",correcta:false},
    {respuesta:"Chile",correcta:true},
    {respuesta:"Ecuador",correcta:false}
]
},
{pregunta:"En que provincia Argentina podemos encontrar Las Cataratas del Iguazu",
respuesta:[
    {respuesta:"Corrientes",correcta:false},
    {respuesta:"Salta",correcta:false},
    {respuesta:"Misiones",correcta:true}
]
}

]