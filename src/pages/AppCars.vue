<script>

import AppLoader from '../components/AppLoader.vue';
import axios from 'axios';
import { store  } from '../store.js';
import CarCard from '../components/CarCard.vue';

export default {
    name: 'AppCars',
    components: {
        CarCard,
        AppLoader
    },
    data() {
        return {
            cars: [],
            brands: [],
            store,
            currentPage: 1,
            lastPage: null,
            success: false
        }
    },
    created() {
        this.getCars();
        this.getBrands();
    },
    methods: {
        getCars(page_num){
            axios.get(`${this.store.baseUrl}/api/cars`, {
                params: {
                    page: page_num
                }
            }).then((response) => {
                this.cars = response.data.results.data;
                this.success = response.data.success;
                if(this.success){
                    setTimeout(() => {
                        this.success = false
                    },1000)
                }
                this.currentPage = response.data.results.current_page;
                this.lastPage = response.data.results.last_page;            })
        },
        getBrands(){
            axios.get(`${this.store.baseUrl}/api/brands`, {
            }).then((response) => {
                this.brands = response.data.results;            })
        },
    }
}
</script>
<template lang="">
    <AppLoader v-if="this.success"/>
    <div class="container mt-5" v-if="!this.success">
        <div class="row">
            <div class="col-12">
                <h2 class="text-center mt-4 fw-bold text-white pb-4">
                    Auto Disponibili 
                </h2>
            </div>

            <div class="col-12">
                <div class="accordion" id="accordionExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Filtra per Brand
                        </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <router-link :to="{ name: 'brand-car', params: { slug: brand.slug } }" class="btn btn-sm btn-dark me-2 mt-2 text-white text-decoration-none" v-for="brand, index in brands" :key="index" >
                                {{ brand.name }}
                            </router-link>
                        </div>
                        </div>
                    </div>
                </div>
            </div>





        </div>
        <div class="row mt-3">
            <CarCard v-for="car, index in cars" :key="index" :car="car"/>
        </div>
        <div class="row">
            <div class="col-12 d-flex justify-content-center ">
                <ul class="pagination mt-4">
                    <li>
                        <button :class="currentPage == 1 ? 'disabled' : ''" class="btn btn-sm btn-square btn-page mx-2" @click="getCars(currentPage - 1)">
                            <i class="fas fa-arrow-left"></i>
                        </button>
                    </li>
                    <li>
                        <button :class="currentPage == lastPage ? 'disabled' : ''" class="btn btn-sm btn-square btn-page" @click="getCars(currentPage + 1)">
                            <i class="fas fa-arrow-right"></i>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .btn-page {
        background-color: #D3D3D3;
        color: #000;
    }

    button.accordion-button {
    background-color: lightgray !important;
    color: black !important;
        
        &:focus {
        z-index: 3;
        border-color: lightgray;
        outline: 0!important;
        box-shadow: 0 0 0 0.25rem rgba(134, 134, 134, 0.25);
        }
    }
    .bg-button-rout{
        background-color: #252525;
        color: #fff;
        &:hover{

        }
    }

</style>