import { Schema, model } from 'mongoose'

let collection = 'post'
let schema = new Schema({
    image: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: Date, required: true },
}, {
    timestamps: true,
})
let Post = model(collection, schema)
export default Post