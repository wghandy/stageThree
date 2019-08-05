<template>
    <div>
        首页
        {{username}} - {{age}}
        <button class="btn btn-success" @click="changeAge">修改年龄</button>
    </div>
</template>
<script>

import 'bootstrap/dist/css/bootstrap.css';

export default {
    data(){
        return {
            username:'laoxie',
            age: 18
        }
    },
    methods:{
        changeAge(){
            this.age = this.age + 1
        }
    }
}
</script>
<style>

</style>


