<template>
    <v-card height="56rem" elevation="0" class="v-card-yellow mr-5 v-card-with_flag">
        <div class="selfCheck">
            <div class="flag flag-left">
                <span>2차시</span>
            </div>
            <v-card-item>
                <v-card-title>
                    <span> 영역별 학업 성취도학업 성취도</span>
                    <v-btn class="icon_only icon_only-sm" rounded flat><i class="ico more" /></v-btn>
                </v-card-title>
            </v-card-item>
            <v-card-text class="px30 py30">
                <v-list class="list_dot py-0">
                    <v-list-item class="py-0" min-height="auto">안부를 묻고 답하는 말을 이해하여 말할 수 있나요?</v-list-item>
                    <v-list-item class="py-0" min-height="auto">안부를 묻고 답하는 말을 이해하여 말할 수 있나요?</v-list-item>
                    <v-list-item class="py-0" min-height="auto">안부를 묻고 답하는 말을 이해하여 말할 수 있나요?</v-list-item>
                    <v-list-item class="py-0" min-height="auto">안부를 묻고 답하는 말을 이해하여 말할 수 있나요?</v-list-item>
                </v-list>
                <v-chip-group selected-class="active" mandatory v-model="selection">
                    <v-chip class="px-1 py-1" variant="text" color="transparent"><i class="ico imoji1"></i>5</v-chip>
                    <v-chip class="px-1 py-1" variant="text" color="transparent"><i class="ico imoji2"></i>4</v-chip>
                    <v-chip class="px-1 py-1" variant="text" color="transparent"><i class="ico imoji3"></i>3</v-chip>
                    <v-chip class="px-1 py-1" variant="text" color="transparent"><i class="ico imoji4"></i>2</v-chip>
                    <v-chip class="px-1 py-1" variant="text" color="transparent"><i class="ico imoji5"></i>1</v-chip>
                </v-chip-group>
            </v-card-text>
        </div>
    </v-card>
</template>
<script setup>
import { ref } from 'vue';
const selection = ref(0);
</script>
