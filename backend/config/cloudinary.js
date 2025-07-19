import { v2 as cloudinary } from 'cloudinary'; // Importa a versão 2 do SDK do Cloudinary

// Função para configurar as credenciais do Cloudinary
const connectCloudinary = async () => {
    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_SECRET_KEY
    })
}

export default connectCloudinary;