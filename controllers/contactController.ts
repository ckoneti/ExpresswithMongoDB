import {Request, Response, NextFunction} from 'express'
import accounts from '../models/contactModel'
import {accountType} from '../types'
const getContactController = async (req:Request, res:Response, nextFunction:NextFunction)=>{
  const id:number = Number(req.params.id)
   const checkDataExist = await findifDataExist(id);
                    if(checkDataExist.length<=0){
                      res.status(404).send("Account details not found")
                    }
                    else{
                      console.log(checkDataExist,'else  block')
                      res.status(200).send(checkDataExist)
                    } 
                      }

const postController = async(req:Request, res:Response, nextFunction:NextFunction)=>{
                       console.log('req body', req.body);
                       const {account_id,limit,products}:accountType = req.body;
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
  const updatedItem = req.body
                    const checkDataExist = await findifDataExist(id)
                    if(checkDataExist.length<=0){
                      res.send(404).send("Account details not found")
                    }else{
                      const updatedAccount = await accounts.findOneAndUpdate({account_id:id},{$set:{updatedItem}},{returnNewDocument:true})
                    }                   
                    
                      }
const deleteController = async(req:Request, res:Response, nextFunction:NextFunction)=>{
                              const id:number = Number(req.params.id)
                                const checkDataExist = await findifDataExist(id);
                                if(checkDataExist.length<=0){
                                  res.send(404).send("Account details not found")
                              }else{
                                const deleteAccount = await accounts.findOneAndDelete({account_id:id})
                                res.status(204).send(deleteAccount)
                              }
                                               }

const findifDataExist =async (id:number) => {
  const account:Array<accountType>|null = await accounts.find({ account_id: id});
             return account;       
}
export { getContactController, postController, putController,deleteController
}