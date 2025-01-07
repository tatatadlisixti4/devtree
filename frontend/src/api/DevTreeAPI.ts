import {isAxiosError} from "axios"
import api from "../config/axios"

export async function getUser() {
    try {
        // Envio del token en la cabecera authorization del request con axios
        const token = localStorage.getItem('AUTH_TOKEN')
        const {data} = await api('user', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return data
    } catch (error) {
        if(isAxiosError(error) && error.response){
            // console.log(error.response.data.error) Mensaje de error del middleware del backend
            throw new Error(error.response.data.error) // Se usa esto y no el de arriba para poder usar el error de ReactQuery que interacciona con este error.
        }
    }
}