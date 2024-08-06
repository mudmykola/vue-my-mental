<template>
  <div
    class="experts-card border border-background bg-white p-4 shadow-md rounded-lg"
  >
    <div class="text-center">
      <img
        :src="photoUrl"
        alt="Specialist Photo"
        class="w-40 h-40 rounded-full mx-auto mb-4 object-cover"
      />
      <h3 class="text-[1.125rem] font-bold text-left">{{ name }}</h3>
      <div class="experts-profession text-[0.875rem] text-secondary py-2.5">
        <p class="text-sm text-gray-600 text-left">{{ profession }}</p>
        <p class="text-sm text-gray-600 text-left">{{ subProfession }}</p>
      </div>
    </div>

    <div class="experts-experience text-[0.875rem]">
      <div class="flex items-center mb-2">
        <img
          alt="Experience Icon"
          class="w-5 h-5 mr-2"
          src="/icon/icon-experts-1.png"
        />
        <p>
          <span class="font-bold">{{ experience }}</span> досвіду
        </p>
      </div>
      <div class="experts-hours flex items-center text-[0.875rem]">
        <img
          alt="Hours Icon"
          class="w-5 h-5 mr-2"
          src="/icon/icon-experts-2.png"
        />
        <p>
          <span class="font-bold">{{ hours }}</span> + годин практики
        </p>
      </div>
      <div class="experts-appointment flex items-center mt-2 text-[0.875rem]">
        <p class="text-sm text-gray-600">
          {{ appointment }}
          <span class="text-accent underline">{{ appointmentDate }}</span>
        </p>
      </div>
      <div class="flex items-center mt-2">
        <div class="flex items-center">
          <span class="text-yellow-500">★★★★★</span>
          <span class="text-secondary ml-2">{{ rating }}</span>
        </div>
      </div>
      <div class="flex items-center mt-2">
        <p class="text-[0.875rem] text-black">{{ clients }}</p>
      </div>
      <p class="text-[0.938rem] text-secondary mt-3.5">{{ description }}</p>
      <div class="experts-costs flex items-center gap-2 mt-4 mb-3">
        <h2 class="text-[1.25rem] font-bold text-accent">{{ cost }}</h2>
        <p
          class="text-[0.875rem] border border-background py-1 px-2 rounded font-normal"
        >
          {{ time }} хв
        </p>
      </div>

      <div class="flex flex-col gap-2">
        <button
          class="bg-accent rounded-xl py-4 px-2 text-white font-bold text-[1rem]"
          @click="bookAppointment"
        >
          Записатися
        </button>
        <button
          class="bg-background rounded-xl py-4 px-2 text-primary font-bold text-[1rem]"
          @click="viewDetails"
        >
          Детальніше
        </button>
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
	subProfession: String,
	experience: String,
	hours: String,
	appointment: String,
	appointmentDate: String,
	rating: String,
	clients: String,
	description: String,
	cost: String,
	time: String,
});

const bookAppointment = () => {
	console.log(`Open booking form for ${props.name}`);
};

const viewDetails = () => {
	console.log(`Open details modal for ${props.name}`);
};
</script>