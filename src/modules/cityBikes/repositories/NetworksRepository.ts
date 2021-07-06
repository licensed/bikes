import { cityBikesAPI } from "../../../services/cityBikesAPI"

export class NetworkRepository {

    private networks: any[]
    constructor () {
        this.networks = []
    }
    async listNetworks() {
        const axiosResponse = await cityBikesAPI.get("/networks")
        this.networks = axiosResponse.data.networks
        return this.networks
    }
    async getNetworksByCity(city: string) {
        this.networks = await this.listNetworks()
        const networkByCity = this.networks.filter((network: any) => 
            network.location.city.toLowerCase() === city)        
        return networkByCity
    }
}