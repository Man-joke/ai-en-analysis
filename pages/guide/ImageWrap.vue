<template>
    <div class="guide_contents">
        <h1>Image wrap guide</h1>
        <section>
            <h2>default</h2>
            <div class="image_wrap">
                <v-img :src="thumb" alt="가족사진 이미지" />
            </div>
            <h3>media인 경우
                <small>.image_wrap에 class="media_(type명)"이 추가 됩니다. (예: media_pdf)</small>
            </h3>
            <div class="image_wrap" :class="`media_${item.type}`"
            v-for="(item, index) in fileThumbList" :key="index">
                <i class="ico" :class="`data_${item.type}`" />
                <span class="media_name">{{item.title}}</span>
            </div>            
            <h3>이미지에 도장찍혀 있는 경우
                <small>도장 이미지 종류에 따라 .image_wrap에 class="stamp_01~05"까지 추가 됩니다.</small>
            </h3>
            <div class="guide_bg_dark">
                <div class="image_wrap stamp_01">
                    <v-img :src="thumbnail" alt="thumbnail" />
                </div>
                <div class="image_wrap stamp_02">
                    <v-img :src="thumbnail" alt="thumbnail" />
                </div>
                <div class="image_wrap stamp_03">
                    <v-img :src="thumbnail" alt="thumbnail" />
                </div>
                <div class="image_wrap stamp_04">
                    <v-img :src="thumbnail" alt="thumbnail" />
                </div>
                <div class="image_wrap stamp_05">
                    <v-img :src="thumbnail" alt="thumbnail" />
                </div>
            </div>
        </section>
        <section>
            <h2>.type_border
                <small>.image_wrap에 class="type_border" 가 추가 됩니다.</small>
            </h2>
            <div class="image_wrap type_border">
                <v-img :src="thumbnail" alt="thumbnail" />
            </div>
        </section>
    </div>
</template>
<script setup>
import { ref } from 'vue'
import thumb from '@/assets/images/temp/img_bk_thumb.png';
import thumbnail from '@/assets/images/temp/img_thumbnail.svg';

const fileThumbList = ref([
    { type: 'pdf', title: 'PDF' },
    { type: 'image', title: 'IMG' },
    { type: 'url', title: 'WWW' },
    { type: 'excel', title: 'EXCEL' },
    { type: 'ppt', title: 'PPT' },
    { type: 'word', title: 'DOCX' },
    { type: 'hwp', title: 'HWP' },
    { type: 'whiteboard', title: 'WHITE BOARD' },
    { type: 'video', title: 'VIDEO' }
])
</script>