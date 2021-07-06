import { NetworkRepository } from "../../repositories/NetworksRepository"
import { GetNetworksByCityController } from "./GetNetworksByCityController"
import { GetNetworksByCityUsecase } from "./GetNetworksByCityUseCase"

const networkrepository = new NetworkRepository()
const getNetworksByCityUseCase = new GetNetworksByCityUsecase(networkrepository)
const getNetworksByCityController = new GetNetworksByCityController(getNetworksByCityUseCase)

export { getNetworksByCityController }