import {Router} from 'express'

const router = Router()

// Routing
router.post('/auth/register', (req, res) => {
    console.log(req.body)
})

router.get('/bromita', (req, res) => {
    res.send('Has sido JAJAJAckeado :)')
})

export default router