// controllers/productController.js
import { v2 as cloudinary } from "cloudinary";
import productModel from "../models/productModel.js";

// função para adicionar um produto ao banco de dados
const addProduct = async (req, res) => {
    try {
        const { name, description, price, category, subCategory, sizes, bestseller } = req.body;

        const image1 = req.files.image1 && req.files.image1[0];
        const image2 = req.files.image2 && req.files.image2[0];
        const image3 = req.files.image3 && req.files.image3[0];
        const image4 = req.files.image4 && req.files.image4[0];

        const images = [image1, image2, image3, image4].filter((item)=> item !== undefined);

        let imagesUrl = await Promise.all(
            images.map(async (item) => {
                let result = await cloudinary.uploader.upload(item.path, {resource_type: "image"});
                return result.secure_url
            })
        )

        const productData = {
            name,
            description,
            category,
            price: Number(price),
            subCategory,
            bestseller: bestseller === "true" ? true : false,
            sizes: JSON.parse(sizes),
            image: imagesUrl,
            date: Date.now(),
        }

        console.log(productData);

        const product = new productModel(productData);
        await product.save();

        res.json({ success: true, message: "Produto adicionado com sucesso!" });
    } catch (error) {
        console.error("Erro ao adicionar produto:", error);
        res.json({ success: false, message: error.message });
    }
}

// função para listar os produtos do banco de dados
const listProducts = async (req, res) => {}

// função para remover um produto do banco de dados
const removeProduct = async (req, res) => {}

// função para obter um produto do banco de dados
const singleProduct = async (req, res) => {}

export { addProduct, listProducts, removeProduct, singleProduct };