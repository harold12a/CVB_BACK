import 'dotenv/config.js'
import '../../config/database.js'
import Extinguisher from '../Extinguisher.js'

let extinguisher = [
    {
        "image": "https://provesi.com.co/2500-large_default/extintor-5-libras-abc.jpg",
        "extinguisher": "Extintor ABC 5 lb",
        "price": 50.000
    },
    {
        "image": "https://safetymeasuresas.com/wp-content/uploads/2020/02/extintor-co2-10-libras.jpg",
        "extinguisher": "Extintor CO2 10 lb",
        "price": 75.000
    },
    {
        "image": "https://agrofarbef.com/wp-content/uploads/2021/11/extintor-agua-1.jpg",
        "extinguisher": "Extintor de agua 2.5 galones",
        "price": 60.000
    },
    {
        "image": "https://safetymeasuresas.com/wp-content/uploads/2019/05/extintor-multiproposito-abc-20-libras-quimico-certificado-D_NQ_NP_649450-MCO25825273871_072017-F.jpg",
        "extinguisher": "Extintor químico seco 20 lb",
        "price": 90.000
    }
]

Extinguisher.insertMany(extinguisher)
console.log('extinguisher created !!');