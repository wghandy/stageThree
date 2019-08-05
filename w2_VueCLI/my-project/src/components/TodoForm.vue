<template>
    <div class="input-group">
        <input type="text" class="form-control" v-model="title" ref="title" v-on:keyup.13="add">
        <div class="input-group-append">
            <input type="date" v-model="date" class="border">
            <button class="btn btn-success" type="button" v-on:click="add">添加</button>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            title:'',
            date:''
        }
    },
    methods:{
        add(){

        }
    }
}
</script>
<style>

</style>


