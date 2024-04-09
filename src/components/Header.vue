<script setup>
import MobileNav from "./MobileNav.vue";
import LogoImg from "../assets/img/logo.svg"

const phone = import.meta.env.VITE_PHONE;
</script>

<template>
  <header class="G-header">
    <div class="G-container">
      <div class="col-logo">
        <router-link to="/">
          <img :src="LogoImg" alt="logo" class="logo">
        </router-link>
      </div>
      <div class="col-nav">
        <nav class="nav-wrapper">
          <router-link to="/about" class="item">Обо мне</router-link>
          <router-link to="/cases" class="item">Кейсы</router-link>
          <router-link to="/services" class="item">Услуги</router-link>
          <router-link to="/blog" class="item">Блог</router-link>
          <router-link to="/login" class="item">Личный кабинет</router-link>
          <router-link to="/contacts" class="item">Контакты</router-link>
        </nav>
      </div>
      <div class="col-events">
        <a :href="'tel:' + phone" class="btn btn-outline btn-shadow btn-tel-number">{{ phone }}</a>
        <a :href="'tel:' + phone" class="btn btn-outline btn-aspect btn-tel-icon"><i class="icon phone"></i></a>
        <mobile-nav/>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import "../assets/animations/slide-left.scss";

.G-header {
  position: sticky;
  top: 0;
  height: 110px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  .G-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    grid-gap: 20px;
    height: 100%;
  }

  .col-logo {
    .logo {
      @media (max-width: 767px) {
        width: 167px;
      }
    }
  }

  .col-nav {
    .nav-wrapper {
      display: flex;
      align-items: center;
      grid-gap: 40px;

      .item {
        color: rgba(255, 255, 255, 0.60);
        font-size: 16px;
        font-style: normal;
        transition: color 100ms ease-in-out;

        &:hover {
          color: rgba(255, 255, 255, 1);
        }
      }
    }

    @media (max-width: 1300px) {
      display: none;
    }
  }

  .col-events {
    display: flex;
    align-items: center;
    grid-gap: 10px;

    .btn-tel-number {

      @media (max-width: 767px) {
        display: none;
      }
    }

    .btn-tel-icon {
      width: 44px;

      .icon {
        background-color: var(--Gray-1);
        font-size: 15px;
      }

      @media (min-width: 767px) {
        display: none;
      }
    }
  }

  @media (max-width: 1300px) {
    height: 90px;
  }

  @media (max-width: 767px) {
    height: 75px;
  }
}
</style>