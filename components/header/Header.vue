<template>
  <header class="grid px-4 py-2 grid-cols-3 items-center">
    <HeaderToggle class="lg:hidden" />
    <Logo class="text-center lg:text-left" />
    <HeaderNav />
    <div id="actions" />
    <MobileMenu />
  </header>
</template>

<script lang="ts" setup>
const appConfig = useAppConfig();
</script>
