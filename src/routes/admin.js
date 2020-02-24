const { Router } = require('express');
const product = require('../model/product.json')
const router = Router();

router.get("/product/all", (req, res) => {
    if(req.headers.auth == 'Admin'){
        res.json(product);
    }else{
        res.json({
            error: '403',
            content: 'Usuarioproduct[i] no permitido'
        });
    }
})

router.get("/product/one/:id", (req, res) => {
    if(req.headers.auth == 'Admin'){
        let filtrados = product.filter((query) => {
            return query.id == req.params.id
            })
        res.json(filtrados)
    }else{
        res.json({
            error: '403',
            content: 'Usuario no permitido'
        });
    }
})

module.exports = router;