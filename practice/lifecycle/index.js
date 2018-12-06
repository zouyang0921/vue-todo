import Vue from 'vue';

const app = new Vue({
    el: '#root',
    template: '<div>{{text}}</div>',
    data: {
        text: 0
    },
    beforeCreate() {
        console.log('breforeCreate', this.$el); // undefined
        console.log('breforeCreate', this.$data); // breforeCreate 获取不到 data，结果为 undefined
        this.$nextTick(() => {
            console.log('beforeCreate-nextTick', this.$el); // 在 mounted 之后打印出来 <div>0</div>
        });
    },
    created() {
        console.log('created', this.$el);
        console.log('created', this.$data); // 可以获取到
        this.$nextTick(() => {
            console.log('created-nextTick', this.$el); // 在 mounted 之后打印出来 <div>0</div>
        });
    },
    beforeMount() {
        console.log('beforeMount', this.$el); // <div id="root"></div>
    },
    mounted() {
        console.log('mounted', this.$el); // <div>0</div>
        this.$nextTick(() => {
            console.log('mounted-nextTick', this.$el); // 在 mounted 之后打印出来 <div>0</div>
        });
    },
    beforeUpdate() {
        console.log('beforeUpdate', this);
    },
    updated() {
        console.log('updated', this);
    },
    activated() {
        console.log('activated', this);
    },
    deactivated() {
        console.log('deactivated', this);
    },
    beforeDestory() {
        console.log('beforeDestory', this);
    },
    destroyed() {
        console.log('destroyed', this);
    },
    // render(h) {
    //     // throw new TypeError('render error');
    //     // console.log('render function invoked');
    //     // return h('div', {}, this.text);
    // },
    renderError(h, err) {
        return h('div', {}, err.stack);
    },
    errorCaptured() {
        // 会向上冒泡，并且正式环境可以使用
    }
});

// setInterval(() => {
//     app.$data.text += 1;
// }, 1000);

setTimeout(() => {
    app.$destroy();
}, 2000);
