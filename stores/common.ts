export const useCommonStore = defineStore('common', () => {
    const status = ref('전체');
    return {
        status
    };
});
