<template>
    <div class="modal fade" id="editProfile" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Edit Profile</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form @submit.prevent="editProfile()">
                        <div>
                            <label for="name" class="form-label">Profile Name</label>
                            <input v-model="editable.name" class="form-control" id="name" type="text" maxlength="5000">
                        </div>
                        <div>
                            <label for="picture" class="form-label">Profile picture</label>
                            <input v-model="editable.picture" class="form-control" id="picture" type="url" name="picture"
                                maxlength="5000">
                        </div>
                        <div>
                            <label for="coverImg" class="form-label">Cover Image</label>
                            <input v-model="editable.coverImg" class="form-control" id="coverImg" type="url"
                                maxlength="5000">
                        </div>
                        <div>
                            <label for="bio" class="form-label">Bio</label>
                            <input v-model="editable.bio" class="form-control" id="bio" type="text" maxlength="5000">
                        </div>
                        <div>
                            <label for="graduated">Graduated?</label>
                            <input v-model="editable.graduated" class="checkbox" id="graduated" type="checkbox">
                        </div>
                        <div>
                            <label for="class" class="form-label">class?</label>
                            <input v-model="editable.class" class="form-control" id="class" type="number" maxlength="2024">
                        </div>
                        <div>
                            <label for="linkedin" class="form-label">linkedin</label>
                            <input v-model="editable.linkedin" class="form-control" id="linkedin" type="url"
                                maxlength="5000">
                        </div>
                        <div>
                            <label for="resume" class="form-label">resume</label>
                            <input v-model="editable.resume" class="form-control" id="resume" type="url" maxlength="5000">
                        </div>
                        <div>
                            <label for="github" class="form-label">github</label>
                            <input v-model="editable.github" class="form-control" id="github" type="url" maxlength="5000">
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="submit" class="btn btn-primary">Save changes</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>




<script>
import { computed, ref } from 'vue';
import { profilesService } from '../services/ProfilesService';
import { Modal } from 'bootstrap';
import Pop from '../utils/Pop';
import { AppState } from '../AppState';




export default {
    setup() {

        // watchEffect(() => {
        //     if (AppState.profile) {
        //         editable.value = { ...AppState.profile }
        //     }
        //     else editable.value = {}
        // })
        const editable = ref({})
        return {
            editable,
            profile: computed(() => AppState.profile),
            account: computed(() => AppState.account),




            async editProfile() {
                try {
                    const editData = editable.value


                    await profilesService.editProfile(editData)
                    Modal.getOrCreateInstance('#editProfile').hide()

                } catch (error) {
                    Pop.error(error)
                }
            }
        }
    }
};
</script>


<style lang="scss" scoped></style>