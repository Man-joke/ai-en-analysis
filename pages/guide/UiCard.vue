<template>
    <div class="guide_contents">
        <h1>UiCard guide</h1>
        <section>
            <h2>default</h2>
            <v-card elevation="0">
                <v-card-item>
                    <v-card-title>
                        <span> 영역별 학업 성취도</span>
                        <v-btn class="icon_only" rounded flat><i class="ico more ico_size_10" /></v-btn>
                    </v-card-title>
                </v-card-item>
                <v-card-text class="px-13 py20">
                    <div class="card_no_data">
                        <i class="ico no_class_data ico_size_25" />
                        <p>선택한 날에는 수업이 배정되어 있지 않습니다.</p>
                    </div>
                </v-card-text>
            </v-card>
        </section>
        <section>
            <h2>.v-card-'color'
                <small>'color'명에 따라 색이 바뀝니다.</small>
            </h2>
            <h3>.v-card-blue</h3>
            <v-card elevation="0" class="v-card-blue">
                <v-card-item>
                    <v-card-title>
                        <span> 영역별 학업 성취도학업 성취도</span>
                        <v-btn class="icon_only" rounded flat><i class="ico more ico_size_10" /></v-btn>
                    </v-card-title>
                </v-card-item>
                <v-card-text class="px30 py20">
                    <ul>
                        <li>안부를 묻고 답하는 말을 이해하여 말할 수 있나요?</li>
                        <li>안부를 묻고 답하는 말을 이해하여 말할 수 있나요?</li>
                        <li>안부를 묻고 답하는 말을 이해하여 말할 수 있나요?</li>
                        <li>안부를 묻고 답하는 말을 이해하여 말할 수 있나요?</li>
                        <li>안부를 묻고 답하는 말을 이해하여 말할 수 있나요?</li>
                        <li>안부를 묻고 답하는 말을 이해하여 말할 수 있나요?</li>
                    </ul>
                </v-card-text>
            </v-card>

            <h3>.v-card-darkblue</h3>
            <v-card elevation="0" class="v-card-darkblue">
                <v-card-item>
                    <v-card-title>
                        <span> 영역별 학업 성취도학업 성취도</span>
                        <v-btn class="icon_only" rounded flat><i class="ico more ico_size_10" /></v-btn>
                    </v-card-title>
                </v-card-item>
                <v-card-text class="px30 py20">
                    <ul>
                        <li>안부를 묻고 답하는 말을 이해하여 말할 수 있나요?</li>
                        <li>안부를 묻고 답하는 말을 이해하여 말할 수 있나요?</li>
                        <li>안부를 묻고 답하는 말을 이해하여 말할 수 있나요?</li>
                        <li>안부를 묻고 답하는 말을 이해하여 말할 수 있나요?</li>
                        <li>안부를 묻고 답하는 말을 이해하여 말할 수 있나요?</li>
                        <li>안부를 묻고 답하는 말을 이해하여 말할 수 있나요?</li>
                    </ul>
                </v-card-text>
            </v-card>

            <h3>.v-card-yellow</h3>
            <v-card elevation="0" class="v-card-yellow">
                <v-card-item>
                    <v-card-title>
                        <span> 영역별 학업 성취도학업 성취도</span>
                        <v-btn class="icon_only" rounded flat><i class="ico more ico_size_10" /></v-btn>
                    </v-card-title>
                </v-card-item>
                <v-card-text class="px30 py20">
                    <ul>
                        <li>안부를 묻고 답하는 말을 이해하여 말할 수 있나요?</li>
                        <li>안부를 묻고 답하는 말을 이해하여 말할 수 있나요?</li>
                        <li>안부를 묻고 답하는 말을 이해하여 말할 수 있나요?</li>
                        <li>안부를 묻고 답하는 말을 이해하여 말할 수 있나요?</li>
                        <li>안부를 묻고 답하는 말을 이해하여 말할 수 있나요?</li>
                        <li>안부를 묻고 답하는 말을 이해하여 말할 수 있나요?</li>
                    </ul>
                </v-card-text>
            </v-card>

            <h3>.v-card-green</h3>
            <v-card elevation="0" class="v-card-green">
                <v-card-item>
                    <v-card-title>
                        <span> 영역별 학업 성취도학업 성취도</span>
                        <v-btn class="icon_only" rounded flat><i class="ico more ico_size_10" /></v-btn>
                    </v-card-title>
                </v-card-item>
                <v-card-text class="px30 py20">
                    <ul>
                        <li>안부를 묻고 답하는 말을 이해하여 말할 수 있나요?</li>
                        <li>안부를 묻고 답하는 말을 이해하여 말할 수 있나요?</li>
                        <li>안부를 묻고 답하는 말을 이해하여 말할 수 있나요?</li>
                        <li>안부를 묻고 답하는 말을 이해하여 말할 수 있나요?</li>
                        <li>안부를 묻고 답하는 말을 이해하여 말할 수 있나요?</li>
                        <li>안부를 묻고 답하는 말을 이해하여 말할 수 있나요?</li>
                    </ul>
                </v-card-text>
            </v-card>
        </section>
        <section>
            <h2>.v-card-with_flag
                <small>v-card-title 앞에 flag가 추가 되는 경우입니다.</small>
            </h2>
            <v-card elevation="0" class="v-card-yellow v-card-with_flag">
                <div class="flag flag-left">
                    <span>2차시</span>
                </div>
                <v-card-item>
                    <v-card-title>
                        <span> 영역별 학업 성취도학업 성취도</span>
                        <v-btn class="icon_only" rounded flat><i class="ico more ico_size_10" /></v-btn>
                    </v-card-title>
                </v-card-item>
                <v-card-text class="px30 py30">
                    <ul>
                        <li>안부를 묻고 답하는 말을 이해하여 말할 수 있나요?</li>
                        <li>안부를 묻고 답하는 말을 이해하여 말할 수 있나요?</li>
                        <li>안부를 묻고 답하는 말을 이해하여 말할 수 있나요?</li>
                        <li>안부를 묻고 답하는 말을 이해하여 말할 수 있나요?</li>
                        <li>안부를 묻고 답하는 말을 이해하여 말할 수 있나요?</li>
                        <li>안부를 묻고 답하는 말을 이해하여 말할 수 있나요?</li>
                    </ul>
                </v-card-text>
            </v-card>
        </section>
        <section>
            <h2>.type_record
                <small>생활기록부에 사용 됩니다.</small>
            </h2>
            <v-card elevation="0" class="type_record">
                <v-card-item>
                    <v-card-title>
                        <span>로그인 횟수와 총 학습 시간</span>
                        <v-btn class="icon_only size_md" rounded flat><i class="ico tool_delete ico_size_10" /></v-btn>
                    </v-card-title>
                </v-card-item>
                <v-container>
                    text
                </v-container>
            </v-card>
        </section>
        <section>
            <h2>.box_contents
                <small>생활기록부 > 로그인 횟수와 총 학습 시간에 사용 됩니다.</small>
            </h2>
            <v-card elevation="0" class="fill-violet box_contents">
                <v-card-item>
                    <v-card-title>
                        <span>로그인 횟수와 총 학습 시간</span>
                        <strong class="count">
                            77
                            <span>회</span>
                        </strong>
                    </v-card-title>
                </v-card-item>
                <v-card-text>
                    <span>총 학습 시간</span>
                    <strong class="hour">5시간 30분</strong>
                </v-card-text>
            </v-card>
        </section>
        <section>
            <h2>.dailyPerformance
                <small>[학생] 학습 분석 > 진도 학습에 사용 됩니다.</small>
            </h2>
            <v-card elevation="0" class="v-card-green dailyPerformance">
                <v-card-item>
                    <v-card-title class="lessonInfo">
                        <div class="notice d-flex align-center">
                            <div class="box d-flex d-flex align-center">
                                <v-btn flat rounded size="small" class="icon_only icon_only-transparent icon_only-sm">
                                    <div class="size_sm">
                                        <i class="ico size_5 left_24"></i>
                                        <span class="blind">이전</span>
                                    </div>
                                </v-btn>
                                <div class="info">
                                    <p class="name">Lesson 1. How Are You?</p>
                                    <p class="kind">1차시</p>
                                </div>
                                <v-btn flat rounded size="small" class="icon_only icon_only-transparent icon_only-sm">
                                    <div class="size_sm">
                                        <i class="ico size_5 right_24"></i>
                                        <span class="blind">다음</span>
                                    </div>
                                </v-btn>
                            </div>
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
        </section>
        <section>
            <h2>.tabs.fluid
                <small>[학생] 학습 분석 > AI CURI Talk!에 사용 됩니다.</small>
            </h2>
            <v-card elevation="0" height="54rem" class="v-card-green tabs fluid">
            <v-card-item>
                <v-card-title>
                    <span class="font-color-primary">3월 17일 화요일 수업 정보 </span>
                    <v-tabs v-model="tab">
                    <v-tab value="tab1-1">숫자 색칠판 완성하기</v-tab>
                    <v-tab value="tab1-2">큐리가 칭찬한 표현</v-tab>
                    <v-tab value="tab1-3">큐리가 아쉬워한 표현</v-tab>
                    </v-tabs>
                    <v-btn class="icon_only" rounded flat><i class="ico more ico_size_10" /></v-btn>
                </v-card-title>
            </v-card-item>
            <v-container fluid>
                <v-window v-model="tab">
                    <v-window-item value="tab1-1">
                    <StudentAnalyticsCuriColoring />
                    </v-window-item>
                    <v-window-item value="tab1-2">
                    <StudentAnalyticsCuriCorrect />
                    </v-window-item>
                    <v-window-item value="tab1-3">
                    <StudentAnalyticsCuriIncorrect />
                    </v-window-item>
                </v-window>
            </v-container>
            </v-card>
        </section>
    </div>
</template>
<script>
    export default {
        data: () => ({
            tab: null,
        }),
    }
</script>