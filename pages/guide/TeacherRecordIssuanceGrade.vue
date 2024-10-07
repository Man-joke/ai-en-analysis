<template>
    <div class="teacherRecordIssuanceGrade">
        <div class="d-flex gap2">
            <div class="student-num">
                <v-card :elevation="0" color="transparent">
                    <v-btn-toggle v-model="studentList" class="d-flex flex-column" mandatory>
                        <v-btn rounded flat height="4.6rem">
                            <div class="avatar avatar-box">
                                <div class="avatar-info">
                                    <span class="info_number">15번</span>
                                    <span class="info_name">늘푸른하늘</span>
                                </div>
                            </div>
                        </v-btn>
                        <v-btn rounded flat height="4.6rem">
                            <div class="avatar avatar-box">
                                <div class="avatar-info">
                                    <span class="info_number">15번</span>
                                    <span class="info_name">늘푸른하늘</span>
                                </div>
                            </div>
                        </v-btn>
                        <v-btn rounded flat height="4.6rem">
                            <div class="avatar avatar-box">
                                <div class="avatar-info">
                                    <span class="info_number">15번</span>
                                    <span class="info_name">늘푸른하늘</span>
                                </div>
                            </div>
                        </v-btn>
                        <v-btn rounded flat height="4.6rem">
                            <div class="avatar avatar-box">
                                <div class="avatar-info">
                                    <span class="info_number">15번</span>
                                    <span class="info_name">늘푸른하늘</span>
                                </div>
                            </div>
                        </v-btn>
                        <v-btn rounded flat height="4.6rem">
                            <div class="avatar avatar-box">
                                <div class="avatar-info">
                                    <span class="info_number">15번</span>
                                    <span class="info_name">늘푸른하늘</span>
                                </div>
                            </div>
                        </v-btn>
                        <v-btn rounded flat height="4.6rem">
                            <div class="avatar avatar-box">
                                <div class="avatar-info">
                                    <span class="info_number">15번</span>
                                    <span class="info_name">늘푸른하늘</span>
                                </div>
                            </div>
                        </v-btn>
                        <v-btn rounded flat height="4.6rem">
                            <div class="avatar avatar-box">
                                <div class="avatar-info">
                                    <span class="info_number">15번</span>
                                    <span class="info_name">늘푸른하늘</span>
                                </div>
                            </div>
                        </v-btn>
                        <v-btn rounded flat height="4.6rem">
                            <div class="avatar avatar-box">
                                <div class="avatar-info">
                                    <span class="info_number">15번</span>
                                    <span class="info_name">늘푸른하늘</span>
                                </div>
                            </div>
                        </v-btn>
                        <v-btn rounded flat height="4.6rem">
                            <div class="avatar avatar-box">
                                <div class="avatar-info">
                                    <span class="info_number">15번</span>
                                    <span class="info_name">늘푸른하늘</span>
                                </div>
                            </div>
                        </v-btn>
                        <!-- 등록된 학생 disabled 추가 -->
                        <v-btn rounded flat height="4.6rem" disabled>
                            <div class="avatar avatar-box">
                                <div class="avatar-info">
                                    <span class="info_number">15번</span>
                                    <span class="info_name">늘푸른하늘</span>
                                </div>
                            </div>
                        </v-btn>
                        <v-btn rounded flat height="4.6rem" disabled>
                            <div class="avatar avatar-box">
                                <div class="avatar-info">
                                    <span class="info_number">15번</span>
                                    <span class="info_name">늘푸른하늘</span>
                                </div>
                            </div>
                        </v-btn>
                        <v-btn rounded flat height="4.6rem" disabled>
                            <div class="avatar avatar-box">
                                <div class="avatar-info">
                                    <span class="info_number">15번</span>
                                    <span class="info_name">늘푸른하늘</span>
                                </div>
                            </div>
                        </v-btn>
                        <v-btn rounded flat height="4.6rem" disabled>
                            <div class="avatar avatar-box">
                                <div class="avatar-info">
                                    <span class="info_number">15번</span>
                                    <span class="info_name">늘푸른하늘</span>
                                </div>
                            </div>
                        </v-btn>
                        <v-btn rounded flat height="4.6rem" disabled>
                            <div class="avatar avatar-box">
                                <div class="avatar-info">
                                    <span class="info_number">15번</span>
                                    <span class="info_name">늘푸른하늘</span>
                                </div>
                            </div>
                        </v-btn>
                        <v-btn rounded flat height="4.6rem" disabled>
                            <div class="avatar avatar-box">
                                <div class="avatar-info">
                                    <span class="info_number">15번</span>
                                    <span class="info_name">늘푸른하늘</span>
                                </div>
                            </div>
                        </v-btn>
                    </v-btn-toggle>
                </v-card>
            </div>
            <div class="student-develop">
                <div class="top d-flex">
                    <div class="type d-flex align-center">
                        <p class="">평어 유형</p>
                        <v-btn-toggle v-model="typeList" class="d-flex" mandatory density="compact">
                            <v-btn rounded flat size="small" class="secondary"> A형 </v-btn>
                            <v-btn rounded flat size="small" class="secondary"> B형 </v-btn>
                            <v-btn rounded flat size="small" class="secondary"> C형 </v-btn>
                        </v-btn-toggle>
                    </div>
                    <v-spacer />
                    <div class="align d-flex align-center">
                        <p>정렬 기준</p>
                        <v-btn rounded flat size="small" class="secondary">
                            <i class="ico descending_black ico_size_6 mgr5"></i>
                            기본순
                        </v-btn>
                        <v-btn rounded flat size="small" class="primary mgl10">
                            <i class="ico descending_white ico_size_6 mgr5"></i>
                            인기순
                        </v-btn>
                    </div>
                </div>
                <v-card max-height>
                    <v-btn rounded flat size="x-small" class="primary position-absolute">선택 초기화</v-btn>
                    <v-data-table
                        v-model:expanded="expanded"
                        :headers="achievementHeaders"
                        :items="achievement"
                        item-value="number"
                        expand-on-click
                        class="color_gray type_center"
                        :items-per-page="itemPerPage"
                    >
                        <template v-slot:item.Lesson="{ item }">
                            <span v-html="item.Lesson"></span>
                        </template>
                    </v-data-table>
                </v-card>
            </div>
        </div>
        <div class="mgt30 gap1 d-flex justify-center position-relative">
            <v-btn rounded flat size="large" class="outlined">취소</v-btn>
            <v-btn rounded flat size="large" class="primary">저장</v-btn>
            <v-btn rounded flat size="large" class="primary position-absolute" style="right: 0">텍스트 편집</v-btn>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const studentList = ref(0);
