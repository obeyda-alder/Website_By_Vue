<template>
  <q-page>
    <div class="container">
      <h2 class="text-center">Our Products</h2>

      <div class="row q-pb-xl">
        <div
          class="col-md-4 col-sm-6 col-xs-12"
          v-for="data in datas"
          :key="data.id"
        >
          <div class="cards">
            <q-card class="my-card">
              <div class="front">
                <img :src="data.image" class="iamges" />
                <q-card-section>
                  <div class="title">{{ data.title }}</div>
                  <div class="body">{{ data.dialogTitle }}</div>
                </q-card-section>
              </div>
              <div class="back">
                <q-card-section>
                  <div class="title">{{ data.title }}</div>
                  <div class="body">{{ data.body }}</div>
                </q-card-section>
                <a class="link" href="#">more info</a>
              </div>
            </q-card>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineAsyncComponent, computed } from "vue";
import { useStore } from "vuex";

export default {
  // name: 'PageName',

  setup() {
    const $store = useStore();

    /* Data From Vuex Store */
    const datas = computed(() => {
      return $store.state.Product.Products;
    });

    return {
      datas,
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
.q-page {
  background-image: linear-gradient(
    to top,
    rgb(95, 93, 93) 20%,
    rgba(112, 109, 109, 0.602) 50%
  );
}
h2 {
  font-size: 50px;
  font-weight: 600;
  font-family: Tahoma, Geneva, Verdana, sans-serif;
  color: var(--color_3);
  padding-top: 40px;
  font-weight: bold;
}
.my-card {
  height: 350px;
  cursor: pointer;
  position: relative;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(255, 255, 255, 0.2);
  margin: 5px 10px;
}

.iamges {
  width: 100%;
  height: 70%;
}
.cards {
  perspective: 900px;
  margin-bottom: 20px;
}
.cards:hover .my-card {
  transform: rotateY(180deg);
}

.front,
.back {
  position: absolute;
  width: 100%;
  height: 350px;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  padding: 10px 20px;
  overflow: hidden;
}

.front .title,
.back .title {
  font-size: 16px;
  font-weight: bold;
  color: var(--color_3);
}
.front .body {
  text-align: left;
  background-color: rgb(201, 42, 42);
  color: #fff;
  font-size: 13px;
  padding: 7px;
  width: 100px;
  border-radius: 30px;
  margin-top: 12px;
  text-align: center;
}

.back {
  background-color: var(--color_2);
  color: var(--color_3);
  transform: rotateY(180deg);
  width: 100%;
}
.back .body {
  font-size: 12px;
  padding: 10px;
  margin-bottom: 5px;
  font-weight: bold;
}
.back .link {
  position: absolute;
  background-color: rgb(201, 42, 42);
  color: #fff;
  font-size: 13px;
  padding: 7px;
  /* width: 100px; */
  border-radius: 30px;
  text-align: center;
  bottom: 10px;
  right: 10px;
  text-decoration: none;
  transition: 0.5s all ease-in-out;
}
.back .link:hover {
  background: #fff;
  color: #000;
}
</style>
