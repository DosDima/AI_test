<template>
  <div>
    <KitCard>
      <template #card__header>
        <h2>Тестовое задание</h2>
      </template>
      <template #card__main>
        <h4>Вариант №3</h4>
      </template>
      <template #card__footer>
        <KitButton
            :text="'Start'"
            :color="'success'"
            :height="42"
            @click-on-btn="router.push('page-one')"
        />
      </template>
    </KitCard>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "default",
})

const router = useRouter()
</script>
