import { Router } from "express";
import cartsRouter from "./carts.router.js";
import messagesRouter from "./messages.router.js";
import productsRouter from "./products.router.js";


const router = Router()

router.use('/api/carts', cartsRouter)
router.use('/api/messages', messagesRouter)
router.use('/api/products', productsRouter)

export default router