import userModel from "../models/userModel.js";

//adicionar produtos ao carrinho
const addToCart = async (req, res) => {
    try {
        const { userId, itemId, size } = req.body;
        const userData = await userModel.findById(userId);
        const cartData = await userData.cartData;
    } catch (error) {
        
    }
}

//atualizar carrinho
const updateCart = async (req, res) => {
    
}

//obter dados do carrinho
const getUserCart = async (req, res) => {
    
}

export { addToCart, updateCart, getUserCart }