<script setup>
import ExpertsBannerComponent from "@/components/experts/ExpertsBannerComponent.vue";
import ExpertsCollectionCartComponent from "@/components/experts/ExpertsCollectionCartComponent.vue";
import ExpertsFiltersSidebar from "@/components/experts/ExpertsFiltersSidebar.vue";
</script>

<template>
  <div class="experts bg-muted">
    <div class="container">
      <div class="experts-inner pb-10 pt-5">
        <ExpertsBannerComponent />
        <div class="experts-inner__box flex justify-between">
          <div class="experts-inner__filter w-[59%]">
            <ExpertsFiltersSidebar />
          </div>
          <div class="experts-inner__collection">
            <ExpertsCollectionCartComponent />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>