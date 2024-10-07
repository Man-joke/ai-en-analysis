<template>
    <v-card height="56rem" elevation="0" class="v-card-green flex-1-1-100">
        <div class="touchVoca">
            <v-card-item>
                <v-card-title>
                    <p>오늘의 Touch VOCA</p>
                    <v-btn class="icon_only icon_only-sm" rounded flat><i class="ico more" /></v-btn>
                </v-card-title>
            </v-card-item>
            <v-card-text class="px30 py20">
                <div class="box">
                    <div class="chart_multiple_radialbars">
                        <ChartMultipleRadialbars :values="values" />
                        <!-- !NOTE 차트 라벨부분 입니다.
                            'ChartMultipleRadialbars'가 한개일 경우
                            .chart-bar에 class="type_single" 을 추가 해주세요.
                        -->
                        <div class="chart-bar type_single">
                            <div class="use-word">
                                <span class="bullet color-1"></span>
                                <p>응시한 단어 수</p>
                            </div>
                            <div class="use-word">
                                <span class="bullet color-2"></span>
                                <p>알고 있는 단어 수</p>
                            </div>
                            <div class="use-word">
                                <span class="bullet color-3"></span>
                                <p>조금 알거나 모르는 단어 수</p>
                            </div>
                            <div class="use-word">
                                <span class="bullet color-4"></span>
                                <p>모르는 단어 수</p>
                            </div>
                        </div>
                        <!-- // 차트 라벨부분 입니다. -->
                    </div>
                </div>
            </v-card-text>
        </div>
    </v-card>
</template>
<script setup>
const isOpen = ref(false);
const values = [
    [20, 'gray', 2],
    [40, 'orange', 3],
    [50, 'lightgreen', 4],
    [60, 'skyblue', 5]
];
const openModalFunc = () => {
    isOpen.value = !isOpen.value;
};
</script>
