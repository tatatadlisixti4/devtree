import {Router} from 'express'
import {body} from 'express-validator'
import {createAccount} from './handlers'
const router = Router()

// Routing
router.post('/auth/register',
    body("handle")
        .notEmpty()
        .withMessage('Campo vacío'),
    createAccount
)

export default router