<script setup>
import Header from '@/components/UI/Header.vue';
import RouterLink from '@/components/UI/RouterLink.vue';
import {FormKit} from '@formkit/vue'

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
            <RouterLink to="inicio">
                Volver
            </RouterLink>
        </div>

        <Header>{{ titulo }}</Header>

        <div class="mx-auto mt-10 bg-white shadow">
            <FormKit type="form">

            </FormKit>
        </div>
        
    </div>
</template>



