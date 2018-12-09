<template>
    <div id="app">
        <div id="cover" />
        <Header />
        <router-link to="/login">login</router-link>
        <router-view></router-view>
        <Footer />
    </div>
</template>

<script>
import Header from './layout/header.vue';
import Footer from './layout/footer.vue';

export default {
    components: {
        Header,
        Footer
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
