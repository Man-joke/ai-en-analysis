<template>
    <div class="stackedBar">
        <p class="tit bullet mgt30">각 색깔별 학업 성취율 그룹의 숫자를 누르면 자세한 학습자 정보를 확인할 수 있어요.</p>
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
</template>
<script setup></script>
