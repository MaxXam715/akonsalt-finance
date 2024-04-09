<script setup>
import {ref} from "vue";

const isShow = ref(false);

function toggleMenu() {
  isShow.value = !isShow.value;
}
</script>

<template>
  <button type="button" class="btn btn-outline btn-aspect btn-burger" @click="toggleMenu">
    <i class="icon burger"></i>
  </button>

  <teleport to="#app">
    <transition name="slide-left">
      <aside v-if="isShow" class="mobile-menu">
        <a href="#1">{{ formatPhone(112233) }}</a>
        <a href="#1">222</a>
        <a href="#1">333</a>
      </aside>
    </transition>
  </teleport>
</template>

<style lang="scss" scoped>
.btn-burger {
  width: 44px;

  .icon {
    background-color: #fff;
    font-size: 15px;
  }
}

.mobile-menu {
  position: absolute;
  left: 0;
  top: 0;
  width: 350px;
  background-color: #A1A1AA;
  height: 100dvh;
}
</style>