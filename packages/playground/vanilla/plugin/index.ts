import { Plugin } from 'vite'
import cors from 'cors'
export function createIconPlugin(): Plugin {

  const cache = new Map<string, any>()

  let isBuild = false


  return {
    name: 'vite:icon',
    configResolved(resolvedConfig) {

    },
    resolveId(id) {
      if (id == '#/__/icon-preview') {
        console.log('enter Preview Server')
        return id
      }
      return null
    },
    configureServer({ middlewares }) {
      middlewares.use(cors({ origin: '*' }))
      middlewares.use(async (req, res, next) => {
        // console.log(req)
        console.log(req)
        if (req.url === '/#__icon-preview') {
          res.setHeader('Content-Type', 'text/html')
          res.setHeader('Cache-Control', 'no-cache')

          // content ==> html 
          res.write(`
            <!DOCTYPE html>
            <html>
              <head>
                <title>Icon Preview</title>
              </head>
              <body>
                <h1>Icon Preview</h1>
              </body>
            </html>
            `)
          res.end()
          next()
        }
        next()
      })
    }
  }
}