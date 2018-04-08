<template>
  <div class="comp1">
    
    <div class="sidebar">
      <div class="col join">
        <h2>Join the Historic Adventures!</h2>
        <router-link class="contribute" :to="{name: 'post'}">Contribute!</router-link>
      </div>
      <div class="col recent">
        <h2>Recent Posts <span class="more"><router-link :to="{name: 'articles'}"></router-link></span></h2>
        <ul>
          <li v-for="x in json"><router-link class="title" :to="{name: 'single', params: {id: x.id}}">{{x.header}} <span class="date">{{x.date}}</span></router-link></li>
        </ul>
      </div>

    <div class="col today">
      <h2>History for Today</h2>
        <p>There is history in the making right at this moment! Besides all policitial takes, there is <strong>science</strong>, <strong>new discoveries</strong>, <strong>space exploration</strong>, and lots more!</p>
    </div>

    </div>
    <div class="article">
    <h1>Do you enjoy writing?</h1>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima, amet dolore eaque iste odio quidem corporis officia accusantium a maiores dignissimos? Ratione ut magnam accusantium rem laboriosam iusto quos repellendus. Eos repudiandae laudantium ipsam deserunt qui blanditiis voluptatibus maiores atque! Fugit animi dolorum harum nulla voluptatem quod amet minima quis. Pariatur quibusdam similique autem debitis dicta quo possimus quaerat excepturi!
    Incidunt maxime ab voluptatem illum earum perspiciatis ad quas quod deserunt! Culpa porro beatae voluptatum sed error veritatis, at corrupti tenetur libero commodi! Modi molestias, eum laudantium ab aut commodi!
    Quis eos maxime, ipsam, voluptatibus delectus optio rerum natus excepturi porro minus temporibus cupiditate, alias officiis sapiente. Deleniti ab laboriosam at ducimus! Totam sapiente asperiores similique sit laborum! Possimus, aliquam.
    Quisquam aliquid praesentium molestias a temporibus error officiis nam quos consequatur et eos exercitationem inventore fugiat illum explicabo necessitatibus, omnis deleniti aspernatur repudiandae. Autem obcaecati, itaque doloribus consequatur officiis quas.</p>
    <h1>What about history?</h1>
    <p>Repellendus distinctio blanditiis vitae placeat tenetur magni corporis magnam iusto alias asperiores iste enim unde aliquam sint earum debitis dignissimos laudantium optio dolor, in explicabo. Nemo corporis ut totam sunt.
    Sunt at asperiores rem, ullam facere fugiat voluptatum magnam iure placeat soluta dolorem cumque inventore saepe eum sapiente blanditiis laudantium repellat officia ut consectetur nemo expedita eos aliquam? Ipsa, debitis.
    Molestias expedita, eum blanditiis voluptas tenetur ea magnam dicta aperiam qui dolores nesciunt fugit? Aliquam nihil corporis fugiat magni voluptas maxime officia, at maiores, aut similique incidunt, quas ab reiciendis?
    Aspernatur ipsa, voluptates delectus sint ea temporibus, possimus, optio quibusdam a quod ex explicabo. Voluptas, incidunt, omnis officiis quod sapiente eligendi tempora natus esse temporibus repudiandae consectetur laboriosam, blanditiis dolores?
    Quia iusto assumenda reprehenderit expedita, minus saepe laboriosam eum repellat tempore perspiciatis itaque voluptatem excepturi voluptatum, magnam quis dolorum, consequuntur iste. Aliquid laborum sit nobis dolor perspiciatis tenetur quia odit?</p>
    </div>
    
  </div>
</template>

<script>
import json from '@/assets/article-date.json'
export default {
  name: 'comp1',
  data () {
    return {
      json:json
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.comp1 {
  display:flex;
  display:-ms-flex;
  justify-content:center;
  align-items:stretch;
}
.sidebar, .article {
  margin:5px;
  padding:10px;
}
.sidebar {
  width:30%;
  display:flex;
  display:-ms-flex;
  flex-flow:column;
}
.col {
    background:#fff;
    margin-bottom:10px;
    padding:10px;
}
.article {
  width:70%;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: block;
  margin: 0 10px;
}
a {
  color: #b09893;
}
.title {
  position:relative;
  font-weight:bold;
}
.date {
  font-size:9pt;
}
.recent h2 {
  position:relative;
}
.more {
  position: absolute;
  right: 0;
  height: 30px;
  width: 46px;
  background: url('https://vectr.com/allison7860/chFKbVOTs.svg?width=72&height=76&select=chFKbVOTspage0') 0 0 / 70% 100% no-repeat;
}
.contribute {
  background: #b09893;
  display: table;
  margin: 0 auto;
  padding: 10px;
  color:#2d2d2d;
  border-radius:10px;
  font-size:15pt;
}
@media (max-width:900px) {
  .comp1 {
    display:block;
  }
  .sidebar, .article {
    width:100%;
    margin:0;
  }
}
</style> 
