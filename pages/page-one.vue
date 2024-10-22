<template>
  <div>
    <div class="num-box">Сумма:{{ result }}</div>
    <KitCard>
      <template #card__header>
      </template>
      <template #card__main>
        <div>
          <KitInput
              v-for="(val, index) in inputList"
              :key="index"
              v-model="inputList[index]"
              style="margin-bottom: 1em;"
              :style="{'color: red': !val, 'color: green' : val}"
              :label="`слагаемое ${index + 1}`"
              :type="'text'"
              :maxlength="12"
          />
          <KitButton
              style="margin-top: 1em;"
              :color="'info'"
              :text="'+ Добавить'"
              @click-on-btn="addInputBtnHandler"
          />
        </div>
      </template>
      <template #card__footer>
        <KitButton
            style="margin-top: 4em;"
            :text="'Закончить и перейти на страницу 2'"
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
  let counter = 0
  inputList.value.forEach((x) => counter += convertToInt(x))
  result.value = counter.toFixed(3)
})

// const inputs: any[] = [
//   123, '123', 12.3, '12.3', '   12.3   ',
//   1_000_000, '1_000_000',
//   '0b11111111', '0o377', '0xFF',
//   '', '    ', '1.',
//   'abc', '12.34Ab!@#$',
//   '10e100', '10e1000',
//   null, undefined, Infinity];
// const test = () => inputs.forEach(x => console.log(x, `= = =`, convertToInt(x)))

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
