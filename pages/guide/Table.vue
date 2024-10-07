<template>
    <div class="guide_contents">
        <h1>Table guide</h1>
        <section>
            <h2>default</h2>
            <v-data-table
                v-model:expanded="expanded"
                :headers="achievementHeaders"
                :items="achievement"
                item-value="number"
            >
            </v-data-table>
        </section>
        <section>
            <h2>.type_center
                <small>v-table에 class="type_center"가 추가 됩니다.</small>
            </h2>
            <v-data-table
                v-model:expanded="expanded"
                :headers="achievementHeaders"
                :items="achievement"
                item-value="number"
                class="type_center"
            >
            </v-data-table>
        </section>
        <section>
            <h2>.color_mint
                <small>v-table에 class="color_mint"가 추가 됩니다.</small>
            </h2>
            <v-data-table
                v-model:expanded="expanded"
                :headers="achievementHeaders"
                :items="achievement"
                item-value="number"
                class="color_mint"
            >
            </v-data-table>
        </section>
        <section>
            <h2>학생 > 학습결과 > 학습분석 > 기본테이블</h2>
            <v-data-table
                v-model:expanded="expanded"
                :headers="basicHeaders"
                :items="tableBasic"
                item-value="date"
            >
                <template v-slot:item="{ item }">
                    <tr v-for="index in 4" :key="index">
                        <td class="text_center">{{ item.date }}</td>
                        <td class="text_center">{{ item.time }}</td>
                        <td>
                            <v-list class="list_dot">
                                <v-list-item>{{ item.compliment }}</v-list-item>
                                <v-list-item>{{ item.compliment2 }}</v-list-item>
                            </v-list>
                        </td>
                        <td>
                            <v-list class="list_dot">
                                <v-list-item>
                                    {{ item.wrongWord }}
                                    <span class="text_arrow">&rarr;</span>
                                    {{ item.spell }}
                                    <span class="text_err">{{ item.errSpell }}</span>
                                    {{ item.spell2 }}
                                </v-list-item>
                            </v-list>
                        </td>
                        <td>
                            <v-list class="list_check">
                                <v-list-item>{{ item.wrongExpression }}</v-list-item>
                                <v-list-item>{{ item.wrongExpression2 }}</v-list-item>
                                <v-list-item>{{ item.wrongExpression3 }}</v-list-item>
                            </v-list>
                        </td>
                        <td>
                            <v-list>
                                <v-list-item>{{ item.AI }}</v-list-item>
                                <v-list-item>{{ item.AI2 }}</v-list-item>
                            </v-list>
                        </td>
                    </tr>
                </template>
            </v-data-table>
        </section>
        <section>
            <h2>학업 성취율 테이블 마크업 참고</h2>
            <v-data-table
                v-model:expanded="expanded"
                :headers="achievementHeaders"
                :items="achievement"
                item-value="number"
                expand-on-click
                class="color_mint type_center"
            >
                <!-- !NOTE 학업 성취율 테이블의 마크업 입니다.
                    새 cell을 열기위해 클릭된 td에 .active를 추가 해주세요. td의 배경색이 변경 됩니다.
                -->
                <template v-slot:item="{ item }">
                    <tr>
                        <td class="number">{{ item.number }}</td>
                        <td>{{ item.name }}</td>
                        <td class="active"><v-btn variant="text" class="type_blue_underline">{{ item.achievementRate }}</v-btn></td>
                        <td>
                            <!-- !NOTE 학업성실도의 색상 class입니다. 
                                조건에 따라 span에 하기의 class를 추가해 주세요.
                                초록색 : .type_rounded_green
                                노란색 : .type_rounded_yellow
                                빨간색 : .type_rounded_red
                            -->
                            <span class="ico ico_size_4 type_rounded_green">{{ item.sincerity }}</span>
                        </td>
                        <td><v-btn variant="text" class="type_blue_underline">{{ item.note }}</v-btn></td>
                        <td><v-btn variant="text" class="type_blue_underline">{{ item.participation }}</v-btn></td>
                        <td><v-btn variant="text" class="type_blue_underline">{{ item.word }}</v-btn></td>
                        <td><v-btn variant="text" class="type_blue_underline">{{ item.Chatbot }}</v-btn></td>
                        <td>
                            <!-- !NOTE 학업성실도의 색상 class입니다. 
                                조건에 따라 span에 하기의 class를 추가해 주세요.
                                완료 : type_complete
                                미완료 : type_uncompleted
                            -->
                            <span class="ico ico_size_10 type_complete">{{ item.achievementStandard }}</span>
                        </td>
                    </tr>
                </template>
                <!-- // 학업 성취율 테이블의 마크업 입니다.  -->
            </v-data-table>
        </section>
        <section>
            <h2>학업 성취율 테이블 동작 참고
                <small>vuetifyjs의 expandable-rows, 하단에 새 cell이 생성 됩니다.</small>
            </h2>
            <v-data-table
                v-model:expanded="expanded"
                :headers="achievementHeaders"
                :items="achievement"
                item-value="number"
                expand-on-click
                class="color_mint type_center"
            >
                <template v-slot:expanded-row="{ columns, item }">
                    <tr>
                        <td :colspan="columns.length" class="table_panel">More info about {{ item.number }}</td>
                    </tr>
                </template>
            </v-data-table>
        </section>
        <section>
            <h2>.type_line
                <small>생활 기록부 > 단원별 교과 학습 발달 사항</small>
            </h2>
            <v-data-table class="type_line">
                <colgroup>
                    <col width="15%" />
                    <col width="*" />
                </colgroup>
                <tbody>
                    <tr>
                        <td>Lesson 1.<br/>How are you?</td>
                        <td>재미있거나 감동적인 부분에 유의하며 작품을 바르게 이해하고, 재미있는 부분이 잘 나타나도록 시화를 잘 만들어 낼 수 있음.재미있거나 감동적인 부분에 유의하며 작품을 바르게 이해하고, 재미있는 부분이 잘 나타나도록 시화를 잘 만들어 낼 수 있음.</td>
                    </tr>
                    <tr>
                        <td>Lesson 1.<br/>How are you?</td>
                        <td>재미있거나 감동적인 부분에 유의하며 작품을 바르게 이해하고, 재미있는 부분이 잘 나타나도록 시화를 잘 만들어 낼 수 있음.재미있거나 감동적인 부분에 유의하며 작품을 바르게 이해하고, 재미있는 부분이 잘 나타나도록 시화를 잘 만들어 낼 수 있음.</td>
                    </tr>
                    <tr>
                        <td>Lesson 1.<br/>How are you?</td>
                        <td>재미있거나 감동적인 부분에 유의하며 작품을 바르게 이해하고, 재미있는 부분이 잘 나타나도록 시화를 잘 만들어 낼 수 있음.재미있거나 감동적인 부분에 유의하며 작품을 바르게 이해하고, 재미있는 부분이 잘 나타나도록 시화를 잘 만들어 낼 수 있음.</td>
                    </tr>
                    <tr>
                        <td>Lesson 1.<br/>How are you?</td>
                        <td>재미있거나 감동적인 부분에 유의하며 작품을 바르게 이해하고, 재미있는 부분이 잘 나타나도록 시화를 잘 만들어 낼 수 있음.재미있거나 감동적인 부분에 유의하며 작품을 바르게 이해하고, 재미있는 부분이 잘 나타나도록 시화를 잘 만들어 낼 수 있음.</td>
                    </tr>
                    <tr>
                        <td>Lesson 1.<br/>How are you?</td>
                        <td>재미있거나 감동적인 부분에 유의하며 작품을 바르게 이해하고, 재미있는 부분이 잘 나타나도록 시화를 잘 만들어 낼 수 있음.재미있거나 감동적인 부분에 유의하며 작품을 바르게 이해하고, 재미있는 부분이 잘 나타나도록 시화를 잘 만들어 낼 수 있음.</td>
                    </tr>
                    <tr>
                        <td>Lesson 1.<br/>How are you?</td>
                        <td>재미있거나 감동적인 부분에 유의하며 작품을 바르게 이해하고, 재미있는 부분이 잘 나타나도록 시화를 잘 만들어 낼 수 있음.재미있거나 감동적인 부분에 유의하며 작품을 바르게 이해하고, 재미있는 부분이 잘 나타나도록 시화를 잘 만들어 낼 수 있음.</td>
                    </tr>
                </tbody>
            </v-data-table>
        </section>
    </div>
