import * as fastify from 'fastify'
import { IncomingMessage, Server, ServerResponse } from 'http'

/** Application options which contains Fastify server and listen options */
export interface ApplicationOptions {
  serverOptions?: fastify.ServerOptionsAsHttp
  listenOptions?: fastify.ListenOptions
}

/** Simple Application class wrapper around Fastify */
export class Application {
  /** Fastify instance */
  readonly $server: fastify.FastifyInstance <Server, IncomingMessage, ServerResponse> = fastify({})

  constructor (
    private readonly serverOpts: fastify.ServerOptionsAsHttp = {},
    private readonly listenOpts: fastify.ListenOptions = {}
  ) {
    this.$server = fastify(this.serverOpts)
  }

  /** Starts the server on the given port */
  async listen () {
    return this.$server.listen(this.listenOpts)
  }
}
