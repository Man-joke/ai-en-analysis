<template>
    <!-- !NOTE .no_data_wrap을 감싸는 영역 높이에 따라 센터에 맞게 작업 되어 있습니다. 개발 완료 후 주석 삭제 부탁 드립니다. -->
    <v-sheet class="no_data_wrap">
        <div class="no_data">
            <v-img class="icon" :src="studentRecord" alt="생활 기록부" />
            <p>2025년 2학기 생활 기록부가 발행 전입니다.</p>
            <v-btn rounded flat class="primary">2025년 1학기 생활 기록부 불러오기</v-btn>
        </div>
    </v-sheet>
</template>
<script setup>
    import studentRecord from '@/assets/images/img_student_record.svg';
</script>