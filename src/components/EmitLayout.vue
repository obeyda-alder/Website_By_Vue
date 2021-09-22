<template>
  <q-page>
    <!-- content -->
    <div class="extension_component">
      <div class="style">
        <h2 v-text="title"></h2>
        <q-icon name="home" />
        <a class="anchorTag" href="/Home"> Home </a>
        <span> > {{ title }}</span>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  // name: "name",
  data() {
    let title = "test1";
    return {
      title,
    };
  },
};
</script>
<style scoped>
.q-page {
  min-height: 300px !important;
}
.extension_component {
  margin-top: 60px;
}
.extension_component .style {
  background-image: url("~assets/images/sh-contact.jpg");
  background-size: cover;
  background-attachment: fixed;
  background-position-y: top;
  width: 100%;
  height: 300px;
  color: #fff;
  padding: 60px 45%;
  text-align: center;
}
.extension_component .style h2 {
  margin-bottom: 20px;
  font-family: "Font Awesome 5 Brands";
}
.extension_component .style .q-icon {
  font-size: 18px;
  vertical-align: -2px;
  opacity: 0.6;
}
.extension_component .style .anchorTag {
  text-decoration: none;
  color: #fff;
  font-size: 16px;
  opacity: 0.6;
}
.extension_component .style .anchorTag:hover {
  color: var(--color_2);
}
.extension_component .style span {
  font-size: 15px;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}
</style>
