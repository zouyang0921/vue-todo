import Vue from 'vue';

const app = new Vue({
    el: '#root',
    template: '<div class="box">{{text}}</div>',
    data: {
        text: 0,
        obj: {}
    }
});

// let i = 0;
setInterval(() => {
    app.text += 1;
}, 1000);

console.log(app.$data); //

// console.log('Vue 实例根节点：', app.$root);
// console.log(app.$root === app); // true
