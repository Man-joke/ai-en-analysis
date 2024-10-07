<template>
    <div class="record">
        <AuthInfo />
        <div class="d-flex mb20 gap2">
            <Calendar />
            <TeacherRecordIssuanceStatus />
        </div>
        <div class="d-flex gap2">
            <!-- 독려 리스트 -->
            <TeacherAnalyticsLevel />
            <!-- 마크업 확인이 가능 하도록 임시 추가 한 div 입니다.  -->
            <div class="flex-fill">
            <!-- // 마크업 확인이 가능 하도록 임시 추가 한 div 입니다.  -->
                <!-- 수업 정보 -->
                <TeacherAnalyticsLesson />
            </div>
        </div>
    </div>
</template>