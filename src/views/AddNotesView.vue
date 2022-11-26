<template>
    <div id="notes" class="mb-10 flex justify-center items-center">
        <div class="notes flex justify-center">
            <form @submit.prevent="handleSubmit" class="bg-teal-500 px-5 rounded">
                <h5 class="mt-3 text-lg flex justify-center items-center">Add Note</h5>
                <div class="my-4">
                    <label for="">User</label> <br/>
                    <input type="text" placeholder="user" v-model="id"  class="border-none p-2 focus:outline-none w-full rounded">
                </div>
                <div class="my-4">
                    <label for="">Title</label> <br/>
                    <input type="text" placeholder="Title" v-model="title" class="border-none p-2 focus:outline-none w-full rounded">
                </div>
                <div class="my-4">
                    <label for="">Note</label> <br/>
                    <textarea class="focus:outline-none rounded p-1" name="" id="" v-model="text" cols="30" rows="5"></textarea>
                </div>
                <div class="my-4">
                    <button class="p-2 w-full border-none bg-amber-400 rounded">Submit</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default{
    name: 'addNotes',
    components: {},
    data(){
        return{
            id: '',
            title: '',
            text: ''
        }
    },
    props: [],
    methods: {
        ...mapActions(['addNote']),
        async handleSubmit(){
            this.addNote({
                user: this.id,
                title: this.title,
                text: this.text
            })
        }
    },
    computed: {

        user(){
            return this.$store.state.person
        }
    },
    created(){
        this.id = this.$store.state.person.userId
    }
}
</script>

<style scoped>
    .notes{
        width: 500px;
    }
</style>