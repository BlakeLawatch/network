<template>
  <header>
    <Navbar />
  </header>
  <main>
    <router-view />
    <div class="container">
      <section class="row">
        <div v-for="promo in promos" :key="promo.title">
          <PromosComponent :promo="promo" />
        </div>
      </section>
    </div>
  </main>
</template>

<script>
import { computed, onMounted } from 'vue'
import { AppState } from './AppState'
import Navbar from './components/Navbar.vue'
import { promosService } from './services/PromosService'
import Pop from './utils/Pop'
import PromosComponent from './components/PromosComponent.vue'



export default {


  setup() {
    async function getPromos() {
      try {
        await promosService.getPromos()

      } catch (error) {
        Pop.error(error)
      }
    }

    onMounted(() => getPromos())
    return {
      appState: computed(() => AppState),
      promos: computed(() => AppState.promos)

    }
  },
  components: { Navbar, PromosComponent }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

:root {
  --main-height: calc(100vh - 32px - 64px);
}


footer {
  display: grid;
  place-content: center;
  height: 32px;
}
</style>
