import { log } from 'console'
import express from 'express'

// Crear app y habilitar lectura del formulario  con qs en vez de querystring
const app = express()
app.use(express.urlencoded({extended: true}))

// Routing
app.get('/', (req, res) => {
    res.send('Hola Mundo en Express')
    
})

// Puerto y servidor
const port = process.env.PORT || 4000
app.listen(port, () => {
    console.log('Servidor Funcionando')
})
