import express from "express"
import EstabelecimentoController from "../controllers/estabelecimentoController.js"

const routes = express.Router()

routes.get("/estabelecimento", EstabelecimentoController.listarEstabelecimentos)
routes.get("/estabelecimento/:cnpj", EstabelecimentoController.listaEstabelecimentoPorId)
routes.post("/estabelecimento", EstabelecimentoController.cadastrarEstabelecimento)
routes.put("/estabelecimento/:cnpj", EstabelecimentoController.atualizarEstabelecimento)
routes.delete("/estabelecimento/:cnpj", EstabelecimentoController.excluirEstabelecimento)

export default routes