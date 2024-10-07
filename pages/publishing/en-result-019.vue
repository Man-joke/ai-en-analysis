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
            <div class="flex-fill">
                <!-- 수업 정보 -->
                <TeacherAnalyticsLesson />
            </div>
        </div>
    </div>
</template>