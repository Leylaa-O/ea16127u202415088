import {Collection} from "../domain/model/collection.entity.js";

export class CollectionAssembler {
    static toEntityFromResource(resource){
        return new Collection({...resource});
    }

    static toEntitiesFromResponse(response){
        if(response.status !== 200)
        {
            console.log('Error en CollectionAssembler');
            return [];
        }
        let resources = response.data instanceof Array ? response.data : response.data['collection'];
        return resources.map(resource => this.toEntityFromResource(resource));
    }
}