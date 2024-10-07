<template>
    <div class="analytics type_student">
        <AuthInfo />
        <div class="title-box">
            <div class="sub_title">
                <p>오늘의 수업 현황</p>
                <v-select
                    v-model="selected"
                    :items="items"
                    class="type_white"
                    :menu-props="{ contentClass: 'white_item' }"
                    item-title="state"
                    item-value="abbr"
                    label="Select"
                    variant="outlined"
                    persistent-hint
                    rounded
                    return-object
                    single-line
                    hide-details
                    base-color="#fff"
                ></v-select>
            </div>
        </div>
        <div class="d-flex mb-5 gap2">
            <Calendar />
            <StudentAnalyticsCuri />
        </div>
        <div class="d-flex mb-5 gap2">
            <StudentAnalyticsAchievement />
            <StudentAnalyticsTouchVoca />
        </div>
        <StudentAnalyticsDiagnosis />
    </div>
    <ModalCuriTalkInfo />
</template>
<script setup>
import { ref } from 'vue'

const selected = ref('진도 학습');
const items = ref(['진도 학습', 'AI CURI Talk!']);
</script>