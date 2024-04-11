<script>
import {defineComponent} from "vue";
import FirstScreen from "./FirstScreen.vue";
import AboutMe from "./AboutMe.vue";
import MyServices from "./MyServices.vue";

export default defineComponent({
  components: {
    MyServices,
    AboutMe,
    FirstScreen
  }
})
</script>

<template>
  <FirstScreen />
  <AboutMe />
  <MyServices />
</template>