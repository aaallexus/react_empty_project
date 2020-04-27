import axios from 'axios'

const apiVersion='v1'
export const client = axios.create({
    baseURL:process.env.PUBLIC_URL+'/api/'+apiVersion,
    responseType: 'json',
    headers: {
        accept: '*/*',
        contentType: 'application/json'
    }
})
client.interceptors.response.use(function (response) {
    return response;
},function(error){
    console.log(error.response.data.errors)
    return Promise.reject(error);
});
