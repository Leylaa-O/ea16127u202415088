<script setup>
import {useI18n} from "vue-i18n";
import {useRoute, useRouter} from "vue-router";
import {computed, onMounted, ref} from "vue";
import useCollectionStore from "../../application/collection.store.js";

const {t} = useI18n();
const route = useRoute();
const router = useRouter();
const store = useCollectionStore();
const {errors, collections, fetchCollection} = store;

const form = ref({title: '', summary: '', categoryId: null});
const isEdit = computed(() => !!route.params.id);

onMounted(() => {
  if (!collections.length) fetchCollection();
  if (isEdit.value) {
    const historicalObject = getHistoricalObjectById(route.params.id);
    if (historicalObject) {
      form.value.title = historicalObject.title;
      form.value.summary = historicalObject.summary;
      form.value.categoryId = historicalObject.categoryId;
    } else router.push({name: 'publishing-historicalObjects'});
  }
});

const saveHistoricalObject = () => {
  /**
   * Saves the historicalObject.
   * If editing an existing historicalObject, updates it; otherwise, adds a new historicalObject.
   */
  const historicalObject = new historicalObject({
    id: isEdit.value ? route.params.id : null,
    title: form.value.title,
    summary: form.value.summary,
    categoryId: form.value.categoryId,
  });
  if (isEdit.value) updatehistoricalObject(historicalObject); else addhistoricalObject(historicalObject);
  navigateBack();
};

/**
 * Navigates back to the historicalObjects list.
 */
const navigateBack = () => {
  router.push({name: 'publishing-historicalObjects'});
};
</script>

<template>
  <div class="p-4">
    <h1>{{ isEdit ? t('historicalObject.edit-title') : t('historicalObject.new-title') }}</h1>
    <form @submit.prevent="savehistoricalObject">
      <div class="field mb-3">
        <label for="title">{{ t('historicalObject.title') }}</label>
        <pv-input-text id="title" v-model="form.title" required class="w-full" />
      </div>
      <div class="field mb-3">
        <label for="summary">{{ t('historicalObject.summary') }}</label>
        <pv-textarea id="summary" v-model="form.summary" rows="4" class="w-full" />
      </div>
      <div class="field mb-3">
        <label for="category">{{ t('historicalObject.category') }}</label>
        <pv-select
            id="category"
            v-model="form.categoryId"
            :options="collections"
            optionLabel="name"
            optionValue="id"
            placeholder="Select a category"
            class="w-full"
        />
      </div>
      <pv-button type="submit" :label="t('historicalObject.save')" icon="pi pi-save" />
      <pv-button :label="t('historicalObject.cancel')" severity="secondary" class="ml-2" @click="navigateBack" />
    </form>
    <div v-if="errors.length" class="text-red-500 mt-3">
      {{ t('errors.occurred') }}: {{ errors.map(e => e.message).join(', ') }}
    </div>
  </div>
</template>

<style scoped>

</style>