import Carts from "../models/Carts.js";

class CartService {
    async create(data) {
        const {author, title, price, description, category} = data;
        const newCart = await Cart.create({author, title, price, description, category});
        return newCart;
    }

    async getAll() {
        const carts = await Cart.find();
        return carts;
    }

    async getOne(id) {
        if (!id) {
            throw new Error('не указан ID');
        }
        const cart = await Cart.findById(id);
        return cart;
    }

    async update(id, data) {
        if (!id) {
            throw new Error('id не указан');
        }
        const updatedCart = await Cart.findByIdAndUpdate(id, data, {new: true});
        return updatedCart;
    }

    async delete(id) {
        if (!id) {
            throw new Error('id не указан');
        }
        const deletedCart = await Cart.findByIdAndDelete(id);
        return deletedCart;
    }
}

export default new CartService();