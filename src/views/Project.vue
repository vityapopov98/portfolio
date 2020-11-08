<template>
    <div class="project-page">
        <div class="container-p">
            <div class="row mt-5">
                <div class="col-md-12">
                    <h1>{{projectDetails.name}}</h1>
                    <p>{{projectDetails.description}}</p>
                </div>
            </div>
        </div>
        <div class="project-banner">
            <!-- <img :src="require(`@/assets/${projectDetails.headerImg}`)" alt="" class="project-banner-img"> -->
            <img :src="headerImage" alt="" class="project-banner-img">
        </div>
        <div class="container-p">
            
            <div class="row" v-for="(element, index) in projectDetails.text" :key="index">
                <div class="col-md-12">
                    <!-- <h2>{{projectName}}</h2> -->
                    <img v-if="element.includes('pic:')" :src="require(`@/assets/${element.slice(4)}`)" alt="" class="project-img">
                    <h2 v-else-if="element.includes('h:')">{{element.slice(2)}}</h2>
                    <div class="project-link" v-else-if="element.includes('l:')">
                        <span class="material-icons">
                            link
                        </span>
                        <a :href="getLink(element)" >{{getLinkName(element)}}</a>
                    </div>
                    <p v-else >{{element}}</p>
                    <!-- <p>{{description}}</p> -->
                </div>
            </div>
                
        </div>
        
        <Footer></Footer>
    </div>
    
</template>

<script>
import Footer from '../components/Footer'

export default {
  name: 'Project',
  components: {
      Footer
  },
  data: function(){
      return {
          projectName: this.$route.params.name,
          projectImage: {},

            headerImg: '',
            name: 'Coffee in Hobby',
            description: '',
            projectDetails: {},
            linkName: ''
      }
  },
  methods:{
    loadProject(){
        // alert(this.projectName)
        this.$root.projects.forEach(element => {
            console.log(element.urlName)
            if(element.urlName == this.projectName){
                console.log('hurray')
                this.description = element.description;
                this.projectImage = element.headerImg;
                this.projectDetails = element
                console.log('reer?',this.projectImage)
            }
        });
    },
    getLink(data){
        if(data.includes('l:')){
            var columnPosition = data.indexOf(':');
            return data.slice(columnPosition+1)
        }
    },
    getLinkName(data){
        var columnPosition = data.indexOf(':');
        return data.slice(0, columnPosition-1);
    }
    
  },
  computed:{
      headerImage(){
          console.log(this.projectDetails.headerImg)
          if(this.projectDetails.headerImg != undefined){
              return require(`@/assets/${this.projectDetails.headerImg}`)
          }
          return '' // Почему-то в начале при переходе на страницу vue ругается на header image типо оно undefined, но вообще все работает
          // написав этот костыль он перестал ругаться
      }
  },
  mounted(){
     this.loadProject()
  }
}
</script>

<style scoped>
h1{
    padding-top: 5rem;
    font-size: 42px;
}
h2{
    margin: 0;
}
p{
    margin-bottom: 3rem;
    font-size: 20px;
    line-height: 36px;
}
.container-p{
    padding-top: 2rem;
    width: 55%;
    margin: auto;
}
.project-img{
    width: 100%;
    margin: auto;
    height: auto;
}
.project-banner{
    width: 80%;
    height: 600px;
    margin: auto;
    box-sizing: border-box;
}
.project-banner-img{
    width: 100%;
    margin: auto;
    height: 100%;
    object-fit: cover;
}
.project-link{
    display: flex;
    align-items: center;
}

.project-link>a:hover{
    text-decoration: underline !important;
    color: #b1b1b1;
}
@media(prefers-color-scheme: light){
    .project-link>a{
        color: #111111;
    }
    .project-link>a:hover{
    text-decoration: underline !important;
    color: #202020;
}
}
@media(max-width:640px){
    .container-p{
        width: 80%;
    }
}
</style>
