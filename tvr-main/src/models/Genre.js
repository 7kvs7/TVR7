import mongoose from 'mongoose';

const GenreSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    description: { type: String, default: '' },
    categories: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category' }]
});

export default mongoose.model('Genre', GenreSchema);