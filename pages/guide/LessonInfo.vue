<template>
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

        <v-sheet class="dailyPerformance">
            <div class="tabs fluid">
                <v-tabs v-model="tab">
                    <v-tab value="one">오늘의 학업 성취율</v-tab>
                    <v-tab value="two">단원별 누적 성취율</v-tab>
                </v-tabs>
                <v-window v-model="tab">
                    <v-window-item value="one">
                        <div class="stackedBar">
                            <p class="tit bullet mgt30">
                                각 색깔별 학업 성취율 그룹의 숫자를 누르면 자세한 학습자 정보를 확인할 수 있어요.
                            </p>
                            <div class="colorGroup mgt30">
                                <div class="result_distribution">
                                    <!-- width 값은 max-width: 1100값을 기준으로 백분률 값 -->
                                    <div class="learner6" style="width: 7%">
                                        <div class="count_box">
                                            <i class="ico learner6" />
                                            <span>2</span>
                                        </div>
                                    </div>
                                    <div class="learner5" style="width: 10%">
                                        <div class="count_box">
                                            <i class="ico learner6" />
                                            <span>3</span>
                                        </div>
                                    </div>
                                    <div class="learner4" style="width: 15%">
                                        <div class="count_box">
                                            <i class="ico learner6" />
                                            <span>4</span>
                                        </div>
                                    </div>
                                    <div class="learner3" style="width: 16%">
                                        <div class="count_box">
                                            <i class="ico learner6" />
                                            <span>4</span>
                                        </div>
                                    </div>
                                    <div class="learner2" style="width: 36%">
                                        <div class="count_box">
                                            <i class="ico learner6" />
                                            <span>11</span>
                                        </div>
                                    </div>
                                    <div class="learner1" style="width: 18%">
                                        <div class="count_box">
                                            <i class="ico learner6" />
                                            <span>6</span>
                                        </div>
                                    </div>
                                </div>
                                <v-list class="mgt30 d-flex justify-end" bg-color="transparent" density="compact">
                                    <v-list-item> <em class="shchme-color-learner6" />미학습 </v-list-item>
                                    <v-list-item> <em class="shchme-color-learner5" />느린 학습자 </v-list-item>
                                    <v-list-item> <em class="shchme-color-learner4" />조금 느린 학습자 </v-list-item>
                                    <v-list-item> <em class="shchme-color-learner3" />중간 학습자 </v-list-item>
                                    <v-list-item> <em class="shchme-color-learner2" />조금 빠른 학습자 </v-list-item>
                                    <v-list-item> <em class="shchme-color-learner1" />빠른 학습자 </v-list-item>
                                </v-list>
                            </div>
                        </div>
                    </v-window-item>
                    <v-window-item value="two">
                        <div class="content mgt30">
                            <div class="card_no_data">
                                <i class="ico no_class_data ico_size_25" />
                                <p>데이터가 없습니다.</p>
                            </div>
                        </div>
                    </v-window-item>
                </v-window>
            </div>
        </v-sheet>
    </v-sheet>
</template>
<script setup>
import { ref } from 'vue';
const tab = ref('one');
</script>
