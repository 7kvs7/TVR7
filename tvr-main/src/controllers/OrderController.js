import OrderService from "../services/OrderService.js";

class OrderController {
    async create(req, res) {
        try {
            const newOrder = await OrderService.create(req.body);
            res.json(newOrder);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async getAll(req, res) {
        try {
            const orders = await OrderService.getAll();
            return res.json(orders);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async getOne(req, res) {
        try {
            const {id} = req.params;
            if (!id) {
                return res.status(400).json({message: 'id не указан'});
            }
            const order = await OrderService.getOne(id);
            if (!order) {
                return res.status(404).json({message: 'Книга не найдена'});
            }
            return res.json(order);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async update(req, res) {
        try {
            const {id} = req.params;
            if (!id) {
                return res.status(400).json({message: 'id не указан'});
            }
            const updatedOrder = await OrderService.update(id, req.body);
            if (!updatedOrder) {
                return res.status(404).json({message: 'Книга не найдена'});
            }
            return res.json(updatedOrder);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async delete(req, res) {
        try {
            const {id} = req.params;
            if (!id) {
                return res.status(400).json({message: 'id не указан'});
            }
            const deletedOrder = await OrderService.delete(id);
            if (!deletedOrder) {
                return res.status(404).json({message: 'Книга не найдена'});
            }
            return res.json(deletedOrder);
        } catch (e) {
            res.status(500).json(e);
        }
    }
}

export default new OrderController();