<script setup>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";

const store = useStore();

onMounted(() => {
	store.dispatch("fetchFollowers");
});

const initialFollowers = computed(() => store.getters.initialFollowers);
const remainingFollowerCount = computed(
	() => store.getters.remainingFollowerCount,
);
const showAllFollowers = computed(() => store.getters.showAllFollowers);
const allFollowers = computed(() => store.getters.allFollowers);

const toggleShowAllFollowers = () => {
	store.commit("TOGGLE_SHOW_ALL_FOLLOWERS");
};
</script>

<template>
  <div>
    <div class="flex gap-2.5">
      <div
        v-for="(follower, index) in initialFollowers"
        :key="follower.login.uuid"
        :style="{ marginLeft: index > 0 ? '-18px' : '0' }"
        class="w-[180px] h-[180px] rounded-full overflow-hidden border-4 border-white"
      >
        <img
          :alt="follower.login.username"
          :src="follower.picture.large"
          class="w-full h-full object-cover"
          height="180"
          loading="lazy"
          width="180"
        />
      </div>
      <div
        v-if="remainingFollowerCount > 0"
        :style="{ marginLeft: initialFollowers.length > 0 ? '-18px' : '0' }"
        class="w-[180px] h-[180px] text-2xl text-primary font-bold rounded-full bg-secondaryWhite flex items-center justify-center cursor-pointer border-4 border-white"
        @click="toggleShowAllFollowers"
      >
        +{{ remainingFollowerCount }}
      </div>
    </div>
    <div
      v-if="showAllFollowers"
      class="flex flex-wrap gap-2.5 mt-5 justify-center"
    >
      <div
        v-for="(follower, index) in allFollowers"
        :key="follower.login.uuid"
        class="w-[180px] h-[180px] rounded-full overflow-hidden"
      >
        <img
          :alt="follower.login.username"
          :src="follower.picture.large"
          class="w-full h-full object-cover"
        />
      </div>
    </div>
  </div>
</template>