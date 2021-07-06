import { Router } from "express"
import { getNetworksByCityController } from "./modules/cityBikes/useCase/getNetworksByCity"
import { listNetworkController } from "./modules/cityBikes/useCase/listNetworks"

const routers = Router()

routers.get("/networks/", (request: any, response: any) => listNetworkController.handle(request, response))
routers.get("/networks/:city", (request: any, response: any) => getNetworksByCityController.handle(request, response))

export { routers as CityBikesRouters }