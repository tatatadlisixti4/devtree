import {Router} from 'express'

const router = Router()

// Routing
router.get('/auth/register', (req, res) => {
    console.log('Desde Register')
    
})

router.get('/bromita', (req, res) => {
    res.send('Has sido JAJAJAckeado :)')
})

export default router