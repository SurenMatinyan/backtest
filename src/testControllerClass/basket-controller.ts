import {basketModel} from '../testModelClass/index';
import { Request, Response } from 'express';

export default class productController {

    public static addInBasket = async(req: Request, res: Response) => {
       try{
            const { ProductId, UserId } = req.body;
            const add = await basketModel.create({ProductId, UserId});  
            res.status(200).json({message: "create new product"});
       }
       catch(err){
            console.log("server error", err.message);
            res.status(500).json({message: "server error", err: err.message});
       }
    }
}