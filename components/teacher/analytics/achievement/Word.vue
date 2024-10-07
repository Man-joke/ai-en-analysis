<template>
    <div class="chatbot">
        <div class="inner">
            <!-- 타이틀 영역 -->
            <v-list class="tit px30 py40" bg-color="transparent">
                <v-list-item class="bullet">
                    <p>알고있는 단어 수 : <span class="num">19</span>개</p>
                </v-list-item>
                <v-list-item class="bullet">
                    <p>조금 알거나 모르는 단어 수 : <span class="num">3</span>개</p>
                </v-list-item>
                <v-list-item class="bullet">
                    <p>모르는 단어 수 : <span class="num">19</span>개</p>
                </v-list-item>
                <v-list-item class="bullet">
                    <p>단어 학습 총 개수 : <span class="num">2</span>개</p>
                </v-list-item>
            </v-list>
            <!-- 단어 영역 -->
            <v-list class="word" :style="word ? 'display: block' : 'display: none'" bg-color="transparent">
                <v-list-item>
                    <p>apple</p>
                    <p>school</p>
                    <p>apple</p>
                    <p>congratulate</p>
                    <p>book</p>
                    <p>apple</p>
                    <p>school</p>
                    <p>apple</p>
                    <p>congratulate</p>
                    <p>book</p>
                    <p>apple</p>
                    <p>school</p>
                    <p>apple</p>
                    <p>congratulate</p>
                    <p>book</p>
                    <p>apple</p>
                    <p>school</p>
                </v-list-item>
                <v-list-item>
                    <p>school</p>
                    <p>apple</p>
                    <p>congratulate</p>
                    <p>book</p>
                    <p>apple</p>
                    <p>school</p>
                    <p>apple</p>
                    <p>congratulate</p>
                    <p>book</p>
                    <p>apple</p>
                </v-list-item>
                <v-list-item>
                    <p>congratulate</p>
                    <p>book</p>
                    <p>apple</p>
                    <p>school</p>
                    <p>apple</p>
                    <p>congratulate</p>
                    <p>book</p>
                    <p>apple</p>
                    <p>school</p>
                    <p>apple</p>
                </v-list-item>
                <v-list-item>
                    <p>school</p>
                    <p>congratulate</p>
                    <p>book</p>
                    <p>apple</p>
                    <p>apple</p>
                    <p>congratulate</p>
                    <p>book</p>
                    <p>apple</p>
                    <p>school</p>
                    <p>apple</p>
                </v-list-item>
            </v-list>
            <!-- 더보기 버튼 -->
            <div class="more" @click="word = !word">
                <div class="ico_outer size_60">
                    <i v-if="word" class="ico left_24"></i>
                    <i v-else class="ico right_24"></i>
                    <span class="blind">펼치기</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';

const word = ref(false);
</script>
