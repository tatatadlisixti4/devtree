import {Link} from "react-router-dom"
import {useForm} from "react-hook-form"
import ErrorMessage from "../components/ErrorMessage"

type RegisterFormType = {
    name: string
    email: string
    handle: string
    password: string
    password_confirmation: string
}

export default function RegisterView() {
    const {register, watch, handleSubmit, formState: {errors}} = useForm<RegisterFormType>()
    const password = watch('password')

    const handleRegister = () => {
        console.log('Holiguis')
    }

    return (
        <>
            <h1 className="text-4xl text-white font-bold">Crear Cuenta</h1>
            <form 
                className="bg-white px-5 py-20 rounded-lg space-y-10 mt-10"
                onSubmit={handleSubmit(handleRegister)}
                noValidate
            >
                <div className="grid grid-cols-1 space-y-3">
                    <label htmlFor="name" className="text-2xl text-slate-500">Nombre</label>
                    <input
                        id="name"
                        type="text"
                        placeholder="Tu Nombre"
                        className="bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400"
                        {...register('name', {
                            required: "El nombre es obligatorio",
                            maxLength: {
                                value: 8,
                                message: "Máximo 8 carácteres"
                            }
                            
                        })}
                    />
                    {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
                </div>
                <div className="grid grid-cols-1 space-y-3">
                    <label htmlFor="email" className="text-2xl text-slate-500">E-mail</label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Email de Registro"
                        className="bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400"
                        {...register('email', {
                            required: "El e-mail es obligatorio",
                            pattern: {
                                value: /\S+@\S+\.\S+/,
                                message: "E-mail no válido",
                            },
                        })}
                    />
                    {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
                </div>
                <div className="grid grid-cols-1 space-y-3">
                    <label htmlFor="handle" className="text-2xl text-slate-500">Handle</label>
                    <input
                        id="handle"
                        type="text"
                        placeholder="Nombre de usuario: sin espacios"
                        className="bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400"
                        {...register('handle', {
                            required: "El nombre de usuario es obligatorio"
                        })}
                    />
                    {errors.handle && <ErrorMessage>{errors.handle.message}</ErrorMessage>}
                </div>
                <div className="grid grid-cols-1 space-y-3">
                    <label htmlFor="password" className="text-2xl text-slate-500">Password</label>
                    <input
                        id="password"
                        type="password"
                        placeholder="Password de Registro"
                        className="bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400"
                        {...register('password', {
                            required: "El password es obligatorio",
                            minLength: {
                                value: 6,
                                message: "El password debe incluir mínimo 6 caracteres"
                            }
                        })}
                    />
                    {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
                </div>
                <div className="grid grid-cols-1 space-y-3">
                    <label htmlFor="password_confirmation" className="text-2xl text-slate-500">Repetir Password</label>
                    <input
                        id="password"
                        type="password"
                        placeholder="Repetir Password"
                        className="bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400"
                        {...register('password_confirmation', {
                            required: "No repetiste tu password",
                            validate: value => value === password || "Los passwords no coinciden"
                        })}
                    />
                    {errors.password_confirmation && <ErrorMessage>{errors.password_confirmation.message}</ErrorMessage>}
                </div>
                <input
                    type="submit"
                    className="bg-cyan-400 p-3 text-lg w-full uppercase text-slate-600 rounded-lg font-bold cursor-pointer"
                    value='Crear Cuenta'
                />  
            </form>
            <nav className="mt-10">
                <Link 
                    className="block text-center text-white text-lg"
                    to="/auth/login"
                >¿Ya tienes una cuenta? Inicia Sesión</Link>
            </nav>
        </>
    )
}


