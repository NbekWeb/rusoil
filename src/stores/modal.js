import {
    defineStore
} from "pinia";


export const useModalStore = defineStore("modal", {
    state: () => ({
        modal: '',
        text: ''
    }),
    actions: {
        openModal(val = '', text = '') {
            this.modal = val
            this.text = text
        }
    }
})