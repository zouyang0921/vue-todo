<template>
    <div class="footer">
        <span>Written by {{author}}</span>
    </div>
</template>

<script>
export default {
    data () {
        return {
            author: 'zouyang'
        };
    }
};
</script>

<style lang="less" scoped>
.footer {
    position: fixed;
    bottom: 20px;
    left: 50%;
    margin-left: -50px;
    margin-top: 40px;
    text-align: center;
    color: #bfbfbf;
    font-size: 12px;
}
</style>
