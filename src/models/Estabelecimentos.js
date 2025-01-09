import mongoose from "mongoose"

const estabelecimentoSchema = new mongoose.Schema({
  nome: { type: String },
  cardapio: {
    nomeDoPrato: { type: String },
    descricao: { type: String },
    categoria: { type: String },
    preco: { type: Number },
  },
  alimento: {
    valorNutricional: [
      { type: String }
    ],
    preco: { type: Number },
    ingredientes: [
      { type: String }
    ],
    prazoDeValidade: { type: Date },
    procedencia: { type: String },
  },
  proprietario: {
    funcionario: { type: Number },
    cargo: { type: String },
    salario: { type: Number },
    horarioDeTrabalho: { type: String },
    statusDoContrato: { type: String },
    metas: [
      { type: String }
    ],
    numeroDeFranquias: { type: Number },
    custoFixo: { type: Number },
  },
  fornecedor: {
    segmento: { type: String },
    reputacao: { type: String },
    garantia: { type: Boolean },
    veiculo: [
      { type: String }
    ],
    logistica: { type: String },
  },
  cliente: {
    statusNoProgramaDeFidelidade: { type: String },
    saldoDePontosNoProgramaDeFidelidade: { type: Number },
    metodoDePagamento: [
      { type: String }
    ],
    dataDeCadastro: { type: Date },
    idDoCliente: { type: Number },
  }
}, { versionKey: false })

const estabelecimento = mongoose.model("estabelecimentos", estabelecimentoSchema)

export default estabelecimento