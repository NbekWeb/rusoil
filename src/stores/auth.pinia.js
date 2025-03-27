import {
    defineStore
} from "pinia";
import {
    api
} from "@/utils/api.js";


const useAuth = defineStore('auth', {
    actions: {
        postRegis(data, callback) {
            api({
                    url: 'auth/register',
                    method: 'POST',
                    data,
                })
                .then(() => {
                    callback()
                })
                .catch((error) => {
                    console.log(error)
                })
        },
        postLogin(data, callback) {
            api({
                    url: 'auth/login',
                    method: 'POST',
                    data
                })
                .then(({
                    data
                }) => {

                    localStorage.setItem('access_token', data.access)
                    callback()
                })
                .catch((error) => {
                    console.log(error)
                })

        },
    }
})


export default useAuth