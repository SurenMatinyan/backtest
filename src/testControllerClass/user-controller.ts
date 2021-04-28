import { Request, Response } from 'express';
import { userModel, productModel } from '../testModelClass/index';
import jwt from 'jsonwebtoken';
import {v4} from 'uuid';
import {IncomingForm } from 'formidable';
import fs from 'fs';
interface IOk {
    status: number
    token: string
}




export default class userControler {  

    public static loginUser = async(req: Request, res: Response) =>  {
        try{
            const { email, password } = req.body;
            const checkInUser = await userModel.findOne({
                where: {email: email },
                raw: true,
                attributes: ["lastName", "firstName", "email", "password"]})
            if(checkInUser && checkInUser.password === password){
                const token = jwt.sign({ email: checkInUser.email, lastName: checkInUser.lastName }, "process.env.");
                return res.status(200).json({status: 0, token, ...checkInUser});
            } 
            return res.status(300).json({message: "incorrect login or password"})
        }
        catch(err){
            res.status(500).json({message: "server error", err: err.message})
        }
    }




    public static createUser = async(req: Request, res: Response) => {
        try{
            const { lastName, firstName, email, password } = req.body;
            const create = await userModel.create({ lastName, firstName, email, password })
            res.status(200).json({message: "create account"});
        }
        catch(err){
            res.status(500).json({message: "server error", err: err.message})
        }
    }

   

    public static createProduct = async(req: Request, res: Response) => {
        try{
            const UserId = req.body.id;
            const form = new IncomingForm();
            const uniq = v4();
            const img = `/img/${uniq}.jpg`
            form.parse(req, async(err, fields: any, files: any) => {
                const { name, price, count, ParentId } = fields
                fs.rename(files.img.path, `./src/public/img/${uniq}.jpg`, err => console.log(err?.message))
                console.log(name, price, count, ParentId)
                if(UserId && name && price && count && ParentId){
                    const newProduct = await productModel.create({UserId, name, price, count, img, ParentId});
                    res.status(200).json({message: "yes"})
                }
                else res.status(200).json({message: "field is not filled"})
            });     
        }
        catch(err){
            res.status(500).json({message: "serrver error", err: err.message});
        }
    }

    public static getUserProduct = async(req: Request, res: Response) => {
        try{
            const UserId = req.body.id;
            console.log(UserId);
            const user = await productModel.findAll({
                 include: [{
                    model: userModel,
                    where: { id: UserId },
                    attributes: []
                }]
            });
           
            res.send(user)
        }
        catch(err){
            console.error(err.message);
            res.status(500).json({message: "serrver error", err: err.message});
        }
    }
}