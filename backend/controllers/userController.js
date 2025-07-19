import userModel from "../models/userModel.js";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Função auxiliar para criar um token JWT
const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET);
};

// rota para login do usuário
const loginUser = async (req, res) => {};

// rota para cadastro do usuário
const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body; // extrai os dados do corpo da requisição

        // 1. Validação dos campos
        if (!name || !email || !password) {
            return res.json({ success: false, message: "Por favor, insira todos os campos." });
        }

        // 2. Verificação de e-mail existente
        const exists = await userModel.findOne({ email });
        if (exists) {
            return res.json({ success: false, message: "Este e-mail já está registrado." });
        }

        // 3. Validação do e-mail e senha forte
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Por favor, insira um e-mail válido." });
        }
        if (password.length < 8) {
            return res.json({ success: false, message: "A senha deve ter pelo menos 8 caracteres." });
        }

        // 4. Criptografia (hash) da senha
        const salt = await bcrypt.genSalt(10); // Gera um salt (string aleatória) para adicionar à senha antes do hash. 10 é o custo de hash, um número maior é mais seguro, mas mais lento.
        const hashedPassword = await bcrypt.hash(password, salt); // Hash da senha com o salt

        // 5. Criar novo usuário
        const newUser = new userModel({
            name,
            email,
            password: hashedPassword,
            // cartData: {},
        });

        const user = await newUser.save(); // Salva o novo usuário no banco de dados

        // 6. Gerar token de autenticação (JWT)
        // O token conterá o ID do usuário para identificação futura
        const token = createToken(user._id);

        // 7. Enviar resposta de sucesso
        res.json({ success: true, token });

    } catch (error) {
        console.error(error);
        res.json({ success: false, message: "Ocorreu um erro ao registrar o usuário: " + error.message });
    }
};

// rota para login do admin
const adminLogin = async (req, res) => {};

export { loginUser, registerUser, adminLogin };
