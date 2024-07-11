<script setup>
import SpecialistsFollowerCartComponent from "@/components/specialists/SpecialistsFollowerCartComponent.vue";
import SpecialistsFollowerComponent from "@/components/specialists/SpecialistsFollowerComponent.vue";
import { ref } from "vue";

const title = ref(
	"Наші фахівці проходять відбір відповідно до стандартів Європейської Ассоціаціі Психотерапіі",
);
</script>

<template>
  <div class="specialists">
    <div class="container">
      <div class="specialists-inner">
        <div class="specialists-inner__title mt-32 mb-12">
          <h2 class="text-center text-5xl font-bold">{{ title }}</h2>
        </div>
        <div class="specialists-follower flex justify-center mb-12">
          <SpecialistsFollowerComponent />
        </div>
        <div class="specialists-cart__follower">
          <SpecialistsFollowerCartComponent />
        </div>
      </div>
    </div>
  </div>
</template>