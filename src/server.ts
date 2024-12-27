import express from 'express'
import 'dotenv/config' 
import router from './router'
import {connectDB} from './config/db'

// Crear app y conexión a MongoDB Atlas
const app = express()
connectDB()

// Leer datos de formularios
app.use(express.json())

// Router
app.use('/', router)

export default app