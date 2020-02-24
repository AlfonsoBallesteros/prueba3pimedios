const { Router } = require('express');
const product = require('../model/product.json')
const cupon = require('../model/cupon.json')
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
router.post("/cupon", (req, res) => {
    if(req.headers.auth == 'Admin'){
        let nuevo = cupon.push(req.body)
        res.json({
            ok: true,
            content: 'cupon creado'
        });
    }else{
        res.json({
            error: '403',
            content: 'Usuario no permitido'
        });
    }
})

router.post("/cupon/all", (req, res) => {
    if(req.headers.auth == 'Admin'){
        let filtrados = cupon.filter((query) => {
            return query.valid_until > req.body.valid && query.valid_since < req.body.valid
        })
        res.json(filtrados)
    }else{
        res.json({
            error: '403',
            content: 'Usuario no permitido'
        });
    }
})

router.get("/cupon/one/:id", (req, res) => {
    if(req.headers.auth == 'Admin'){
        let filtrados = cupon.filter((query) => {
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