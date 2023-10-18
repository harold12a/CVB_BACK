import { Schema, model } from 'mongoose'

let collection = 'capacitaciones'
let schema = new Schema({
    image: { type: String, required: true },
    title: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    date: { type: Date, required: true },
    timeofTraining: { type: String, required: true }
}, {
    timestamps: true,
})
let Training = model(collection, schema)
export default Training
