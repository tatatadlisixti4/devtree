import express from 'express'


// Crear app y habilitar lectura del formulario  con qs en vez de querystring
const app = express()
app.use(express.urlencoded({extended: true}))

// Routing
app.get('/', (req, res) => {
    res.send('Hola Mundo en Express | TypeScript')
    
})

export default app