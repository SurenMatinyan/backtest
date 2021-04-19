import { Request, Response } from 'express';
import {parentModel} from '../testModelClass/index';


export default class Category {
    public static getCategory = async(req: Request, res: Response) => {
        try{
            const categoryParent = await parentModel.findAll({
                where: { 
                    ParentId: null,
                },
                include: [{
                    model: parentModel,
                }]
            })
            categoryParent && res.status(200).json(categoryParent);
        }
        catch(err){
            console.log(err.message);
            res.status(500).json({message: "server error", err: err.message});
        }
    }


    public static createParentCategory = async(req: Request, res: Response) => {
        try{
            const { name } = req.body
            const create = await parentModel.create({name, ParentId: null});
            create && res.status(200).json({message: "create new category parent"});
        }
        catch(err){
            console.log(err.message);
            res.status(500).json({message: "server error", err: err.message});
        }
    }

    public static createChildCategory = async(req: Request, res: Response) => {
       try{
            const { ParentId, name } = req.body;
            const create = await parentModel.create({name, ParentId});
            create && res.status(200).json({message: "create new children category"});
       }
       catch(err){
        console.log(err.message);
        res.status(500).json({message: "server error", err: err.message});
       }
    }
}