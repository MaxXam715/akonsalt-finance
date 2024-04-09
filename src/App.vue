<script setup>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <Header></Header>
  <div class="G-container" style="padding-top: 100px; padding-bottom: 100px;">
    <router-view/>
  </div>
  <Footer></Footer>
</template>

<style>
@import "./css/fonts.css";
@import "./css/variables.css";
@import "./assets/icons/icons.scss";
@import "./css/uikit.scss";
@import "./css/global.scss";
@import "./css/reset.css";
</style>