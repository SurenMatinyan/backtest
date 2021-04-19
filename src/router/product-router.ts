import { Router } from "express";
import basketController from '../testControllerClass/basket-controller';

const router = Router();

router.post("/add", basketController.addInBasket);


export default router;