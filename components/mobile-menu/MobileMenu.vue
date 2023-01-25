<template>
  <MobileMenuContainer>
    <div class="grid grid-cols-3 items-center">
      <div>language</div>
      <Logo class="text-center" />
      <div class="text-right" @click="close">close</div>
    </div>
  </MobileMenuContainer>
</template>

<script lang="ts" setup>
import { useMobileMenu } from "~~/stores/mobile-menu";

const appConfig = useAppConfig();
const { close } = useMobileMenu();
</script>
