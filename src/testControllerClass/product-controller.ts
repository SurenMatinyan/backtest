import { Request, Response } from 'express';
import { productModel, parentModel } from '../testModelClass/index'


export default class productController {

    public static getProductByCategory = async(req: Request, res: Response) => {
        try{
            const { ParentId } = req.params;
            console.log(ParentId)
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

    public static getAllProduct = async(req: Request, res: Response) => {
       try{
            console.log("asd")
            const allCategory = await parentModel.findAll({
                include: { model:  productModel, attributes: ["name", "price", "img", "id"], required: true},
                attributes: ["name", "id"]
                
            })

            allCategory && res.status(200).json(allCategory);
        }
        catch(err){
            console.log(err);
            res.status(500).json({message: "server error"})
        }
    }
}