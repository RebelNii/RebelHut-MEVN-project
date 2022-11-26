<template>
    <div id="users">
        <div class="profile text-center w-full my-5">
            <div class="pros ">
                <UserData :allUsers="allUsers"/>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from "vuex";
import UserData from '@/components/UsersData.vue'
    export default{
        name: "Profile",
        components:{
            UserData
        },
        data(){
            return{}
        },
        computed:{
            allUsers() {
                return this.$store.getters.getAllUsers;
            },

            
        },
        methods: {
            ...mapActions(['fetchUsers'])
            
        },
        created(){
            this.fetchUsers()
        }
    }
</script>