import Router from 'express'
import GenreController from "../controllers/GenreController.js";

const router = new Router()

router.post('/', GenreController.create)
router.get('/', GenreController.getAll)
router.get('/:id', GenreController.getOne)
router.put('/:id', GenreController.update)
router.delete('/:id', GenreController.delete)

export default router;