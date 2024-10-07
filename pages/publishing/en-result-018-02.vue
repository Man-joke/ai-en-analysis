<template>
    <div class="analytics">
        <AuthInfo />
        <div class="d-flex mb-5 gap2">
            <!-- 캘린더 -->
            <Calendar />
            <div class="flex-fill">
                <!-- 수업 정보 -->
                <TeacherAnalyticsLesson />
            </div>
        </div>
        <div>
            <!--  학업 성취율 테이블 -->
            <TeacherAnalyticsAccumulation />
        </div>
        <div class="d-flex gap2">
            <!-- 독려 리스트 -->
            <TeacherAnalyticsLevel />
            <!-- 학습 분석 -->
            <TeacherAnalyticsLearn />
        </div>
    </div>
</template>