<template>
    <div class="LearningHistoryStats">
        <v-sheet>
            <div class="title top">
                <h3>우리 반</h3>
                <div class="d-flex gap1 mgl10">
                    <div class="select_box_wrap">
                        <v-select
                            v-model="select01"
                            :items="select01Items"
                            item-title="txt"
                            item-value="abbr"
                            label="TEXT"
                            variant="outlined"
                            persistent-hint
                            rounded
                            return-object
                            single-line
                            hide-details
                            item-color
                        ></v-select>
                    </div>
                    <div class="select_box_wrap">
                        <v-select
                            v-model="select02"
                            :items="select02Items"
                            item-title="txt"
                            label="TEXT"
                            variant="outlined"
                            persistent-hint
                            rounded
                            return-object
                            single-line
                            hide-details
                        ></v-select>
                    </div>
                </div>
                <v-spacer></v-spacer>
                <p class="font-body4 bullet">조회 기간 : 2023년 3월 8일 ~ 2023년 3월 14일</p>
            </div>
        </v-sheet>
    </div>
</template>
<script setup>
const select = { state: 'Florida', abbr: 'FL' };

const select01 = ref({ txt: '색칠판 학습 이력' });
const select02 = ref({ txt: '완성도 Top 5' });

const select01Items = ref([{ txt: 'Touch Voca' }, { txt: '성취기준 키워드' }]);
const select02Items = ref([{ txt: '완성도 Top 5' }, { txt: '급상승 Top 5 ' }, { txt: '독려 필요 Top 5' }]);
</script>
