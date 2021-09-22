/* eslint-disable vue/no-dupe-keys */
<template>
  <q-toolbar class="bg_1 q-px-lg row">
    <q-toolbar-title class="col-md-6 logo">
      <router-link to="/home">
        <q-img
          src="products/logo-icon.png"
          alt="Isomware"
          title="Isomware"
          class="padding_1"
        />
        <span>ISOMWARE </span>
      </router-link>
    </q-toolbar-title>

    <div class="gt-sm col-md-6">
      <q-tabs>
        <q-route-tab
          :to="{ name: 'home' }"
          label="Home"
          @click="changBoolean(name)"
        />
        <q-route-tab
          :to="{ name: '/About' }"
          label="About"
          @click="changBoolean(name)"
        />
        <q-route-tab
          :to="{ name: '/Products' }"
          label="Project "
          @click="changBoolean(name)"
        />
        <q-route-tab to=/asd label="Contact Us" class="contact"
        @click="changBoolean(name)" />
      </q-tabs>
    </div>

    <EssentialLink />
  </q-toolbar>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
import { defineAsyncComponent } from "vue";
// import EssentialLink from "./EssentialLink.vue";

export default {
  components: {
    EssentialLink: defineAsyncComponent(() =>
      import("../navbar/EssentialLink.vue")
    ),
  },
  data() {
    return {
      name: true,
    };
  },
  methods: {
    changBoolean(name) {
      this.$emit("changing", { name });
    },
  },
};
</script>

<style>
:root {
  --color_1: #a43994;
  --color_2: #f17420;
  --color_3: #393837;
}
.bg_1 {
  /* backdrop-filter: brightness(50%); */
  background: var(--color_3);
}
.logo {
  position: relative;
  margin: 10px 0 5px 10px;
}
.q-img {
  width: 80px;
  height: auto;
}
a {
  text-decoration: none;
}
.logo span {
  position: absolute;
  color: #fff;
  top: 10px;
  left: 65px;
  font-family: "M PLUS 1p", sans-serif;
}
.q-btn .q-icon,
.q-btn .q-spinner {
  font-size: 2.715em;
}
.q-menu {
  transition: 0.5s all ease-out;
  font-size: 18px;
  min-height: 100vh;
  border-radius: 0;
}
.q-menu a {
  color: white;
  text-decoration: none;
  text-align: center;
  padding: 5px;
}
.q-position-engine {
  top: 64px !important;
  left: 0px !important;
  background-color: var(--color_1);
  box-shadow: none;
  border-right: 0.5px solid #fff;
}
.q-menu .q-icon {
  padding-right: 10px;
}
.q-menu q-link:hover {
  background-color: white;
  opacity: 1;
}
</style>
