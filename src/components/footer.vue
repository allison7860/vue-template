<template>
  <div class="footermenu">
    <ul>
        <li><router-link :to="{name: 'comp1'}">Home</router-link></li>
        <li><router-link :to="{name: 'articles'}">Articles</router-link></li>
        <li><router-link :to="{name: 'post'}">Submit an Post</router-link></li>
        <li><router-link :to="{name: 'about'}">About Us</router-link></li>
        <li><router-link :to="{name: 'mail'}">Contact</router-link></li>
        <li><router-link :to="{name: 'faq'}">FAQ</router-link></li>
    </ul>
    <ul>
        <li><a href="#">Hiii</a></li>
    </ul>
    <ul>
        <li><a href="#">Hiii</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'footermenu',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.footermenu {
    min-height:250px;
    background:#2d2d2d;
    display:flex;
    display:-ms-flex;
    justify-content: space-around;
    align-items:center;
}

ul {
    list-style:none;
    margin:0;
    padding:0;
}
a {
    color:yellow;
}

</style>
