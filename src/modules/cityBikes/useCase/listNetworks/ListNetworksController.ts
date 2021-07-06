import { Request, Response } from "express";
import { ListNetworksUsecase } from "./ListNetworksUseCase"

export class ListNetworksController {
    private listNetworksUseCase: ListNetworksUsecase

    constructor (listNetworksUseCase: ListNetworksUsecase) {
        this.listNetworksUseCase = listNetworksUseCase
    }
    async handle(request: Request, response: Response) {
        const networks = await this.listNetworksUseCase.execute()
        return response.status(200).json(networks)
    }
}