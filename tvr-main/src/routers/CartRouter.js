import Router from 'express'
import CartController from "../controllers/CartController.js";

const router = new Router()

router.post('/', CartController.create)
router.get('/', CartController.getAll)
router.get('/:id', CartController.getOne)
router.put('/:id', CartController.update)
router.delete('/:id', CartController.delete)

export default router;