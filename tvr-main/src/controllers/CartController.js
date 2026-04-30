import CartService from "../services/CartService.js";

class CartController {
    async create(req, res) {
        try {
            const newCart = await CartService.create(req.body);
            res.json(newCart);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async getAll(req, res) {
        try {
            const carts = await CartService.getAll();
            return res.json(carts);
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
            const cart = await CartService.getOne(id);
            if (!cart) {
                return res.status(404).json({message: 'Корзина не найдена'});
            }
            return res.json(cart);
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
            const updatedCart = await CartService.update(id, req.body);
            if (!updatedCart) {
                return res.status(404).json({message: 'Корзина не найдена'});
            }
            return res.json(updatedCart);
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
            const deletedCart = await CartService.delete(id);
            if (!deletedCart) {
                return res.status(404).json({message: 'Корзина не найдена'});
            }
            return res.json(deletedCart);
        } catch (e) {
            res.status(500).json(e);
        }
    }
}

export default new CartController();