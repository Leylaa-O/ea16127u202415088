import {Coin} from "../domain/model/coin.entity.js";

export class CoinAssembler {
    static toEntityFromResource(resource){
        return new Coin({...resource});
    }

    static toEntitiesFromResponse(response){
        if(response.status !== 200)
        {
            console.log('Error en CoinAssembler');
            return [];
        }
        let resources = response.data instanceof Array ? response.data : response.data['coin'];
        return resources.map(resource => this.toEntityFromResource(resource));
    }
}