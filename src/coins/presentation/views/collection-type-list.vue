<script setup>
import {useI18n} from "vue-i18n";
import {useRouter} from "vue-router";
import {useConfirm} from "primevue";
import usePublishingStore from "../../application/coins.store.js";
import {onMounted, toRefs} from "vue";

const {t} = useI18n();
const router = useRouter();
const confirm = useConfirm();
const store = usePublishingStore();
const {collectionType, errors, collectionTypeLoaded } = toRefs(store);
const { fetchCollectionType} = store;

onMounted(() => {
  if (!store.collectionTypeLoaded) {
    fetchCollectionType()
    collectionTypeLoaded.value = store.collectionTypeLoaded;
  }
});

</script>

<template>

</template>

<style scoped>

</style>