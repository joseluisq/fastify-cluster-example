# Fastify Cluster Example

> A simple example of how to running a [Fastify](https://www.fastify.io/) server in [multi-threaded](https://nodejs.org/api/cluster.html#cluster_cluster) mode.

## Usage

```sh
~> yarn
~> yarn start
yarn run v1.22.4
$ ts-node src/index.ts
Total Number of Cores: 4
Master 14784 is running
Worker 14785 is listening
Worker 14786 is listening
Worker 14787 is listening
Worker 14788 is listening
Worker 14787 started
Worker 14785 started
🚀 Server ready at http://[::]:7300 on worker 2
Worker 14788 started
🚀 Server ready at http://[::]:7300 on worker 0
🚀 Server ready at http://[::]:7300 on worker 3
Worker 14786 started
🚀 Server ready at http://[::]:7300 on worker 1
```

## Testing

TODO

## Benchmarks

TODO

## License
MIT license

© 2019 [Jose Quintana](https://git.io/joseluisq)
