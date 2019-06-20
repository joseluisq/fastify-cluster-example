# Fastify Cluster Example

> A simple example of how to running a [Fastify](https://www.fastify.io/) server in [multi-threaded](https://nodejs.org/api/cluster.html#cluster_cluster) mode.

## Usage

```sh
~> yarn
~> yarn start
yarn run v1.16.0
$ ts-node src/index.ts
Total Number of Cores: 4
Master 40774 is running
Worker 40775 is listening
Worker 40776 is listening
Worker 40777 is listening
Worker 40778 is listening
Worker 40778 started
Worker 40775 started
Worker 40776 started
🚀 Server ready at http://127.0.0.1:7300
Worker 40987 started
🚀 Server ready at http://127.0.0.1:7300
🚀 Server ready at http://127.0.0.1:7300
🚀 Server ready at http://127.0.0.1:7300
```

## Testing

TODO

## Benchmarks

TODO

## License
MIT license

© 2019 [Jose Quintana](https://git.io/joseluisq)
