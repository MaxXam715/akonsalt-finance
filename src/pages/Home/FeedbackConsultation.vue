<script setup>
import InputField from "../../components/form/InputField.vue";
</script>

<template>
  <div class="feedback-consultation">
    <div class="content">
      <img src="/src/assets/img/my-photo-1.jpg" alt="" class="my-photo">
      <h3 class="title-form">Нужна профессиональная консультация?</h3>
      <span class="desc-form">Заполните форму, наши эксперты свяжутся с вами в течение дня и ответят на все возникшие вопросы</span>
      <form>
        <InputField type="text" placeholder="Ваше имя" />
        <InputField type="text" placeholder="Телефон"/>
        <button type="button" class="btn btn-outline btn-shadow">Отправить</button>
      </form>
    </div>
  </div>
</template>

<style scoped lang="scss">
.feedback-consultation {
  border-radius: 20px;
  background: rgba(0, 0, 0, 0.40);
  padding: 50px;
  margin-top: 50px;

  .content {
    position: relative;
    max-width: 700px;
    margin: 0 auto;
    transform: translateX(90px);

    .my-photo {
      position: absolute;
      right: calc(100% + 20px);
      width: 70px;
      aspect-ratio: 70 / 89;
      border-radius: 6px;
      object-fit: cover;
    }

    .title-form {
      color: #A1A1AA;
      font-size: 28px;
      font-weight: 700;
      line-height: 110%;
      margin-bottom: 10px;
    }

    .desc-form {
      color: #868B97;
      font-size: 16px;
      font-weight: 400;
      line-height: 150%;
      max-width: 490px;
    }

    form {
      display: flex;
      grid-gap: 8px;
      margin-top: 20px;

      .btn {
        height: 55px;
      }

      @media (max-width: 767px) {
        flex-direction: column;

        .btn {
          width: 100%;
        }
      }
    }

    @media (max-width: 1000px) {
      transform: none;

      .my-photo {
        display: none;
      }
    }

    @media (max-width: 767px) {
      .title-form {
        font-size: 20px;
      }

      .desc-form {
        font-size: 14px;
      }
    }
  }

  @media (max-width: 767px) {
    padding: 20px;
  }
}
</style>