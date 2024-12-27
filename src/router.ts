import {Router} from 'express'
import {createAccount} from './handlers'
const router = Router()

// Routing
router.post('/auth/register',createAccount) 

router.get('/bromita', (req, res) => {
    res.send('Has sido JAJAJAckeado :)')
})

export default router