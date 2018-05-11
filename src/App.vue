<template>
  <div id="app">
    <productlist></productlist>
  </div>
</template>

<script>
import productlist from './components/productlist';

export default {
  name: 'App',
  components: {
    productlist,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
