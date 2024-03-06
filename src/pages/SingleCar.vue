<script>

import axios from 'axios';
import { store } from '../store.js';

export default {
    name: 'SingleCar',
    data() {
        return {
            store,
            car: null,
            success: false
        }
    },
    created() {
        this.getCarData();
    },
    methods: {
        getCarData() {
            axios.get(`${this.store.baseUrl}/api/cars/${this.$route.params.slug}`).then((response) => {
                if(response.data.success){
                    this.car = response.data.car;
                    this.success = response.data.success;
                }
                else {
                    this.$router.push({ name: 'not-found'});
                }
            });
        },
        getUrlImg(){
            let image;
            if (this.car.path_image != null) {
                image = 'storage/' + this.car.path_image;
            }
            else {
                image = 'storage/img/car-placeholder.png';
            }
            return `${this.store.baseUrl}/${image}`;
        }
    }
}
</script>
<template lang="">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h2 class="text-center pt-5 text-uppercase">
                    {{ car.model }}
                </h2>
            </div>
            <div class="col-6 pt-3">
                <p class="card-text "><strong>Descrizione:</strong> {{car.description}}</p>
                <p class="card-text "><strong> {{car.brand ? car.brand.name : 'Non definito'}}</strong></p>
                <p class="card-text "><strong>Anno:</strong> {{car.year}}</p>
                <p class="card-text "><strong>Alimentazione:</strong> {{car.type_of_engine}}</p>
                <p class="card-text "><strong>Cambio:</strong> {{car.type_of_gear}}</p>
                <p class="card-text "><strong>Porte:</strong> {{car.doors}}</p>
                <p class="card-text "><strong>Posti:</strong> {{car.seats}}</p>
                <p class="card-text "><strong>Kw:</strong> {{car.power}}</p>
                <p class="card-text "><strong>Colore:</strong> {{car.color}}</p>
                <p class="card-text "><strong>Descrizione:</strong> {{car.description}}</p>
                <p class="card-text"><strong>Prezzo:</strong> {{ car.price }} €</p>
            </div>
            <div class="col-6 pt-3">
                <img class="w-100" :src="getUrlImg()" alt="{{car.model}}">
            </div>
        </div>
            <h2 class="text-center pt-5" v-if="success == false">
                {{ error }}
            </h2>
    </div>
</template>
<style lang="scss" scoped>
    
</style>