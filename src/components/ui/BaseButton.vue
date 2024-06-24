<template>
  <component
      :is="href ? 'a' : 'button'"
      :class="computedClass"
      :href="href"
      :type="href ? undefined : type"
      v-bind="attrs"
      @click="$emit('click', $event)"
  >
    <slot>{{ text }}</slot>
  </component>
</template>

<script setup>
import { computed } from 'vue';
import { useAttrs } from 'vue';

const props = defineProps({
  text: {
    type: String,
    required: true,
    default: 'Кнопка'
  },
  type: {
    type: String,
    default: 'button'
  },
  href: {
    type: String,
    default: ''
  },
  variant: {
    type: String,
    default: 'primary'
  },
  size: {
    type: String,
    default: 'md'
  }
});

const attrs = useAttrs();

const computedClass = computed(() => {
  return [
    'base-button',
    `base-button--${props.variant}`,
    `base-button--${props.size}`
  ].join(' ');
});
</script>

<style scoped>
.base-button {
  @apply inline-block py-2 px-4 rounded-md transition-all duration-300;
}

.base-button--primary {
  @apply bg-primary rounded-[12px] p-[18px] text-white font-sans font-bold text-[14px] hover:bg-[#0E352F];
}

.base-button--secondary {
  @apply bg-transparent font-sans rounded-[12px] p-[18px] font-bold text-primary border border-primary hover:bg-primary hover:text-white;
}

.base-button--sm {
  @apply text-sm;
}

.base-button--md {
  @apply text-base;
}

.base-button--lg {
  @apply text-lg;
}
</style>