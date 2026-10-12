import {HistoricalObject} from "../domain/model/historical-object.entity.js";

export class HistoricalObjectsAssembler {
    static toEntityFromResource(resource){
        return new HistoricalObject({...resource});
    }

    static toEntitiesFromResponse(response){
        if(response.status !== 200)
        {
            console.log('Error en HistoricalObjectAssembler');
            return [];
        }

        let resources = response.data instanceof Array ? response.data : response.data['historicalObject'];

        return resources.map(resource => this.toEntityFromResource(resource));
    }
}