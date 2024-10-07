<template>
     <h2 class="mgt20 mb20">개인별 학업 성취율에 따른 추천컨텐츠</h2>
    <!-- !NOTE 개인별 학업 성취율에 따른 추천컨텐츠 -->
    <div class="inner_title gap2">
        <h3 class="bullet">
            선생님께서는 학생들에게 AI 추천 자료를 <span>자동 출제</span>하고 계십니다. 수동 출제로 변경하시려면 <a href="#" class="text_link">여기</a>를 선택하세요.
        </h3>
        <div class="buttons">
            <v-btn rounded flat size="small" class="primary" disabled>자동 출제 중</v-btn>
        </div>
    </div>
    <div class="scrollable_x mgt10">
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
    <!-- // 개인별 학업 성취율에 따른 추천컨텐츠 -->

    <h2 class="mgt40 mb20">개인별 학업 성취율에 따른 추천컨텐츠_수동출제전환시</h2>
    <!-- !NOTE 개인별 학업 성취율에 따른 추천컨텐츠_수동출제전환시 -->
    <div class="inner_title gap2">
        <h3 class="bullet">
            선생님께서는 학생들에게 AI 추천 자료를 <span>자동 출제</span>하고 계십니다. 수동 출제로 변경하시려면 <a href="#" class="text_link">여기</a>를 선택하세요.
        </h3>
        <div class="buttons">
            <v-btn rounded flat size="small" class="secondary">선택 해제</v-btn>
            <v-btn rounded flat size="small" class="primary">보내기</v-btn>
        </div>
    </div>
    <div class="scrollable_x mgt10">
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
    <!-- // 개인별 학업 성취율에 따른 추천컨텐츠_수동출제전환시 -->
</template>
<script setup>
import thumb from '@/assets/images/temp/img_bk_thumb.png';
</script>