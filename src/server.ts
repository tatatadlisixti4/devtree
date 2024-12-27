import express from 'express'
import router from './router'

// Crear app y leer datos de formularios
const app = express()
app.use(express.json())

// Router
app.use('/', router)

export default app