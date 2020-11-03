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
            <img :src="require(`@/assets/${projectImage}`)" alt="" class="project-banner-img">
        </div>
        <div class="container-p">
            
            <div class="row" v-for="(element, index) in projectDetails.text" :key="index">
                <div class="col-md-12">
                    <!-- <h2>{{projectName}}</h2> -->
                    <img v-if="element.includes('pic:')" :src="require(`@/assets/${element.slice(4)}`)" alt="" class="project-img">
                    <h2 v-else-if="element.includes('h:')">{{element.slice(2)}}</h2>
                    <p v-else >{{element}}</p>
                    <!-- <p>{{description}}</p> -->
                </div>
            </div>
                
        </div>
        
    </div>
    
</template>

<script>

export default {
  name: 'Project',
  components: {
      
  },
  data: function(){
      return {
          projectName: this.$route.params.name,
          projectImage: '',

            headerImg: '',
            name: 'Coffee in Hobby',
            description: '',
            projectDetails: {}
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
</style>
