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
            if (this.car.path_image != null) {
                image = 'storage/' + this.car.path_image;
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
    <div class="col-12 col-md-6 col-lg-4 my-3">
    <router-link class="text-decoration-none" :to="{ name: 'single-car', params: { slug: car.slug } }">
    <div class="card shadow h-100">
        <img class="rounded-top-1 bg-secondary" :src="getUrlImg()">
        <div class="card-body">
            <h5 class="card-title text-center my-2 text-uppercase">{{car.model}}</h5>
            <p class="card-text "><strong> {{car.brand ? car.brand.name : 'Non definito'}}</strong></p>
            <p class="card-text "><strong>Descrizione:</strong> {{car.description ? car.description.substr(0,70)+"..." : 'Non definito'}}</p>
            <p class="card-text"><strong>Prezzo:</strong> {{ car.price ? car.price : '0'}} €</p>
        </div>
    </div>
    </router-link>
</div>
</template>
<style lang="scss" scoped>
.card {
    transition: transform 0.3s;

    &:hover {
        transform: scale(1.05);

    }
}    
</style>