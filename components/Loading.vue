<template>
    <v-btn class="primary" @click="loading = true"> Open Dialog </v-btn>
    <!-- 로딩 팝업 -->
    <v-dialog v-model="loading" persistent>
        <!-- !NOTE .loading을 감싸는 영역 높이에 따라 센터에 맞게 작업 되어 있습니다. 개발 완료 후 주석 삭제 부탁 드립니다. -->
        <div class="loading_wrap">
            <div class="loading">
                <strong>잠시만 기다려 주세요.</strong>
                <v-img :src="studentRecord" alt="로딩" />
            </div>
        </div>
    </v-dialog>
</template>

<script setup>
import studentRecord from '@/assets/images/img_loading.svg';

import { ref } from 'vue';
const loading = ref(true);
</script>
