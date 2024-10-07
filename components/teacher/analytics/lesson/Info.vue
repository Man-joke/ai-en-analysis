<template>
    <v-sheet class="dailyPerformance">
        <div class="tabs fluid">
            <v-tabs v-model="tab">
                <v-tab value="one">오늘의 학업 성취율</v-tab>
                <v-tab value="two">단원별 누적 성취율</v-tab>
            </v-tabs>
            <v-window v-model="tab">
                <v-window-item value="one">
                    <ChartStackedBar />
                </v-window-item>
                <v-window-item value="two">
                    <ChartStackedBar />
                </v-window-item>
            </v-window>
        </div>
        <!-- 데이터 없을 때 -->
        <!-- <v-card elevation="0">
            <v-card-text>
                <div class="card_no_data">
                    <i class="ico no_class_data ico_size_25" />
                    <p>선택한 날에는 수업이 배정되어 있지 않습니다.</p>
                </div>
            </v-card-text>
        </v-card> -->

        <!-- 건수 있을 때 -->
        <!-- <v-card elevation="0">
            <v-card-text>
                <div class="card_no_data">
                    <i class="ico no_class_data ico_size_25" />
                    <p>예정된 수업이 <span>2건</span> 있습니다.</p>
                </div>
            </v-card-text>
        </v-card> -->
    </v-sheet>
</template>
<script setup>
import { ref } from 'vue';
const tab = ref('one');
</script>
