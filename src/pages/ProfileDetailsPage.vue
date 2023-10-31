<template>
    <div class="container-fluid">
        <section class="row">


            <div v-if="profile" class="col-12">
                <div class="col-12 col-md-9">
                    <img v-if="profile.coverImg" class="cover-img" :src="profile.coverImg" :alt="profile.name">
                    <div class="d-flex justify-content-between">
                        <img class="creator-img rounded-circle" :src="profile.picture" :alt="profile.name">
                        <h2>{{ profile.name }}</h2>
                        <div class="d-flex fs-3">
                            <i v-if="profile.graduated" class="mdi mdi-account-school-outline"></i>
                            <h5 v-if="profile.class"> {{ profile.class }} </h5>
                            <a :href="profile.linkedin"><i v-if="profile.linkedin" class="mdi mdi-linkedin"
                                    title="Go to my Linkedin"></i></a>
                            <a :href="profile.resume"><i v-if="profile.resume" class="mdi mdi-file-account"
                                    title="Check out my resume"> </i></a>
                            <a :href="profile.github"><i v-if="profile.github" class="mdi mdi-github"
                                    title="Go to my Github"> </i></a>
                        </div>
                        <div class="my-2">
                            <ChangePageComponent />

                        </div>
                    </div>
                    {{ profile.bio }}
                </div>
                <div>
                    <button v-if="account.id == profile.id" type="button" class="btn btn-primary my-2"
                        data-bs-toggle="modal" data-bs-target="#editProfile">
                        Edit
                        Profile
                    </button>

                </div>
                <EditProfileComponent />
                <div v-for="post in posts" :key="post.id"
                    class="col-12 col-md-9 ps-4 my-3 shadow background-color py-4 rounded ms-4">
                    <PostCardComponent :post="post" />
                </div>

            </div>

        </section>
    </div>
</template>


<script>
import { computed, onMounted, watchEffect } from 'vue';
import { AppState } from '../AppState.js';
import Pop from '../utils/Pop';
import { useRoute } from 'vue-router';
import { profilesService } from '../services/ProfilesService.js';
import ChangePageComponent from '../components/ChangePageComponent.vue';
import EditProfileComponent from '../components/EditProfileComponent.vue';
import { Profile } from '../models/Profile';




export default {
    props: { profileProp: { type: Profile, required: true } },
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
                const profileId = route.params.profileId;
                // logger.log('this is the profile in the profileDetailsPage', profileId);

                await profilesService.getPostsById(profileId);
            }
            catch (error) {
                Pop.error(error);
            }
        }



        onMounted(() => {
            getActiveProfile();
            getPostsById();
        });
        return {
            profile: computed(() => AppState.profile),
            posts: computed(() => AppState.posts),
            account: computed(() => AppState.account)
        };
    },
    components: { ChangePageComponent, EditProfileComponent }
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

