<script setup>
import "vue3-carousel/dist/carousel.css";
import { ref } from "vue";
import { Carousel, Pagination, Slide } from "vue3-carousel";

const testimonials = ref([
	{
		avatar: "/images/avatar1.png",
		name: "Ілля",
		date: "1 днів назад",
		rating: 5,
		content:
			"Поки що було 3 сесіїї з Галиною.\n" +
			"Мені справді подобається.\n" +
			"По-перше, це класна намога екологічно виплеснути все те, що на серці та у думках. По-друге, важливо і цінно отримати підтримку. Після сесій я почуття полегшення. Дякую чудовому психологу!",
	},
	{
		avatar: "/images/avatar2.png",
		name: "Людмила",
		date: "1 днів назад",
		rating: 5,
		content:
			"Мені дуже подобається працювати\n" +
			"з Надією. Вона допомагає мені краще зрозуміти себе і процеси, через які я проходжу. Я починаю більше замислюватися про свої патерни поведінки, на які не звертала уваги. Надія чуйна, уважна та спеціаліст своє справи! Рада продовжити цей шлях :)",
	},
	{
		avatar: "/images/avatar3.png",
		name: "Anastasia",
		date: "1 днів назад",
		rating: 5,
		content:
			"Перша сесія з Надією була дуже приємною та корисною! Вона створює затишну атмосферу й допомогає відчуватися комфортно під час обговорення важливих тем. Вдячна за розуміння та підтримку!",
	},
]);
</script>

<template>
  <carousel  :itemsToShow="2.95" :transition="500" :wrapAround="true">
    <slide
      v-for="(testimonial, index) in testimonials"
      :key="index"
    >
      <div
        class="testimonial-slide flex flex-col text-left py-5 px-5 bg-white shadow-2xl rounded-2xl gap-4 cursor-pointer"
      >
        <div
          class="testimonial-slide__top flex items-center w-full justify-between"
        >
          <div class="testimonial-slide__top--avatar flex">
            <div class="testimonial-avatar">
              <img :alt="testimonial.name" :src="testimonial.avatar" class="w-[60px] h-[60px] rounded-[50%] object-cover mr-[20px]" />
            </div>
            <div class="testimonial-slide__top--avatar__date">
              <h3 class="text-[16px] font-bold">{{ testimonial.name }}</h3>
              <p class="testimonial-date text-[14px] text-[#5E6D55]">
                {{ testimonial.date }}
              </p>
            </div>
          </div>
          <div class="testimonial-slide__top--rating">
            <div class="testimonial-rating mb-2.5">
              <span
                v-for="star in testimonial.rating"
                :key="star"
                class="star-icon text-amber-400 text-[18px]"
                >★</span
              >
            </div>
          </div>
        </div>
        <div class="testimonial-info mt-5 flex-1">
          <p class="testimonial-content text-[16px] leading-6 text-wrap">
            {{ testimonial.content }}
          </p>
        </div>
      </div>
    </slide>
    <template v-slot:addons>
      <pagination />
    </template>
  </carousel>
</template>

<style scoped>
.carousel__slide {
  padding: 5px;
}

.carousel__viewport {
  perspective: 1000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.9;
  transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active ~ .carousel__slide {
  transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
  opacity: 1;
  transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide--next {
  opacity: 1;
  transform: rotateY(10deg) scale(0.95);
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1.1);
}
</style>