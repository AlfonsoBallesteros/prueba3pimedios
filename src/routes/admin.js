const { Router } = require('express');
const product = require('../model/product.json')
const router = Router();

router.get("/product/all", (req, res) => {
    if(req.headers.auth == 'Admin'){
        res.json(product);
    }else{
        res.json({
            error: '403',
            content: 'Usuario no permitido'
        });
    }
})

router.get("/product/one", (req, res) => {
    if(req.headers.auth == 'Admin'){
        for(var i=0; i < Object.keys(product).length - 1; i++){
            /*if(product[i].id == req.params){
                res.json(product[i])
            }*/
            
            res.json(product[i])
        }
    }else{
        res.json({
            error: '403',
            content: 'Usuario no permitido'
        });
    }
})

module.exports = router;