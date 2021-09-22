<template>
  <q-page>
    <!-- content -->

    <i class="fas fa-border-none icons"></i>
    <i class="fas fa-circle icons_2"></i>

    <div class="container">
      <div class="row">
        <div class="col-md-6 col-sm-6 col-xs-12 conf_1">
          <h2>
            <span>Lorem ipsum</span>
            <span>dolor sit </span>
            amet,
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
            delectus.
          </p>
          <div class="material">
            <span class="material-icons"> play_arrow </span>
            <span class="material-icons-hover"></span>
          </div>
        </div>
        <div class="col-md-6 col-sm-6 display">
          <div class="conf_2">
            <q-img src="products/web-development.png" />
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',

  data() {
    return {};
    console.log(this.title);
  },
};
</script>

<style scoped>
@media screen and (min-width: 900px) {
  .container {
    padding-left: 150px;
    padding-right: 150px;
  }
}
@media screen and (max-width: 600px) {
  .dispaly {
    display: none;
  }
}
.q-page {
  background: var(--color_1);
  height: 500px !important;
}

.conf_2 {
  width: 100%;
}
.q-img {
  width: 90%;
  margin-top: 80px;
}
.conf_1 {
  text-align: center;
  justify-content: center;
  color: #fff;
  margin-top: 50px;
}
.conf_1 span {
  display: block;
  text-align: left;
}
h2 {
  padding-top: 100px;
  text-align: left;
  padding-left: 40px;
  font-weight: bold;
  margin: 5px;
}

.conf_1 p {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  width: 300px;
  padding-left: 40px;
}
.material {
  position: relative;
  margin: 30px 0 0 30px;
  cursor: pointer;
  width: 330px;
}
.material-icons {
  position: absolute;
  width: 70px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.822);
  font-size: 70px;
  left: 0;
  transition: 1s all ease-in-out;
  color: var(--color_3);
}
.material:hover .material-icons {
  left: calc(100% - 70px);
}
.material-icons-hover {
  position: absolute;
  top: 0;
  width: 100%;
  height: 70px;
  border: 4px solid #fff;
  border-radius: 40px;
}
.icons {
  font-size: 150px;
  position: absolute;
  z-index: 3;
  color: rgba(255, 255, 255, 0.603);
  opacity: 0.3;
  left: -50px;
  top: 30%;
  transform: rotate(150deg);
}
.icons_2 {
  font-size: 150px;
  position: absolute;
  z-index: 3;
  color: rgba(255, 255, 255, 0.603);
  opacity: 0.3;
  right: 0;
  top: 50%;
}
</style>
