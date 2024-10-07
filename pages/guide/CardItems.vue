<template>
    <div class="guide_contents">
        <h1>Card Items guide</h1>
        <section>
            <h2>default
                <small>이미지와 파일명이 있는 기본타입 입니다.</small>
            </h2>
            <div class="scrollable_x">
                <div class="card_items">
                    <div class="item" v-for="index in 8" :key="index">
                        <div class="image_wrap">
                            <v-img :src="thumb" alt="가족사진 이미지" />
                        </div>
                        <div class="text_wrap">
                            <p>파일명</p>
                        </div>
                    </div>
                </div>
            </div>
            <h3>check box가 있는 경우</h3>
            <div class="scrollable_x">
                <div class="card_items">
                    <div class="item">
                        <div class="image_wrap">
                            <v-checkbox class="type_list" :model-value="true"></v-checkbox>
                            <v-img :src="thumb" alt="가족사진 이미지" />
                        </div>
                        <div class="text_wrap">
                            <p>파일명</p>
                        </div>
                    </div>
                    <div class="item" v-for="index in 7" :key="index">
                        <div class="image_wrap">
                            <v-checkbox class="type_list"></v-checkbox>
                            <v-img :src="thumb" alt="가족사진 이미지" />
                        </div>
                        <div class="text_wrap">
                            <p>파일명</p>
                        </div>
                    </div>
                </div>
            </div>
            <h3>파일명 없이 이미지만 있는 경우</h3>
            <div class="card_items">
                <div class="item" v-for="index in 4" :key="index">
                    <div class="image_wrap">
                        <v-img :src="thumb" alt="가족사진 이미지" />
                    </div>
                </div>
            </div>
            <h3>이미지에 도장찍혀 있는 경우
                <small>도장 이미지 종류에 따라 .image_wrap에 class="stamp_01~05"까지 추가 됩니다.</small>
            </h3>
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
                            파일명
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
        </section>
    </div>
</template>
<script setup>
import thumb from '@/assets/images/temp/img_bk_thumb.png';
</script>