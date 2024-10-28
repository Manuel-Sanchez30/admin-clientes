<script setup>
import Header from '@/components/UI/Header.vue';
import RouterLink from '@/components/UI/RouterLink.vue';

defineProps({
    titulo:{
        type: String,
        required: true,
    }
})

</script>

<template>
    <div>
        <Header>{{ titulo }}</Header>

        <RouterLink to="inicio">
            Volver
        </RouterLink>
        
    </div>
</template>



