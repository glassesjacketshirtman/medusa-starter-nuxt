<template>
  <NuxtLink to="/" class="font-display text-3xl text-body-700" v-bind="$attrs">
    {{ appConfig.brand.name }}
  </NuxtLink>
</template>

<script lang="ts" setup>
const appConfig = useAppConfig();
</script>
