import { Schema, model } from 'mongoose'

let collection = 'curso'
let schema = new Schema({
    title: { type: String, required: true },
    date: { type: Date, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    timeofCurse: { type: String, required: true }
}, {
    timestamps: true,
})
let Course = model(collection, schema)
export default Course
