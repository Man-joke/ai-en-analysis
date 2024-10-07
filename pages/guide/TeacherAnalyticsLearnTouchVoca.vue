<template>
    <v-sheet class="inner_contents">
        <!-- 데이터 있을 때 -->
        <v-list class="chart_wrap gap3" max-width="105rem">
            <v-list-item class="chart">
                <div class="avatar avatar-box">
                    <v-img
                        src="@/assets/images/temp/img_pho_st01.png"
                        alt="아바타 이미지"
                        class="avatar-item"
                        max-width="5rem"
                    />
                    <div class="avatar-info">
                        <span class="info_number">15번</span>
                        <span class="info_name">늘푸른하늘</span>
                    </div>
                </div>
                <div class="radial_bars">
                    <!-- 그래프 영역 입니다. -->
                </div>
            </v-list-item>
            <v-list-item class="chart">
                <div class="avatar avatar-box">
                    <v-img
                        src="@/assets/images/temp/img_pho_st01.png"
                        alt="아바타 이미지"
                        class="avatar-item"
                        max-width="5rem"
                    />
                    <div class="avatar-info">
                        <span class="info_number">15번</span>
                        <span class="info_name">늘푸른하늘</span>
                    </div>
                </div>
                <div class="radial_bars">
                    <!-- 그래프 영역 입니다. -->
                </div>
            </v-list-item>
            <v-list-item class="chart">
                <div class="avatar avatar-box">
                    <v-img
                        src="@/assets/images/temp/img_pho_st01.png"
                        alt="아바타 이미지"
                        class="avatar-item"
                        max-width="5rem"
                    />
                    <div class="avatar-info">
                        <span class="info_number">15번</span>
                        <span class="info_name">늘푸른하늘</span>
                    </div>
                </div>
                <div class="radial_bars">
                    <!-- 그래프 영역 입니다. -->
                </div>
            </v-list-item>
        </v-list>

        <div class="extra">
            <v-list class="chart_label">
                <!-- label 색별 class명이 다릅니다. 
                    label_blue : $B500(#46A7E5),
                    label_green : --shchme-color-learner1(#42C5B1),
                    label_yellow : $Y500(#FFBF00),
                    label_gray : $G400(#B0B0B0),
                -->
                <v-list-item class="label_blue">응시한 단어 수</v-list-item>
                <v-list-item class="label_green">알고 있는 단어 수</v-list-item>
                <v-list-item class="label_yellow">조금 알거나 모르는 단어 수</v-list-item>
                <v-list-item class="label_gray">모르는 단어 수</v-list-item>
            </v-list>
        </div>
        <div class="page_buttons mgt30">
            <v-btn rounded flat class="secondary">3명 더 보기 (1/4)</v-btn>
        </div>
    </v-sheet>
</template>