<script setup>
import BaseButton from "@/components/ui/BaseButton.vue";
import { computed, ref } from "vue";

const searchPlaceholder = ref("Шукати по імені чи прізвищу");
const formatFiltersTitle = ref("Формат консультації");
const languageFiltersTitle = ref("Мова консультації");
const onlineLabel = ref("Онлайн");
const offlineLabel = ref("Офлайн");
const cityLabel = ref("Оберіть місто");
const allCitiesOption = ref("Всі міста");
const bothFitLabel = ref("Обидва підходять");
const clearButtonLabel = ref("Очистити");
const applyButtonLabel = ref("Застосувати");

const cities = ref(["Київ", "Львів", "Одеса"]);

const searchQuery = ref("");
const consultationFormat = ref("online");
const selectedCity = ref("");
const bothFit = ref(false);
const formatFiltersOpen = ref(false);
const languageFiltersOpen = ref(false);
const language = ref("ukrainian");
const tagsFilter = ref([]);

const experts = ref([]);
const filteredExperts = computed(() => {
	return experts.value.filter((expert) => {
		const matchesSearch = expert.name
			.toLowerCase()
			.includes(searchQuery.value.toLowerCase());
		const matchesFormat =
			consultationFormat.value === "both" ||
			expert.consultationFormat === consultationFormat.value;
		const matchesCity =
			selectedCity.value === "" || expert.city === selectedCity.value;
		const matchesTags = tagsFilter.value.every((tag) =>
			expert.tags.includes(tag),
		);
		return matchesSearch && matchesFormat && matchesCity && matchesTags;
	});
});

const toggleFormatFilters = () => {
	formatFiltersOpen.value = !formatFiltersOpen.value;
};

const toggleLanguageFilters = () => {
	languageFiltersOpen.value = !languageFiltersOpen.value;
};

const clearFormatFilters = () => {
	consultationFormat.value = "online";
	selectedCity.value = "";
	bothFit.value = false;
};

const clearLanguageFilters = () => {
	language.value = "ukrainian";
};

const applyFilters = () => {
	console.log("Пошуковий запит:", searchQuery.value);
	console.log("Формат консультації:", consultationFormat.value);
	console.log("Вибране місто:", selectedCity.value);
	console.log("Обидва підходять:", bothFit.value);
	console.log("Мова консультації:", language.value);
	console.log("Фільтри тегів:", tagsFilter.value);
};
</script>

<template>
  <div class="p-4 border rounded bg-gray-50">
    <div class="mb-4">
      <input
          id="search"
          v-model="searchQuery"
          :placeholder="searchPlaceholder"
          class="mt-1 p-2 w-full border rounded"
          type="text"
      />
    </div>
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
      <div class="flex gap-3 ">
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