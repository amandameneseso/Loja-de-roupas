import multer from "multer";

// configurações de armazenamento do multer
const storage = multer.diskStorage({
  // define o nome do arquivo no destino
  filename: function (req, file, callback) {
    callback(null, file.originalname); // usa o nome original do arquivo
  },
});

// inicializa o multer
const upload = multer({ storage });

export default upload;
