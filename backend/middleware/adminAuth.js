import jwt from "jsonwebtoken";

const adminAuth = async (req, res, next) => {
    try {
        const { token } = req.headers; // extrai o token do cabeçalho
        if (!token) {
            return res.json({success: false, message: "Login não autorizado."})
        }; // se o token nao for fornecido
        const token_decode = jwt.verify(token, process.env.JWT_SECRET);
        if (token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
            return res.json({success: false, message: "Login não autorizado."});
        } // se o token nao for igual ao email e senha do admin
        next(); // passa para a próxima função da rota
    } catch (error) {
        console.log("Erro ao autenticar admin:", error);
        res.json({success: false, message: error.message});
    }
};

export default adminAuth;