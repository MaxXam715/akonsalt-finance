<script setup>
import {nextTick, ref, watch} from "vue";
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
    <transition name="fade">
      <div v-if="isShow" class="mobile-menu" :class="{'show': isShow}">
        <div class="nav-wrapper">
          <button type="button" class="btn btn-outline btn-aspect btn-close-nav" @click="toggleMenu">
            <i class="icon close"></i>
          </button>
          <div class="nav-container">

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
  padding: 16px;
  transition: all 200ms;

  > .nav-wrapper {
    position: relative;
    padding: 32px;
    background-color: #fff;
    border-radius: 32px;
    margin-left: auto;
    max-width: 42px;
    max-height: 42px;
  }

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

  .nav-container {
    opacity: 0;
    transform: translateY(-20px);

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
    background-color: rgba(2, 7, 15, 0.8);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);

    .nav-wrapper {
      animation: showNavWrapper 1000ms ease forwards;

      .nav-container {
        animation: showNav 700ms ease forwards;
        animation-delay: 250ms;
      }
    }
  }

  &.fade-enter-active,
  &.fade-leave-active {
    transition: opacity 400ms ease;
  }

  &.fade-enter-from,
  &.fade-leave-to {
    opacity: 0;
  }
}

@keyframes showNavWrapper {
  to {
    max-width: 100vh;
    max-height: 100vh;
  }
}

@keyframes showNav {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}


</style>