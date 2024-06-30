<script setup>
import {ref} from "vue";
import ManualStatisticsComponent from "@/components/manual/ManualStatisticsComponent.vue";
import ManualTextImageLeftComponent from "@/components/manual/ManualTextImageComponent.vue";
import ManualTextImageRightComponent from "@/components/manual/ManualTextImageComponent.vue";

const manualTitle = ref('Mymental - це зручно:');
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
        <div class="manual-test mt-12">
          <ManualTextImageLeftComponent
              img-alt="left-text"
              img-src="/images/manual-test-image.png"
              text-desc="пройди швидкий тест або обери з каталогу"
              text-title="Обери психотерапевта"
              :reverse="false"
          />
        </div>
        <div class="manual-time">
          <ManualTextImageRightComponent
              img-alt="right-text"
              img-src="/images/manual-test-left-image.png"
              text-title="Вибери зручний для тебе день та час зустрічі"
              text-desc="ти одразу бачиш доступні слоти у фахівця в онлайн-календарі"
              :reverse="true"
          />
        </div>
        <div class="manual-booking mt-12">
          <ManualTextImageRightComponent
              img-alt="left-text"
              img-src="/images/manual-booking-image.png"
              text-desc="після оплати ми надішлемо підтвердження з посиланням на зустріч на e-mail"
              text-title="Забронюй консультацію"
              :reverse="false"
          />
        </div>
        <div class="manual-process">
          <ManualTextImageRightComponent
              img-alt="right-text"
              img-src="/images/manual-process-image.png"
              text-title="Керуй процесом"
              text-desc="ти можеш змінювати дату та час або відмінити консультацію за 24 години"
              :reverse="true"
          />
        </div>
      </div>
    </div>
  </div>
</template>