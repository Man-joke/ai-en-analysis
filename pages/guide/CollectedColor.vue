<template>
    <div class="text-center pa-4">
        <v-btn class="primary" @click="collectedColor = true"> Open Dialog </v-btn>

        <!-- 숫자색칠판 완성하기 팝업 -->
        <v-dialog v-model="collectedColor" width="auto">
            <v-card class="dialog piece-xxxlg collectedColor">
                <div class="tabs fluid">
                    <div class="d-flex">
                        <div class="avatar avatar-box">
                            <v-img :src="avatar" alt="아바타 이미지" class="avatar-item" />
                            <div class="avatar-info">
                                <span class="info_number">15번</span>
                                <span class="info_name">늘푸른하늘</span>
                            </div>
                        </div>
                        <v-tabs v-model="tab">
                            <v-tab value="one">남은 색깔 조각</v-tab>
                            <v-tab value="two">수집한 색깔 조각</v-tab>
                        </v-tabs>
                    </div>
                    <v-window v-model="tab">
                        <v-window-item value="one">
                            <div class="d-flex">
                                <!-- Note. modal 내에 텍스트가 있을 시 content에 has_title를 추가합니다.(없을 시 제거) -->
                                <div class="content has_title">
                                    <!-- <p class="title_bullet">색칠한 부분을 다시 선택하면 색깔 조각의 원래 자리로 돌아갑니다.</p> -->
                                    <v-carousel hide-delimiters hide-delimiter-background show-arrows height="auto">
                                        <!-- Note. 텍스트가 있을 시 추가합니다. -->
                                        <div class="inner_title">
                                            <h4 class="bullet text-left">선생님의 도장이 찍힌 도안은 색깔 조각을 옮길 수 없습니다</h4>
                                        </div>
                                        <template v-slot:prev="{ props }">
                                            <v-btn
                                                flat
                                                rounded
                                                size="small"
                                                @click="props.onClick"
                                                class="icon_only icon_only-transparent icon_only-36 ml-1"
                                            >
                                                <div class="ico_outer size_sm">
                                                    <i class="ico size_5 left_24"></i>
                                                    <span class="blind">이전</span>
                                                </div>
                                            </v-btn>
                                        </template>
                                        <template v-slot:next="{ props }">
                                            <v-btn
                                                flat
                                                rounded
                                                size="small"
                                                @click="props.onClick"
                                                class="icon_only icon_only-transparent icon_only-36 mr-1"
                                            >
                                                <div class="ico_outer size_sm">
                                                    <i class="ico size_5 right_24"></i>
                                                    <span class="blind">다음</span>
                                                </div>
                                            </v-btn>
                                        </template>
                                        <v-carousel-item height="49.4rem" max-height="49.4rem">
                                            <!-- 임시 이미지 개발 진행시 변경 예정 -->
                                            <div class="collect-color">
                                                <img src="@/assets/images/temp/img_coloring_board.png" alt="이미지" />
                                            </div>
                                            <div class="colorboard">
                                                <div class="board-stamp bg-white">
                                                    <v-img :src="stamp01" alt="어떻게 이렇게까지 잘하는 거지" />
                                                </div>
                                            </div>
                                        </v-carousel-item>
                                        <v-carousel-item height="49.4rem" max-height="49.4rem">
                                            <div class="collect-color">
                                                <img src="@/assets/images/temp/img_coloring_board.png" alt="이미지" />
                                            </div>
                                        </v-carousel-item>
                                    </v-carousel>
                                    <!-- 인디케이터 -->
                                    <div class="indicator">
                                        <span class="txt_wrap"><em>1</em> / <span>3</span></span>
                                    </div>
                                </div>

                                <!-- 색깔 조각 영역 -->
                                <div class="side-rlt">
                                    <v-list bg-color="transparent">
                                        <!-- v-btn으로 변경건, v-list-item에 클래스 추가 -->
                                        <v-list-item class="line_colunm">
                                            <!-- <div class="text-center">
                                                <p class="name">'듣기' 색깔 조각</p>
                                                <div class="brush_num">
                                                    <i class="ico ico_size_9_half brush_01"></i>
                                                    <em>X</em>
                                                    <span>0개</span>
                                                </div>
                                            </div> -->
                                            <p class="name">'듣기' 색깔 조각</p>
                                            <v-btn flat rounded class="btn_brush">
                                                <div class="brush_num">
                                                    <i class="ico ico_size_9_half brush_01"></i>
                                                    <em>X</em>
                                                    <span>0개</span>
                                                </div>
                                            </v-btn>
                                        </v-list-item>
                                        <v-list-item class="line_colunm">
                                            <!-- <div class="text-center">
                                                <p class="name">'읽기' 색깔 조각</p>
                                                <div class="brush_num">
                                                    <i class="ico ico_size_9_half brush_02"></i>
                                                    <em>X</em>
                                                    <span>0개</span>
                                                </div>
                                            </div> -->
                                            <p class="name">'읽기' 색깔 조각</p>
                                            <v-btn flat rounded class="btn_brush">
                                                <div class="brush_num">
                                                    <i class="ico ico_size_9_half brush_02"></i>
                                                    <em>X</em>
                                                    <span>0개</span>
                                                </div>
                                            </v-btn>
                                        </v-list-item>
                                        <v-list-item class="line_colunm">
                                            <!-- <div class="text-center">
                                                <p class="name">'보기' 색깔 조각</p>
                                                <div class="brush_num">
                                                    <i class="ico ico_size_9_half brush_03"></i>
                                                    <em>X</em>
                                                    <span>0개</span>
                                                </div>
                                            </div> -->
                                            <p class="name">'보기' 색깔 조각</p>
                                            <v-btn flat rounded class="btn_brush">
                                                <div class="brush_num">
                                                    <i class="ico ico_size_9_half brush_03"></i>
                                                    <em>X</em>
                                                    <span>0개</span>
                                                </div>
                                            </v-btn>
                                        </v-list-item>
                                        <v-list-item class="line_colunm">
                                            <!-- <div class="text-center">
                                                <p class="name">'말하기' 색깔 조각</p>
                                                <div class="brush_num">
                                                    <i class="ico ico_size_9_half brush_04"></i>
                                                    <em>X</em>
                                                    <span>0개</span>
                                                </div>
                                            </div> -->
                                            <p class="name">'말하기' 색깔 조각</p>
                                            <v-btn flat rounded class="btn_brush">
                                                <div class="brush_num">
                                                    <i class="ico ico_size_9_half brush_04"></i>
                                                    <em>X</em>
                                                    <span>0개</span>
                                                </div>
                                            </v-btn>
                                        </v-list-item>
                                        <v-list-item class="line_colunm">
                                            <!-- <div class="text-center">
                                                <p class="name">'쓰기' 색깔 조각</p>
                                                <div class="brush_num">
                                                    <i class="ico ico_size_9_half brush_05"></i>
                                                    <em>X</em>
                                                    <span>0개</span>
                                                </div>
                                            </div> -->
                                            <p class="name">'쓰기' 색깔 조각</p>
                                            <v-btn flat rounded class="btn_brush">
                                                <div class="brush_num">
                                                    <i class="ico ico_size_9_half brush_05"></i>
                                                    <em>X</em>
                                                    <span>0개</span>
                                                </div>
                                            </v-btn>
                                        </v-list-item>
                                        <v-list-item class="line_colunm">
                                            <!-- <div class="text-center">
                                                <p class="name">'제시하기' 색깔 조각</p>
                                                <div class="brush_num">
                                                    <i class="ico ico_size_9_half brush_06"></i>
                                                    <em>X</em>
                                                    <span>0개</span>
                                                </div>
                                            </div> -->
                                            <p class="name">'제시하기' 색깔 조각</p>
                                            <v-btn flat rounded class="btn_brush">
                                                <div class="brush_num">
                                                    <i class="ico ico_size_9_half brush_06"></i>
                                                    <em>X</em>
                                                    <span>0개</span>
                                                </div>
                                            </v-btn>
                                        </v-list-item>
                                    </v-list>
                                </div>
                            </div>
                            <div class="dialog_btn_wrap mgt30">
                                <v-btn rounded flat class="outlined size_md" @click="collectedColor = false">닫기</v-btn>
                                <v-btn rounded flat class="primary" @click="Stamp = true">피드백 도장 보내기</v-btn>
                            </div>
                        </v-window-item>
                        <v-window-item value="two">
                            <div class="d-flex">
                                <div class="content">
                                    <!-- 임시 이미지 개발 진행시 변경 예정 -->
                                    <v-carousel hide-delimiters hide-delimiter-background show-arrows height="auto">
                                        <template v-slot:prev="{ props }">
                                            <v-btn
                                                flat
                                                rounded
                                                size="small"
                                                @click="props.onClick"
                                                class="icon_only icon_only-transparent icon_only-36 ml-1"
                                            >
                                                <div class="ico_outer size_sm">
                                                    <i class="ico size_5 left_24"></i>
                                                    <span class="blind">이전</span>
                                                </div>
                                            </v-btn>
                                        </template>
                                        <template v-slot:next="{ props }">
                                            <v-btn
                                                flat
                                                rounded
                                                size="small"
                                                @click="props.onClick"
                                                class="icon_only icon_only-transparent icon_only-36 mr-1"
                                            >
                                                <div class="ico_outer size_sm">
                                                    <i class="ico size_5 right_24"></i>
                                                    <span class="blind">다음</span>
                                                </div>
                                            </v-btn>
                                        </template>
                                        <v-carousel-item height="49.4rem" max-height="49.4rem">
                                            <!-- 임시 이미지 개발 진행시 변경 예정 -->
                                            <div class="collect-color">
                                                <img src="@/assets/images/temp/img_remaining_board.png" alt="이미지" />
                                            </div>
                                        </v-carousel-item>
                                        <v-carousel-item height="49.4rem" max-height="49.4rem">
                                            <div class="collect-color">
                                                <img src="@/assets/images/temp/img_remaining_board.png" alt="이미지" />
                                            </div>
                                        </v-carousel-item>
                                    </v-carousel>

                                    <!-- 인디케이터 -->
                                    <div class="indicator">
                                        <span class="txt_wrap"><em>1</em> / <span>3</span></span>
                                    </div>
                                </div>

                                <!-- 색깔 조각 영역 -->
                                <div class="side-rlt">
                                    <v-list bg-color="transparent">
                                        <!-- v-btn으로 변경건, v-list-item에 클래스 추가 -->
                                        <v-list-item class="line_colunm">
                                            <!-- <div class="text-center">
                                                <p class="name">'듣기' 색깔 조각</p>
                                                <div class="brush_num">
                                                    <i class="ico ico_size_9_half brush_01"></i>
                                                    <em>X</em>
                                                    <span>0개</span>
                                                </div>
                                            </div> -->
                                            <p class="name">'듣기' 색깔 조각</p>
                                            <v-btn flat rounded class="btn_brush">
                                                <div class="brush_num">
                                                    <i class="ico ico_size_9_half brush_01"></i>
                                                    <em>X</em>
                                                    <span>0개</span>
                                                </div>
                                            </v-btn>
                                        </v-list-item>
                                        <v-list-item class="line_colunm">
                                            <!-- <div class="text-center">
                                                <p class="name">'읽기' 색깔 조각</p>
                                                <div class="brush_num">
                                                    <i class="ico ico_size_9_half brush_02"></i>
                                                    <em>X</em>
                                                    <span>0개</span>
                                                </div>
                                            </div> -->
                                            <p class="name">'읽기' 색깔 조각</p>
                                            <v-btn flat rounded class="btn_brush">
                                                <div class="brush_num">
                                                    <i class="ico ico_size_9_half brush_02"></i>
                                                    <em>X</em>
                                                    <span>0개</span>
                                                </div>
                                            </v-btn>
                                        </v-list-item>
                                        <v-list-item class="line_colunm">
                                            <!-- <div class="text-center">
                                                <p class="name">'보기' 색깔 조각</p>
                                                <div class="brush_num">
                                                    <i class="ico ico_size_9_half brush_03"></i>
                                                    <em>X</em>
                                                    <span>0개</span>
                                                </div>
                                            </div> -->
                                            <p class="name">'보기' 색깔 조각</p>
                                            <v-btn flat rounded class="btn_brush">
                                                <div class="brush_num">
                                                    <i class="ico ico_size_9_half brush_03"></i>
                                                    <em>X</em>
                                                    <span>0개</span>
                                                </div>
                                            </v-btn>
                                        </v-list-item>
                                        <v-list-item class="line_colunm">
                                            <!-- <div class="text-center">
                                                <p class="name">'말하기' 색깔 조각</p>
                                                <div class="brush_num">
                                                    <i class="ico ico_size_9_half brush_04"></i>
                                                    <em>X</em>
                                                    <span>0개</span>
                                                </div>
                                            </div> -->
                                            <p class="name">'말하기' 색깔 조각</p>
                                            <v-btn flat rounded class="btn_brush">
                                                <div class="brush_num">
                                                    <i class="ico ico_size_9_half brush_04"></i>
                                                    <em>X</em>
                                                    <span>0개</span>
                                                </div>
                                            </v-btn>
                                        </v-list-item>
                                        <v-list-item class="line_colunm">
                                            <!-- <div class="text-center">
                                                <p class="name">'쓰기' 색깔 조각</p>
                                                <div class="brush_num">
                                                    <i class="ico ico_size_9_half brush_05"></i>
                                                    <em>X</em>
                                                    <span>0개</span>
                                                </div>
                                            </div> -->
                                            <p class="name">'쓰기' 색깔 조각</p>
                                            <v-btn flat rounded class="btn_brush">
                                                <div class="brush_num">
                                                    <i class="ico ico_size_9_half brush_05"></i>
                                                    <em>X</em>
                                                    <span>0개</span>
                                                </div>
                                            </v-btn>
                                        </v-list-item>
                                        <v-list-item class="line_colunm">
                                            <!-- <div class="text-center">
                                                <p class="name">'제시하기' 색깔 조각</p>
                                                <div class="brush_num">
                                                    <i class="ico ico_size_9_half brush_06"></i>
                                                    <em>X</em>
                                                    <span>0개</span>
                                                </div>
                                            </div> -->
                                            <p class="name">'제시하기' 색깔 조각</p>
                                            <v-btn flat rounded class="btn_brush">
                                                <div class="brush_num">
                                                    <i class="ico ico_size_9_half brush_06"></i>
                                                    <em>X</em>
                                                    <span>0개</span>
                                                </div>
                                            </v-btn>
                                        </v-list-item>
                                    </v-list>
                                </div>
                            </div>
                            <div class="dialog_btn_wrap mgt30">
                                <v-btn rounded flat class="outlined" @click="collectedColor = false">닫기</v-btn>
                            </div>
                        </v-window-item>
                    </v-window>
                </div>
            </v-card>

            <!-- 피드백 도장 보내기 -->
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
                        <v-btn rounded flat class="outlined size_md" @click="Stamp = false">취소</v-btn>
                        <v-btn rounded flat class="primary">피드백 도장 보내기</v-btn>
                    </div>
                </v-sheet>
            </div>
        </v-dialog>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const dialog = ref(true);
const tab = ref('one');
const Stamp = ref(false);
const collectedColor = ref(true);

import stamp01 from '@/assets/images/img_stamp_01.svg';
import stamp02 from '@/assets/images/img_stamp_02.svg';
import stamp03 from '@/assets/images/img_stamp_03.svg';
import stamp04 from '@/assets/images/img_stamp_04.svg';
import stamp05 from '@/assets/images/img_stamp_05.svg';
</script>
