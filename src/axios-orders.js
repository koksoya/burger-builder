import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://react-burger-b646d.firebaseio.com/'
})

export default instance