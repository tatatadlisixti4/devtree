import type {Request, Response} from 'express'
import {validationResult} from 'express-validator'
import slug from 'slug'

import User from "../models/User"
import {hashPassword, checkPassword} from '../utils/auth'
import {generateJWT} from '../utils/jwt'

export const createAccount = async (req: Request, res: Response) => {
    // Extracción datos
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

    // Creación usuario
    const user = new User(req.body)
    user.handle = handle
    user.password = await hashPassword(password)
    await user.save()

    // Respuesta
    res.status(201).json({response: 'Registro creado correctamente :)'})
}

export const login = async (req: Request, res: Response) => {
    // Manejo errores
    const errors =  validationResult(req)
    if(!errors.isEmpty()) {       
        res.status(400).json({errors: errors.array()})
        return
    } 

    // Extracción datos
    const {email, password} = req.body

    // Comprobación existencia usuario
    const user = await User.findOne({email}) 
    if(!user) {
        const error = new Error('El correo no está registrado')
        res.status(404).json({error: error.message})
        return
    } 

    // Comprobar password
    const isPasswordCorrect = await checkPassword(password, user.password)
    if(!isPasswordCorrect) {
        const error = new Error('Password incorrecto')
        res.status(401).json({error: error.message})
    }
    generateJWT(user)
    res.status(200).json({response: 'Comprobación exitosa'})
}