<template>
    <h2 class="mgt20 mb20">default</h2>
    <div class="colorboard" :class="{ paintable: props.paintable }">
        <div v-for="cell in props.grid" :key="cell.id" :class="[{ grid: true, painted: cell.painted }, cell.color]"></div>
        <div v-if="stamp" class="board-stamp">
            <v-img :src="stampSrc" alt="어떻게 이렇게까지 잘하는 거지" />
        </div>
    </div>
    <h2 class="mgt20 mb20">.coloring_design > .colorboard</h2>
    <div class="coloring_design">
        <div class="colorboard" :class="{ paintable: props.paintable }">
            <div v-for="cell in props.grid" :key="cell.id" :class="[{ grid: true, painted: cell.painted }, cell.color]"></div>
            <div v-if="stamp" class="board-stamp">
                <v-img :src="stampSrc" alt="어떻게 이렇게까지 잘하는 거지" />
            </div>
        </div>
    </div>
    <h2 class="mgt20 mb20">.colorLessonInfo > .colorboard</h2>
    <div class="colorLessonInfo">
        <div class="colorboard" :class="{ paintable: props.paintable }">
            <div v-for="cell in props.grid" :key="cell.id" :class="[{ grid: true, painted: cell.painted }, cell.color]"></div>
            <div v-if="stamp" class="board-stamp">
                <v-img :src="stampSrc" alt="어떻게 이렇게까지 잘하는 거지" />
            </div>
        </div>
    </div>
</template>
<script setup>
import { v4 as uuidv4 } from 'uuid';

import stamp01 from '@/assets/images/img_stamp_01.svg';
import stamp02 from '@/assets/images/img_stamp_02.svg';
import stamp03 from '@/assets/images/img_stamp_03.svg';
import stamp04 from '@/assets/images/img_stamp_04.svg';
import stamp05 from '@/assets/images/img_stamp_05.svg';
import stamp06 from '@/assets/images/img_stamp_06.svg';
import stamp07 from '@/assets/images/img_stamp_07.svg';
import stamp08 from '@/assets/images/img_stamp_08.svg';
import stamp09 from '@/assets/images/img_stamp_09.svg';
import stamp10 from '@/assets/images/img_stamp_10.svg';
const props = defineProps({
    paintable: { type: Boolean, default: false },
    grid: {
        type: Array,
        default: [
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'green'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'green'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'darkgreen'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'darkgreen'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'green'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'green'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'darkgreen'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'darkgreen'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'darkgreen'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },

            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },

            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'green'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'green'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'darkgreen'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'darkgreen'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'darkgreen'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'darkgreen'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },

            {
                id: uuidv4(),
                painted: true,
                color: ''
            },
            {
                id: uuidv4(),
                painted: true,
                color: ''
            },
            {
                id: uuidv4(),
                painted: true,
                color: ''
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'red'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'red'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'red'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'red'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'red'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'red'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'red'
            },

            {
                id: uuidv4(),
                painted: true,
                color: 'darkgreen'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'darkgreen'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: ''
            },
            {
                id: uuidv4(),
                painted: true,
                color: ''
            },
            {
                id: uuidv4(),
                painted: true,
                color: ''
            },
            {
                id: uuidv4(),
                painted: true,
                color: ''
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'red'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'red'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'red'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'red'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'red'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'red'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'red'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'red'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'red'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'red'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'red'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: ''
            },
            {
                id: uuidv4(),
                painted: true,
                color: ''
            },
            {
                id: uuidv4(),
                painted: true,
                color: ''
            },
            {
                id: uuidv4(),
                painted: true,
                color: ''
            },
            {
                id: uuidv4(),
                painted: true,
                color: ''
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'red'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'red'
            },
            {
                id: uuidv4(),
                painted: true,
                color: ''
            },

            {
                id: uuidv4(),
                painted: true,
                color: ''
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'red'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'red'
            },
            {
                id: uuidv4(),
                painted: true,
                color: ''
            },

            {
                id: uuidv4(),
                painted: true,
                color: ''
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'red'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'red'
            },
            {
                id: uuidv4(),
                painted: true,
                color: ''
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: ''
            },
            {
                id: uuidv4(),
                painted: true,
                color: ''
            },
            {
                id: uuidv4(),
                painted: true,
                color: ''
            },
            {
                id: uuidv4(),
                painted: true,
                color: ''
            },
            {
                id: uuidv4(),
                painted: true,
                color: ''
            },
            {
                id: uuidv4(),
                painted: true,
                color: ''
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'red'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'red'
            },
            {
                id: uuidv4(),
                painted: true,
                color: ''
            },

            {
                id: uuidv4(),
                painted: true,
                color: ''
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'red'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'red'
            },
            {
                id: uuidv4(),
                painted: true,
                color: ''
            },

            {
                id: uuidv4(),
                painted: true,
                color: ''
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'red'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'red'
            },
            {
                id: uuidv4(),
                painted: true,
                color: ''
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: ''
            },
            {
                id: uuidv4(),
                painted: true,
                color: ''
            },
            {
                id: uuidv4(),
                painted: true,
                color: ''
            },
            {
                id: uuidv4(),
                painted: true,
                color: ''
            },
            {
                id: uuidv4(),
                painted: true,
                color: ''
            },
            {
                id: uuidv4(),
                painted: true,
                color: ''
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'red'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'red'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'red'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'red'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'red'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'red'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'red'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'red'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'red'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'red'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'red'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'yellow'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'yellow'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'yellow'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'yellow'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'yellow'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'yellow'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'yellow'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'yellow'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'yellow'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'yellow'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'yellow'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'yellow'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'yellow'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'yellow'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'yellow'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'yellow'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'yellow'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'yellow'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'yellow'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'yellow'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'yellow'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'yellow'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'yellow'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'yellow'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'yellow'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'yellow'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'yellow'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'yellow'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'yellow'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'yellow'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'yellow'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'yellow'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'yellow'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'yellow'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'yellow'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'yellow'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'yellow'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'yellow'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'yellow'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'yellow'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'green'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'green'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'darkgreen'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'darkgreen'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'darkgreen'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'darkgreen'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'yellow'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'yellow'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'yellow'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'yellow'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'yellow'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'yellow'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'yellow'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'yellow'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'yellow'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'green'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'green'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'green'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'darkgreen'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'darkgreen'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'darkgreen'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'darkgreen'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'yellow'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'yellow'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'yellow'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'green'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'green'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'green'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'darkgreen'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'darkgreen'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'darkgreen'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'darkgreen'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'red'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'green'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'green'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'green'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'darkgreen'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'darkgreen'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'darkgreen'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'darkgreen'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'yellow'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'red'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'green'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'green'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'green'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'darkgreen'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'darkgreen'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'darkgreen'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'darkgreen'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'green'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'green'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'green'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'darkgreen'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'darkgreen'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'darkgreen'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'green'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'green'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'darkgreen'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'darkgreen'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'darkgreen'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            }
        ]
    },
    stamp: { type: Number, default: 0 }
});

const stampSrc = computed(() => {
    switch (props.stamp) {
        case 1:
            return stamp01;
        case 2:
            return stamp02;
        case 3:
            return stamp03;
        case 4:
            return stamp04;
        case 5:
            return stamp05;
        case 6:
            return stamp06;
        case 7:
            return stamp07;
        case 8:
            return stamp08;
        case 9:
            return stamp09;
        case 10:
            return stamp10;
        default:
            return ''; // Return a default value or handle error case
    }
});
</script>