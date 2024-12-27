import mongoose from 'mongoose'

export const connectDB = async () => {
    try {
        const url = 'mongodb+srv://root:s55OLKsxbuedKC6H@cluster0.rjwag.mongodb.net/linktree_node_typescript'
        const {connection} = await mongoose.connect(url)
        const info = `${connection.host}: ${connection.port}`
        console.log(`MongoDB conectado en ${info}`)
        
    } catch (error) {
        console.log(error.message)
        process.exit(1)
        
    }
}