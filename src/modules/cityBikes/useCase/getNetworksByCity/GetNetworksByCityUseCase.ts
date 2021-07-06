import { NetworkRepository } from "../../repositories/NetworksRepository";

export class GetNetworksByCityUsecase {
    private networksRepository: NetworkRepository

    constructor(networksRepository: NetworkRepository) {
        this.networksRepository = networksRepository
    }

    async execute(city: string) {
        return await this.networksRepository.getNetworksByCity(city)
    }
}