<template>
    <div id="addUser" class="mb-10">
        <div class="addUser flex justify-center items-center my-8 ">
            <div class="form-reg flex justify-center items-center w-full">
                <form @submit="onClick" class="h-full w-full bg-teal-300  rounded text-center">
                    <h3 class="text-xl font-medium my-2">Update Employee</h3>
                    <div class="my-3">
                        <label for="">ID</label> <br>
                        <input type="text" v-model="id" placeholder="ID" class="p-2 focus:outline-none border-zinc-300 rounded border-solid">
                    </div>
                    <div class="my-3">
                        <label for="">Username</label> <br>
                        <input type="text" v-model="username" placeholder="Username" class="p-2 focus:outline-none border-zinc-300 rounded border-solid">
                    </div>
                    <div class="my-3">
                        <label for="">Password</label> <br>
                        <input type="password" v-model="password" placeholder="password" class="p-2 focus:outline-none border-zinc-300 rounded border-solid">
                    </div>
                    <div class="my-3 flex gap-5 justify-center items-center">
                        <label>Active Status:</label>
                        <input type="checkbox" value="True" v-model="active">
                    </div>
                    <div class="my-3">
                        <label for="">Roles</label> <br>
                        <div class="flex items-center justify-center gap-4">
                            <div class="">
                                <label for="mike">Employee</label> &nbsp;
                                <input type="checkbox" id="mike" value="Employee" v-model="roles">
                            </div>
                            <div class="">
                                <label for="Manager">Manager</label> &nbsp;
                                <input type="checkbox" id="mike" value="Manager" v-model="roles">
                            </div>
                            <div class="">
                                <label for="Admin">Admin</label> &nbsp;
                                <input type="checkbox" id="mike" value="Admin" v-model="roles" class="">
                            </div>
                        </div>
                    </div>
                    <div class="my-3">
                        <button class="p-3 rounded border-none focus:outline-none bg-stone-700">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import axios from 'axios'
    export default{
        name: "update-user",
        components: {},
        data(){
            return{
                roles: [],
                username: '',
                password: '',
                active: null,
                id: ''
            }
        },
        methods: {
            ...mapActions(['updateUser', 'getSingleUser']),
            onClick(e){
                e.preventDefault();
                this.updateUser({
                    id: this.id,
                    username: this.username,
                    password:this.password,
                    roles:this.roles,
                    active: this.active ? this.active : false
                });
                this.$router.push({name: 'dashboard'})
            }
        },
        async created() {
            // data = this.getSingleUser({id: this.router.params.id});
            const res = await axios.get('https://rebelhut-api.onrender.com/users/'+ this.$route.params.id,{
                headers:{
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                },
                withCredentials: true,
                credentials: 'include'
            })
            console.log(res)
            console.log(this.$store.state.token)
            this.username = res.data.username,
            this.id = res.data._id
        }
    }
</script>

<style scoped>
    .form-reg{
        min-height: 500px;
        width: 500px;
    }
</style>