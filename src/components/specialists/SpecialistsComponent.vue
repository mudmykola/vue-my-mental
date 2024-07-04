<script setup>
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
        <div class="specialists-inner__title">
          <h2>{{ title }}</h2>
        </div>
        <div class="specialists-follower">
          <SpecialistsFollowerComponent />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>