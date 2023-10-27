<template>
  <div class="container-fluid">
    <section class="row">
      <div class="col-12 d-flex justify-content-around my-3">
        <changePage />
      </div>

      <div v-for="post in posts" :key="post.id"
        class="col-12 col-md-9 ps-4 my-3 shadow background-color py-4 rounded ms-4">
        <PostCardComponent :post="post" />
      </div>
      <div class="col-12 col-md-3">Spake taker for ads</div>
    </section>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue';
import { postsService } from '../services/PostsService.js'
import { logger } from '../utils/Logger';
import { AppState } from '../AppState.js'


export default {
  setup() {

    async function getPosts() {
      try {
        await postsService.getPosts()
      } catch (error) {
        logger.log(error)
      }
    }


    onMounted(() => {
      getPosts()
    })
    return {
      posts: computed(() => AppState.posts),



    }
  }
}
</script>

<style scoped lang="scss">
.background-color {
  background-color: #0dcaf03a;
}
</style>
