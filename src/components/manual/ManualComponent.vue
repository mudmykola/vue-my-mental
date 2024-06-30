<script setup>
import { ref } from "vue";
import ManualStatisticsComponent from "@/components/manual/ManualStatisticsComponent.vue";
import ManualTextImageLeftComponent from "@/components/manual/ManualTextImageComponent.vue";

const manualTitle = ref('Mymental - це зручно:');
</script>

<template>
  <div class="manual bg-muted h-full relative">
    <div class="container">
      <div class="manual-inner ">
        <div class="manual-statistics container absolute right-0 left-0 bottom-[50%] top-[-9%]">
          <ManualStatisticsComponent/>
        </div>
        <div class="manual-inner__title text-center pt-[154px]">
          <h2 class="text-[48px] font-bold font-sans text-black">{{ manualTitle }}</h2>
        </div>
        <div class="manual-test mt-12">
          <ManualTextImageLeftComponent
              img-alt="left-image"
              img-src="/images/manual-test-image.png"
              text-desc="пройди швидкий тест або обери з каталогу"
              text-title="Обери психотерапевта"
              :reverse="false"
          />
        </div>
      </div>
    </div>
  </div>
</template>