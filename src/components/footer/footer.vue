<template>
  <div class="footer q-pa-lg">
    <div class="container">
      <div class="row">
        <div class="column1 col-md-4 col-sm-6 q-mb-lg">
          <div class="title">About IsomWare</div>
          <div class="body">
            <i class="fas fa-phone q-pt-lg"></i>
            <span class="q-pl-sm"> +905512005246 </span>

            <div class="social_media">
              <a href="https://www.facebook.com/isomware/" target="_blank">
                <i class="fab fa-facebook"></i>
              </a>
              <a href="https://twitter.com/isomware" target="_blank">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="https://www.instagram.com/isomware" target="_blank">
                <i class="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/eslam-takeyeldin-388326209"
                target="_blank"
              >
                <i class="fab fa-linkedin"></i>
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=905512005246"
                target="_blank"
              >
                <i class="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>

        <div class="column2 col-md-4 col-sm-6 q-mb-sm">
          <div class="title q-pb-sm">Contact Us</div>
          <div class="body">
            <p class="icon_1">
              <i class="fas fa-envelope q-pr-sm"></i>
              isomware@protonmail.com
            </p>

            <p class="icon_2">
              <i class="fas fa-envelope q-pr-sm"></i>
              isomware92@gmail.com
            </p>
            <p class="icon_3">
              <i class="fas fa-map-marker-alt q-pr-sm"></i>
              Ağaoğlu my office 212 – Kat 2 – ofis 24 – Mahmutbey Mh. / Istanbul
            </p>
          </div>
        </div>

        <div class="column3 col-md-4 col-sm-6 q-mb-sm">
          <div class="logo">
            <p>Where we are working</p>
            <img src="products/footer-map.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import moment from "moment";
export default {
  setup() {
    return {
      // year: moment().format("YYYY"),
    };
  },
};
</script>

<style scoped>
@media only screen and (min-width: 900px) {
  .container {
    padding-left: 150px;
    padding-right: 150px;
  }
}

/* @media only screen and (min-width: 700px) {

} */

.footer {
  background: var(--color_3);
  /* height: 300px; */
}
.column1 .body span:hover {
  cursor: pointer;
  color: var(--color_2);
}
.column1 .title,
.column2 .title,
.column3 .logo p {
  color: white;
  font-size: 22px;
  font-weight: bold;
}
.column1 .body,
.column2 .body {
  color: white;
  font-size: 19px;
  font-family: Times, serif;
}
.column1 .social_media {
  width: 100%;
  padding: 50px 0 0 0;
}

.column1 .social_media a {
  width: 10%;
  padding: 10px;
  margin-right: 10px;
  border-radius: 50%;
  background: #fff;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  transition: 0.5s all ease-in;
}

.column1 .social_media a:hover {
  background: var(--color_2);
}

.logo img {
  opacity: 0.5;
}
</style>
