import { Application } from './application'
import { setupRoutes } from './application.routes'

/** Creates an Appication instance */
export async function applicationFactory () {
  // Application instance
  const app = new Application(
    {
      http2: false
    }, {
      port: 7300,
      host: '127.0.0.1'
    }
  )

  // Router definitions
  setupRoutes(app.$server)

  const URL = await app.listen()

  console.log('🚀 Server ready at %s', URL)
}
