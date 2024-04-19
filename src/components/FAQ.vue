<script setup>
import {ref} from "vue";

const arrayFAQ = [
  {
    question: "Что делает инвестиционный советник?",
    answer: "Предоставляю актуальные и своевременные финансовые рекомендации и аналитику",
  },
  {
    question: "Что делает финансовый консультант?",
    answer: "Предоставляю актуальные и своевременные финансовые рекомендации и аналитику",
  },
  {
    question: "Сколько денег я смогу получать пассивно?",
    answer: "Предоставляю актуальные и своевременные финансовые рекомендации и аналитику",
  },
  {
    question: "Сколько денег нужно, чтобы начать инвестировать?",
    answer: "Предоставляю актуальные и своевременные финансовые рекомендации и аналитику",
  },
  {
    question: "Где торговать зарубежными акциями?",
    answer: "Предоставляю актуальные и своевременные финансовые рекомендации и аналитику",
  }
]

const isShow = ref(null);
function toggleFaq(index) {
  isShow.value = isShow.value === index ? null : index;
}
</script>

<template>
  <div class="faq-container">
    <h3 class="title-block">Часто задаваемые вопросы</h3>
    <span class="desc-block">Постарался ответить на все вопросы, которые чаще всего задают</span>
    <div class="grid-container">
      <div class="col-letter">
        <span class="question">?</span>
      </div>
      <div class="col-questions">

        <div
            v-for="(faq, index) in arrayFAQ"
            :key="index"
            class="item"
            :class="{ 'show': isShow === index }"
        >
          <span class="title" @click="toggleFaq(index)">{{ faq.question }}</span>
          <transition name="show">
            <div v-if="isShow === index" class="answer-container">
              <span class="desc">{{ faq.answer }}</span>
            </div>
          </transition>
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

    @media (max-width: 900px) {
      margin-top: 40px;
    }

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

      @media (max-width: 900px) {
        display: none;
      }
    }

    .col-questions {
      width: 100%;
      max-width: 700px;

      @media (max-width: 900px) {
        max-width: 100%;
      }

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
            transition: all 200ms;

            mask-image: url(./../assets/icons/arrow-right.svg);
            -webkit-mask-image: url(./../assets/icons/arrow-right.svg);
          }
        }

        .answer-container {
          padding: 0 15px;
          max-height: 500px;
          opacity: 1;
          overflow: hidden;
          transition: max-height 1200ms, opacity 900ms;


          .desc {
            color: var(--Gray-1);
            font-weight: 500;
            line-height: 150%;
            padding-bottom: 20px;

            @media (max-width: 900px) {
              font-size: 14px;
            }
          }

          &.show-enter-active,
          &.show-leave-active {
          }

          &.show-enter-from,
          &.show-leave-to {
            max-height: 0;
            opacity: 0;
            transition-delay: -600ms;
          }
        }

        &.show {
          .title {
            &:after {
              transform: translateY(-50%) rotate(90deg);
            }
          }
        }
      }
    }
  }
}
</style>