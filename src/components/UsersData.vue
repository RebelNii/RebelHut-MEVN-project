<template>
    <div id="users" class="text-center">
        <div class="users w-screen px-2 flex justify-center items-center">
            <div class="viewUsers grid md:grid-cols-2 gap-5 md:gap-10">
                <div class="card bg-gray-400 shadow-lg rounded text-white w-80 h-80" v-for="(users, index) in allUsers" :key="index">
                    <div class="mt-10 mb-3">
                        <h5 class="uppercase text-lg font-semibold">UserName</h5>
                        <span class="uppercase text-sm">{{users.username}}</span>
                    </div>
                    <div class="my-3">
                        <h5 class="uppercase text-lg font-semibold">Status</h5>
                        <span class="uppercase text-sm">{{users.active}}</span>
                    </div>
                    <div class="my-3" v-for="(role, index) in users.roles" :key="index">
                        <h5 class="uppercase text-lg font-semibold">Role<small class="text-sm font-normal">(s)</small></h5>
                        <span class="uppercase text-sm">{{role}}</span>
                    </div>
                    <div class="my-3 flex gap-3 justify-center items-center">
                        <div class="">
                            <span class="text-lg md:text-2xl text-red-300 cursor-pointer" @click="deleteUser(users._id)">
                                <i class="fa-solid fa-square-minus"></i>
                            </span>
                        </div>
                        <div class="">
                            <span class="text-sm md:text-xl cursor-pointer" v-if="this.$store.state.Admin">
                                <router-link  class="uppercase text-yellow-400" :to="'/update-user/'+users._id">Update</router-link>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapActions } from 'vuex';
    export default{
        name: 'Users',
        components: {},
        data(){
            return{
                
            }
        },
        props: ['allUsers'],
        methods: {
            ...mapActions(['deleteUser'])
        },
        computed: {
            admin(){
                return this.$store.state.Admin
            }
        }
    }
</script>

<style scoped>
    /* .users{
        width: 70%;
        height: 90px;
    } */
</style>