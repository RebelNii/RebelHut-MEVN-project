

// axios.defaults.baseURL = 'http://localhost:3050'

// axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token')
// axios.defaults.headers.common['Authorization'] = `Bearer ${data.accessToken}`;


import router from '@/router'
import axios from 'axios'
import store from '@/store'


const ax = axios.create({
  baseURL: 'http://localhost:3050',
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
    'Content-type': 'application/json'
  },
  withCredentials: true,
  credentials: 'include'
})




let refresh = false
// let load = true


axios.interceptors.response.use(res => res, async error => {
    if(error){
      // console.log(error.config)
      if(error.response.status === 401 && !refresh){
        refresh = true;
        const reply = await axios.get('http://localhost:3050/auth/refresh',{
            headers:{
              Authorization: `Bearer ${localStorage.getItem('token')}`
            },
            withCredentials: true,
            credentials: 'include'
        });

        // console.log(reply)
        // console.log(reply.data.accessToken)

        if(reply.status === 200){
            localStorage.setItem('token',reply.data.accessToken)
            // axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token')
            // console.log(reply.data.accessToken)
            return axios(error.config)
        }
      }
    }
    refresh = false;
    return error
})




