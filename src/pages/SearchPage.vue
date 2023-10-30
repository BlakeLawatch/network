<template>
    <div class="container-fluid">
        <section class="row">
            <div class="col-12">
                <form @submit.prevent="getProfileBySearch()">
                    <div>
                        <label for="commentSearch" class="form-label">Search Comment</label>
                        <input v-model="editable" type="text" class="form-control" id="commentSearch">
                        <button class="btn btn-outline-danger"><i class="mdi mdi-magnify"></i></button>
                    </div>
                </form>
            </div>
        </section>
    </div>
</template>


<script>
import { computed, onMounted } from 'vue';

import Pop from '../utils/Pop';
import { AppState } from '../AppState';
import { postsService } from '../services/PostsService';


export default {
    setup() {
        const editable = ref('')


        onMounted(() => {
            postsService.clearData()

        })

        return {
            editable,
            comment: computed(() => AppState.posts),

            async getCommentBySearch() {
                try {
                    const search = editable.value
                    await postsService.getCommentBySearch(search)
                } catch (error) {
                    Pop.error(error)
                }
            }
        }
    }
};
</script>


<style lang="scss" scoped></style>