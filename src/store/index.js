import { createStore } from 'vuex'
import axios from 'axios'
import createPersistedState from 'vuex-persistedstate';
import jwt_decode from "jwt-decode";
import router from '../router/index'

export default createStore({
  state: {
    notes: [],
    users: [],
    token: "",
    person: '',
    active: null,
    decoded: '',
    roles: '',
    Admin: null,
    Manager: null,
    Employee: null,
    auth: null
  },
  getters: {
    allNotes(state){
      return state.notes
    },

    getAllUsers(state){
      return state.users
    },

    getAdmin(state){
      state.Admin
    },

    getManager(state){
      state.Manager
    }
  },
  mutations: {
    setNotes(state,payload){
      state.notes = payload
    },

    setUser(state,payload){
      state.users = payload
    },

    removeUser(state,id){
      state.users = state.users.filter((user) => user._id !== id)
    },

    removeNote(state, id){
      state.notes = state.users.filter((note) => note._id !== id)
    },

    setToken(state,payload){
      state.token = payload
    },

    setPerson(state,payload){
      state.person = payload
      state.active = true;
      state.roles = payload.roles;
      state.auth = true
      if(payload.roles.includes('Employee')){
        state.Employee = true
        // console.log({'E':state.Employee})
      }

      if(payload.roles.includes('Manager')){
        state.Manager = true
        console.log({'M':state.Manager})
      }

      if(payload.roles.includes('Admin')){
        state.Admin = true
        console.log({'A':state.Admin})
      }
    },

    setDecoded(state, payload){
      state.decoded = payload
    },

    removePerson(state){
      state.person = '';
      state.active = null;
      state.decoded = null;
      state.roles = '',
      state.Admin = null
      state.Employee = null
      state.Manager = null
      state.auth = null
    },

  },
  actions: {
    async fetchUsers({commit}){
      const res = await axios.get('https://rebelhut-api.onrender.com/users',{
        headers:{
          Authorization: `Bearer ${localStorage.getItem('token')}`
        },
        withCredentials: true,
        credentials: 'include'
      })
      // console.log(res.data)
      commit('setUser',res.data)
    },

    async regUser({commit},{username,password,roles}){
      const res = await axios.post('https://rebelhut-api.onrender.com/users',{username,password,roles},{
        headers:{
          Authorization: `Bearer ${localStorage.getItem('token')}`
        },
        withCredentials: true,
        credentials: 'include'
      })
      // console.log(res.data)
    },

    async updateUser({commit},{id,username,password,roles,active}){
      const res = await axios.patch('https://rebelhut-api.onrender.com/users',{id,username,password,roles,active},{
        headers:{
          Authorization: `Bearer ${localStorage.getItem('token')}`
        },
        withCredentials: true,
        credentials: 'include'
      })
      // console.log(res.data)
      commit('setUser',res.data)
    },

    async deleteUser({commit},id){
      const res = await axios.delete(`https://rebelhut-api.onrender.com/users/${id}`,{
        headers:{
          Authorization: `Bearer ${localStorage.getItem('token')}`
        },
        withCredentials: true,
        credentials: 'include'
      })
      // console.log(res.data)
      // console.log(id)
      commit('removeUser', id)
    },

    async getSingleUser({commit},id){
      const res = await axios.get(`https://rebelhut-api.onrender.com/users/${id}`)
      // console.log(res.data)
      return res.data
    },

    async loginUser({commit},{username,password}){
      const {data} = await axios.post('https://rebelhut-api.onrender.com/auth',{username,password},{
        withCredentials: true,
        credentials: 'include'
      })
      // console.log(data)
      // console.log(data.accessToken)
      // console.log(jwt_decode(data.accessToken))
      let token = jwt_decode(data.accessToken)
      // console.log(token.UserInfo)
      // console.log(data.person.id)
      commit('setToken',data.accessToken)
      // commit('setPerson',data.person)
      commit('setPerson',token.UserInfo)
      commit('setDecoded',jwt_decode(data.accessToken))

      // axios.defaults.headers.common['Authorization'] = `Bearer ${data.accessToken}`
      localStorage.setItem('token',data.accessToken)

      return data
    },

    async logout({commit}){
      const {data} = await axios.post('https://rebelhut-api.onrender.com/auth/logout')
      localStorage.removeItem('token')
      commit('removePerson')
      router.push('/')
    },

    async addNote({commit},{user, title, text}){
      const res = await axios.post('https://rebelhut-api.onrender.com/notes',{user,title,text},{
        headers:{
          Authorization: `Bearer ${localStorage.getItem('token')}`
        },
        withCredentials: true,
        credentials: 'include'
      })
      console.log(res)

    },

    async fetchNotes({commit}){
      const {data} = await axios.get('https://rebelhut-api.onrender.com/notes',{
        headers:{
          Authorization: `Bearer ${localStorage.getItem('token')}`
        },
        withCredentials: true,
        credentials: 'include'
      });

      console.log(data)
      commit('setNotes',data)
    },

    async updateNote({commit},{id,user,title, text, completed}){
      const {data} = await axios.patch('https://rebelhut-api.onrender.com/notes',{id,user,title,text,completed},{
        headers:{
          Authorization: `Bearer ${localStorage.getItem('token')}`
        },
        withCredentials: true,
        credentials: 'include'
      })
      console.log(data)
      router.push('/dash')
    },

    async deleteNote({commit},id){
      const {data} = await axios.delete(`https://rebelhut-api.onrender.com/notes/${id}`,{
        headers:{
          Authorization: `Bearer ${localStorage.getItem('token')}`
        },
        withCredentials: true,
        credentials: 'include'
      });

      commit('removeNote', id)
      router.push('/dash')
    }
  },
  modules: {
  },
  plugins: [createPersistedState()],
})
