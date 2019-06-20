import * as cluster from 'cluster'
import * as os from 'os'

const CPUS = os.cpus().length

/** Cluster support to run an application server in multi-threaded mode */
export class ClusterApplication {

  constructor (private readonly applicationFactory: Function) { }

  /** Run an application in multi-threaded mode */
  run () {
    if (cluster.isMaster) {
      this.master()
    } else {
      this.worker()
    }
  }

  private master () {
    console.log('Total Number of Cores: %o', CPUS)
    console.log('Master %o is running', process.pid)

    // Fork workers
    for (let i = 0; i < CPUS; i++) {
      cluster.fork()
    }

    // process is clustered on a core and process id is assigned
    cluster.on('online', (worker) => {
      console.log('Worker %o is listening', worker.process.pid)
    })

    cluster.on('exit', (worker) => {
      console.log('Worker %o died', worker.process.pid)
    })
  }

  private worker () {
    console.log('Worker %o started', process.pid)
    this.applicationFactory()
  }
}
