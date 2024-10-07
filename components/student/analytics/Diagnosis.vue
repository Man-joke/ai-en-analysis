<template>
    <v-card elevation="0" class="v-card-lightblue">
        <v-card-item>
            <v-card-title class="d-flex align-center">
                <span class="mr-5"> 나의 학습 분석</span>
                <div class="d-flex">
                    <div class="select_box_wrap mgr10">
                        <v-select
                            v-model="mission"
                            :items="missionItems"
                            class="type_primary_fill"
                            :menu-props="{ contentClass: 'primary_fill_item' }"
                            item-title="txt"
                            item-value="abbr"
                            label="TEXT"
                            variant="outlined"
                            persistent-hint
                            rounded
                            return-object
                            single-line
                            hide-details
                        ></v-select>
                    </div>
                    <range-date-picker />
                </div>
            </v-card-title>
        </v-card-item>
        <v-card-text class="py20 px40">
            <v-row no-gutters class="gap6">
                <v-col>
                    <div class="learningDiagnostics">
                        <h3 class="learn-title bullet-bot">단어 학습 진단</h3>
                        <chartBasicBar />
                    </div>
                </v-col>
                <v-col>
                    <div class="learningDiagnostics">
                        <h3 class="learn-title bullet-bot">누적 학습 시간</h3>
                        <chartBasicBar :solidColor="true" />
                    </div>
                </v-col>
            </v-row>
        </v-card-text>
    </v-card>
</template>
<script setup>
import { ref } from 'vue';

const mission = ref({ txt: '최근 7일' });
const missionItems = ref([{ txt: '최근 7일' }, { txt: '최근 30일' }]);
</script>
