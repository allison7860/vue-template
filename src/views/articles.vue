<template>
  <div class="article">
    <div class="sidebar">
    <h4>Tags</h4>
      <ul>
        <li v-for="x in json">
          <router-link 
          v-for="s in x.tags" 
          @click.native="cat(s)" 
          :to="{name: 'tag', params: {tag: s}}">{{s}}</router-link>
        </li>
      </ul>
    </div>
    <div class="card-container">
      <div class="article-header">
        <h1 class="header1">Articles</h1>
      </div>
      <div class="card" 
      v-for="x in json" 
      v-if="x.active == true">
        <p class="header-date">{{x.date}}</p>
        <div class="photo" v-bind:style="{backgroundImage: 'url(' + x.picture + ')' }">
          <router-link :to="{name: 'single', params: {id: x.id}}"></router-link>
        </div>
        <div class="info">
          <h3 class="card-header">{{x.header}}</h3>
          <p>{{x.info.slice(0, 100)}}...</p>
        </div>
      </div>
    </div>
      <router-view></router-view>
  </div>
</template>

<script>
import json from '@/assets/article-date.json'
export default {
  name: 'articles',
  data () {
    return {
      json: json
    }
  },
  methods: {
    cat: function (x) {
      for ( var d = 0; d < json.length; d++ ) {
         json[d].active = false;
        for ( var s = 0; s < json[d].tags.length; s++ ) {
          // Tags inside json data
          if ( json[d].tags[s] == x ) {
            json[d].active = !json[d].active;
          }

          // Remove duplicates here...
        
        }

          // unqie = json[d].tags.reduce(function ( item, pos) {
          //   if (item.indexOf(pos) < 0 ) item.push(pos);
          //   return item;
          // });




      }
    }
  },
  beforeMount() {
    for ( var x = 0; x < json.length; x++ ) {
      if ( json[x].active == false) {
        json[x].active = true;
      }
    }
  }
}
</script>

<style scoped>
img {
  width:200px;
  height:auto;
}

.article {
  display:flex;
  display:-ms-flex;
  align-items: flex-start;
  justify-content:space-between;
}
.sidebar {
  min-width:250px;
}
.sidebar h4 {
  padding:0; 
  margin:0;
}

.card-container {
  display:flex;
  display:-ms-flex;
  justify-content:space-around;
  margin:0 auto;
  flex-flow: row wrap;
  width:90%;
}
.card {
  background:#fff;
  width:250px;
  border-radius:10px;
  border:2px solid #fff;
  box-shadow:0 0 10px #ddd;
  padding:5px;
}
.photo, .info {
  display:block;
}
.photo {
  min-height:200px;
  background-size:cover;
  background-repeat:no-repeat;
  position:relative;
}
.photo a {
  position:absolute;
  top:0;
  bottom:0;
  left:0;
  right:0;
}
.info {
  min-height:100px;
  max-height:100px;
  overflow:auto;
  font-size:9pt;
  line-height:150%;
}

.info::-webkit-scrollbar {
    width: 1em;
}

.info::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px #ddd;
      border-radius:10px;
}
 
.info::-webkit-scrollbar-thumb {
  background-color: #00e;
  outline: 1px solid slategrey;
  border-radius:10px;
}

.card {
  min-height:150px;
  margin:10px 0;
}

.card-header {
  margin: 10px 0;
}
.info p {
  margin:0;
}

.article-header {
  background:#b09893;
  flex: 0 0 100%;
  overflow:auto;
  width:100%;
  padding:10px;
  margin:0 0 20px 0;
}

.header1 {
  color:#fff;
  margin:0;
  padding:0;
}
.header-date {
  color:#2d2d2d;
  margin:0;
  font-size:9pt;
  text-align:right;
}

.sidebar ul {
  max-width: 250px;
  list-style: none;
  padding: 10px;
  margin: 0;
}
.sidebar ul li {
  display:inline-block;
}
.sidebar ul li a {
  word-break:break-all;
  font-size:8pt;
  background:#b09893;
  padding:2px;
  margin:2px;
  color:#fff;
  border-radius:5px;

}

@media ( max-width:900px ) {
  .article {
    display:block;
  }
  .sidebar ul {
      max-width:100%;
  }
  .sidebar, .card-container {
    width:100%;
  }
}


</style>

