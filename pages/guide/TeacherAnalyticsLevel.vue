<template>
    <div class="mission aILevelTest sm h100">
        <v-sheet class="h100">
            <h3>AI Level Test를 볼 때가 되었어요!</h3>
            <v-card-text class="wrap">
                <!-- 데이터 있을 때 -->
                <v-list class="list" density="compact">
                    <v-list-item class="pa-0">
                        <div class="name">
                            <p class="txt_num">15번</p>
                            <p class="txt_name ellipsis">늘푸른하늘</p>
                            <p class="txt_week orange">(15주)</p>
                        </div>
                        <v-list-item-action>
                            <p class="check">
                                <v-checkbox v-model="check" hide-details class="default" density="compact"></v-checkbox>
                            </p>
                        </v-list-item-action>
                    </v-list-item>
                    <v-list-item class="pa-0">
                        <div class="name">
                            <p class="txt_num">15번</p>
                            <p class="txt_name ellipsis">늘푸른하늘</p>
                            <p class="txt_week orange">(15주)</p>
                        </div>
                        <v-list-item-action>
                            <p class="check">
                                <v-checkbox hide-details class="default" density="compact"></v-checkbox>
                            </p>
                        </v-list-item-action>
                    </v-list-item>
                    <v-list-item class="pa-0">
                        <div class="name">
                            <p class="txt_num">15번</p>
                            <p class="txt_name ellipsis">늘푸른하늘</p>
                            <p class="txt_week orange">(15주)</p>
                        </div>
                        <v-list-item-action>
                            <p class="check">
                                <v-checkbox v-model="check" hide-details class="default" density="compact"></v-checkbox>
                            </p>
                        </v-list-item-action>
                    </v-list-item>
                    <v-list-item class="pa-0">
                        <div class="name">
                            <p class="txt_num">15번</p>
                            <p class="txt_name ellipsis">늘푸른하늘</p>
                            <p class="txt_week orange">(15주)</p>
                        </div>
                        <v-list-item-action>
                            <p class="check">
                                <v-checkbox hide-details class="default" density="compact"></v-checkbox>
                            </p>
                        </v-list-item-action>
                    </v-list-item>
                    <v-list-item class="pa-0">
                        <div class="name">
                            <p class="txt_num">15번</p>
                            <p class="txt_name ellipsis">늘푸른하늘</p>
                            <p class="txt_week orange">(15주)</p>
                        </div>
                        <v-list-item-action>
                            <p class="check">
                                <v-checkbox v-model="check" hide-details class="default" density="compact"></v-checkbox>
                            </p>
                        </v-list-item-action>
                    </v-list-item>
                    <v-list-item class="pa-0">
                        <div class="name">
                            <p class="txt_num">15번</p>
                            <p class="txt_name ellipsis">늘푸른하늘</p>
                            <p class="txt_week orange">(15주)</p>
                        </div>
                        <v-list-item-action>
                            <p class="check">
                                <v-checkbox hide-details class="default" density="compact"></v-checkbox>
                            </p>
                        </v-list-item-action>
                    </v-list-item>
                    <v-list-item class="pa-0">
                        <div class="name">
                            <p class="txt_num">15번</p>
                            <p class="txt_name ellipsis">늘푸른하늘</p>
                            <p class="txt_week orange">(15주)</p>
                        </div>
                        <v-list-item-action>
                            <p class="check">
                                <v-checkbox v-model="check" hide-details class="default" density="compact"></v-checkbox>
                            </p>
                        </v-list-item-action>
                    </v-list-item>
                    <v-list-item class="pa-0">
                        <div class="name">
                            <p class="txt_num">15번</p>
                            <p class="txt_name ellipsis">늘푸른하늘</p>
                            <p class="txt_week orange">(15주)</p>
                        </div>
                        <v-list-item-action>
                            <p class="check">
                                <v-checkbox hide-details class="default" density="compact"></v-checkbox>
                            </p>
                        </v-list-item-action>
                    </v-list-item>
                    <v-list-item class="pa-0">
                        <div class="name">
                            <p class="txt_num">15번</p>
                            <p class="txt_name ellipsis">늘푸른하늘</p>
                            <p class="txt_week orange">(15주)</p>
                        </div>
                        <v-list-item-action>
                            <p class="check">
                                <v-checkbox v-model="check" hide-details class="default" density="compact"></v-checkbox>
                            </p>
                        </v-list-item-action>
                    </v-list-item>
                    <v-list-item class="pa-0">
                        <div class="name">
                            <p class="txt_num">15번</p>
                            <p class="txt_name ellipsis">늘푸른하늘</p>
                            <p class="txt_week orange">(15주)</p>
                        </div>
                        <v-list-item-action>
                            <p class="check">
                                <v-checkbox hide-details class="default" density="compact"></v-checkbox>
                            </p>
                        </v-list-item-action>
                    </v-list-item>
                </v-list>
                <!-- 데이터 없을 때 -->
                <!-- <div class="card_no_data">
                    <i class="ico no_student ico_size_25" />
                    <p>
                        독려 메시지를 보낼 <br />
                        학생이 없습니다.
                    </p>
                </div> -->
                <div class="box_stamp mt-5 mt10 text-center">
                    <v-btn rounded flat class="primary" @click="dialog = true">독려 메시지 보내기</v-btn>
                </div>
            </v-card-text>
        </v-sheet>

        <!-- 독려 메시지 팝업-->
        <v-dialog persistent transition="dialog-center-transition" width="auto" v-model="dialog">
            <template v-slot:default="{ isActive }">
                <div class="dialog">
                    <div class="dialog_message">
                        <p>선택한 학생에게 <em class="font-color-orange">AI Level Test</em>독려 메시지를<br />보내시겠습니까?</p>
                    </div>
                    <div class="dialog_btn_wrap">
                        <v-btn @click="isActive.value = false" rounded flat class="secondary size_md">아니오</v-btn>
                        <v-btn rounded flat class="primary size_md" type="submit" @click="(sendMessage = true), (dialog = false)">예</v-btn>
                    </div>
                </div>
            </template>
        </v-dialog>

        <!-- 독려 메시지 완료 팝업-->
        <v-dialog persistent transition="dialog-center-transition" width="auto" v-model="sendMessage">
            <div class="dialog">
                <div class="dialog_message">
                    <div class="d-flex align-center">
                        <div><span class="num font-color-blue mr-1">5번</span>김아미</div>
                        <em class="mx-1">,</em>
                        <div><span class="num font-color-blue mr-1">17번</span>김영철</div>
                        <em class="mx-1">,</em>
                        <div><span class="num font-color-blue mr-1">20번</span>박수미</div>
                    </div>
                    <p>AI Level Test 독려 메시지를 보냈습니다.</p>
                </div>
            </div>
        </v-dialog>
    </div>
</template>
<script setup>
import { ref } from 'vue';
const check = ref(true);
const dialog = ref(false);
const sendMessage = ref(false);
</script>
<style></style>
