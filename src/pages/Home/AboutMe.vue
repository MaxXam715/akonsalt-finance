<script setup>
import MyPhoto from "/src/assets/img/my-photo-1.jpg";
</script>

<template>
<section class="about-me section-container">
  <div class="G-container">
    <div class="row-container">
      <div class="about-text">
        <h2 class="title-heading">Меня зовут Андраник Саркисович, я независимый финансовый советник</h2>
        <div class="my-skills">
          <div class="item">
            <span class="title">Профессионал</span>
            <span class="desc">Профессиональный участник по финансовому просвещению, состоит в СРО НАСФП</span>
          </div>
          <div class="item">
            <span class="title">Аналитик</span>
            <span class="desc">Анализирует финансовое положение клиента, включая доходы, расходы, активы и обязательства</span>
          </div>
          <div class="item">
            <span class="title">Консультант</span>
            <span class="desc">Обучает клиента финансовой грамотности и помогает принимать обоснованные финансовые решения</span>
          </div>
        </div>
      </div>
      <div class="my-photo">
        <img :src="MyPhoto" class="photo">
      </div>
    </div>
    <div class="action-block">
      <button type="button" class="btn btn-primary">Записаться на консультацию</button>
      <button type="button" class="btn btn-outline btn-shadow">Подробнее обо мне</button>
    </div>
  </div>
</section>
</template>

<style scoped lang="scss">
.about-me {
  border-radius: 40px 40px 0 0;
  background-color: #FFF;

  @media (max-width: 767px) {
    padding-top: 60px;
    border-radius: 24px 24px 0 0;
  }

  .G-container {
    > .row-container {
      display: flex;
      justify-content: space-between;
      grid-column-gap: 100px;

      @media (max-width: 767px) {
        flex-direction: column;
      }

      .about-text {
        width: 100%;
        max-width: 850px;

        .title-heading {
          color: var(--Black);
          font-size: 48px;
          font-weight: 700;
          line-height: 110%; /* 52.8px */
          margin-bottom: 26px;

          @media (max-width: 1300px) {
            font-size: 38px;
          }

          @media (max-width: 767px) {
            font-size: 28px;
          }
        }

        .my-skills {
          display: flex;
          flex-direction: column;
          width: 100%;
          max-width: 600px;

          .item {
            display: grid;
            grid-template-columns: 1fr 320px;
            justify-content: space-between;
            padding: 24px 0;
            border-bottom: 1px solid rgba(161, 161, 170, 0.4);

            .title {
              color: #88888F;
              font-size: 18px;
              font-weight: 500;
              transition: all 400ms;
            }

            .desc {
              color: var(--Gray-1);
              font-size: 14px;
              font-weight: 500;
              line-height: 150%; /* 21px */
              transition: all 400ms;
            }

            &:hover {
              .title {
                color: var(--Black);
                transform: translateX(10px);
              }

              .desc {
                color: var(--Black);
              }
            }

            @media (max-width: 767px) {
              display: flex;
              flex-direction: column;
              grid-gap: 10px;
            }
          }
        }
      }

      .my-photo {

        .photo {
          width: 480px;
          border-radius: 24px;
          aspect-ratio: 480 / 600;
          object-fit: cover;

          @media (max-width: 1300px) {
            aspect-ratio: 353 / 500
          }
        }

        @media (max-width: 767px) {
          margin-top: 40px;

          .photo {
            aspect-ratio: 480 / 520;
          }
        }
      }
    }

    .action-block {
      display: flex;
      grid-gap: 20px;
      margin-top: 40px;

      .btn-outline {
        color: var(--Black);
        border-color: #E4E5E8;

        &:hover {
          color: var(--Black);
        }
      }

      @media (max-width: 767px) {
        flex-direction: column;

        .btn {
          width: 100%;
        }
      }
    }
  }
}
</style>