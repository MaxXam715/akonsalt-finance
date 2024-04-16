<script setup>
import {ref} from "vue";

const isShowClass = ref(false);

function toggleFaq() {
  requestAnimationFrame( () => {
    isShowClass.value = !isShowClass.value;
  });
}
</script>

<template>
  <div class="faq-container">
    <h2 class="title-block">Часто задаваемые вопросы</h2>
    <span class="desc-block">Постарался ответить на все вопросы, которые чаще всего задают</span>
    <div class="grid-container">
      <div class="col-letter">
        <span class="question">?</span>
      </div>
      <div class="col-questions">
        <div class="item" :class="{ 'show' : isShowClass}">
          <span class="title" @click="toggleFaq">Что делает финансовый советник?</span>
          <div class="answer-container">
            <span class="desc">Даёт советы по финансам анализируя финансовое положение клиента, включая доходы, расходы, активы и обязательства.</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.faq-container {
  .title-block {
    margin-bottom: 16px;
  }

  .grid-container {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin-top: 70px;

    .col-letter {
      .question {
        background: linear-gradient(135deg, #FFF 0%, #9E9EA9 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;

        font-size: 400px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
      }
    }

    .col-questions {
      width: 100%;
      max-width: 700px;

      .item {
        box-shadow: 0px -1px 0px 0px rgba(0, 0, 0, 0.15) inset;
        transition: all 400ms;

        .title {
          position: relative;
          padding: 20px 15px;
          color: var(--Black);
          font-size: 18px;
          font-weight: 500;
          line-height: 140%;
          cursor: pointer;

          &:after {
            content: "";
            position: absolute;
            top: 50%;
            right: 15px;
            transform: translateY(-50%);
            display: inline-block;
            height: 1em;
            width: 1em;
            mask-size: contain;
            -webkit-mask-size: contain;
            mask-repeat: no-repeat;
            -webkit-mask-repeat: no-repeat;
            mask-position: center;
            -webkit-mask-position: center;
            font-size: 16px;
            background-color: var(--Gray-1);
            transition: all 400ms;

            mask-image: url(./../assets/icons/arrow-right.svg);
            -webkit-mask-image: url(./../assets/icons/arrow-right.svg);
          }
        }

        .answer-container {
          padding: 0 15px;
          max-height: 0px;
          opacity: 0;
          overflow: hidden;
          transition: all 400ms;

          .desc {
            color: var(--Gray-1);
            font-weight: 500;
            line-height: 150%;
          }
        }

        &.show {
          padding-bottom: 20px;

          .title {
            &:after {
              transform: translateY(-50%) rotate(-90deg);
            }
          }
          .answer-container {
            opacity: 1;
            max-height: 500px;
          }
        }
      }
    }
  }
}
</style>