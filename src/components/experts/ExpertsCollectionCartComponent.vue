<script setup>
import ExpertsCartComponent from "@/components/experts/ExpertsCartComponent.vue";
import ExpertsTestBanner from "@/components/experts/ExpertsTestBanner.vue";
import { commonProps } from "@/utils/sharedProps.js";
import { defineEmits, onMounted, ref, watch } from "vue";

const props = defineProps(commonProps);

const expertsBeforeBanner = ref([]);
const expertsAfterBanner = ref([]);

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

    <div class="pagination mt-6 flex justify-center"></div>
  </div>
</template>