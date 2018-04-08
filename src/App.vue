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
  background:#f0ebe6;
  margin:0;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2d2d2d;
  line-height:165%;
  font-size:13pt;
}
h1,h2,h3,h4,h5,h6, h1 a, h2 a, h3 a, h4 a, h5 a, h6 a{
  color:#2d2d2d;
  font-weight:normal;
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
  margin:4em auto;
  max-width:80%;
  min-height:600px;

}
textarea {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
@media ( max-width: 900px ) {
  #wrapper {
    margin: 20px auto;
    max-width:100%;
    padding:5px;
  }
}

</style>
