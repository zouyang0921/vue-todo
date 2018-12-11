<template>
    <div id="app">
        <div id="cover" />
        <Header />
        <!-- <p>{{counter}}</p> -->
        <p>{{count}}</p>
        <!-- <p>{{fullName}}</p> -->
        <p>{{textA}}</p>
        <!-- <p>{{textPlus}}</p> -->
        <router-link to="/login">login</router-link>
        <router-view></router-view>
        <Footer />
    </div>
</template>

<script>
import {
    mapState,
    mapGetters,
    mapActions,
    mapMutations
} from 'vuex';
import Header from './layout/header.vue';
import Footer from './layout/footer.vue';

export default {
    components: {
        Header,
        Footer
    },
    computed: {
        // mapState 的几种写法：
        // ...mapState({
        //     counter: 'count'
        // })
        // ...mapState(['count'])
        ...mapState({
            count: state => state.count
        }),
        ...mapGetters(['fullName', 'textPlus']),
        textA() {
            return this.$store.state.a.text;
        }
    },
    methods: {
        ...mapMutations(['updateCount', 'a/updateText']),
        ...mapActions(['updateCountAsync', 'a/add'])
    },
    mounted() {
        // action 的用法：
        // this.$store.dispatch('updateCountAsync', {
        //     num: 5,
        //     time: 2000
        // });
        // this.updateCountAsync({
        //     num: 5,
        //     time: 2000
        // });

        // mutation 的用法：
        // this.updateCount({
        //     num1: 666
        // });
        // this.updateText(1111111);
        this['a/updateText'](1111111); // namespaced 的写法
        // this.add();
        this['a/add'](); // namespaced 的写法
    }
};
</script>

<style lang="less" scoped>
#app {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
}
#cover {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background:rgba(0, 0, 0, .2);
    z-index: -1;
}
</style>
