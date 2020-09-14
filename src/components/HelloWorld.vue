<template>
  <div class="hello">
    <div class="container">
      <div class="row">
        <div class="banner">
          <div class="banner-header">
            <!-- <h1> Hello, my name is Victor.<br> I'm a graphic designer and web develper</h1> -->
            <h1> Привет, меня зовут Виктор.<br> Я дизайнер и веб разработчик</h1>
            <!-- <p>Web development, Graphic Design, UX/UI</p> -->
          </div>
          <!-- <img :src="require(`@/assets/banner-portfolio.png`)" alt=""> -->
          <!-- <div class="banner-image"></div> -->
        </div>
      </div>
      <!-- <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde magnam minus iusto inventore, qui voluptatem, natus suscipit ullam fugiat corrupti vitae et dicta. Provident adipisci atque illum voluptatum debitis cumque?</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde magnam minus iusto inventore, qui voluptatem, natus suscipit ullam fugiat corrupti vitae et dicta. Provident adipisci atque illum voluptatum debitis cumque?</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde magnam minus iusto inventore, qui voluptatem, natus suscipit ullam fugiat corrupti vitae et dicta. Provident adipisci atque illum voluptatum debitis cumque?</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde magnam minus iusto inventore, qui voluptatem, natus suscipit ullam fugiat corrupti vitae et dicta. Provident adipisci atque illum voluptatum debitis cumque?</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde magnam minus iusto inventore, qui voluptatem, natus suscipit ullam fugiat corrupti vitae et dicta. Provident adipisci atque illum voluptatum debitis cumque?</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde magnam minus iusto inventore, qui voluptatem, natus suscipit ullam fugiat corrupti vitae et dicta. Provident adipisci atque illum voluptatum debitis cumque?</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde magnam minus iusto inventore, qui voluptatem, natus suscipit ullam fugiat corrupti vitae et dicta. Provident adipisci atque illum voluptatum debitis cumque?</p> -->
        <div class="row" >
          <div class="column-3">
            <div class="work-block">
              <div class="work-block-header">
                <p>Разработка, Дизайн</p>
                <h2>Coffee in hobby</h2>
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
                <h2>Концепт сайта</h2>
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
                <h2>Умный дом</h2>
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
                <h2>Приложение для мероприятий</h2>
              </div>
              <div class="work-block-image">
                <img :src="require(`@/assets/portfolio-events.png`)" alt="">
                <!-- <img :src="require(`@/assets/portfolio-events.png`)" alt=""> -->
              </div>
            </div>
          </div>
          <div class="column-3">
            <div class="work-block">
              <div class="work-block-header">
                <p>Дизайн</p>
                <h2>Леттеринг коллекция</h2>
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
                <h2>Умный дом</h2>
              </div>
              <div class="work-block-image">
                <img :src="require(`@/assets/portfolio-coffee.png`)" alt="">
              </div>
            </div>
          </div>
        </div>

    </div>

    <footer>
      <div class="container">
        <div class="row">
          CodeDesign 2020 &copy; All rights reserved
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
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
  }
  @media(prefers-color-scheme: light){
      .banner{
        background-color: rgb(242, 242, 247);
      }
      .banner-image{
        /* background: url('~@/assets/banner-portfolio-light.png') center bottom no-repeat; */
        background-size: contain;
      }
  }
  .banner{
    padding: 5rem 0  0 0;
    width: 100%;
    /* height: 80vh; */
    height: 50vh  ;
    font-family: 'Roboto Mono', monospace;
    /* background: url('~@/assets/luca-micheli-ruWkmt3nU58-unsplash.jpg') center center no-repeat ;
    background-size: cover; */
  }
  
  .banner-header{
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 10rem;
    left: 0;
    right: 0;
    text-align: center;
  }
  .banner-header h1{
    width: 80%;
    margin: auto;
  }
  .banner>img{
    object-fit: contain;
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

  @media(max-width:640px){
    .banner{
      /* height: 70vh; */
      height: 50vh;
    }
    .banner-header{
      top: 7rem;
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
  }

</style>
