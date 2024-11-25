import getTodosPosts from "../models/postsModels.js";

export async function listarPosts(req, res) {
    // Obtém todos os posts do banco de dados
    const posts = await getTodosPosts();
    // Retorna os posts como uma resposta JSON com o código de status HTTP 200 (OK)
    res.status(200).json(posts);
};