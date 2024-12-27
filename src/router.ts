import {Router} from 'express'

const router = Router()

// Routing
router.get('/', (req, res) => {
    res.send('Hola Mundo en Express | TypeScript')
})
router.get('/bromita', (req, res) => {
    res.send('Has sido JAJAJAckeado :)')
})

export default router