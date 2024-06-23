<script setup>
import HeaderLogo from "@/components/header/HeaderLogoComponent.vue";
import HeaderNavigation from "@/components/header/HeaderNavigationComponent.vue";
import HeaderAuthComponent from "@/components/header/HeaderAuthComponent.vue";
import HeaderTherapistButtonComponent from "@/components/header/HeaderTherapistButtonComponent.vue";
</script>

<template>
  <div class="header-navigation py-[25px] border border-background">
    <div class="container">
      <div class="header-navigation__inner flex items-center justify-between">
        <HeaderLogo/>
        <HeaderNavigation/>
        <div class="header-navigation__inner--user flex items-center gap-5">
          <HeaderAuthComponent class="cursor-pointer" label="Увійти"/>
          <HeaderTherapistButtonComponent class="cursor-pointer" btn-text="Підібрати психотерапевта" btn-url="/find-therapist" />
        </div>
      </div>
    </div>
  </div>
</template>