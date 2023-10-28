<template>
  <div class="container-fluid">
    <section class="row">
      <div class="col-12 col-md-9 d-flex justify-content-around my-3">
        <ChangePage />
        <button data-bs-toggle="modal" data-bs-target="#formModal" title="Got somethin' to say?" class="btn tweet"><i
            class="mdi mdi-send-outline"></i></button>
      </div>

      <div v-for="post in posts" :key="post.id"
        class="col-12 col-md-9 ps-4 my-3 shadow background-color py-4 rounded ms-4">
        <PostCardComponent :post="post" />
      </div>
      <div class="col-12 col-md-3">



      </div>
    </section>
  </div>
  <FormModal />
</template>



<script>
import { computed, onMounted } from 'vue';
import { postsService } from '../services/PostsService.js'
import { logger } from '../utils/Logger';
import { AppState } from '../AppState.js'
import ChangePage from '../components/ChangePage.vue';
import PostCardComponent from '../components/PostCardComponent.vue';
import FormModal from '../components/FormModal.vue';


export default {
  setup() {
    async function getPosts() {
      try {
        await postsService.getPosts();
      }
      catch (error) {
        logger.log(error);
      }
    }
    onMounted(() => {
      getPosts();
    });
    return {
      posts: computed(() => AppState.posts),
    };
  },
  components: { ChangePage, PostCardComponent, FormModal }
}
</script>

<style scoped lang="scss">
.background-color {
  background-color: #0dcaf03a;
}

.tweet {
  background-color: #0dcaf03a;
  border: 1px solid black;
}
</style>
