<script setup>
import {phoneNumber} from "../js/Helpers.js";

const phone = import.meta.env.VITE_PHONE;
const legal_IP = import.meta.env.VITE_LEGAL_IP;
const legal_INN = import.meta.env.VITE_LEGAL_INN;
const legal_OGRNIP = import.meta.env.VITE_LEGAL_OGRNIP;

const phoneMask = phoneNumber(phone);
const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="G-footer">
    <div class="G-container">
      <div class="top-line"></div>
      <div class="text-block">
        <h2 class="heading heading-gradient">Контакты</h2>
        <p class="desc">Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar elementum tempus hac tellus libero accumsan.</p>
      </div>
      <div class="row-events">
        <a :href="`https://t.me/`+phone" target="_blank" class="btn btn-outline">Telegram</a>
        <a :href="`https://wa.me/`+phone" target="_blank" class="btn btn-outline">WhatsApp</a>
        <a :href="'tel:' + phoneMask " class="btn btn-outline">{{ phoneMask }}</a>
        <button type="button" class="btn btn-primary">Заказать звонок</button>
      </div>
      <div class="cooperate-container">
        <div class="user-info">
          <span>ИП {{ legal_IP }}</span>
          <span>ИНН {{ legal_INN }}</span>
          <span>ОГРНИП {{ legal_OGRNIP }}</span>
          <a href="https://nok-nark.ru/cert/list/?filter%5BCODE%5D=08.00800.01.00000003.27&filter%5BACTIVE_FROM%5D=11.01.2024&sort%5Bby%5D=CODE&sort%5Border%5D=asc" target="_blank">Реестр НОК</a>
        </div>
        <div class="tech-block">
          <router-link to="/privacy-policy">Политика конфиденциальности</router-link>
          <span>© {{ currentYear }} Все права защищены</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.G-footer {
  position: relative;
  padding-top: 80px;
  padding-bottom: 60px;
  overflow: hidden;

  &:before {
    content: "";
    position: absolute;
    top: 23%;
    left: 2%;
    width: 1361px;
    height: 632px;
    flex-shrink: 0;
    background: rgba(255, 255, 255, 0.00);
    filter: blur(192px);
    border: 1px solid red;

    opacity: 0.2;
    background: linear-gradient(90deg, #06B6D4 0%, #1E40AF 100%);
  }

  .G-container {
    position: relative;
    z-index: 2;
  }

  .top-line {
    width: 100%;
    max-width: 670px;
    height: 1px;
    margin: 0 auto;
    margin-bottom: 100px;
    background: linear-gradient(90deg, rgba(0, 0, 0, 0.00) 0%, rgba(2, 132, 199, 0.65) 50%, rgba(0, 0, 0, 0.00) 100%);

    @media (max-width: 800px) {
      margin-bottom: 80px;
    }
  }

  .text-block {
    width: 100%;
    max-width: 490px;
    text-align: center;
    margin: 0 auto;
    margin-bottom: 60px;

    .heading {
      font-size: 48px;
      font-weight: 700;
      margin-bottom: 20px;

      @media (max-width: 800px) {
        font-size: 42px;
      }
    }

    .desc {
      color: #868B97;
      text-align: center;
      font-size: 16px;
      font-weight: 400;
      line-height: 150%; /* 24px */
    }

    @media (max-width: 800px) {
      margin-bottom: 40px;
    }
  }

  .row-events {
    display: flex;
    align-items: center;
    grid-gap: 10px;
    justify-content: center;
    margin-bottom: 130px;

    @media (max-width: 800px) {
      flex-direction: column;
      margin-bottom: 80px;

      .btn {
        width: 270px;
      }
    }
  }

  .cooperate-container {
    display: flex;
    justify-content: space-between;
    padding-top: 30px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);

    .user-info {
      span,
      a {
        color: rgba(161, 161, 170, 0.80);
        font-size: 14px;
        font-weight: 500;
        line-height: 150%; /* 21px */
        transition: color 200ms;
      }

      a {
        text-decoration: underline;

        &:hover {
          color: #fff;
        }
      }
    }

    .tech-block {
      display: flex;
      flex-direction: column;
      grid-gap: 10px;

      span,
      a {
        color: rgba(161, 161, 170, 0.80);
        font-size: 14px;
        font-weight: 500;
        line-height: 150%; /* 21px */
        text-align: right;
        transition: color 200ms;
      }

      a:hover {
        color: #fff;
      }
    }

    @media (max-width: 800px) {
      flex-direction: column;
      align-items: center;
      text-align: center;
      grid-gap: 40px;
    }
  }

  @media (max-width: 800px) {
    padding-bottom: 40px;
  }

}
</style>