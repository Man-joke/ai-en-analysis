<template>
  <!-- !NOTE .dashboard-area에 record 클레스 추가 해주세요. 
    교사, 학생 동일 클레스 사용 됩니다.
  -->
  <div class="record_wrap">
    <div class="header">
      <div class="utility">
        <v-select
            v-model="select"
            :items="items"
            class="type_white"
            :menu-props="{ contentClass: 'white_item' }"
            item-title="state"
            item-value="abbr"
            label="Select"
            variant="outlined"
            persistent-hint
            rounded
            return-object
            single-line
            hide-details
        ></v-select>
        <div class="extra">
          <div class="buttons">
            <v-btn class="icon_only size_md"><i class="ico ico_size_10 pdf"></i></v-btn>
            <v-btn class="icon_only size_md"><i class="ico ico_size_10 print"></i></v-btn>
            <v-btn class="icon_only size_md"><i class="ico ico_size_10 close_w"></i></v-btn>
          </div>
        </div>
      </div>
      <div class="inner_wrap">
        <ul class="divider_group">
          <li>시공초등학교</li>
          <li>3학년 2반</li>
        </ul>
        <div class="avatar-box">
          <div class="avatar">
            <v-img :src="avatar" alt="아바타 이미지" class="avatar-item" />
          </div>
          <div class="avatar-info">
            <span class="info_number">17번</span>
            <h2>
              <span class="info_name">김아미</span>
              의 AI
              <span class="subject">
                <span>3학년 1학기</span>
                <strong>영어</strong>
              </span>
              생활기록부
            </h2>
          </div>
        </div>
      </div>
    </div>
    <IssuancePart />
  </div>
</template>
<script setup>
  import { ref } from 'vue';

  import avatar from '@/assets/images/temp/img_pho_st01.png';
  
  const select = ref({ state: '교과 진도만 분석합니다.' });
  const items = ref([
      { state: '교과 진도만 분석합니다.' },
  ]);
</script>