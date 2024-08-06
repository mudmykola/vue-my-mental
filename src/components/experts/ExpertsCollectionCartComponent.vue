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

<script setup>
import ExpertsCartComponent from "@/components/experts/ExpertsCartComponent.vue";
import ExpertsTestBanner from "@/components/experts/ExpertsTestBanner.vue";
import { onMounted, ref } from "vue";

const expertsBeforeBanner = ref([]);
const expertsAfterBanner = ref([]);

const loadExpertsData = async () => {
	try {
		const responseBefore = await fetch("/data/expertsBeforeBanner.json");
		if (!responseBefore.ok)
			throw new Error(`HTTP error! status: ${responseBefore.status}`);
		expertsBeforeBanner.value = await responseBefore.json();

		const responseAfter = await fetch("/data/expertsAfterBanner.json");
		if (!responseAfter.ok)
			throw new Error(`HTTP error! status: ${responseAfter.status}`);
		expertsAfterBanner.value = await responseAfter.json();
	} catch (error) {
		console.error("Error fetching experts data:", error);
	}
};

onMounted(() => {
	loadExpertsData();
});
</script>