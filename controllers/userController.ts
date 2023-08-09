import { Request, Response, NextFunction } from 'express'
import userModel from '../models/userModel'
import bcrypt from 'bcrypt'
import jsonwebtoken from 'jsonwebtoken'
import { UserBody } from '../types'
// Register user

const registerUser = async (req: Request, res: Response, nextFunction: NextFunction) => {
        const { username, email, password }:UserBody = req.body
        if (!username || !email || !password) {
                res.status(400).send('Bad request,username, email & password required for user registration')
        }
        const userAvailable = await findUserExist(email);
        if (userAvailable) {
                res.status(400).send('User already exist')
        }
        // create user
        else {
                const hashPassowrd = await bcrypt.hash(password, 10)
                const user = await userModel.create({ username, email, password: hashPassowrd })
                console.log('user created', user)
                res.status(201).json({
                        _id: user.id,
                        email: user.email
                })
        }

}

const loginUser = async (req: Request, res: Response, nextFunction: NextFunction) => {
        const { email, password }:UserBody = req.body
        if (!email || !password) {
                res.status(400).send('Bad request, email & password required for user login')
        }
        const user = await findUserExist(email)
        if(user && (await bcrypt.compare(password, user.password))){
                const accessToken = jsonwebtoken.sign({
                        user:{
                                username:user.username,
                                email:user.email,
                                id:user._id
                        },
                },process.env.ACESS_TOKEN_SECRET,
                {expiresIn:"1m"}
                )
                res.status(200).json({
                        accessToken
                })
        }
        else{
                res.status(401).send('Unauthorized Request, Cannot Login')
        }
        // compare pwd with hash pwd
       
}
const currentUser = async (req: Request, res: Response, nextFunction: NextFunction) => {
        res.json({ message: "Current user information" })
}

const findUserExist = async(email:string)=>{
        const userAvailable = await userModel.findOne({ email })
        return userAvailable
}
export { registerUser, loginUser, currentUser }

