const { Router } = require('express');
const cupon = require('../model/cupon.json')
const router = Router();

router.post("/cupon", (req, res) => {
    let filtrados = cupon.filter((query) => {
        return query.name == req.body.name && query.valid_until > req.body.valid && query.valid_since < req.body.valid
    })
    res.json(filtrados)
})

module.exports = router;