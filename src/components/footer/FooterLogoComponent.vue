<script setup>
import IconLogo from "@/components/icons/IconLogo.vue";
import IconTelegram from "@/components/icons/iconTelegram.vue";
import BaseButton from "@/components/ui/BaseButton.vue";
import { ref } from "vue";

const mailTitle = ref("Психотерапія та ментальне здоров’я");
const supportEmail = ref("Support@mymental.com.ua");
const socialTelegram = ref("Telegram");
</script>

<template>
  <div class="footer-logo">
    <div class="footer-logo__image">
      <router-link to="/">
        <IconLogo />
      </router-link>
    </div>
    <div class="footer-logo__mail ">
      <h2 class="text-[14px] text-secondary font-sans mt-6 mb-6 w-[137px]">
        {{ mailTitle }}
      </h2>
      <a
        :href="'mailto:' + supportEmail"
        class="text-[14px] text-primary transition-colors duration-300 ease-in-out hover:text-accent hover:underline"
      >
        {{ supportEmail }}
      </a>
    </div>
    <base-button class="footer-logo__social mt-4" size="sm" text="Telegram" type="bottom" variant="white">
      <a :href="'/telegram'" class="flex items-center">
        <IconTelegram />
        <p class="ml-1 text-[14px] text-blue">{{ socialTelegram }}</p>
      </a>
    </base-button>
  </div>
</template>