const typeList = ref(0);

const expanded = [];
const itemPerPage = 25;
const achievementHeaders = [
    { title: 'Lesson', key: 'Lesson' },
    { title: '수준', key: 'level' },
    { title: '교과 학습 발달 사항', key: 'text', sortable: false }
];
const achievement = [
    {
        Lesson: 'Lesson 1. <br/>How are you?',
        level: '상',
        text: '재미있거나 감동적인 부분에 유의하며 작품을 바르게 이해하고, 재미있는 부분이 잘 나타나도록 시화를 잘 만들어 낼 수 있음.'
    },
    {
        Lesson: 'Lesson 2. <br/>How are you?',
        level: '상',
        text: '재미있거나 감동적인 부분에 유의하며 작품을 바르게 이해하고, 재미있는 부분이 잘 나타나도록 시화를 잘 만들어 낼 수 있음.'
    },
    {
        Lesson: 'Lesson 3. <br/>How are you?',
        level: '상',
        text: '재미있거나 감동적인 부분에 유의하며 작품을 바르게 이해하고, 재미있는 부분이 잘 나타나도록 시화를 잘 만들어 낼 수 있음.'
    },
    {
        Lesson: 'Lesson 3. <br/>How are you?',
        level: '하',
        text: '재미있거나 감동적인 부분에 유의하며 작품을 바르게 이해하고, 재미있는 부분이 잘 나타나도록 시화를 잘 만들어 낼 수 있음.'
    },
    {
        Lesson: 'Lesson 4. <br/>How are you?',
        level: '상',
        text: '재미있거나 감동적인 부분에 유의하며 작품을 바르게 이해하고, 재미있는 부분이 잘 나타나도록 시화를 잘 만들어 낼 수 있음.'
    },
    {
        Lesson: 'Lesson 5. <br/>How are you?',
        level: '중',
        text: '재미있거나 감동적인 부분에 유의하며 작품을 바르게 이해하고, 재미있는 부분이 잘 나타나도록 시화를 잘 만들어 낼 수 있음.'
    },
    {
        Lesson: 'Lesson 6. <br/>How are you?',
        level: '중',
        text: '재미있거나 감동적인 부분에 유의하며 작품을 바르게 이해하고, 재미있는 부분이 잘 나타나도록 시화를 잘 만들어 낼 수 있음.'
    },
    {
        Lesson: 'Lesson 7. <br/>How are you?',
        level: '중',
        text: '재미있거나 감동적인 부분에 유의하며 작품을 바르게 이해하고, 재미있는 부분이 잘 나타나도록 시화를 잘 만들어 낼 수 있음.'
    },
    {
        Lesson: 'Lesson 8. <br/>How are you?',
        level: '상',
        text: '재미있거나 감동적인 부분에 유의하며 작품을 바르게 이해하고, 재미있는 부분이 잘 나타나도록 시화를 잘 만들어 낼 수 있음.'
    },
    {
        Lesson: 'Lesson 9. <br/>How are you?',
        level: '상',
        text: '재미있거나 감동적인 부분에 유의하며 작품을 바르게 이해하고, 재미있는 부분이 잘 나타나도록 시화를 잘 만들어 낼 수 있음.'
    },
    {
        Lesson: 'Lesson 10. <br/>How are you?',
        level: '상',
        text: '재미있거나 감동적인 부분에 유의하며 작품을 바르게 이해하고, 재미있는 부분이 잘 나타나도록 시화를 잘 만들어 낼 수 있음.'
    },
    {
        Lesson: 'Lesson 11. <br/>How are you?',
        level: '상',
        text: '재미있거나 감동적인 부분에 유의하며 작품을 바르게 이해하고, 재미있는 부분이 잘 나타나도록 시화를 잘 만들어 낼 수 있음.'
    },
    {
        Lesson: 'Lesson 12. <br/>How are you?',
        level: '하',
        text: '재미있거나 감동적인 부분에 유의하며 작품을 바르게 이해하고, 재미있는 부분이 잘 나타나도록 시화를 잘 만들어 낼 수 있음.'
    }
];
</script>
