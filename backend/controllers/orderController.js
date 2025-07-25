// backend/controllers/orderController.js
// pedidos usando método "pagamento na entrega"
const placeOrder = async (req, res) => {

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
    
}

// atualizar status do pedido do painel de administrador
const updateStatus = async (req, res) => {
    
}

export { placeOrder, placeOrderStripe, placeOrderRazorpay, allOrders, userOrders, updateStatus }