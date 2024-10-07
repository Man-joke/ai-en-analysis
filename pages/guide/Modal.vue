<template>
    <div class="feedbackStampList" v-if="Stamp">
        <v-sheet class="px40 py40">
            <h3 class="text-center mb30">학생에게 어떤 도장을 보낼까요?</h3>
            <v-item-group mandatory class="d-flex flex-wrap gap3 py20" style="width: 57rem">
                <div class="item">
                    <!-- 선택이 되면 .checked 추가 -->
                    <v-item v-slot="{ isSelected, toggle }">
                        <v-card
                            class="d-flex align-center no-hover checked"
                            :class="isSelected ? 'checked' : ''"
                            @click="toggle"
                            min-width="100%"
                            min-height="100%"
                            flat
                            :ripple="false"
                            tile
                        >
                            <v-img :src="stamp01" alt="참 잘했어요" />
                        </v-card>
                    </v-item>
                </div>
                <div class="item">
                    <v-item v-slot="{ isSelected, toggle }">
                        <v-card
                            class="d-flex align-center no-hover"
                            @click="toggle"
                            :class="isSelected ? 'checked' : ''"
                            min-width="100%"
                            min-height="100%"
                            flat
                            :ripple="false"
                            tile
                        >
                            <v-img :src="stamp02" alt="정말 잘했어요" />
                        </v-card>
                    </v-item>
                </div>
                <div class="item">
                    <v-item v-slot="{ isSelected, toggle }">
                        <v-card
                            class="d-flex align-center no-hover"
                            @click="toggle"
                            :class="isSelected ? 'checked' : ''"
                            min-width="100%"
                            min-height="100%"
                            flat
                            :ripple="false"
                            tile
                        >
                            <v-img :src="stamp03" alt="세상에 !!!" />
                        </v-card>
                    </v-item>
                </div>
                <div class="item">
                    <v-item v-slot="{ isSelected, toggle }">
                        <v-card
                            class="d-flex align-center no-hover"
                            @click="toggle"
                            :class="isSelected ? 'checked' : ''"
                            min-width="100%"
                            min-height="100%"
                            flat
                            :ripple="false"
                            tile
                        >
                            <v-img :src="stamp04" alt="이미 최고의 경지" />
                        </v-card>
                    </v-item>
                </div>
                <div class="item">
                    <v-item v-slot="{ isSelected, toggle }">
                        <v-card
                            class="d-flex align-center no-hover"
                            @click="toggle"
                            :class="isSelected ? 'checked' : ''"
                            min-width="100%"
                            min-height="100%"
                            flat
                            :ripple="false"
                            tile
                        >
                            <v-img :src="stamp05" alt="어떻게 이렇게까지 잘하는 거지" />
                        </v-card>
                    </v-item>
                </div>
                <div class="item">
                    <v-item v-slot="{ isSelected, toggle }">
                        <v-card
                            class="d-flex align-center no-hover"
                            :class="isSelected ? 'checked' : ''"
                            @click="toggle"
                            min-width="100%"
                            min-height="100%"
                            flat
                            :ripple="false"
                            tile
                        >
                            <v-img :src="stamp01" alt="참 잘했어요" />
                        </v-card>
                    </v-item>
                </div>
                <div class="item">
                    <v-item v-slot="{ isSelected, toggle }">
                        <v-card
                            class="d-flex align-center no-hover"
                            @click="toggle"
                            :class="isSelected ? 'checked' : ''"
                            min-width="100%"
                            min-height="100%"
                            flat
                            :ripple="false"
                            tile
                        >
                            <v-img :src="stamp02" alt="정말 잘했어요" />
                        </v-card>
                    </v-item>
                </div>
                <div class="item">
                    <v-item v-slot="{ isSelected, toggle }">
                        <v-card
                            class="d-flex align-center no-hover"
                            @click="toggle"
                            :class="isSelected ? 'checked' : ''"
                            min-width="100%"
                            min-height="100%"
                            flat
                            :ripple="false"
                            tile
                        >
                            <v-img :src="stamp03" alt="세상에 !!!" />
                        </v-card>
                    </v-item>
                </div>
                <div class="item">
                    <v-item v-slot="{ isSelected, toggle }">
                        <v-card
                            class="d-flex align-center no-hover"
                            @click="toggle"
                            :class="isSelected ? 'checked' : ''"
                            min-width="100%"
                            min-height="100%"
                            flat
                            :ripple="false"
                            tile
                        >
                            <v-img :src="stamp04" alt="이미 최고의 경지" />
                        </v-card>
                    </v-item>
                </div>
                <div class="item">
                    <v-item v-slot="{ isSelected, toggle }">
                        <v-card
                            class="d-flex align-center no-hover"
                            @click="toggle"
                            :class="isSelected ? 'checked' : ''"
                            min-width="100%"
                            min-height="100%"
                            flat
                            :ripple="false"
                            tile
                        >
                            <v-img :src="stamp05" alt="어떻게 이렇게까지 잘하는 거지" />
                        </v-card>
                    </v-item>
                </div>
            </v-item-group>
            <div class="dialog_btn_wrap mgt30 gap1 d-flex justify-center">
                <v-btn rounded flat class="outlined size_md" @click="Stamp = false">닫기</v-btn>
                <v-btn rounded flat class="primary">피드백 도장 보내기</v-btn>
            </div>
        </v-sheet>
    </div>
</template>
<script setup>
const Stamp = ref(true);

import stamp01 from '@/assets/images/img_stamp_01.svg';
import stamp02 from '@/assets/images/img_stamp_02.svg';
import stamp03 from '@/assets/images/img_stamp_03.svg';
import stamp04 from '@/assets/images/img_stamp_04.svg';
import stamp05 from '@/assets/images/img_stamp_05.svg';
</script>
