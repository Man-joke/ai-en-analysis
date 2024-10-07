<template>
    <v-sheet>
        <div class="tableCarousel">
            <h3 class="bullet">
                단원별 평균 학업 성취율입니다. 각 단원별 학업 성취율을 클릭하면, 학생별로 단원 평가를 과제로 출제할 수 있습니다.
            </h3>
            <i class="ico close_circle close position-absolute"></i>
            <div class="box">
                <div class="left-table">
                    <v-data-table :headers="tableInfoHead" :items="tableInfo" item-value="number" class="color_gray type_center">
                    </v-data-table>
                </div>
                <!-- 캐러셀 영역 -->
                <TableCarousel />
                <!-- //캐러셀 영역 -->
                <div class="right-table">
                    <v-data-table :headers="tableAverageHead" :items="tableAverage" item-value="number" class="color_gray type_center">
                    </v-data-table>
                </div>

                <!-- 패널 영역 -->
                <TeacherAnalyticsAccumulationCustomized />
            </div>
            <div class="page_buttons">
                <v-btn rounded flat class="secondary">5명 더보기 (1/4)</v-btn>
            </div>
        </div>
    </v-sheet>
</template>
<script setup>
// 이름
const tableInfoHead = [
    {
        title: '번호',
        sortable: false,
        key: 'number'
    },
    { title: '이름', key: 'name' }
];
const tableInfo = [
    {
        number: 1,
        name: '김아미'
    },
    {
        number: 2,
        name: '김아미'
    },
    {
        number: 3,
        name: '김아미'
    },
    {
        number: 4,
        name: '김아미'
    },
    {
        number: 5,
        name: '김아미'
    }
];

// 평균 학업 성취율
const tableAverageHead = [
    {
        title: '평균 학업 성취율',
        sortable: false,
        key: 'average'
    }
];

const tableAverage = [
    {
        average: '75%'
    },
    {
        average: '75%'
    },
    {
        average: '75%'
    },
    {
        average: '75%'
    },
    {
        average: '75%'
    }
];
</script>
