<template>
    <button :disabled="!newer" @click="changePage(newer)" class="btn btn-outline-info">newer</button>
    <button :disabled="!older" @click="changePage(older)" class="btn btn-outline-info">older</button>
</template>


<script>
import { computed } from 'vue';
import { AppState } from '../AppState';
import { postsService } from '../services/PostsService';
import Pop from '../utils/Pop';


export default {
    setup() {
        return {
            older: computed(() => AppState.older),
            newer: computed(() => AppState.newer),
            posts: computed(() => AppState.posts),

            async changePage(url) {

                try {
                    await postsService.changePage(url)

                } catch (error) {
                    Pop.error(error)
                }
            }
        }
    }
};
</script>


<style lang="scss" scoped></style>