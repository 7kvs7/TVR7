import CategoryService from "../services/CategoryService.js";

class CategoryController {
    async create(req, res) {
        try {
            const newCategory = await CategoryService.create(req.body);
            res.json(newCategory);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async getAll(req, res) {
        try {
            const categories = await CategoryService.getAll();
            return res.json(categories);
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
            const category = await CategoryService.getOne(id);
            if (!category) {
                return res.status(404).json({message: 'Категория не найдена'});
            }
            return res.json(category);
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
            const updatedCategory = await CategoryService.update(id, req.body);
            if (!updatedCategory) {
                return res.status(404).json({message: 'Категория не найдена'});
            }
            return res.json(updatedCategory);
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
            const deletedCategory = await CategoryService.delete(id);
            if (!deletedCategory) {
                return res.status(404).json({message: 'Категория не найдена'});
            }
            return res.json(deletedCategory);
        } catch (e) {
            res.status(500).json(e);
        }
    }
}

export default new CategoryController();