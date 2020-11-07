<template>
  <div class="hello">
    <div class="container">
      <div class="row">
        <div class="banner">
          <div class="banner-header">
            <!-- <h1> Hello, my name is Victor.<br> I'm a graphic designer and web develper</h1> -->
            <!-- <img :src="require(`@/assets/me.png`)" class="banner-avatar" alt=""> -->
            <div class="banner-avatar"></div>
            <!-- <span class="banner-logo">👨🏼‍💻 </span> -->
            <h1>Привет, меня зовут Виктор.<br> <span class="desktop-header">Я дизайнер и веб разработчик</span></h1>
            <p>Могу сделать вам сайт, создать логотип и фирменный дизайн. Открыт для связи в социальных сетях и по почте. <br>А пока, можете посмотреть на мои работы.</p>
            <!-- <a href="https://api.instagram.com/direct/t/340282366841710300949128137420883657077">Заказать</a> -->
            <!-- <p>Web development, Graphic Design, UX/UI</p> -->
          </div>
            <!-- <a href="" class="banner-btn">Contact me</a> -->
          <!-- <img :src="require(`@/assets/jeremy-bishop-G9i_plbfDgk-unsplash.jpg`)" alt=""> -->
          <!-- <div class="banner-image"></div> -->
        </div>
      </div>
        <div class="row" >
          <div class="column-3">
            <div class="work-block">
              <div class="work-block-header">
                <p>Разработка, Дизайн</p>
                <router-link :to="{name: 'Project', params: {name: 'coffeeInHobby'}}">
                    <h2>Coffee in hobby</h2>
                </router-link>
              </div>
              <div class="work-block-image">
                <img :src="require(`@/assets/portfolio-coffee.png`)" alt="">
                <!-- <img :src="require(`@/assets/portfolio-events.png`)" alt=""> -->
              </div>
            </div>
          </div>
          <div class="column-3">
            <div class="work-block">
              <div class="work-block-header">
                <p>Разработка</p>
                <router-link :to="{name: 'Project', params: {name: 'sanchez'}}">
                    <h2>Концепт сайта</h2>
                </router-link>
              </div>
              <div class="work-block-image">
                <img :src="require(`@/assets/portfolio-sanchez.png`)" alt="">
              </div>
            </div>
          </div>
          <div class="column-3">
            <div class="work-block">
              <div class="work-block-header">
                <p>Разработка, Дизайн</p>
                <router-link :to="{name: 'Project', params: {name: 'smartHome'}}">
                    <h2>Умный дом</h2>
                </router-link>
              </div>
              <div class="work-block-image">
                <img :src="require(`@/assets/portfolio-greenzone.png`)" alt="">
              </div>
            </div>
          </div>
        </div>

        <div class="row" >
          <div class="column-3">
            <div class="work-block">
              <div class="work-block-header">
                <p>Разработка, Дизайн</p>
                <router-link :to="{name: 'Project', params: {name: 'eventsApp'}}">
                  <h2>Приложение для мероприятий</h2>
                </router-link>
              </div>
              <div class="work-block-image">
                <img :src="require(`@/assets/portfolio-events.png`)" alt="">
              </div>
            </div>
          </div>
          <div class="column-3">
            <div class="work-block">
              <div class="work-block-header">
                <p>Дизайн</p>
                <router-link :to="{name: 'Project', params: {name: 'lettering'}}">
                    <h2>Леттеринг коллекция</h2>
                </router-link>
              </div>
              <div class="work-block-image">
                <img :src="require(`@/assets/portfolio-lettering.png`)" alt="">
              </div>
            </div>
          </div>
          <div class="column-3">
            <div class="work-block">
              <div class="work-block-header">
                <p>Разработка, Дизайн</p>
                <router-link :to="{name: 'Project', params: {name: 'cnc'}}">
                    <h2>Умный дом</h2>
                </router-link>
              </div>
              <div class="work-block-image">
                <img :src="require(`@/assets/awake.png`)" alt="">
              </div>
            </div>
          </div>
        </div>

    </div>

    <!-- <footer>
      <div class="container">
        <div class="row">
          <div class="col-md-6 copyright">CodeDesign 2020 &copy; All rights reserved</div>
          <div class="col-md-6">
            <div class="footer-links-block">
              <a href="https://www.instagram.com/mbm_and_pline/" class="footer-link">Instagram</a>
              <a href="https://vk.com/vitrekp" class="footer-link">Vk</a>
              <a href="https://www.behance.net/vityapopovdd27" class="footer-link">Behance</a>
              <a href="https://github.com/vityapopov98" class="footer-link">GitHub</a>
              <a href="https://www.artstation.com/victor_popov" class="footer-link">ArtStation</a>
              <a href="mailto:vityapopov98@yandex.ru" class="footer-link">Почта</a>
            </div>
          </div>
        </div>
      </div>
    </footer> -->
    <Footer/>
  </div>
</template>

<script>
import Footer from '../components/Footer'

