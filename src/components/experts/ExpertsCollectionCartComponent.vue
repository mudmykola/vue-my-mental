<script setup>
import ExpertsCartComponent from "@/components/experts/ExpertsCartComponent.vue";
import ExpertsTestBanner from "@/components/experts/ExpertsTestBanner.vue";
import { commonProps } from "@/utils/sharedProps.js";
import { computed, defineEmits, onMounted, ref, watch } from "vue";

const props = defineProps(commonProps);

const expertsBeforeBanner = ref([]);
const expertsAfterBanner = ref([]);

const allExperts = computed(() => [
	...expertsBeforeBanner.value,
	...expertsAfterBanner.value,
]);

const currentPage = ref(1);
const itemsPerPage = 12;

const totalPages = computed(() =>
	Math.ceil(allExperts.value.length / itemsPerPage),
);

const paginatedExperts = computed(() => {
	const start = (currentPage.value - 1) * itemsPerPage;
	const end = start + itemsPerPage;
	return allExperts.value.slice(start, end);
});

const countBeforeBanner = ref(0);
const countAfterBanner = ref(0);

const emit = defineEmits(["update-counts"]);

const loadExpertsData = async () => {
	try {
		const responseBefore = await fetch("/data/expertsBeforeBanner.json");
		if (!responseBefore.ok)
			throw new Error(`HTTP error! status: ${responseBefore.status}`);
		const dataBefore = await responseBefore.json();
		expertsBeforeBanner.value = dataBefore;
		countBeforeBanner.value = dataBefore.length;

		const responseAfter = await fetch("/data/expertsAfterBanner.json");
		if (!responseAfter.ok)
			throw new Error(`HTTP error! status: ${responseAfter.status}`);
		const dataAfter = await responseAfter.json();
		expertsAfterBanner.value = dataAfter;
		countAfterBanner.value = dataAfter.length;

		emit("update-counts", {
			countBefore: countBeforeBanner.value,
			countAfter: countAfterBanner.value,
		});
	} catch (error) {
		console.error("Error fetching experts data:", error);
	}
};

watch([countBeforeBanner, countAfterBanner], () => {
	emit("update-counts", {
		countBefore: countBeforeBanner.value,
		countAfter: countAfterBanner.value,
	});
});

onMounted(() => {
	loadExpertsData();
});

const changePage = (page) => {
	currentPage.value = page;
};
</script>

<template>
  <div class="experts-list">
    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-2">
      <ExpertsCartComponent
          v-for="specialist in expertsBeforeBanner"
          :key="specialist.id"
          :appointment="String(specialist.appointment || '')"
          :appointment-date="String(specialist.appointmentDate || '')"
          :clients="String(specialist.clients || '')"
          :cost="String(specialist.cost || '')"
          :description="String(specialist.description || '')"
          :experience="String(specialist.experience || '')"
          :hours="String(specialist.hours || '')"
          :name="String(specialist.name || '')"
          :photoUrl="String(specialist.photoUrl || '')"
          :profession="String(specialist.profession || '')"
          :rating="String(specialist.rating || '')"
          :sub-profession="String(specialist.subProfession || '')"
          :time="String(specialist.time || '')"
      />
    </div>
    <div class="experts-test__banner my-8">
      <ExpertsTestBanner />
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-2">
      <ExpertsCartComponent
          v-for="specialist in expertsAfterBanner"
          :key="specialist.id"
          :appointment="String(specialist.appointment || '')"
          :appointment-date="String(specialist.appointmentDate || '')"
          :clients="String(specialist.clients || '')"
          :cost="String(specialist.cost || '')"
          :description="String(specialist.description || '')"
          :experience="String(specialist.experience || '')"
          :hours="String(specialist.hours || '')"
          :name="String(specialist.name || '')"
          :photoUrl="String(specialist.photoUrl || '')"
          :profession="String(specialist.profession || '')"
          :rating="String(specialist.rating || '')"
          :sub-profession="String(specialist.subProfession || '')"
          :time="String(specialist.time || '')"
      />
    </div>

    <div class="pagination mt-6 flex justify-center">
      <button
          v-for="page in totalPages"
          :key="page"
          :class="['px-4 py-2 mx-1 border cursor-pointer rounded',
                    currentPage === page ? 'bg-blue-500 text-white' : 'bg-primary text-white hover:bg-ca6c46']"
          @click="changePage(page)"
      >
        {{ page }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.pagination button {
  cursor: pointer;
}

.bg-primary {
  background-color: #CA6C46;
}

.pagination button.bg-blue-500 {
  background-color: #19453F;
  color: white;
}

.pagination button.bg-primary:hover {
  background-color: #b85b3b;
}
</style>