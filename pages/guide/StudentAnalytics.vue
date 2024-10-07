<template>
    <v-card class="analytics type_student gap2" dark>
        <div class="title-box">
            <div class="tit">
                <i class="ico ico_size_4 people mr-2" />
                <p>오늘 로그인 횟수 : <span class="num">2</span>회</p>
            </div>
            <div class="sub_title">
                <p>오늘의 수업 현황</p>
                <v-select
                    v-model="select"
                    :items="items"
                    class="type_white"
                    :menu-props="{ contentClass: 'white_item' }"
                    item-title="state"
                    item-value="abbr"
                    label="Select"
                    variant="outlined"
                    persistent-hint
                    rounded
                    return-object
                    single-line
                    hide-details
                    base-color="#fff"
                ></v-select>
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
            <v-card elevation="0">
                <v-card-item>
                    <v-card-title>
                        <span> 영역별 학업 성취도</span>
                        <v-btn class="icon_only icon_only-sm" rounded flat><i class="ico more" /></v-btn>
                    </v-card-title>
                </v-card-item>
                <v-card-text class="px-13 py20">
                    <div class="card_no_data">
                        <i class="ico no_class_data ico_size_25" />
                        <p>선택한 날에는 수업이 배정되어 있지 않습니다.</p>
                    </div>
                </v-card-text>
            </v-card>
        </div>
        <div class="d-flex mb20 gap2">
            <v-card height="56rem" elevation="0" class="v-card-yellow v-card-with_flag">
                <div class="selfCheck">
                    <div class="flag flag-left">
                        <span>2차시</span>
                    </div>
                    <v-card-item>
                        <v-card-title>
                            <span> 영역별 학업 성취도학업 성취도</span>
                            <v-btn class="icon_only icon_only-sm" rounded flat><i class="ico more" /></v-btn>
                        </v-card-title>
                    </v-card-item>
                    <v-card-text class="px30 py30">
                        <v-list class="list_dot py-0">
                            <v-list-item class="py-0" min-height="auto">안부를 묻고 답하는 말을 이해하여 말할 수 있나요?</v-list-item>
                            <v-list-item class="py-0" min-height="auto">안부를 묻고 답하는 말을 이해하여 말할 수 있나요?</v-list-item>
                            <v-list-item class="py-0" min-height="auto">안부를 묻고 답하는 말을 이해하여 말할 수 있나요?</v-list-item>
                            <v-list-item class="py-0" min-height="auto">안부를 묻고 답하는 말을 이해하여 말할 수 있나요?</v-list-item>
                        </v-list>
                        <v-chip-group selected-class="active" mandatory v-model="selection">
                            <v-chip class="px-1 py-1" variant="text" color="transparent"><i class="ico imoji1"></i>5</v-chip>
                            <v-chip class="px-1 py-1" variant="text" color="transparent"><i class="ico imoji2"></i>4</v-chip>
                            <v-chip class="px-1 py-1" variant="text" color="transparent"><i class="ico imoji3"></i>3</v-chip>
                            <v-chip class="px-1 py-1" variant="text" color="transparent"><i class="ico imoji4"></i>2</v-chip>
                            <v-chip class="px-1 py-1" variant="text" color="transparent"><i class="ico imoji5"></i>1</v-chip>
                        </v-chip-group>
                    </v-card-text>
                </div>
            </v-card>
            <v-card height="56rem" elevation="0" class="v-card-green">
                <div class="selfCheck">
                    <v-card-item>
                        <v-card-title>
                            <span> 영역별 학업 성취도학업 성취도</span>
                            <v-btn class="icon_only icon_only-sm" rounded flat><i class="ico more" /></v-btn>
                        </v-card-title>
                    </v-card-item>
                    <v-card-text class="px30 py30">
                        <v-list class="list_dot py-0">
                            <v-list-item class="py-0" min-height="auto">안부를 묻고 답하는 말을 이해하여 말할 수 있나요?</v-list-item>
                            <v-list-item class="py-0" min-height="auto">안부를 묻고 답하는 말을 이해하여 말할 수 있나요?</v-list-item>
                            <v-list-item class="py-0" min-height="auto">안부를 묻고 답하는 말을 이해하여 말할 수 있나요?</v-list-item>
                            <v-list-item class="py-0" min-height="auto">안부를 묻고 답하는 말을 이해하여 말할 수 있나요?</v-list-item>
                        </v-list>
                    </v-card-text>
                </div>
            </v-card>
            <v-card height="56rem" elevation="0" class="v-card-green">
                <div class="selfCheck">
                    <v-card-item>
                        <v-card-title>
                            <span> 영역별 학업 성취도학업 성취도</span>
                            <v-btn class="icon_only icon_only-sm" rounded flat><i class="ico more" /></v-btn>
                        </v-card-title>
                    </v-card-item>
                    <v-card-text class="px30 py30">
                        <v-list class="list_dot py-0">
                            <v-list-item class="py-0" min-height="auto">안부를 묻고 답하는 말을 이해하여 말할 수 있나요?</v-list-item>
                            <v-list-item class="py-0" min-height="auto">안부를 묻고 답하는 말을 이해하여 말할 수 있나요?</v-list-item>
                            <v-list-item class="py-0" min-height="auto">안부를 묻고 답하는 말을 이해하여 말할 수 있나요?</v-list-item>
                            <v-list-item class="py-0" min-height="auto">안부를 묻고 답하는 말을 이해하여 말할 수 있나요?</v-list-item>
                        </v-list>
                    </v-card-text>
                </div>
            </v-card>
        </div>
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
                        <div class="date_picker_slot">
                            <vc-date-picker
                                v-model="range"
                                is-range
                                :model-config="{
                                    type: 'string',
                                    mask: 'YYYY-MM-DD'
                                }"
                                :masks="{ L: 'YYYY-MM-DD', title: 'YYYY년 MMM' }"
                            >
                                <template #default="{ inputValue, togglePopover }">
                                    <div class="date_selector">
                                        <div class="start_date">
                                            <input :value="inputValue.start || 'YYYY.MM.DD'" @click="() => togglePopover()" />
                                            <i class="ico calendar" @click="() => togglePopover()"></i>
                                        </div>
                                        <p>~</p>
                                        <div class="end_date">
                                            <input :value="inputValue.end || 'YYYY.MM.DD'" @click="() => togglePopover()" />
                                            <i class="ico calendar" @click="() => togglePopover()"></i>
                                        </div>
                                    </div>
                                </template>
                                <template #footer>
                                    <div class="footer_text">
                                        <p>
                                            <span>{{ footerText }}</span>
                                        </p>
                                    </div>
                                </template>
                            </vc-date-picker>
                        </div>
                    </div>
                </v-card-title>
            </v-card-item>
            <v-card-text class="px40 py20">
                <v-row no-gutters class="gap6">
                    <v-col>
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
                    </v-col>
                    <v-col>
                        <div class="learningDiagnostics">
                            <h3 class="learn-title bullet-bot">누적 학습 시간</h3>
                            <div class="chart-bar">
                                <v-row no-gutters class="gap2">
                                    <v-col>
                                        <div class="use-word" v-for="item in learningTime" :key="item.title">
                                            <span class="bullet" :style="{ background: item.color }"></span>
                                            <p>{{ item.title }}</p>
                                        </div>
                                    </v-col>
                                    <v-col>
                                        <div class="progress-background" v-for="(item, idx) in learningTime" :key="item.title">
                                            <div
                                                class="progress-date"
                                                :class="item.value > 70 ? 'white' : ''"
                                                :style="{ width: item.value + '%', background: item.color }"
                                            >
                                                <span>{{ idx === learningTime.length - 1 ? item.value + '개' : item.value }}</span>
                                            </div>
                                        </div>
                                    </v-col>
                                </v-row>
                            </div>
                        </div>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>
    </v-card>
</template>
<script setup>
// 캘린더
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
// 캘린더 //

const range = ref({
    start: null,
    end: null
});

const selection = ref(0);

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
const learningTime = [
    {
        title: '교과서 진도 학습',
        color: '#46A7E5',
        value: '80',
        time: '98'
    },
    {
        title: 'Drill and Play',
        color: '#46A7E5',
        value: '32',
        time: '32'
    },
    {
        title: 'Touch VOCA',
        color: '#46A7E5',
        value: '16',
        time: '16'
    },
    {
        title: 'AI CURI Talk',
        color: '#46A7E5',
        value: '5',
        time: '5'
    },
    {
        title: '총 누적 학습 시간',
        color: '#B0B0B0',
        value: '100',
        time: '133분 (2시간 13분)'
    }
];

const select = ref({ state: '진도 학습' });
const items = ref([{ state: '진도 학습' }]);
</script>
