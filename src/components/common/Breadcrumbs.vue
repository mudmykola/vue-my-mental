<script setup>
import IconNext from "@/components/icons/IconNext.vue";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const breadcrumbs = ref([]);

const generateBreadcrumbs = () => {
	const paths = route.path.split("/").filter((p) => p);
	const breadcrumbList = paths.map((path, index) => {
		return {
			name: route.meta.breadcrumbs[index] || path,
			link: `/${paths.slice(0, index + 1).join("/")}`,
		};
	});

	breadcrumbs.value = [{ name: "Головна", link: "/" }, ...breadcrumbList];
};

onMounted(() => {
	generateBreadcrumbs();
});
</script>
<template>
  <nav aria-label="breadcrumb">
    <ol class="flex list-none p-0">
      <li v-for="(breadcrumb, index) in breadcrumbs" :key="index" class="flex items-center">
        <router-link
          :to="breadcrumb.link"
          class="text-secondary text-[12px]  hover:underline "
        >
          {{ breadcrumb.name }}
        </router-link>
        <span v-if="index < breadcrumbs.length - 1" class="mx-2 h-fil">
          <IconNext/>
        </span>
      </li>
    </ol>
  </nav>
</template>