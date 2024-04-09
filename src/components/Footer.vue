<script setup>
const phone = import.meta.env.VITE_PHONE;
</script>

<template>
  <footer class="G-footer">
    <div class="G-container">
      <div class="top-line"></div>
      <div class="text-block">
        <h2 class="heading">Контакты</h2>
        <p class="desc">Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar elementum tempus hac tellus libero accumsan.</p>
      </div>
      <div class="row-events">
        <a href="#" class="btn btn-outline">Telegram</a>
        <a href="#" class="btn btn-outline">WhatsApp</a>
        <a href="#" class="btn btn-outline">{{ phone }}</a>
        <button type="button" class="btn btn-primary">Заказать звонок</button>
      </div>
      <div class="cooperate-container">
        <div class="user-info">
          <span>ИП Кешишян Андраник Саркисович</span>
          <span>ИНН 610601804601</span>
          <span>ОГРНИП 323619600191282</span>
          <a href="/">Реестр НОК</a>
        </div>
        <div class="tech-block">
          <router-link to="/privacy-policy">Политика конфиденциальности</router-link>
          <span>© 2023 Все права защищены</span>
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

  .top-line {
    width: 670px;
    height: 1px;
    margin: 0 auto;
    margin-bottom: 100px;
    background: linear-gradient(90deg, rgba(0, 0, 0, 0.00) 0%, rgba(2, 132, 199, 0.65) 50%, rgba(0, 0, 0, 0.00) 100%);
  }

  .text-block {
    width: 100%;
    max-width: 490px;
    text-align: center;
    margin: 0 auto;
    margin-bottom: 130px;

    .heading {
      font-size: 48px;
      font-weight: 700;
      margin-bottom: 20px;
    }

    .desc {
      color: #868B97;
      text-align: center;
      font-size: 16px;
      font-weight: 400;
      line-height: 150%; /* 24px */
    }
  }

  .row-events {
    display: flex;
    align-items: center;
    grid-gap: 10px;
    justify-content: center;
    margin-bottom: 130px;
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
  }
}
</style>