<template>
    <div class="learningDiagnostics">
        <h3 class="learn-title bullet-bot">단어 학습 진단</h3>
        <div class="chart-bar">
            <v-row no-gutters class="gap2">
                <v-col>
                    <div class="use-word" v-for="item in diagnostics" :key="item.title">
                        <span class="bullet" :style="{ background: item.color }"></span>
                        <p>{{ item.title }}</p>
                    </div>
                </v-col>
                <v-col>
                    <div class="progress-background" v-for="(item, idx) in diagnostics" :key="item.title">
                        <div
                            class="progress-date"
                            :class="item.value > 70 ? 'white' : ''"
                            :style="{ width: item.value + '%', background: item.color }"
                        >
                            <span>{{ idx === diagnostics.length - 1 ? item.value + '개' : item.value }}</span>
                        </div>
                    </div>
                </v-col>
            </v-row>
        </div>
    </div>
</template>

<script setup>
const mission = ref({ txt: '최근 7일' });
const missionItems = ref([{ txt: '최근 7일' }, { txt: '최근 30일' }]);

const diagnostics = [
    {
        title: '완벽하게 이해하고 활용한 단어',
        color: '#42C5B1',
        value: '85'
    },
    {
        title: '이해하지만 활용하지 못한 단어',
        color: '#8DBB2C',
        value: '26'
    },
    {
        title: '잘못 이해하고 활용한 단어',
        color: '#FFBF00',
        value: '38'
    },
    {
        title: '철자를 잘못 알고 있는 단어',
        color: '#FF8D00',
        value: '32'
    },
    {
        title: '아예 모르는 단어',
        color: '#FD6E7F',
        value: '5'
    },
    {
        title: '학습한 누적 단어 개수',
        color: '#B0B0B0',
        value: '100'
    }
];
</script>