</template>

<script>
    export default {
        data() {
        return {
            expanded: [],
            basicHeaders: [
                {
                    title: '채팅 날짜',
                    align: 'center',
                    sortable: false,
                    key: 'date',
                },
                { title: '채팅 시간', align: 'center', sortable: false, key: 'time' },
                { title: '칭찬 표현', align: 'center', sortable: false, key: 'compliment' },
                { title: '철자를 틀린 표현', align: 'center', sortable: false, key: 'wrongWord' },
                { title: '잘못된 표현', align: 'center', sortable: false, key: 'wrongExpression' },
                { title: 'AI 표현 도우미', align: 'center', sortable: false, key: 'AI' },
            ],
            tableBasic: [
                {
                    date: 'MM월 DD일 (월)',
                    time: '90분',
                    compliment: 'How are you?',
                    compliment2: 'How about you?',
                    wrongWord: 'moning(x)',
                    spell: 'mo',
                    spell2: 'ning (o)',
                    errSpell: 'r',
                    wrongExpression: 'good night 은 무조건 헤어질 때 하는 인사가 아니에요.',
                    wrongExpression2: '헤어질 때에는 Good bye.',
                    wrongExpression3: '저녁에 잘 자라고 할 때에는 Good night.',
                    AI: 'Q. 친구들이 주로 쓴 표현은 무엇이 있을까?',
                    AI2: 'A: What a bout you? 는 상기시킬 때 많이 씁니다.',
                },
            ],
            achievementHeaders: [
            {
                title: '번호',
                align: 'start',
                sortable: false,
                key: 'number',
            },
            { title: '이름', key: 'name' },
            { title: '학업 성취율', sortable: false, key: 'achievementRate' },
            { title: '학업 성실도', sortable: false, key: 'sincerity' },
            { title: '필기 노트', sortable: false, key: 'note' },
            { title: '드릴 학습 참여 건수', sortable: false, key: 'participation' },
            { title: '단어 학습', sortable: false, key: 'word' },
            { title: '챗봇 학습', sortable: false, key: 'Chatbot' },
            { title: '성취 기준 자기채점', sortable: false, key: 'achievementStandard' },
            ],
            achievement: [
                {
                    number: 1,
                    name: '김아미',
                    achievementRate: '88%',
                    sincerity: '노란색',
                    note: 5,
                    participation: 5,
                    word: 11,
                    Chatbot: '3회',
                    achievementStandard: '완료',
                },
                {
                    number: 2,
                    name: '김영숙',
                    achievementRate: '90%',
                    sincerity: '초록색',
                    note: 8,
                    participation: 8,
                    word: 22,
                    Chatbot: '5회',
                    achievementStandard: '완료',
                },
                {
                    number: 3,
                    name: '김미영',
                    achievementRate: '33%',
                    sincerity: '빨간색',
                    note: 10,
                    participation: 10,
                    word: 27,
                    Chatbot: '23회',
                    achievementStandard: '완료',
                },
                {
                    number: 4,
                    name: '늘푸른하늘',
                    achievementRate: '90%',
                    sincerity: '초록색',
                    note: 5,
                    participation: 20,
                    word: 22,
                    Chatbot: '7회',
                    achievementStandard: '미완료',
                },
                {
                    number: 5,
                    name: '늘푸른하늘',
                    achievementRate: '90%',
                    sincerity: '초록색',
                    note: 5,
                    participation: 20,
                    word: 22,
                    Chatbot: '7회',
                    achievementStandard: '미완료',
                },
            ],
        }
        },
    }
</script>
