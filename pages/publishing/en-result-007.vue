<template>
    <div class="analytics">
        <AuthInfo />
        <div class="d-flex mb-5 gap2">
            <!-- 캘린더 -->
            <Calendar />
            <!-- 마크업 확인이 가능 하도록 임시 추가 한 div 입니다.  -->
            <div class="flex-fill">
            <!-- // 마크업 확인이 가능 하도록 임시 추가 한 div 입니다.  -->
                <!-- 수업 정보 -->
                <TeacherAnalyticsLesson />
            </div>
        </div>
        <div class="d-flex gap2">
            <!-- 독려 리스트 -->
            <TeacherAnalyticsLevel />
            <!-- 학습 분석 -->
            <TeacherAnalyticsLearn />
        </div>
    </div>
</template>