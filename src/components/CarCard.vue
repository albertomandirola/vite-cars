<script>
import { store } from '../store';
export default {
    name: 'CarCard',
    props: {
        car: Object
    },
    data() {
        return {
            store
        }
    },
    created() {
        
    },
    methods: {
        getUrlImg(){
            let image;
            if (this.car.photos != null) {
                image = 'storage/' + this.car.photos;
            }
            else {
                image = 'storage/img/car-placeholder.png';
            }
            return `${this.store.baseUrl}/${image}`;
        },
    },
}
</script>
<template lang="">
    <div class="col-4">
    <!-- <router-link :to="{ name: 'single-project', params: { slug: project.slug } }"> -->
    <div class="card my-3 shadow">
        <img class="rounded-top-1 bg-secondary" :src="getUrlImg()">
        <div class="card-body">
            <h5 class="card-title text-center my-2">{{car.model}}</h5>
            <!-- <p class="card-text "><strong></strong> {{car.brand.name}}</p> -->
            <p class="card-text "><strong>Descrizione:</strong> {{car.description.substr(0,70)+"..."}}</p>
            <p class="card-text"><strong>Prezzo:</strong> {{ car.price }} €</p>
        </div>
    </div>
    <!-- </router-link> -->
</div>
</template>
<style lang="">
    
</style>