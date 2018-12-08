import Vue from 'vue';

const component = {
    name: 'comp',
    props: ['props1'],
    data() {
        return {
            style: {
                width: '200px',
                height: '200px',
                border: '1px solid #ccc'
            },
            value: 'component value'
        };
    },
    // template: `
    //     <div :style="style">
    //         <slot></slot>
    //         {{props1}}
    //     </div>
    // `,
    render(createElement) {
        return createElement(
            'div',
            {
                style: this.style,
                on: {
                    click: () => {
                        this.$emit('click');
                    }
                }
            },
            [
                this.$slots.default,
                this.props1
            ]
        );
    }
};

new Vue({
    el: '#root',
    components: {
        CompOne: component
    },
    data: {
        value: '123'
    },
    // template: `
    //     <comp-one ref="comp">
    //         <span ref="span">{{value}}</span>
    //     </comp-one>
    // `,
    render(createElement) {
        return createElement(
            'comp-one',
            {
                ref: 'comp',
                props: {
                    props1: this.value
                },
                // on: {
                //     click: this.handleClick
                // },
                nativeOn: {
                    click: this.handleClick
                }
            },
            [
                createElement(
                    'span',
                    {
                        ref: 'span',
                        attrs: {
                            id: 'test-id'
                        }
                    },
                    this.value
                )
            ]
        );
    },
    methods: {
        handleClick() {
            console.log('clicked');
        }
    }
});
