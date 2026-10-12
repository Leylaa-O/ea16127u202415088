export class CollectionType {
    constructor({ id = null, name= '', description = '', originCountry='',
                    establishedYear=null, material='',isExhibited=false,
                    curatorName=''}) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.originCountry = originCountry;
        this.establishedYear = establishedYear;
        this.material = material;
        this.establishedYear = establishedYear;
        this.curatorName = curatorName;
    }

}
