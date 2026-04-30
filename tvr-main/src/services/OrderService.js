import Orders from "../models/Orders.js";

class OrderService {
    async create(data) {
        const {author, title, price, description, category} = data;
        const newOrder = await Order.create({author, title, price, description, category});
        return newOrder;
    }

    async getAll() {
        const orders = await Order.find();
        return orders;
    }

    async getOne(id) {
        if (!id) {
            throw new Error('не указан ID');
        }
        const order = await Order.findById(id);
        return order;
    }

    async update(id, data) {
        if (!id) {
            throw new Error('id не указан');
        }
        const updatedOrder = await Order.findByIdAndUpdate(id, data, {new: true});
        return updatedOrder;
    }

    async delete(id) {
        if (!id) {
            throw new Error('id не указан');
        }
        const deletedOrder = await Order.findByIdAndDelete(id);
        return deletedOrder;
    }
}

export default new OrderService();