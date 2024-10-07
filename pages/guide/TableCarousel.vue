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
                <div class="center-table">
                    <!-- 스크롤 계속 되는걸 막을 시 추가 :continuous="false" -->
                    <v-carousel hide-delimiters class="table-carousel" height="auto">
                        <!-- 아이템1 -->
                        <v-carousel-item>
                            <v-data-table :headers="tableUnitHead" :items="tableContent" item-value="number" class="color_gray type_center">
                                <template v-slot:item="{ item }">
                                    <tr>
                                        <td>
                                            <!-- 차시가 진행되지 않았을 경우 삼각 엠블럼 노출 X -->
                                            <!-- 
                                    .emblem_01 미학습,
                                    .emblem_02 느린 학습자,
                                    .emblem_03 조금 느린 학습자,
                                    .emblem_03 중간 학습자,
                                    .emblem_04 조금 빠른 학습자,
                                    .emblem_05 빠른 학습자
                                -->
                                            <i class="emblem emblem_02"></i>
                                            <v-btn variant="text" :ripple="false" :class="getClass(item.unit01)">{{
                                                addPercentIfNumber(item.unit01)
                                            }}</v-btn>

                                            <!-- 상황에 맞체 화면에 icon 노출 필요  -->
                                            <!-- 출제완료 -->
                                            <i class="ico stamp_complete"></i>
                                            <!-- 출제대기 -->
                                            <!-- <i class="ico stamp_wait"></i> -->
                                        </td>
                                        <td>
                                            <i class="emblem emblem_05"></i>
                                            <v-btn variant="text" :ripple="false" :class="getClass(item.unit02)">{{
                                                addPercentIfNumber(item.unit02)
                                            }}</v-btn>
                                            <i class="ico list"></i>
                                        </td>
                                        <td>
                                            <i class="emblem" :class="item.unit03 === '미학습' ? 'emblem_01' : 'emblem_04'"></i>
                                            <v-btn variant="text" :ripple="false" :class="getClass(item.unit03)">{{
                                                addPercentIfNumber(item.unit03)
                                            }}</v-btn>
                                        </td>
                                        <!-- 단원이 진행되지 않았을 경우 .disabled -->
                                        <td class="disabled">
                                            <span :class="getClass(item.unit04)">{{ item.unit04 }}</span>
                                        </td>
                                        <td class="disabled">
                                            <span :class="getClass(item.unit05)">{{ item.unit05 }}</span>
                                        </td>
                                        <td class="disabled">
                                            <span :class="getClass(item.unit06)">{{ item.unit06 }}</span>
                                        </td>
                                    </tr>
                                </template>
                            </v-data-table>
                        </v-carousel-item>
                        <!-- 아이템2 -->
                        <v-carousel-item>
                            <v-data-table :headers="tableUnitHead" :items="tableContent" item-value="number" class="color_gray type_center">
                                <template v-slot:item="{ item }">
                                    <tr>
                                        <td>
                                            <!-- 차시가 진행되지 않았을 경우 삼각 엠블럼 노출 X -->
                                            <!-- 
                                    .emblem_01 미학습,
                                    .emblem_02 느린 학습자,
                                    .emblem_03 조금 느린 학습자,
                                    .emblem_03 중간 학습자,
                                    .emblem_04 조금 빠른 학습자,
                                    .emblem_05 빠른 학습자
                                -->
                                            <i class="emblem emblem_02"></i>
                                            <v-btn variant="text" :ripple="false" :class="getClass(item.unit01)">{{
                                                addPercentIfNumber(item.unit01)
                                            }}</v-btn>

                                            <!-- 상황에 맞체 화면에 icon 노출 필요  -->
                                            <!-- 출제완료 -->
                                            <i class="ico stamp_complete"></i>
                                            <!-- 출제대기 -->
                                            <i class="ico stamp_wait"></i>
                                        </td>
                                        <td>
                                            <i class="emblem emblem_05"></i>
                                            <v-btn variant="text" :ripple="false" :class="getClass(item.unit02)">{{
                                                addPercentIfNumber(item.unit02)
                                            }}</v-btn>
                                            <i class="ico list"></i>
                                        </td>
                                        <td>
                                            <i class="emblem" :class="item.unit03 === '미학습' ? 'emblem_01' : 'emblem_04'"></i>
                                            <v-btn variant="text" :ripple="false" :class="getClass(item.unit03)">{{
                                                addPercentIfNumber(item.unit03)
                                            }}</v-btn>
                                        </td>
                                        <!-- 단원이 진행되지 않았을 경우 .disabled -->
                                        <td class="disabled">
                                            <span :class="getClass(item.unit04)">{{ item.unit04 }}</span>
                                        </td>
                                        <td class="disabled">
                                            <span :class="getClass(item.unit05)">{{ item.unit05 }}</span>
                                        </td>
                                        <td class="disabled">
                                            <span :class="getClass(item.unit06)">{{ item.unit06 }}</span>
                                        </td>
                                    </tr>
                                </template>
                            </v-data-table>
                        </v-carousel-item>
                    </v-carousel>
                </div>
                <!-- //캐러셀 영역 -->
                <div class="right-table">
                    <v-data-table :headers="tableAverageHead" :items="tableAverage" item-value="number" class="color_gray type_center">
                    </v-data-table>
                </div>

                <!-- 패널 영역 -->
                <!-- top값은 해당 클릭된 영역 기준으로 변경 -->
                <!-- 해당화면 display: none 처리 해당화면 확인시 제거 -->
                <div class="customized" style="top: 26.4rem; display: block">
                    <div class="contents d-flex align-center">
                        <div class="left">
                            <div class="box d-flex align-center">
                                <div class="avatar">
                                    <v-img :src="character" alt="캐릭터" class="avatar-item-93" />
                                </div>
                                <div class="mgl20 mgr30">
                                    <h3>단원 평가 AI 맞춤 출제</h3>
                                    <v-btn rounded flat size="small" class="primary mgt10">과제 보내기</v-btn>
                                </div>
                            </div>
                        </div>
                        <div class="right">
                            <div class="block">
                                <p class="question">단어 문제</p>
                                <div class="d-flex align-center mgt10">
                                    <v-text-field type="number" value="5" hide-details variant="filled" />
                                    <span class="points mgl10">x 6점 배점</span>
                                </div>
                            </div>
                            <div class="block">
                                <p class="question">표현 문제</p>
                                <div class="d-flex align-center mgt10">
                                    <v-text-field type="number" value="5" hide-details variant="filled" />
                                    <span class="points mgl10">x 6점 배점</span>
                                </div>
                            </div>
                            <div class="block">
                                <p class="question">상황 문제</p>
                                <div class="d-flex align-center mgt10">
                                    <v-text-field type="number" value="5" hide-details variant="filled" />
                                    <span class="points mgl10">x 8점 배점</span>
                                </div>
                            </div>
                            <div class="block">
                                <p class="question">총 문항 수</p>
                                <div class="d-flex align-center mgt10">
                                    <!-- 문항 수 15개 고정으로  disabled 처리 했습니다. 수정 필요할시 제거TeacherAnalyticsAccumulationCustomized  -->
                                    <v-text-field type="number" value="15" class="total" hide-details variant="filled" disabled />
                                    <span class="points mgl10">= 100점 만점</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="page_buttons">
                <v-btn rounded flat class="secondary">5명 더보기 (1/4)</v-btn>
            </div>
        </div>
    </v-sheet>
