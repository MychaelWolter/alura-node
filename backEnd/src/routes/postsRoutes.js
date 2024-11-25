import express from "express";
import { listarPosts } from "../controllers/postsController.js";

const routes = (app) => {
    // Configura o middleware para o Express entender requisições com JSON no corpo
    app.use(express.json());
    // Configura uma rota GET no endpoint "/posts"
    app.get("/posts", listarPosts);
};

export default routes;