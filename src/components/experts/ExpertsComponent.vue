<script setup>
import ExpertsBannerComponent from "@/components/experts/ExpertsBannerComponent.vue";
import ExpertsCollectionCartComponent from "@/components/experts/ExpertsCollectionCartComponent.vue";
import ExpertsFiltersSidebar from "@/components/experts/ExpertsFiltersSidebar.vue";
import { ref } from "vue";

const countBeforeBanner = ref(0);
const countAfterBanner = ref(0);

const updateCounts = ({ countBefore, countAfter }) => {
	countBeforeBanner.value = countBefore;
	countAfterBanner.value = countAfter;
};
</script>

<template>
  <div class="experts bg-muted">
    <div class="container">
      <div class="experts-inner pb-10 pt-5">
        <ExpertsBannerComponent
            :countAfterBanner="countAfterBanner"
            :countBeforeBanner="countBeforeBanner"
        />
        <div class="experts-inner__box flex justify-between">
          <div class="experts-inner__filter w-[59%]">
            <ExpertsFiltersSidebar />
          </div>
          <div class="experts-inner__collection">
            <ExpertsCollectionCartComponent @update-counts="updateCounts" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>