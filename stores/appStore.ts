import {defineStore} from "pinia";

export const useAppStore = defineStore('appStore', {
    state: () => ({
        userNumber: 0,
        userName: '',
        userSoname: '',
        userPhone: '',
    }),
    actions: {
        setNumber(value: number) {
            this.userNumber = value;
        },
        setName(value: string) {
            this.userName = value;
        },
        setSoname(value: string) {
            this.userSoname = value;
        },
        setPhone(value: string) {
            this.userPhone = value;
        },
    }
})