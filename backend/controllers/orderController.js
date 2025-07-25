import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";

// pedidos usando método "pagamento na entrega"
const placeOrder = async (req, res) => {
    try {
        const { userId, items, amount, address } = req.body;
        const orderData = {
            userId,
            items,
            address,
            amount,
            paymentMethod: "pagamento na entrega",
            payment: false,
            date: Date.now(),
        }
        const newOrder = new orderModel(orderData); // cria um novo pedido
        await newOrder.save(); // salva o pedido no banco de dados
        await userModel.findByIdAndUpdate(userId, {cartData: {}}); // limpa o carrinho do usuário após o pedido ser realizado
        res.json({ success: true, message: "Pedido realizado!" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

// pedidos usando método Stripe
const placeOrderStripe = async (req, res) => {
    
}

// pedidos usando método Razorpay
const placeOrderRazorpay = async (req, res) => {
    
}

// dados de todos os pedidos para o painel de administração
const allOrders = async (req, res) => {
    
}

// dados do pedido do usuário para frontend
const userOrders = async (req, res) => {
    try {
        const { userId } = req.body;
        const orders = await orderModel.find({ userId });
        res.json({ success: true, orders });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

// atualizar status do pedido do painel de administrador
const updateStatus = async (req, res) => {
    
}

export { placeOrder, placeOrderStripe, placeOrderRazorpay, allOrders, userOrders, updateStatus }