<script setup>
import { ref } from 'vue';

const tab = ref(null);
const commonStore = useCommonStore();
const list = ref([
    {
        type: '[공통] 로그인 정보',
        title: '',
        subTitle: '',
        fileId: 'AuthInfo',
        status: '완료',
        url: '/AuthInfo',
        etc: '20240426 새로고침 버튼 마크업 수정'
    },
    {
        type: '[공통] 캘린더',
        title: '',
        subTitle: '',
        fileId: 'Calendar',
        status: '완료',
        url: '/Calendar',
        etc: '20240418 캘린더 selectAttribute > highlight 스타일 수정'
    },
    {
        type: '[공통] 차트',
        title: '성취율 차트',
        subTitle: '',
        fileId: 'StackedBar',
        status: '완료',
        url: '/chart/StackedBar',
        etc: ''
    },
    {
        type: '[공통] 차트',
        title: '라인 차트 (가로형)',
        subTitle: '',
        fileId: 'BasicBar',
        status: '완료',
        url: '/chart/BasicBar',
        etc: ''
    },
    {
        type: '[공통] 차트',
        title: '라인 차트 (세로형)',
        subTitle: '',
        fileId: 'ColumnBar',
        status: '완료',
        url: '/chart/ColumnBar',
        etc: ''
    },
    {
        type: '[공통] 차트',
        title: '라인 차트 (스택 형태)',
        subTitle: '',
        fileId: 'StackedColumn',
        status: '완료',
        url: '/chart/StackedColumn',
        etc: ''
    },
    {
        type: '[공통] 차트',
        title: '라인 차트 (선 + 스택 형태)',
        subTitle: '',
        fileId: 'Combination',
        status: '완료',
        url: '/chart/Combination',
        etc: ''
    },
    {
        type: '[공통] 차트',
        title: 'TouchVOCA 차트',
        subTitle: '',
        fileId: 'MultipleRadialbars',
        status: '완료',
        url: '/chart/MultipleRadialbars',
        etc: ''
    },
    {
        type: '[공통] 차트',
        title: '누적 학습 기록 차트',
        subTitle: '',
        fileId: 'Donut',
        status: '완료',
        url: '/chart/Donut',
        etc: ''
    },
    {
        type: '[공통] 차트',
        title: '영역별 학업 성취율 차트',
        subTitle: '',
        fileId: 'Radar',
        status: '완료',
        url: '/chart/Radar',
        etc: ''
    },
    {
        type: '[공통] 차트',
        title: '감정 날씨_학기 총계 차트',
        subTitle: '',
        fileId: 'SimpleDonut',
        status: '완료',
        url: '/chart/SimpleDonut',
        etc: ''
    },
    {
        type: '[공통] 테이블',
        title: '기본 테이블',
        subTitle: '',
        fileId: 'Basic',
        status: '완료',
        url: '/table/Basic',
        etc: ''
    },
    {
        type: '[공통] 테이블',
        title: '편집 테이블',
        subTitle: '',
        fileId: 'Edit',
        status: '완료',
        url: '/table/Edit',
        etc: ''
    },
    {
        type: '[공통] 테이블',
        title: '패널 테이블',
        subTitle: '',
        fileId: 'Panel',
        status: '완료',
        url: '/table/Panel',
        etc: ''
    },
    {
        type: '[공통] 테이블',
        title: '캐러셀 테이블',
        subTitle: '',
        fileId: 'Carousel',
        status: '완료',
        url: '/table/Carousel',
        etc: ''
    },
    {
        type: '[공통] 색칠판',
        title: '색칠판',
        subTitle: '',
        fileId: 'ColorBoard',
        status: '완료',
        url: '/ColorBoard',
        etc: ''
    },
    {
        type: '[교사] 학습 분석',
        title: '메인',
        subTitle: '',
        fileId: '',
        status: '완료',
        url: '/teacher/analytics/',
        etc: ''
    },
    {
        type: '[교사] 학습 분석',
        title: '수업 정보',
        subTitle: '',
        fileId: 'lesson/index',
        status: '완료',
        url: '/teacher/analytics/lesson',
        etc: ''
    },
    {
        type: '[교사] 학습 분석',
        title: '수업 정보 > 성취율 정보',
        subTitle: '',
        fileId: 'info',
        status: '완료',
        url: '/teacher/analytics/lesson/info',
        etc: ''
    },
    {
        type: '[교사] 학습 분석',
        title: '성취율 테이블',
        subTitle: '',
        fileId: 'achievement/index',
        status: '완료',
        url: '/teacher/analytics/achievement',
        etc: ''
    },
    {
        type: '[교사] 학습 분석',
        title: '성취율 테이블 > 학업 성취율 패널',
        subTitle: '',
        fileId: 'Study',
        status: '완료',
        url: '/teacher/analytics/achievement/Study',
        etc: ''
    },
    {
        type: '[교사] 학습 분석',
        title: '성취율 테이블 > 필기 노트 패널',
        subTitle: '',
        fileId: 'Note',
        status: '완료',
        url: '/teacher/analytics/achievement/Note',
        etc: ''
    },
    {
        type: '[교사] 학습 분석',
        title: '성취율 테이블 > 드릴 학습 참여 건수 패널',
        subTitle: '',
        fileId: 'Drill',
        status: '완료',
        url: '/teacher/analytics/achievement/Drill',
        etc: ''
    },
    {
        type: '[교사] 학습 분석',
        title: '성취율 테이블 > 단어 학습 패널',
        subTitle: '',
        fileId: 'word',
        status: '완료',
        url: '/teacher/analytics/achievement/Word',
        etc: ''
    },
    {
        type: '[교사] 학습 분석',
        title: '성취율 테이블 > 챗봇 학습 패널',
        subTitle: '',
        fileId: 'ChatBot',
        status: '완료',
        url: '/teacher/analytics/achievement/ChatBot',
        etc: ''
    },
    {
        type: '[교사] 학습 분석',
        title: '성취율 테이블 > 챗봇 학습 패널 > [팝업] 신규 등록',
        subTitle: '',
        fileId: 'ChatBot',
        status: '완료',
        url: '/teacher/analytics/achievement/ChatBot',
        etc: ''
    },
    {
        type: '[교사] 학습 분석',
        title: '성취율 테이블 > 챗봇 학습 패널 > [팝업] 등록 완료',
        subTitle: '',
        fileId: 'ChatBot',
        status: '완료',
        url: '/teacher/analytics/achievement/ChatBot',
        etc: ''
    },
    {
        type: '[교사] 학습 분석',
        title: '누적 성취율 테이블',
        subTitle: '',
        fileId: 'accumulationIndex',
        status: '완료',
        url: '/teacher/analytics/accumulation',
        etc: ''
    },
    {
        type: '[교사] 학습 분석',
        title: '누적 성취율 테이블 > 맞춤 단원 평가 패널',
        subTitle: '',
        fileId: 'Customized',
        status: '완료',
        url: '/teacher/analytics/accumulation/Customized',
        etc: ''
    },
    {
        type: '[교사] 학습 분석',
        title: '학습 이력',
        subTitle: '',
        fileId: 'TeacherAnalyticsLearn',
        status: '완료',
        url: '/teacher/analytics/learn/',
        etc: ''
    },
    {
        type: '[교사] 학습 분석',
        title: '학습 이력 > 색칠판',
        subTitle: '',
        fileId: 'Coloring',
        status: '완료',
        url: '/teacher/analytics/learn/Coloring',
        etc: ''
    },
    {
        type: '[교사] 학습 분석',
        title: '학습 이력 > 색칠판 > [팝업] 개인별 숫자 색칠판 현황',
        subTitle: '',
        fileId: 'ColoringBoard',
        status: '완료',
        url: '/modal/ColoringBoard',
        etc: ''
    },
    {
        type: '[교사] 학습 분석',
        title: '학습 이력 > TouchVOCA',
        subTitle: '',
        fileId: 'TouchVoca',
        status: '완료',
        url: '/teacher/analytics/learn/TouchVoca',
        etc: ''
    },
    {
        type: '[교사] 학습 분석',
        title: '학습 이력 > TouchVOCA > [팝업] 개인별 단어 학습 현황',
        subTitle: '',
        fileId: 'VocaLearningStatus',
        status: '완료',
        url: '/modal/VocaLearningStatus',
        etc: ''
    },
    {
        type: '[교사] 학습 분석',
        title: '학습 이력 > 누적 학습 기록',
        subTitle: '',
        fileId: 'Self',
        status: '완료',
        url: '/teacher/analytics/learn/Self',
        etc: ''
    },

    {
        type: '[교사] 학습 분석',
        title: 'AI Level Test',
        subTitle: '',
        fileId: 'Level',
        status: '완료',
        url: '/teacher/analytics/Level',
        etc: ''
    },
    {
        type: '[교사] 학습 분석',
        title: 'AI Level Test > [팝업] 독려 메시지 보내기',
        subTitle: '',
        fileId: '',
        status: '완료',
        url: '/teacher/analytics/Level',
        etc: ''
    },
    {
        type: '[교사] 학습 분석',
        title: 'AI Level Test > [토스트] 독려 메시지 전송 완료',
        subTitle: '',
        fileId: '',
        status: '완료',
        url: '/teacher/analytics/Level',
        etc: ''
    },
    {
        type: '[교사] 생활 기록부',
        title: '발행 전',
        fileId: 'Empty',
        status: '완료',
        url: '/Empty',
        etc: ''
    },
    {
        type: '[교사] 생활 기록부',
        title: '메인',
        subTitle: '',
        fileId: 'record',
        status: '완료',
        url: '/teacher/record',
        etc: ''
    },
    {
        type: '[교사] 생활 기록부',
        title: '발행 현황',
        subTitle: '',
        fileId: 'IssuanceStatus',
        status: '완료',
        url: '/teacher/record/IssuanceStatus',
        etc: ''
    },
    {
        type: '[교사] 생활 기록부',
        title: '발행 현황 펼침 화면',
        subTitle: '',
        fileId: 'TeacherRecordIssuance',
        status: '완료',
        url: '/teacher/record/issuance',
        etc: ''
    },
    {
        type: '[교사] 생활 기록부',
        title: '발행 현황 펼침 화면 > 학습 이력 수집',
        fileId: 'IssuancePart',
        status: '완료',
        url: '/IssuancePart',
        etc: ''
    },
    {
        type: '[교사] 생활 기록부',
        title: '발행 현황 펼침 화면 > 발행 완료 건수',
        fileId: 'IssuancePart',
        status: '완료',
        url: '/IssuancePart',
        etc: ''
    },
    {
        type: '[교사] 생활 기록부',
        title: '발행 현황 펼침 화면 > 로그인 횟수와 총 학습 시간',
        fileId: 'IssuancePart',
        status: '완료',
        url: '/IssuancePart',
        etc: ''
    },
    {
        type: '[교사] 생활 기록부',
        title: '발행 현황 펼침 화면 > 이번 학기 영역별 학업 성취율',
        fileId: 'IssuancePart',
        status: '완료',
        url: '/IssuancePart',
        etc: ''
    },
    {
        type: '[교사] 생활 기록부',
        title: '발행 현황 펼침 화면 > 단원별 영역별 학업 성취율',
        fileId: 'IssuancePart',
        status: '완료',
        url: '/IssuancePart',
        etc: ''
    },
    {
        type: '[교사] 생활 기록부',
        title: '발행 현황 펼침 화면 > 단어 학습 진단',
        fileId: 'IssuancePart',
        status: '완료',
        url: '/IssuancePart',
        etc: ''
    },
    {
        type: '[교사] 생활 기록부',
        title: '발행 현황 펼침 화면 > 표현 학습 진단',
        fileId: 'IssuancePart',
        status: '완료',
        url: '/IssuancePart',
        etc: ''
    },
    {
        type: '[교사] 생활 기록부',
        title: '발행 현황 펼침 화면 > 감정 날씨 학기 총계',
        fileId: 'IssuancePart',
        status: '완료',
        url: '/IssuancePart',
        etc: ''
    },
    {
        type: '[교사] 생활 기록부',
        title: '발행 현황 펼침 화면 > 학습 정서 학기 평균',
        fileId: 'IssuancePart',
        status: '완료',
        url: '/IssuancePart',
        etc: ''
    },
    {
        type: '[교사] 생활 기록부',
        title: '발행 현황 펼침 화면 > 색칠 도안',
        fileId: 'IssuancePart',
        status: '완료',
        url: '/IssuancePart',
        etc: ''
    },
    {
        type: '[교사] 생활 기록부',
        title: '발행 현황 펼침 화면 > 단원별 교과 학습 발달 사항',
        fileId: '',
        status: '완료',
        url: '/IssuancePart',
        etc: ''
    },
    {
        type: '[교사] 생활 기록부',
        title: '발행 현황 펼침 화면 > 담임 선생님의 행동 발달 평가 내용',
        fileId: '',
        status: '완료',
        url: '/IssuancePart',
        etc: ''
    },
    {
        type: '[교사] 생활 기록부',
        title: '발행 현황 펼침 화면 > 평어 작성 테이블',
        fileId: 'TeacherRecordIssuanceGrade',
        status: '완료',
        url: '/teacher/record/Issuance/Grade',
        etc: ''
    },
    {
        type: '[교사] 생활 기록부',
        title: '발행주간 클릭시 > 행동 발달 작성 클릭시',
        fileId: 'Loading',
        status: '완료',
        url: '/Loading',
        etc: ''
    },
    {
        type: '[학생] 학습 분석',
        title: '메인',
        subTitle: '',
        fileId: '',
        status: '완료',
        url: '/student/analytics/',
        etc: ''
    },
    {
        type: '[학생] 학습 분석',
        title: '진도 학습',
        subTitle: '',
        fileId: 'ProgressInfo',
        status: '완료',
        url: '/student/analytics/ProgressInfo',
        etc: ''
    },
    {
        type: '[학생] 학습 분석',
        title: '진도 학습 > [팝업] 진도 학습 이력',
        subTitle: '',
        fileId: 'ProgressInfo',
        status: '완료',
        url: '/modal/ProgressInfo',
        etc: ''
    },
    {
        type: '[학생] 학습 분석',
        title: '진도 학습 > [팝업] 진도 학습 이력 > 테이블 노트 패널',
        subTitle: '',
        fileId: 'ProgressInfo',
        status: '완료',
        url: '/modal/ProgressInfo',
        etc: ''
    },
    {
        type: '[학생] 학습 분석',
        title: 'AI CURI Talk!',
        subTitle: '',
        fileId: 'curi',
        status: '완료',
        url: '/student/analytics/curi',
        etc: ''
    },
    {
        type: '[학생] 학습 분석',
        title: 'AI CURI Talk! > 숫자 색칠판 완성 (탭)',
        fileId: 'Coloring',
        status: '완료',
        url: '/student/analytics/curi/Coloring',
        etc: ''
    },

    {
        type: '[학생] 학습 분석',
        title: 'AI CURI Talk! > 숫자 색칠판 완성 (탭) > [팝업] 숫자 색칠판 완성하기 ',
        fileId: 'ColoringBoard',
        status: '완료',
        url: '/modal/ColoringBoard',
        etc: ''
    },

    {
        type: '[학생] 학습 분석',
        title: 'AI CURI Talk! > 큐리가 칭찬한 표현 (탭)',
        fileId: 'Correct',
        status: '완료',
        url: '/student/analytics/curi/Correct',
        etc: ''
    },

    {
        type: '[학생] 학습 분석',
        title: 'AI CURI Talk! > 큐리가 아쉬워한 표현 (탭)',
        fileId: 'Incorrect',
        status: '완료',
        url: '/student/analytics/curi/Incorrect',
        etc: ''
    },
    {
        type: '[학생] 학습 분석',
        title: 'AI CURI Talk! > [팝업] 한 눈에 보기',
        fileId: '',
        status: '완료',
        url: '/modal/CuriTalkInfo',
        etc: ''
    },
    {
        type: '[학생] 학습 분석',
        title: '스스로 점검',
        subTitle: '',
        fileId: 'SelfCheck',
        status: '완료',
        url: '/student/analytics/SelfCheck',
        etc: ''
    },
    {
        type: '[학생] 학습 분석',
        title: '스스로 점검 > [팝업] 성취 기준 모아보기',
        subTitle: '',
        fileId: 'SelfCheck',
        status: '완료',
        url: '/modal/SelfCheck',
        etc: ''
    },
    {
        type: '[학생] 학습 분석',
        title: '영역별 학업 성취율',
        subTitle: '',
        fileId: 'Achievement',
        status: '완료',
        url: '/student/analytics/Achievement',
        etc: ''
    },
    {
        type: '[학생] 학습 분석',
        title: '영역별 학업 성취율 > [팝업] 영역별 학업 성취율',
        subTitle: '',
        fileId: 'Achievement',
        status: '완료',
        url: '/modal/Achievement',
        etc: ''
    },
    {
        type: '[학생] 학습 분석',
        title: '오늘의 Touch VOCA',
        subTitle: '',
        fileId: 'TouchVoca',
        status: '완료',
        url: '/student/analytics/TouchVoca',
        etc: ''
    },
    {
        type: '[학생] 학습 분석',
        title: '오늘의 Touch VOCA > [팝업] Touch VOCA 학습 이력',
        subTitle: 'TouchVoca',
        fileId: '',
        status: '완료',
        url: '/modal/TouchVoca',
        etc: ''
    },
    {
        type: '[학생] 학습 분석',
        title: '나의 학습 분석',
        subTitle: '',
        fileId: 'Diagnosis',
        status: '완료',
        url: '/student/analytics/Diagnosis',
        etc: ''
    },
    {
        type: '[학생] 생활 기록부',
        title: '메인',
        subTitle: '',
        fileId: 'record',
        status: '완료',
        url: '/student/record',
        etc: ''
    }
]);
const iaTeacher = ref([
    {
        title: '교사>학습결과>학습분석>오늘의 학업 성취율>선택한 날 수업시수가 없는 경우',
        fileId: 'en-result-001',
        status: '완료',
        url: '/publishing/en-result-001',
        etc: ''
    },
    {
        title: '교사>학습결과>학습분석>오늘의 학업 성취율>선택한 날 수업 예정 정보가 있는 경우',
        fileId: 'en-result-002',
        status: '완료',
        url: '/publishing/en-result-002',
        etc: ''
    },
    {
        title: '교사>학습결과>학습분석>오늘의 학업 성취율>선택한 날이 수업 완료일 경우',
        fileId: 'en-result-003',
        status: '완료',
        url: '/publishing/en-result-003',
        etc: ''
    },
    {
        title: '교사>학습결과>학습분석>오늘의 학업 성취율>독려 메시지 팝업',
        fileId: 'en-result-004',
        status: '완료',
        url: '/publishing/en-result-004',
        etc: ''
    },
    {
        title: '교사>학습결과>학습분석>오늘의 학업 성취율>독려 메시지 팝업-02',
        fileId: 'en-result-004',
        status: '완료',
        url: '/publishing/en-result-004-01',
        etc: ''
    },
    {
        title: '교사>학습결과>학습분석>오늘의 학업 성취율>개인별 숫자 색칠판 현황 팝업',
        fileId: 'en-result-005',
        status: '완료',
        url: '/publishing/en-result-005',
        etc: ''
    },
    {
        title: '교사>학습결과>학습분석>오늘의 학업 성취율>개인별 숫자 색칠판 현황 팝업-도장',
        fileId: 'en-result-005',
        status: '완료',
        url: '/publishing/en-result-005-01',
        etc: ''
    },
    {
        title: '교사>학습결과>학습분석>오늘의 학업 성취율>한 학기동안 모은 색깔조각의 총계',
        fileId: 'en-result-006',
        status: '완료',
        url: '/publishing/en-result-006',
        etc: ''
    },
    {
        title: '교사>학습결과>학습분석>오늘의 학업 성취율>Voca 학습 현황 모니터링',
        fileId: 'en-result-007',
        status: '완료',
        url: '/publishing/en-result-007',
        etc: ''
    },
    {
        title: '교사>학습결과>학습분석>오늘의 학업 성취율 > Voca 학습 현황 모니터링-01',
        fileId: 'en-result-007-01',
        status: '완료',
        url: '/publishing/en-result-007-01',
        etc: ''
    },
    {
        title: '교사>학습결과>학습분석>오늘의 학업 성취율>누적 학습 기록',
        fileId: 'en-result-009',
        status: '완료',
        url: '/publishing/en-result-009',
        etc: ''
    },
    {
        title: '교사>학습결과>학습분석>오늘의 학업 성취율>우리 반오늘의 학업 성취율',
        fileId: 'en-result-010',
        status: '완료',
        url: '/publishing/en-result-010',
        etc: ''
    },
    {
        title: '교사>학습결과>학습분석>오늘의 학업 성취율>개인별 학업 성취율에 따른 추천컨텐츠-자동',
        fileId: 'en-result-011',
        status: '완료',
        url: '/publishing/en-result-011',
        etc: ''
    },
    {
        title: '교사>학습결과>학습분석>오늘의 학업 성취율>개인별 학업 성취율에 따른 추천컨텐츠-수동',
        fileId: 'en-result-011-01',
        status: '완료',
        url: '/publishing/en-result-011-01',
        etc: ''
    },
    {
        title: '교사>학습결과>학습분석>오늘의 학업 성취율>개인별 필기노트',
        fileId: 'en-result-012',
        status: '완료',
        url: '/publishing/en-result-012',
        etc: ''
    },
    {
        title: '교사>학습결과>학습분석>오늘의 학업 성취율>개인별 드릴학습',
        fileId: 'en-result-013',
        status: '완료',
        url: '/publishing/en-result-013',
        etc: ''
    },
    {
        title: '교사>학습결과>학습분석>오늘의 학업 성취율>단어기준 알고 모르는 AI 분석',
        fileId: 'en-result-014',
        status: '완료',
        url: '/publishing/en-result-014',
        etc: ''
    },
    {
        title: '교사>학습결과>학습분석>오늘의 학업 성취율>분석에 매핑된 단어',
        fileId: 'en-result-016',
        status: '완료',
        url: '/publishing/en-result-016',
        etc: ''
    },
    {
        title: '교사>학습결과>학습분석>오늘의 학업 성취율>큐티톡 학습 회수',
        fileId: 'en-result-017',
        status: '완료',
        url: '/publishing/en-result-017',
        etc: ''
    },
    {
        title: '교사>학습결과>학습분석>오늘의 학업 성취율>큐티톡 학습 회수_팝업',
        fileId: 'en-result-017-01',
        status: '완료',
        url: '/publishing/en-result-017-01',
        etc: ''
    },
    {
        title: '교사>학습결과>학습분석>오늘의 학업 성취율>큐티톡 학습 회수_팝업-등록완료',
        fileId: 'en-result-017-02',
        status: '완료',
        url: '/publishing/en-result-017-02',
        etc: ''
    },
    {
        title: '교사>학습결과>학습분석>단원별 누적 성취율>맞춤 단원평가 출제',
        fileId: 'en-result-018',
        status: '완료',
        url: '/publishing/en-result-018',
        etc: ''
    },
    {
        title: '교사>학습결과>학습분석>단원별 누적 성취율>맞춤 단원평가 출제-셀 추가방식',
        fileId: 'en-result-018-01',
        status: '완료',
        url: '/publishing/en-result-018-01',
        etc: ''
    },
    {
        title: '교사>학습결과>학습분석>단원별 누적 성취율>맞춤 단원평가 출제-레이어노출',
        fileId: 'en-result-018-02',
        status: '완료',
        url: '/publishing/en-result-018-02',
        etc: ''
    },
    {
        title: '교사>학습결과>학습분석>단원별 누적 성취율>맞춤 단원평가 출제-테이블 셀 슬라이드 긴경우',
        fileId: 'en-result-018-03',
        status: '완료',
        url: '/publishing/en-result-018-03',
        etc: ''
    },
    {
        title: '공통>학습결과>생활기록부>발행 전>',
        fileId: 'en-result-019-01',
        status: '완료',
        url: '/publishing/en-result-019-01',
        etc: ''
    },
    {
        title: '공통>학습결과>생활기록부>발행 전>2',
        fileId: 'en-result-019-02',
        status: '완료',
        url: '/publishing/en-result-019-02',
        etc: ''
    },
    {
        title: '교사>학습결과>생활기록부>생활기록부 발행주간 클릭시>',
        fileId: 'en-result-019',
        status: '완료',
        url: '/publishing/en-result-019',
        etc: ''
    },
    {
        title: '교사>학습결과>생활기록부>생활기록부 발행주간 클릭시 >',
        fileId: 'en-result-020',
        status: '완료',
        url: '/publishing/en-result-020',
        etc: ''
    },
    {
        title: '교사>학습결과>생활기록부>생활기록부 발행주간 클릭시>학습 이력 수집 클릭시 (펼침)-색칠도안 4개',
        fileId: 'en-result-022',
        status: '완료',
        url: '/publishing/en-result-022',
        etc: ''
    },
    {
        title: '교사>학습결과>생활기록부>생활기록부 발행주간 클릭시>학습 이력 수집 클릭시 (펼침)-색칠도안 2개',
        fileId: 'en-result-022-01',
        status: '완료',
        url: '/publishing/en-result-022-01',
        etc: ''
    },
    {
        title: '교사>학습결과>생활기록부>생활기록부 발행주간 클릭시>단원별 평어 작성 클릭시(펼침)',
        fileId: 'en-result-026',
        status: '완료',
        url: '/publishing/en-result-026',
        etc: ''
    },
    {
        title: '교사>학습결과>생활기록부>생활기록부 발행주간 클릭시>단원별 평어 작성 클릭시 > 텍스트 편집모드',
        fileId: 'en-result-028',
        status: '완료',
        url: '/publishing/en-result-028',
        etc: ''
    },
    {
        title: '교사>학습결과>생활기록부>생활기록부 발행주간 클릭시>행동 발달 작성 클릭시',
        fileId: 'en-result-029',
        status: '완료',
        url: '/publishing/en-result-029',
        etc: ''
    },
    {
        title: '교사>학습결과>생활기록부>생활기록부 발행주간 클릭시>행동 발달 작성 클릭시-로딩',
        fileId: 'en-result-029-01',
        status: '완료',
        url: '/publishing/en-result-029-01',
        etc: ''
    },
    {
        title: 'PDF 저장 생활기록부 항목',
        fileId: 'PDF 저장 생활기록부 항목',
        status: '완료',
        url: '/publishing/en-result-046',
        etc: ''
    }
]);
const iaStudent = ref([
    {
        title: '학생>학습결과>학습분석>숫자 색칠판 완성하기>리스트',
        fileId: 'en-result-035',
        status: '완료',
        url: '/publishing/en-result-035',
        etc: ''
    },
    {
        title: '학생>학습결과>학습분석>숫자 색칠판 완성하기>색칠판',
        fileId: 'en-result-035-01',
        status: '완료',
        url: '/publishing/en-result-035-01',
        etc: ''
    },
    {
        title: '학생>학습결과>학습분석>큐리가 칭찬한 표현>',
        fileId: 'en-result-036',
        status: '완료',
        url: '/publishing/en-result-036',
        etc: ''
    },
    {
        title: '학생>학습결과>학습분석>큐리가 아쉬워한 표현>',
        fileId: 'en-result-037',
        status: '완료',
        url: '/publishing/en-result-037',
        etc: ''
    },
    {
        title: '학생>학습결과>학습분석>숫자 색칠판 완성하기 팝업>수집한 색깔조각',
        fileId: 'en-result-038',
        status: '완료',
        url: '/publishing/en-result-038',
        etc: ''
    },
    {
        title: '학생>학습결과>학습분석>숫자 색칠판 완성하기 팝업>남은색깔 조각',
        fileId: 'en-result-039',
        status: '완료',
        url: '/publishing/en-result-039',
        etc: ''
    },
    {
        title: '학생>학습결과>학습분석>숫자 색칠판 완성하기 팝업>완성',
        fileId: 'en-result-040',
        status: '완료',
        url: '/publishing/en-result-040',
        etc: ''
    },
    {
        title: '학생>학습결과>학습분석>진도학습이력 팝업>',
        fileId: 'en-result-041',
        status: '완료',
        url: '/publishing/en-result-041',
        etc: ''
    },
    {
        title: '학생>학습결과>학습분석>진도학습이력 팝업 >노트 업로드',
        fileId: 'en-result-042',
        status: '완료',
        url: '/publishing/en-result-042',
        etc: ''
    },
    {
        title: '학생>학습결과>학습분석>학업 성취도 팝업>',
        fileId: 'en-result-043',
        status: '완료',
        url: '/publishing/en-result-043',
        etc: ''
    },
    {
        title: '학생>학습결과>학습분석>성취 기준 모아보기 팝업>그래프',
        fileId: 'en-result-044',
        status: '완료',
        url: '/publishing/en-result-044',
        etc: ''
    },
    {
        title: '학생>학습결과>학습분석>성취 기준 모아보기 팝업>차시',
        fileId: 'en-result-044-01',
        status: '완료',
        url: '/publishing/en-result-044-01',
        etc: ''
    },
    {
        title: '학생>학습결과>학습분석>AI talk talk 한눈에 보기 팝업>테이블',
        fileId: 'en-result-045',
        status: '완료',
        url: '/publishing/en-result-045',
        etc: ''
    },
    {
        title: '공통>학습결과>생활기록부>발행 전>',
        fileId: 'en-result-019-01',
        status: '완료',
        url: '/publishing/en-result-019-01',
        etc: ''
    },
    {
        title: '공통>학습결과>생활기록부>발행 전>',
        fileId: 'en-result-019-02',
        status: '완료',
        url: '/publishing/en-result-019-02',
        etc: ''
    },
    {
        title: 'PDF 저장 생활기록부 항목',
        fileId: 'PDF 저장 생활기록부 항목',
        status: '완료',
        url: '/publishing/en-result-046',
        etc: ''
    }
]);
const guide = ref([
    {
        type: 'Template page',
        title: '교사 메인 레이아웃',
        fileId: 'TeacherAnalytics',
        status: '진행중',
        url: '/guide/TeacherAnalytics',
        etc: ''
    },
    {
        type: '',
        title: '학생 메인 레이아웃',
        fileId: 'StudentAnalytics',
        status: '진행중',
        url: '/guide/StudentAnalytics',
        etc: '20240418 캘린더 selectAttribute > highlight 스타일 수정'
    },
    {
        type: 'UI Form',
        title: 'Button',
        fileId: 'Button',
        status: '완료',
        url: '/guide/Button',
        etc: ''
    },
    {
        type: '',
        title: 'Select',
        fileId: 'Select',
        status: '완료',
        url: '/guide/Select',
        etc: ''
    },
    {
        type: '',
        title: 'Checkbox', // 'Radio & Checkbox',
        fileId: 'RadioCheckbox',
        status: '완료',
        url: '/guide/RadioCheckbox',
        etc: ''
    },
    {
        type: 'UI Pattern',
        title: '공통 카드',
        fileId: 'UiCard',
        status: '진행중',
        url: '/guide/UiCard',
        etc: '20240417 .type_record, .box_contents 가이드 추가'
    },
    {
        type: '',
        title: 'Tabs',
        fileId: 'Tabs',
        status: '완료',
        url: '/guide/Tabs',
        etc: ''
    },
    {
        type: '',
        title: 'Table',
        fileId: 'Table',
        status: '완료',
        url: '/guide/Table',
        etc: '20240411 테이블 default ui > en-result-045 학생>학습결과>학습분석>AI talk talk 한눈에 보기 팝업 기본 테이블 디자인 반영 || 20240417 .type_line 추가 || 20240418 ul li > v-list 로 수정'
    },
    {
        type: '',
        title: '공통 카드 > 데이터 없음',
        fileId: 'NoData',
        status: '완료',
        url: '/guide/NoData',
        etc: ''
    },
    {
        type: '',
        title: 'Image-wrap',
        fileId: 'ImageWrap',
        status: '완료',
        url: '/guide/ImageWrap',
        etc: ''
    },
    {
        type: '',
        title: '캘린더',
        fileId: 'DatePicker',
        status: '진행중',
        url: '/guide/DatePicker',
        etc: '20240418 캘린더 selectAttribute > highlight 스타일 수정'
    },
    {
        type: '',
        title: '색칠판',
        fileId: 'ColorBoard',
        status: '완료',
        url: '/guide/ColorBoard',
        etc: ''
    },
    {
        type: '',
        title: '막대차트',
        fileId: 'ChartBar',
        status: '완료',
        url: '/guide/ChartBar',
        etc: ''
    },
    {
        type: '',
        title: '[공통] 차트 > 성취율 차트',
        fileId: 'StackedBar',
        status: '완료',
        url: '/guide/StackedBar',
        etc: ''
    },
    {
        type: '',
        title: '[교사] 학습 분석 > AI Level Test',
        fileId: 'TeacherAnalyticsLevel',
        status: '완료',
        url: '/guide/TeacherAnalyticsLevel',
        etc: '20240418 캘린더 selectAttribute > highlight 스타일 수정'
    },
    {
        type: '',
        title: '학습분석 진입 시 타이틀영역',
        fileId: 'LearningHistoryStats',
        status: '완료',
        url: '/guide/LearningHistoryStats',
        etc: ''
    },
    {
        type: '',
        title: '[교사] 학습 분석 > 학습 이력 > 색칠판',
        fileId: 'Coloring',
        status: '완료',
        url: '/guide/Coloring',
        etc: ''
    },
    // {
    //     type: '',
    //     title: '[교사] 학습 분석 > 학습 이력 > TouchVOCA',
    //     fileId: 'TeacherAnalyticsLearnTouchVoca',
    //     status: '진행중',
    //     url: '/guide/TeacherAnalyticsLearnTouchVoca',
    //     etc: '차트 제외 완료'
    // },
    {
        type: '',
        title: '[교사] 학습 분석 > 학습 이력 > 누적 학습 기록',
        fileId: 'TeacherAnalyticsLearnSelf',
        status: '완료',
        url: '/guide/TeacherAnalyticsLearnSelf',
        etc: ''
    },
    {
        type: '',
        title: '수집한 색깔 조각 (팝업)',
        fileId: 'CollectedColor',
        status: '완료',
        url: '/guide/CollectedColor',
        etc: ''
    },
    {
        type: '',
        title: '남은 색깔 조각 (팝업)',
        fileId: 'RemainingColor',
        status: '완료',
        url: '/guide/RemainingColor',
        etc: ''
    },
    {
        type: '',
        title: '색칠판(팝업) > 도장(팝업)',
        fileId: 'Modal',
        status: '완료',
        url: '/guide/Modal',
        etc: ''
    },
    {
        type: '',
        title: 'Card-items',
        fileId: 'CardItems',
        status: '완료',
        url: '/guide/CardItems',
        etc: ''
    },
    {
        type: '',
        title: '학업 성취율 테이블',
        fileId: 'AchievementTable',
        status: '완료',
        url: '/guide/AchievementTable',
        etc: ''
    },
    {
        type: '',
        title: '오늘의 학업 성취율 > 우리반 오늘의 학업성취율 > 개인별 학업 성취율에 따른 추천컨텐츠',
        fileId: 'Study',
        status: '완료',
        url: '/guide/Study',
        etc: ''
    },
    {
        type: '',
        title: '오늘의 학업 성취율 > 우리반 오늘의 학업성취율 > 개인별 필기노트',
        fileId: 'Note',
        status: '완료',
        url: '/guide/Note',
        etc: ''
    },
    {
        type: '',
        title: '오늘의 학업 성취율 > 우리반 오늘의 학업성취율 > 개인별 드릴학습',
        fileId: 'Drill',
        status: '완료',
        url: '/guide/Drill',
        etc: ''
    },
    {
        type: '',
        title: '오늘의 학업 성취율 > 우리반 오늘의 학업성취율 > 개인별 단어학습 클릭 시',
        fileId: 'Word',
        status: '완료',
        url: '/guide/Word',
        etc: ''
    },
    {
        type: '',
        title: '오늘의 학업 성취율 > 우리반 오늘의 학업성취율 > 단어학습에서 화살표 버튼 클릭',
        fileId: 'ChatBot',
        status: '완료',
        url: '/guide/ChatBot',
        etc: ''
    },
    {
        type: '',
        title: '생활 기록부 > 발행 현황 펼침 > 단원별 평어 작성',
        fileId: 'TeacherRecordIssuanceGrade',
        status: '완료',
        url: '/guide/TeacherRecordIssuanceGrade',
        etc: ''
    },
    {
        type: '',
        title: '데일리 수업 정보',
        fileId: 'LessonInfo',
        status: '완료',
        url: '/guide/LessonInfo',
        etc: ''
    },
    {
        type: '',
        title: '[팝업] 개인별 단어 학습 현황',
        fileId: 'VocaLearningStatus',
        status: '완료',
        url: '/guide/VocaLearningStatus',
        etc: ''
    },
    {
        type: '',
        title: '누적성취율 테이블 컴포넌트',
        fileId: 'TableCarousel',
        status: '진행중',
        url: '/guide/TableCarousel',
        etc: '차트 제외 완료'
    },
    {
        type: '',
        title: '[교사] 학습 분석 > 누적 성취율 테이블 > 맞춤 단원 평가 패널',
        fileId: 'customized',
        status: '완료',
        url: '/guide/customized',
        etc: ''
    },
    {
        type: '',
        title: '[교사] 학습결과 > 생활기록부 > 생활기록부 발행주간 > 학습 이력 수집 > 로그인 횟수와 총 학습 시간',
        fileId: 'IssuancePart',
        status: '완료',
        url: '/guide/IssuancePart',
        etc: ''
    },
    {
        type: '',
        title: '[교사] 생활 기록부 > 발행 현황',
        fileId: 'IssuanceStatus',
        status: '완료',
        url: '/guide/IssuanceStatus',
        etc: ''
    },
    {
        type: '',
        title: '[교사] 생활 기록부 > 발행 현황 펼침 화면 > 단원별 교과 학습 발달 사항',
        fileId: 'IssuancePartTable',
        status: '완료',
        url: '/guide/IssuancePartTable',
        etc: ''
    },
    {
        type: '',
        title: '[교사] 생활 기록부 > 발행 현황 펼침 화면 > 담임 선생님의 행동 발달 평가 내용',
        fileId: 'IssuancePartAssess',
        status: '완료',
        url: '/guide/IssuancePartAssess',
        etc: ''
    },
    {
        type: '',
        title: '[교사] 생활 기록부 > 발행 현황 펼침 화면 > 색칠 도안',
        fileId: 'IssuancePartColor',
        status: '완료',
        url: '/guide/IssuancePartColor',
        etc: ''
    },
    {
        type: '',
        title: '[학생] 학습 분석 > AI CURI Talk! > [팝업] 한 눈에 보기',
        fileId: 'CuriTalkInfo',
        status: '완료',
        url: '/guide/CuriTalkInfo',
        etc: ''
    },
    {
        type: '',
        title: '[학생] 학습 분석 > 스스로 점검',
        fileId: 'CardSelfCheck',
        status: '완료',
        url: '/guide/CardSelfCheck',
        etc: ''
    },
    {
        type: '',
        title: '[학생] 학습 분석 > 스스로 점검 > [팝업] 성취 기준 모아보기',
        fileId: 'SelfCheck',
        status: '완료',
        url: '/guide/SelfCheck',
        etc: ''
    },
]);
</script>
<template>
    <div class="contents_wrap">
        <div class="section_scroll">
            <div class="contents_area">
                <header></header>
                <!-- Tab menu -->
                <v-tabs v-model="tab" bg-color="orange">
                    <v-tab value="one">components</v-tab>
                    <v-tab value="two">대시보드IA</v-tab>
                    <v-tab value="three">가이드</v-tab>
                </v-tabs>
                <!-- Tab window  -->
                <v-window v-model="tab">
                    <v-window-item value="one">
                        <v-table>
                            <thead>
                                <tr>
                                    <th style="width: 15%" class="text-left">구분</th>
                                    <th style="width: 25%" class="text-left">화면타이틀</th>
                                    <th style="width: 25%" class="text-left">url</th>
                                    <th style="width: 11%" class="text-left">
                                        <v-select
                                            v-model="commonStore.status"
                                            :items="['전체', '완료', '진행중', '진행예정']"
                                            variant="outlined"
                                            hide-details
                                        ></v-select>
                                    </th>
                                    <th style="width: auto" class="text-left">비고</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr
                                    v-for="item in commonStore.status === '전체'
                                        ? list
                                        : list.filter(obj => obj.status === commonStore.status)"
                                    :key="item.name"
                                >
                                    <td>
                                        <router-link target="_blank" :to="item.url">
                                            {{ item.type }}
                                        </router-link>
                                    </td>
                                    <td>
                                        <router-link target="_blank" :to="item.url">
                                            {{ item.title }}
                                        </router-link>
                                    </td>
                                    <td>
                                        <router-link _blank :to="item.url"> {{ item.url }} </router-link>
                                    </td>
                                    <td style="text-align: center">{{ item.status }}</td>
                                    <td>{{ item.etc }}</td>
                                </tr>
                            </tbody>
                        </v-table>
                    </v-window-item>
                    <v-window-item value="two">
                        <v-table>
                            <thead>
                                <tr>
                                    <th colspan="4">
                                        <div class="d-flex align-center">
                                            <strong class="flex-1-1-100">교사</strong>
                                            <v-chip color="red"> 전체 : 00page / 완료 00page </v-chip>
                                        </div>
                                    </th>
                                </tr>
                                <tr>
                                    <th style="width: 50%" class="text-left">화면타이틀</th>
                                    <th style="width: 10%" class="text-left">url</th>
                                    <th style="width: 8%" class="text-left">진행상태</th>
                                    <th style="width: auto" class="text-left">비고</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="item in iaTeacher" :key="item.name">
                                    <td>
                                        <router-link target="_blank" :to="item.url">
                                            {{ item.title }}
                                        </router-link>
                                    </td>
                                    <td>
                                        <router-link _blank :to="item.url"> {{ item.url }} </router-link>
                                    </td>
                                    <td>{{ item.status }}</td>
                                    <td>{{ item.etc }}</td>
                                </tr>
                            </tbody>
                        </v-table>
                        <v-divider />
                        <v-table>
                            <thead>
                                <tr>
                                    <th colspan="4">
                                        <div class="d-flex align-center">
                                            <strong class="flex-1-1-100">학생</strong>
                                            <v-chip color="red"> 전체 : 00page / 완료 00page </v-chip>
                                        </div>
                                    </th>
                                </tr>
                                <tr>
                                    <th style="width: 50%" class="text-left">화면타이틀</th>
                                    <th style="width: 10%" class="text-left">url</th>
                                    <th style="width: 8%" class="text-left">진행상태</th>
                                    <th style="width: auto" class="text-left">비고</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="item in iaStudent" :key="item.name">
                                    <td>
                                        <router-link target="_blank" :to="item.url">
                                            {{ item.title }}
                                        </router-link>
                                    </td>
                                    <td>
                                        <router-link _blank :to="item.url"> {{ item.url }} </router-link>
                                    </td>
                                    <td>{{ item.status }}</td>
                                    <td>{{ item.etc }}</td>
                                </tr>
                            </tbody>
                        </v-table>
                    </v-window-item>
                    <v-window-item value="three">
                        <v-table>
                            <thead>
                                <tr>
                                    <th style="width: 10%" class="text-left">구분</th>
                                    <th style="width: 40%" class="text-left">화면타이틀</th>
                                    <th style="width: 15%" class="text-left">URL</th>
                                    <th style="width: 8%" class="text-left">진행상태</th>
                                    <th style="width: auto" class="text-left">비고</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="item in guide" :key="item.name">
                                    <td>{{ item.type }}</td>
                                    <td>
                                        <router-link target="_blank" :to="item.url">
                                            {{ item.title }}
                                        </router-link>
                                    </td>
                                    <td>
                                        <router-link _blank :to="item.url"> {{ item.url }} </router-link>
                                    </td>
                                    <td>{{ item.status }}</td>
                                    <td>{{ item.etc }}</td>
                                </tr>
                            </tbody>
                        </v-table>
                    </v-window-item>
                </v-window>
            </div>
        </div>
    </div>
</template>

<style type="scss" scoped>
.v-table th,
.v-table td {
    font-size: 1.3rem;
    padding-top: 0.3rem;
    padding-bottom: 0.3rem;
}

.v-table a {
    font-size: 1.4rem;
    font-weight: 700;
    letter-spacing: -0.1rem;
}
</style>
