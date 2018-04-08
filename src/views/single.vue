<template>
  <div class="single">
    <h1>{{json[grab-1].header}}</h1>
    <p><strong>WRITTEN BY: </strong>{{json[grab-1].author}}</p>
    <em>{{json[grab-1].date}}</em>
    <img :src="json[grab-1].picture" style="width:200px; height:auto; float:right"><p v-show="grab" v-if="json[grab-1].info">{{json[grab-1].info}}</p>
  </div>
</template>

<script>
import json from '@/assets/article-date.json'
export default {
  name: 'single',
  data () {
    return {
      json: json,
      grab: function () {
        return window.location.href.substr(window.location.href.lastIndexOf('/') + 1);
      }()
    }
  }
}
</script>

<style scoped>

img {
  box-shadow: 0 0 0 2px #a9a9a9;
  margin:10px;
  border-image:url('https://vectr.com/allison7860/f6xJ6MDRc.svg?width=362&height=522&select=f6xJ6MDRcpage0') 20 fill / 10px / 25px round;
}

@media ( max-width: 900px ) {
  img {
    float:none !important;
    display:block;
    margin:10px auto;
  }
}
</style>
