import { Router } from "express";
import productsModel from "../dao/models/products.model.js";
import chatModel from "../dao/models/messages.model.js";

const router = Router()

router.get('/', async (req, res) => {
try {const productos = await productsModel.find({}) 
    res.render("index", {
        productos,
        style: 'index.css'
    })
    
} catch (error) {
    console.error(error)
}
})

router.get('/chat', (req, res) => {
    res.render('chat', {
        style: 'index.css'
    })
})

router.get('/realtimeproducts', async (req, res) => {

    try {
        const products = await productsModel.find({})
        res.render('realTimeProducts', {
            productos: products,
            style: 'index.css'
        })
    } catch (error) {
        console.log(error);
        res.render("Error al intentar obtener la lista de productos!");
        return;
    }
})

router.post('/', async (req, res) => {
    try {
        const products = await productsModel.find({})
        res.render('realTimeProducts', {
            productos: products,
            style: 'index.css'
        })
    } catch (error) {
        console.log(error);
        res.render("Error al intentar obtener la lista de productos!");
        return;
    }
})

export default router