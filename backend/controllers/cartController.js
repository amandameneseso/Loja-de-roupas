import userModel from "../models/userModel.js";

//adicionar produtos ao carrinho
const addToCart = async (req, res) => {
    try {
        const { userId, itemId, size } = req.body;
        const userData = await userModel.findById(userId); // busca o usuário pelo ID
        let cartData = await userData.cartData;

        if (cartData[itemId]) { // verifica se o item ja existe no carrinho e adiciona ou incrementa a quantidade para o tamanho selecionado
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1;
            } else {
                cartData[itemId][size] = 1;
            }
        } else {
            cartData[itemId] = {}; // se o item ainda não existe no carrinho, inicializa-o
            cartData[itemId][size] = 1;
        }

        await userModel.findByIdAndUpdate(userId, { cartData }); // atualiza o carrinho do usuário
        res.json({ success: true, message: "Item adicionado ao carrinho" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

//atualizar carrinho
const updateCart = async (req, res) => {
    try {
        const { userId, itemId, size, quantity } = req.body;
        const userData = await userModel.findById(userId);
        let cartData = await userData.cartData;

        cartData[itemId][size] = quantity;
        await userModel.findByIdAndUpdate(userId, { cartData });
        res.json({ success: true, message: "Carrinho atualizado" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

//obter dados do carrinho
const getUserCart = async (req, res) => {
    try {
        const { userId } = req.body;
        const userData = await userModel.findById(userId);
        let cartData = await userData.cartData;
        res.json({ success: true, cartData });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

export { addToCart, updateCart, getUserCart }