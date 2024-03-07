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
                    console.log(this.car)
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
    <div class="container car-card mt-5 ps-4">
        <div class="row">
            <div style="width: 100%" class="col-12">
                <h2 class="text-center pt-5 text-uppercase">
                    {{ car.model }}
                </h2>
            </div>
            <div  class="col-4">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Dettagli</th>
                            <th scope="col"></th>
                            
                        </tr>
                    </thead>
                    <tbody>
                            <tr>
                                <th scope="row">Modello:</th>
                                <td>{{ car.model ? car.model : 'Non definito' }}</td>
                                
                            </tr>
                             <tr>
                                <th scope="row">Brand:</th>
                                <td>{{ car.brand ? car.brand.name : 'Non definito' }}</td>
                                
                            </tr>
                            <tr>
                                <th scope="row">Anno:</th>
                                <td>{{ car.year ? car.year : 'Non definito' }}</td>
                                
                            </tr>
                            <tr>
                                <th scope="row">Targa:</th>
                                <td>{{ car.plate ? car.plate : 'Non definito' }}</td>
                                
                            </tr>
                            <tr>
                                <th scope="row">Alimentazione:</th>
                                <td>{{ car.type_of_engine ? car.type_of_engine : 'Non definito' }}</td>
                                
                            </tr>
                            <tr>
                                <th scope="row">Numero di telaio:</th>
                                <td>{{ car.n_chassis ? car.n_chassis : 'Non definito' }}</td>
                            </tr>
                            <tr>
                                <th scope="row">Description:</th>
                                <td>{{ car.description ? car.description : 'Non definito' }}</td>
                                
                            </tr>
                            <tr>
                                <th scope="row">Posti:</th>
                                <td>{{ car.seats ? car.seats : 'Non definito' }}</td>
                                
                            </tr>
                            <tr>
                                <th scope="row">Porte:</th>
                                <td>{{ car.doors ? car.doors : 'Non definito'}}</td>
                        
                            </tr>
                            <tr>
                                <th scope="row">Colore:</th>
                                <td>{{ car.colors ? car.colors : 'Non definito'}}</td>
                        
                            </tr>
                            <tr>
                                <th scope="row">N.Cavalli:</th>
                                <td>{{ car.power ? car.power : 'Non definito'}}</td>
                            </tr>
                            <tr>
                                <th scope="row">Optionals</th>
                                <td><span v-for='(optional,index) in car.optionals' :key='index' >{{  optional.name }},</span></td>
                            </tr>

                    </tbody>
                </table>
            </div>
            <div class="col-6 pt-3">
                <img class="w-100" :src="getUrlImg()" :alt='car.model'>
            </div>
            <div class="col-12">
                <div class="text-center">
                    <!-- Router link to Cars list -->
                    <router-link to="/cars" class="btn btn-sm btn-outline-light text-uppercase m-4">Torna alla lista delle auto</router-link>
                </div>
            </div>
        </div>
            <h2 class="text-center pt-5" v-if="success == false">
                {{ error }}
            </h2>
    </div>
</template>
<style lang="scss" scoped>
    .car-card{
        background: rgba(0, 0, 0, 0.5);
        border-radius: 16px;
        color: white;
        border: 2px solid #000;
    }
</style>