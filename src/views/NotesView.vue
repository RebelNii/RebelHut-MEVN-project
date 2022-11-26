<template>
    <div id="notes" class="my-2">
        <div class="notes">
            <div class="form-note flex justify-center">
                <notesData :allNotes="allNotes" />
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
import notesData from '@/components/notesData.vue';
    export default{
        name: "Notes",
        data(){
            return{}
        },
        methods: {
            ...mapActions(['fetchNotes']),
        },
        components:{notesData},
        computed: {
            allNotes(){
                return this.$store.getters.allNotes;
            }
        },
        created(){
            this.fetchNotes()
        }
    }
</script>