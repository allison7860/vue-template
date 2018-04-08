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


@media ( max-width: 900px ) {
  img {
    float:none !important;
    display:block;
    margin:10px auto;
  }
}
</style>
