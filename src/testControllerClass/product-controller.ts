import { Request, Response } from 'express';
import { productModel, parentModel, userModel } from '../testModelClass/index'


export default class productController {

    public static getProductByCategory = async(req: Request, res: Response) => {
        try{
            const { ParentId } = req.params;
            const getProduct = await parentModel.findOne({
            where: { id: ParentId },
            include: [{model: productModel}]
            });
            res.status(200).json(getProduct)
        }
        catch(err){
            res.status(500).json({message: "server err", err: err.message})
        }
    }

    public static getItemProduct = async(req: Request, res: Response) => {
        try{
            const {item} = req.params;
            const getItem = await productModel.findByPk(item,{
                attributes: ["id", "price", "count", "name", "img"],
                include: [{model: userModel, attributes: ["id", "lastName", "email"]}]      
            });
            getItem && res.status(200).json(getItem);
        }
        catch(err){
            console.log(err);
            res.status(500).json({message: "server error"})
        }
    }

    public static getAllProduct = async(req: Request, res: Response) => {
       try{
            const allCategory = await parentModel.findAll({
               limit: 10,
               include: [{ model:  productModel, required: true,   attributes: ["name", "price", "img", "id"]}],
               attributes: ["name", "id"],
            })
            allCategory && res.status(200).json(allCategory);
        }
        catch(err){
            console.log(err);
            res.status(500).json({message: "server error"})
        }
    }
}