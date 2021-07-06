import { NetworkRepository } from "../../repositories/NetworksRepository";

export class ListNetworksUsecase {
    private networksRepository: NetworkRepository

    constructor(networksRepository: NetworkRepository) {
        this.networksRepository = networksRepository
    }

    async execute() {
        return await this.networksRepository.listNetworks()
    }
}