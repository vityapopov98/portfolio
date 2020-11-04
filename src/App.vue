<template>
  <div id="app">
       <nav class="navbar ">
            <!-- <div class="logo">
                <img src="images/nike-logo.png" alt="" srcset="">
            </div> -->
            <div class="right-menu-small">
                <div class="menu-btn" @click="openMenu()">
                        <i class="material-icons">
                            menu
                            </i>
                </div>
            </div>

            <div class="links menu-hidden" :class="{'links menu-hidden': !isOpen, 'links menu-open': isOpen}">
                <router-link to="/">
                    Дизайн
                </router-link>
                <a href="">Разработка</a>
                <a href="">Сувениры</a>
                <a href="">Контакты</a>
                <div class="hide-menu-btn" @click="closeMenu()">
                   
                        <i class="material-icons">
                            close
                            </i>

                </div>
            </div>
        </nav>


    <!-- <HelloWorld msg="Welcome to Your Vue.js App" v-show="!isOpen" /> -->
      <router-view/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
  },
  data(){
    return {
      isOpen: false
    }
  },
  methods:{
   openMenu(){
       this.isOpen = true
   },
   closeMenu(){
       this.isOpen = false
   }
  }
}
</script>

<style>
html, body{
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', 'sans-serif';
    overflow-x: hidden;
}

@media(prefers-color-scheme: dark){
    body{
      color: white !important;
      background-color: #111111;
    }
    .navbar{
        background-color: #111111 !important;
        display: flex;
        overflow: hidden;
        border-bottom: 1px solid #636363;
        
        z-index: 111;
    }
    .links{
        background-color: #111111 !important;
        color: white;
    }
    .links a{
        color: white !important;
    }
  }
  @media(prefers-color-scheme: light){
      .navbar{
        border-bottom: 1px solid #e8e8e8;
    }
  }
/* верхний навбар */
.material-icons{
    font-size: 1.7rem;
}
/* главный навбар */


.navbar{
    background-color: white;
    display: flex;
    overflow: hidden;
    width: 100%;
    box-sizing: border-box;;
    z-index: 111;
    position: fixed;
}
.navbar img{
    width: 4rem;
    height: 1.5rem;
}
.navbar a{
    display: inline-block;
    padding: 0 1rem;
    color: black;
    text-decoration: none;
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: 400;
}
.logo{
    padding: 0.5rem 1rem;
    display: flex;
    align-items: center;
    width: 15rem;
}
.links{
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-grow: 3;
}
/* Links on cards */
a{
    color: white;
    text-decoration: none;
    margin: 0%;
    padding-top: 0%;
}
a>h2{
    margin: 8px 0;
}

/* end links on cards */
.search{
    display: flex;
    justify-content: flex-end;
    padding: 0 1rem;
    width: 15rem;
}
.search-input input:focus{
    width: 11rem;
    transition: .5s;
}
.search-input{
    border: 1px solid #cdcdcd;
    display: flex;
    align-items: center;
    padding-left: .5rem;
    margin: .5rem 0;
}
.navbar input{
    padding: .7rem;
    width: 9rem;
    border: none;
    outline: none;
}
.links a{
    line-height: 4rem;
}
.links a:hover{
    line-height: 60px;
    border-top: 2px solid rgb(255, 255, 255);
    border-bottom: 2px solid black;
}

/* __________Просто стили__________ */
.container{
    width: 90%;
    box-sizing: border-box;
    margin: auto;
}
.row{
    padding-top: 1rem;
    display: flex;
    width: 100%;
    box-sizing: border-box;
}


/* кнопки для навбара в мобильном режиме */
.hide-menu-btn{
    display: none;
}
.menu-btn{
    display: none;
}
a.signin{
    display: none;
}
a.cart{
    display: none;
}
.search-btn{
    display: none;
}
/* ______Адаптивность_____ */

@media (max-width: 950px){
    .navbar{width: 100%;}
    .right-menu-small{
        display: flex;
        justify-content: flex-end;
        flex-grow: 1;
        padding: .5rem;
    }
     /* кнопки для навбара */
     a.signin{
        display: block;
    }
    a.cart{
        display: block;
    }
    .search-btn{
        display: block;
    }

    /* навбар */
    .menu-btn{
        display: block;
    }
    .hide-menu-btn{
        display: block;
        position: absolute;
        top: 25px;
        right: 50px;
    }
    .menu-hidden{
        right: -100%;
        transition: .7s;
    }
    .menu-open{
        right: 0;
        transition: .7s;
    }
    .hide-banner{
        visibility: hidden;
        right: 100%;
        transition: .7s;
    }
    .show-banner{
        visibility: visible;
        right: 0;
        transition: .7s;
    }
    .links{
        position: fixed;
        height: 100vh;
        width: 100%;
        background-color: rgb(255, 255, 255);
        display: flex;
        flex-direction: column;
    }
    .links a{
        display: flex;
        justify-content: center;
        width: 7rem;
        padding: .5rem 0;
        line-height: 2rem;
    }
    .links a:hover{
        line-height: 28px;
    }
    .navbar-top{
        display: none;
    }


    .search{
        display: none;
    }
    .hide-menu-btn{
        position: absolute;
        right: 50px;
        top: 25px;
    }


    .cart{
        display: block;
    }
}

@media(max-width: 600px){

    /* two columns */
    .row{
        flex-wrap: wrap;
        padding-top: 1rem;
    }
    .column{
        width: 100%;
    }
    .img-container{
        width: 100%;
        height: 50vh;
    }
    .two-column-section .column.ma-l, .column.ma-r{
        margin: .2em 0em;
    }
    /* Каталог */
    .catalog{
        flex-wrap: wrap;
        width: 70%;
    }
    .shoes, .clothes, .children, .suggestions{
        width: 100%;
    }
    /* footer */
    .column-footer{
        width: 100%;
    }
    .social-media{
        justify-content: flex-start;
    }
    .column{
        width: 100%;
    }
    .column-right{
        width: 100%;
        display: block;
    }
    .column-right a{
        display: block;
        padding: .3rem 0;
    }
    footer .column a{
        padding: .3rem 1rem .3rem 0;
    }
}
</style>
