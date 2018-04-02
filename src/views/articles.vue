<template>
  <div class="article">
    <div class="sidebar">
      <ul>
        <li v-for="x in tags">
          <router-link @click.native="cat(x)" :to="{name: 'tag', params: {tag: x}}">{{x}}</router-link>
        </li>
      </ul>
    </div>
    <div class="card-container">
      <div class="article-header">
        <h1 class="header1">Articles</h1>
      </div>
      
      <div class="card" v-if="item.active == true" v-for="item in pictures">
        <p class="header-date">{{item.date}}</p>
        <div class="photo" v-bind:style="{backgroundImage: 'url(' + item.picture + ')' }">
          <router-link :to="{name: 'single'}"></router-link>
        </div>
        <div class="info">
          <h3 class="card-header">{{item.header}}</h3>
          <p>{{item.info}}</p>
        </div>
      </div>
    </div>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'articles',
  data () {
    return {
      pictures: [
        {id: 1, picture: 'https://78.media.tumblr.com/1bbe4942634bc16f982c143428401ced/tumblr_p2s5quh85Q1s2clnyo1_1280.jpg', header: 'Great Walls of ..', info: 'This picture is the great known halls of Abraham. The scene speaks a lot of riddles of the times of that era. Even though it has been modernized it is still a precious piece. This picture is the great known halls of Abraham. The scene speaks a lot of riddles of the times of that era. Even though it has been modernized it is still a precious piece.', date: '03/31/2017', tags: ['Modern History', 'Ancient History'], active: false},
        {id: 2, picture: 'https://78.media.tumblr.com/7a7012cb0f79ca37c623add08e5680f2/tumblr_p5afcwlPDM1snegd3o1_1280.jpg', info: 'Hello there', date: '03/31/2017', tags: ['Academic History', 'Points of Views'], active: false},
        {id: 3, picture: 'https://78.media.tumblr.com/04a4f65fcfc28dfecef77215f9e08235/tumblr_p59rsqRI1Y1ws72bco1_1280.jpg', info: 'Hello there', date: '03/29/2017', tags: ['Opinions', 'Ancient History', 'Modern History'], active: false}
      ],
      tags : [
        'Ancient History', 'Modern History', 'Points of Views', 'Opinions', 'Academic History'
      ]
    }
  },
  methods: {
    cat: function (x) {
      for ( var d = 0; d < this.pictures.length; d++ ) {
          this.pictures[d].active = false;
        for ( var s = 0; s < this.pictures[d].tags.length; s++ ){
          // Tags inside pictures

          if ( this.pictures[d].tags[s] == x ) {
            // alert(this.pictures[d])
            this.pictures[d].active = !this.pictures[d].active;

          }
        }
      }
    }
  },
  beforeMount() {
    for ( var x = 0; x < this.pictures.length; x++ ) {
      if ( this.pictures[x].active == false) {
        this.pictures[d].active = !this.pictures[d].active;
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
}
.sidebar {
  background:#2d2d2d;
  border-radius:10px;
  min-width:200px;
}

.card-container {
  display:flex;
  display:-ms-flex;
  justify-content:space-around;
  margin:0 auto;
  flex-flow: row wrap;
}
.card {
  width:250px;
  border-radius:10px;
  border:2px solid #fff;
  box-shadow:0 0 10px #ddd;
}
.photo, .info {
  display:block;
  margin:5px;
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
  background:#00e;
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
.sidebar ul li a{
  font-size:10pt;
  background:#eee;
  padding:2px;
  margin:2px;
  color:#00e;
  border-radius:5px;

}


</style>

