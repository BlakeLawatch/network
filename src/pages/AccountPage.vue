<template>
  <div class="about text-center">
    <h1>Welcome {{ account.name }}</h1>
    <img class="rounded" :src="account.picture" alt="" />
    <p>{{ account.email }}</p>
  </div>
  <section class="row">
    <form @submit.prevent="editAccount()">
      <div>
        <label for="name" class="form-label">Name</label>
        <input type="text" class="form-control" id="name">
      </div>
    </form>
    <div>
      <label for="coverImg" class="form-label">coverImg</label>
      <input type="url" class="form-control" id="coverImg">
    </div>
    <div>
      <label for="picture" class="form-label">picture</label>
      <input type="url" class="form-control" id="picture">
    </div>
    <div>
      <label for="github" class="form-label">Github</label>
      <input type="url" class="form-control" id="github">
    </div>
    <div>
      <label for="linkedin" class="form-label">Linkedin</label>
      <input type="url" class="form-control" id="linkedin">
    </div>
    <div>
      <label for="resume" class="form-label">Resume</label>
      <input type="url" class="form-control" id="resume">
    </div>
    <div>
      <label for="graduated" class="form-label">Graduated</label>
      <input type="checkbox" class="form-control" id="graduated">
    </div>
  </section>
</template>

this.name = data.name
this.picture = data.picture
this.bio = data.bio
this.coverImg = data.coverImg
this.github = data.github
this.linkedin = data.linkedin
this.resume = data.resume
this.class = data.class
this.graduated = data.graduated

<script>
import { computed } from 'vue';
import { AppState } from '../AppState';
export default {
  setup() {
    return {
      account: computed(() => AppState.account)

      // async editAccount(){
      // try {
      //   const accountData = editable.value
      // } catch (error) {
      //   Pop.error(error)
      // }
      //       }

    }
  }
}
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
