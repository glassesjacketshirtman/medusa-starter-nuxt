<template>
  <header class="grid px-4 py-2 grid-cols-3 items-center">
    <HeaderToggle class="lg:hidden" />
    <MobileMenu />

    <NuxtLink
      to="/"
      class="text-center lg:text-left font-display text-3xl text-body-700"
    >
      {{ appConfig.brand.name }}
    </NuxtLink>
    <HeaderNav />
    <div id="actions" />
  </header>
</template>

<script lang="ts" setup>
const appConfig = useAppConfig();
</script>
