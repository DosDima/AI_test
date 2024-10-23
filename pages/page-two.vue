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
                v-model="inputPhone"
                :value="inputPhone"
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
        <div></div>
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
  title: "Page Two",
})

const router = useRouter()
const userCookie = useCookie('user')

const appStore = useAppStore()
const isShowInput = ref<boolean>(false)
const isOpenModal = ref<boolean>(false)
const inputValue = ref<string>('')
const inputPhone = ref<string>('')
const inputLabel = ref<string>('start')

const nextBtnHandler = () => {
  if (inputLabel.value === 'start') {
    isShowInput.value = true
    inputLabel.value = 'Фамилия'
  }
  if (inputLabel.value === 'Фамилия' && inputValue.value.trim()) {
    appStore.setSoname(inputValue.value)
    inputLabel.value = 'Имя'
    inputValue.value = ''
  }
  if (inputLabel.value === 'Имя' && inputValue.value.trim()) {
    appStore.setName(inputValue.value)
    isOpenModal.value = true
  }
}

const finishBtnHandler = () => {
  if (!inputPhone.value) return

  userCookie.value = JSON.stringify({
    userNumber: String(appStore.userNumber),
    userSoname: appStore.userSoname,
    userName: appStore.userName,
    userPhone: inputPhone.value,
  })

  router.push('page-three')
}
</script>
