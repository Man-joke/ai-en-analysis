<template>
    <!-- 테이블 -->
    <div class="grade">
        <v-card>
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
                <!-- 새 cell을 열기위해 클릭된 td에 .active를 추가 해주세요. td의 배경색이 변경 됩니다. -->
                <template v-slot:item="{ item }">
                    <tr>
                        <td>
                            <span v-html="item.Lesson"></span>
                        </td>
                        <td>
                            <span>{{ item.level }}</span>
                        </td>
                        <!-- 임시 클래스 active 된부분 활성화 개발시 삭제 -->
                        <td :class="isSecondRowThirdColumn(item) ? 'active' : ''">
                            <span>{{ item.text }}</span>
                        </td>
                    </tr>
                </template>

                <!-- 텍스트 편집시 화면 -->
                <!-- <template v-slot:item="{ item }">
                            <tr>
                                <td>
                                    <span v-html="item.Lesson"></span>
                                </td>
                                <td>
                                    <span>{{ item.level }}</span>
                                </td>
                                <td>
                                    <v-textarea
                                        class="no-border"
                                        model-value="인물에게 알맞은 표정, 몸짓, 말투를 생각하며 작품을 읽고 이야기에서 장면에 따라 인물의 표정, 몸짓, 말투가 어떻게 다른지 비교를 매우 잘함. 인물에게 알맞은 표정, 몸짓, 말투를 생각하며 작품을 읽고 이야기에서 장면에 따라 인물의 표정, 몸짓, 말투가 어떻게 다른지 비교를 매우 잘함."
                                        variant="solo"
                                        :elevation="0"
                                        no-resize
                                        rows="2"
                                        hide-details
                                        tile
                                        clearable="trrue"
                                    ></v-textarea>
                                </td>
                            </tr>
                        </template> -->
            </v-data-table>
        </v-card>
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
