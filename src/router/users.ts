import { Router } from "express";
import UserController from '../testControllerClass/user-controller';


const router = Router();
router.post('/registr', UserController.createUser);
router.post('/login', UserController.loginUser);
router.post('/setbasket', UserController.createProduct);
router.get('/userproduct', UserController.getUserProduct);

export default router;


