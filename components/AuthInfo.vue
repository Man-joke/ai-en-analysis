<template>
    <div class="authInfo title">
        <div class="d-flex align-center">
            <i class="ico ico_size_4 people mr-2" />
            <p>오늘 로그인 횟수 : <span>2</span>회</p>
        </div>
        <!-- 학생일 경우 제거 -->
        <div class="d-flex align-center mgl30">
            <p>오늘 학습한 내용은 <span>16</span>시 이후에 분석됩니다.</p>
            <v-btn flat rounded class="dark_blue size_xxs ml-2">
                <i class="ico refresh ico_size_sm mr-1" />
                새로고침
            </v-btn>
        </div>
        <!-- /학생일 경우 제거 -->
    </div>
</template>
