import {useQuery} from '@tanstack/react-query'
import {Navigate} from "react-router-dom"

import {getUser} from "../api/DevTreeAPI"
import DevTree from "../components/DevTree"

export default function AppLayout() {
    const {data, isLoading, isError} = useQuery({
        queryFn: getUser,
        queryKey: ['user'],
        retry: 2, // Si no se especifíca es igual a 3
        refetchOnWindowFocus: false
    })
    if(isLoading) return 'Cargando...'
    if(isError) return <Navigate to={'/auth/login'} /> 

    if(data) return (
        <DevTree data={data} />
    )

    /*
    console.log(data) // Undefined cuando isLoading es true, su resultado posterior depende de que isError en sea true o false cuando isLoading sea false
    console.log(isLoading) // True cuando carga el fetch de la función getUser y false cuando ya tiene un resultado alojado en data
    console.log(isError) // False cuando isLoading es true ya que aun no hay resolución del fetch. True si la resolución no es exitosa
    console.log(error) // Undefined cuando isLoading es true, su resultado posterior depende de que isError en sea true o false cuando isLoading sea false
    console.log(error?.message) // Para que renderize solo el mensaje del error
    */
}