import * as fastify from 'fastify'
import { IncomingMessage, Server, ServerResponse } from 'http'

/** Route definitions */
export function setupRoutes (server: fastify.FastifyInstance <Server, IncomingMessage, ServerResponse>) {
  server.get('/', (request, reply) => {
    const { hostname, ip } = request

    reply.send({
      hostname,
      ip
    })
  })
}
