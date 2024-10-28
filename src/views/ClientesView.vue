<script setup>
import RouterLink from '@/components/UI/RouterLink.vue';
import Header from '../components/UI/Header.vue';

defineProps({
    titulo:{
        type: String,
        required: true,
    }
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



