const TurmasControllers = require('../Controllers/turmasControllers')
const { Router } = require('express')

const router = Router()
router.get('/turmas', TurmasControllers.pegaTodasAsTurmas)
router.get('/turmas/:id', TurmasControllers.pegaUmaTurma)
router.post('/turmas', TurmasControllers.criaUmaTurma)
router.put('/turmas/:id', TurmasControllers.AtualizaTurma)
router.delete('/turmas/:id', TurmasControllers.DeletaTurmas)

module.exports = router