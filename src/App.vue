<template>
  <div id="app">
    <navmenu></navmenu>
      <div id="wrapper">
        <router-view/>
      </div>
    <footermenu></footermenu>
  </div>
</template>

<script>
import navmenu from '@/components/navmenu'
import footermenu from '@/components/footer'
export default {
  name: 'App',
  components: {
    navmenu,
    footermenu
  }
}
</script>

<style>
*, *::before, *::after {
  box-sizing:border-box;
}
body {
  margin:0;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  line-height:165%;
}
a {
    color:#eee;
    text-decoration:none;
    transition:.2s ease-in;
}
a:hover {
    color:#eee;
}
#wrapper {
  margin:40px auto;
  max-width:80%;
  min-height:600px;

}
@media ( max-width: 900px ) {
  #wrapper {
    margin: 20px auto;
    max-width:100%;
    padding:5px;
  }
}

</style>
