import express, { Request, Response } from "express";
import { registerUser, currentUser, loginUser } from "../controllers/userController";
const userRouter = express.Router();

userRouter.post('/register', registerUser)

userRouter.post('/login', loginUser)

userRouter.post('/current', currentUser)

export default userRouter;