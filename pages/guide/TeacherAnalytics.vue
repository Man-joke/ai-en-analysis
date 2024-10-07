<template>
    <div class="analytics">
        <div class="authInfo title">
            <div class="d-flex align-center">
                <i class="ico ico_size_4 people mr-2" />
                <p>오늘 로그인 횟수 : <span>2</span>회</p>
            </div>
            <div class="d-flex align-center mgl30">
                <p>오늘 학습한 내용은 <span>16</span>시 이후에 분석됩니다.</p>
                <v-btn flat rounded class="dark_blue size_xxs ml-2">
                    <i class="ico refresh ico_size_sm mr-1" />
                    새로고침
                </v-btn>
            </div>
        </div>
        <div class="d-flex mb-5">
            <!-- 캘린더 -->
            <v-card elevation="0" max-width="42rem" max-height="54rem" class="mr-5">
                <div class="datepicker">
                    <v-btn @click="resetDatepicker" flat rounded size="x-small" class="reset_btn">
                        <i class="ico calendar_refresh"></i>
                        <span class="blind">새로고침</span>
                    </v-btn>
                    <DatePicker
                        v-model="selectedDate"
                        color="mustard"
                        class="my-calendar"
                        :attributes="props.student ? attributesStudent : attributes"
                        :select-attribute="selectAttribute"
                        :masks="{ title: 'YYYY년 MMM' }"
                        @dayclick="(a, b) => console.log(a, b)"
                    >
                    </DatePicker>
                    <template v-if="props.student">
                        <div class="legend_wrap">
                            <span class="legend" v-for="item in attributesStudent" :key="item.key">
                                <i :class="item.class" />
                                {{ item.key }}
                            </span>
                        </div>
                    </template>
                    <template v-else>
                        <div class="legend_wrap">
                            <span class="legend" v-for="item in attributes" :key="item.key">
                                <i :class="item.class" />
                                {{ item.key }}
                            </span>
                        </div>
                    </template>
                </div>
            </v-card>
            <!-- 수업 정보 -->
            <v-card elevation="0" max-height="54rem">
                <v-card-item>
                    <v-card-title>
                        <p>3월 17일 화요일 수업 정보</p>
                    </v-card-title>
                </v-card-item>
                <v-card-text class="px-13 py20">
                    <!-- 데이터 없을때 -->
                    <div class="card_no_data">
                        <i class="ico no_class_data ico_size_25" />
                        <p>선택한 날에는 수업이 배정되어 있지 않습니다.</p>
                    </div>
                </v-card-text>
            </v-card>
        </div>
        <div class="d-flex">
            <!-- 독려 리스트 -->
            <v-card elevation="0" max-width="42rem" max-height="54rem" class="mr-5">
                <div class="mission aILevelTest sm h100">
                    <v-sheet class="h100">
                        <h3>AI Level Test를 볼 때가 되었어요!</h3>
                        <v-card-text class="wrap">
                            <!-- 데이터 없을때 -->
                            <div class="card_no_data">
                                <i class="ico no_student ico_size_25" />
                                <p>
                                    독려 메시지를 보낼 <br />
                                    학생이 없습니다.
                                </p>
                            </div>
                            <!-- 데이터 있을 때 -->
                            <!-- <v-list class="list" density="compact">
                    <v-list-item class="pa-0">
                        <div class="name">
                            <p class="txt_num">15번</p>
                            <p class="txt_name ellipsis">늘푸른하늘</p>
                            <p class="txt_week orange">(15주)</p>
                        </div>
                        <v-list-item-action>
                            <p class="check">
                                <v-checkbox v-model="check" hide-details class="default" density="compact"></v-checkbox>
                            </p>
                        </v-list-item-action>
                    </v-list-item>
                    <v-list-item class="pa-0">
                        <div class="name">
                            <p class="txt_num">15번</p>
                            <p class="txt_name ellipsis">늘푸른하늘</p>
                            <p class="txt_week orange">(15주)</p>
                        </div>
                        <v-list-item-action>
                            <p class="check">
                                <v-checkbox hide-details class="default" density="compact"></v-checkbox>
                            </p>
                        </v-list-item-action>
                    </v-list-item>
                    <v-list-item class="pa-0">
                        <div class="name">
                            <p class="txt_num">15번</p>
                            <p class="txt_name ellipsis">늘푸른하늘</p>
                            <p class="txt_week orange">(15주)</p>
                        </div>
                        <v-list-item-action>
                            <p class="check">
                                <v-checkbox v-model="check" hide-details class="default" density="compact"></v-checkbox>
                            </p>
                        </v-list-item-action>
                    </v-list-item>
                    <v-list-item class="pa-0">
                        <div class="name">
                            <p class="txt_num">15번</p>
                            <p class="txt_name ellipsis">늘푸른하늘</p>
                            <p class="txt_week orange">(15주)</p>
                        </div>
                        <v-list-item-action>
                            <p class="check">
                                <v-checkbox hide-details class="default" density="compact"></v-checkbox>
                            </p>
                        </v-list-item-action>
                    </v-list-item>
                    <v-list-item class="pa-0">
                        <div class="name">
                            <p class="txt_num">15번</p>
                            <p class="txt_name ellipsis">늘푸른하늘</p>
                            <p class="txt_week orange">(15주)</p>
                        </div>
                        <v-list-item-action>
                            <p class="check">
                                <v-checkbox v-model="check" hide-details class="default" density="compact"></v-checkbox>
                            </p>
                        </v-list-item-action>
                    </v-list-item>
                    <v-list-item class="pa-0">
                        <div class="name">
                            <p class="txt_num">15번</p>
                            <p class="txt_name ellipsis">늘푸른하늘</p>
                            <p class="txt_week orange">(15주)</p>
                        </div>
                        <v-list-item-action>
                            <p class="check">
                                <v-checkbox hide-details class="default" density="compact"></v-checkbox>
                            </p>
                        </v-list-item-action>
                    </v-list-item>
                    <v-list-item class="pa-0">
                        <div class="name">
                            <p class="txt_num">15번</p>
                            <p class="txt_name ellipsis">늘푸른하늘</p>
                            <p class="txt_week orange">(15주)</p>
                        </div>
                        <v-list-item-action>
                            <p class="check">
                                <v-checkbox v-model="check" hide-details class="default" density="compact"></v-checkbox>
                            </p>
                        </v-list-item-action>
                    </v-list-item>
                    <v-list-item class="pa-0">
                        <div class="name">
                            <p class="txt_num">15번</p>
                            <p class="txt_name ellipsis">늘푸른하늘</p>
                            <p class="txt_week orange">(15주)</p>
                        </div>
                        <v-list-item-action>
                            <p class="check">
                                <v-checkbox hide-details class="default" density="compact"></v-checkbox>
                            </p>
                        </v-list-item-action>
                    </v-list-item>
                    <v-list-item class="pa-0">
                        <div class="name">
                            <p class="txt_num">15번</p>
                            <p class="txt_name ellipsis">늘푸른하늘</p>
                            <p class="txt_week orange">(15주)</p>
                        </div>
                        <v-list-item-action>
                            <p class="check">
                                <v-checkbox v-model="check" hide-details class="default" density="compact"></v-checkbox>
                            </p>
                        </v-list-item-action>
                    </v-list-item>
                    <v-list-item class="pa-0">
                        <div class="name">
                            <p class="txt_num">15번</p>
                            <p class="txt_name ellipsis">늘푸른하늘</p>
                            <p class="txt_week orange">(15주)</p>
                        </div>
                        <v-list-item-action>
                            <p class="check">
                                <v-checkbox hide-details class="default" density="compact"></v-checkbox>
                            </p>
                        </v-list-item-action>
                    </v-list-item>
                </v-list> -->
                            <div class="box_stamp mt-5 mt10 text-center">
                                <v-btn rounded flat class="primary" @click="dialog = true">독려 메시지 보내기</v-btn>
                            </div>
                        </v-card-text>
                    </v-sheet>
                </div>
            </v-card>
            <!-- 학습 분석 -->
            <v-card elevation="0" max-height="54rem">
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
                                        label="Select"
                                        variant="outlined"
                                        persistent-hint
                                        rounded
                                        return-object
                                        single-line
                                        hide-details
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
                <!-- 데이터 없을 때 -->
                <div class="card_no_data">
                    <i class="ico no_color_board ico_size_25" />
                    <p>아직 숫자 색칠판을 시작한 학생이 없습니다.</p>
                </div>
            </v-card>
        </div>

        <!-- 독려 메시지 팝업-->
        <v-dialog persistent transition="dialog-center-transition" width="auto" v-model="dialog">
            <template v-slot:default="{ isActive }">
                <div class="dialog">
                    <div class="dialog_message">
                        <p>선택한 학생에게 <em class="font-color-orange">AI Level Test</em>독려 메시지를<br />보내시겠습니까?</p>
                    </div>
                    <div class="dialog_btn_wrap">
                        <v-btn @click="isActive.value = false" rounded flat class="secondary size_md">아니오</v-btn>
                        <v-btn rounded flat class="primary size_md" type="submit" @click="(sendMessage = true), (dialog = false)">예</v-btn>
                    </div>
                </div>
            </template>
        </v-dialog>

        <!-- 독려 메시지 완료 팝업-->
        <v-dialog persistent transition="dialog-center-transition" width="auto" v-model="sendMessage">
            <div class="dialog">
                <div class="dialog_message">
                    <div class="d-flex align-center">
                        <div><span class="num font-color-blue mr-1">5번</span>김아미</div>
                        <em class="mx-1">,</em>
                        <div><span class="num font-color-blue mr-1">17번</span>김영철</div>
                        <em class="mx-1">,</em>
                        <div><span class="num font-color-blue mr-1">20번</span>박수미</div>
                    </div>
                    <p>AI Level Test 독려 메시지를 보냈습니다.</p>
                </div>
            </div>
        </v-dialog>
    </div>
