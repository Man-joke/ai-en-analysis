<template>
    <div id="wrap ">
        <main class="dashboard-area">
            <slot />
        </main>
    </div>
</template>

<script setup>
onMounted(() => {
    useWindowSize();
});
</script>