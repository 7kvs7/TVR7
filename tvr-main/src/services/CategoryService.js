import Category from "../models/Categories.js";

class CategoryService {
    async create(data) {
        const {name, description} = data;
        const newCategory = await Category.create({ name, description});
        return newCategory;
    }

    async getAll() {
        const categories = await Category.find();
        return categories;
    }

    async getOne(id) {
        if (!id) {
            throw new Error('не указан ID');
        }
        const category = await Category.findById(id);
        return category;
    }

    async update(id, data) {
        if (!id) {
            throw new Error('id не указан');
        }
        const updatedCategory = await Category.findByIdAndUpdate(id, data, {new: true});
        return updatedCategory;
    }

    async delete(id) {
        if (!id) {
            throw new Error('id не указан');
        }
        const deletedCategory = await Category.findByIdAndDelete(id);
        return deletedCategory;
    }
}

export default new CategoryService();