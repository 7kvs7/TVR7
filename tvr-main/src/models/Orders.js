import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    items: [{
        bookId: { type: mongoose.Schema.Types.ObjectId, ref: 'Book', required: true },
        quantity: { type: Number, default: 1 },
        priceAtOrder: { type: Number, required: true }
    }],
    totalPrice: { type: Number, required: true },
    status: { type: String, enum: ['ожидает', 'оплачен', 'отправлен', 'отменён'], default: 'ожидает' }
}, { timestamps: true });

export default mongoose.model('Order', OrderSchema);