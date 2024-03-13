import axios from 'axios'

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: "5e0983adc501093f81b30a4b801128d2",
        language: "ko-KR"
    }
})

export default instance