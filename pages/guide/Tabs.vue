<template>
    <div class="guide_contents">
        <h1>Tabs guide</h1>
        <section>
            <h2>default
                <small>v-tab의 value의 값과 v-window-item의 value값으로 연동 됩니다.</small>
            </h2>
            <div class="tabs">
                <v-tabs v-model="tab">
                    <v-tab value="tab1-1">Item One</v-tab>
                    <v-tab value="tab1-2">Item Two</v-tab>
                    <v-tab value="tab1-3">Item Three</v-tab>
                </v-tabs>
                <v-window v-model="tab">
                    <v-window-item value="tab1-1"> One </v-window-item>
                    <v-window-item value="tab1-2"> Two </v-window-item>
                    <v-window-item value="tab1-3"> Three </v-window-item>
                </v-window>
            </div>
        </section>
        <section>
            <h2>.fluid
                <small>.fluid 추가하면 가로로 N분할 됩니다.</small>
            </h2>
            <div class="tabs fluid">
                <v-tabs v-model="tab">
                    <v-tab value="tab2-1">Item One</v-tab>
                    <v-tab value="tab2-2">Item Two</v-tab>
                    <v-tab value="tab2-3">Item Three</v-tab>
                </v-tabs>
                <v-window v-model="tab">
                    <v-window-item value="tab2-1"> One </v-window-item>
                    <v-window-item value="tab2-2"> Two </v-window-item>
                    <v-window-item value="tab2-3"> Three </v-window-item>
                </v-window>
            </div>
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