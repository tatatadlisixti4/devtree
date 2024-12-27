import server from './server'
import colors from 'colors'

// Puerto y servidor
const port = process.env.PORT || 4000
server.listen(port, () => {
    console.log(colors.bgMagenta.blue.white('Servidor Funcionando en el puerto: '), port)
})
