import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import Stripe from "stripe";

// variaveis globais
const currency = "BRL";
const deliveryCharge = 10;

// inicialização do gateway
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

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
    try {
        const { userId, items, amount, address } = req.body;
        const { origin } = req.headers;

        // criar o pedido no banco de dados
        const orderData = {
            userId,
            items,
            address,
            amount,
            paymentMethod: "Stripe",
            payment: false, // o pagamento ainda não foi confirmado
            date: Date.now(),
        }
        const newOrder = new orderModel(orderData); // cria um novo pedido
        await newOrder.save(); // salva o pedido no banco de dados

        const line_items = items.map((item) => ({
            price_data: {
                currency: currency,
                product_data: {
                    name: item.name,
                },
                unit_amount: item.price * 100,
            },
            quantity: item.quantity
        }))

        line_items.push({
            price_data: {
                currency: currency,
                product_data: {
                    name: "Taxas de entrega",
                },
                unit_amount: deliveryCharge * 100,
            },
            quantity: 1
        })

        const session = await stripe.checkout.sessions.create({
            success_url: `${origin}/verify?success=true&orderId=${newOrder._id}`,
            cancel_url: `${origin}/verify?success=false&orderId=${newOrder._id}`,
            line_items,
            mode: "payment",
        })

        res.json({ success: true, session_url:session.url });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

// verificar stripe
const verifyStripe = async (req, res) => {
    const { orderId, success, userId } = req.query;
    try {
        if (success === "true") {
            await orderModel.findByIdAndUpdate(orderId, { payment: true }); // marca o pedido como pago
            await userModel.findByIdAndUpdate(userId, { cartData: {} }); // limpa o carrinho do usuário
            res.json({ success: true, message: "Pagamento realizado com sucesso!" });
        } else {
            await orderModel.findByIdAndDelete(orderId); // remove o pedido se o pagamento falhar
            res.json({ success: false, message: "Pagamento falhou." });
        }
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

// pedidos usando método Razorpay
const placeOrderRazorpay = async (req, res) => {
    
}

// dados de todos os pedidos para o painel de administração
const allOrders = async (req, res) => {
    try {
        const orders = await orderModel.find({});
        res.json({ success: true, orders });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
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
    try {
        const { orderId, status } = req.body;
        await orderModel.findByIdAndUpdate(orderId, { status });
        res.json({ success: true, message: "Status atualizado" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

export { placeOrder, placeOrderStripe, placeOrderRazorpay, allOrders, userOrders, updateStatus, verifyStripe };