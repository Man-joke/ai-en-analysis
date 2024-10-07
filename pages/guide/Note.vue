<template>
    <div class="note_items">
        <!-- !Note 더보기 클릭시 .note_item가 증가 됩니다.  -->
        <div class="note_item">
            <div class="inner_title gap1">
                <div class="title_wrap">
                    <h3 class="bullet">Get Ready</h3>
                    <span>때에 맞는 인사하기</span>
                </div>
                <strong class="result">4건</strong>
            </div>
            <div class="card_items type_wrap">
                <div class="item" v-for="index in 4" :key="index">
                    <div class="image_wrap">
                        <v-img :src="thumb" alt="가족사진 이미지" />
                    </div>
                </div>
            </div>
        </div>
        <div class="note_item">
            <div class="inner_title gap1">
                <div class="title_wrap">
                    <h3 class="bullet">Let’s Learn</h3>
                    <span>학습 내용 알아보기</span>
                </div>
                <strong class="result">2건</strong>
            </div>
            <div class="card_items type_wrap">
                <div class="item" v-for="index in 2" :key="index">
                    <div class="image_wrap">
                        <v-img :src="thumb" alt="가족사진 이미지" />
                    </div>
                </div>
            </div>
        </div>
        <div class="page_buttons">
            <v-btn rounded flat class="secondary">더보기 (1/4)</v-btn>
        </div>
    </div>
</template>
<script setup>
import thumb from '@/assets/images/temp/img_bk_thumb.png';
</script>