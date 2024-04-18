<script setup>
import {ref} from "vue";
import FeedbackConsultation from "./FeedbackConsultation.vue";

const myServices = ref([
    {
      id: 1,
      title: "Разработка индивидуального финансового плана",
      desc: "Консультант помогает клиентам определить финансовые цели, составить бюджет и разработать стратегию достижения поставленных целей",
      img: "/src/assets/img/services/service-1.jpg"
    },
    {
      id: 2,
      title: "Финансовое планирование",
      desc: "Консультант 2 помогает 2 клиентам 2 определить финансовые цели, составить бюджет и разработать стратегию достижения поставленных целей",
      img: "/src/assets/img/services/service-2.jpg"
    },
    {
      id: 3,
      title: "Финансовое консультирование предпринимателей",
      desc: "Консультант 3 помогает 3 клиентам 3 определить финансовые цели, составить бюджет и разработать стратегию достижения поставленных целей",
      img: "/src/assets/img/services/service-3.jpg"
    },
    {
      id: 4,
      title: "Управление рисками",
      desc: "Консультант 4 помогает 4 клиентам 4 определить финансовые цели, составить бюджет и разработать стратегию достижения поставленных целей",
      img: "/src/assets/img/services/service-4.jpg"
    },
    {
      id: 5,
      title: "Страхование",
      desc: "Консультант 5 помогает 5 клиентам 5 определить финансовые цели, составить бюджет и разработать стратегию достижения поставленных целей",
      img: "/src/assets/img/services/service-5.jpg"
    },
    {
      id: 6,
      title: "Кредитное консультирование",
      desc: "Консультант 6 помогает 6 клиентам 6 определить финансовые цели, составить бюджет и разработать стратегию достижения поставленных целей",
      img: "/src/assets/img/services/service-6.jpg"
    }
])

</script>

<template>
  <section class="section-container my-services">
    <div class="G-container">

      <div class="header">
        <h3 class="title-heading">Какие услуги я осуществляю?</h3>
        <span class="desc">Полный комплекс услуг любой сложности: <br> от консалтинга и обучения, до интеграций решений стартапов в бизнес, а также оказываем профессиональную помощь на всех этапах сотрудничества</span>
      </div>

      <div class="list-my-services">
        <div class="item" v-for="service in myServices">
          <div class="img-preview">
            <img :src="service.img" class="photo"/>
          </div>
          <div class="text-preview">
            <h3 class="title">{{ service.title }}</h3>
            <div class="desc-preview">
              <p class="desc">{{ service.desc }}</p>
              <button type="button" class="btn btn-primary">Заказать услугу</button>
            </div>
          </div>
        </div>
      </div>

      <div class="action-block">
        <router-link to="/my-services" class="btn btn-primary">Смотреть все услуги</router-link>
      </div>

      <FeedbackConsultation />

    </div>
  </section>
</template>

<style scoped lang="scss">
.my-services {
  position: relative;
  z-index: 2;
  background: var(--Green-gradient, linear-gradient(128deg, #0D131C 0.13%, #0D131C 37.49%, #0D232E 62.14%, #08303D 80.04%, #103B49 91.98%, #031E27 107.11%));
  margin-top: -30px;

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    grid-gap: 40px;
    margin-bottom: 50px;


    .title-heading {
      width: 100%;
      max-width: 450px;
      line-height: 110%;
      color: var(--Gray-1);
    }

    .desc {
      width: 100%;
      max-width: 735px;

      color: var(--Gray-1);
      font-size: 18px;
      font-weight: 500;
      line-height: 140%; /* 25.2px */
    }

    @media (max-width: 767px) {
      grid-gap: 20px;

      .desc {
        font-size: 16px;
      }
    }
  }

  .list-my-services {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(390px, 1fr));
    grid-column-gap: 24px;
    grid-row-gap: 40px;

    .item {
      position: relative;
      display: flex;
      flex-direction: column;
      width: 100%;
      aspect-ratio: 500 / 430;
      border-radius: 16px;
      background: #131A20;
      border: 1px solid rgba(255, 255, 255, 0.1);
      overflow: hidden;
      transition-delay: 0s;
      transition: border-color 400ms;

      .img-preview {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        &:after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 100%;
          //box-shadow: 0px -15px 20px 0px #131A20 inset, 0px -50px 100px 0px #131D24 inset;
        }

        .photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      .text-preview {
        position: absolute;
        left: 0;
        bottom: 0;
        display: flex;
        flex-direction: column;
        justify-content: end;
        width: 100%;
        height: 100%;
        padding: 16px 32px 16px 32px;

        &:after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(359deg, #131D24 0.9%, #131D24 22.14%, rgba(19, 29, 36, 0.71) 29.6%, rgba(19, 29, 36, 0.00) 38.89%);
          transition: all 300ms;
        }

        &:before {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          background: linear-gradient(359deg, #131D24 0.9%, #131D24 22.14%, rgba(19, 29, 36, 0.71) 100%, rgba(19, 29, 36, 0.00) 38.89%);
          transition: all 300ms;
        }

        > * {
          position: relative;
          z-index: 2;
        }

        .title {
          color: #E4E4E7;
          font-size: 22px;
          font-weight: 500;
          line-height: 120%; /* 26.4px */
        }

        .desc-preview {
          max-height: 0;
          opacity: 0;
          transition: max-height 700ms linear, opacity 900ms;
          transition-delay: 0s;

          .desc {
            color: var(--Gray-1);
            font-size: 14px;
            font-weight: 400;
            line-height: 150%; /* 21px */
            margin-bottom: 16px;
            margin-top: 16px;
          }

          .btn {
            margin-bottom: 16px;
          }
        }
      }

      &:hover {
        border-color: rgba(255, 255, 255, 0.3);

        .text-preview {
          .desc-preview {
            max-height: 500px;
            opacity: 1;
          }

          &:before {
            opacity: 1;
          }
        }
      }
    }

    @media (max-width: 767px) {
      grid-template-columns: 1fr;
    }
  }

  .action-block {
    display: flex;
    align-items: center;
    justify-content: center;
    grid-gap: 20px;
    margin-top: 40px;
  }
}
</style>