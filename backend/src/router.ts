import {Router} from 'express'
import {body} from 'express-validator'
import {handleInputErrors} from './middleware/validation'
import {createAccount, getUser, getUserByHandle, login, searchByHandle, updateProfile, uploadImage} from './handlers'
import {authenticate} from './middleware/auth'
const router = Router()

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
    handleInputErrors,
    createAccount
)

router.post('/auth/login', 
    body('email')
        .isEmail()
        .withMessage('Campo email no válido'),
    body('password')
        .notEmpty()
        .withMessage('Campo Password vacío'),
    login
)

router.get('/user', authenticate, getUser)

router.patch('/user',
    body('handle')
        .notEmpty()
        .withMessage('Campo handle vacío'),
    handleInputErrors,
    authenticate, 
    updateProfile
) 

router.post('/user/image', authenticate, uploadImage)

router.get('/:handle', getUserByHandle)

router.post('/search',
    body('handle')
        .notEmpty()
        .withMessage('Campo handle vacío'),
    handleInputErrors,
    searchByHandle
)

export default router