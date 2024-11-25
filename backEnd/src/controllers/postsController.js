import { getTodosPosts, criarPost } from "../models/postsModels.js";
import fs from "fs";

export async function listarPosts(req, res) {
    // Obtém todos os posts do banco de dados
    const posts = await getTodosPosts();
    // Retorna os posts como uma resposta JSON com o código de status HTTP 200 (OK)
    res.status(200).json(posts);
};

export async function postarNovoPost(req, res) {
    const novoPost = req.body;
    try {
        const postCriado = await criarPost(novoPost);
        res.status(200).json(postCriado);
    } catch (erro) {
        console.error(erro.message);
        res.status(500).json({ "Erro": "Falha na requisição" });
    };
};

export async function uploadImagem(req, res) {
    const novoPost = {
        descricao: "",
        imgurl: req.file.originalname,
        alt: ""
    };

    try {
        const postCriado = await criarPost(novoPost);
        const imagemAtualizada = `uploads/${postCriado.insertedId}.png`;
        fs.renameSync(req.file.path, imagemAtualizada);
        res.status(200).json(postCriado);
    } catch (erro) {
        console.error(erro.message);
        res.status(500).json({ "Erro": "Falha na requisição" });
    };
};