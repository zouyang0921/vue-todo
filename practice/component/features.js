import Vue from 'vue';

const ChildComponent = {
    template: '<div>child component: {{data.value}}</div>',
    inject: ['grandpa', 'data'],
    mounted() {
        console.log(this.grandpa, this.data);
    }
};

const component = {
    name: 'comp',
    components: {
        ChildComponent
    },
    // template: `
    //     <div :style="style">
    //         <div class="header">
    //             <slot name="header"></slot>
    //         </div>
    //         <div class="body">
    //             <slot name="body"></slot>
    //         </div>
    //     </div>
    // `,
    template: `
        <div :style="style">
            <slot :value="value" aaa="111"></slot>
            <child-component />
        </div>
    `,
    data() {
        return {
            style: {
                width: '200px',
                height: '200px',
                border: '1px solid #ccc'
            },
            value: 'component value'
        };
    }
};

new Vue({
    el: '#root',
    components: {
        CompOne: component
    },
    provide() {
        const data = {};
        Object.defineProperty(data, 'value', {
            get: () => this.value,
            enumerable: true
        });
        return {
            grandpa: this,
            data
        };
    },
    data: {
        value: '123'
    },
    // template: `
    //     <div>
    //         <comp-one>
    //             <span slot="header">this is header</span>
    //             <span slot="body">this is body</span>
    //         </comp-one>
    //     </div>
    // `,
    template: `
        <div>
            <comp-one ref="comp">
                <span slot-scope="props" ref="span">{{props.value}} {{props.aaa}} {{value}}</span>
            </comp-one>
        </div>
    `,
    mounted() {
        console.log(this.$refs.comp, this.$refs.span);
    }
});
