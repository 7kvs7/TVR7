import GenreService from "../services/GenreService.js";

class GenreController {
    async create(req, res) {
        try {
            const newGenre = await GenreService.create(req.body);
            res.json(newGenre);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async getAll(req, res) {
        try {
            const genres = await GenreService.getAll();
            return res.json(genres);
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
            const genre = await GenreService.getOne(id);
            if (!genre) {
                return res.status(404).json({message: 'Жанр не найден'});
            }
            return res.json(genre);
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
            const updatedGenre = await GenreService.update(id, req.body);
            if (!updatedGenre) {
                return res.status(404).json({message: 'Жанр не найден'});
            }
            return res.json(updatedGenre);
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
            const deletedGenre = await GenreService.delete(id);
            if (!deletedGenre) {
                return res.status(404).json({message: 'Жанр не найден'});
            }
            return res.json(deletedGenre);
        } catch (e) {
            res.status(500).json(e);
        }
    }
}

export default new GenreController();