<template>
  <div>
    <div>Число: {{ cookies?.userNumber }}</div>
    <div>Имя: {{ cookies?.userName }}</div>
    <div>Фамилия:{{ cookies?.userSoname }}</div>
    <div>Номер телефона:{{ cookies?.userPhone }}</div>
  </div>
</template>

<script setup lang="ts">
const cookies: any = useCookie('user')

definePageMeta({
  layout: "default",
  title: "Page Three",
})
</script>