import { Schema, Types, model } from "mongoose";

let collection = "carts";

const schema = new Schema(
    {
        course_id: { type: Types.ObjectId, ref: "cursos" },
        extinguisher_id: { type: Types.ObjectId, ref: "extintor" },
        news_id: { type: Types.ObjectId, ref: "noticias" },
        post_id: { type: Types.ObjectId, ref: "post" },
        training_id: { type: Types.ObjectId, ref: "capacitaciones" },

    },
    {
        timestamps: true,
    }
);

let Cart = model(collection, schema);
export default Cart;
