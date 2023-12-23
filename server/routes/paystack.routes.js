import express from 'express'
import * as controllers from '../controllers/paystack.controller.js'

const router = express.Router()

router.post('/checkoutPayment', controllers.checkoutPayment)
router.post('/verifyPaymentWebhook', controllers.verifyPaymentWebhook)
router.post('/verifyPayment', controllers.verifyPayment)




export default router