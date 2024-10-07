<template>
    <div class="guide_contents">
        <h1>Radio & Checkbox guide</h1>
        <section>
            <h2>Checkbox</h2>
            <v-checkbox></v-checkbox>
            <v-checkbox :model-value="true"></v-checkbox>

            <h3>disabled</h3>
            <v-checkbox disabled></v-checkbox>
            
            <h3>.type_rounded
                <small>v-checkbox에 class="type_rounded"가 추가 됩니다.</small>
            </h3>
            <v-checkbox class="type_rounded"></v-checkbox>
            <v-checkbox class="type_rounded" :model-value="true"></v-checkbox>

            <h3>.size_lg
                <small>v-checkbox에 class="type_rounded"가 추가 됩니다.</small>
            </h3>
            <v-checkbox class="size_lg"></v-checkbox>
            <v-checkbox class="size_lg" :model-value="true"></v-checkbox>

            <h3>.type_list
                <small>v-checkbox에 class="type_list"가 추가 됩니다.</small>
            </h3>
            <v-checkbox class="type_list"></v-checkbox>
            <v-checkbox class="type_list" :model-value="true"></v-checkbox>
        </section>
        <!-- <section>
            <h2>Radio</h2>
            <v-radio value="one"></v-radio>
            <v-radio value="two" :model-value="true"></v-radio>

            <h3>disabled</h3>
            <v-radio value="one" disabled></v-radio>
            <v-radio value="two" :model-value="true" disabled></v-radio>
        </section> -->
    </div>
</template>