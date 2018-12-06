import Vue from 'vue';

new Vue({
    el: '#root',
    // template:
    //     `<div :id="aaa" @click="handleClick">
    //         <p v-html="html"></p>
    //         <p>{{html}}</p>
    //     </div>`,
    template:
        `<div :class="{active: isActive, red: !isActive}">
        </div>`,
    data: {
        aaa: 'main',
        html: '<span>123</span>',
        isActive: false
    },
    methods: {
        handleClick() {
            alert('clicked'); // eslint-disable-line
        }
    }
});
