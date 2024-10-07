<template>
    <v-card elevation="0" max-height="54rem">
        <v-sheet class="dailyPerformance">
            <div class="lessonInfo">
                <h3 class="title"><span>3월 17일 화요일</span> 수업정보</h3>
                <v-spacer></v-spacer>
                <div class="notice d-flex align-center">
                    <div class="box d-flex d-flex align-center">
                        <v-btn flat rounded size="small" class="icon_only icon_only-transparent icon_only-sm">
                            <div class="size_sm">
                                <i class="ico size_5 left_24"></i>
                                <span class="blind">이전</span>
                            </div>
                        </v-btn>
                        <div class="info">
                            <p class="name">Lesson 1. How Are You?</p>
                            <p class="kind">1차시</p>
                        </div>
                        <v-btn flat rounded size="small" class="icon_only icon_only-transparent icon_only-sm">
                            <div class="size_sm">
                                <i class="ico size_5 right_24"></i>
                                <span class="blind">다음</span>
                            </div>
                        </v-btn>
                    </div>
                    <div class="pages">
                        교과서<br />
                        <span class="num">110~113쪽</span>
                    </div>
                </div>
            </div>
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
        </v-sheet>
    </v-card>

    <!-- 예정된 수업이 있을경우 -->
    <v-card elevation="0" height="54rem">
        <v-card-item>
            <v-card-title>
                <span> 영역별 학업 성취도</span>
                <v-spacer />
                <v-btn class="icon_only" rounded flat><i class="ico more ico_size_10" /></v-btn>
            </v-card-title>
        </v-card-item>
        <v-card-text>
            <div class="card_no_data">
                <i class="ico no_class_data ico_size_25" />
                <p>예정된 수업이 <span class="text_err">2건</span> 있습니다.</p>
            </div>
        </v-card-text>
    </v-card>

    <!-- 수업이 없을 경우 -->
    <v-card elevation="0" height="54rem">
        <v-card-item>
            <v-card-title>
                <span> 영역별 학업 성취도</span>
                <v-spacer />
                <v-btn class="icon_only" rounded flat><i class="ico more ico_size_10" /></v-btn>
            </v-card-title>
        </v-card-item>
        <v-card-text>
            <div class="card_no_data">
                <i class="ico no_class_data ico_size_25" />
                <p>선택한 날에는 수업이 배정되어 있지 않습니다.</p>
            </div>
        </v-card-text>
    </v-card>
</template>
<script setup>
import { ref } from 'vue';
const tab = ref('one');
</script>
