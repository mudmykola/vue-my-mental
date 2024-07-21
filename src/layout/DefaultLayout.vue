<script setup>
import FooterComponent from "@/components/footer/FooterComponent.vue";
import HeaderComponent from "@/components/header/HeaderComponent.vue";
</script>

<template>
  <div class="wrapper">
    <header class="header">
      <HeaderComponent />
    </header>
    <main class="main">
      <slot />
    </main>
    <footer class="footer">
      <FooterComponent />
    </footer>
  </div>
</template>