<script setup>
import IconArrowToTop from "@/components/icons/IconArrowToTop.vue";
import { onMounted, onUnmounted, ref } from "vue";

const isVisible = ref(false);

const handleScroll = () => {
	isVisible.value = window.scrollY > 300;
};

const scrollToTop = () => {
	window.scrollTo({
		top: 0,
		behavior: "smooth",
	});
};

onMounted(() => {
	window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
	window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <button v-if="isVisible" class="scroll-to__top--btn bg-muted rounded-xl p-2.5 border" @click="scrollToTop">
<IconArrowToTop/>
  </button>
</template>



<style scoped>
.scroll-to__top--btn {
  position: fixed;
  bottom: 20px;
  right: 20px;
  transition: all .3s ease-in-out;
  cursor: pointer;

}

.scroll-to__top--btn:hover {
  border: 1px solid #0E352F;
  transition: all .5s ease-in-out;
}
</style>