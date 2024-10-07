<script setup></script>
<template>
    <div class="indicator">
        <v-btn flat rounded size="small" class="icon_only icon_only-transparent icon_only-36 ml-1">
            <div class="ico_outer ico_size_9">
                <i class="ico ico_outer ico_size_9 left_24"></i>
                <span class="blind">이전</span>
            </div>
        </v-btn>
        <span v-if="props.less" class="txt_wrap"><em>1</em> / <span>3</span></span>
        <span v-else class="txt_wrap"><em>8</em> / <span>23</span></span>
        <v-btn flat rounded size="small" class="icon_only icon_only-transparent icon_only-36 mr-1" disabled>
            <div class="ico_outer ico_size_9">
                <i class="ico ico_outer ico_size_9 right_24"></i>
                <span class="blind">다음</span>
            </div>
        </v-btn>
    </div>
</template>

<script setup>
const props = defineProps({ less: Boolean });
</script>