</template>
<script setup>
import character from '@/assets/images/img_character.svg';

const expanded = [];
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

// 캐러셀영역
const tableUnitHead = [
    {
        title: '1단원',
        sortable: false,
        key: 'unit01'
    },
    {
        title: '2단원',
        sortable: false,
        key: 'unit02'
    },
    {
        title: '3단원',
        sortable: false,
        key: 'unit03'
    },
    {
        title: '4단원',
        sortable: false,
        key: 'unit04'
    },
    {
        title: '5단원',
        sortable: false,
        key: 'unit05'
    },
    {
        title: '6단원',
        sortable: false,
        key: 'unit06'
    }
];
const tableContent = [
    {
        unit01: 90,
        unit02: 90,
        unit03: 90,
        unit04: '학습대기',
        unit05: '학습대기',
        unit06: '학습대기'
    },
    {
        unit01: 90,
        unit02: 90,
        unit03: 90,
        unit04: '학습대기',
        unit05: '학습대기',
        unit06: '학습대기'
    },
    {
        unit01: 90,
        unit02: 90,
        unit03: 90,
        unit04: '학습대기',
        unit05: '학습대기',
        unit06: '학습대기'
    },
    {
        unit01: 90,
        unit02: 90,
        unit03: '미학습',
        unit04: '학습대기',
        unit05: '학습대기',
        unit06: '학습대기'
    },
    {
        unit01: 90,
        unit02: 90,
        unit03: 90,
        unit04: '학습대기',
        unit05: '학습대기',
        unit06: '학습대기'
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

// 숫자일경우 under_Line 글자인경우 X
const getClass = value => (typeof value === 'number' ? 'type_default_underline' : 'txt');

// 숫자일경우 %추가
const addPercentIfNumber = value => (typeof value === 'number' ? `${value}%` : value);
</script>
