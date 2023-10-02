import { Schema, model } from 'mongoose'

let collection = 'noticias'
let schema = new Schema({
    title: { type: String, required: true },
    date: { type: Date, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
}, {
    timestamps: true,
})
let Noticias = model(collection, schema)
export default Noticias