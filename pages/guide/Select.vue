<template>
    <div class="guide_contents">
        <h1>Select guide</h1>
        <section>
            <h2>default
                <small>outline rounded가 기본타입 입니다.</small>
            </h2>
            <v-select
                v-model="select"
                :items="items"
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

            <h3>disabled</h3>
            <v-select
                v-model="select"
                :items="items"
                item-title="state"
                item-value="abbr"
                label="Select"
                variant="outlined"
                persistent-hint
                rounded
                return-object
                single-line
                hide-details
                disabled
            ></v-select>
        </section>
        <section>
            <h2>.type_dark
                <small>v-select에 class="type_dark"와 :menu-props="{ contentClass: 'dark_item' }"가 추가 됩니다.</small>
            </h2>
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

            <h3>disabled</h3>
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
                disabled
            ></v-select>
        </section>
        <section>
            <h2>.type_white
                <small>v-select에 class="type_white"와 :menu-props="{ contentClass: 'white_item' }"가 추가 됩니다.</small>
            </h2>
            <div class="guide_bg_dark">
                <v-select
                    v-model="select"
                    :items="items"
                    class="type_white"
                    :menu-props="{ contentClass: 'white_item' }"
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
    
                <h3>disabled</h3>
                <v-select
                    v-model="select"
                    :items="items"
                    class="type_white"
                    :menu-props="{ contentClass: 'white_item' }"
                    item-title="state"
                    item-value="abbr"
                    label="Select"
                    variant="outlined"
                    persistent-hint
                    rounded
                    return-object
                    single-line
                    hide-details
                    disabled
                ></v-select>
            </div>
        </section>
        <section>
            <h2>.type_primary_fill
                <small>v-select에 class="type_primary_fill"와 :menu-props="{ contentClass: 'primary_fill_item' }"가 추가 됩니다.</small>
            </h2>
            <v-select
                v-model="select"
                :items="items"
                class="type_primary_fill"
                :menu-props="{ contentClass: 'primary_fill_item' }"
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

            <h3>disabled</h3>
            <v-select
                v-model="select"
                :items="items"
                class="type_primary_fill"
                :menu-props="{ contentClass: 'primary_fill_item' }"
                item-title="state"
                item-value="abbr"
                label="Select"
                variant="outlined"
                persistent-hint
                rounded
                return-object
                single-line
                hide-details
                disabled
            ></v-select>
        </section>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const select = ref({ state: '선택해 주세요.' });
const items = ref([
    { state: 'Lesson 1. Hello, I`m Mo' },
    { state: 'Lesson 2. What`s This' },
    { state: 'Lesson 3. Stand Up, Please' },
    { state: 'Lesson 4. Do You Like Pandas?' },
    { state: 'Lesson 5. How Many Apples?' },
    { state: 'Lesson 6. What Color Is It?' }
]);
</script>