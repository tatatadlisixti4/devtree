import type {Request, Response, NextFunction} from "express"
import jwt from 'jsonwebtoken'

import User from "../models/User"

export const authenticate = async (req: Request, res: Response, next: NextFunction) => {
    const bearer = req.headers.authorization
    if(!bearer) {
        const error = new Error('No Autorizado')
        res.status(401).json({error: error.message})
        return
    }

    const [, token] = bearer.split(' ')
    if(!token) {
        const error = new Error('No Autorizado')
        res.status(401).json({error: error.message})
        return
    }

    try {
        const result = jwt.verify(token, process.env.JWT_SECRET)
        if(typeof result === 'object' && result.id) {
            const user = await User.findById(result.id).select('-password')
            if(!user) {
                const error = new Error('El usuario no existe')
                res.status(404).json({error: error.message})
                return
            }
            next()
        }
    } catch (error) {
        res.status(500).json({error: 'Token No Válido'})
    } 
}   