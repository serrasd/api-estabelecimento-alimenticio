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

    static async listaEstabelecimentoPorNome (req, res) {

        try {
            const nome = req.params.nome
            const estabelecimentoEncontrado = await estabelecimento.findOne(nome)
            res.status(200).json(estabelecimentoEncontrado)
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na requisição do livro` })
        }
    }
   
    static async cadastrarEstabelecimento (req, res) {

        try {
            const novoEstabelecimento = await estabelecimento.create(req.body)
            res.status(201).json({ message: "Criado com sucesso", estabelecimento: novoEstabelecimento})
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha ao cadastrar livro` })
        }
    }

    static async atualizarEstabelecimento (req, res) {

        try {
            const nome = req.params.nome
            await estabelecimento.updateOne({nome}, req.body)
            res.status(200).json({ message : "Estabelecimento atualizado!"})
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na atualização` })
        }
    }

    static async excluirEstabelecimento (req, res) {

        try {
            const nome = req.params.nome
            await estabelecimento.deleteOne({nome})
            res.status(200).json({ message : "Estabelecimento excluído com sucesso!"})
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na exclusão` })
        }
    }

}

export default EstabelecimentoController