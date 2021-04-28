import { Router } from "express";
import UserController from '../testControllerClass/user-controller';
import authentication from '../middleware/authentication';


const router = Router();
router.post('/registr', UserController.createUser);
router.post('/login', UserController.loginUser);
router.post('/createproduct', authentication, UserController.createProduct);
router.get('/product', authentication, UserController.getUserProduct);

export default router;


