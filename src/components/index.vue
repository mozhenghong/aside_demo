<template>
    <el-scrollbar wrap-class="scrollbar-wrapper">
        <el-menu
                :default-active="$route.path"
                @open="handleOpen"
                @close="handleClose"
                mode="vertical"
        >
            <asidenav :routes="routes" ></asidenav>
        </el-menu>
    </el-scrollbar>
</template>

<script>
    import asidenav from './asidenav';

    export default {
        name: 'sidebar',
        components: {
           asidenav
        },
        computed: {
            routes() {
                return this.$router.options.routes
            }
        },
        created() {
            console.log('this.routes', this.$router);
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>

<style scoped lang="scss">

</style>
