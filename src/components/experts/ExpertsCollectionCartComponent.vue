<template>
  <div class="experts-list">
    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-2">
      <ExpertsCartComponent
        v-for="specialist in experts"
        :key="specialist.id"
        :appointment="specialist.appointment"
        :appointment-date="specialist.appointmentDate"
        :clients="specialist.clients"
        :cost="specialist.cost"
        :description="specialist.description"
        :experience="specialist.experience"
        :hours="specialist.hours"
        :name="specialist.name"
        :photoUrl="specialist.photoUrl"
        :profession="specialist.profession"
        :rating="specialist.rating"
        :sub-profession="specialist.subProfession"
        :time="specialist.time"
      />
    </div>
    <div class="pagination mt-6 flex justify-center"></div>
  </div>
</template>

<script setup>
import ExpertsCartComponent from "@/components/experts/ExpertsCartComponent.vue";
import { ref } from "vue";

const experts = ref([
	{
		id: 1,
		photoUrl: "/images/experts-avatar-1.png",
		name: "Іван Петренко",
		profession: "Психолог",
		subProfession: "Психолог-консультант",
		experience: "3 роки",
		hours: "1 000",
		appointment: "Запис ",
		appointmentDate: "з 16 березня, 07:00",
		rating: "2 відгука",
		clients: "15 клієнтів - 22 сеанси",
		description:
			"Запрошую на зустріч всіх хто заплутався та в кого опускаються руки...",
		cost: "1 000$",
		time: "60",
	},
	{
		id: 2,
		photoUrl: "/images/experts-avatar-2.png",
		name: "Ольга Скиба",
		profession: "Психотерапевт",
		subProfession: "Психолог-консультант",
		experience: "10 років",
		hours: "6 000",
		appointment: "Запис ",
		appointmentDate: "з 16 березня, 07:00",
		rating: "2 відгука",
		clients: "15 клієнтів - 22 сеанси",
		description:
			"Я допоможу тобі зібрати себе в купу і почати вдихати життя на повні груди, не боячись нічого. Разом...",
		cost: "3 000$",
		time: "60",
	},
	{
		id: 3,
		photoUrl: "/images/experts-avatar-3.png",
		name: "Анна Садова",
		profession: "Психолог",
		subProfession: "Психолог-консультант",
		experience: "8 років",
		hours: "4 000",
		appointment: "Запис ",
		appointmentDate: "з 16 березня, 07:00",
		rating: "2 відгука",
		clients: "15 клієнтів - 22 сеанси",
		description:
			"Знання та людяність – ключ до вирішення будь-яких задач та негараздів. Психолог – це лише...",
		cost: "800$",
		time: "60",
	},
]);
</script>