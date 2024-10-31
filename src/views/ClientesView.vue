<script setup>

import { onMounted, ref } from "vue";
import axios from "axios";
import RouterLink from '@/components/UI/RouterLink.vue';
import Header from '../components/UI/Header.vue';

defineProps({
    titulo:{
        type: String,
        required: true,
    }
})

const URL = 'http://localhost:4000/clientes';
const clientes = ref([])

onMounted(()=>{
    axios.get(URL)
        .then(({data}) => clientes.value = data)
})

</script>

<template>
    <div>
        
        <div class="flex justify-end">
            <RouterLink to="agregar-cliente">
                Agregar Cliente
            </RouterLink>
        </div>
        
        <Header>{{ titulo }}</Header>
    </div>
</template>



