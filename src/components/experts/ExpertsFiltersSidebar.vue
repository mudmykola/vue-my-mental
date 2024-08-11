<script setup>
import ExpertsLanguageFilters from "@/components/experts/ExpeeertsLanguageFilters.vue";
import ExpertsFormatFilters from "@/components/experts/ExpertsFormatFilters.vue";
import ExpertsSearchInput from "@/components/experts/ExpertsSearchInput.vue";
</script>

<template>
  <div class="p-4 border rounded bg-gray-50">
    <ExpertsSearchInput />
    <ExpertsFormatFilters />
    <ExpertsLanguageFilters />
  </div>
</template>