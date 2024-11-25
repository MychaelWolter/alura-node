// Importa a função para conectar ao banco de dados, definida no arquivo dbConfig.js
import conectarAoBanco from '../config/dbConfig.js';

// Realiza a conexão com o banco de dados usando uma string de conexão fornecida via variável de ambiente
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

// Função assíncrona para recuperar todos os documentos da coleção "posts" no banco de dados
export async function getTodosPosts() {
    // Acessa o banco de dados chamado "aluraInstabyte"
    const db = conexao.db("aluraInstabyte");
    // Obtém a coleção "posts"
    const colecao = db.collection("posts");
    // Retorna todos os documentos da coleção em forma de array
    return colecao.find().toArray();
};

export async function criarPost(novoPost) {
    const db = conexao.db("aluraInstabyte");
    const colecao = db.collection("posts");
    return colecao.insertOne(novoPost);
};