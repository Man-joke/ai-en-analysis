<template>
    <v-card elevation="0" max-width="42rem" max-height="54rem" class="calendar_wrap">
        <div class="datepicker">
            <v-btn @click="resetDatepicker" flat rounded size="x-small" class="reset_btn">
                <i class="ico calendar_refresh"></i>
                <span class="blind">새로고침</span>
            </v-btn>
            <DatePicker
                v-model="selectedDate"
                color="mustard"
                class="my-calendar"
                :attributes="props.student ? attributesStudent : attributes"
                :select-attribute="selectAttribute"
                :masks="{ title: 'YYYY년 MMM' }"
                @dayclick="(a, b) => console.log(a, b)"
            >
            </DatePicker>
            <template v-if="props.student">
                <div class="legend_wrap">
                    <span class="legend" v-for="item in attributesStudent" :key="item.key">
                        <i :class="item.class" />
                        {{ item.key }}
                    </span>
                </div>
            </template>
            <template v-else>
                <div class="legend_wrap">
                    <span class="legend" v-for="item in attributes" :key="item.key">
                        <i :class="item.class" />
                        {{ item.key }}
                    </span>
                </div>
            </template>
            <p class="notice">생활기록부 작성 기간이 10일 남았습니다.</p>
        </div>
    </v-card>
</template>

<script setup>
import { DatePicker } from 'v-calendar';
import 'v-calendar/style.css';
import { ref } from 'vue';
const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();

const selectedDate = ref(new Date());

const resetDatepicker = () => {
    selectedDate.value = null;
};

const props = defineProps({ student: Boolean });

const selectAttribute = ref({
    highlight: {
        style: {
            backgroundColor: 'transparent',
            border: '2px solid #1E3257',
            zIndex: '10',
        },
        contentStyle: {
            color: '#000000'
        }
    },
    selectedDate: selectedDate.value
});

const attributes = ref([
    {
        key: '수업 예정일',
        class: 'unsubmission',
        highlight: {
            style: {
                backgroundColor: '#D5D5D5'
            },
            contentStyle: {
                color: '#000000'
            }
        },
        dates: [new Date(year, month, 5), new Date(year, month, 12)]
    },
    {
        key: '수업 완료일',
        class: 'submission',
        highlight: {
            style: {
                backgroundColor: '#139D42'
            }
        },
        dates: [new Date(year, month, 7), new Date(year, month, 8), new Date(year, month, 11)]
    },

    {
        key: '생활기록부 발행 기간',
        class: 'period',
        highlight: {
            start: { fillMode: 'light' },
            base: { fillMode: 'light' },
            end: { fillMode: 'light' }
        },
        dates: { start: new Date(year, month, 12), end: new Date(year, month, 15) }
    }
]);
</script>
