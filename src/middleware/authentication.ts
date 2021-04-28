import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import {userModel} from '../testModelClass/index'



const auth = async(req: Request, res: Response, next: NextFunction ) => {
    try {
        if(req.headers.authorization){
            const token = req.headers.authorization
            const decoded: any = jwt.verify(token, "process.env.");
              if(decoded){
                const user = await userModel.findOne({
                    where: { email: decoded.email}
                })  
                if (user) {
                  req.body.id = user.id;
                  return next();
                }
              }
              return res.json({status: 1, message: "invalid token"})  
        }  
        return res.json({status: 1, message: "no authentication"})
      } catch (err) {
        res.status(500).json({message: err.message});
      }
} 


export default auth;