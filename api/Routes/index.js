const pessoas = require('./pessoasRoutes')
const bodyParser = require('body-parser')
const niveis = require('./niveisRoutes')
const turmas = require('./turmasRoutes')
module.exports = app => {
    app.use(bodyParser.json())
    app.use(pessoas)
    app.use(niveis)
    app.use(turmas)
}