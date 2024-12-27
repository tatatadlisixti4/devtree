import express from 'express'
import router from './router'
// Crear app
const app = express()
app.use(express.urlencoded({extended: true}))

app.use('/', router)



export default app