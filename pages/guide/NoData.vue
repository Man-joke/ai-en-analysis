<template>
    <div class="guide_contents">
        <h1>No Data</h1>
        <section>
            <h2>no_image</h2>
            <div class="no_image">
                <p>문제 이미지가 없습니다.</p>
            </div>
        </section>
        <section>
            <h2>card_no_data</h2>
            <div class="d-flex gap1 flex-column">
                <v-card elevation="0" height="54rem">
                    <v-card-item>
                        <v-card-title>
                            <span> 영역별 학업 성취도</span>
                            <v-spacer />
                            <v-btn class="icon_only" rounded flat><i class="ico more ico_size_10" /></v-btn>
                        </v-card-title>
                    </v-card-item>
                    <v-card-text>
                        <div class="card_no_data">
                            <i class="ico no_class_data ico_size_25" />
                            <p>예정된 수업이 <span class="text_err">2건</span> 있습니다.</p>
                        </div>
                    </v-card-text>
                </v-card>
                <v-card elevation="0" height="54rem">
                    <v-card-item>
                        <v-card-title>
                            <span>AI Level Test를 볼 때가 되었어요!</span>
                            <v-spacer />
                            <v-btn class="icon_only" rounded flat><i class="ico more ico_size_10" /></v-btn>
                        </v-card-title>
                    </v-card-item>
                    <v-card-text>
                        <div class="card_no_data">
                            <i class="ico no_student ico_size_25" />
                            <p>
                                독려 메시지를 보낼<br />
                                학생이 없습니다.
                            </p>
                        </div>
                    </v-card-text>
                </v-card>
                <v-card elevation="0" height="54rem">
                    <v-card-item>
                        <v-card-title>
                            <span> 영역별 학업 성취도</span>
                            <v-spacer />
                            <v-btn class="icon_only" rounded flat><i class="ico more ico_size_10" /></v-btn>
                        </v-card-title>
                    </v-card-item>
                    <v-card-text>
                        <div class="card_no_data">
                            <i class="ico no_color_board ico_size_25" />
                            <p>아직 숫자 색칠판을 시작한 학생이 없습니다.</p>
                        </div>
                    </v-card-text>
                </v-card>
            </div>
        </section>
    </div>
</template>
