import express, {Request, Response, NextFunction} from 'express'
import {getContactController, postController,putController,deleteController } from '../controllers/contactController'
const router = express.Router()

//get request
router.get('/:id', getContactController)

// post
router.post('/',postController)

// update contact details
router.put('/:id', putController)
// deleted contact details
router.delete('/:id', deleteController)


export default router