<template>
    <div id="nav" class="relative bg-slate-800 text-white p-2 mb-10">
        <div class="nav flex px-4 py-1 justify-between items-center">
            <div class="logo">
                <img class="logo w-5 h-5 md:w-10 md:h-10 rounded-full" src="../assets/img/2.png" alt="">
            </div>
            <div class="contact text-center flex items-center">
                <h6 class="text-sm md:text-lg font-semibold">Contact Us @KuntakinteNiii</h6>
            </div>
        </div>
        <div class="em mt-2 flex justify-between items-center px-5">
            <div class="flex gap-5 md:gap-10 text-sm md:text-base">
                <router-link :to="{name:'home'}">Home</router-link>
                <router-link :to="{name:'dashboard'}">DashBoard</router-link>
                <!-- <router-link></router-link> -->
            </div>
            <div class="flex justify-end items-center px-3">
                <h5 class="text-sm md:text-lg font-medium">
                <a href="javascript:void(0)" @click="logouts" class="bg-red-300 p-1 rounded hover:bg-red-600" v-if="this.$store.state.active">Logout</a> <router-link v-else class="bg-green-400 p-1 rounded" :to="{name:'login'}">Login</router-link> 
            </h5>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
    export default {
        name: "NavBar",
        components: {},
        data(){
            return{
                user: '',
                events: ['click', 'scroll', 'keypress','mousemove', 'mousedown', 'load'],
                warningTimer: null,
                logoutTimer: null
            }
        },
        methods: {
            ...mapActions(['logout']),
            logouts(){
                this.$store.dispatch('logout');
                localStorage.removeItem('token');
                this.$router.push('/')
            },

            //we assign value to variables
            setTimer(){
                this.warningTimer = setTimeout(this.warningMessage, 9 * 60 * 1000)
                this.logoutTimer = setTimeout(this.logoutUser, 10 * 60 * 1000)
            },

            // function to reset our variables
            resetTimer(){
                clearTimeout(this.warningTimer)
                clearTimeout(this.logoutTimer)

                this.setTimer()
            },

            //func to display warning
            warningMessage(){
                // alert('Works')
                console.log('works')
            },

            //func to auto logout user
            logoutUser(){
                this.$store.dispatch('logout')
                // alert('lol')
                console.log('done')
            }
        },
        mounted(){
            //loop through event listed
            this.events.forEach((event) => {
                window.addEventListener(event, this.resetTimer)
            })

            //func to call setTimer func
            this.setTimer()
        },
        destroy(){
            //its best to control event Listeners in an application
            this.events.forEach((event) => {
                window.removeEventListener(event, this.resetTimer)
            })

            //func to call setTimer func
            this.resetTimer()
        },
        computed: {
            use(){
                return this.$store.state.active
            }
        }
    }
</script>