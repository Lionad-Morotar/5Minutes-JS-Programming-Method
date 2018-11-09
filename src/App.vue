<template>
    <div id="app"><Methods /></div>
</template>

<script>
import Methods from './pages/Methods.vue'
export default {
    name: 'app',
    components: {
        Methods,
    },
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
}
#app {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background: #222;
    color: #eee;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
}
</style>
