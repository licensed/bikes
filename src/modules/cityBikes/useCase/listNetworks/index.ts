import { NetworkRepository } from "../../repositories/NetworksRepository"
import { ListNetworksController } from "./ListNetworksController"
import { ListNetworksUsecase } from "./ListNetworksUseCase"

const networkrepository = new NetworkRepository()
const listNetworksUseCase = new ListNetworksUsecase(networkrepository)
const listNetworkController = new ListNetworksController(listNetworksUseCase)

export { listNetworkController }