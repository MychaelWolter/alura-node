import express from "express";
import multer from "multer";
import { listarPosts, postarNovoPost, uploadImagem } from "../controllers/postsController.js";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/");
    }, filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({ dest: "./uploads", storage });
//linux ou mac
// const upload = multer({ dest: "./uploads" });

const routes = (app) => {
    // Configura o middleware para o Express entender requisições com JSON no corpo
    app.use(express.json());
    // Configura uma rota GET no endpoint "/posts"
    app.get("/posts", listarPosts);
    // Rota para criar um post
    app.post("/posts", postarNovoPost);
    app.post("/upload", upload.single("imagem"), uploadImagem);
};

export default routes;