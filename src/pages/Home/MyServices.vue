<script setup>

</script>

<template>
<section class="my-services">
  <div class="G-container">
    <div class="header">
      <h2 class="title-heading">Какие услуги я осуществляю?</h2>
      <span class="desc">Полный комплекс услуг любой сложности: <br> от консалтинга и обучения, до интеграций решений стартапов в бизнес, а также оказываем профессиональную помощь на всех этапах сотрудничества</span>
    </div>

    <div class="list-my-services">
      <div class="item">
        <div class="img-preview">
          <img src="/src/assets/img/my-photo-2.jpg" class="photo" />
        </div>
        <div class="text-preview">
          <h3 class="title">Финансовое планирование</h3>
          <div class="desc-preview">
            <p class="desc">Консультант помогает клиентам определить финансовые цели, составить бюджет и разработать стратегию достижения поставленных целей</p>
            <button type="button" class="btn btn-primary">Заказать услугу</button>
          </div>
        </div>
      </div>
    </div>

  </div>
</section>
</template>

<style scoped lang="scss">
.my-services {
  border-radius: 30px;
  background: var(--Green-gradient, linear-gradient(128deg, #0D131C 0.13%, #0D131C 37.49%, #0D232E 62.14%, #08303D 80.04%, #103B49 91.98%, #031E27 107.11%));
  margin-top: -30px;
  padding: 100px 0;

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    grid-gap: 50px;
    margin-bottom: 50px;

    .title-heading {
      width: 100%;
      max-width: 450px;

      color: var(--Gray-1);
      font-size: 48px;
      font-weight: 700;
      line-height: 110%; /* 52.8px */
    }

    .desc {
      width: 100%;
      max-width: 735px;

      color: var(--Gray-1);
      font-size: 18px;
      font-weight: 500;
      line-height: 140%; /* 25.2px */
    }
  }

  .list-my-services {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(390px, 1fr));
    grid-column-gap: 24px;
    grid-row-gap: 40px;

    .item {
      display: flex;
      flex-direction: column;
      width: 100%;
      aspect-ratio: 500 / 430;
      border-radius: 16px;
      background: #131A20;
      box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.00), 0px 0px 0px 1px rgba(244, 244, 245, 0.10), 0px 0px 0px 0px #FFF;
      overflow: hidden;

      .img-preview {
        position: relative;
        width: 100%;
        height: 100%;

        &:after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 100%;
          box-shadow: 0px -15px 20px 0px #131A20 inset, 0px -50px 100px 0px #131D24 inset;
        }

        .photo {
          position: absolute;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      .text-preview {
        padding: 16px 32px 16px 32px;

        .title {
          color: #E4E4E7;
          font-size: 22px;
          font-weight: 600;
          line-height: 120%; /* 26.4px */
        }

        .desc-preview {
          max-height: 0;
          opacity: 0;
          transition: all 700ms linear;

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
        .img-preview {
          &:after {

          }
        }

        .text-preview {
          .desc-preview {
            max-height: 500px;
            opacity: 1;
          }
        }
      }
    }
  }
}
</style>