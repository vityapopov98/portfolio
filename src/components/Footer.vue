<template>
    <footer>
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
    </footer>
</template>

<script>
export default {
    name: 'Footer',
}
</script>
<style scoped>
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
.footer-link{
        color: #4d4d4d;
        margin: 0 1rem;
      }
      .footer-link:hover{
        color: #6d6d6d;
      }
</style>