</template>
<script setup>
import { ref } from 'vue';
// 나의 학습분석
const select01 = ref({ txt: '색칠판 학습 이력' });
const select02 = ref({ txt: '완성도 Top 5' });
const select01Items = ref([{ txt: 'Touch Voca' }, { txt: '성취기준 키워드' }]);
const select02Items = ref([{ txt: '완성도 Top 5' }, { txt: '급상승 Top 5 ' }, { txt: '독려 필요 Top 5' }]);

const dialog = ref(false);
const sendMessage = ref(false);

import { DatePicker } from 'v-calendar';
import 'v-calendar/style.css';
const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();

const selectedDate = ref(new Date());

const resetDatepicker = () => {
    selectedDate.value = null;
};

const props = defineProps({ student: Boolean });

const selectAttribute = ref({
    highlight: {
        style: {
            backgroundColor: 'transparent',
            border: '2px solid #1E3257',
            zIndex: '10',
        },
        contentStyle: {
            color: '#000000'
        }
    },
    selectedDate: selectedDate.value
});

const attributes = ref([
    {
        key: '수업 예정일',
        class: 'unsubmission',
        highlight: {
            style: {
                backgroundColor: '#D5D5D5'
            },
            contentStyle: {
                color: '#000000'
            }
        },
        dates: [new Date(year, month, 5), new Date(year, month, 12)]
    },
    {
        key: '수업 완료일',
        class: 'submission',
        highlight: {
            style: {
                backgroundColor: '#139D42'
            }
        },
        dates: [new Date(year, month, 7), new Date(year, month, 8), new Date(year, month, 11)]
    },

    {
        key: '생활기록부 발행 기간',
        class: 'period',
        highlight: {
            start: { fillMode: 'light' },
            base: { fillMode: 'light' },
            end: { fillMode: 'light' }
        },
        dates: { start: new Date(year, month, 12), end: new Date(year, month, 15) }
    }
]);
</script>
