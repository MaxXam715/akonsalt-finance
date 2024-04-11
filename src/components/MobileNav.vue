<script setup>
import {ref, watch} from "vue";
import LogoNew from "../assets/img/logo-2.svg";
import {phoneNumber} from "../js/Helpers.js";

const phone = import.meta.env.VITE_PHONE;
const phoneMask = phoneNumber(phone);

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
    <transition name="toggle-nav">
      <div v-if="isShow" class="mobile-menu" :class="{ 'show': isShow }">
        <div class="nav-container">
          <button type="button" class="btn btn-outline btn-aspect btn-close-nav" @click="toggleMenu">
            <i class="icon close"></i>
          </button>

          <router-link to="/" class="logo-container" @click="toggleMenu">
            <img :src="LogoNew" alt="logo">
          </router-link>
          <nav class="nav-wrapper">
            <router-link to="/about" class="item" @click="toggleMenu">Обо мне</router-link>
            <router-link to="/cases" class="item" @click="toggleMenu">Кейсы</router-link>
            <router-link to="/services" class="item" @click="toggleMenu">Услуги</router-link>
            <router-link to="/blog" class="item" @click="toggleMenu">Блог</router-link>
            <router-link to="/contacts" class="item" @click="toggleMenu">Контакты</router-link>
          </nav>
          <a :href="'tel:' + phoneMask" class="btn btn-outline btn-shadow btn-call">{{ phoneMask }}</a>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<style lang="scss" scoped>
.btn-burger {
  width: 44px;

  .icon {
    background-color: var(--Gray-1);
    font-size: 15px;
  }

  @media (min-width: 1300px) {
    display: none;
  }
}

.mobile-menu {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 11;
  width: 100%;
  height: 100%;
  padding: 20px;
  background-color: rgba(3, 12, 15, 0.5);
  transition: all 200ms;

  .nav-container {
    position: relative;
    padding: 40px;
    background-color: #fff;
    border-radius: 32px;
    opacity: 0;
    transition: opacity 2000ms;

    .btn-close-nav {
      position: absolute;
      top: 10px;
      right: 10px;
      width: 48px;
      border: 1px solid #ccc;

      .icon {
        font-size: 12px;
      }
    }

    .logo-container {
      margin-bottom: 40px;
    }

    .nav-wrapper {
      display: flex;
      flex-direction: column;
      grid-gap: 24px;
      margin-bottom: 80px;

      .item {
        color: var(--Black);
        font-size: 20px;
        font-weight: 500;
      }
    }

    .btn-call {
      width: 100%;
      border-color: #E4E5E8;
      color: var(--Black);
    }
  }

  &.show {
    .nav-container {
      opacity: 1;
    }
  }
}


@keyframes toggle-nav {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
}

.toggle-nav-enter-active,
.toggle-nav-leave-active {
  animation: 330ms toggle-nav ease-in-out;
}

.toggle-nav-leave-active {
  animation-direction: reverse;
}
</style>