<script>
import {defineComponent} from "vue";
import FirstScreen from "./FirstScreen.vue";
import AboutMe from "./AboutMe.vue";
import MyServices from "./MyServices.vue";
import Advantages from "./Advantages.vue";
import WhoWillBenefitServices from "./WhoWillBenefitServices.vue";
import Blog from "./Blog.vue";

export default defineComponent({
  components: {
    FirstScreen,
    AboutMe,
    MyServices,
    Advantages,
    WhoWillBenefitServices,
    Blog
  }
})
</script>

<template>
  <FirstScreen/>
  <AboutMe/>
  <MyServices/>
  <Advantages/>
  <WhoWillBenefitServices/>
  <Blog/>
</template>