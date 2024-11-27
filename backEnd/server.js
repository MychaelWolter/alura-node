// Importa o framework Express para criar o servidor
import express from "express";
import routes from "./src/routes/postsRoutes";

// Cria uma aplicação Express
const app = express();
routes(app);

// Configura o servidor para ouvir na porta 3000
app.listen(3000, () => {
    console.log("servidor escutando...");
});