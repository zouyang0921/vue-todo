import Vue from 'vue';

const component = {
    props: {
        active: {
            type: Boolean,
            required: true
        },
        propOne: String
    },
    template: `
        <div>
            <input type="text" v-model="text">
            <span @click="handleChange">{{propOne}}</span>
            <span v-show="active">see me if active</span>
        </div>
    `,
    data() {
        return {
            text: 0
        };
    },
    methods: {
        handleChange() {
            this.$emit('change');
        }
    }
};

new Vue({
    el: '#root',
    template: `
        <div>
            <comp-one :active="true" :prop-one="prop1" @change="handleChange" ref="comp1"></comp-one>
        </div>
    `,
    data: {
        prop1: 'text1'
    },
    components: {
        CompOne: component
    },
    methods: {
        handleChange() {
            this.prop1 += 1;
        }
    },
    mounted() {
        console.log(this.$refs.comp1);
    }
});
