<template>
    <div class="analytics type_student">
        <AuthInfo />
        <div class="title-box">
            <div class="sub_title">
                <p>오늘의 수업 현황</p>
                <v-select
                    v-model="select"
                    :items="selectItems"
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
        <div class="d-flex mb20 gap2">
            <Calendar />
            <StudentAnalyticsProgressInfo />
        </div>
        <div class="d-flex mb20 gap2">
            <StudentAnalyticsSelfCheck />
            <StudentAnalyticsAchievement />
            <StudentAnalyticsTouchVoca />
        </div>
        <StudentAnalyticsDiagnosis />
    </div>
</template>
<script setup>
import { ref } from 'vue';
const select = ref({ state: '진도 학습' });
const selectItems = ref([{ state: '진도 학습' }, { state: 'AI CURI Talk!' }]);
</script>
