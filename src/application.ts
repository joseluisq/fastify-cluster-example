import { fastify, FastifyInstance, FastifyServerOptions } from "fastify"
import { IncomingMessage, Server, ServerResponse } from "http"

/** Application options which contains `Fastify` server and listen options */
export interface ApplicationOptions {
    port: number
    host?: string
    backlog?: number
}

/** Simple Application class wrapper around `Fastify` */
export class Application {
    /** Public Fastify instance */
    readonly $server: FastifyInstance <Server, IncomingMessage, ServerResponse> = fastify({})

    constructor (
        private readonly options: ApplicationOptions = { port: 7300 },
        private readonly fastifyOptions: FastifyServerOptions = {}
    ) {
        this.$server = fastify(this.fastifyOptions)
    }

    /** Start the server */
    async listen () {
        return this.$server.listen(this.options)
    }
}
