<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <h2>Hello 1904</h2>
    <TodoList></TodoList>
    <!-- <Home/>  -->
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css';
// import HelloWorld from './components/HelloWorld.vue'
// import Home from './pages/Home.vue';

import TodoList from './components/TodoList';

export default {
  name: 'app',
  components: {
    // Home,
    TodoList
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
