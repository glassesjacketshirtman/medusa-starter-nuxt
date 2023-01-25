<template>
  <div v-bind="$attrs">
    <IconHamburger @click="open" />
  </div>
</template>

<script lang="ts" setup>
import { useMobileMenu } from "~~/stores/mobile-menu";

const { open } = useMobileMenu();
</script>
