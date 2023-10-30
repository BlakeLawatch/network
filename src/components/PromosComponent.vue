<template>
    <div class="container-fluid">
        <section class="row">
            <div v-if="promo" class="d-flex my-2 product">

                <img class="mx-1 image-fluid" :src="promo.banner" alt="">

            </div>
        </section>
    </div>
</template>


<script>

import { computed, onMounted } from 'vue';

// import { Promo } from '../models/Promo';
import { AppState } from '../AppState';
import { Promo } from '../models/Promo';




export default {
    props: { promo: { type: Promo, required: true } },
    setup() {



        onMounted(() => {

        })
        return {
            promos: computed(() => AppState.promos)
        }
    }
};
</script>


<style lang="scss" scoped>
.product {
    height: 15vh;
    width: 60vw;
}
</style>