export default {
  name: 'Home',
  components:{
    Footer
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  @media(prefers-color-scheme: dark){
      .banner{
        background-color: black;

      }
      .banner-image{
        /* background: url('~@/assets/banner-portfolio-dark.png') center bottom no-repeat; */
        background-size: contain;
      }
      h1{
        color: #f5f5f7;
      }
      .banner-header>p{
        color: #86868b;
      }
      .banner-avatar{
        width: 200px;
        height: 200px;
        margin: auto;
        padding: 0%;
        background: url('~@/assets/me-black.png') center bottom no-repeat;
        background-size: contain;
      }
      .footer-link{
        color: #4d4d4d;
        margin: 0 1rem;
      }
      .footer-link:hover{
        color: #6d6d6d;
      }
  }
  @media(prefers-color-scheme: light){
      .banner{
        background-color: rgb(242, 242, 247);
      }
      .banner-image{
        /* background: url('~@/assets/banner-portfolio-light.png') center bottom no-repeat; */
        background-size: contain;
      }
      h1{
        color: #1d1d1f;
      }
      .banner-header>p{
        color: #8c8c8c;
      }
      .banner-btn{
        border: 1px solid #8c8c8c;
        border-radius: 25px;
        padding: .5rem 1rem;
        height: 20px;
      }
      .banner-avatar{
        background: url('~@/assets/me.png') center bottom no-repeat;
        background-size: contain;
      }
      .footer-link{
        color: #9c9c9c;
        margin: 0 1rem;
      }
      .footer-link:hover{
        color: #bebebe;
      }
  }

/* --------- Баннер ------- */
  .banner-avatar{
        width: 200px;
        height: 200px;
        margin: auto;
        padding: 0%;
      }
  a.banner-btn{
        border: 1px solid #8c8c8c;
        border-radius: 20px;
        padding: .5rem;
        color: #8c8c8c;
        text-decoration: none;
        justify-content: left;
      }
  .banner{
    padding: 5rem 0  0 0;
    width: 100%;
    height: 80vh;
    /* height: 50vh  ; */
    /* font-family: 'Roboto Mono', monospace; */
    font-family: 'Montserrat';
    /* background: url('~@/assets/luca-micheli-ruWkmt3nU58-unsplash.jpg') center center no-repeat ;
    background-size: cover; */
    display: flex;
  }
  .banner-logo{
      width: 90%;
      margin: auto;
      font-size: 150px;
  }
  .banner-header{
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 7rem;
    left: 0;
    right: 0;
    text-align: center;
  }
  .banner-header h1{
    font-size: 54px;
    width: 70%;
    margin: auto;
  }
  .banner-header>p{
    font-family: 'Montserrat';
    font-weight: 500;
    font-size: 24px;
    padding-top: 2rem;
    width: 60%;
    margin: auto;
    
  }
  .banner>img{
    object-fit: cover;
    object-position: bottom;
    width: 100%;
    height: 100%;
  }
  .banner-image{
    width: 100%;
    height: 100%;
    /* background: url('~@/assets/banner-portfolio.png') center bottom no-repeat;
    background: url('~@/assets/banner-portfolio-light.png') center bottom no-repeat;
    background-size: contain; */
  }

/* ----- Конец Банера ------- */

/* Work block */

.column-3{
  width: 33.33%;
  box-sizing: border-box;
  
}
.column-3:nth-child(even){
  margin: 0 1rem 0 1rem;
}
.work-block{
  position: relative;
}
.work-block-header{
  position: absolute;
  bottom: 1.5rem;
  left: 1.5rem;
  color: white;
}
.work-block-header>h2{
  margin: .5rem 0;
}
.work-block-header>p{
  margin: 0;
}
.work-block-image{
  /* width: 100%; */
  height: 100%;
  box-sizing: border-box;
}
.work-block-image>img{
  object-fit: cover;
  width: 100%;
  height: 100%;
}

footer{
  padding: 3rem 0;
  color: #4d4d4d;
}
.col-md-6{
  
  width: 50%;
  box-sizing: border-box;
}
.footer-links-block{
  text-align: right;
  width: 100%; 
}
.copyright{
  display: block;
}

@media(max-width:1200px){
  .banner-header h1{
    font-size: 42px;
  }
  .banner-header p{
    font-size: 20px;
  }
}
@media(max-width:920px){
  .banner-header h1{
    font-size: 38px;
  }
  .banner-header p{
    font-size: 17px;
  }
}
/* iPhone SE 1 */
@media(max-width:320px){
    .banner-avatar{
        width: 150px;
        height: 150px;
        margin: auto;
        padding: 0%;
      }
  .banner-header h1{
    font-size: 30px;
  }
  .banner-header p{
    font-size: 14px;
  }
}
/* iPad pro */
@media(min-height:1366px){ 
  .banner{
    height: 40vh;
  }
}
@media(min-height:1040px){ 
  .banner{
    height: 60vh;
  }
}
  @media(max-width:640px){
    .banner{
      /* height: 70vh; */
      height: 80vh;
      /* background: none; */
    }
    .banner-header{
      top: 7rem;
    }
    .banner-header>h1{
      width: 80%;
    }
    h1{
      font-size: 32px;
      /* text-align: left; */
      font-weight: 500;
    }
    .desktop-header{
        display: none;
    }
    .banner-header>p{
      font-size: 17px;
      width: 80%;
      /* text-align: left; */
    }
    .banner-image{
      /* background: url('~@/assets/shotsnapp-1596389440.202.png') center bottom no-repeat; */
      /* background-size: contain; */
      background: none;
    }
    .column-3{
      width: 100%;
      margin: .5rem 0;
    }
    .column-3:nth-child(even){
      margin: 0;
    }
    .column-3:last-child{
      margin-bottom: 0;
    }

    .footer-links-block{
      text-align: center;
      line-height: 32px;
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
    }
    
    .col-md-6{
      width: 100%;
    }
    .copyright{display: none;}
  }

</style>
