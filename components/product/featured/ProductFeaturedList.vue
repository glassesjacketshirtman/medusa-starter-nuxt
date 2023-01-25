<template>
  <div>
    <ul>
      <li v-for="product in products">{{ product.handle }}</li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
const { data: products, error, pending } = await useFeaturedProducts();
</script>
