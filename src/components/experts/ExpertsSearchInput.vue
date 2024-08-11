<template>
  <div class="mb-4">
    <input
        id="search"
        v-model="searchQuery"
        :placeholder="searchPlaceholder"
        class="mt-1 p-2 w-full border rounded"
        type="text"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";

const searchPlaceholder = ref("Шукати по імені чи прізвищу");
const searchQuery = ref("");
</script>