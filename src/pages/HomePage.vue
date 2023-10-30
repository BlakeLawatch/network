<template>
  <div class="container-fluid">
    <section class="row">
      <div class="col-12">

        <div class="col-12 col-md-9 d-flex justify-content-around my-3">
          <ChangePageComponent />
          <!-- TODO fix the params -->
          <button data-bs-toggle="modal" data-bs-target="#formModal" title="Got somethin' to say?" class="btn tweet"><i
              class="mdi mdi-send-outline"></i></button>

          <!-- TODO fix the params -->
          <!-- <button :to="{ name: 'Search', params: { profileId: post.creator.id } }" class="btn btn-outline-danger"><i
              class="mdi mdi-magnify"></i></button> -->
          <!-- TODO fix the params -->
        </div>

        <!-- <div v-for="prop in props" :key="prop" class="col-12 col-md-3">
          <PromosComponent :promo="promos" />

        </div> -->

        <div v-for="post in posts" :key="post.id"
          class="col-12 col-md-9 ps-4 my-3 shadow background-color py-4 rounded ms-4">
          <PostCardComponent :post="post" />
        </div>
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
import PostCardComponent from '../components/PostCardComponent.vue';
import FormModal from '../components/FormModal.vue';
import ChangePageComponent from '../components/ChangePageComponent.vue';
// import PromosComponent from '../components/PromosComponent.vue';



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
  components: { PostCardComponent, FormModal, ChangePageComponent }
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
