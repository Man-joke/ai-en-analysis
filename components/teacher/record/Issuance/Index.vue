<template>
    <!-- .tableEdit의 꺽쇠 위치에 따라 
        왼쪽 : clamp_left,
        가운데 : clamp_center,
        오른쪽 : clamp_right의 class를 추가 해주세요.
    -->
    <div class="tableEdit clamp_right">
        <v-btn
            class="close pa-0 position-absolute"
            :elevation="0"
            density="compact"
            min-width="auto"
            min-height="auto"
            height="auto !important"
            color="transparent"
        >
            <i class="ico close_30 ico_size_lg"></i>
        </v-btn>
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
            <div>
                <!-- 학습 이력 수집 & 발행 완료 건수 -->
                <IssuancePart />
                <!-- 테이블 -->
                <TeacherRecordIssuanceGrade />
            </div>
        </div>
        <!-- 학습 이력 수집 & 발행 완료 건수 시 .position-relative 이 노출되지 않게 해주세요. -->
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
        id: 1,
        Lesson: 'Lesson 1. <br/>How are you?',
        level: '상',
        text: '재미있거나 감동적인 부분에 유의하며 작품을 바르게 이해하고, 재미있는 부분이 잘 나타나도록 시화를 잘 만들어 낼 수 있음.'
    },
    {
        id: 2,
        Lesson: 'Lesson 2. <br/>How are you?',
        level: '상',
        text: '재미있거나 감동적인 부분에 유의하며 작품을 바르게 이해하고, 재미있는 부분이 잘 나타나도록 시화를 잘 만들어 낼 수 있음.'
    },
    {
        id: 3,
        Lesson: 'Lesson 3. <br/>How are you?',
        level: '상',
        text: '재미있거나 감동적인 부분에 유의하며 작품을 바르게 이해하고, 재미있는 부분이 잘 나타나도록 시화를 잘 만들어 낼 수 있음.'
    },
    {
        id: 4,
        Lesson: 'Lesson 3. <br/>How are you?',
        level: '하',
        text: '재미있거나 감동적인 부분에 유의하며 작품을 바르게 이해하고, 재미있는 부분이 잘 나타나도록 시화를 잘 만들어 낼 수 있음.'
    },
    {
        id: 5,
        Lesson: 'Lesson 4. <br/>How are you?',
        level: '상',
        text: '재미있거나 감동적인 부분에 유의하며 작품을 바르게 이해하고, 재미있는 부분이 잘 나타나도록 시화를 잘 만들어 낼 수 있음.'
    },
    {
        id: 6,
        Lesson: 'Lesson 5. <br/>How are you?',
        level: '중',
        text: '재미있거나 감동적인 부분에 유의하며 작품을 바르게 이해하고, 재미있는 부분이 잘 나타나도록 시화를 잘 만들어 낼 수 있음.'
    },
    {
        id: 7,
        Lesson: 'Lesson 6. <br/>How are you?',
        level: '중',
        text: '재미있거나 감동적인 부분에 유의하며 작품을 바르게 이해하고, 재미있는 부분이 잘 나타나도록 시화를 잘 만들어 낼 수 있음.'
    },
    {
        id: 8,
        Lesson: 'Lesson 7. <br/>How are you?',
        level: '중',
        text: '재미있거나 감동적인 부분에 유의하며 작품을 바르게 이해하고, 재미있는 부분이 잘 나타나도록 시화를 잘 만들어 낼 수 있음.'
    },
    {
        id: 8,
        Lesson: 'Lesson 8. <br/>How are you?',
        level: '상',
        text: '재미있거나 감동적인 부분에 유의하며 작품을 바르게 이해하고, 재미있는 부분이 잘 나타나도록 시화를 잘 만들어 낼 수 있음.'
    },
    {
        id: 9,
        Lesson: 'Lesson 9. <br/>How are you?',
        level: '상',
        text: '재미있거나 감동적인 부분에 유의하며 작품을 바르게 이해하고, 재미있는 부분이 잘 나타나도록 시화를 잘 만들어 낼 수 있음.'
    },
    {
        id: 10,
        Lesson: 'Lesson 10. <br/>How are you?',
        level: '상',
        text: '재미있거나 감동적인 부분에 유의하며 작품을 바르게 이해하고, 재미있는 부분이 잘 나타나도록 시화를 잘 만들어 낼 수 있음.'
    },
    {
        id: 11,
        Lesson: 'Lesson 11. <br/>How are you?',
        level: '상',
        text: '재미있거나 감동적인 부분에 유의하며 작품을 바르게 이해하고, 재미있는 부분이 잘 나타나도록 시화를 잘 만들어 낼 수 있음.'
    },
    {
        id: 12,
        Lesson: 'Lesson 12. <br/>How are you?',
        level: '하',
        text: '재미있거나 감동적인 부분에 유의하며 작품을 바르게 이해하고, 재미있는 부분이 잘 나타나도록 시화를 잘 만들어 낼 수 있음.'
    }
];

const isSecondRowThirdColumn = item => {
    return item.id === 2; // Assuming the second row has an ID of 2
};
</script>
