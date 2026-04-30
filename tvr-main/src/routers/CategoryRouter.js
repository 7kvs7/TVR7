import Router from 'express'
import CategoryController from "../controllers/CategoryController.js";

const router = new Router()

router.post('/', CategoryController.create)
router.get('/', CategoryController.getAll)
router.get('/:id', CategoryController.getOne)
router.put('/:id', CategoryController.update)
router.delete('/:id', CategoryController.delete)

export default router;