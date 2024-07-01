<script setup>
import { ref } from "vue";

const generateRandomNumber = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

const statisticsData = ref([
	{
		description: "В MyMental зараз",
		value: generateRandomNumber(1000, 3000),
		unit: "фахівців",
	},
	{
		description: "Знайшли своїх ідеальних психологів",
		value: generateRandomNumber(100000, 300000),
		unit: "клієнтів",
	},
	{
		description: "Відбувається прямо зараз",
		value: generateRandomNumber(100, 1000),
		unit: "сеансів",
	},
]);

const formatNumberWithCommas = (number) => {
	return number.toLocaleString("uk-UA");
};
</script>

<template>
  <div class="statistics-container flex justify-center bg-white rounded-[32px] drop-shadow-2xl">
    <ul class="flex items-center p-8 gap-11">
      <li class="text-center gap-2" v-for="stat in statisticsData" :key="stat.unit">
        <p class="text-[16px] leading-4 text-primary font-sans">{{ stat.description }}</p>
        <span class="text-[55px] leading-[55px] font-sans font-bold text-primary">{{ formatNumberWithCommas(stat.value) }}</span>
        <h3 class="text-[18px] leading-5 font-bold font-sans text-primary">{{ stat.unit }}</h3>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.statistics-container{
  li:nth-child(2) {
    position: relative;
  }
  li:nth-child(2):after{
    position: absolute;
    content: '';
    display: block;
    width: 1px;
    height: 80px;
    background-color: #D7E0DC;
    left: -8%;
    top: 13%;
    bottom: 25%;
  }
  li:nth-child(2):before{
    position: absolute;
    content: '';
    display: block;
    width: 1px;
    height: 80px;
    background-color: #D7E0DC;
    right: -8%;
    top: 13%;
    bottom: 25%;
  }
}
</style>