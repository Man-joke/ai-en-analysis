<template>
    <div class="scrollable_x">
        <div class="card_items">
            <div class="item">
                <div class="image_wrap stamp_01">
                    <v-img :src="thumb" alt="가족사진 이미지" />
                </div>
                <div class="text_wrap">
                    <p>파일명</p>
                </div>
            </div>
            <div class="item">
                <div class="image_wrap stamp_02">
                    <v-img :src="thumb" alt="가족사진 이미지" />
                </div>
                <div class="text_wrap">
                    <p>파일명</p>
                </div>
            </div>
            <div class="item">
                <div class="image_wrap stamp_03">
                    <v-img :src="thumb" alt="가족사진 이미지" />
                </div>
                <div class="text_wrap">
                    <p>파일명</p>
                </div>
            </div>
            <div class="item">
                <div class="image_wrap stamp_04">
                    <v-img :src="thumb" alt="가족사진 이미지" />
                </div>
                <div class="text_wrap">
                    <p>파일명</p>
                </div>
            </div>
            <div class="item">
                <div class="image_wrap stamp_05">
                    <v-img :src="thumb" alt="가족사진 이미지" />
                </div>
                <div class="text_wrap">
                    <p>파일명</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import thumb from '@/assets/images/temp/img_bk_thumb.png';
</script>