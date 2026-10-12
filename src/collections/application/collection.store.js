import {computed, ref} from "vue";
import {defineStore} from "pinia";
import {CollectionApi} from "../infraestructure/collection-api.js";
import {CollectionAssembler as collectionAssembler} from "../infraestructure/collection.assembler.js";
import {HistoricalObjectsAssembler as historicalObjectsAssembler} from "../infraestructure/historical-objects.assembler.js";

const collectionApi = new CollectionApi();

const useCollectionStore = defineStore('collection',
    ()=>{
        const collection = ref([]);

        const historicalObjects = ref([]);

        const errors = ref([]);

        const collectionLoaded = ref(false);
        const historicalObjectsLoaded = ref(false);

        function fetchCollection(){
            collectionApi.getCollection().then(response => {
                collection.value = collectionAssembler.toEntitiesFromResponse(response);
                collectionLoaded.value = true;
                console.log(collection.value);
                console.log(collectionLoaded.value);
            }).catch(error => {
                errors.value.push(error);
            });
        }
        function fetchHistoricalObjects(){
            collectionApi.getHistoricalObjects().then(response => {
                historicalObjects.value = historicalObjectsAssembler.toEntitiesFromResponse(response);
                historicalObjectsLoaded.value = true;
                console.log(historicalObjects.value);
                console.log(historicalObjectsLoaded.value);
            }).catch(error => {
                errors.value.push(error);
            })
        }
        function getCollectionsById(id) {
            let idNum = parseInt(id);
            return collection.value.find(category => category["id"] === idNum);
        }

        return {
            collection: collection,
            historicalObjects: historicalObjects,
            errors,
            collectionLoaded: collectionLoaded,
            historicalObjectsLoaded: historicalObjectsLoaded,
            fetchCollection: fetchCollection,
            fetchHistoricalObjects: fetchHistoricalObjects,};
    }

)
export default useCollectionStore;