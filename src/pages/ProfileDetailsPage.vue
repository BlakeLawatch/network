<template>
    <div class="component">


    </div>
</template>


<script>
import { onMounted } from 'vue';
import { AppState } from '../AppState';


export default {
    setup() {


        onMounted(() => AppState.activePost)
        return {}
    }
};
</script>


<style lang="scss" scoped></style>