import {Router} from 'express'
import {body} from 'express-validator'
import {createAccount} from './handlers'
const router = Router()

// Routing
router.post('/auth/register',
    body('handle')
        .notEmpty()
        .withMessage('Campo handle vacío'),
    body('name')
        .notEmpty()
        .withMessage('Campo nombre vacío'),
    body('email')
        .isEmail()
        .withMessage('Campo email no válido'),
    body('password')
        .isLength({min: 6})
        .withMessage('Campo password requiere mín. 6 carácteres'),
    createAccount
)

export default router