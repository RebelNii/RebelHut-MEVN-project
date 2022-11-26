<template>
    <div id="addUser">
        <div class="addUser my-8">
            <div class="form-reg flex justify-center items-center">
                <form @submit="onSubmit" class="h-full bg-teal-300 p-28 rounded text-center">
                    <h3 class="text-2xl font-medium">Submit New Employee</h3>
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
                        <div class="flex gap-4">
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
import {ref} from 'vue'
import axios from 'axios'
    export default{
        name: "AddUser",
        components: {},
        data(){
            return{
                roles: [],
                username: '',
                password: '',
                active: null
            }
        },
        // setup(){
        //     let form = ref({
        //         username: '',
        //         password: '',
        //         roles: [],
        //         active: null
        //     })
        //     return form
        // },
        methods: {
            ...mapActions(['regUser']),
            async onSubmit(e){
                e.preventDefault();
                this.regUser({
                    username: this.username,
                    password:this.password,
                    roles:this.roles
                })
                this.$router.push({name: 'dashboard'})
            }
        }
    }
</script>

<style scoped>
    /* .form-reg{
        min-height: 420px;
    } */
</style>