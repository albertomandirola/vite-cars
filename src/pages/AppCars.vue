<script>

import axios from 'axios';
import { store  } from '../store.js';
import CarCard from '../components/CarCard.vue';

export default {
    name: 'AppCars',
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
            axios.get(`${this.store.baseUrl}/api/cars`, {
                params: {
                    page: page_num
                }
            }).then((response) => {
                this.cars = response.data.results.data;
                this.currentPage = response.data.results.current_page;
                this.lastPage = response.data.results.last_page;
                console.log(this.cars);
            })
        },
        getBrands(){
            axios.get(`${this.store.baseUrl}/api/brands`, {
            }).then((response) => {
                this.brands = response.data.results;
                console.log(response);
            })
        }
    }
}
</script>
<template lang="">
    <div class="container mt-5">
        <div class="row">
            <div class="col-12">
                <h2 class="text-center mt-4 fw-bold">
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
                            <!-- <router-link :to="{ name: 'type-projects', params: { slug: type.slug } }" class="badge rounded-pill me-2 bg-color-black" v-for="type, index in types" :key="index" >
                                {{ type.name }}
                            </router-link> -->
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
        background-color: #252525;
        color: #fff;
    }
</style>