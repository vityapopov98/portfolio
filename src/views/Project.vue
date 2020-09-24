<template>
    <div class="project-page">
        <div class="container">
            <div class="row mt-5">
                <div class="col-md-12">
                    <h1>{{projectName}}</h1>
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
          projectName: this.$route.params.name
      }
  },
  methods:{
    loadProject(){
        alert(this.projectName)
    }
    
  },
  mounted(){
     this.loadProject()
  }
}
</script>
