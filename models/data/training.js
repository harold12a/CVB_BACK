import 'dotenv/config.js'
import '../../config/database.js'
import Training from '../Training.js'

let training = [
    {
        "title": "Capacitacion de Primeros Auxilios para Bomberos",
        "date": "2023-11-18",
        "description": "Capacitación en primeros auxilios diseñado específicamente para bomberos.",
        "image": "https://www.aprendum.com/cdn/13/images/20141009131009cnmlfs.jpg",
        "price": 120.000,
        "timeofTraining": "8:00 AM - 2:00 PM"
    },
    {
        "title": "Taller de Combate de Incendios Forestales",
        "date": "2023-12-05",
        "description": "Un taller práctico para enseñar a los bomberos cómo combatir incendios forestales de manera efectiva.",
        "image": "https://www.gobernacionzacapa.gob.gt/wp-content/uploads/2023/01/326255334_951535732505698_7113675984920952652_n-1080x675.jpg",
        "price": 80.000,
        "timeofTraining": "9:00 AM - 4:00 PM"
    },
    {
        "title": "Seminario de Rescate Acuático",
        "date": "2024-02-15",
        "description": "Un seminario intensivo para entrenar a los bomberos en técnicas de rescate acuático y salvamento en aguas peligrosas.",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEyz1TtG05rfMBcihJO2nfls6r90puvwN_knYvYW9R2LEcBR7yNFzkSPrI4rXHv-CV0Gk&usqp=CAU",
        "price": 150.000,
        "timeofTraining": "10:00 AM - 3:00 PM"
    },
    {
        "title": "Simulacro de Emergencia en Edificios Altos",
        "date": "2024-03-22",
        "description": "Un ejercicio de simulacro para que los bomberos practiquen la respuesta a emergencias en rascacielos y edificios altos.",
        "image": "https://www.semana.com/resizer/0SZjhj7HNuYQNoh0m1vgP0xM_U4=/fit-in/1280x0/smart/filters:format(jpg):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/semana/I6DQ6VBB4FCOFKQ3KWDAXZ2JSE.jpeg",
        "price": 500.000,
        "timeofTraining": "1:00 PM - 5:00 PM"
    }
]

Training.insertMany(training)
console.log('training created !!');