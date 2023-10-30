<template>
    <div class="d-flex">
        <router-link :to="{ name: 'Profile', params: { profileId: post.creator.id } }">
            <img class="creator-image rounded-circle me-3" :src="post.creator.picture" :alt="post.creator.name">
        </router-link>
        <div>
            <h4>{{ post.creator.name }}</h4>
            <h4 v-if="post.creator.graduated"><i class="mdi mdi-school"></i></h4>
        </div>
    </div>
    <div class="p-1 fs-4">
        {{ post.body }}
    </div>

    <div v-if="post.imgUrl" class="text-center body-background">
        <img class="post-image rounded" :src="post.imgUrl" :alt="post.creator.name">
    </div>

    <div class="d-flex justify-content-end pe-4 fs-5">
        {{ post.createdAt.toLocaleDateString() }}
        <i class="mx-3 mdi mdi-heart-circle-outline"></i>
        {{ post.likes.length }}
    </div>
    <div v-if="post.creatorId == account.id">
        <button @click="destroyComment()" class="btn btn-outline-danger">Delete</button>
    </div>
</template>


<script>


import { computed, onMounted } from 'vue';
import { Post } from '../models/Post';
import { AppState } from '../AppState';
import Pop from '../utils/Pop';
import { postsService } from '../services/PostsService';

import { logger } from '../utils/Logger';

export default {
    props: { post: { type: Post, required: true } },
    setup(props) {


        onMounted(() => {
            // logger.log('post id from route', route.params.postId)
        })
        return {
            activePost: computed(() => AppState.activePost),
            account: computed(() => AppState.account),

            async destroyComment() {
                try {
                    const wantsToDelete = await Pop.confirm('Are you sure you want to delete?')
                    if (!wantsToDelete) {
                        return
                    }


                    const postId = props.post.id
                    logger.log('got the id for the delete?', postId)
                    await postsService.destroyComment(postId)
                    Pop.success('You deleted your post')

                } catch (error) {
                    Pop.error(error)
                }
            }
        }
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