<script setup>
import {useI18n} from "vue-i18n";
import {useRoute} from "vue-router";
import useCollectionStore from "../../application/collection.store.js";
import {onMounted, toRefs} from "vue";
import {Button as PvButton, Column as PvColumn, DataTable as PvDataTable} from "primevue";

const {t} = useI18n();
const route = useRoute();

const store = useCollectionStore();

const {collections, collectionsLoaded, errors} = toRefs(store);
const {fetchCollections} = store;
onMounted(()=>{
      if (!store.collectionLoaded) {
        fetchCollections();
        collectionsLoaded.value  = store.collectionLoaded;
      }
    }
);

</script>

<template>
  <div>
    <h1> {{t('collections.title')}}</h1>

    <pv-data-table :value="collections"
                   :loading="!collectionsLoaded"
                   table-style="min-width: 50rem"
                   paginator
                   :rows="5"
                   :rowsPerPageOptions="[5,10,25]"
                   striped-rows>
      <pv-column field="id" :header="t('collections.id')"  sortable/>
      <pv-column field="title" :header="t('collections.title')" sortable/>
      <pv-column field="summary" :header="t('collections.summary')" sortable/>
      <pv-column field="categoryId" :header="t('collections.category-id')" sortable/>
      <pv-column :header="t('collections.actions')">
      </pv-column>
    </pv-data-table>
    <div v-if="errors" class="p-error">
      {{t('errors.ocurred')}}:
      {{ errors.map(e=>message(e)).join(', ') }}
    </div>
  </div>
</template>

<style scoped>

</style>