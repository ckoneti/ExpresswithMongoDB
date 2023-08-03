import {Request, Response, NextFunction} from 'express'
import accounts from '../models/contactModel'
import {accountType} from './types'
const getContactController = async (req:Request, res:Response, nextFunction:NextFunction)=>{
  const id:number = Number(req.params.id)
   const checkDataExist = await findifDataExist(id);
                    if(!checkDataExist){
                        res.send(404).send("Account details not found")
                    }else{
                      res.status(200).send(checkDataExist)
                    } 
                      }

const postController = async(req:Request, res:Response, nextFunction:NextFunction)=>{
                       console.log('req body', req.body);
                       const {account_id,limit,products} = req.body;
                       if(!account_id  || !products){
                       res.status(400).send('Bad Request, All parameters are mandatory');
                       }
                       else{
                        const account:accountType|null = await 
                        accounts.create({
                            account_id,
                            limit,
                            products
                        })
                        res.status(201).json(account)
                       }
                       }
                    
const putController = async(req:Request, res:Response, nextFunction:NextFunction)=>{
  const id:number = Number(req.params.id)
                    const checkDataExist = findifDataExist(id)
                    if(!checkDataExist){
                      res.send(404).send("Account details not found")
                    }else{
                      const updatedAccount = await accounts.findOneAndUpdate()
                    }                   
                    
                      }
const deleteController = async(req:Request, res:Response, nextFunction:NextFunction)=>{
  console.log('id is', req.params.id);
                              const id:number = Number(req.params.id)
                                const checkDataExist = await findifDataExist(id);
                                if(!checkDataExist){
                                  res.send(404).send("Account details not found")
                              }else{
                                const deleteAccount = await accounts.findOneAndDelete({account_id:id})
                                res.status(204).send(deleteAccount)
                              }
                                               }

const findifDataExist =async (id:number) => {
  const account:accountType|null = await accounts.find({ account_id: id});
             return account;       
}
export { getContactController, postController, putController,deleteController
}