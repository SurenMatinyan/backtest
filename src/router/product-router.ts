import { Router } from "express";
import basketController from '../testControllerClass/basket-controller';
import productController from '../testControllerClass/product-controller';
const router = Router();

router.post("/add", basketController.addInBasket);
router.get('/category/:ParentId', productController.getProductByCategory);
router.get('/allproduct', productController.getAllProduct);
router.get('/:item', productController.getItemProduct);


export default router;