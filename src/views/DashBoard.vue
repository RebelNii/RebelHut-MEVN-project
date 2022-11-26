<template>
    <div id="dash">
        <div class="dash my-5">
            <h1 class="text-sm md:text-xl lg:text-3xl font-medium text-center text-white">RebelHut</h1>
            <div class="workspace px-5 text-center text-white font-medium">
                <h4 class="mt-5 text-sm md:text-xl lg::text-2xl p-1">Welcome <span></span> </h4>
                <div class="mt-3">
                    <div class="text-sm md:text-lg">
                        <router-link class="hover:text-blue-500" :to="{name:'notes'}">
                            View Notes
                        </router-link> <br/>
                        <router-link class="hover:text-blue-500" :to="{name:'add-notes'}">
                            Add Notes
                        </router-link>
                    </div>
                    <div class="text-sm md:text-lg">
                        <router-link class="hover:text-green-500" :to="{name:'profile'}">
                            View User Profile
                        </router-link>
                    </div>
                    <div class="text-sm md:text-lg">
                        <router-link v-if="this.$store.state.Admin"  class="hover:text-green-500" :to="{name:'register'}">
                            Add User Profile
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from "vuex";
    export default{
        name: "dashboard",
        components: {

        },
        data(){
            return{
                date: '',
                username: ''
            }
        },
        methods: {
            ...mapActions(['fetchUsers'])
        },
        computed:{
            roles(){
                return this.$store.state.person
            },

            admin(){
                return this.$store.state.Admin
            }
        },
        created(){
            this.fetchUsers()
        }
    }
</script>

<style scoped>
    /* #dash{
        height: 500px;
        display: block;
    } */
</style>