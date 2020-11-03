import { Application } from "./application"
import { setupRoutes } from "./application.routes"

/** Define a factory function that will create an instance of `Application` */
export type ApplicationFactory = (worker: number) => Promise<void>

/** Create an new instance of `Appication` */
export async function applicationFactory (worker: number) {
    // Application instance
    const app = new Application({ port: 7300 })

    // Router definitions
    setupRoutes(app.$server)

    const url = await app.listen()

    console.log("🚀 Server ready at %s on worker %o", url, worker)
}
