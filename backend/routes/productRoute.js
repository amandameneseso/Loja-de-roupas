import express from "express";
import { addProduct, listProducts, removeProduct, singleProduct } from "../controllers/productController.js";
import upload from "../middleware/multer.js";
import adminAuth from "../middleware/adminAuth.js";

const productRouter = express.Router();

productRouter.post("/add", adminAuth, upload.fields([
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
    { name: "image3", maxCount: 1 },
    { name: "image4", maxCount: 1 },
  ]), addProduct); // rota para adicionar produto protegida pelo adminAuth
productRouter.get("/list", listProducts); // rota para listar produtos
productRouter.post("/remove", adminAuth, removeProduct); // rota para remover produto protegida pelo adminAuth
productRouter.post("/single", singleProduct); // rota para obter um produto

export default productRouter;
