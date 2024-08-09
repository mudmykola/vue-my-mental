<script setup>
import BaseButton from "@/components/ui/BaseButton.vue";
import { ref } from "vue";

const expertsTestTitle = ref(
	"Пройди тест за кілька хвилин та отримай добірку спеціалістів, які підходять саме тобі",
);
</script>

<template>
  <div class="experts-test bg-[#19453F] text-white text-center rounded-xl py-12">
    <h2 class="mb-8 text-xl font-bold w-[39rem] m-auto"> {{ expertsTestTitle }}</h2>
    <BaseButton href="/" text="Пройти тест" variant="white" />
  </div>
</template>

<style lang="scss" scoped>
.experts-test{
  position: relative;
  &:before{
    position: absolute;
    content: '';
    top: 63%;
    left: 0;
    right: 0;
    background-image: url("/images/tests-element.png");
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
    background-size: contain ;
  }
}
</style>