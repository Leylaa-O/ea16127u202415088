import {CollectionType} from "./collection-type.entity.js";

export class Coin {
    constructor({ id = null, tittle= '', collectionTypeId = null, collectionType=null,
                    yearProduction=null, price=0, rarityScale='', weightGrams='',
                    conditionGrade=''}) {
        this.id = id;
        this.tittle = tittle;
        this.collectionTypeId = collectionTypeId;
        this.collectionType = collectionType instanceof CollectionType ? collectionType : null;
        this.price = price;
        this.rarityScale = rarityScale;
        this.weightGrams= weightGrams;
        this.conditionGrade= conditionGrade;
    }
}