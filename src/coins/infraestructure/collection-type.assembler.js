import {CollectionType} from "../domain/model/collection-type.entity.js";

export class CollectionTypeAssembler {

    static toEntityFromResource(resource){
        return new CollectionType({...resource});
    }

    static toEntitiesFromResponse(response){
        if(response.status !== 200)
        {
            console.log('Error en CollectionTypeAssembler');
            return [];
        }

        let resources = response.data instanceof Array ? response.data : response.data['collectionType'];

        return resources.map(resource => this.toEntityFromResource(resource));
    }
}