import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import authRouter from './src/routers/AuthRouter.js'
import BookRouter from './src/routers/BookRouter.js'
import OrderRouter from './src/routers/OrderRouter.js'
import CartRouter from './src/routers/CartRouter.js'
import GenreRouter from './src/routers/GenreRouter.js'
import CategoryRouter from './src/routers/CategoryRouter.js'

const PORT = 5000;
const DB_URL = 'mongodb://localhost:27017/laba1';
const app = express()

app.use(cors())
app.use(express.json())
app.use('/api/auth', authRouter)
app.use('/api/books', BookRouter)
app.use('/api/orders', OrderRouter)
app.use('/api/carts', CartRouter)
app.use('/api/genres', GenreRouter)
app.use('/api/categories', CategoryRouter)
app.use(express.static('public'))
async function startApp() {
    try {
        await mongoose.connect(DB_URL);
        app.listen(PORT, () => console.log(' SERVER STARTED ON PORT ' + PORT))
    } catch (e) {
        console.log(e)
    }
}

startApp()