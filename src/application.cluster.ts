import * as cluster from "cluster"
import * as os from "os"
import { ApplicationFactory } from "./application.factory"

const CPUS = os.cpus().length

/** Cluster support to run an application server in multi-threaded mode */
export class ClusterApplication {
    constructor (private readonly applicationFactory: ApplicationFactory) { }

  /** Run an application in multi-threaded mode */
    run () {
        if (cluster.isPrimary) {
            this.master()
        } else {
            this.worker()
        }
    }

    private master () {
        console.log("Total Number of Cores: %o", CPUS)
        console.log("Master %o is running", process.pid)

        // Fork workers
        for (let i = 0; i < CPUS; i++) {
            const fork = cluster.fork()
            // fork.on('message', (index: number) => {
            //   console.log('Thread index: %s', index)
            // })
            fork.send(i)
        }

        // process is clustered on a core and process id is assigned
        cluster.on("online", (worker) => {
            console.log("Worker %o is listening", worker.process.pid)
        })

        cluster.on("exit", (worker) => {
            console.log("Worker %o died", worker.process.pid)
        })
    }

    private worker () {
        const cb = (index: number) => {
            // Unregister immediately current listener for message
            process.off("message", cb)

            // Run application
            console.log("Worker %o started", process.pid)
            this.applicationFactory(index)
        }

        process.on("message", cb)
    }
}
