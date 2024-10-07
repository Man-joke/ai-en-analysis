<template>
    <v-card elevation="0" class="v-card-green dailyPerformance">
        <v-card-item>
            <v-card-title class="lessonInfo">
                <div class="notice d-flex align-center gap2">
                    <v-select
                        v-model="select"
                        :items="items"
                        class="type_dark"
                        :menu-props="{ contentClass: 'dark_item' }"
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
                    <v-select
                        v-model="lessonSelect"
                        :items="lessonItems"
                        class="type_dark type_lesson"
                        :menu-props="{ contentClass: 'dark_item' }"
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
                    <div class="pages">
                        교과서<br />
                        <span class="num">110~113쪽</span>
                    </div>
                </div>
                <v-btn class="icon_only icon_only-sm" rounded flat><i class="ico more" /></v-btn>
            </v-card-title>
        </v-card-item>
        <v-container fluid class="class-box">
            <v-list variant="flat" density="compact">
                <v-list-item>
                    <p class="tit_txt">Get Ready</p>
                    <p class="sub_txt">때에 맞는 인사하기</p>
                    <div class="extra">
                        <v-btn rounded flat size="small" class="primary">복습</v-btn>
                    </div>
                </v-list-item>
                <v-list-item>
                    <p class="tit_txt">Let’s Learn</p>
                    <p class="sub_txt">학습 내용 알아보기</p>
                    <div class="extra">
                        <v-btn rounded flat size="small" class="primary">복습</v-btn>
                    </div>
                </v-list-item>
                <v-list-item>
                    <p class="tit_txt">Look and Think</p>
                    <p class="sub_txt">동영상 보고 표현 이해하기</p>
                    <div class="extra">
                        <v-btn rounded flat size="small" class="primary">복습</v-btn>
                    </div>
                </v-list-item>
                <v-list-item>
                    <p class="tit_txt">Let’s Learn</p>
                    <p class="sub_txt">실생활 동영상 보며 대화하기</p>
                    <div class="extra">
                        <v-btn rounded flat size="small" class="primary">복습</v-btn>
                    </div>
                </v-list-item>
                <v-list-item>
                    <p class="tit_txt">Chant</p>
                    <p class="sub_txt">찬트 하며 표현 익히기</p>
                    <div class="extra">
                        <v-btn rounded flat size="small" class="primary">복습</v-btn>
                    </div>
                </v-list-item>
                <v-list-item>
                    <p class="tit_txt">Play Time 1</p>
                    <p class="sub_txt">몸으로 말해요</p>
                    <div class="extra">
                        <v-btn rounded flat size="small" class="primary">복습</v-btn>
                    </div>
                </v-list-item>
                <v-list-item>
                    <p class="tit_txt">Play Time 1</p>
                    <p class="sub_txt">몸으로 말해요</p>
                    <div class="extra">
                        <v-btn rounded flat size="small" class="primary">복습</v-btn>
                    </div>
                </v-list-item>
            </v-list>
        </v-container>
    </v-card>
</template>

<script setup>
import { ref } from 'vue';
const select = ref({ state: 'Lesson 1. Hello, I`m Mo' });
const items = ref([
    { state: 'Lesson 1. Hello, I`m Mo' },
    { state: 'Lesson 2. What`s This' },
    { state: 'Lesson 3. Stand Up, Please' },
    { state: 'Lesson 4. Do You Like Pandas?' },
    { state: 'Lesson 5. How Many Apples?' },
    { state: 'Lesson 6. What Color Is It?' }
]);

const lessonSelect = ref({ state: '1차시' });
const lessonItems = ref([
    { state: '1차시' },
    { state: '2차시' },
    { state: '3차시' },
]);
</script>
