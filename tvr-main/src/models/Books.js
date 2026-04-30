import mongoose from 'mongoose';

const BookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, default: '' },
    coverImage: { type: String, default: '' },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
    genres: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Genre' }],

});

export default mongoose.model('Book', BookSchema);