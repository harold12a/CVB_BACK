import { Schema, model } from 'mongoose'

let collection = 'extintor'
let schema = new Schema({
    image: { type: String, required: true },
    extinguisher: { type: String, required: true },
    price: { type: Number, required: true },
}, {
    timestamps: true,
})
let Extinguisher = model(collection, schema)
export default Extinguisher
