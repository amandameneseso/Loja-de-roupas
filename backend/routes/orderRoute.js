import express from "express";
import { placeOrder, placeOrderStripe, allOrders, userOrders, updateStatus, verifyStripe } from "../controllers/orderController.js";
import adminAuth from "../middleware/adminAuth.js";
import authUser from "../middleware/auth.js";

const orderRouter = express.Router();

// recursos de administrador
orderRouter.post("/list", adminAuth, allOrders);
orderRouter.post("/status", adminAuth, updateStatus);

// pagamento
orderRouter.post("/place", authUser, placeOrder);
orderRouter.post("/stripe", authUser, placeOrderStripe);

// recurso de usuário
orderRouter.post("/userorders", authUser, userOrders);

// verificar pagamento
orderRouter.post("/verifyStripe", authUser, verifyStripe);

export default orderRouter;