import { Request, Response } from "express";
import { GetNetworksByCityUsecase } from "./GetNetworksByCityUseCase"

export class GetNetworksByCityController {
    private getNetworksByCityUseCase: GetNetworksByCityUsecase

    constructor (getNetworksByCityUseCase: GetNetworksByCityUsecase) {
        this.getNetworksByCityUseCase = getNetworksByCityUseCase
    }
    async handle(request: Request, response: Response) {
        const { city }= request.params
        const networks = await this.getNetworksByCityUseCase.execute(city)
        return response.status(200).json(networks)
    }
}