import Vue from 'vue';

new Vue({
    el: '#root',
    // template:
    //     `<div :id="aaa" @click="handleClick">
    //         <p v-html="html"></p>
    //         <p>{{html}}</p>
    //     </div>`,
    template:
        `<div
            :class="{active: isActive, red: !isActive}"
            :style="[styles, styles2]"
        >
            <p>{{getJoinedArr(arr)}}</p>
        </div>`,
    data: {
        aaa: 'main',
        html: '<span>123</span>',
        isActive: false,
        styles: {
            color: 'red'
        },
        styles2: {
            color: 'blue'
        },
        arr: [1, 2, 3]
    },
    methods: {
        handleClick() {
            alert('clicked'); // eslint-disable-line
        },
        getJoinedArr(arr) {
            return arr.join(' ');
        }
    }
});
