<template>
    <div class="todo-content">
        <table class="table mt-3">
            <thead class="thead-dark">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">待办事项</th>
                    <th scope="col">预期时间</th>
                    <th scope="col">是否完成</th>
                    <th scope="col">操作</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item,idx) in todolist" :key="idx">
                    <th scope="row">{{idx+1}}</th>
                    <td>{{item.title}}</td>
                    <td>{{item.date}}</td>
                    <td>{{item.done?'是':'否'}}</td>
                    <td>
                        <div class="btn-group btn-group-sm">
                            <button class="btn btn-outline-primary" @click="complete(item.id)">完成</button>
                            <button class="btn btn-outline-danger" @click="remove(item.id)">删除</button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
        <table class="table mt-3">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">完成事项</th>
                    <th scope="col">完成时间</th>
                    <th scope="col">是否完成</th>
                    <th scope="col">操作</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item,idx) in todolist" :key="idx">
                    <th scope="row">{{idx+1}}</th>
                    <td>{{item.title}}</td>
                    <td>{{item.date}}</td>
                    <td>{{item.done?'是':'否'}}</td>
                    <td>
                        <div class="btn-group btn-group-sm">
                            <button class="btn btn-outline-primary">查看</button>
                            <button class="btn btn-outline-danger" @click="remove(item.id)">删除</button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
        <div class="status">总共：{{todolist.length}}，待办：{{weilist.length}}，完成:{{donelist.length}}</div>
    </div>
</template>
<script>
export default {

    props:['todolist'],
    data(){
        return{
            weilist:[],
            donelist:[]
        }
    }
}
</script>
<style>

</style>