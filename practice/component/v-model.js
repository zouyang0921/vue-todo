import Vue from 'vue';

const component = {
    model: {
        prop: 'value1',
        event: 'change'
    },
    props: ['value1'],
    template: `
        <input type="text" @input="handleInput" :value="value1">
    `,
    methods: {
        handleInput(e) {
            this.$emit('change', e.target.value);
        }
    }
};

new Vue({
    el: '#root',
    data: {
        value: 123
    },
    template: `
        <div>
            <comp-one v-model="value" @change="handleChange"></comp-one>
        </div>
    `,
    components: {
        CompOne: component
    },
    methods: {
        handleChange(val) {
            console.log(val);
        }
    }
});
