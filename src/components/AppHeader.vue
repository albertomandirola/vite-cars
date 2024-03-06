<script>

import { store } from "../store.js";

export default {
    name: 'AppHeader',
    data() {
        return {
            store
        }
    },
}
</script>
<template lang="">
    <header>
        <div class="container-fluid">
            <div class="row">
                <div class="col-6 logo d-flex flex-direction">
                    <img src="/public/img/logo.png" alt="Royals Cars">
                    <h2 class="ps-4 pt-3 text-white">Royals Cars</h2>
                </div>
                <div class="col-6 d-flex justify-content-center">
                    <ul class="list-unstyled d-flex align-items-center mt-1">
                        <li class="pe-5 fw-bold" v-for="item, index in store.menuItems" :key="index">
                            <router-link :to="{ name: item.name }">{{ item.label }}</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
</template>
<style lang="scss" scoped>
    header {
        height: 110px;
        padding: 20px 0px;
        background-color: #110F16;

        .logo {
        img {
            width: 150px;
        }
        }
        ul {
            li {
                a {
                    color: #fff;
                    text-decoration: none;

                    &:hover{
                        color:  rgb(149, 149, 149);;
                    }
                }

            }
        }
    }
</style>