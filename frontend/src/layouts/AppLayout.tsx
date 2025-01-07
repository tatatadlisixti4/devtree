import {Link, Outlet} from "react-router-dom"
import {Toaster} from "sonner"
import {useQuery} from '@tanstack/react-query'

import NavigationTabs from "../components/NavigationTabs"
import {getUser} from "../api/DevTreeAPI"

export default function AppLayout() {
    const {data, isLoading, error, isError} = useQuery({
        queryFn: getUser,
        queryKey: ['user'],
        retry: 1, // Si no se especifíca es igual a 3
        refetchOnWindowFocus: false
    })
    console.log(data) // Undefined cuando isLoading es true, su resultado posterior depende de que isError en sea true o false cuando isLoading sea false
    console.log(isLoading) // True cuando carga el fetch de la función getUser y false cuando ya tiene un resultado alojado en data
    console.log(isError) // False cuando isLoading es true ya que aun no hay resolución del fetch. True si la resolución no es exitosa
    console.log(error) // Undefined cuando isLoading es true, su resultado posterior depende de que isError en sea true o false cuando isLoading sea false
    console.log(error?.message) // Para que renderize solo el mensaje del error
    
    return (
        <>
            <header className="bg-slate-800 py-5">
                <div className="mx-auto max-w-5xl flex flex-col md:flex-row items-center md:justify-between">
                    <div className="w-full p-5 md:w-1/3 lg:p-0 ">
                        <img src="/logo.svg" className="w-full block" />
                    </div>
                    <div className="md:w-1/3 md:flex md:justify-end">
                        <button
                            className=" bg-lime-500 p-2 text-slate-800 uppercase font-black text-xs rounded-lg cursor-pointer"
                            onClick={() => {}}
                        >
                            Cerrar Sesión
                        </button>
                    </div>
                </div>
            </header>
            <div className="bg-gray-100  min-h-screen py-10">
                <main className="mx-auto max-w-5xl p-10 md:p-0">
                    <NavigationTabs />
                    <div className="flex justify-end">
                        <Link 
                            className="font-bold text-right text-slate-800 text-2xl"
                            to={''}
                            target="_blank"
                            rel="noreferrer noopener"
                        >Visitar Mi Perfil</Link>
                    </div>

                    <div className="flex flex-col md:flex-row gap-10 mt-10">
                        <div className="flex-1 ">
                            <Outlet />
                        </div>
                        <div className="w-full md:w-96 bg-slate-800 px-5 py-10 space-y-6">

                        </div>
                    </div>
                </main>
            </div>
            <Toaster position="top-right" />
        </>
    )
}