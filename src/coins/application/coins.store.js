import {computed, ref} from "vue";
import {PublishingApi} from "../infraestructure/coins-api.js";
import {CoinAssembler} from "../infraestructure/coin.assembler.js";
import {TutorialAssembler} from "../infrastructure/tutorial.assembler.js";
import {defineStore} from "pinia";
import {CollectionTypeAssembler} from "../infraestructure/collection-type.assembler.js";

const publishingApi = new PublishingApi();

const useCoinStore = defineStore('coin',
    ()=>{
        const collectionType = ref([]);

        const coins = ref([]);

        const errors = ref([]);

        const collectionTypeLoaded = ref(false);
        const coinsLoaded = ref(false);

        function fetchCollectionType(){
            publishingApi.getCollectionType().then(response => {
                collectionType.value = CollectionTypeAssembler.toEntitiesFromResponse(response);
                collectionTypeLoaded.value = true;
                console.log(collectionType.value);
                console.log(collectionTypeLoaded.value);
            }).catch(error => {
                errors.value.push(error);
            });
        }
        function fetchCoins(){
            publishingApi.getCoins().then(response => {
                coins.value = TutorialAssembler.toEntitiesFromResponse(response);
                coinsLoaded.value = true;
                console.log(coins.value);
                console.log(coinsLoaded.value);
            }).catch(error => {
                errors.value.push(error);
            })
        }
        return {
            collectionType: collectionType,
            coins: coins,
            errors,
            collectionTypeLoaded: collectionTypeLoaded,
            coinsLoaded: coinsLoaded,
            fetchCollectionType: fetchCollectionType,
            fetchCoins: fetchCoins,};
    }
)
export default useCoinStore;