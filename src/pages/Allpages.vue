<template>
  <q-page>
    <home />
    <About />
    <Products />
  </q-page>
</template>

<script>
import { defineAsyncComponent } from "vue";
export default {
  // name: 'PageName',
  components: {
    Home: defineAsyncComponent(() => import("../pages/Home.vue")),
    About: defineAsyncComponent(() => import("../pages/About.vue")),
    Products: defineAsyncComponent(() => import("../pages/Products.vue")),
  },
  setup() {},
};
</script>
