<template>
    <div class="modal fade" id="formModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Say it!</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form @submit.prevent="createComment()">
                        <div>
                            <label for="body" class="form-label">Comment</label>
                            <textarea v-model="editable.body" class="form-control" id="body" cols="15" rows="5" required
                                maxlength="5000"></textarea>
                        </div>
                        <div>
                            <label for="imgUrl" class="form-label">Image</label>
                            <input v-model="editable.imgUrl" type="url" class="form-control" id="imgUrl" maxlength="500">
                        </div>
                        <div class="modal-footer">
                            <button type="submit" class="btn btn-primary">Comment</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import { ref } from 'vue';
import { postsService } from '../services/PostsService';
import { Modal } from 'bootstrap';
import Pop from '../utils/Pop';


export default {
    setup() {
        const editable = ref({})
        return {
            editable,

            async createComment() {
                try {
                    const commentData = editable.value
                    await postsService.createComment(commentData)
                    editable.value = {}
                    Modal.getOrCreateInstance('#formModal').hide()

                } catch (error) {
                    Pop.error(error)
                }
            }
        }
    }
};
</script>


<style lang="scss" scoped></style>