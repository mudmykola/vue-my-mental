<script setup>
import ManualStatisticsComponent from "@/components/manual/ManualStatisticsComponent.vue";
import ManualTextImageComponent from "@/components/manual/ManualTextImageComponent.vue";
import { ref } from "vue";

const manualTitle = ref("Mymental - це зручно:");
</script>

<template>
  <div class="manual bg-muted h-full pb-[109px] relative">
    <div class="container">
      <div class="manual-inner ">
        <div class="manual-statistics container absolute right-0 left-0 top-[-80px]">
          <ManualStatisticsComponent/>
        </div>
        <div class="manual-inner__title text-center pt-[154px]">
          <h2 class="text-[48px] font-bold font-sans text-black">{{ manualTitle }}</h2>
        </div>
        <div id="manual-test" class="manual-test mt-12">
          <ManualTextImageComponent
              :reverse="false"
              img-alt="left-text"
              img-src="/images/manual-test-image.png"
              text-desc="пройди швидкий тест або обери з каталогу"
              text-title="Обери психотерапевта"
          />
        </div>
        <div id="manual-time" class="manual-time">
          <ManualTextImageComponent
              :reverse="true"
              img-alt="right-text"
              img-src="/images/manual-test-left-image.png"
              text-desc="ти одразу бачиш доступні слоти у фахівця в онлайн-календарі"
              text-title="Вибери зручний для тебе день та час зустрічі"
          />
        </div>
        <div id="manual-booking" class="manual-booking mt-12">
          <ManualTextImageComponent
              :reverse="false"
              img-alt="left-text"
              img-src="/images/manual-booking-image.png"
              text-desc="після оплати ми надішлемо підтвердження з посиланням на зустріч на e-mail"
              text-title="Забронюй консультацію"
          />
        </div>
        <div id="manual-process" class="manual-process">
          <ManualTextImageComponent
              :reverse="true"
              img-alt="right-text"
              img-src="/images/manual-process-image.png"
              text-desc="ти можеш змінювати дату та час або відмінити консультацію за 24 години"
              text-title="Керуй процесом"
          />
        </div>
      </div>
    </div>
  </div>
</template>