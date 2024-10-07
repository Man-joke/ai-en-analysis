<template>
    <v-sheet class="inner_contents chart_multiple_radialbars">
        <!-- 데이터 있을 때 -->
        <v-list class="chart_wrap gap3" max-width="105rem">
            <v-list-item class="chart">
                <div class="avatar avatar-box">
                    <v-img
                        :src="avatar"
                        alt="아바타 이미지"
                        class="avatar-item"
                        max-width="5rem"
                    />
                    <div class="avatar-info">
                        <span class="info_number">15번</span>
                        <span class="info_name">늘푸른하늘</span>
                    </div>
                </div>
                <ChartMultipleRadialbars :values="values" />
            </v-list-item>
            <v-list-item class="chart">
                <div class="avatar avatar-box">
                    <v-img
                        :src="avatar"
                        alt="아바타 이미지"
                        class="avatar-item"
                        max-width="5rem"
                    />
                    <div class="avatar-info">
                        <span class="info_number">15번</span>
                        <span class="info_name">늘푸른하늘</span>
                    </div>
                </div>
                <ChartMultipleRadialbars :values="values" />
            </v-list-item>
            <v-list-item class="chart">
                <div class="avatar avatar-box">
                    <v-img
                        :src="avatar"
                        alt="아바타 이미지"
                        class="avatar-item"
                        max-width="5rem"
                    />
                    <div class="avatar-info">
                        <span class="info_number">15번</span>
                        <span class="info_name">늘푸른하늘</span>
                    </div>
                </div>
                <ChartMultipleRadialbars :values="values" />
            </v-list-item>
        </v-list>
        <!-- !NOTE 차트 라벨부분 입니다.
            'ChartMultipleRadialbars'가 한개일 경우
            .chart-bar에 class="type_single" 을 추가 해주세요.
        -->
        <div class="chart-bar">
            <div class="use-word"><span class="bullet color-1"></span><p>응시한 단어 수</p></div>
            <div class="use-word"><span class="bullet color-2"></span><p>알고 있는 단어 수</p></div>
            <div class="use-word"><span class="bullet color-3"></span><p>조금 알거나 모르는 단어 수</p></div>
            <div class="use-word"><span class="bullet color-4"></span><p>모르는 단어 수</p></div>
        </div>
        <!-- // 차트 라벨부분 입니다. -->
        <div class="page_buttons mgt30">
            <v-btn rounded flat class="secondary">3명 더 보기 (1/4)</v-btn>
        </div>
    </v-sheet>
</template>

<script setup>
import avatar from '@/assets/images/temp/img_pho_st01.png';

const isOpen = ref(false);
const values = [
    [20, '#909090', 2],
    [40, '#FFBF00', 3],
    [50, '#42C5B1', 4],
    [60, '#46A7E5', 5]
];
const openModalFunc = () => {
    isOpen.value = !isOpen.value;
};
</script>