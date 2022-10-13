const database = require('../models')

class NiveisControllers{

static async pegaTodosOsNiveis(req,res){
    try{
        const todasAsPessoas = await database.Niveis.findAll()
        return res.status(200).json(todasAsPessoas)
    } catch(error){
        return res.status(500).json(error.message)
    }
}

static async restauraNivel(req, res){
    const { id } = req.params

    try{
        await database.Niveis.restore( {where: { id: Number(id) } } )
        return res.status(200).json({ mensagem: `id ${id} restaurado`})
    } catch (error) {
        return res.status(500).json(error.message)
    }
}

static async pegaUmNivel(req,res){
    const { id } = req.params
    try{
        const umNivel = await database.Niveis.findOne({where: {id: Number(id)}})
        return res.status(200).json(umNivel)
    } catch(error){
        return res.status(500).json(error.message)
    }
}
static async criaUmNivel(req,res){
    const corpo = req.body
    try{
        const novoNivel = await database.Niveis.create(corpo)
        return res.status(200).json(novoNivel)
    } catch(error){
        return res.status(500).json(error.message)
    }
}
static async AtualizaNivel(req,res){
    const corpo = req.body
    const { id } = req.params
    try{
         await database.Niveis.update(corpo, {where: {id: Number(id)}})
         const novoNivel = await database.Niveis.findOne({where: {id: Number(id)}})
         return res.status(200).json(novoNivel)
    } catch(error){
        return res.status(500).json(error.message)
    }
}

static async DeletaNivel(req,res){
    const { id } = req.params
    try{
        await database.Niveis.destroy({where: {id: Number(id)}})
        return res.status(200).json({message: `O id ${id} de niveis foi deletado`})
    } catch(error){
        return res.status(500).json(error.message)
    }
}

}

module.exports = NiveisControllers