import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const hootSchema = new Schema({
    text: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
}, {
    timestamps: true
});

const Hoot = model('Hoot', hootSchema);

export default Hoot;
