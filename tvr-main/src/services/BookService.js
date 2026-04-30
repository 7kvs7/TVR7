import Books from "../models/Books.js";

class BookService {
    async create(data) {
        const {author, title, price, description, category} = data;
        const newBook = await Book.create({author, title, price, description, category});
        return newBook;
    }

    async getAll() {
        const books = await Book.find();
        return books;
    }

    async getOne(id) {
        if (!id) {
            throw new Error('не указан ID');
        }
        const book = await Book.findById(id);
        return book;
    }

    async update(id, data) {
        if (!id) {
            throw new Error('id не указан');
        }
        const updatedBook = await Book.findByIdAndUpdate(id, data, {new: true});
        return updatedBook;
    }

    async delete(id) {
        if (!id) {
            throw new Error('id не указан');
        }
        const deletedBook = await Book.findByIdAndDelete(id);
        return deletedBook;
    }
}

export default new BookService();