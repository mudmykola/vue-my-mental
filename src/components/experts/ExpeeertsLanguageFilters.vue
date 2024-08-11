<template>
  <div>
    <h2
        class="text-[1rem] py-3.5 px-2 px- bg-white rounded mb-4 cursor-pointer flex justify-between items-center"
        @click="toggleLanguageFilters"
    >
      {{ languageFiltersTitle }}
      <span class="text-sm text-gray-500">{{ languageFiltersOpen ? "▲" : "▼" }}</span>
    </h2>
    <div v-if="languageFiltersOpen">
      <div class="mb-4 text-[1rem] py-3.5 px-2 px- bg-white rounded">
        <div class="mt-2 space-y-2">
          <div class="flex items-center">
            <input
                id="ukrainian"
                v-model="language"
                class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                name="language"
                type="radio"
                value="ukrainian"
            />
            <label class="ml-3 block text-sm text-gray-700" for="ukrainian">
              Українська
            </label>
          </div>
          <div class="flex items-center">
            <input
                id="english"
                v-model="language"
                class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                name="language"
                type="radio"
                value="english"
            />
            <label class="ml-3 block text-sm text-gray-700" for="english">
              Англійська
            </label>
          </div>
        </div>
      </div>
      <div class="flex gap-3">
        <BaseButton
            :text="clearButtonLabel"
            variant="secondary"
            @click="clearLanguageFilters"
        />
        <BaseButton
            :text="applyButtonLabel"
            variant="primary"
            @click="applyFilters"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import BaseButton from "@/components/ui/BaseButton.vue";
import { ref } from "vue";

const languageFiltersTitle = ref("Мова консультації");
const clearButtonLabel = ref("Очистити");
const applyButtonLabel = ref("Застосувати");

const language = ref("ukrainian");
const languageFiltersOpen = ref(false);

const toggleLanguageFilters = () => {
	languageFiltersOpen.value = !languageFiltersOpen.value;
};

const clearLanguageFilters = () => {
	language.value = "ukrainian";
};

const applyFilters = () => {
	console.log("Мова консультації:", language.value);
};
</script>