import express from "express"
import EstabelecimentoController from "../controllers/estabelecimentoController.js"

const routes = express.Router()

routes.get("/estabelecimento", EstabelecimentoController.listarEstabelecimentos)
routes.get("/estabelecimento/:id", EstabelecimentoController.listaEstabelecimentoPorId)
routes.post("/estabelecimento", EstabelecimentoController.cadastrarEstabelecimento)
routes.put("/estabelecimento/:nome", EstabelecimentoController.atualizarEstabelecimento)
routes.delete("/estabelecimento/:nome", EstabelecimentoController.excluirEstabelecimento)

export default routes