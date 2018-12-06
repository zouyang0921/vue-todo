import Vue from 'vue';

const app = new Vue({
    el: '#root',
    template:
        `<div class="box" ref="box">
            text: {{text}}, obj.a: {{obj.a}}
        </div>`,
    data: {
        text: 0,
        obj: {}
    },
    // watch: {
    //     text(newText, oldText) {
    //         console.log(`${newText} : ${oldText}`);
    //     }
    // }
});

// let i = 0;
setInterval(() => {
    // app.text += 1;
    // app.text += 1;
    // app.text += 1;
    // app.text += 1;
    // app.text += 1; // data 里面的数据不是一改变就马上重新渲染，像这样它会一次加 5
    app.$data.text += 1; // 结果同 app.text += 1;

    // i++;
    // app.obj.a = i; // data 中某个 obj 的属性没有声明，直接给它赋值的话就不是响应式的，即 属性 a 变化时页面不会重新渲染；
    // app.$forceUpdate(); // 不建议用
    // app.$set(app.obj, 'a', i);
}, 1000);

// console.log(app.$data);
// console.log(app.$props);
// console.log(app.$el);
// console.log(app.$options);
// app.$options.render = (h) => {
//     return h('div', {}, 'new render function');
// };
// console.log(app.$children);
// console.log('Vue 实例根节点：', app.$root);
// console.log(app.$root === app); // true
// console.log(app.$slots);
// console.log(app.$refs);
// console.log(app.$isServer);

// const unWatch = app.$watch('text', (newText, oldText) => {
//     console.log(`${newText} ${oldText}`);
// });

// setTimeout(() => {
//     unWatch();
// }, 2000);

// app.$on('test', (a, b) => {
//     console.log(`test emited ${1} ${b}`);
// });

// app.$once('test', (a, b) => {
//     console.log(`test emited ${1} ${b}`);
// });

// setInterval(() => {
//     app.$emit('test', 1, 2);
// }, 1000);
