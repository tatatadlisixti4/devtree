import {Router} from 'express'
import User from './models/User'
const router = Router()

// Routing
router.post('/auth/register', async (req, res) => {
    const user = new User(req.body)
    await user.save()
}) 

router.get('/bromita', (req, res) => {
    res.send('Has sido JAJAJAckeado :)')
})

export default router