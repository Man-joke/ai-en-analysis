<template>
  <!-- !NOTE 개발 완료시 삭제해 주세요. -->
  <h2 class="mgt20 mb20">마크업 참고용</h2>
  <!-- // 개발 완료시 삭제해 주세요. -->
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
    <!-- !NOTE 테이블의 새 cell이 생기는 부분 입니다.  -->
    <template v-slot:expanded-row="{ columns }">
      <tr>
          <td :colspan="columns.length" class="table_panel">
            <TeacherAnalyticsAchievementStudy />
            <TeacherAnalyticsAchievementNote />
            <TeacherAnalyticsAchievementDrill />
            <TeacherAnalyticsAchievementWord />
            <TeacherAnalyticsAchievementChatBot />
          </td>
      </tr>
    </template>
    <!-- // 테이블의 새 cell이 생기는 부분 입니다.  -->
  </v-data-table>
  <!-- !NOTE 개발 완료시 삭제해 주세요. -->
  <h2 class="mgt20 mb20">동작 참고용</h2>
  <!-- // 개발 완료시 삭제해 주세요. -->
  <!-- !NOTE 이유를 모르겠으나... 하기 cell 클릭 시에만 상단 table의 새 cell이 같이 열립니다... -->
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
</template>
<script>
    export default {
        data() {
        return {
            expanded: [],
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