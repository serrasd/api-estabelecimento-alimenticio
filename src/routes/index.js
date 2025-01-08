import express from "express"
import estabelecimento from "./estabelecimentoRoutes.js"

const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send("Api da minha entidade"))

    app.use(express.json(), estabelecimento)
}

export default routes