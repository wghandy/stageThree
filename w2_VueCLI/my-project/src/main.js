import Vue from 'vue';
import App from './App.vue';

// Vue.config.productionTip = false

// 导入模块
import {password, username} from './js/common';
import xxx from './js/common';
import * as all from './js/common';
console.log('common:',password,username);
console.log('default',xxx);
console.log('all',all);



new Vue({
  render: h => {
    return h(App)
  },
}).$mount('#app')
