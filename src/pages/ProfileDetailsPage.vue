<template>
    <div class="container-fluid">
        <section class="row">


            <div v-if="profile" class="col-12">
                <div class="col-12 col-md-9">
                    <img v-if="profile.coverImg" class="cover-img" :src="profile.coverImg" :alt="profile.name">
                    <div class="d-flex justify-content-between">
                        <img class="creator-img rounded-circle" :src="profile.picture" :alt="profile.name">
                        <h2>{{ profile.name }}</h2>
                        <div class="fs-3">
                            <i v-if="profile.graduated" class="mdi mdi-account-school-outline"></i>
                            <h5 v-if="profile.class"> {{ profile.class }} </h5>
                            <i v-if="profile.linkedin" class="mdi mdi-linkedin" title="Go to my Linkedin"></i>
                            <i v-if="profile.resume" class="mdi mdi-file-account" title="Check out my resume"></i>
                            <i v-if="profile.github" class="mdi mdi-github" title="Go to my Github"></i>
                        </div>
                    </div>
                    {{ profile.bio }}
                </div>
                <div class="col-12 col-md-9 d-flex justify-content-around">
                    <button :disabled="!newer" @click="changePage(newer)" class="btn btn-outline-info">newer</button>

                    <button :disabled="!older" @click="changePage(older)" class="btn btn-outline-info">older</button>

                </div>
                <div v-for="post in posts" :key="post.id"
                    class="col-12 col-md-9 ps-4 my-3 shadow background-color py-4 rounded ms-4">
                    <PostCardComponent :post="post" />
                </div>

            </div>

        </section>
    </div>
</template>


<script>
import { computed, onMounted } from 'vue';
import { AppState } from '../AppState.js';
import Pop from '../utils/Pop';
import { useRoute } from 'vue-router';
import { profilesService } from '../services/ProfilesService.js';
import ChangePage from '../components/ChangePage.vue';
import { logger } from '../utils/Logger';
import { postsService } from '../services/PostsService';



export default {
    setup() {
        const route = useRoute();
        async function getActiveProfile() {
            try {
                const profileId = route.params.profileId;

                await profilesService.getActiveProfile(profileId);
            }
            catch (error) {
                Pop.error(error);
            }
        }

        async function getPostsById() {
            try {

                const profileId = route.params.profileId
                logger.log('this is the profile in the profileDetailsPage', profileId)

                await profilesService.getPostsById(profileId)

            } catch (error) {
                Pop.error(error)
            }
        }

        onMounted(() => {
            getActiveProfile();
            getPostsById()
        });
        return {
            profile: computed(() => AppState.profile),
            posts: computed(() => AppState.posts),

            async changePage(url) {

                try {
                    await postsService.changePage(url)

                } catch (error) {
                    Pop.error(error)
                }
            }


        };
    },
    // components: { ChangePage }
};
</script>


<style lang="scss" scoped>
.cover-img {
    height: 15vh;
    width: 100%;
    object-position: center;
    object-fit: cover;
}

.creator-img {
    height: 10vh;
    width: 10vh;
    object-fit: cover;
    object-position: center;
}

.background-color {
    background-color: #0dcaf03a;
}
</style>