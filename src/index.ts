import { ClusterApplication } from "./application.cluster"
import { applicationFactory } from "./application.factory"

const clusterApp = new ClusterApplication(applicationFactory)

clusterApp.run()
