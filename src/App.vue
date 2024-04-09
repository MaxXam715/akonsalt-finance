<script setup>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <Header></Header>
  <router-view/>
  <Footer></Footer>
</template>

<style>
@import "./css/fonts.css";
@import "./css/variables.css";
@import "./css/uikit.scss";
@import "./css/global.scss";
@import "./css/reset.css";
</style>