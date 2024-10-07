<template>
    <h2>차트가 3개일 경우</h2>
    <div class="chart_wrap donut_wrap">
        <ChartDonut :type="'often'" :chartData="chartData1" />
        <ChartDonut :type="'much'" :chartData="chartData2" />
        <ChartDonut :type="'long'" :chartData="chartData3" />
    </div>
    <h2>차트가 한개일 경우</h2>
    <ChartDonut :type="'often'" :chartData="chartData1" />
</template>
<script setup>
// const apiClassStore = useApiTeacherClassStore();
// const { cumulativeRecordHowLongState, cumulativeRecordHowOftenState, cumulativeRecordHowMuchState } = apiClassStore;

const chartData1 = ref({
    labels: ['1', '2', '3', '4', '5'],
    datasets: [
        {
            type: 'doughnut',
            label: 'My First Dataset',
            data: [22, 15, 47, 5, 11],
            backgroundColor: ['#42C5B1', '#FFBF00', '#FF8D00', '#FD6E7F', '#909090'],
            borderColor: ['#42C5B1', '#FFBF00', '#FF8D00', '#FD6E7F', '#909090'],
            hoverOffset: 4,
            cutout: '55%'
        }
    ]
});

const chartData2 = ref({
    labels: ['1', '2', '3', '4', '5'],
    datasets: [
        {
            type: 'doughnut',
            label: 'My First Dataset',
            data: [50, 25, 15, 7, 11],
            backgroundColor: ['#42C5B1', '#FFBF00', '#FF8D00', '#FD6E7F', '#909090'],
            borderColor: ['#42C5B1', '#FFBF00', '#FF8D00', '#FD6E7F', '#909090'],
            hoverOffset: 4,
            cutout: '55%'
        }
    ]
});

const chartData3 = ref({
    labels: ['1', '2', '3', '4', '5'],
    datasets: [
        {
            type: 'doughnut',
            label: 'My First Dataset',
            data: [43, 15, 25, 14, 5],
            backgroundColor: ['#42C5B1', '#FFBF00', '#FF8D00', '#FD6E7F', '#909090'],
            borderColor: ['#42C5B1', '#FFBF00', '#FF8D00', '#FD6E7F', '#909090'],
            hoverOffset: 4,
            cutout: '55%'
        }
    ]
});
</script>
