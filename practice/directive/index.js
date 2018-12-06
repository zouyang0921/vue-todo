import Vue from 'vue';

new Vue({
    el: '#root',
    template: `
        <div>
            <div>Text: {{text}}</div>
            <input type="text" v-model="text">
            <input type="checkbox" v-model="active">
            <div>
                <input type="checkbox" :value="1" v-model="arr">
                <input type="checkbox" :value="2" v-model="arr">
                <input type="checkbox" :value="3" v-model="arr">
            </div>
            <div>
                <input type="radio" value="one" v-model="picked">
                <input type="radio" value="two" v-model="picked">
                <input type="radio" value="three" v-model="picked">
            </div>
            <ul>
                <li v-for="(item, index) in arr" :key="item">{{item}}: {{index}}</li>
            </ul>
            <ul>
                <li v-for="(val, key, index) in obj">{{val}} : {{key}} : {{index}}</li>
            </ul>
        </div>`,
    data: {
        text: 0,
        active: false,
        arr: [1, 2, 3],
        picked: '',
        obj: {
            a: 'aaa',
            b: 'bbb',
            c: 'ccc'
        }
    }
});
