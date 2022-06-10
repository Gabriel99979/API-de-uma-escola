const database = require('../models')

class TurmasControllers{

static async pegaTodasAsTurmas(req,res){
    try{
        const todasAsTurmas = await database.Turmas.findAll()
        return res.status(200).json(todasAsTurmas)
    } catch(error){
        return res.status(500).json(error.message)
    }
}
static async pegaUmaTurma(req,res){
    const { id } = req.params
    try{
        const umaTurma = await database.Turmas.findOne({where: {id: Number(id)}})
        return res.status(200).json(umaTurma)
    } catch(error){
        return res.status(500).json(error.message)
    }
}
static async criaUmaTurma(req,res){
    const corpo = req.body
    try{
        const novaTurma = await database.Turmas.create(corpo)
        return res.status(200).json(novaTurma)
    } catch(error){
        return res.status(500).json(error.message)
    }
}
static async AtualizaTurma(req,res){
    const corpo = req.body
    const { id } = req.params
    try{
        await database.Turmas.update(corpo, {where: {id: Number(id)}});
        const atualiza = await database.Turmas.findOne({where: {id: Number(id)}})
        return res.status(200).json(atualiza)
    } catch(error){
        return res.status(500).json(error.message)
    }
}

static async DeletaTurmas(req,res){
    const { id } = req.params
    try{
        await database.Turmas.destroy({where: {id: Number(id)}})
        return res.status(200).json({message: `O id ${id} de turmas foi deletado`})
    } catch(error){
        return res.status(500).json(error.message)
    }
}



}

module.exports = TurmasControllers