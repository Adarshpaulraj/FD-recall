 let express = require('express')
let coupons = require('../controller/coupons')
 let router = express.Router()

router.get('/',coupons.getCoupons)
 router.get('/:id',coupons.getbyId)
 router.post("/create",coupons.createCoupons)
router.put('/edit/:id',coupons.editCoupon)
router.delete('/delete/:id',coupons.deleteCoupons)

module.exports = router