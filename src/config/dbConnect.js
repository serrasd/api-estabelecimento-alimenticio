import mongoose from "mongoose"

async function conectaNaDatabase() {
    const mongoURI = 'mongodb://localhost:27017/estabelecimento-alimenticio'
    
    try {
        await mongoose.connect(mongoURI)
        console.log("Conectado ao MongoDB com sucesso!")
    } catch (err) {
        console.error("Erro de conexão com o MongoDB:", err)
    }

    return mongoose.connection
}

export default conectaNaDatabase
