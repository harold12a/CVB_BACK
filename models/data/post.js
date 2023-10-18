import 'dotenv/config.js'
import '../../config/database.js'
import Post from '../Post.js'

let post = [
    {
        "image": "https://facultad.pucp.edu.pe/generales-letras/wp-content/uploads/2020/11/NOTICIA-ESTRES-100.jpg",
        "title": "Taller de Manejo del Estrés",
        "description": "Un taller para aprender a manejar el estrés y las emociones negativas.",
        "date": "2023-12-10"
    },
    {
        "image": "https://www.clinicamoreno.com/wp-content/uploads/2018/05/terapia-individual.jpeg",
        "title": "Sesión de Terapia Individual",
        "description": "Una sesión de terapia individual para abordar problemas personales y emocionales.",
        "date": "2023-11-25"
    }
]

Post.insertMany(post)
console.log('post created !!');