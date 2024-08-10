<script setup>
import Breadcrumbs from "@/components/common/Breadcrumbs.vue";
import { commonProps } from "@/utils/sharedProps.js";
import { computed, ref } from "vue";

const props = defineProps(commonProps);

const totalExpertsCount = computed(
	() => props.countBeforeBanner + props.countAfterBanner,
);

const expertsBannerTitle = ref("Наші фахівці");
const expertsFilterResult = ref("По вашому запиту знайдено психологів:");
</script>

<template>
  <div class="experts-banner bg-white rounded-[32px] mb-8">
    <div class="experts-banner__inner py-9 text-center">
      <div class="experts-breadcrumb flex justify-center mx-auto mb-3">
        <Breadcrumbs />
      </div>
      <h2 class="text-[50px] leading-[50px] font-bold text-text mb-3">
        {{ expertsBannerTitle }}
      </h2>
      <p class="text-[14px] text-text">
        {{ expertsFilterResult }}
        <span class="experts-cart__count text-accent text-[14px] font-bold">{{ totalExpertsCount }}</span>
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.experts-banner {
  position: relative;
  &::after{
    position: absolute;
    content: '';
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-image: url("/images/tests-element-2.png");
    background-repeat: no-repeat;
    -webkit-background-size: contain;
    background-size: contain;
  }
}
</style>