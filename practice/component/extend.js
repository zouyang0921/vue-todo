import Vue from 'vue';

const component1 = {
    name: 'component1',
    template: `
        <div>
            <input type="text" v-model="text">
            <span>{{propOne}}</span>
            <span v-show="active">see me if active</span>
        </div>
    `,
    data() {
        return {
            text: 0
        };
    },
    props: {
        active: Boolean,
        propOne: String
    }
};

const component2 = {
    extends: component1,
    data() {
        return {
            text: 1
        };
    },
    mounted() {
        console.log('component2--parent: ', this.$parent.$options.name); // Root
    }
};

const parent = new Vue({
    name: 'parentComp'
});

// const CompVue = Vue.extend(component1);

// new CompVue({
//     el: '#root',
//     propsData: {
//         propOne: 'xxx'
//     },
//     data: {
//         text: 123
//     },
//     mounted() {
//         console.log('compVue mounted');
//     }
// });

new Vue({
    name: 'Root',
    parent: parent,
    el: '#root',
    template: `
        <div>
            <span>{{text}}</span>
            <comp></comp>
        </div>
    `,
    data: {
        text: 6666
    },
    components: {
        Comp: component2
    },
    mounted() {
        console.log(this.$parent.$options.name);
    }
});
