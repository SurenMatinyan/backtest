import { Router } from "express";
import categoryController from '../testControllerClass/category-controller';

const router = Router();

router.post("/createparent", categoryController.createParentCategory);
router.post("/createchildren", categoryController.createChildCategory);
router.get("/getcategory", categoryController.getCategory);


export default router;