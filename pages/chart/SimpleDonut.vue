<template>
    <ChartSimpleDonut :weather-chart="weatherChart" />
</template>
<script setup>
const weatherChart = {
    labels: ['맑음', '흐리고 비', '흐리고 천둥', '바람 많이', '무응답', '흐린 뒤 갬', '맑았다 흐림', '폭우', '흐리고 눈'],
    datasets: [
        {
            type: 'doughnut',
            label: '맑음',
            data: [10, 5, 5, 5, 4, 4, 7, 4, 3],
            backgroundColor: ['#67CCEE', '#F5B659', '#FF7283', '#59D8AF', '#D0D0D0', '#8EC536', '#AB8FFD', '#F5E3AE', '#EEA0D0'],
            spacing: 5,
        },
    ]
};
</script>
