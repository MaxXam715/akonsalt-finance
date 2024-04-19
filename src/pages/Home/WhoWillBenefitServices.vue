<script setup>
import {ref} from "vue";

const myServices = ref(1);
console.log("myServices", myServices.value)

</script>

<template>
  <section class="section-container who-will-benefit-services">
    <div class="G-container">
      <h3 class="title-heading heading-gradient">Кому подойдут услуги</h3>

      <div class="nav-container">
        <button type="button" class="btn btn-tab active" @click="activeItem = 1">Условия участия</button>
        <button type="button" class="btn btn-tab" @click="activeItem = 2">Условия участия</button>
        <button type="button" class="btn btn-tab" @click="activeItem = 3">Условия участия</button>
      </div>
      <div class="switch-content">
        <div class="grid-container">
          <div class="item">
            <span class="title">Российское юридическое лицо</span>
            <img src="./../../assets/img/WhoWillBenefitServices/terms-participation/image-1.png" class="image" />
          </div>
          <div class="item">
            <span class="title">Проект соответствует приоритетным направлениям</span>
            <img src="./../../assets/img/WhoWillBenefitServices/terms-participation/image-2.png" class="image" />
          </div>
          <div class="item">
            <span class="title">Есть команда из двух и более человек</span>
            <img src="./../../assets/img/WhoWillBenefitServices/terms-participation/image-3.png" class="image" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.who-will-benefit-services {
  color: #fff;

  .nav-container {
    display: flex;
    padding: 4px;
    grid-gap: 5px;
    border-radius: 24px;
    border: 1px solid #2E2E2E;
    margin-top: 50px;

    .btn-tab {
      width: 100%;
      border-radius: 20px;
      background-color: transparent;
      color: #fff;
      white-space: nowrap;

      &:hover {
        background-color: rgba(255, 255, 255, 0.09);
      }

      &.active {
        background: linear-gradient(90deg, #0696D4 0%, #046C60 100%);
      }
    }

    @media (max-width: 767px) {
      overflow: auto;
    }
  }

  .switch-content {
    .grid-container {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(390px, 1fr));
      grid-gap: 24px;
      margin-top: 50px;

      .item {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        height: 240px;
        border-radius: 24px;
        border: 1px solid #2E2E2E;
        background: rgba(0, 0, 0, 0.50);
        padding: 25px;

        .title {
          color: #E4E4E7;
          font-size: 22px;
          font-weight: 600;
        }

        .image {
          width: auto;
          height: 100px;
          margin-left: auto;
        }
      }
    }
  }
}
</style>