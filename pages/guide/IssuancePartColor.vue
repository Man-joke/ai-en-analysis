<template>
    <v-container fluid class="coloring_design">
        <div class="design">
            <!-- !NOTE 색칠 도안 영역 입니다. -->
            <v-img
                :src="coloring"
                alt="색칠 도안"
            />
            <!-- // 색칠 도안 영역 입니다. -->
        </div>
        <div class="design">
            <v-img
                :src="coloring"
                alt="색칠 도안"
            />
        </div>
        <div class="design">
            <v-img
                :src="coloring"
                alt="색칠 도안"
            />
        </div>
        <div class="design">
            <v-img
                :src="coloring"
                alt="색칠 도안"
            />
        </div>
    </v-container>
</template>
<script setup>
import coloring from '@/assets/images/temp/img_coloring_board_full.png';
</script>
