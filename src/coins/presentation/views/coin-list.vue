<script setup>
import {useI18n} from "vue-i18n";
import {useRoute} from "vue-router";
import useCoinStore from "../../application/coins.store.js";
import {onMounted, toRefs} from "vue";
import {Button as PvButton, Column as PvColumn, DataTable as PvDataTable} from "primevue";

const {t} = useI18n();
const route = useRoute();

const store = useCoinStore();

const {coins, coinsLoaded, errors} = toRefs(store);
const {fetchCoins} = store;
onMounted(()=>{
      if (!store.coinsLoaded) {
        fetchCoins();
        coinsLoaded.value  = store.coinsLoaded;
      }
    }
);

</script>

<template>
  <div>
    <h1> {{t('coins.title')}}</h1>

    <pv-data-table :value="coins"
                   :loading="!coinsLoaded"
                   table-style="min-width: 50rem"
                   paginator
                   :rows="5"
                   :rowsPerPageOptions="[5,10,25]"
                   striped-rows>
      <pv-column field="id" :header="t('coins.id')"  sortable/>
      <pv-column field="title" :header="t('coins.title')" sortable/>
    </pv-data-table>
    <div v-if="errors" class="p-error">
      {{t('errors.ocurred')}}:
      {{ errors.map(e=>message(e)).join(', ') }}
    </div>
  </div>
</template>

<style scoped>

</style>