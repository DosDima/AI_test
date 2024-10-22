<template>
  <div>
    <KitOverlay v-model="isOpenModal">
      <template #overlay__content>
        <KitCard>
          <template #card__header>
            <div></div>
          </template>
          <template #card__main>
            <KitInput
                v-model="inputValue"
                :value="inputValue"
                :name="'phoneInput'"
                :label="'Номер телефонв'"
                :type="'tel'"
                :maxlength="12"
            />
          </template>
          <template #card__footer>
            <KitButton
                :color="'success'"
                @click-on-btn="finishBtnHandler"
            />
          </template>
        </KitCard>
      </template>
    </KitOverlay>
    <KitCard>
      <template #card__header>
        <div>Logo</div>
      </template>
      <template #card__main>
        <KitInput
            v-show="isShowInput"
            v-model="inputValue"
            :value="inputValue"
            :name="'nameInput'"
            :label="inputLabel"
            :type="'text'"
            :maxlength="24"
        />
      </template>
      <template #card__footer>
        <KitButton
            style="margin-top: 1em;"
            :color="'success'"
            :text="'Далее'"
            @click-on-btn="nextBtnHandler"
        />
      </template>
    </KitCard>
  </div>
</template>

<script setup lang="ts">
import {useAppStore} from "~/stores/appStore"

definePageMeta({
  layout: "default",
  title: "Page One",
})

const router = useRouter()
const appStore = useAppStore()

const isShowInput = ref<boolean>(false)
const isOpenModal = ref<boolean>(false)

const inputValue = ref<string>('')
const inputLabel = ref<string>('start')

const nextBtnHandler = () => {
  if (inputLabel.value === 'start') {
    isShowInput.value = true
    appStore.setSoname(inputValue.value)
    inputLabel.value = 'Фамилия'
  }
  if (inputLabel.value === 'Фамилия' && inputValue.value) {
    appStore.setSoname(inputValue.value)
    inputLabel.value = 'Имя'
    inputValue.value = ''
  }
  if (inputLabel.value === 'Имя' && inputValue.value) {
    appStore.setName(inputValue.value)
    isOpenModal.value = true
    inputValue.value = ''
  }
}
const finishBtnHandler = () => {
  appStore.setPhone(inputValue.value)
  router.push('page-three')
}
</script>
