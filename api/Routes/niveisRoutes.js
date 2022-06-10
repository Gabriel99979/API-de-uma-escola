const NiveisControllers = require('../Controllers/niveisControllers')
const { Router } = require('express')

const router = Router()

router.get('/niveis', NiveisControllers.pegaTodosOsNiveis)
router.get('/niveis/:id', NiveisControllers.pegaUmNivel)
router.post('/niveis', NiveisControllers.criaUmNivel)
router.put('/niveis/:id', NiveisControllers.AtualizaNivel)
router.delete('/niveis/:id', NiveisControllers.DeletaNivel)

module.exports = router