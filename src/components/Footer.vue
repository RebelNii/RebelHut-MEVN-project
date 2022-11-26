<template>
    <div id="footer" class="">
        <div class="footer flex gap-10 px-4 text-white py-3 justify-start items-center bg-stone-800  w-full h-full">
            <div class="text-sm">
                <span class="uppercase font-medium">Current User: <span class="uppercase text-sm">{{this.$store.state.person.username ? this.$store.state.person.username : ''}}</span> </span>
            </div>
            <div class="text-sm">
                <span class="uppercase font-medium">Status: <span class="uppercase text-green-300 text-sm">{{this.$store.state.person.status ? this.$store.state.person.status : ''}}</span> </span>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name: "Footer",
        data(){
            return{
                id: ''
            }
        },
        components: {},
        methods:{},
        computed: {
            user(){
                return this.$store.state.person
            }
        }
    }
</script>

<style scoped>
    
</style>