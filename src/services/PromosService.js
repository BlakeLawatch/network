import { AppState } from "../AppState"
import { Promo } from "../models/Promo"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class PromosService {

    async getPromos() {
        const res = await api.get('api/ads')
        AppState.promos = res.data.map((pojo) => new Promo(pojo))
        logger.log('show me the promos!', res.data)
    }
}

export const promosService = new PromosService()