import BookService from "../services/BookService.js";

class BookController {
    async create(req, res) {
        try {
            const newBook = await BookService.create(req.body);
            res.json(newBook);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async getAll(req, res) {
        try {
            const books = await BookService.getAll();
            return res.json(books);
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
            const book = await BookService.getOne(id);
            if (!book) {
                return res.status(404).json({message: 'Книга не найдена'});
            }
            return res.json(book);
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
            const updatedBook = await BookService.update(id, req.body);
            if (!updatedBook) {
                return res.status(404).json({message: 'Книга не найдена'});
            }
            return res.json(updatedBook);
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
            const deletedBook = await BookService.delete(id);
            if (!deletedBook) {
                return res.status(404).json({message: 'Книга не найдена'});
            }
            return res.json(deletedBook);
        } catch (e) {
            res.status(500).json(e);
        }
    }
}

export default new BookController();