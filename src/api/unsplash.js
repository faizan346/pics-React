import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID _il6XK2nT7zvMCjKaBog2SK_ihKhEvXz_RtN_upD7BM'
    }
})