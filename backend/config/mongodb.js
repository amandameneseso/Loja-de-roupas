import mongoose from "mongoose";

const connectDB = async () => {
    try { // Tenta executar este bloco de código
        mongoose.connection.on('connected', () => {
            console.log('DB Connected');
        });
        await mongoose.connect(`${process.env.MONGODB_URI}/e-commerce`);
    } catch (error) { // Se algo der errado no bloco 'try', o erro é capturado aqui
        console.error("DB Connection Error:", error); // Loga o erro
        process.exit(1); // Encerra o processo da aplicação
    }
};

export default connectDB;