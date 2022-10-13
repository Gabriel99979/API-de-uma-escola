const database = require('../models')

class PessoasControllers{
    
    static async PegaPessoasAtivas(req,res){
        try{
            const pessoasAtivas = await database.Pessoas.findAll()
            return res.status(200).json(pessoasAtivas)
        }catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async PegaTodasAsPessoas(req,res){
        try{
            const todasAsPessoas = await database.Pessoas.scope('todos').findAll()
            return res.status(200).json(todasAsPessoas)
        }catch(error){
            return res.status(500).json(error.message)
        }
    }


    static async PegaUmaPessoa(req,res){
        const { id } = req.params
        try{
            const umaPessoa = await database.Pessoas.findOne({where: {id: Number(id)}})
            return res.status(200).json(umaPessoa)
        }catch(error){
            return res.status(500).json(error.message)
        }
    }
    static async CriaPessoa(req,res){
        const corpo = req.body
        try{
            const novaPessoa = await database.Pessoas.create(corpo)
            return res.status(200).json(novaPessoa)
        }catch(error){
            return res.status(500).json(error.message)
        }
    }
    static async AtualizaPessoa(req,res){
        const corpo = req.body
        const { id } = req.params
        try{
            await database.Pessoas.update(corpo, {where: {id: Number(id)}})
            const pessoaAtualizada = await database.Pessoas.findOne({where: {id: Number(id)}})
            return res.status(200).json(pessoaAtualizada)
        }catch(error){
            return res.status(500).json(error.message)
        }
    }
    static async DeletaPessoa(req,res){
        const { id } = req.params
        try{
            await database.Pessoas.destroy({where: {id: Number(id)}})
            return res.status(200).json({message: `O id ${id} de pessoas foi deletado`})
        }catch(error){
            return res.status(500).json(error.message)
        }
    }
    static async pegaUmaMatricula(req,res){
        const {estudante_id,matricula_id} = req.params
        try{
            const matricula = await database.Matriculas.findOne({
                where: {
                    id: Number(matricula_id),
                    estudante_id: Number(estudante_id)
    
                }
            })
            return res.status(200).json(matricula)
        } catch(error){
            return res.status(500).json(error.message)
        }
    }
    
    static async restauraPessoa(req, res) {
        const { id } = req.params 
        try{
            await database.Pessoas.restore( {where: { id: Number(id) } } )
            return res.status(200).json({ mensagem: `id ${id} restaurado` })
        } catch (error){
            return res.status(500).json(error.message)
        }
    }



    static async restauraMatricula(req, res) {
        const { estudante_id, matricula_id} = req.params
        try{
            await database.Matriculas.restore({
                where: {
                    id: Number(matricula_id),
                    estudante_id: Number(estudante_id)
                }
            })
            return res.status(200).json({ mensagem: `id ${matricula_id} restaurado`})
        } catch ( error ){
            return res.status(500).json(error.message)
        }
    }

    static async CriaMatricula(req,res){
        
        const { estudante_id } = req.params
        const novaMatricula  = {...req.body,estudante_id: Number(estudante_id)}
        try{
            const novaMatriculacriada = await database.Matriculas.create(novaMatricula)
            return res.status(200).json(novaMatriculacriada)
        }catch(error){
            return res.status(500).json(error.message)
        }
    }    
    static async pegaUmaTodasAsMatriculas(req,res){
        try{
            const matricula = await database.Matriculas.findAll()
            return res.status(200).json(matricula)
        } catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async AtualizaMatricula(req,res){
        
        const { estudante_id,matricula_id } = req.params
        const atualizadaMatricula  = {...req.body,estudante_id: Number(estudante_id)}
        try{
            await database.Matriculas.update(atualizadaMatricula,{
                where: {id:Number(matricula_id),
                    estudante_id: Number(estudante_id)
                }
            })
            const novaMatriculatualizada = await database.Matriculas.findOne({
                where: {
                    id: Number(matricula_id),
                    estudante_id: Number(estudante_id)
                }
            })
            return res.status(200).json(novaMatriculatualizada)
        }catch(error){
            return res.status(500).json(error.message)
        }
    } 

    static async DeletaMatricula(req,res){
        const { estudante_id,matricula_id } = req.params
        try{
            await database.Matriculas.destroy({
                where: 
                {id: Number(matricula_id)
                ,estudante_id: Number(estudante_id)}})
            return res.status(200).json({message: `O id ${matricula_id} de matriculas foi deletado`})
        }catch(error){
            return res.status(500).json(error.message)
        }
    }
    
}

module.exports = PessoasControllers