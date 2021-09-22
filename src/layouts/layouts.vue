<template>
  <q-layout view="lHh Lpr lFf">
    <q-header reveal>
      <NavBar class="fexid" @changing="changer" />
    </q-header>

    <q-page-container>
      <!-- this is styler inder navbar if want-->
      <!-- <hr /> -->
      <Test v-if="dimports" />
      <!-- this is where pages get injected -->

      <router-view />

      <Footer />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineAsyncComponent, ref } from "vue";
import { useQuasar } from "quasar";

export default {
  components: {
    NavBar: defineAsyncComponent(() =>
      import("../components/navbar/Navbar.vue")
    ),
    Footer: defineAsyncComponent(() =>
      import("../components/footer/footer.vue")
    ),
    Test: defineAsyncComponent(() => import("src/components/EmitLayout.vue")),
  },
  data() {
    return {
      dimports: false,
    };
  },
  methods: {
    changer(name) {
      this.dimports = name.name;
      // console.log(this.dimports);
    },
  },
};
</script>

<style>
::-webkit-scrollbar {
  width: 0;
  height: 0;
}
.fexid {
  position: fixed;
}

/*  this is styler for hr if want */
/* hr {
  margin-top: 20px;
  width: 69%;
  border-top: 1px solid;
  opacity: 0.3;
} */
</style>
