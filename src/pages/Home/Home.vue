<script>
import {defineComponent} from "vue";
import FirstScreen from "./FirstScreen.vue";
import AboutMe from "./AboutMe.vue";
import MyServices from "./MyServices.vue";
import Advantages from "./Advantages.vue";

export default defineComponent({
  components: {
    MyServices,
    AboutMe,
    FirstScreen,
    Advantages
  }
})
</script>

<template>
  <FirstScreen />
  <AboutMe />
  <MyServices />
  <Advantages />
</template>