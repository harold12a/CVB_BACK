import 'dotenv/config.js'
import '../../config/database.js'
import Noticias from '../Noticias.js'

let noticias = [
    {
        "title": "Rescate heroico en incendio",
        "date": "2023-10-02",
        "description": "Los bomberos rescataron a una familia atrapada en un incendio en una vivienda en llamas. Su rápida respuesta y valentía salvaron vidas.",
        "image": "https://www.ellitoral.com/images/2023/06/15/xPt0ASwg6_1300x655__1.jpg"
    },
    {
        "title": "Nuevo equipo de protección",
        "date": "2023-09-15",
        "description": "El departamento de bomberos de la ciudad adquirió un nuevo equipo de protección contra incendios de última generación para garantizar la seguridad de sus miembros.",
        "image": "https://versionantigua.bucaramanga.gov.co/noticias/wp-content/uploads/2018/03/bomberos-1.jpg"
    },
    {
        "title": "Simulacro de incendio en escuela",
        "date": "2023-08-28",
        "description": "Los bomberos realizaron un simulacro de incendio en una escuela local para entrenar a los estudiantes y el personal en caso de una emergencia real.",
        "image": "https://img.freepik.com/fotos-premium/simulacro-incendio-entrenamiento-emergencia-rescate-escuela-bombero_45570-127.jpg"
    },
    {
        "title": "Incendio forestal controlado",
        "date": "2023-07-12",
        "description": "Después de días de arduo trabajo, los bomberos lograron controlar un incendio forestal que amenazaba la vida silvestre y las propiedades.",
        "image": "https://kpnsafety.com/wp-content/uploads/2021/09/incendios-forestales.jpg"
    }
]

Noticias.insertMany(noticias)
console.log('Noticias created !!');