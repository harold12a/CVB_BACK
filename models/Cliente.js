import { Schema, model, Types } from 'mongoose'

let collection = 'clientes'

let schema = new Schema({
    name: { type: String, required: true },
    last_name: { type: String, required: false },
    city: { type: String, required: true },
    country: { type: String, required: true },
    date: { type: Date }, 
    photo: { type: String, required: true },
    user_id: {
        type: Types.ObjectId, 
        ref: 'users',
        required: true
    },
    active: { type: Boolean, required: true }
}, { timestamps: true })

let Cliente = model(collection, schema)

export default Cliente

