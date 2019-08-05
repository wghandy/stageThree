<template>
    <!-- 只允许一个根目录 -->
    <div class="todolist">
        <TodoForm></TodoForm>
        <TodoCentent :data="todolist"></TodoCentent>
    </div>
</template>
<script>
import TodoForm from './TodoForm.vue';
import TodoCentent from './TodoCentent.vue';
export default {
    data(){
        return{
            todolist: [{
                    id: Date.now(),
                    title: '如果你不能拼爹，就只能拼命',
                    date: '2019-6-26',
                    done: false
                }, {
                    id: Date.now(),
                    title: '拼搏到无能为力，坚持到感动自己',
                    date: '2019-3-25',
                    done: true
                }],
                title:'',
                date:''
        }
    },
    compute:{
        donelist(){
            return this.todolist.filter(item=>item.done)
        },
        weilist(){
            return this.todolist.filter(item=>!item.done)
        }
    },
    components:{
        TodoForm,
        TodoCentent
    }
}
</script>
<style>

</style>


