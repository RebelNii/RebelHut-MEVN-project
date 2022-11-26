<template>
    <div id="note-view w-full max-w-screen" class="py-3">
        <div class="viewNotes">
            <note class="grid md:grid-cols-2 gap-10">
                <div v-for="(notes , index) in allNotes" :key="index" class="card  h-60 bg-slate-500 rounded">
                    <div class="card-1 bg-teal-300 text-stone-900 py-3 px-2 ">
                        <div class="my-4 text-center">
                            <span class="text-base font-medium">Assigned to</span> <br>
                            <span class="font-medium text-sm">{{notes.username}}</span>
                        </div>
                        <div class="text-center my-4">
                            <span class="text-base font-medium">Completed?</span> <br>
                            <span class="text-sm font-medium uppercase">{{notes.completed}}</span> <br/>
                            <span class="text-sm font-medium">No. {{notes.ticket}}</span>
                        </div>
                        <div class="mt-4 text-center">
                            <span @click="deleteNote(notes._id)" class="text-red-600 text-lg cursor-pointer"><i class="fa-solid fa-square-minus"></i></span>
                        </div>
                    </div>
                    <div class="card-2 bg-purple-300 text-stone-800 text-center break-words py-3 px-4">
                        <div class="title my-3">
                            <h4 class="text-lg font-medium">{{notes.title}}</h4>
                        </div>
                        <div class="my-3">
                            <p class="text-sm">{{notes.text}}</p>
                        </div>
                        <div class="mt-3 cursor-pointer w-full">
                            <router-link class="bg-green-500 transition-all hover:bg-green-300  p-1 w-fit rounded text-sm uppercase" :to="'/update-note/'+notes._id">Update</router-link>
                        </div>
                    </div>
                </div>
            </note>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
    export default{
        name: 'noteView',
        props: ['allNotes'],
        methods:{
            ...mapActions(['deleteNote'])
        }
    }
</script>

<style scoped>
    .card{
        min-width: 360px;
        display: grid;
        grid-template-columns: 30% 70%;
    }
</style>