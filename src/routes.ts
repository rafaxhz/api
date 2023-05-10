import { Router } from "express";

import CreateProductController from "./useCases/createProduct/CreateProductController";
import DeleteProductController from "./useCases/deleteProduct/DeleteProductController";
import FindProductController from "./useCases/findProduct/FindProductController";
import ListProductsController from "./useCases/listProducts/ListProductsController";

const router = Router();

const createProductController = new CreateProductController();
const deleteProductController = new DeleteProductController();
const findProductController = new FindProductController();
const listProductsController = new ListProductsController();

router.post("/create", createProductController.handle);
router.delete("/delete", deleteProductController.handle);
router.get("/find", findProductController.handle);
router.get("/", listProductsController.handle);

export default router;
