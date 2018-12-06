import Vue from 'vue';

const app = new Vue({
    el: '#root',
    template: `
        <div>
            <p>Name: {{name}}</p>
            <p>FullName: {{fullName}}</p>
            <p>FirstName: <input type="text" v-model="firstName"></p>
            <p>LastName: <input type="text" v-model="lastName"></p>
            <p>Name: <input type="text" v-model="name"></p>
            <p>Obj.a: <input type="text" v-model="obj.a"></p>
        </div>
    `,
    data: {
        firstName: 'Young',
        lastName: 'Zou',
        fullName: '',
        obj: {
            a: 0
        }
    },
    computed: {
        name: {
            get() {
                console.log('new name');
                return `${this.firstName} ${this.lastName}`;
            },
            set(name) {
                const names = name.split(' ');
                this.firstName = names[0];
                this.lastName = names[1];
            }
        }
    },
    methods: {
        getName() {
            console.log('getName invoked');
            return `${this.firstName} ${this.lastName}`;
        },
    },
    watch: {
        // obj: {
        //     handler() {
        //         console.log('obj changed');
        //     },
        //     deep: true
        // },
        'obj.a': {
            handler() {
                console.log('obj.a changed');
            },
            immediate: true
        }
    }
});

setInterval(() => {
    app.$data.obj.a += 1;
}, 1000);
