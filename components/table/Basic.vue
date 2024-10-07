<template>
    <v-data-table v-model:expanded="expanded" :headers="basicHeaders" :items="tableBasic" item-value="date">
        <template v-slot:item="{ item }">
            <tr v-for="index in 5" :key="index">
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
                        <v-list-item class="inline_wrap">
                            {{ item.wrongWord }}
                            <span class="text_arrow">&rarr;</span>
                            {{ item.spell }}
                            <span class="text_err">{{ item.errSpell }}</span>
                            {{ item.spell2 }}
                        </v-list-item>
                    </v-list>
                </td>
                <td>
                    <v-list class="list_check text-left">
                        <v-list-item>{{ item.wrongExpression }}</v-list-item>
                        <v-list-item>{{ item.wrongExpression2 }}</v-list-item>
                        <v-list-item>{{ item.wrongExpression3 }}</v-list-item>
                    </v-list>
                </td>
                <td class="vertical-top">
                    <v-list>
                        <v-list-item>
                            <p class="mr-1">Q.</p>
                            {{ item.AI }}
                        </v-list-item>
                        <v-list-item>
                            <p class="mr-1">A:</p>
                            {{ item.AI2 }}
                        </v-list-item>
                    </v-list>
                </td>
            </tr>
        </template>
    </v-data-table>
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
                    key: 'date'
                },
                { title: '채팅 시간', align: 'center', sortable: false, key: 'time' },
                { title: '칭찬 표현', align: 'center', sortable: false, key: 'compliment' },
                { title: '철자를 틀린 표현', align: 'center', sortable: false, key: 'wrongWord' },
                { title: '잘못된 표현', align: 'center', sortable: false, key: 'wrongExpression' },
                { title: 'AI 표현 도우미', align: 'center', sortable: false, key: 'AI' }
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
                    AI: '친구들이 주로 쓴 표현은 무엇이 있을까?',
                    AI2: 'What a bout you? 는 상기시킬 때 많이 씁니다.'
                }
            ]
        };
    }
};
</script>
