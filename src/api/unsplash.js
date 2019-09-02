import axios from 'axios';

export default axios.create( {
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 2036ee288a329da6d1b0477d2bd93d4a6e5ebcac55d4ca4250248fe23e69697c'
    }
});