<template>
  <Transition name="mobile-menu">
    <div v-if="mobileMenu.state" class="fixed inset-0 z-50 bg-black/80"></div>
  </Transition>
  <Transition name="drawer">
    <div v-if="mobileMenu.state" class="absolute inset-0 z-[51] bg-white">
      <slot />
    </div>
  </Transition>
</template>

<script lang="ts" setup>
import { useMobileMenu } from "~~/stores/mobile-menu";

const mobileMenu = useMobileMenu();
</script>

<style>
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: opacity 0.5s ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
}

.mobile-menu-leave-to {
  transition-delay: 100ms;
}

.drawer-enter-active,
.drawer-leave-active {
  transition: transform 0.5s ease;
}

.drawer-enter-from,
.drawer-leave-to {
  transform: translateX(-100%);
}
</style>
