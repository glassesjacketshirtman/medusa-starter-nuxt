<template>
  <MobileMenuContainer>
    <div class="grid grid-cols-3 items-center">
      <div>language</div>

      <NuxtLink class="font-display text-3xl text-center">
        {{ appConfig.brand.name }}
      </NuxtLink>

      <div class="text-right" @click="close">close</div>
    </div>
  </MobileMenuContainer>
</template>

<script lang="ts" setup>
import { useMobileMenu } from "~~/stores/mobile-menu";

const appConfig = useAppConfig();
const { close } = useMobileMenu();
</script>
