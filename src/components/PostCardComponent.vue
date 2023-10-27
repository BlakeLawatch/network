<template>
    <div class="d-flex">
        <router-link :to="{ name: 'Profile', params: { postId: post.id } }">
            <img class="creator-image rounded-circle me-3" :src="post.creator.picture" :alt="post.creator.name">
        </router-link>
        <div>
            <h4>{{ post.creator.name }}</h4>
            <h4 v-if="post.creator.graduated"><i class="mdi mdi-school"></i></h4>
        </div>
    </div>
    <div class="p-1">
        {{ post.body }}
    </div>

    <div class="text-center body-background">
        <img class="post-image rounded" :src="post.imgUrl" :alt="post.creator.name">
    </div>

    <div class="d-flex justify-content-end">
        <i class="mx-3 mdi mdi-heart"></i>
        {{ post.likes.length }}
    </div>
</template>


<script>
'vue';

import { Post } from '../models/Post';

export default {
    props: { post: { type: Post, required: true } },
    setup() {
        return {}
    }
};
</script>


<style lang="scss" scoped>
.creator-image {
    height: 6vh;
    width: 6vh;
    object-fit: cover;
    object-position: center;
}

.post-image {
    height: 30vh;
    width: 30vh;
    object-fit: cover;
    object-position: center;
}
</style>