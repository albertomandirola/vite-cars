<script>

import axios from 'axios';
import { store  } from '../store.js';
import CarCard from '../components/CarCard.vue';

export default {
    name: 'BrandCar',
    components: {
        CarCard
    },
    data() {
        return {
            cars: [],
            brands: [],
            store,
            currentPage: 1,
            lastPage: null
        }
    },
    created() {
        this.getCars();
        this.getBrands();
    },
    methods: {
        getCars(page_num){
            axios.get(`${this.store.baseUrl}/api/cars/brand/${this.$route.params.slug}`, {
                params: {
                    page: page_num
                }
            }).then((response) => {
                this.cars = response.data.results.data;
                this.currentPage = response.data.results.current_page;
                this.lastPage = response.data.results.last_page;            })
        },
        getBrands(){
            axios.get(`${this.store.baseUrl}/api/brands`, {
            }).then((response) => {
                this.brands = response.data.results;            })
        },
        getBrandNameBySlug(slug) {
            let brandName = '';
            this.brands.forEach(brand => {
                if (brand.slug === slug) {
                    brandName = brand.name;
                }
            });
            return brandName;
        }
    }
}
</script>
<template lang="">
    <div class="container mt-5">
        <div class="row">
            <div class="col-12">
                <h2 v-if="cars.length > 0" class="text-center mt-4 fw-bold text-white">
                    Auto Disponibili per il brand
                <span class="text-uppercase bg-theme">
                    {{ getBrandNameBySlug( $route.params.slug ) }}
                </span>
                </h2>
                <h2 v-else class="text-center text-white">
                    Non ci sono auto disponibili per <span class="text-uppercase bg-theme">{{ getBrandNameBySlug( $route.params.slug ) }}</span> 
                </h2>
            </div>
        </div>
        <div class="row mt-3">
            <CarCard v-for="car, index in cars" :key="index" :car="car"/>
        </div>
        <div v-if="cars.length > 0" class="row">
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
        <div class="text-center">
            <!-- Router link to Cars list -->
            <router-link to="/cars" class="btn btn-sm btn-outline-light text-uppercase m-4">Torna alla lista delle auto</router-link>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .btn-page {
        background-color: #D3D3D3;
        color: #000;
    }

    .bg-theme{
        color: #C01A0C;
    }
</style>