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
            store,
            currentPage: 1,
            lastPage: null
        }
    },
    created() {
        this.getCars();
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