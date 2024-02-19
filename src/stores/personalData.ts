import { defineStore } from "pinia";


export const usePersonalData = defineStore({
    id: 'personalData',
    state: () => ({
        name: '',
        email: '',
        phone: '',
        startValidate: false
    }),
    getters: {
        isNameValidated: (state): boolean => {
            if (!state.startValidate) {
                return true
            }
            return Boolean(state.name)
        },
        isEmailValidated: (state): boolean => {
            if (!state.startValidate) {
                return true
            }
            return Boolean(String(state.email)
                .toLowerCase()
                .match(
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                ))
        },
        isPhoneValidated: (state): boolean => {
            if (!state.startValidate) {
                return true
            }
            return Boolean(state.phone)
        },
    },
    actions: {
        exeValidate(): boolean {
            this.startValidate = true
            return (this.isNameValidated && this.isEmailValidated && this.isPhoneValidated)
        }
    }
})