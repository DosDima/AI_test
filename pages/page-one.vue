<template>
  <div>
    <div class="num-box">Сумма:{{ result }}</div>
    <KitCard>
      <template #card__header>
        <div>
          <KitInput
              v-for="(val, index) in inputList"
              :key="index"
              v-model="inputList[index]"
              :name="`numInput${index}`"
              style="margin-bottom: 1em;"
              :label="`слагаемое ${index + 1}`"
              :type="'text'"
              :required="true"
              :maxlength="12"
              @keydown.enter="addInputBtnHandler"
          />
          <KitButton
              :color="'info'"
              :text="'+ Добавить'"
              @click-on-btn="addInputBtnHandler"
          />
        </div>
      </template>
      <template #card__footer>
        <KitButton
            style="margin-top: 4em;"
            :text="'Сохранить и продолжить'"
            @click-on-btn="nextBtnHandler"
        />
      </template>
    </KitCard>
  </div>
</template>

<script setup lang="ts">
import {useAppStore} from "~/stores/appStore";

definePageMeta({
  layout: "default",
  title: "Page One",
});


const router = useRouter()
const appStore = useAppStore()
const inputList = ref<string[]>(['0'])
const result = ref<string>('0')

const nextBtnHandler = () => {
  appStore.setNumber(convertToInt(result.value))
  router.push('page-two')
}

const addInputBtnHandler = () => {
  if (inputList.value.length > 100) return
  inputList.value.push('0')
  window.scrollTo(0, document.body.scrollHeight + 100)
}

watchEffect(() => {
  let counter: number = 0
  inputList.value.forEach((x): number => counter += convertToInt(x))
  result.value = counter.toFixed(3)
})

</script>

<style scoped>
.num-box {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  padding: 1em;
  width: 100%;
  max-width: 300px;
  max-height: 64px;
  font-size: 2em;
  font-weight: bold;
}
</style>
