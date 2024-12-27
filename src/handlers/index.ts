import {Request, Response} from 'express'
import {validationResult} from 'express-validator'
import slug from 'slug'

import User from "../models/User"
import {hashPassword} from '../utils/auth'


export const createAccount = async (req: Request, res: Response) => {
    // Manejar errores
    const errors = validationResult(req)
    if(!errors.isEmpty()) {
        res.status(400).json({errors: errors.array()})
    }
    
    const {email, password} = req.body
    // Comprobación email
    const userExists = await User.findOne({email})
    if(userExists) {
        const error = new Error('El correo ya está registrado')
        res.status(409).json({error: error.message})
        return
    }
    // Comprobación handle
    const handle = slug(req.body.handle, '')
    const handleExists = await User.findOne({handle})
    if(handleExists) {
        const handleError = new Error('Nombre de usuario no disponible')
        res.status(409).json({error: handleError.message})
        return
    }

    const user = new User(req.body)
    user.handle = handle
    user.password = await hashPassword(password)
    await user.save()
    res.status(201).send('Registro creado correctamente :)')
}