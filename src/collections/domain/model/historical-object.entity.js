import {date} from "@primeuix/themes/aura/datepicker";
import {CollectionType} from "../../../coins/domain/model/collection-type.entity.js";
import {Coin} from "../../../coins/domain/model/coin.entity.js";
import {Collection} from "./collection.entity.js";

export class HistoricalObject {
    constructor(id = null, name= '', coinId=null, coin=null, collectionTypeId=null,
                collectionType=null, yearProduction=null, coinCollectionId=null, collection=null,
                summary= '', legends= '', price=0, registeredAt=null) {
        this.id = id;
        this.name = name;
        this.coinI = coinId;
        this.coin=coin instanceof Coin ? coin : null;
        this.collectionType = collectionType instanceof CollectionType ? collectionType : null;
        this.collectionTypeId = collectionTypeId;
        this.yearProduction = yearProduction;
        this.coinCollectionId = coinCollectionId;
        this.collection=collection instanceof Collection ? collection : null;
        this.summary = summary;
        this.price = price;
        this.registeredAt = date;
    }
}