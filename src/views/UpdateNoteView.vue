<template>
    <div id="notes" class="mb-10 flex justify-center items-center">
        <div class="notes flex justify-center">
            <form @submit.prevent="handleSubmit" class="bg-teal-500 px-5 rounded">
                <h5 class="mt-3 text-lg flex justify-center items-center">Update Note</h5>
                <div class="my-4">
                    <label for="">ID</label> <br/>
                    <input type="hidden" placeholder="user" v-model="id"  class="border-none p-2 focus:outline-none w-full rounded">
                </div>
                <div class="my-4">
                    <label for="">Title</label> <br/>
                    <input type="text" placeholder="Title" v-model="title" class="outline-none border-none p-2 focus:outline-none w-full rounded">
                </div>
                <div class="my-4 flex w-full max-w-screen-sm">
                    <label for="">Completed?</label> 
                    <input type="checkbox" placeholder="user" value="true" v-model="completed"  class="border-none p-2 flex-1 focus:outline-none w-full rounded">
                </div>
                <div class="my-4">
                    <label for="">Note</label> <br/>
                    <textarea class="focus:outline-none rounded p-1" name="" id="" v-model="text" cols="30" rows="5"></textarea>
                </div>
                <div class="my-4">
                    <button @click.prevent="handleUpdate" class="p-2 w-full border-none bg-amber-400 rounded">Update</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
import axios from 'axios'
export default{
    name: 'addNotes',
    components: {},
    data(){
        return{
            id: '',
            title: '',
            text: '',
            completed: ''
        }
    },
    props: [],
    methods: {
        ...mapActions(['updateNote']),
        handleUpdate(){
            this.updateNote({
                id: this.id,
                user: this.$store.state.person.userId,
                title: this.title,
                text: this.text,
                completed: this.completed ? this.completed : false
            })
        }
    },
    async created(){
        const {data} = await axios.get('https://rebelhut-api.onrender.com/notes/'+ this.$route.params.id,{
                headers:{
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                },
                withCredentials: true,
                credentials: 'include'
            })

            console.log(data)
            this.id = data._id
            this.title = data.title
            this.text = data.text
            this.completed = data.completed
    }
}
</script>

<style scoped>
    .notes{
        width: 500px;
    }
</style>