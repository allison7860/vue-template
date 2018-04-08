<template>
  <div class="navmenu">
    <div class="logo">
        <h1><router-link :to="{name: 'comp1'}">RetroSpec</router-link></h1>
    </div>
    <div class="menu">
    <div class="hidden" @click="show = !show">
        <div v-show="show" class="hidden-menu">
        <span class="hidden-items" v-for="(item, index) in menuList">
            <a @click="toggle(index, item)" href="#">{{item.name}}</a></span>
    
        
        
        
        </div>
    </div>
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
        show:false,
        menuList: [
            {
                name: 'articles', 
                sub: [{id: 1, name: 'read', href: '/articles'},
                      {id: 2, name: 'post', href: '/post'}],
                active:false
             },
            {
                name: 'about', 
                sub: [{id: 1, name: 'what is this?', href:'/about'}, 
                      {id: 2, name: 'for you', href:'/you'}], 
                      active:false
            },
            {
                name: 'contact', 
                sub: [{id: 1, name: 'mail', href: '/contact'},
                {id: 2, name: 'faq', href: '/faq'}], 
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
/* tumblr https://78.media.tumblr.com/0e78b64e4a9b5ed18708fb339f20ce6e/tumblr_p61fdwatzX1skhm00o1_1280.jpg */
.logo {
    background:url('https://78.media.tumblr.com/0e78b64e4a9b5ed18708fb339f20ce6e/tumblr_p61fdwatzX1skhm00o1_1280.jpg') 100% 50% / cover no-repeat;
}
.logo h1 a{
    padding:20px;
    font-weight:bold !important;
    text-align:right;
    margin:0;
    color:#ee0;
    text-transform:uppercase;
}
.menu {
    
}
ul {
    list-style:none;
    margin:0;
    font-size:16pt;
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
ul li a:active {
    color:#fff;
}
ul ul {
    position:absolute;
    background:#2d2d2d;
    margin:21px 0 0 -20px;
    font-size:13pt;
}
ul ul li {
    margin:0;
    display:block;
    border-bottom:2px solid #00e;
    min-width:120px;
    transition:.2s ease-in;
}
ul ul li:last-child {
    border-bottom:none;
}
ul ul li:hover {
    background:#00e;
}
ul ul li a {
    color:#fff;
    display:block;
    padding:5px;
}
.hidden {
    display:none;
}

@media (max-width:900px ) {
    .logo h1 a {
        font-size:20pt;
        padding:10px;
    }
    ul {
        display:none;
    }
    .hidden {display:block; height:auto;
     width:auto;
     color:#ee0;
     background:#2d2d2d;
     position:fixed; 
     top:20px;
     right:0;
     padding:5px 5px 5px 10px;
     cursor:pointer;
     z-index:100;

     }
     .hidden::after {
         content:'menu';
     }

     .hidden-menu {
            position:fixed;
            overflow:auto;
            width:100%;
            background:#fff;
            z-index:99;
            left:0;
            top:75px;
     }
     .hidden-items a {
         color:#2d2d2d;
         display:block;
         text-align:right;
         transition:.2s ease-in;
         padding-right:5px;
     }
     .hidden-items a:hover {
         background:#ee0;
     }
}
</style>
