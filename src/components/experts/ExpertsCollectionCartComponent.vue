<template>
  <div class="experts-list">
    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
      <ExpertsCartComponent
          v-for="specialist in specialists"
          :key="specialist.id"
          :appointment="specialist.appointment"
          :clients="specialist.clients"
          :cost="specialist.cost"
          :description="specialist.description"
          :experience="specialist.experience"
          :hours="specialist.hours"
          :name="specialist.name"
          :photoUrl="specialist.photoUrl"
          :profession="specialist.profession"
          :rating="specialist.rating"
      />
    </div>
    <div class="pagination mt-6 flex justify-center">

    </div>
  </div>
</template>

<script setup>
import ExpertsCartComponent from "@/components/experts/ExpertsCartComponent.vue";
import { ref } from "vue";

const specialists = ref([
	{
		id: 1,
		photoUrl: "/images/experts-avatar-1.png",
		name: "Іван Петренко",
		profession: "Психолог",
		experience: "3 роки досвіду",
		hours: "1 000 + годин практики",
		appointment: "Запис з 16 березня, 07:00",
		rating: "4.5 відгука",
		clients: "15 клієнтів - 22 сеанси",
		description:
			"Запрошую на зустріч всіх хто заплутався та в кого опускаються руки...",
		cost: "1 000$ 60 хв",
	},
	{
		id: 2,
		photoUrl: "/images/experts-avatar-1.png",
		name: "Іван Петренко",
		profession: "Психолог",
		experience: "3 роки досвіду",
		hours: "1 000 + годин практики",
		appointment: "Запис з 16 березня, 07:00",
		rating: "4.5 відгука",
		clients: "15 клієнтів - 22 сеанси",
		description:
			"Запрошую на зустріч всіх хто заплутався та в кого опускаються руки...",
		cost: "1 000$ 60 хв",
	},
	{
		id: 3,
		photoUrl: "/images/experts-avatar-1.png",
		name: "Іван Петренко",
		profession: "Психолог",
		experience: "3 роки досвіду",
		hours: "1 000 + годин практики",
		appointment: "Запис з 16 березня, 07:00",
		rating: "4.5 відгука",
		clients: "15 клієнтів - 22 сеанси",
		description:
			"Запрошую на зустріч всіх хто заплутався та в кого опускаються руки...",
		cost: "1 000$ 60 хв",
	},
]);
</script>

<style scoped>
.experts-list {
  padding: 1rem;
}

</style>