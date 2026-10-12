import {BaseApi} from "../../shared/infraestructure/base-api.js";
import {BaseEndpoint}    from "../../shared/infraestructure/base-endpoint.js";

const collectionEndpointPath= import.meta.env.VITE_COLLECTION_TYPE_PATH;
const historicalObjectsPath = import.meta.env.VITE_COINS_ENDPOINT_PATH;

export class PublishingApi extends BaseApi {
    #collectionTypeEndpoint;
    #coinsEndpoint;

    constructor(){
        super();
        this.#collectionTypeEndpoint = new BaseEndpoint(this, collectionTypeEndpointPath);
        this.#coinsEndpoint = new BaseEndpoint(this, coinsEndpointPath);
    }
    getCollectionType(){
        return this.#collectionTypeEndpoint.getAll();
    }
    getCoins(){
        return this.#coinsEndpoint.getAll();
    }
    getCollectionTypeById(id){
        return this.#collectionTypeEndpoint.getById(id);
    }
    getCoinsById(id){
        return this.#coinsEndpoint.getById(id);
    }
}
