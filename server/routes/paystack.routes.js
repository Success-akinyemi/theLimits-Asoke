import express from 'express'
import * as controllers from '../controllers/product.controller.js'
import { verifyTokenAndAdmin } from '../utils/verifyUser.js'

const router = express.Router()


export default router