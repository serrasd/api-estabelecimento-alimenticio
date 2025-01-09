import mongoose from "mongoose"

const estabelecimentoSchema = new mongoose.Schema({
    nome: { type: String },
    cardapio: {
        nomeDoPrato: { type: String },
        descricao: { type: String },
        categoria: {type: String },
        preco: { type: Number }
    }
}, { versionKey: false })

const estabelecimento = mongoose.model("estabelecimentos", estabelecimentoSchema)

export default estabelecimento