import axios from "axios"

export default function new_axios(base_url) {
    let my_axios = {
        post(url, parmas) {
            return new Promise((resolve, reject) => {
                axios.post(base_url + url, parmas).then(
                    data => {
                        resolve(data.data)
                    },
                    err => {
                        reject(err)
                    }
                )
            })
        },
        get(url, parmas) {
            return new Promise((resolve, reject) => {
                axios.get(base_url + url,{ parmas:parmas}).then(
                    data => {
                        resolve(data.data)
                    },
                    err => {
                        reject(err)
                    }
                )
            })
        }
    };
    return my_axios;
}