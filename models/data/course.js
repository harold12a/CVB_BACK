import 'dotenv/config.js'
import '../../config/database.js'
import Course from '../Course.js'

let course = [
    {
        "title": "Curso de Primeros Auxilios para Bomberos",
        "date": "2023-11-18",
        "description": "Un curso de capacitación en primeros auxilios diseñado específicamente para bomberos.",
        "image": "https://bomberoscucuta.org/wp-content/uploads/2022/12/bomberos-cucuta-capacitacion-7.jpg",
        "price": 120.000,
        "timeofCurse": "8:00 AM - 2:00 PM"
    },
    {
        "image": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2020/04/26203119/Incendios-Forestales-Cortesi%CC%81a-ConaforOaxaca.jpeg",
        "title": "Nuevas estrategias de lucha contra incendios en bosques",
        "date": "2023-12-20",
        "description": "Expertos en lucha contra incendios forestales se reúnen para discutir las últimas estrategias y técnicas.",
        "price": 80.000,
        "timeofCurse": "8:00 AM - 2:00 PM"
    },
    {
        "image": "https://entrenadorestsa.com/wp-content/uploads/2016/05/Rescate-en-Alturas.jpg",
        "title": "Rescate en alturas",
        "date": "2023-11-15",
        "description": "Este curso de rescate en alturas es una oportunidad única para adquirir las habilidades esenciales necesarias para llevar a cabo operaciones de rescate seguras y efectivas en entornos elevados, como edificios, torres y estructuras.",
        "price": 250.000,
        "timeofCurse": "8:00 AM - 2:00 PM"
    },
    {
        "image": "https://www.itto.int/files/topics/6776_ext_06_es_0.jpg",
        "title": "Curso de prevención de incendios para la comunidad",
        "date": "2023-07-05",
        "description": "Un curso gratuito de prevención de incendios se ofrece a la comunidad para aumentar la conciencia sobre la seguridad contra incendios.",
        "price": 300.000,
        "timeofCurse": "10:00 AM - 1:00 PM",
    }
]

Course.insertMany(course)
console.log('Course created !!');