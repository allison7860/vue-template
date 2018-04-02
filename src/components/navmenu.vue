<template>
  <div class="navmenu">
    <div class="logo">
        <h1><router-link :to="{name: 'comp1'}">RetroSpec</router-link></h1>
    </div>
    <div class="menu">
        <ul>
            <li v-for="(item,index) in menuList"><a @click.prevent="toggle(index, item)" href="#">{{item.name}} 
            <!--{{item.active}}-->
            </a>

                <ul v-show="menuList[index].active" @mouseleave="mouseOver">
                <div class="arrow"></div>
                    <li v-for="y in item.sub"><router-link :to="y.href">{{y.name}}</router-link></li>
                </ul>
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'navmenu',
  data () {
    return {
        menuList: [
            {
                name: 'articles', 
                sub: [{id: 1, name: 'read', href: 'articles'},
                      {id: 2, name: 'post', href: 'post'}],
                active:false
             },
            {
                name: 'about', 
                sub: [{id: 1, name: 'what is this?', href:'about'}, 
                      {id: 2, name: 'for you', href:'you'}], 
                      active:false
            },
            {
                name: 'contact', 
                sub: [{id: 1, name: 'mail', href: 'contact'},
                {id: 2, name: 'faq', href: 'faq'}, 
                {id: 3, name: 'submit', href: 'submit'}], 
                active:false
            },
        ]
    }
  },
   methods: {
        toggle (index, item) {

            // alert(this.menuList.indexOf(item))

            for ( var i = 0; i < this.menuList.length; i++ ) {
                if (this.menuList[i].active == true) {
  
                    this.menuList[index].active = !this.menuList[index].active;
                    this.menuList[i].active = false;

                } else {
                    this.menuList[index].active = !this.menuList[index].active;
                }
            }

        },
        mouseOver: function () {
            for ( var i = 0; i < this.menuList.length; i++ ) {
                if (this.menuList[i].active == true) {
                    this.menuList[i].active = false; 
                } 
            }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navmenu {
    width:100%;
    background:#2d2d2d;
    display:flex;
    display:-ms-flex;
    align-items: center;
    box-shadow: 0 0 29px #000;
}
.logo {
    background:#00f;
}
.logo h1 a{
    padding:20px;
    text-align:right;
    margin:0;
    color:#2d2d2d;
    text-transform:uppercase;
}
.menu {
    
}
ul {
    list-style:none;
    margin:0;
    padding:0;
    position:relative;
}
ul li {
    display:inline-block;
    margin-left:40px;
}
ul li a {
    color:#00f;
    text-decoration:none;
}
ul ul {
    position:absolute;
    margin-top:10px;
    background:#ee0;
    margin-left:-20px;
}
ul ul li {
    margin:0;
    display:block;
    min-width:90px;
}
ul ul li a {
    display:block;
    padding:5px;
}
.arrow {
    height:10px;
    background:#eee;
}
</style>
