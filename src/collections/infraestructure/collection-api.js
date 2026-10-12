import {BaseApi} from "../../shared/infraestructure/base-api.js";
import {BaseEndpoint}    from "../../shared/infraestructure/base-endpoint.js";

const collectionEndpointPath= import.meta.env.VITE_COLLECTION_PATH;
const historicalObjectsPath = import.meta.env.VITE_HISTORICALOBJECTS_ENDPOINT_PATH;

export class CollectionApi extends BaseApi {
    #collectionEndpoint;
    #historicalObjectsEndpoint;

    constructor(){
        super();
        this.#collectionEndpoint = new BaseEndpoint(this, collectionEndpointPath);
        this.#historicalObjectsEndpoint = new BaseEndpoint(this, historicalObjectsPath);
    }
    getCollection(){
        return this.#collectionEndpoint.getAll();
    }
    getHistoricalObjects(){
        return this.#historicalObjectsEndpoint.getAll();
    }
    getCollectionTypeById(id){
        return this.#collectionEndpoint.getById(id);
    }
    getHistoricalObjectsById(id){
        return this.#historicalObjectsEndpoint.getById(id);
    }
}
