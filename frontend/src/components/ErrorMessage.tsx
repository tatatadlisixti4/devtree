export default function ErrorMessage({children}: {children: React.ReactNode}) {
    return (
        <p className="bg-red-50 text-red-600 p-3 uppercase font-bold rounded-lg text-center text-sm">{children}</p>
    )
}
