<template>
  <div>
    <h2
        class="text-[1rem] py-3.5 px-2 px- bg-white rounded mb-4 cursor-pointer flex justify-between items-center"
        @click="toggleFormatFilters"
    >
      {{ formatFiltersTitle }}
      <span class="text-sm text-gray-500">{{ formatFiltersOpen ? "▲" : "▼" }}</span>
    </h2>
    <div v-if="formatFiltersOpen">
      <div class="mb-4 bg-white">
        <div class="mt-2 space-y-2">
          <div class="flex items-center">
            <input
                id="online"
                v-model="consultationFormat"
                class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                name="consultationFormat"
                type="radio"
                value="online"
            />
            <label class="ml-3 block text-sm text-gray-700" for="online">
              {{ onlineLabel }}
            </label>
          </div>
          <div class="flex items-center">
            <input
                id="offline"
                v-model="consultationFormat"
                class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                name="consultationFormat"
                type="radio"
                value="offline"
            />
            <label class="ml-3 block text-sm text-gray-700" for="offline">
              {{ offlineLabel }}
            </label>
          </div>
        </div>
      </div>
      <div class="mb-4 text-[1rem] py-3.5 px-2 px- bg-white rounded">
        <label class="block text-sm font-medium text-gray-700" for="city">
          {{ cityLabel }}
        </label>
        <select
            id="city"
            v-model="selectedCity"
            class="mt-1 p-2 w-full border rounded text-[1rem] py-3.5 px-2 px- bg-white rounded"
        >
          <option value="">{{ allCitiesOption }}</option>
          <option v-for="city in cities" :key="city" :value="city">
            {{ city }}
          </option>
        </select>
      </div>
      <div class="mb-4 text-[1rem] py-3.5 px-2 px- bg-white rounded">
        <div class="flex items-center">
          <input
              id="both"
              v-model="bothFit"
              class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
              type="checkbox"
          />
          <label class="ml-2 block text-sm text-gray-700" for="both">
            {{ bothFitLabel }}
          </label>
        </div>
      </div>
      <div class="flex gap-3">
        <BaseButton
            :text="clearButtonLabel"
            variant="secondary"
            @click="clearFormatFilters"
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

const formatFiltersTitle = ref("Формат консультації");
const onlineLabel = ref("Онлайн");
const offlineLabel = ref("Офлайн");
const cityLabel = ref("Оберіть місто");
const allCitiesOption = ref("Всі міста");
const bothFitLabel = ref("Обидва підходять");
const clearButtonLabel = ref("Очистити");
const applyButtonLabel = ref("Застосувати");

const cities = ref(["Київ", "Львів", "Одеса"]);

const consultationFormat = ref("online");
const selectedCity = ref("");
const bothFit = ref(false);
const formatFiltersOpen = ref(false);

const toggleFormatFilters = () => {
	formatFiltersOpen.value = !formatFiltersOpen.value;
};

const clearFormatFilters = () => {
	consultationFormat.value = "online";
	selectedCity.value = "";
	bothFit.value = false;
};

const applyFilters = () => {
	console.log("Формат консультації:", consultationFormat.value);
	console.log("Вибране місто:", selectedCity.value);
	console.log("Обидва підходять:", bothFit.value);
};
</script>