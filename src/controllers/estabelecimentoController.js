import estabelecimento from "../models/Estabelecimentos.js"

class EstabelecimentoController {
    static async listarEstabelecimentos (req, res) {

        try {
            const listaEstabelecimentos = await estabelecimento.find({})
            res.status(200).json(listaEstabelecimentos)
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na requisição` })
        }
    }

    static async listaEstabelecimentoPorId (req, res) {

        try {
            const id = req.params.id
            const estabelecimentoEncontrado = await estabelecimento.findById(id)
            res.status(200).json(estabelecimentoEncontrado)
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na requisição do estabelecimento` })
        }
    }
   
    static async cadastrarEstabelecimento (req, res) {

        try {
            const novoEstabelecimento = await estabelecimento.create(req.body)
            res.status(201).json({ message: "Criado com sucesso", estabelecimento: novoEstabelecimento})
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha ao cadastrar estabelecimento` })
        }
    }

    static async atualizarEstabelecimento (req, res) {

        try {
            const id = req.params.id
            await estabelecimento.findByIdAndUpdate(id, req.body)
            res.status(200).json({ message : "Estabelecimento atualizado!"})
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na atualização` })
        }
    }

    static async excluirEstabelecimento (req, res) {

        try {
            const id = req.params.id
            await estabelecimento.findByIdAndDelete(id)
            res.status(200).json({ message : "Estabelecimento excluído com sucesso!"})
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na exclusão` })
        }
    }

}

export default EstabelecimentoController