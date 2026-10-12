import {CollectionType} from "../../../coins/domain/model/collection-type.entity.js";

export class Collection {
    constructor(id = null, title='', country='', state='', collectionTypeID=null,
                collectionType=null, size=null) {
        this.id = id;
        this.title = title;
        this.country = country;
        this.state = state;
        this.collectionTypeID = collectionTypeID;
        this.collectionType = collectionType instanceof CollectionType ? collectionType : null;
    }
}