const express = require('express')
const router = require('./Routes')

const app = express()
const PORT = 3000

router(app)

app.listen(PORT,() => console.log(`Servidor iniciado na porta ${PORT}`))

module.express = app
