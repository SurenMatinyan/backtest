import { Request, Response } from 'express';
import { userModel, productModel, categoryModel } from '../testModelClass/index';



export default class userControler {  

    public static loginUser = async(req: Request, res: Response) => {
        try{
            const { email, password } = req.body;
            const checkInUser = await userModel.findOne({ where: {email: email }})
            if(checkInUser && checkInUser.password === password) res.status(200).json({message: "you login"});
            res.status(300).json({message: "incorrect login or password"})
        }
        catch(err){
            res.status(500).json({message: "server error", err: err.message})
        }
    }




    public static createUser = async(req: Request, res: Response) => {
        try{
            const { lastName, firstName, email, password } = req.body;
            console.log(lastName, firstName, email, password);
            const create = await userModel.create({ lastName, firstName, email, password })
            res.status(200).json({message: "create account"});
        }
        catch(err){
            res.status(500).json({message: "server error", err: err.message})
        }
    }

   

    public static createProduct = async(req: Request, res: Response) => {
        try{
           const { UserId, name, price, count, ParentId } = req.body
            const newProduct = await productModel.create({UserId, name, price, count});
            const creteCat = await categoryModel.create({ProductId: newProduct.id, ParentId})
            res.status(200).json({message: "yes"})
        }
        catch(err){
            console.error(err.message);
            res.status(500).json({message: "serrver error", err: err.message});
        }
    }

    public static getUserProduct = async(req: Request, res: Response) => {
        try{
            const { UserId} = req.body;
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