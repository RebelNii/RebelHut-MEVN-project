<template>
    <div id="login" class="flex justify-center items-center w-full mb-10">
        <div class="login  w-full flex justify-center items-center mt-2 mb-5">
            <div id="form" class=" bg-stone-700 rounded">
                <form @submit="handleLogin" class="bg-sky-300 rounded  w-full">
                    <h5 class="text-sm md:text-2xl font-medium flex justify-center mt-3">Login</h5>
                    <div class="m-4">
                        <label class="text-sm md:text-lg">Username</label> <br>
                        <input type="text" name="username" v-model="username" placeholder="Username" class="border-none focus:outline-none p-2 rounded" autocomplete="off">
                    </div>
                    <div class="m-4">
                        <label class="text-sm md:text-lg">Password</label> <br>
                        <input type="password" name="password" v-model="password" placeholder="Password" class="border-none focus:outline-none p-2 rounded">
                    </div>
                    <div class="m-4">
                        <button class="w-full p-2 transition-all border-none rounded bg-green-500 hover:bg-green-300">Login</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex'

    export default{
        name: "Login",
        data(){
            return{
                username: '',
                password: ''
            }
        },
        methods: {
            ...mapActions(['loginUser']),
            async handleLogin(e){
                e.preventDefault()
                const res = await this.loginUser({
                    username: this.username,
                    password: this.password
                })
                this.$router.push({name: 'dashboard'})
                localStorage.setItem('token',res.accessToken)
            }
        }
    }
</script>

<style scoped>
    .login{
        width: 300px;
        height: 300px;
    }
</style>