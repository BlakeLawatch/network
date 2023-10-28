<template>
    <div class="container-fluid">
        <section class="row">
            <div class="col-12 col-md-2">
                {{ Promo }}
                <!-- <img :src="promo.banner" alt=""> -->
            </div>
        </section>
    </div>
</template>


<script>
import { promosService } from '../services/PromosService.js'
import { computed, onMounted } from 'vue';
import Pop from '../utils/Pop';
import { Promo } from '../models/Promo';
import { AppState } from '../AppState';




export default {
    props: { promo: { type: Promo, required: true } },
    setup() {
        async function getPromos() {
            try {
                await promosService.getPromos()

            } catch (error) {
                Pop.error(error)
            }
        }


        onMounted(() => {
            getPromos()
        })
        return {
            promos: computed(() => AppState.promos)
        }
    }
};
</script>


<style lang="scss" scoped></style>