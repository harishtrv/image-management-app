import axios from 'axios';

export default axios.create({
    baseURL:"https://api.unsplash.com/",
    headers : {
        Authorization: 'Client-ID pt0vidsjZNKcvSL3d2-3dMIz1dJhiLJXeGSSYN92e_Y' 
    }
});
