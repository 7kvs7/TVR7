import Genre from "../models/Genre.js";

class GenreService {
    async create(data) {
        const {name, description, categoryId} = data;  // ← поля жанра!
        const newGenre = await Genre.create({name, description, categoryId});
        return newGenre;
    }

    async getAll() {
        const genres = await Genre.find();  // ← Genre, а не Genres!
        return genres;
    }

    async getOne(id) {
        if (!id) {
            throw new Error('не указан ID');
        }
        const genre = await Genre.findById(id);
        return genre;
    }

    async update(id, data) {
        if (!id) {
            throw new Error('id не указан');
        }
        const updatedGenre = await Genre.findByIdAndUpdate(id, data, {new: true});
        return updatedGenre;
    }

    async delete(id) {
        if (!id) {
            throw new Error('id не указан');
        }
        const deletedGenre = await Genre.findByIdAndDelete(id);
        return deletedGenre;
    }
}

export default new GenreService();