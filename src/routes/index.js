let express = require('express')
const couponRouter = require('./Routes')
const userRouter = require('./UserData')
  let AppRouter = express.Router()
  AppRouter.use('/User',userRouter)
  AppRouter.use('/coupons',couponRouter)



  module.exports = AppRouter


 