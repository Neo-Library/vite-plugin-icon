// import { Plugin } from 'vite'
export function createIconPlugin() {

    const cache = new Map<string, any>()

    let isBuild = false


    return {
        name: 'vite:icon',
        configResolved(resolvedConfig) {

        },
        resolveId(id) {
            console.log(id)
            return null
        },
        configureServer(server) {
            server.middlewares.use((req, res, next) => {
                console.log(req)
                
                next()
            })
        }
    }
}