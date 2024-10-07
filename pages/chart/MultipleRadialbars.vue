<template>
    <h2>차트가 3개일 경우</h2>
    <div class="chart_multiple_radialbars">
        <ChartMultipleRadialbars :values="values" />
        <ChartMultipleRadialbars :values="values" />
        <ChartMultipleRadialbars :values="values" />
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
    </div>

    <h2>차트가 한개일 경우</h2>
    <div class="chart_multiple_radialbars">
        <ChartMultipleRadialbars :values="values" />
        <!-- !NOTE 차트 라벨부분 입니다.
            'ChartMultipleRadialbars'가 한개일 경우
            .chart-bar에 class="type_single" 을 추가 해주세요.
        -->
        <div class="chart-bar type_single">
            <div class="use-word"><span class="bullet color-1"></span><p>응시한 단어 수</p></div>
            <div class="use-word"><span class="bullet color-2"></span><p>알고 있는 단어 수</p></div>
            <div class="use-word"><span class="bullet color-3"></span><p>조금 알거나 모르는 단어 수</p></div>
            <div class="use-word"><span class="bullet color-4"></span><p>모르는 단어 수</p></div>
        </div>
        <!-- // 차트 라벨부분 입니다. -->
    </div>
</template>

<script setup>
const isOpen = ref(false);
const values = [
    [20, '#909090', 2],
    [40, '#FFBB00', 3],
    [50, '#42C5B1', 4],
    [60, '#0099FF', 5]
];
const openModalFunc = () => {
    isOpen.value = !isOpen.value;
};
</script>