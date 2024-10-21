<template>
  <div>Page content</div>
</template>

<script setup lang="ts">
definePageMeta({
  title: "Home page",
});

const route = useRoute();

console.log(route.meta.title); // My home page
</script>
