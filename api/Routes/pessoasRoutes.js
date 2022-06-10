const PessoasControllers = require('../Controllers/pessoasControllers')

const { Router } = require('express')

const router = Router()

router.get('/pessoas', PessoasControllers.PegaTodasAsPessoas)
router.get('/pessoas/:id', PessoasControllers.PegaUmaPessoa)
router.post('/pessoas', PessoasControllers.CriaPessoa)
router.put('/pessoas/:id', PessoasControllers.AtualizaPessoa)
router.delete('/pessoas/:id', PessoasControllers.DeletaPessoa)
router.get('/pessoas/:estudante_id/matriculas/:matricula_id', PessoasControllers.pegaUmaMatricula)
router.post('/pessoas/:estudante_id/matriculas', PessoasControllers.CriaMatricula)
router.get('/matriculas', PessoasControllers.pegaUmaTodasAsMatriculas)
router.put('/pessoas/:estudante_id/matriculas/:matricula_id',PessoasControllers.AtualizaMatricula)
router.delete('/pessoas/:estudante_id/matriculas/:matricula_id', PessoasControllers.DeletaMatricula)
module.exports = router