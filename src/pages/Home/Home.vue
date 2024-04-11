<script setup>

</script>

<template>
  <section class="section-promo">
    <div class="G-container">
      <div class="bg-gradient"></div>
      <div class="row-container">
        <div class="about-me">
          <h1 class="title-heading">Превратите свои мечты в <br>реальность с Invest Globals</h1>
          <p class="desc">Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar elementum tempus hac tellus libero accumsan.</p>
        </div>
        <div class="row-action">
          <button type="button" class="btn btn-primary">Записаться на консультацию</button>
          <button type="button" class="btn btn-outline btn-shadow">Заказать услугу</button>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.section-promo {
  height: 100vh;
  height: 100dvh;
  overflow: hidden;

  .G-container {
    position: relative;
    height: 100%;

    .bg-gradient {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 1109px;
      height: 633px;
      background: rgba(255, 255, 255, 0.00);
      filter: blur(192px);

      &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0.2;
        background: var(--Bg-gradient, linear-gradient(90deg, #06B6D4 0%, #1E40AF 100%));
      }
    }

    .row-container {
      position: relative;
      z-index: 2;
      display: flex;
      justify-content: center;
      flex-direction: column;
      height: 100%;
      color: #fff;
      max-width: 985px;

      .about-me {
        display: flex;
        flex-direction: column;
        margin-bottom: 70px;

        .title-heading {
          font-size: 72px;
          font-weight: 700;
          line-height: 90%; /* 64.8px */
          letter-spacing: -1px;
          margin-bottom: 40px;

          background: var(--Gray-gradient, linear-gradient(135deg, #FFF 0%, #9E9EA9 100%));
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .desc {
          width: 100%;
          max-width: 700px;

          color: var(--Gray-1);
          font-size: 24px;
          font-weight: 400;
          line-height: 140%; /* 33.6px */
        }

        @media (max-width: 1450px) {
          .title-heading {
            font-size: 4vw;
          }

          .desc {
            font-size: 1.5vw;
          }
        }

        @media (max-width: 1300px) {
          .title-heading {
            font-size: 5vw;
          }

          .desc {
            font-size: 2vw;
          }
        }

        @media (max-width: 767px) {
          .title-heading {
            font-size: 11vw;
            line-height: 110%;

            br {
              display: none;
            }
          }

          .desc {
            font-size: 16px;
          }
        }
      }

      .row-action {
        display: flex;
        grid-gap: 20px;

        @media (max-width: 767px) {
          flex-direction: column;

          .btn {
            width: 100%;
          }
        }
      }
    }
  }
}
</style>