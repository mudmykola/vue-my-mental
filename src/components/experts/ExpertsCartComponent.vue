<template>
  <div class="specialist-card bg-white p-4 rounded-lg shadow-md">
    <div class="text-center">
      <img
        :src="photoUrl"
        alt="Specialist Photo"
        class="w-40 h-40 rounded-full mx-auto mb-4 object-cover"
      />
      <h3 class="text-xl font-bold">{{ name }}</h3>
      <p class="text-sm text-gray-600">{{ profession }}</p>
    </div>

    <div class="mt-4">
      <div class="flex items-center mb-2">
        <img
          alt="Experience Icon"
          class="w-5 h-5 mr-2"
          src="/public/icon/icon-experts-1.png"
        />
        <p>{{ experience }}</p>
      </div>
      <div class="flex items-center mb-2">
        <img
          alt="Hours Icon"
          class="w-5 h-5 mr-2"
          src="/public/icon/icon-experts-2.png"
        />
        <p>{{ hours }}</p>
      </div>
      <div class="flex items-center mb-2">
        <p class="text-sm text-gray-600">{{ appointment }}</p>
      </div>
      <div class="flex items-center mb-2">
        <div class="flex items-center">
          <span class="text-yellow-500">★★★★☆</span>
          <span class="text-gray-600 ml-2">{{ rating }}</span>
        </div>
      </div>
      <div class="flex items-center mb-2">
        <p class="text-sm text-gray-600">{{ clients }}</p>
      </div>
      <p class="text-sm text-gray-700 mb-4">{{ description }}</p>
      <p class="text-lg font-bold mb-4">{{ cost }}</p>
      <div class="flex gap-2">
        <button class="btn-primary" @click="bookAppointment">Записатися</button>
        <button class="btn-secondary" @click="viewDetails">Детальніше</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
	photoUrl: String,
	name: String,
	profession: String,
	experience: String,
	hours: String,
	appointment: String,
	rating: String,
	clients: String,
	description: String,
	cost: String,
});

const bookAppointment = () => {};

const viewDetails = () => {};
</script>

<style scoped>
.specialist-card {
  border: 1px solid #e5e7eb;
}
.btn-primary {
  background-color: #3b82f6;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;
}
.btn-secondary {
  background-color: #f3f4f6;
  color: #3b82f6;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;
}
</style>